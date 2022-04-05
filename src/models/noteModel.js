import fs from "fs";
import { nanoid } from "nanoid";

async function getNotes() {
  const response = await fs.promises.readFile("src/data/notes.json");
  return JSON.parse(response);
}

async function addNote(newNote) {
  const notes = await getNotes();
  newNote.id = nanoid(7);
  notes.push(newNote);
  await fs.promises.writeFile("src/data/notes.json", JSON.stringify(notes));
  return newNote;
}

export default { getNotes, addNote };
