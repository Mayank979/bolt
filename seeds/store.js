const Store = require('../models/store');

module.exports = async () => {
    const stores = [
        {
            name: 'Mcdonald'
        },
        {
            name: 'Subway'
        },
        {
            name: 'PizzaHut'
        }
    ]
    
    const res = await Store.collection.insertMany(stores)
    console.log(res);
}