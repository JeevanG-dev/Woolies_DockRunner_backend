import mongoose from "mongoose";

async function connectDB() {
  try {
    const response = await mongoose.connect(process.env.MONGO_DB);

    console.log("Connected to MongoBD-" + response.connection.host);
  } catch (error) {
    console.log(error);
    console.log("Error connecting to MongoDb......");
  }
}

export default connectDB;
