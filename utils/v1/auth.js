import { connectDB } from "../../mongo/db.js";
import User from "../../mongo/user.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

dotenv.config();

const registerUtils = async (data) => {
  try {
    await connectDB();

    const { username, password } = data;

    if (!username || !password) {
      return {
        statusCode: 400,
        message: "Username and password are required",
      };
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return {
        statusCode: 400,
        message: "User already exists",
      };
    }

    const newUser = new User({ username, password });
    await newUser.save();

    return {
      statusCode: 201,
      message: "User registered successfully",
      data: {
        id: newUser._id,
        username: newUser.username,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: "Internal Server Error",
      errors: [error?.message?.replaceAll('"')],
    };
  }
};

const loginUtils = async (data) => {
  try {
    await connectDB();
    const { username, password } = data;

    if (!username || !password) {
      return {
        statusCode: 400,
        message: "Username and password are required",
      };
    }

    const user = await User.findOne({ username });
    if (!user) {
      return {
        statusCode: 400,
        message: "User not found",
      };
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return {
        statusCode: 400,
        message: "Invalid password",
      };
    }
    // create token

    const token = jwt.sign({ userId: user._id }, "Ekta@1995", {
      expiresIn: "1h",
    });

    return {
      statusCode: 200,
      message: "Login successful",
      data: {
        id: user._id,
        username: user.username,
      },
      token,
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: "Internal Server Error",
      errors: [error?.message?.replaceAll('"')],
    };
  }
};




export { registerUtils, loginUtils };
