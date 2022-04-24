import fs from "fs";
import db from "../data/db.js";

async function getNotes(userId) {
  const notes = userId
    ? await db("notes").where({ userId }).orderBy("created_at", "desc")
    : await db("notes").orderBy("created_at", "desc");
  return notes;
}

async function addNote(newNote) {
  const [newNoteId] = await db("notes").insert(newNote);
  const noteAdded = await db("notes").where({ id: newNoteId }).first();
  return noteAdded;
}

export default { getNotes, addNote };
