const { Test } = require('../models');
const resolvers = {
  Query: {
    Test: async () => {
      return await Test.find();
    }
  }
}

module.exports = resolvers;