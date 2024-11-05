/** @type { import('@storybook/html-webpack5').StorybookConfig } */

const { ClassNames } = require('@storybook/theming');

const config = {
 
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {name: "storybook-design-token", options: { preserveCSSVars: true }},
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  staticDirs: [
    "../stories/assets"
  ],
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "**/*.tokens.scss"
  ]
};
export default config;
