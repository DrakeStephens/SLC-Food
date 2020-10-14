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
    addMenu: async (parent, { restaurantId, item, description, price }, context) => {
      if (context.user) {
        const updatedRestaurant = await Restaurant.findOneAndUpdate(
          { _id: restaurantId },
          { $push: { menuItems: { item, description, price, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedRestaurant;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    editRestaurant: async (parent, { restaurantName, description }, context) => {
      if (context.restaurant) {
        const editRestaurant = await Restaurant.findByIdAndUpdate(
          { _id: restaurantId },
          { $push: { Restaurant: { restaurantName, description, username: context.user.username } } },
          { new: true, runValidators: true },
        );

        return editRestaurant;
      }
    },
    editMenu: async (parent, { restaurantId, item, description, price }, context) => {
      if (context.menu) {
        const editMenu = await Menu.findOneAndUpdate(
          { _id: restaurantId },
          { $push: { menuItems: { item, description, price, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return editMenu;
      }
    },
    deleteRestaurant: async (parent, { restaurantName, description }, context) => {
      const user = await User.findByIdAndDelete({ ...args, username: context.user.username });
      if (!updatedUser) {
        throw new AuthenticationError('Could not find user with this ID!')
      }
    },
    deleteMenu: async (parent, { restaurantId, item, description, price }, context) => {
      const user = await User.findByIdAndDelete({ restaurantId, item, description, price });
      if (!updatedUser) {
        throw new AuthenticationError('Could not find user with this ID!')
      }
    },
  }
};

module.exports = resolvers;