import { Schema } from "mongoose";
import {
  IntelectualPropertyRights,
  Patents,
} from "../../../../utils/interface";

export const patents: Schema<Patents> = new Schema<Patents>({
  status: {
    type: String,
    required: true,
  },
  dateOfApplication: {
    type: Date,
    required: true,
  },
  commercialized: {
    type: Boolean,
    required: true,
  },
});
export const intelectualProperty: Schema<IntelectualPropertyRights> =
  new Schema<IntelectualPropertyRights>({
    patents: [patents],
    copyRights: [patents],
    tradeMarks: [patents],
  });
