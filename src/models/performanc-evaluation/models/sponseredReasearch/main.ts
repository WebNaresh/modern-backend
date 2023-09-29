import { Schema } from "mongoose";
import { SponseredReasearch } from "../../../../utils/interface";

export const sponseredResearch: Schema<SponseredReasearch> =
  new Schema<SponseredReasearch>({
    scheme: {
      type: String,
      required: true,
    },
    agency: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Awarded", "Submitted"],
      required: true,
    },
    dateOfSubmissionOrAwarded: {
      type: Date,
      required: true,
    },
    grantRecieved: {
      type: String,
      required: true,
    },
  });
