
const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    store: {
        type: mongoose.Types.ObjectId,
        ref: 'store'
    }
})

module.exports = mongoose.model("item", itemSchema);
