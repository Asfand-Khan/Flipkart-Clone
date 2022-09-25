import axios from "axios";

const URL = "http://localhost:8000";

export const userSignup = async(user)=>{
    try {
        return await axios.post(`${URL}/signup`,user)
    } catch (error) {
        console.log(`The Error is: ${error.message}`);
    }
}