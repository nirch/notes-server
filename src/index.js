import express from "express";
import "dotenv/config";
import cors from "cors";
import knex from "knex";
import noteRoutes from "./routes/noteRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import logRoute from "./middlewares/logRoute.js";
import knexConfig from "./data/knexfile.js";

const app = new express();
const db = knex(knexConfig);

app.use(cors());
app.use(express.json());
app.use(logRoute);

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
