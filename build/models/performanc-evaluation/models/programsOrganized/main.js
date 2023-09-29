"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progamsOrganized = void 0;
const mongoose_1 = require("mongoose");
exports.progamsOrganized = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
});
