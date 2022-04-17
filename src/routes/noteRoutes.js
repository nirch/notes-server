import express from "express";
import noteController from "../controllers/noteController.js";
import authenticated from "../middlewares/authenticated.js";
import noteValidation from "../middlewares/noteValidation.js";

const router = express.Router();

router
  .route("/")
  .get(authenticated, noteController.getNotes)
  .post(authenticated, noteValidation, noteController.addNote);

export default router;
