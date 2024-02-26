import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt; //we cannot access it directly so we use cookie-parser extension and add it to server,js
        if(!token){
            return res.status(401).json({error: "Unauthorised - No token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error: "Unauthorised - Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password") 
        //userId because that we called it we singed the token at generator.
        if(!user){
            return res.status(401).json({error: "User not found"});
        }        

        req.user = user  // we have our user in req this checks if the user in our database

        next();  //next to sendmessage function

    } catch (error) {
        console.log("Error at protectRoute middleware");
        res.status(500).json({error:"Internal server error"});
    }
} 

export default protectRoute;