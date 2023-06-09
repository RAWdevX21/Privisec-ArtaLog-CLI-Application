import inquirer from "inquirer";
import { readCollection, updateCollection } from "./helpers.mjs";
const inform = console.log;

// Function to create a new artwork
function create() {
  const nameOfArtwork = process.argv.splice(3).join(" ");
  inform("This is the name of the artpiece: " + nameOfArtwork);
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
        message: "Enter the medium of the artwork:"
      },
      {
        type: "input",
        name: "dimensions",
        message: "Enter the dimensions of the artwork:"
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
        message: "Enter the image path of the artwork:"
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

      const collection = readCollection();
      collection.push(newArtwork);
      updateCollection(collection);

      console.log("Artwork created successfully!");
    });
}

// Function to list all artworks
function listWorks() {
  const collection = readCollection();

  if (collection.length === 0) {
    console.log("No artworks found.");
  } else {
    console.log("Artworks:");
    collection.forEach((artwork) => {
      console.log(`- ${artwork.name} (${artwork.artist})`);
    });
  }
}

// Function to display details of a specific artwork
function displayDetails() {
  // Prompt the user to select an artwork from a list or enter the artwork's id/name
  // Retrieve the selected artwork from the collection and display its details
  // Handle cases where the artwork is not found
}

// Function to delete an artwork
function deleteWork() {
  // Prompt the user to select an artwork from a list or enter the artwork's id/name
  // Remove the selected artwork from the collection
  // Handle cases where the artwork is not found
  // Update the collection file
}

// Function to update an artwork
function updateWork() {
  // Prompt the user to select an artwork from a list or enter the artwork's id/name
  // Prompt the user for the updated details of the artwork
  // Update the selected artwork in the collection
  // Handle cases where the artwork is not found
  // Update the collection file
}

// Function to add an artwork to the cart
function addToCart() {
  // Prompt the user to select an artwork from a list or enter the artwork's id/name
  // Add the selected artwork to the cart.
}

export { create, listWorks, displayDetails, deleteWork, updateWork, addToCart };
