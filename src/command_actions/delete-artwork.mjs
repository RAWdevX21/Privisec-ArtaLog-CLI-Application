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
// FUNCTION - to delete artwork specified by the user

function deleteArtwork() {
  if (artCollection.length === 0) {
    console.log("No artworks found in the collection.");
    return;
  }

  // Prompt the user to select an artwork to delete
  inquirer
    .prompt([
      // Create a list of artwork names for the user to choose from
      {
        type: "list",
        name: "selectedArtwork",
        message: "Select an artwork to delete:",
        choices: artworkNames
      },
      {
        type: "confirm",
        name: "confirmDelete",
        message: "Are you sure you want to delete this artwork?",
        default: false
      }
    ])
    .then((answers) => {
      const { selectedArtwork, confirmDelete } = answers;

      if (!confirmDelete) {
        inform("Delete operation cancelled.");
        return;
      }

      const deletedArtwork = artCollection.find(
        (artwork) => artwork.name === selectedArtwork
      );

      if (!deletedArtwork) {
        inform("Selected artwork not found in the collection.");
        return;
      }

      // Add the selected artwork to deleted-works.json as a recovery method
      try {
        const deletedDataFile = readDeletedCollection();
        deletedDataFile.push(deletedArtwork);
        updateDeletedCollection(deletedDataFile);
      } catch (error) {
        informErr("Error adding artwork to deleted-works.json:", error.message);
        return;
      }

      // Remove the selected artwork from collection.json
      const updatedCollection = artCollection.filter(
        (artwork) => artwork.name !== selectedArtwork
      );
      updateCollection(updatedCollection);

      inform("Artwork deleted successfully.");
    })
    .catch((error) => {
      informErr("Error during artwork deletion:", error.message);
    });
}
/* --------------------------------------------------------- */
export { deleteArtwork };
