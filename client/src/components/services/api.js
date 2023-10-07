import axios from 'axios'
const url='http://localhost:4000'
const addUser=async(data)=>{
    try{

       await axios.post(`${url}/add-user`,data)
    //    console.log(res.data,"res")
    }
    catch(err){
        console.log("Error while add User in this api",err.messege)
    }

}
const GetUser=async()=>{
    try{

       const res= await axios.get(`${url}/get-user`)
    //    console.log(res.data.user,"res")
       return res.data.user
    }
    catch(err){
        console.log("Error while get User in this api",err)
    }

}
const UserConversation=async(data)=>{
    // console.log(data)
    try{
        const conversation=await axios.post(`${url}/setconversation`,data)
        // console.log(conversation)
    }
    catch(err){
        console.log("Error while set converstaion in this api",err)

    }
}
const GetUserConversation=async(data)=>{
    // console.log(data)
    try{
        const res=await axios.post(`${url}/getconversation`,data)
        return res.data
    }
    catch(err){
        console.log("Error while get Conversation in this api",err)

    }
}
const newMessege=async(data)=>{
    // console.log(data)
    try{
        const res=await axios.post(`${url}/addmessege`,data)
        return res.data
    }
    catch(err){
        console.log("Error while new Messege in this api",err)

    }
}
const getMessege=async(id)=>{
    console.log(id,"id")
    try{
        const res=await axios.get(`${url}/getmessege/${id}`)
        return res.data
    }
    catch(err){
        console.log("Error while getMessege in this api",err)

    }
}
export {addUser,GetUser,UserConversation,GetUserConversation,newMessege,getMessege}