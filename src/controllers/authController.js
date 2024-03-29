import authModel from "../models/authModel.js";
import jwt from "jsonwebtoken";

async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).send("username or password missing");
      return;
    }
    const user = await authModel.login(req.body.username, req.body.password);
    if (!user) {
      res.status(401).send("invalid username or password");
      return;
    }
    delete user.password;
    const token = jwt.sign(Object.assign({}, user), process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production" ? true : false,
    });
    res.send(user);
  } catch (err) {
    next(err);
  }
}

export default { login };
