import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// rest variables
const app = express();

// dotenv config
dotenv.config();

// db config
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is running on localhost: ${process.env.PORT}`);
});
