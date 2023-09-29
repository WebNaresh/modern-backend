import { Response } from "express";
import User from "../models/user/user";

const sendToken = (user: User, res: Response, statusCode: number): void => {
  const token = user.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + Number(process.env.COKKIE_EXPIRE) * 24 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

export default sendToken;
