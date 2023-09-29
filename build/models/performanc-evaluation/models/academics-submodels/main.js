"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicsAppraisel = void 0;
const mongoose_1 = require("mongoose");
const teachingLearning_1 = require("./teachingLearning");
exports.academicsAppraisel = new mongoose_1.Schema({
    teachingAndLearning: [teachingLearning_1.averageResult],
    classEngagement: {
        type: Number,
        required: true,
    },
    studentFeedback: teachingLearning_1.studentFeedback,
    peerFeedback: teachingLearning_1.peerFeedback,
});
