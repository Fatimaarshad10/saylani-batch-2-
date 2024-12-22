const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    description : String,
    picture : String,
    price : Number,
    rating : Number
})

module.exports = mongoose.model('Product', ProductSchema)