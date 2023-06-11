import inquirer from "inquirer";
import { readCollection } from "../helpers.mjs";

const inform = console.log;
const artCollection = readCollection();
const artworkNames = artCollection.map((artwork) => artwork.name);

/*𒁍𒁁═══════════════════════════════════════════════════𒆰𒁄𒁈𒓱*/
// FUNCTION - to display details of a specific artwork

function displayArtworkDetails(artwork) {
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
export { displayArtworkDetails };
