"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intelectualProperty = exports.patents = void 0;
const mongoose_1 = require("mongoose");
exports.patents = new mongoose_1.Schema({
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
exports.intelectualProperty = new mongoose_1.Schema({
    patents: [exports.patents],
    copyRights: [exports.patents],
    tradeMarks: [exports.patents],
});
