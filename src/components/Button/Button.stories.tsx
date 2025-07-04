import { Meta, StoryObj } from '@storybook/react-webpack5';

import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  component: Button,
  args: {
    children: 'Button label',
    disabled: false,
    size: 'lg',
    variant: 'primary',
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {};
