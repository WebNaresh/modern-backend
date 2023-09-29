"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const performance_evaluation_1 = require("./controller/performance-evaluation");
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const error_1 = __importDefault(require("./utils/error"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Import routes
app.use("/route", userRoute_1.default);
app.use("/performance", performance_evaluation_1.performance);
app.use("/", (req, res) => {
    res.json({
        message: "hello",
    });
});
app.use(error_1.default);
exports.default = app;
