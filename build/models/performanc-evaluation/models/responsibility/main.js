"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responsibilities = void 0;
const mongoose_1 = require("mongoose");
exports.responsibilities = new mongoose_1.Schema({
    natureOfWork: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
        enum: ["Department", "Institute"],
    },
});
