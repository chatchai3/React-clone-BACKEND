const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const product = require("../models/Product.js")
const Storage = require('node-storage')
const store = new Storage('../Store')


router.get('/',(req,res,next)=>{
    product.find((err,product)=>{
        if(err) return next(err);
        store.put('data',product)
        res.json(store.get('data'));
    })

})
router.post('/',(req,res,next)=>{
    product.create(req.body,(err,post)=>{
        if(err) return next(err);
        res.json(post)
    })
})
module.exports = router;