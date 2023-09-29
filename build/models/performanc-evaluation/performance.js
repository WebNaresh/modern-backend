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
const main_1 = require("./models/academics-submodels/main");
const main_2 = require("./models/activities/main");
const main_3 = require("./models/consultancyModel/main");
const main_4 = require("./models/examinationDuties/main");
const main_5 = require("./models/intelectualRights/main");
const main_6 = require("./models/programAttended/main");
const main_7 = require("./models/programsOrganized/main");
const publication_detail_1 = require("./models/publications-submodels/publication-detail");
const main_8 = require("./models/responsibility/main");
const main_9 = require("./models/sponseredReasearch/main");
const performanceSchema = new mongoose_1.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
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
    academicAppraisel: main_1.academicsAppraisel,
    publication: publication_detail_1.publicationAndJournals,
    progamsOrganized: [main_7.progamsOrganized],
    programsAttended: [main_6.programAttended],
    sponseredReasearch: [main_9.sponseredResearch],
    consultancyServices: [main_3.consultancyModel],
    intelectualPropertyRights: main_5.intelectualProperty,
    examinationDuties: [main_4.examinationDuties],
    activities: [main_2.activities],
    responsibilities: [main_8.responsibilities],
    achievement: [String],
    grade: {
        type: String,
        enum: ["OutStanding", "Excellent", "VeryGood", "Satisfactory", "Average"],
    },
}, { timestamps: true });
const Performance = mongoose_1.default.model("Performance", performanceSchema);
exports.default = Performance;
