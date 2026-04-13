import getAllUsers from "../../utils/v1/user.js";

const getAllUsersController = async (req, res) => {
  try {
    const { statusCode, ...response } = await getAllUsers(req.user);
    res.status(statusCode).json(response);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Internal Server Error",
        error: [error?.message.replaceAll('"')],
      });
  }
};

export default getAllUsersController

