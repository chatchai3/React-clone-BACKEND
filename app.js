var express = require('express')
const mongoose = require('mongoose')
const products = require("./Routes/Products.js")
const Amine = require('./Routes/Anaimes.js')
var cors = require('cors')
var app = express()


mongoose.Promise= global.Promise;
mongoose.connect("mongodb+srv://admin:chatchai3@cluster1.j6mjll3.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
      console.log("connection successfully")
    })
    .catch((err)=>{
      console.error(err)
    })
app.use(cors())
app.use(express.json())

app.use('/products',products)
app.use('/anime',Amine)


app.listen(4000, async function () {
    console.log('CORS-enabled web server listening on port 4000')
})
  

app.get('/data',async(req, res)=> {
    //await storage.connect('./information.json');
    //await check();
    res.status(200).send(storage.state)  
  })
  
