import { Schema } from "mongoose";
import { ProgramAttended } from "../../../../utils/interface";

export const programAttended: Schema<ProgramAttended> =
  new Schema<ProgramAttended>({
    title: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
  });
