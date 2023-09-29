"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examinationDuties = void 0;
const mongoose_1 = require("mongoose");
exports.examinationDuties = new mongoose_1.Schema({
    dutyType: {
        type: String,
        required: true,
        enum: [
            "Exam Related",
            "Evaluation of Answer Scripts",
            "Question Paper Setting",
        ],
    },
    assignedBy: {
        type: String,
        required: true,
        enum: ["University", "Institute"],
    },
});
