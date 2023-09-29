"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const performance_evaluation_1 = require("../controller/performance-evaluation");
const router = express_1.default.Router();
router.route("/create").get(performance_evaluation_1.performance);
exports.default = router;
