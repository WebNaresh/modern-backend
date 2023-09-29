import { Schema } from "mongoose";
import {
  AverageResult,
  PeerFeedback,
  StudentFeedback,
} from "../../../../utils/interface";
const level = ["UG", "PG"];
const courseHead = ["TH", "PR", "T"];
const academicYear = ["Current", "Previous"];
const term = ["I", "II"];

export const averageResult: Schema<AverageResult> = new Schema<AverageResult>({
  nameOfSubject: {
    type: String,
    required: true,
  },
  academicYear: {
    type: String,
    enum: academicYear,
    required: true,
  },
  term: {
    type: String,
    required: true,
    enum: term,
  },
  level: {
    type: String,
    enum: level,
    required: true,
    default: "PG",
  },
  courseHead: {
    type: String,
    enum: courseHead,
    required: true,
  },
  hoursAlloted: {
    type: Number,
    required: true,
  },
  classConducted: {
    type: Number,
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
});
export const studentFeedback: Schema<StudentFeedback> =
  new Schema<StudentFeedback>({
    studentFeedback: {
      termIIPreviousYear: {
        type: Number,
        required: true,
      },
      termICurrentYear: {
        type: Number,
        required: true,
      },
    },
  });

export const peerFeedback: Schema<PeerFeedback> = new Schema<PeerFeedback>({
  peerFeedback: {
    termIIPreviousYear: {
      type: Number,
      required: true,
    },
    termICurrentYear: {
      type: Number,
      required: true,
    },
  },
});
