"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendToken = (user, res, statusCode) => {
    const token = user.getJWTToken();
    // options for cookie
    const options = {
        expires: new Date(Date.now() + Number(process.env.COKKIE_EXPIRE) * 24 * 60 * 1000),
        httpOnly: true,
    };
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token,
    });
};
exports.default = sendToken;
