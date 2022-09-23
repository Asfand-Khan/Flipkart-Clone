import mongoose from "mongoose";

export const connectDB = () => {
  try {
    mongoose.connect(
      process.env.DB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("database connected succesfully");
        }
      }
    );
  } catch (error) {
    console.log(`The Error is: ${error.message}`);
  }
};
