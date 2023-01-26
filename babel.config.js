// @ts-nocheck
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      "@babel/preset-typescript"
    ],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods",
      "@babel/plugin-proposal-private-property-in-object",
      "react-native-reanimated/plugin",
      "styled-components"
    ],
  };
};
