import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import router from "./routes/routes.js";

// rest variables
const app = express();

// dotenv config
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

// db config
connectDB();

// routes
app.use('/',router);

app.listen(process.env.PORT, () => {
  console.log(`server is running on localhost: ${process.env.PORT}`);
});
