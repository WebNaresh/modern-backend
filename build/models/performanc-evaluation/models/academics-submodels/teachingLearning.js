"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peerFeedback = exports.studentFeedback = exports.averageResult = void 0;
const mongoose_1 = require("mongoose");
const level = ["UG", "PG"];
const courseHead = ["TH", "PR", "T"];
const academicYear = ["Current", "Previous"];
const term = ["I", "II"];
exports.averageResult = new mongoose_1.Schema({
    nameOfSubject: {
        type: String,
        required: true,
    },
    academicYear: {
        type: String,
        enum: academicYear,
        required: true,
    },
    term: {
        type: String,
        required: true,
        enum: term,
    },
    level: {
        type: String,
        enum: level,
        required: true,
        default: "PG",
    },
    courseHead: {
        type: String,
        enum: courseHead,
        required: true,
    },
    hoursAlloted: {
        type: Number,
        required: true,
    },
    classConducted: {
        type: Number,
        required: true,
    },
    result: {
        type: Number,
        required: true,
    },
});
exports.studentFeedback = new mongoose_1.Schema({
    studentFeedback: {
        termIIPreviousYear: {
            type: Number,
            required: true,
        },
        termICurrentYear: {
            type: Number,
            required: true,
        },
    },
});
exports.peerFeedback = new mongoose_1.Schema({
    peerFeedback: {
        termIIPreviousYear: {
            type: Number,
            required: true,
        },
        termICurrentYear: {
            type: Number,
            required: true,
        },
    },
});
