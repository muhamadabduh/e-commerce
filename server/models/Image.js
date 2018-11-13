const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    url: String
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image