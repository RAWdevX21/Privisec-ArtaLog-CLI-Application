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
// FUNCTION - to list all artworks

function listAllWorks() {
  if (artCollection.length === 0) {
    inform("No artworks found.");
  } else {
    inform("Artworks: ");
    artCollection.forEach((artwork) => {
      const price = `$${artwork.appraisalPriceInCents / 100}`;
      inform(`
      ➣ ${artwork.name} by ${artwork.artist} (${artwork.year})
        - medium: ${artwork.medium}
        - appraisal value: ${price}`);
    });
  }
}
/* --------------------------------------------------------- */
export { listAllWorks };
