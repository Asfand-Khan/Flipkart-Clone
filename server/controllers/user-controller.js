import User from "../models/user-model.js";

export const userSignup = async(req,res)=>{
    try {
        // extracting values from the header body of user
        const user = req.body;

        // checking if the user already exist
        const userExist = await User.findOne(user.username);
        if(userExist){
            return res.status(401).json({message:"Username already exists"})
        }

        // creating user
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({message:user})

    } catch (error) {
        res.status(400).json({message:"Error while signing up user"})
    }
}