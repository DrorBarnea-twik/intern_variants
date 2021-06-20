const path = require("path");

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  // devtool: "source-map",
  devtool: "source-map",
  output: {
    filename: "final.js",
    path: path.resolve(__dirname, "final"),
  },
};
