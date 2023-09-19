import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function ConnectToMongoDB(connectionstring: string) {
  try {
    await mongoose.connect(connectionstring);
    console.log("Connected succesfully");
  } catch (e) {
    console.log("Check the mongo connection: ", e);
  }
}

export { ConnectToMongoDB };
