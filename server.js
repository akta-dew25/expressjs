// const express = require('express');
// const apiRouter = require('./routes/api');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// // Mount API router under /api
// app.use('/api', apiRouter);

// // Root route
// app.get('/', (req, res) => {
//   res.send('Hello from myPractice Express server!');
// });

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ status: 'error', message: 'Not Found' });
// });

// // Error handler

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express')

const app = express()

const dummyData = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
]

app.use(express.json())

app.get('/',(req,res)=>{
  console.log("test");
  
 res.json("welcome to myPractice API")})

app.get('/users',(req,res)=>{
  console.log("testinghh");
  
 res.json({
  message:"User list retrieved successfully",
  data:dummyData
 })
})

app.post('/users',(req,res)=>{
  console.log("yhhhh",req.body);
  
  const { name } = req.body

  const newUser = {
    id: dummyData.length+1,
    name
  }

  dummyData.push(newUser)

  res.status(201).json({
    message:"user created successfully",
    data:newUser
  })

})
console.log("test");



const PORT = 3000

app.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`)
})