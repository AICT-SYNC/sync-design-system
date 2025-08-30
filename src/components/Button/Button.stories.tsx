import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./index";
import { ButtonVariant, ButtonSize } from "../../enums/ButtonEnum";
import { SyncIcons } from "../../assets/icons/SyncIcons";

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
    variant: ButtonVariant.PRIMARY,
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.SECONDARY,
    children: "Secondary Button",
  },
};
