const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    createdAt: Date,
    total: Number,
    items: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart