import {
  registerUtils,
  loginUtils,
} from "../../utils/v1/auth.js";

const registerController = async (req, res) => {
  try {
    const { statusCode, ...response } = await registerUtils(req.body);
    res.status(statusCode).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      errors: [error?.message?.replaceAll('"')],
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { statusCode, ...response } = await loginUtils(req.body);
    res.status(statusCode).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      errors: [error?.message?.replaceAll('"')],
    });
  }
};





export { registerController, loginController };
