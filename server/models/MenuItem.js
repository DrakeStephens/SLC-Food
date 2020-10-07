const { Schema } = require('mongoose');

const menuItemSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      maxlength: 280
    },
    price: {
      type: String,
      required: true,
      maxlength: 280
    },

  }
);

module.exports = menuItemSchema;