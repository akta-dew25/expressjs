import loginUtils from "../utils/loginUtils.js"


const loginController = async(req,res) => {

try {
  const {statusCode,...response} = await loginUtils(req.body)
  res.status(statusCode).json(response)
} catch (error) {
  res.status(500).json({ message: "Internal server error" })
}
}

export default loginController