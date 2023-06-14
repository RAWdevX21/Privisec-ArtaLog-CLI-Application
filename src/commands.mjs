import createNewEnty from "./command_actions/create-new-entry.mjs";
import displayArtworkDetails from "./command_actions/display-artwork-details.mjs";
import listCollection from "./command_actions/list-collection.mjs";
import filterCollection from "./command_actions/filter-collection.mjs";
import deleteArtwork from "./command_actions/delete-artwork.mjs";
import updateArtwork from "./command_actions/update-artwork.mjs";
import createNewCart from "./command_actions/create-new-cart.mjs";
import addToCart from "./command_actions/add-to-cart.mjs";
import emptyCart from "./command_actions/empty-cart.mjs";

/*𒁍𒁁══════════════════════════════════════════════𒆰𒁄𒁈𒓱*/
// An organized list of all the commands exported to app.mjs

const create = createNewEnty();
const show = displayArtworkDetails();
const list = listCollection();
const filter = filterCollection();
const destroy = deleteArtwork();
const update = updateArtwork();
const newCart = createNewCart();
const add = addToCart();
const cancel = emptyCart();

/* --------------------------------------------------------- */
export { create, show, list, filter, destroy, update, newCart, add, cancel };
