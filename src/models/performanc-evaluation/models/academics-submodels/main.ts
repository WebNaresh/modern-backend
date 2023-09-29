import { Schema } from "mongoose";
import { Appraisal } from "../../../../utils/interface";
import {
  averageResult,
  peerFeedback,
  studentFeedback,
} from "./teachingLearning";

export const academicsAppraisel: Schema<Appraisal> = new Schema<Appraisal>({
  teachingAndLearning: [averageResult],
  classEngagement: {
    type: Number,
    required: true,
  },
  studentFeedback: studentFeedback,
  peerFeedback: peerFeedback,
});
