const faker = require('faker');
const db = require('../config/connection');
const { MenuItem } = require('../models');

db.once('open', async () => {
    await MenuItem.deleteMany({});

    // create MenuItem data
    const menuItemData = [];

    for (let i = 0; i < 20; i++) {
        const username = faker.name.findName();
        const discription = faker.lorem.MenuItem();
        const price = faker.random.finance();



        menuItemData.push({ username, discription, price });
    }

    await MenuItem.insertMany(menuItemData);

    console.log('all done!');
    process.exit(0);
});
