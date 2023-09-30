import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import catchAsyncError from "../middleware/catchAsyncError";
import User from "../models/user/user";
import sendToken from "../utils/sendToken";

export const test = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "Route is working" });
    // const {  } = req.body
  }
);

export const register = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      name,
      email,
      password,
      userImage,
      role,
    }: {
      name: string;
      email: string;
      password: string;
      userImage: string;
      role: "HOD" | "Teacher" | "Principle" | "Student";
    } = req.body;
    const existed = await User.findOne({ name, email }).populate("name");

    if (existed) {
      existed.password = null;
      return res.status(200).json({
        success: true,
        message: "User exist please try Log IN",
      });
    } else {
      try {
        const user = await User.create({
          name,
          email,
          userImage,
          password,
          role,
        });
        user.password = null;
        sendToken(user, res, 200);
      } catch (error) {
        res.status(401).json({
          success: true,
          error,
        });
      }
    }
  }
);

export const getAllUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;
    let users = await User.find({ _id: { $ne: userId } }).select([
      "name",
      "email",
      "userImage",
      "_id",
    ]);

    let usersString = await jwt.sign(
      { users },
      process.env.JWT_SECRETE as string,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );
    res.status(200).json({
      success: true,
      usersString,
    });
  }
);

export const login = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      email,
      password,
    }: {
      email: string;
      password: string;
    } = req.body;
    console.log(
      `🚀 ~ email,
      password,:`,
      email,
      password
    );
    const existed = await User.findOne({ email });

    if (existed) {
      const result = existed.compareJWTToken(password);
      console.log(`🚀 ~ result:`, result);
      if (result) {
        existed.password = null;
        sendToken(existed, res, 200);
      } else {
        res.status(401).json({
          success: false,
          user: null,
        });
      }
    }
  }
);
