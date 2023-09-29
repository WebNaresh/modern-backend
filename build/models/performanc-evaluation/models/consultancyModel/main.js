"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultancyModel = void 0;
const mongoose_1 = require("mongoose");
exports.consultancyModel = new mongoose_1.Schema({
    natureOfWork: {
        type: String,
        required: true,
    },
    agency: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    amountRecieved: {
        type: String,
        required: true,
    },
});
