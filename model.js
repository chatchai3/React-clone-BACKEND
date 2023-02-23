const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/db ',{
  useNewUrlParser:true, useUnifiedTopology:true
})
.then(result => console.log("Ok"))
.catch(err=>console.log("err"))

let std = new mongoose.Schema({
    title: String,
    dis: String,
    Author:String
})
let std_data = mongoose.model("data",std)
module.exports = std_data