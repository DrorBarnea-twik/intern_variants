import { qSel, qSelAll, addE, insAdjEl, insAdjHTML } from "./utils/shortcuts";
import {
  get_CSS_Selector,
  addFontAwesome,
  add_or_locate_jQuery,
  interp,
} from "./utils/useful_functions";
import {
  getShopifyCart_fetch,
  getTwikJson_fetch,
} from "./utils/useful_fetches";
import evL from "./js/eventListeners";
import dh from "./js/displayHide";
import env from "./constants/env";
import sel from "./constants/selectors";
import cond from "./constants/conditions";
import css from "./temp/css";
import overlayHTML from "./temp/overlay.html";
import popupHTML from "./temp/popup.html";
window.$tw = require("jquery"); // IN CASE IT NEEDS TO BE TWEAKABLE: replace this with a manual addition of minified jquery into readable final

let data = {
  greeting: "This is Twik Variant Framework",
  greeting_id: "greeting",
};

//
//
//
//
// -----------------------------------------------------------------------------
/**
 * injecting HTML and CSS
 */
// injecting CSS
insAdjHTML(
  document.head,
  "beforeend",
  `<style class="twik-style">${css}</style>`
);

// injecting HTML
insAdjHTML(document.body, "beforeend", overlayHTML);
insAdjHTML(document.body, "beforeend", interp(popupHTML, data));

//
//
//
//
// -----------------------------------------------------------------------------
/**
 * adding event listeners
 */
addE(qSel(sel.POPUP), "click", dh.hidePopup);
addE(qSel(sel.OVERLAY), "click", dh.hidePopup);
if (eval(cond.IF_TEST)) {
  $tw(document).on("mouseleave", dh.displayPopup);
}
addE(window, "click", () => console.log("click"));
