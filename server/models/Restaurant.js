const { Schema, model } = require('mongoose');
const menuItemSchema = require('./MenuItem');

const restaurantSchema = new Schema(
  {
    restaurantName: {
      type: String,
      required: 'You need to leave a restaurant name!',
      minlength: 1,
      maxlength: 280
    },
    description: {
      type: String,
      required: 'You need to leave a description!',
      minlength: 1,
      maxlength: 280
    },
    url: {
      type: String,
      minlength: 1,
      maxlength: 280
    },

    savedmenuItems: [menuItemSchema],
  }
);

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;