import inquirer from "inquirer";
import { readCollection, updateCollection } from "../helpers.js";

const inform = console.log;
const informErr = console.error;
const artCollection = readCollection();
const artworkNames = artCollection.map((artwork) => artwork.name);

/*𒁍𒁁═══════════════════════════════════════════════════𒆰𒁄𒁈𒓱*/
// FUNCTION -  to create & add new artpiece

export default async function createNewEntry() {
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
