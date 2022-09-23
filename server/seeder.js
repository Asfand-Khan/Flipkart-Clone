
import mongoose from "mongoose";
import { products } from "./constants/data.js";
import Product from "./models/product-model.js";


    try {
      mongoose.connect(
        "mongodb://0.0.0.0:27017/flipkart",
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("database connected succesfully");
            seed();
          }
        }
      );
    } catch (error) {
      console.log(`The Error is: ${error.message}`);
    }

const seed = async()=>{
    try {
         await Product.insertMany(products); 
         console.log("Inserted succesfully")
    } catch (error) {
        console.log(error.message);
    }    
}
