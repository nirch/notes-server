import express from "express";
import "dotenv/config";
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import logRoute from "./middlewares/logRoute.js";

const app = new express();

app.use(cors());
app.use(express.json());
app.use(logRoute);

app.use("/notes", noteRoutes);
app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Notes app listening on port ${process.env.PORT}...`);
});
