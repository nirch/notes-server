import express from "express";
import "./env.js";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import db from "./data/db.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = new express();

console.log("hi from console");
console.log(process.env.NODE_ENV);
console.log(process.env.TEST_VAR);
console.log(process.env.FOO);
console.log(process.env.BLA);

app.use(
  cors({
    origin: ["http://localhost:3000", "http://notes-web-itc.herokuapp.com"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan(process.env.LOG_LEVEL));
app.use(
  `/${process.env.UPLOAD_FOLDER}`,
  express.static(process.env.UPLOAD_FOLDER)
);

app.use("/notes", noteRoutes);
app.use("/auth", authRoutes);

app.get("/test", (req, res) => {
  res.send("hello world!");
});

db.migrate
  .latest()
  .then((migration) => {
    console.log("Connected to DB", migration);
    app.listen(process.env.PORT, () => {
      console.log(`Notes app listening on port ${process.env.PORT}...`);
    });
  })
  .catch((err) => console.log(err));
