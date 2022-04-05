import express from "express";
import noteController from "../controllers/noteController.js";
import noteValidation from "../middlewares/noteValidation.js";

const router = express.Router();

router
  .route("/")
  .get(noteController.getNotes)
  .post(noteValidation, noteController.addNote);

export default router;
