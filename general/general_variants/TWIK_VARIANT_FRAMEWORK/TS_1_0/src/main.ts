// add jquery
window.$tw = require("jquery"); // IN CASE IT NEEDS TO BE TWEAKABLE: replace this with a manual addition of minified jquery into readable final
const $tw = window.$tw;
// import functions
import { qSel, addE, insAdjHTML } from "./utils/shortcuts";
import {
  interp,
} from "./utils/useful_functions";
import dh from "./js/displayHide";
// import constants
import sel from "./constants/selectors";
import cond from "./constants/conditions";
//import CSS and HTML as long strings
import css from "./temp/css";
import overlayHTML from "./temp/overlay.html";
import popupHTML from "./temp/popup.html";

const data: LooseObject = {
  greeting: "This is Twik Variant Framework",
  greeting_id: "greeting"
}

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
