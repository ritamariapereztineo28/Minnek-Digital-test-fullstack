const User = require("../database/models/user");
export const auth = async (req: any, res: any) => {
  const { id } = req.authEntity;
  try {
    const user = await User.findById(id);
    res.send({ user });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
