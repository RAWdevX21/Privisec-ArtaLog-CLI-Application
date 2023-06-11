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
// FUNCTION - appends the given name of artwor to the cart

function addToCart() {
  // Prompt the user to select an artwork from a list or enter the artwork's id/name
  // Add the selected artwork to the cart.
}
/* --------------------------------------------------------- */
export { addToCart };
