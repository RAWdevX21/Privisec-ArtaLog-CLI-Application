import inquirer from "inquirer";
import {
  readCollection,
  updateCollection,
  readDeletedCollection,
  updateDeletedCollection
} from "../helpers.js";

const inform = console.log;
const informErr = console.error;
const artCollection = readCollection();
const artworkNames = artCollection.map((artwork) => artwork.name);

/*𒁍𒁁═══════════════════════════════════════════════════𒆰𒁄𒁈𒓱*/
// FUNCTION - creates a new cart for the user

export default async function createNewCart() {}
