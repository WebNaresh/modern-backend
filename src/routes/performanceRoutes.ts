import express, { Router } from "express";
import { performance } from "../controller/performance-evaluation";

const router: Router = express.Router();

router.route("/create").get(performance);

export default router;
