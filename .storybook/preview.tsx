import { Preview } from '@storybook/react-webpack5';
import Provider from '../src/components/Provider/Provider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    }
  },
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
};

export default preview;