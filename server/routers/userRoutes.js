const express=require('express')
const route=express.Router()
const userController=require('../controllers/userController')
route.post('/add-user',userController.addUser)
route.get('/get-user',userController.getUser)

module.exports=route