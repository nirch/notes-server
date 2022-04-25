import express from "express";
import "dotenv/config";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import db from "./data/db.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = new express();

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan(process.env.LOG_LEVEL));
app.use(
  `/${process.env.UPLOAD_FOLDER}`,
  express.static(process.env.UPLOAD_FOLDER)
);

app.use("/notes", noteRoutes);
app.use("/auth", authRoutes);

db.migrate
  .latest()
  .then((migration) => {
    console.log("Connected to DB", migration);
    app.listen(process.env.PORT, () => {
      console.log(`Notes app listening on port ${process.env.PORT}...`);
    });
  })
  .catch((err) => console.log(err));
