import {config} from "dotenv";
import mongoose from "mongoose";
config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB...");
    } catch (error) {
        console.error("MongoDB Connection Error", error.message);
        process.exit(1);
    }
}
export default connectDB;
