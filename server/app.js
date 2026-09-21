import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import projectRouter from "./routes/projectRoutes.js";

const app = express();
const allowedOrigins = (process.env.ORIGINS || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

await connectToDatabase();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (_req, res) => res.send("server is Live!"));
app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);

app.use((err, _req, res, _next) => {
  console.error(`[Error] ${err.message}`);
  res.status(500).json({ error: err.message });
});

export default app;
