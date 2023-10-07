const Conversation = require("../models/conversationModel")

const addConversation=async(req,res)=>{
    try{
        const {senderId,recieverId}=req.body
        const exist = await Conversation.findOne({ members: { $all: [senderId,recieverId] } }).exec();

        if(exist){
         return   res.status(200).json({
                msg:"conversation already exist",
                exist
            })
        }
        const newConversation=await new Conversation({
            members:[senderId,recieverId]
        })
        newConversation.save()
        return res.status(200).json({
            msg:"saved Conversation",
            newConversation
        })   
    }
    catch(err){
      return  res.status(500).json({
            msg:err
        });
    }
}
const getConversation=async(req,res)=>{

    const {senderId,recieverId}=req.body
    // console.log({req.body.recieverId})
    try{
        const data = await Conversation.findOne({ members: { $all: [senderId,recieverId] } }).exec();
        console.log(data)
        res.status(200).json({
            msg:"conversation get successfull",
            data
            // conversation
        })
    }
    catch(err){
        res.status(500).json({
            msg:err
        })
    }
}
module.exports= {getConversation,addConversation}