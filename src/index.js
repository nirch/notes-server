import express from "express";
import "dotenv/config";

const app = new express();

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(process.env.PORT, () => {
  console.log(`Notes app listening on port ${process.env.PORT}...`);
});
