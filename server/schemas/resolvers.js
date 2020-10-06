const { User, Resturaunt } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .select('-_v -password')
      .populate('resturaunts');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    resturaunts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Resturaunt.find(params).sort({ createdAt: -1 });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addResturaunt: async (parent, args, context) => {
      if (context.user) {
        const resturaunt = await Resturaunt.create({ ...args, username: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { resturaunts: resturaunt._id } },
          { new: true }
        );
    
        return resturaunt;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },


  }
};

module.exports = resolvers;