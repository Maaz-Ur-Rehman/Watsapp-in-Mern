const express=require('express')
const { addmessege ,getMessege} = require('../controllers/messegeController')
const route=express.Router()
route.post('/addmessege',addmessege)
route.get('/getmessege/:id',getMessege)

module.exports=route