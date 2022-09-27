import express from "express";

const router = express.Router();

router.post('/signup',()=>{
    console.log("sigup worked");
});

export default router;