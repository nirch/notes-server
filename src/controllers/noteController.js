import noteModel from "../models/noteModel.js";

async function getNotes(req, res) {
  try {
    const notes = await noteModel.getNotes();
    res.send(notes);
  } catch (err) {
    next(err);
  }
}

function addNote(req, res) {
  res.send("add note");
}

export default { getNotes, addNote };
