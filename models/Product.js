const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    Title:String,
    Img:String
})
module.exports = mongoose.model('Product',ProductSchema)