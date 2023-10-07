const User  = require("../models/userModel")

const addUser=async(req,res)=>{
    try{
        console.log(req.body.sub)
        const existuser = await User.findOne({ sub: req.body.sub }).exec();
// console.log(existuser);

        if (existuser) {
            return res.status(402).json({
              msg: "user already exist"
            });
          }
          
          const newUser = new User(req.body);
          newUser.save();
          return res.status(200).json({
            msg: "user successfully added",
            newUser
          });
          
    }
    catch(err){
        return res.status(500).json({
            msg: err.messege,
          });
    }
}
const getUser=async(req,res)=>{
    try{
        const user= await User.find({})
       return res.status(200).json({
            msg:"user successfully get",
            user
        })
    }
    catch(err){
        return res.status(500).json({
            msg: err.messege,
          });
    }
}

module.exports= {addUser,getUser}