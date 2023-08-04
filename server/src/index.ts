import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8080;

async function runServer() {
  try {
    mongoose.connect(process.env.MONGO_URI as string);
    app.listen(port, () => {
      console.log("server started");
    });
  } catch (error) {
    console.log(error);
  }
}

runServer();
