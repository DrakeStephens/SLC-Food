const { User, Restaurant } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .select('-_v -password')
      .populate('restaurants');
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
    restaurant: async (parent, { _id }) => {
      return Restaurant.findOne({ _id });
    },
    restaurants: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Restaurant.find(params).sort({ createdAt: -1 });
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
    addRestaurant: async (parent, args, context) => {
      if (context.user) {
        const restaurant = await Restaurant.create({ ...args, username: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { restaurants: restaurant._id } },
          { new: true }
        );
    
        return restaurant;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },


  }
};

module.exports = resolvers;