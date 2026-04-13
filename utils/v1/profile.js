import { connectDB } from "../../mongo/db.js";
import User from "../../mongo/user.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

dotenv.config();

const getUserById = async (userId) => {
  try {
    await connectDB();
    const user2 = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(userId) } },
      {
        $project: {
          userId: "$_id",
          username: 1,
          // password:0,
          createdAt: "$createdAt",
          _id: 0,
        },
      },
    ]);

    return {
      statusCode: 200,
      message: "User details fetch successfully",
      data: user2,
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

export default getUserById