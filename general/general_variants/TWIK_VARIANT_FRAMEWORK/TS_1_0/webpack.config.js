const path = require("path");
module.exports = {
  entry: "./build/main.js",
  mode: "development",
  // devtool: "source-map",
  output: {
    filename: "final.js",
    path: path.resolve(__dirname, "final"),
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".js"],
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
  },
};
