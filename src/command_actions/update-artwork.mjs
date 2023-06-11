import inquirer from "inquirer";
import {
  readCollection,
  updateCollection,
  readDeletedCollection,
  updateDeletedCollection
} from "../helpers.mjs";

const inform = console.log;
const informErr = console.error;
const artCollection = readCollection();
const artworkNames = artCollection.map((artwork) => artwork.name);
/*𒁍𒁁═══════════════════════════════════════════════════𒆰𒁄𒁈𒓱*/
// FUNCTION - prompts the user to select an artpiece or provide the title to update

function updateArtwork() {
  // Prompt the user to select an artwork from a list or enter the artwork's id/name
  // Prompt the user for the updated details of the artwork
  // Update the selected artwork in the collection
  // Handle cases where the artwork is not found
  // Update the collection file
}
/* --------------------------------------------------------- */
export { updateArtwork };
