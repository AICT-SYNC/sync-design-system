import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};