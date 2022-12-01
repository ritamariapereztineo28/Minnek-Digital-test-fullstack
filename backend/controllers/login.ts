const User = require("../database/models/user");
const { JWT_SECRET } = require("../config-env");
const jwt = require("jsonwebtoken");
export const login = async (req: any, res: any) => {
  const { name, password } = req.body;
  const findUser = await User.find({ name, password });
  if (findUser.length === 1) {
    const token = jwt.sign({ name, password }, JWT_SECRET);
    res.cookie("auth_token", token);
    res.send({ status: true, message: "Consedido", token });
  } else {
    res.send({ status: false, message: "Denegado" });
  }
};
