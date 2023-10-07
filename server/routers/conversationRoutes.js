const express=require('express')
const route=express.Router()
const conversationController=require('../controllers/conversationController')
route.post('/setconversation',conversationController.addConversation)
route.post('/getconversation',conversationController.getConversation)
module.exports=route