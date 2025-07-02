// import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};