import fs from "fs";
import { nanoid } from "nanoid";

async function getNotes() {
  const response = await fs.promises.readFile("src/data/notes.json");
  return JSON.parse(response);
}

export default { getNotes };
