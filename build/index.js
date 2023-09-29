"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const socket_io_1 = require("socket.io");
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./config//database"));
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});
// Config
dotenv_1.default.config();
// Connecting to database
(0, database_1.default)();
const server = app_1.default.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
const users = {};
// Socket.io connection
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});
const onlineUsers = new Map();
// io.on("connect", (socket) => {
//   socket.emit("hello", "ok");
//   socket.on("hello", (arg) => {
//     console.log(arg); // world
//   });
//   socket.on("add-user", (userId) => {
//     console.log(socket.id);
//     onlineUsers.set(userId, socket.id);
//   });
//   socket.on("send-msg", (data) => {
//     const sendUserSocket2 = onlineUsers.get(data.from);
//     console.log(onlineUsers.get(data.from));
//     if (sendUserSocket2) {
//       console.log(onlineUsers && data.reciever);
//       io.to(onlineUsers.get(data.reciever)).emit("msg-recieve", data);
//     } else {
//       console.log("user offline");
//     }
//   });
// });
// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err === null || err === void 0 ? void 0 : err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});
