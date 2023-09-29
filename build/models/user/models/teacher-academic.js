"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const userSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
const TeacherAcademicsInfo = mongoose_1.default.model("TeacherAcademicsInfo", userSchema);
exports.default = TeacherAcademicsInfo;
