import express from "express";
import dataRouter from "./routes/data.routes";

const app = express();

app.use(express.json());
app.use("/data", dataRouter);

export default app;
