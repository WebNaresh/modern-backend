import { Schema } from "mongoose";
import { ExaminationDuties } from "../../../../utils/interface";

export const examinationDuties: Schema<ExaminationDuties> =
  new Schema<ExaminationDuties>({
    dutyType: {
      type: String,
      required: true,
      enum: [
        "Exam Related",
        "Evaluation of Answer Scripts",
        "Question Paper Setting",
      ],
    },
    assignedBy: {
      type: String,
      required: true,
      enum: ["University", "Institute"],
    },
  });
