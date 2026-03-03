import users from "../data/users.js";

const loginUtils = (data)=>{
const { username, password } = data
if (!username || !password) {
  return {
      statusCode: 400,
      message: "Username and password are required"
    }
}

const user = users.find(user => user.username === username);
  if (!user) {
    return {
      statusCode: 400,
      message: "User not found"
    }
  }

  // Check password
  if (user.password !== password) {
    return {
      statusCode: 400,
      message: "Invalid password"
    }
  }

  return {
    statusCode: 200,
    message: "Login successful",
    data: {
      id: user.id,
      username: user.username,
      password: user.password
    }
  }
};


export default loginUtils