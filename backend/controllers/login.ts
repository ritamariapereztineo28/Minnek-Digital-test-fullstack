const User = require("../database/models/user");
const { JWT_SECRET } = require("../config-env");
const jwt = require("jsonwebtoken");
const comparePassword = (password: string, receivedPassword: string) => {
  if (password === receivedPassword) {
    return true;
  } else return false;
};
export const login = async (req: any, res: any) => {
  try {
    const userFound = await User.findOne({ name: req.body.name });
    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const matchPassword = await comparePassword(
      req.body.password,
      userFound.password
    );
    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Contraseña incorrecta",
      });

    const token = jwt.sign({ id: userFound._id }, JWT_SECRET);
    res.cookie("auth_token", token);
    res.json({ token });
  } catch (error) {
    res.send({ status: false, message: "Denegado" });
  }
};
