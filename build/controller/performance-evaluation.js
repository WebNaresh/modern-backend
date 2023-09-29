"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performance = void 0;
const catchAsyncError_1 = __importDefault(require("../middleware/catchAsyncError"));
const performance_1 = __importDefault(require("../models/performanc-evaluation/performance"));
exports.performance = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { departmentName, facaultyName, degreeDuringPeriod, userWhoAppliedForm, } = req.body;
    const form = yield performance_1.default.create({
        departmentName,
        facaultyName,
        degreeDuringPeriod,
        userWhoAppliedForm,
    });
    return res.status(200).json({
        success: true,
        form,
    });
}));
