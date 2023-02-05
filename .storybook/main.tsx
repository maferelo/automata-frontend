module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  features: {
    postcss: false,
  },
  framework: "@storybook/react",

  stories: [
    {
      directory: "../src",
      titlePrefix: "MyComponents",
      files: "**/*.stories.*",
    },
  ],
};
