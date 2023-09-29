import { Schema } from "mongoose";
import { ConsultancyServices } from "../../../../utils/interface";

export const consultancyModel: Schema<ConsultancyServices> =
  new Schema<ConsultancyServices>({
    natureOfWork: {
      type: String,
      required: true,
    },
    agency: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    amountRecieved: {
      type: String,
      required: true,
    },
  });
