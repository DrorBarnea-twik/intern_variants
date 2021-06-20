const path = require("path");

module.exports = {
  entry: "./main.js",
  mode: "production",
  // devtool: "source-map",
  output: {
    filename: "final.js",
    path: path.resolve(__dirname, "final"),
  },
};
