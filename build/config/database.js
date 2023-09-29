"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDatabase = () => {
    mongoose_1.default
        .connect(process.env.LOCALHOST)
        .then(() => {
        console.log(`Mongodb connected with server: ${mongoose_1.default.connection.host}`);
    })
        .catch((error) => {
        console.error(`Mongodb connection error: ${error}`);
    });
};
exports.default = connectDatabase;
