import { ChakraProvider } from "@chakra-ui/react";
import { bitkitTheme } from '../src/theme/index.js';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider value={bitkitTheme}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;