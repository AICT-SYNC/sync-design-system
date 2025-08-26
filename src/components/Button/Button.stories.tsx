import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import { ButtonVariant } from "../../foundation/Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: Object.values(ButtonVariant),
    },
    children: { control: "text" },
    withIcon: { 
      control: { type: "select" },
      options: [undefined, ...Object.values(SyncIcons)]
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: ButtonVariant.Primary,
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.Secondary,
    children: "Secondary Button",
  },
};
