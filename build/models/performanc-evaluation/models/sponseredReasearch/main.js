"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponseredResearch = void 0;
const mongoose_1 = require("mongoose");
exports.sponseredResearch = new mongoose_1.Schema({
    scheme: {
        type: String,
        required: true,
    },
    agency: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Awarded", "Submitted"],
        required: true,
    },
    dateOfSubmissionOrAwarded: {
        type: Date,
        required: true,
    },
    grantRecieved: {
        type: String,
        required: true,
    },
});
