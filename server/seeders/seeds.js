const faker = require('faker');
const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});

    // create user data
    const userData = [];

    for (let i = 0; i < 20; i++) {
        const name = faker.name.findName();
        const email = faker.internet.email();
        const password = faker.internet.password();


        userData.push({ name, email, password });
    }

    await User.collection.insertMany(userData);

    console.log('all done!');
    process.exit(0);
});
