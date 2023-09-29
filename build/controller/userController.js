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
exports.login = exports.getAllUser = exports.register = exports.test = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const catchAsyncError_1 = __importDefault(require("../middleware/catchAsyncError"));
const user_1 = __importDefault(require("../models/user/user"));
const sendToken_1 = __importDefault(require("../utils/sendToken"));
exports.test = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "Route is working" });
    // const {  } = req.body
}));
exports.register = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, userImage, role, } = req.body;
    const existed = yield user_1.default.findOne({ name, email }).populate("name");
    if (existed) {
        existed.password = null;
        return res.status(200).json({
            success: true,
            message: "User exist please try Log IN",
        });
    }
    else {
        const user = yield user_1.default.create({
            name,
            email,
            userImage,
            password,
            role,
        });
        user.password = null;
        (0, sendToken_1.default)(user, res, 200);
    }
}));
exports.getAllUser = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    let users = yield user_1.default.find({ _id: { $ne: userId } }).select([
        "name",
        "email",
        "userImage",
        "_id",
    ]);
    let usersString = yield jsonwebtoken_1.default.sign({ users }, process.env.JWT_SECRETE, {
        expiresIn: process.env.JWT_EXPIRE,
    });
    res.status(200).json({
        success: true,
        usersString,
    });
}));
exports.login = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, } = req.body;
    const existed = yield user_1.default.findOne({ email });
    if (existed) {
        const result = yield existed.compareJWTToken(password);
        if (result) {
            existed.password = null;
            (0, sendToken_1.default)(existed, res, 200);
        }
        else {
            res.status(401).json({
                success: false,
                user: null,
            });
        }
    }
}));
