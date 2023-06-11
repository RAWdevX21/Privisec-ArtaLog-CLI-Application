import {
  create,
  show,
  list,
  filter,
  destroy,
  update,
  newCart,
  add,
  cancel
} from "./src/commands.mjs";

const inform = console.log;
const action = process.argv[2].toLowerCase();

function runApp() {
  switch (action) {
    case "create":
      create();
      break;
    case "show":
      show(process.argv.splice(3).join(" "));
      break;
    case "list":
      list();
      break;
    case "filter":
      filter();
      break;
    case "delete":
      destroy();
      break;
    case "update":
      update();
      break;
    case "new-cart":
      newCart();
      break;
    case "add":
      add();
      break;
    case "cancel":
      cancel();
      break;
    default:
      inform("The action command was not provided");
  }
}

runApp();
