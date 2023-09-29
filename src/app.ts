import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Express } from "express";
import { performance } from "./controller/performance-evaluation";
import testRoute from "./routes/userRoute";
import errorMiddleware from "./utils/error";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
app.use("/route", testRoute);
app.use("/performance", performance);
app.use("/", (req, res) => {
  res.json({
    message: "hello",
  });
});
app.use(errorMiddleware);

export default app;
