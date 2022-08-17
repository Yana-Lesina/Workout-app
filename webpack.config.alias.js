const path = require("path");

module.exports = {
  resolve: {
    alias: {
      // define these based on your needs
      "@globalStyles": path.resolve(__dirname, "src/styles/"),
      "@assets": path.resolve(__dirname, "src/assets/images"),
    },
  },
};
