const Order = require('../models/order');
const mongoose = require('mongoose');


module.exports = async () => {
    const order = {
        order_items: [
            mongoose.Types.ObjectId('5f16a19e8f5bfb54ac87f729'),
            mongoose.Types.ObjectId('5f16a19e8f5bfb54ac87f72a'),
            mongoose.Types.ObjectId('5f16a19e8f5bfb54ac87f72b'),
            mongoose.Types.ObjectId('5f16a19e8f5bfb54ac87f730'),
            mongoose.Types.ObjectId('5f16a19e8f5bfb54ac87f731'),
            mongoose.Types.ObjectId('5f16a19e8f5bfb54ac87f732'),
            mongoose.Types.ObjectId('5f16a19e8f5bfb54ac87f733'),
            mongoose.Types.ObjectId('5f16a19e8f5bfb54ac87f734'),
            mongoose.Types.ObjectId('5f16a19e8f5bfb54ac87f740'),
            mongoose.Types.ObjectId('5f16a19e8f5bfb54ac87f741'),
        ],
        user: '',
        net_total: 1599.56
    }

    const res = await Order.create(order);
    console.log(res);
    
}