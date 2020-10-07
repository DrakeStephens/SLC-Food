const { Schema } = require('mongoose');

const menuItemSchema = new Schema(
  {
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
    username: {
      type: String,
      required: true
    }
  }
);

module.exports = menuItemSchema;