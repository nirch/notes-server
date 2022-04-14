import fs from "fs";
import db from "../data/db.js";

async function getNotes(userId) {
  const notes = userId
    ? await db.from("notes").where({ userId })
    : await db.from("notes");
  return notes;
}

async function addNote(newNote) {
  const [newNoteId] = await db.from("notes").insert(newNote);
  const [noteAdded] = await db.from("notes").where({ id: newNoteId });
  return noteAdded;
}

export default { getNotes, addNote };
