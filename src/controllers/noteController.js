import noteModel from "../models/noteModel.js";

async function getNotes(req, res, next) {
  try {
    const notes = await noteModel.getNotes();
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
