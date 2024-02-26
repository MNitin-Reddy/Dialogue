
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

//test
export const login = async (req,res) =>{
    try {
        console.log("login started");
        const {userName,password} = req.body;

        const user = await User.findOne({userName});
        console.log(user);
        //here we caompare the password of the user, if name is invalid we get error so we use user?.password to retuen empty string if its not valid
        const isPasswordCorrect= await bcrypt.compare(password, user?.password || "");
        //
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid Login Credentials!"});
        }

        //JWT token
        generateTokenAndSetCookie(user._id,res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullName,
            username: user.userName,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("Error in login controller",error.message);
    }

}

export const signup = async (req,res) =>{
    try {
        const {fullName,userName,password,confirmPassword,gender} = req.body;
        //check if passwords are same
        if(password !==confirmPassword){
            return res.status(400).json({error:"Passwords did not match"})
        }
        //check if the Username already exists
        const user = await User.findOne({userName}) //To get username if it already existed
        if(user){
            return res.status(400).json({error:"Username chosen already exists."})
        }

        //HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10); //more the number more the security and more time to make
        const hashedPassword = await bcrypt.hash(password,salt);
        // Random pictures 
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = await User.create({
            fullName,                         //since both are same we are only adding key
            userName,
            password:hashedPassword,
            gender,
            profilePic: gender === "Male" ? boyProfilePic:girlProfilePic
        })
        
        if(newUser){
            //Generate JWT token here...
            generateTokenAndSetCookie(newUser._id,res);

            await newUser.save();   //Save newUSer to the database

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullName,
                username:newUser.userName,
                profilePic:newUser.profilePic
            })
        } else {
            res.status(400).json({error: "Invalid user data"});
        }
                
    } catch (error) {
        console.log("Error in signUp controller");
        res.status(500).json({error:"Internal server error"});
    }

}

export const logout = (req,res) =>{
    try {
        res.cookie("jwt","",{maxAge:0});
        /*This line of code is manipulating a cookie named "jwt" by setting its value to an empty string 
        and also setting its maximum age to 0. 
        In most web applications, the authentication token (JWT in this case) is stored in a cookie to maintain a user's session.
        */ 
        res.status(200).json({
            message: "You have been logged out succesfully"
        });
    } catch (error) {
        console.log("Error in logout controller");
        res.status(500).json({error:"Internal server error"});
    }
}