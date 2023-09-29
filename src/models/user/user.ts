import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose, { Document, Model, Schema } from "mongoose";
import validator from "validator";

interface User extends Document {
  name: string;
  email: string;
  userImage: string;
  password: string | null;
  personalInfo: string | null;
  academics: string | null;
  role: "HOD" | "Teacher" | "Principle" | "Student";
  getJWTToken(): string;
  compareJWTToken(password: string): boolean;
}
const userSchema: Schema<User> = new Schema<User>(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your name"],
      maxLength: [30, "name cannot exceed 30 characters"],
      minLength: [4, "name should have more than 4 characters"],
    },
    email: {
      type: String,
      required: [true, "Please Enter E-mail"],
      validate: [validator.isEmail, "Please fill a valid email address"],
      unique: true,
    },
    userImage: {
      type: String,
      required: true,
      default: "",
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
    },
    personalInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TeacherPersonalInfo",
    },
    academics: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TeacherAcademicsInfo",
    },
    role: {
      type: String,
      enum: ["HOD", "Teacher", "Principle", "Student"],
      required: true,
      default: "Teacher",
    },
  },
  { timestamps: true }
);

userSchema.pre<User>("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  // Assert that this.password is not null
  this.password = await bcrypt.hash(this.password as string, 10);
});

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ user: this }, process.env.jWT_SECRETE as string, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
userSchema.methods.compareJWTToken = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const User: Model<User> = mongoose.model<User>("User", userSchema);

export default User;
