const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    order_items: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "item"
    }],
    user: String,
    net_total: Number
},
{ 
    timestamps:
        { createdAt: 'created_at',
          updatedAt: 'updated_at'
        } 
}
)

module.exports = mongoose.model("orders", orderSchema);
