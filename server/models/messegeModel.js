const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messegeSchema = new Schema({
  senderId: {
    type: String,
  },

  receiverId: {
    type: String,
  },
  conversationId: {
    type: String,
  },
  type: {
    type: String,
  },
  text: {
    type: String,
  },
},{ 
  timestamps: true
});
const Messege = mongoose.model("messege", messegeSchema);
module.exports = Messege;
