const { User } = require('../models');
const resolvers = {
  Query: {
    users: async () => {
      return User.find().select('-_v -password');
    }
  }
};

module.exports = resolvers;