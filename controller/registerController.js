import registerUtils from '../utils/registerUtils.js'

 const registerController =async(req, res)=> {

  console.log(req.body,"tesgin");
  
  try {
    const {statusCode , ...response} = await registerUtils(req.body)
    res.status(statusCode).json(response)
  } catch (error) {
    console.log("error",error);
    res.status(500).json({message:"Internal Server Error"})
    
  }
}

export default registerController