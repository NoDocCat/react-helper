/**
 * 此插件用于处理 demo 中的 import * from "@ndct/react-helper"
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = () => {
  return {
    name: "library-loader-plugin",
    configureWebpack() {
      return {
        resolve: {
          alias: {
            "@ndct/react-helper": path.resolve(__dirname, "../../"),
          },
        },
      };
    },
  };
};
