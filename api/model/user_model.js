import mongoose from "mongoose";

const user_schema = mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

const UserData = mongoose.model("User", user_schema);

export default UserData;
