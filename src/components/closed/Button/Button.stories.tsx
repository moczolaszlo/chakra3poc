import { Meta, StoryObj } from "@storybook/react-webpack5";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
    args: {
        children: "Button label",
        leftIconName: "CheckCircle",
        rightIconName: "SelectChevron",
        size: "md",
        variant: "primary",
    },
    component: Button,
};

export default meta;

export const WithProps: StoryObj<ButtonProps> = {};
