/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  refs: {
    "@chakra-ui/react": { disable: true },
  },
};

export default config;