"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.programAttended = void 0;
const mongoose_1 = require("mongoose");
exports.programAttended = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    organizer: {
        type: String,
        required: true,
    },
});
