// #############################################################################################################
//
// INTERPOLATE HTML OR CSS STRING
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Evaluate code between "{{" and "}}" and interpolate results.
 */
export const interp = (str: string, data: LooseObject): string => {
  const regexp = /{{(\w+)}}/g;
  let match: RegExpMatchArray;

  while (str.match(regexp)) {
    match = str.match(regexp) || [];
    let dirty_variable: string = match[0] || ""
    let variable: string = dirty_variable.substring(2, dirty_variable.length - 2);
    str = str.replace(dirty_variable, `${data.get(variable)}`);
  }
  return str;
};

// #############################################################################################################
//
// GET CSS SELECTOR
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Generate unique CSS Selector.
 */
export const get_CSS_Selector = (el: HTMLElement | Element) => {
  let element: HTMLElement | Element | null = el;
  const path_array: string[] = [];

  while (
    element?.nodeName.toLowerCase() != "html" &&
    (element = element?.parentElement) &&
    path_array.unshift(
      element.nodeName.toLowerCase() +
      (element.id ? "#" + element.id : "") +
      (element.className ? "." + element.className.replace(/\s+/g, ".") : "")
    )
  );
  return path_array.join(" > ");
};

//
//
//
//
// #############################################################################################################
//
// ADD FONT AWESOME
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Add Font Awesome to the website. Appends a <link> with font awesome css to the head.
 */
export const addFontAwesome = () => {
  document.head.insertAdjacentHTML(
    "beforeend",
    `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        `
  );
};

// #############################################################################################################
//
// GET COOKIE BY NAME
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Get cookie value by name.
 */
export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2 ? parts.pop()?.split(";").shift() : "";
};
