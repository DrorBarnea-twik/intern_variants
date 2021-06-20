// shortcuts

//
//
//
// ############################################################################
/**
 * Shortcut for document.querySelector
 */
export const qSel = (selector: string): HTMLElement => document.querySelector(selector)!;

//
//
//
// ############################################################################
/**
 * Shortcut for document.querySelectorAll
 */
export const qSelAll = (selector: string): NodeListOf<HTMLElement> => document.querySelectorAll(selector)!;

//
//
//
// ############################################################################
/**
 * Shortcut for Element.addEventListener
 */
export const addE = (el: HTMLElement | Window, event: string, callback: EventListenerOrEventListenerObject) => {
  el.addEventListener(event, callback);
};

//
//
//
// ############################################################################
/**
 * Shortcut for document.insertAdjacentHTML
 */
export const insAdjHTML = (el: HTMLElement, location: InsertPosition, html: string) => {
  el.insertAdjacentHTML(location, html);
};

//
//
//
// ############################################################################
/**
 * Shortcut for document.insertAdjacentElement
 * @param {Element} el
 * @param {string} location Choices: beforebegin, beforeend, afterbegin, afterend
 * @param {Element} ins_el
 */
export const insAdjEl = (el: HTMLElement, location: InsertPosition, ins_el: Element) => {
  el.insertAdjacentElement(location, ins_el);
};
