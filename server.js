
// const express = require('express')
// const authRouter = require('./routes/v1/index.js')

import express from 'express'
import authRouter from './routes/v1/index.js'
import users from './data/users.js'

const app = express()

const dummyData = [
  { id: 1, name: 'Alice',age:25 },
  { id: 2, name: 'Bob',age:30 },
  { id: 3, name: 'Charlie',age:35 }
]

app.use(express.json())

app.use('/api/v1',authRouter)

app.get('/',(req,res)=>{
  console.log(users,"ress");
  
 res.json("welcome to myPractice API")})

// app.get('/users',(req,res)=>{
  
//  res.json({
//   message:"User list retrieved successfully",
//   data:dummyData
//  })
// })

// app.post('/users', (req, res) => {

//   if (!req.body.name) {
//     return res.status(400).json({ message: "Name is required" });
//   }

//   const newUser = {
//     id: dummyData.length + 1,
//     name: req.body.name
//   };

//   dummyData.push(newUser);

//   res.status(201).json({
//     message: "User created successfully",
//     data: newUser
//   });
  
// });


// app.put('/users/:id',(req,res)=>{
//   const id = parseInt(req.params.id);
//  const { name, age } = req.body;

//   const user = dummyData.find(u => u.id === id);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   if (!age) {
//     return res.status(400).json({ message: "Age is required" });
//   }

//   const index = dummyData.findIndex(u => u.id === id);
//   dummyData[index] = {
//     id,
//     name,
//     age
//   };

//   res.json({
//     message: "User updated successfully",
//     data: dummyData[index]
//   });
// })

// app.patch('/users/:id',(req,res)=>{
//   const id = parseInt(req.params.id);

//   const user = dummyData.find((user)=>user.id === id)

//   if(!user){
// return res.status(404).json({message:"User not found"})
//   }

//   if (req.body.name !== undefined) {
//     user.name = req.body.name;
//   }

//   if (req.body.age !== undefined) {
//     user.age = req.body.age;
//   }

//   res.json({
//     message: "User updated successfully",
//     data: user
//   });
// })

// app.delete('/users/:id',(req,res)=>{
//   const id = parseInt(req.params.id);

//   const index = dummyData.findIndex((user)=>user.id === id)
  
//   if(index === -1){
// return res.status(404).json({message:"User not found"})
//   }

//   const deletedUser = dummyData.splice(index,1)

//   res.json({
//     message: "User deleted successfully",
//     data: deletedUser[0]
//   });
// })

const PORT = 3000

app.listen(PORT,()=>{
  console.log(`Server running at http://127.0.0.1:${PORT}`)
})