import dotenv from "dotenv";
import { Server } from "http";
import { Server as SocketIoServer } from "socket.io";
import app from "./app";
import connectDatabase from "./config//database";

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
dotenv.config();

// Connecting to database
connectDatabase();

const server: Server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

const users: { [key: string]: string } = {};

// Socket.io connection
const io: SocketIoServer = new SocketIoServer(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});
type OnlineUsersMap = Map<string, string>;
const onlineUsers: OnlineUsersMap = new Map<string, string>();
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
process.on("unhandledRejection", (err: any) => {
  console.log(`Error: ${err?.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
