const { Schema, model } = require('mongoose');
const menuItemSchema = require('./MenuItem');

const resturauntSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    resturauntName: {
      type: String,
      required: 'You need to leave a resturaunt name!',
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

const Resturaunt = model('Resturaunt', resturauntSchema);

module.exports = Resturaunt;