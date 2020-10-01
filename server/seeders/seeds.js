const faker = require('faker');
const db = require('../config/connection');
const { Test } = require('../models');

db.once('open', async () => {
    await Test.deleteMany({});

    // create user data
    const testData = [];

    for (let i = 0; i < 20; i++) {
        const menu = faker.company.menu("http://www.narrabistro.com/menu.html");


        testData.push({ menu });
    }
    await Test.collection.insertMany(testData);

    console.log('all done!');
    process.exit(0);
});
