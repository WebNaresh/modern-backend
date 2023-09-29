import { Schema } from "mongoose";
import { Responsibility } from "../../../../utils/interface";

export const responsibilities: Schema<Responsibility> =
  new Schema<Responsibility>({
    natureOfWork: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
      enum: ["Department", "Institute"],
    },
  });
