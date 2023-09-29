import mongoose, { Document, Model, Schema } from "mongoose";

interface TeacherPersonalInfo extends Document {
  phone: string;
}

const userSchema: Schema<TeacherPersonalInfo> = new Schema<TeacherPersonalInfo>(
  {
    phone: {
      type: String,
      required: [true, "Please Enter Your designation"],
      maxLength: [10, "designation cannot exceed 10 characters"],
      minLength: [10, "designation should have more than 10 characters"],
    },
  },
  { timestamps: true }
);

const TeacherPersonalInfo: Model<TeacherPersonalInfo> =
  mongoose.model<TeacherPersonalInfo>("TeacherPersonalInfo", userSchema);

export default TeacherPersonalInfo;
