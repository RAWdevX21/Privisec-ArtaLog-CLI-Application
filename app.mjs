import { readCollection, updateCollection } from "./src/helpers.mjs";
import {
  create,
  listWorks,
  displayDetails,
  deleteWork,
  updateWork,
  addToCart
} from "./src/action-commands.mjs";

const inform = console.log;

function runApp() {
  const action = process.argv[2].toLowerCase();

  switch (action) {
    case "create":
      create();
      break;
    default:
      inform("The action command was not provided");
  }
}

runApp();
