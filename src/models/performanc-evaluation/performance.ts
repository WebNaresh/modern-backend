import mongoose, { Model, Schema } from "mongoose";
import { Performance } from "../../utils/interface";
import { academicsAppraisel } from "./models/academics-submodels/main";
import { activities } from "./models/activities/main";
import { consultancyModel } from "./models/consultancyModel/main";
import { examinationDuties } from "./models/examinationDuties/main";
import { intelectualProperty } from "./models/intelectualRights/main";
import { programAttended } from "./models/programAttended/main";
import { progamsOrganized } from "./models/programsOrganized/main";
import { publicationAndJournals } from "./models/publications-submodels/publication-detail";
import { responsibilities } from "./models/responsibility/main";
import { sponseredResearch } from "./models/sponseredReasearch/main";

const performanceSchema: Schema<Performance> = new Schema<Performance>(
  {
    departmentName: {
      type: String,
      required: [true, "Please Enter Your departmentName"],
    },
    facaultyName: {
      type: String,
      required: [true, "Please Enter facaulty Name"],
    },
    degreeDuringPeriod: {
      type: String,
      default: "",
    },
    userWhoAppliedForm: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please Enter Your User id"],
      ref: "User",
    },
    year: {
      type: String,
      required: true,
      default: function () {
        return new Date().getFullYear().toString();
      },
      unique: true,
    },
    academicAppraisel: academicsAppraisel,
    publication: publicationAndJournals,
    progamsOrganized: [progamsOrganized],
    programsAttended: [programAttended],
    sponseredReasearch: [sponseredResearch],
    consultancyServices: [consultancyModel],
    intelectualPropertyRights: intelectualProperty,
    examinationDuties: [examinationDuties],
    activities: [activities],
    responsibilities: [responsibilities],
    achievement: [String],
    grade: {
      type: String,
      enum: ["OutStanding", "Excellent", "VeryGood", "Satisfactory", "Average"],
    },
  },
  { timestamps: true }
);

const Performance: Model<Performance> = mongoose.model<Performance>(
  "Performance",
  performanceSchema
);

export default Performance;
