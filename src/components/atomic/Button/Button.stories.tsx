import { Meta, StoryObj } from "@storybook/react-webpack5";

import { Box, Button, ButtonProps } from "@chakra-ui/react";

const meta: Meta<ButtonProps> = {
  component: Button,
};

export default meta;

export const WithProps: StoryObj<ButtonProps> = {
  args: {
    children: "Button label",
    disabled: false,
    loading: false,
    variant: "primary",
  },
};

export const Showcase: StoryObj<ButtonProps> = {
  render: () => {
    return <Box display="flex" gap="8">
      <Button variant="primary">Primary Small</Button>
      <Button variant="secondary">Primary Medium</Button>
      <Button variant="tertiary">Primary Large</Button>
      <Button variant="danger-primary">Danger Primary</Button>
      <Button variant="danger-secondary">Danger Secondary</Button>
      <Button variant="danger-tertiary">Danger Tertiary</Button>
    </Box>
  }
};
