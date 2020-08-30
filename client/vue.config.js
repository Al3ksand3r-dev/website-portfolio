const path = require("path");
module.exports = {
  outputDir: path.resolve(path.join(__dirname, "../server/public")),
  devServer: {
    proxy: "//localhost:5000",
  },
};
