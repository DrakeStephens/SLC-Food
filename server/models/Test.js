const mongoose = require('mongoose');

const { Schema } = mongoose;

const testSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
