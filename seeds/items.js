const Item = require('../models/item');
const mongoose = require('mongoose');
const item = require('../models/item');

module.exports = async () => {
    const store1 = mongoose.Types.ObjectId('5f16a1390b38135850724f2c');
    const store2 = mongoose.Types.ObjectId('5f16a1390b38135850724f2d');
    const store3 = mongoose.Types.ObjectId('5f16a1390b38135850724f2e');
    const items = [
        {
            name: 'paneer tikka',
            price: 279,
            rating: 3.4,
            store: store1
        },
        {
            name: 'chesseburger',
            price: 200,
            rating: 3.1,
            store: store1
        },
        {
            name: 'egg omelete',
            price: 79,
            rating: 2.4,
            store: store1
        },
        {
            name: 'paneer tikka masala',
            price: 279,
            rating: 3.4,
            store: store1
        },
        {
            name: 'pizza sandwich',
            price: 119,
            rating: 2.4,
            store: store1
        },
        {
            name: 'chocalate overload sandwich',
            price: 349,
            rating: 4.4,
            store: store1
        },
        {
            name: 'fried rice',
            price: 179,
            rating: 2.5,
            store: store1
        },
        {
            name: 'pasta',
            price: 149,
            rating: 4.4,
            store: store1
        },
        {
            name: 'missal tikka',
            price: 129,
            rating: 3.4,
            store: store1
        },
        {
            name: 'vada pav',
            price: 29,
            rating: 4.4,
            store: store1
        },
        {
            name: 'Paneer tika',
            price: 229,
            rating: 3.3,
            store: store2
        },
        {
            name: 'paneer tikka Massala',
            price: 149,
            rating: 2.7,
            store: store2
        },
        {
            name: 'chesse burger',
            price: 150,
            rating: 2.1,
            store: store2
        },
        {
            name: 'Egg omelette',
            price: 59,
            rating: 2.6,
            store: store2
        },
        {
            name: 'Pizza Sandwhich',
            price: 139,
            rating: 3.7,
            store: store2
        },
        {
            name: 'chocalate overloaded Sandwich',
            price: 449,
            rating: 4.7,
            store: store2
        },
        {
            name: 'fried Rice',
            price: 139,
            rating: 2.8,
            store: store2
        },
        {
            name: 'pasta',
            price: 149,
            rating: 4.4,
            store: store2
        },
        {
            name: 'missal tikkka',
            price: 179,
            rating: 3.7,
            store: store2
        },
        {
            name: 'Vada Pav',
            price: 29,
            rating: 4.4,
            store: store2
        },
        {
            name: 'Paneer Tikka',
            price: 229,
            rating: 3.3,
            store: store3
        },
        {
            name: 'Paneer Tikka Masala',
            price: 189,
            rating: 3.7,
            store: store3
        },
        {
            name: 'ChesseBurger',
            price: 200,
            rating: 3.1,
            store: store3
        },
        {
            name: 'Egg Omelete',
            price: 110,
            rating: 2.8,
            store: store3
        },
        {
            name: 'Pizza Sandwich',
            price: 139,
            rating: 3.9,
            store: store3
        },
        {
            name: 'Chocalate Overload Sandwhich',
            price: 339,
            rating: 4.2,
            store: store3
        },
        {
            name: 'Fried Rice',
            price: 179,
            rating: 2.9,
            store: store3
        },
        {
            name: 'Pasta',
            price: 129,
            rating: 3.4,
            store: store3
        },
        {
            name: 'Misal tikka',
            price: 119,
            rating: 3.7,
            store: store3
        },
        {
            name: 'Vada paav',
            price: 49,
            rating: 4.8,
            store: store3
        }
    ]

    const res = await Item.collection.insertMany(items);
    console.log(res);
}