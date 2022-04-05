import express from "express";
import noteController from "../controllers/noteController.js";

const router = express.Router();

router.route("/").get(noteController.getNotes).post(noteController.addNote);

export default router;
