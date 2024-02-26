import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{   //userId is the payload here, 
        //when we want to verify the cookie we use the payload.
        expiresIn: "15d"
    })

    //set token into a cookie
    //name can be anything cookie("name")
    res.cookie("jwt",token,{
        //some options to amke it secure
        maxAge: 15 * 24 * 60 * 60 * 1000, //In ms
        httpOnly: true, //Prevents XSS attacks
        sameSite:"strict", //CSFR atack croos-site request forgery attacks
        secure: process.env.NODE_ENV !== "development" //in production it should be true  here we make it dynamic
    })
}

export default generateTokenAndSetCookie;