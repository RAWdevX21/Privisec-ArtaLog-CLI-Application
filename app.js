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
} from "./src/commands.js";

const inform = console.log;
const action = process.argv[2].toLowerCase();
const input = process.argv.splice(3).join(" ");

if (input) {
inform(`This is the current command: ${action}
This is current input: ${input}`);
}

function runApp() {
  switch (action) {
    case "create":
      create(input);
      break;
    case "show":
      show(input);
      break;
    case "list":
      list(input);
      break;
    case "filter":
      filter(input);
      break;
    case "delete":
      destroy(input);
      break;
    case "update":
      update(input);
      break;
    case "new-cart":
      newCart();
      break;
    case "add":
      add(input);
      break;
    case "cancel":
      cancel(input);
      break;
    default:
      inform("The action command was not provided");
  }
}
runApp();

export { input };
