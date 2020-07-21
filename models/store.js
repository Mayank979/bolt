
const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    name: String
})

module.exports = mongoose.model("store", storeSchema);
