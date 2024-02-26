import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res)=>{
    console.log("message sent",req.params.id); //in route we gave :id so here its .id if there it is :userid here it should be .userid
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;    //from params we get receiverId renamed from id, destructered here can write req.params.id
        const senderId = req.user._id;  //user object from protectRoute

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}  //all is mongoose syntax- this line gives all the convo these two had

        });
        //maybe first time convo so we create one
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
                //messages is set deafault as empty so no need to mention it here
            });
        }
        //lets create a msg thats coming from the user
        const newMessage  = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        //SOCKET IO for realtime here


        //await conversation.save();
        //await newMessage.save();
        //optimising these two lines

        //This will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);



        res.status(201).json(newMessage);

        } catch (error) {
        console.log("Error at message controller");
        res.status(500).json({error:"Internal Error"});
    }
}


export const getMessages = async(req,res)=>{
    try {
        
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages"); //not reference but actual messages

        if(!conversation) return res.status(200).json([]);

        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log("Error at get message controller");
        res.status(500).json({error:"Internal Error"});
    }
}