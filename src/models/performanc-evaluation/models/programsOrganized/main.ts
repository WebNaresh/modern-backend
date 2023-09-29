import { Schema } from "mongoose";
import { ProgramsOrganized } from "../../../../utils/interface";

export const progamsOrganized: Schema<ProgramsOrganized> =
  new Schema<ProgramsOrganized>({
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  });
