const mongoose = require('mongoose')

const AnemeScheme = new mongoose.Schema({
    Title:String,
    Img:String
})
module.exports = mongoose.model('Aneme',AnemeScheme)