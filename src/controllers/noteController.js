import noteModel from "../models/noteModel.js";

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
    const newNote = await noteModel.addNote({
      ...req.body,
      userId: req.user.id,
    });
    res.send(newNote);
  } catch (err) {
    next(err);
  }
}

export default { getNotes, addNote };
