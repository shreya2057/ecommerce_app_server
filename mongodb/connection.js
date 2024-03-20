import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDB_connection = async () => {
  const username = process.env.mongo_username;
  const password = process.env.password;
  const cluster = process.env.cluster;
  const dbName = process.env.db_name;
  const url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  try {
    // mongoose.connect() => Connects to mongodb database
    const connection = await mongoose.connect(url);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database error: ", error);
  }
};

export default mongoDB_connection;
