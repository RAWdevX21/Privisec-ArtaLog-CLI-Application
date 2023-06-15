import createNewEnty from "./command_actions/create-new-entry.js";
import displayArtworkDetails from "./command_actions/display-artwork-details.js";
import listCollection from "./command_actions/list-collection.js";
import filterCollection from "./command_actions/filter-collection.js";
import deleteArtwork from "./command_actions/delete-artwork.js";
import updateArtwork from "./command_actions/update-artwork.js";
import createNewCart from "./command_actions/create-new-cart.js";
import addToCart from "./command_actions/add-to-cart.js";
import emptyCart from "./command_actions/empty-cart.js";

/*𒁍𒁁══════════════════════════════════════════════𒆰𒁄𒁈𒓱*/
// An organized list of all the commands exported to app.js

const create = createNewEnty();
const show = displayArtworkDetails();
const list = listCollection();
const filter = filterCollection();
const destroy = deleteArtwork();
const update = updateArtwork();
const newCart = createNewCart();
const add = addToCart(items);
const cancel = emptyCart();

/* --------------------------------------------------------- */
export { create, show, list, filter, destroy, update, newCart, add, cancel };
