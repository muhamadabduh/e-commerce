const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    name: String,
    description: String,
    price: Number,
    stock: Number,
    img: String,
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item