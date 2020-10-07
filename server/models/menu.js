const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedMenu` array in User.js
const menuSchema = new Schema({
    menu: [
        {
            type: String,
        },
    ],
    description: {
        type: String,
        required: true,
    },

    menuId: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    },
});

module.exports = menuSchema;