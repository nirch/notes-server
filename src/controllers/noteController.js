import noteModel from "../models/noteModel.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

async function getNotes(req, res, next) {
  try {
    const notes = await noteModel.getNotes(req.user.id);
    res.send(notes);
  } catch (err) {
    next(err);
  }
}

async function addNote(req, res, next) {
  try {
    const uploadResult =
      req.file && (await cloudinary.uploader.upload(req.file.path));
    req.file && uploadResult && fs.unlink(req.file.path);
    const newNote = await noteModel.addNote({
      ...req.body,
      image_url: uploadResult ? uploadResult.url : null,
      userId: req.user.id,
    });
    res.send(newNote);
  } catch (err) {
    next(err);
  }
}

export default { getNotes, addNote };
