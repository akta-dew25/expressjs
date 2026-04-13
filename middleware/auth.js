import jwt from "jsonwebtoken";

const authMiddleWare = (req, res, next) => {
  
  const authToken = req.headers.authorization;


  if (!authToken) {
    return res.status(401).json({ message: "No token" });
  }

  const token = authToken.split(" ")[1];


  try {
    const decoded = jwt.verify(token, "Ekta@1995");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export  {authMiddleWare}
