"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activities = void 0;
const mongoose_1 = require("mongoose");
exports.activities = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["Co-curricular", "Extra-curricular"],
    },
});
