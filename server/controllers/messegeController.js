const Conversation = require("../models/conversationModel")
const Messege = require("../models/messegeModel")

const addmessege=async(req,res)=>{
    
    try{
        const{senderId,receiverId,conversationId,type,text}=req.body
        await Conversation.findByIdAndUpdate(conversationId,{messege:text},{new:true})
     const newMessege=await new Messege({senderId,receiverId,conversationId,type,text})
        newMessege.save()
        res.status(200).json({
            msg:"messege send successfull",
            newMessege
        })
    }
    catch(err){
        res.status(500).json({
            msg:err
        })
    }
}

const getMessege=async(req,res)=>{
    try{
     const {id}=req.params
     console.log(id,"id")
        const messeges=await Messege.find({conversationId:id}).exec()
        res.status(200).json({
            messeges
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            msg:err,
        })
    }
}

module.exports={addmessege,getMessege}