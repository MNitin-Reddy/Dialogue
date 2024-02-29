import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


dotenv.config();

const port= process.env.PORT || 4000;

app.use(express.json()); // To get values from req.body in controller.js
app.use(cookieParser());

app.use("/api/auth",authRoutes);   //Middleware
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


// app.listen(port, ()=> 
// {
// connectToMongoDB();
// console.log(`App running at port ${port}`);

server.listen(port, ()=> 
{
connectToMongoDB();
console.log(`App running at port ${port}`);


});