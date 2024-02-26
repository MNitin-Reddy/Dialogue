import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";


dotenv.config();

const app = express();
const port= process.env.PORT || 4000;


app.use(express.json()); // To get values from req.body in controller.js
app.use(cookieParser());

app.use("/api/auth",authRoutes);   //Middleware
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.get("/",(req,res)=>{
    res.send("YESSS")
})

app.listen(port, ()=> 
{
connectToMongoDB();
console.log(`App running at port ${port}`);

});