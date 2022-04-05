import express from "express";
import "dotenv/config";
import noteRoutes from "./routes/noteRoutes.js";

const app = new express();

app.use(express.json());

app.use("/notes", noteRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Notes app listening on port ${process.env.PORT}...`);
});
