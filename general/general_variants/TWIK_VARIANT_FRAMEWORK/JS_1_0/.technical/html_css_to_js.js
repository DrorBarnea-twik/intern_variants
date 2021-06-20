const fs = require("fs");
const htmlFilesDir = "../src/html";
const path = require("path");

//
//
//
// #############################################################################################################
/**
 *
 * @param {string} src
 * @param {string} dest
 */
// -------------------------------------------------------------------------------------------------------------
const convert = (src, dest) => {
  let content = fs.readFileSync(src);

  const stream = fs.createWriteStream(dest);
  stream.once("open", function (fd) {
    stream.write(`export default \`
${content}
\`;
  `);
    stream.end();
  });
};

//
//
//
// #############################################################################################################
/**
 * Get an array with file names in the "html" folder.
 * @returns {array} Array with all file names in the "html" folder
 */
// -------------------------------------------------------------------------------------------------------------
const getHTMLfiles = () => {
  return fs.readdirSync(path.resolve(__dirname, htmlFilesDir));
};

//
//
//
// #############################################################################################################
// activation
// -------------------------------------------------------------------------------------------------------------
// html
getHTMLfiles().forEach((html) =>
  convert(`src/html/${html}`, `src/temp/${html}.js`)
);
// css
convert("src/temp/index.css", "src/temp/css.js");
