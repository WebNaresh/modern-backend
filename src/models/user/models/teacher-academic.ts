import mongoose, { Document, Model, Schema } from "mongoose";

interface TeacherAcademicsInfo extends Document {
  designation: string;
  dateOfJoining: Date;
  facultyName: string;
  departmentName: string;
}

const userSchema: Schema<TeacherAcademicsInfo> =
  new Schema<TeacherAcademicsInfo>(
    {
      designation: {
        type: String,
        required: [true, "Please Enter Your designation"],
        maxLength: [30, "designation cannot exceed 30 characters"],
        minLength: [4, "designation should have more than 4 characters"],
      },
      dateOfJoining: {
        type: Date,
        required: [true, "Please Enter E-mail"],
        unique: true,
        default: Date.now,
      },
      facultyName: {
        type: String,
        required: true,
        default: "",
      },
      departmentName: {
        type: String,
        required: [true, "Please Enter Password"],
      },
    },
    { timestamps: true }
  );

const TeacherAcademicsInfo: Model<TeacherAcademicsInfo> =
  mongoose.model<TeacherAcademicsInfo>("TeacherAcademicsInfo", userSchema);

export default TeacherAcademicsInfo;
