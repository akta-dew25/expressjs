import getUserById from "../../utils/v1/profile.js";

export const getProfileController = async (req, res) => {
  try {
    const { statusCode, ...response } = await getUserById(req.user.userId);
    res.status(statusCode).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: [error?.message.replaceAll('"')],
    });
  }
};

