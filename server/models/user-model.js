import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:['true','Please Enter Firstname'],
        min:4,
        max:20,
        lowercase:true,
        trim:true      
    },
    lastname:{
        type:String,
        required:['true','Please Enter Lastname'],
        min:4,
        max:20,
        lowercase:true,
        trim:true      
    },
    username:{
        type:String,
        required:[true,'Please Enter Username'],
        lowercase:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:[true,'Please Enter Email'],
        lowercase:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please Enter Password'],
        lowercase:true
    },
    contact:{
        type:String,
        required:[true,'Please Enter Contact']
    }
});

const user = mongoose.model('User',userSchema);

export default user;
