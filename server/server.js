import express from "express";
import {config} from "dotenv";
import connectDB from "../server/config/db.js";
import authRoutes from "../server/routes/authentication.js";


config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});