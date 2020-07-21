const mongoose = require('mongoose');
const Item = require('../models/item');
const Order = require('../models/order');

module.exports = app => {
    app.get('/', (req, res) => {
        res.render('home', {items: [], searchTerm: '', itemArr: []});
    })

    app.post('/items', async (req, res) => {
        const {
            items
        } = req.body;

        let itemsResult = [];

        let itemArr = items.split(',');
        itemArr = itemArr.map( item => item.trim());
        let itemDocsPromise = [];
        let orderPromises = [];
        itemArr.forEach( item => {
            const res = Item.find({"name": {$regex: item, $options: 'i m'}}).populate('store');
            const orderRes = Order
                .find({})
                .populate({
                    path: 'order_items',
                    match: { "name": {$regex: item, $options: 'i m'}},
                    populate: { 
                        path: 'store'
                    }
                }).exec()
            itemDocsPromise.push(res)
            orderPromises.push(orderRes);
        })

        const itemDocs = await Promise.all(itemDocsPromise);
        const orderResult = await Promise.all(orderPromises);
    
        //console.log(orderResult);

        // orderResult.forEach(res => {
        //     console.log(res[0].order_items);
            
        // })
        

        itemDocs.forEach( (items, index) => {
            let obj = {};
            
            if (items.length) {
                let eco = items[0].price;
                let mp = items[0].rating;
                items.forEach(i => {
                    if (i.rating >= mp) {
                        obj['popular'] = i;
                    }
                    if (i.price <= eco) {
                        obj['economical'] = i;
                    }
                })
            } else {
                obj['NA'] = true
            }
            if (orderResult[index][0]) {
                obj['ordered'] = orderResult[index][0].order_items[0];
            } else {
                obj['ordered'] = {};
            }
            itemsResult.push(obj)
        })

        console.log(itemsResult);
        
        
        res.render('home', {items: itemsResult, searchTerm: items, itemArr})
    })
}