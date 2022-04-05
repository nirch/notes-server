import noteModel from "../models/noteModel.js";

function getNotes(req, res) {
  res.send("get notes");
}

function addNote(req, res) {
  res.send("add note");
}

export default { getNotes, addNote };
