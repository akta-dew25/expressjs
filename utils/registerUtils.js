import users from "../data/users.js";
// const user = {
//   username: "john_doe",
//   password: "password123"
// }



const registerUtils=(data)=> {
  console.log(data,"bodyy",users);
  
 const { username, password } = data

  if (!username || !password) {
    return {
      statusCode: 400,
      message: "Username and password are required"
    }
  }

const newUser = {
    id: users.length + 1,
    username,
    password,
    
  };

  users.push(newUser);

return {
  statusCode: 201,
  message: "User registered successfully",
  data: {
      id: newUser.id,
      username: newUser.username,
      password: newUser.password
    }
}
}  

export default registerUtils