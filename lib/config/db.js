import mongoose from "mongoose";

export const ConnectDB = async() =>{
    await mongoose.connect('mongodb+srv://blog:1234@cluster0.2eirx.mongodb.net/blog-app');
    console.log("DB connected");
}