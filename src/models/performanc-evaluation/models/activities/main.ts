import { Schema } from "mongoose";
import { Activities } from "../../../../utils/interface";

export const activities: Schema<Activities> = new Schema<Activities>({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["Co-curricular", "Extra-curricular"],
  },
});
