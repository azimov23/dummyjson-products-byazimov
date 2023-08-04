import express from "express";
import { getDatas } from "./data.controller";

const dataRouter = express.Router();

dataRouter.get("/", getDatas);

export default dataRouter;
