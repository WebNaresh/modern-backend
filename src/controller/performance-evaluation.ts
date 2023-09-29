import { NextFunction, Request, Response } from "express";
import catchAsyncError from "../middleware/catchAsyncError";
import Performance from "../models/performanc-evaluation/performance";

export const performance = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      departmentName,
      facaultyName,
      degreeDuringPeriod,
      userWhoAppliedForm,
    }: {
      departmentName: string;
      facaultyName: string;
      degreeDuringPeriod?: string | null;
      userWhoAppliedForm: string;
    } = req.body;
    const form = await Performance.create({
      departmentName,
      facaultyName,
      degreeDuringPeriod,
      userWhoAppliedForm,
    });
    return res.status(200).json({
      success: true,
      form,
    });
  }
);
