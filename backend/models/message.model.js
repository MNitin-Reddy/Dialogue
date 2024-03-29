import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId, //to access the mongoose models
        ref:"User",
        required:true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required: true
    }
},{timestamps: true}); //timestamps true to get createdAt updatedAt points.

const Message = mongoose.model("Message", messageSchema);

export default Message;
