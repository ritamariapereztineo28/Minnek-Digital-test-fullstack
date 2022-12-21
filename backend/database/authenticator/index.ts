const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config-env");

export const authenticator = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization;
    const authEntity = jwt.verify(token, JWT_SECRET);
    Object.assign(req, { authEntity });
    next();
  } catch (error) {
    res.status(403).send({ message: "Acceso denegado" });
  }
};