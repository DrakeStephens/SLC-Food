const { Schema, model } = require('mongoose');
const menuItemSchema = require('./MenuItem');

const restaurantSchema = new Schema(
  {
<<<<<<< HEAD:server/models/Restaurant.js
    restaurantName: {
=======
    username: {
      type: String,
      required: true
    },
    resturauntName: {
>>>>>>> 017f6d00716d2df4ba99895f0d6e8f6ae20b958e:server/models/Resturaunt.js
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