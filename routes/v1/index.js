import express from 'express'
import registerController from '../../controller/registerController.js'
import loginController from '../../controller/loginController.js'



const authRouter = express.Router()




authRouter.post('/register',registerController)
authRouter.post('/login',loginController)
  



export default authRouter


//  (req, res) => {
//   const { username, password } = req.body

//   if (!username || !password) {
//     return res.status(400).json({ message: "Username and password are required" });
//   }

//   dummyUsers.username = username
//   dummyUsers.password = password

//   res.status(201).json({ message: "User registered successfully", data: dummyUsers });
// }

// authRouter.post('/login', (req, res) => {
//   const {username,password} = req.body

//   if (username === dummyUsers.username && password === dummyUsers.password) {
//     res.status(200).json({ message: "Login successful" });
//   } else {
//     res.status(401).json({ message: "Invalid credentials" });
//   }


// })