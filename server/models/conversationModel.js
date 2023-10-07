const mongoose=require('mongoose')

const conversationSchema=new mongoose.Schema({
    members:{
        type:Array
    },
    messege:{
        type:String
    }
},
{
    timeStamps:true
}
)
const Conversation=mongoose.model('conversation',conversationSchema)

module.exports=Conversation