import { connectDB } from "../../mongo/db.js";
import User from "../../mongo/user.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

dotenv.config();

const getAllUsers = async (userId) => {
  try {
    await connectDB();
    const users = await User.find({}, { password: 0 });
    const result = users.map((user) => ({
      id: user._id.toString(),
      username: user.username,
      createdAt: user.createdAt,
    }));
    return {
      statusCode: 200,
      message: "User details fetch successfully",
      data: result,
      // user2,
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: "Internal Server Error",
      errors: [error?.message?.replaceAll('"')],
    };
  }
};

export default getAllUsers