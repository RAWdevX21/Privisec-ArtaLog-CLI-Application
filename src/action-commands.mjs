import inquirer from "inquirer";
import {
  readCollection,
  updateCollection,
  readDeletedCollection,
  updateDeletedCollection
} from "./helpers.mjs";

const inform = console.log;
const informErr = console.error;
//collectionFile = readCollection();
const artCollection = readCollection();
//deletedDataFile = readDeletedCollection();
const artworkNames = artCollection.map((artwork) => artwork.name);

/*𒁍𒁁═══════════════════════════════════════════════════𒆰𒁄𒁈𒓱*/
// FUNCTION -  to create & add new artpiece

function create() {
  const nameOfArtwork = process.argv.splice(3).join(" ");
  return inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "Enter the ID of the artwork:"
      },
      {
        type: "input",
        name: "name",
        message: "Enter the name of the artwork:",
        default: nameOfArtwork
      },
      {
        type: "input",
        name: "year",
        message: "Enter the year of the artwork:"
      },
      {
        type: "input",
        name: "artist",
        message: "Enter the artist of the artwork:"
      },
      {
        type: "input",
        name: "medium",
        message: "Enter the medium of the artwork:",
        default: "oil on canvas"
      },
      {
        type: "input",
        name: "dimensions",
        message: "Enter the dimensions of the artwork:",
        default: "8.5 in x 11 in"
      },
      {
        type: "input",
        name: "venue",
        message: "Enter the venue of the artwork:"
      },
      {
        type: "input",
        name: "appraisalPriceInCents",
        message: "Enter the appraisal price (in cents) of the artwork:"
      },
      {
        type: "input",
        name: "image",
        message: "Enter the image path of the artwork:",
        default: "./assets/art-images/example-work.jpg"
      }
    ])
    .then((answers) => {
      const {
        id,
        name,
        year,
        artist,
        medium,
        dimensions,
        venue,
        appraisalPriceInCents,
        image
      } = answers;
      const newArtwork = {
        id,
        name,
        year,
        artist,
        medium,
        dimensions,
        venue,
        appraisalPriceInCents: parseInt(appraisalPriceInCents),
        image
      };

      artCollection.push(newArtwork);
      console.log("Artwork created successfully!");

      updateCollection(artCollection);
    });
}
/* --------------------------------------------------------- */
// FUNCTION - to display details of a specific artwork

function displayDetails(artwork) {
  // if the user provides the id or name of artwork, then it returns the artpiece
  let artDetails = {};
  const selection = [];

  if (artwork.length !== 0) {
    const foundArtwork = artCollection.find((artpiece) => {
      return artwork === artpiece.id || artwork === artpiece.name;
    });

    if (foundArtwork) {
      artDetails = { ...foundArtwork };
      inform(JSON.parse(JSON.stringify(artDetails)));
    } else {
      inform(
        "This artpiece does not exist in the Collection. Try to 'create' this piece as new artwork"
      );
    }
    return artDetails;
  }

  /* if the user doesn't provide the id or name, by default, a list of artpieces are provided to choose from
   */
  return inquirer
    .prompt([
      {
        type: "list",
        name: "title",
        message: "Select one of the following artpieces to display.",
        choices: artworkNames
      },
      {
        type: "confirm",
        name: "askAgain",
        message:
          "Want to select another artpiece to display (hit enter for YES)?",
        default: true
      }
    ])
    .then((answers) => {
      artDetails = inform(
        JSON.parse(
          JSON.stringify({
            ...artCollection.find((artpiece) => answers.title === artpiece.name)
          })
        )
      );
      selection.push(artDetails);
      if (answers.askAgain) {
        displayDetails(artwork);
      }
    });
}
/* --------------------------------------------------------- */
// FUNCTION - to delete an artwork

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
        inform("Artwork added to deleted-works.json");
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
// FUNCTION - to list all artworks

function listWorks() {
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
// FUNCTION - to update an artwork

function updateWork() {
  // Prompt the user to select an artwork from a list or enter the artwork's id/name
  // Prompt the user for the updated details of the artwork
  // Update the selected artwork in the collection
  // Handle cases where the artwork is not found
  // Update the collection file
}
/* --------------------------------------------------------- */
// FUNCTION - to add an artwork to the cart

function addToCart() {
  // Prompt the user to select an artwork from a list or enter the artwork's id/name
  // Add the selected artwork to the cart.
}
/* --------------------------------------------------------- */
// FUNCTION - to cancel cart items

function cancelCart() {}
/*𒁍𒁁═══════════════════════════════════════════════════𒆰𒁄𒁈𒓱*/
export {
  create,
  listWorks,
  displayDetails,
  deleteArtwork,
  updateWork,
  addToCart,
  cancelCart
};
