import { readCollection, updateCollection } from "./src/helpers.mjs";
import {
  create,
  listWorks,
  displayDetails,
  deleteArtwork,
  updateWork,
  addToCart,
  cancelCart
} from "./src/action-commands.mjs";

const inform = console.log;
const collectionData = readCollection();
const artCollection = Array.isArray(collectionData) ? collectionData : [];
const action = process.argv[2].toLowerCase();

function runApp() {
  switch (action) {
    case "create":
      create();
      break;
    case "display":
      displayDetails(process.argv.splice(3).join(" "));
      break;
    case "delete":
      deleteArtwork();
      break;
    case "list":
      listWorks();
      break;
    case "update":
      updateWork();
      break;
    case "add":
      addToCart();
      break;
    case "cancel":
      cancelCart();
      break;
    default:
      inform("The action command was not provided");
  }
}

runApp();
