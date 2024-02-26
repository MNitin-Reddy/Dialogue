import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected Database");
        
    } catch (error) {
        console.log("Error connecting to the Database(MongoDB)",error.message);
    }
}

export default connectToMongoDB;