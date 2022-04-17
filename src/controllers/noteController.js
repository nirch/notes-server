import noteModel from "../models/noteModel.js";
import jwt from "jsonwebtoken";

async function getNotes(req, res, next) {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const authenticatedUser = jwt.verify(token, process.env.JWT_SECRET);
    console.log(authenticatedUser);
    const notes = await noteModel.getNotes(req.query.userId);
    res.send(notes);
  } catch (err) {
    next(err);
  }
}

async function addNote(req, res, next) {
  try {
    const newNote = await noteModel.addNote(req.body);
    res.send(newNote);
  } catch (err) {
    next(err);
  }
}

export default { getNotes, addNote };
