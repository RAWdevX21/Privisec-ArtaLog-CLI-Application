import {
  readCollection,
  collectionFile,
  readDeletedData,
  deletedDataFile,
  updateCollection,
  updateDeletedData
} from "./src/helpers.mjs";
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
collectionFile = readCollection();
const artCollection = Array.isArray(collectionFile) ? collectionFile : [];
deletedDataFile = readDeletedData();
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
