const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Anime = require("../models/Anime.js")
const cors = require('cors')
const Storage = require('node-storage')
const store = new Storage('../Store')


router.get('/',(req,res,next)=>{
    Anime.find((err,product)=>{
        if(err) return next(err);
        store.put('data-Amine',product)
        res.json(store.get('data-Amine'));
    })

})
router.post('/',(req,res,next)=>{
    Anime.create(req.body,(err,post)=>{
        if(err) return next(err);
        res.json(post)
    })
})
module.exports = router;