import users from "../../data/users.js";
import { connectDB } from "../../mongo/db.js";
import User from "../../mongo/user.js";
import dotenv from "dotenv"

dotenv.config()

const registerUtils = async (data) => {
 try {
   await connectDB();

  
  const { username, password } = data;

  if (!username || !password) {
    return {
      statusCode: 400,
      message: "Username and password are required"
    };
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return {
      statusCode: 400,
      message: "User already exists"
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
    }
  };
  
 } catch (error) {
  console.log(error,"error");
  
    return {
      statusCode: 500,
      message: "Internal Server Error",
      errors: [error?.message?.replaceAll('"')],
    };
 }
};

const loginUtils = async (data) => {
  await connectDB();
  const { username, password } = data;

  if (!username || !password) {
    return {
      statusCode: 400,
      message: "Username and password are required"
    };
  }

  const user = await User.findOne({ username });
  if (!user) {
    return {
      statusCode: 400,
      message: "User not found"
    };
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return {
      statusCode: 400,
      message: "Invalid password"
    };
  }

  return {
    statusCode: 200,
    message: "Login successful",
    data: {
      id: user._id,
      username: user.username,
    }
  };
};

export { registerUtils, loginUtils };
