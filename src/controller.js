import inquirer from "inquirer";
import { readCollection, updateCollection } from "./helpers.js";
import {
  create,
  listWorks,
  displayDetails,
  deleteWork,
  updateWork,
  addToCart
} from "./action-commands.js";

const inform = console.log;
inform("this is process.argv: " + process.argv);
// Function to prompt the user for the desired action
function promptAction() {
  return inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "Create",
        "List",
        "Details",
        "Delete",
        "Update",
        "Add to Cart",
        "Cancel Cart",
        "Exit"
      ]
    }
  ]);
}

export { promptAction };
