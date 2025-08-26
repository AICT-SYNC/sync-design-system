import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { CheckboxSize } from "../../foundation/Checkbox";

interface CheckboxProps {
  size?: CheckboxSize;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: Object.values(CheckboxSize),
    },
    checked: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    size: CheckboxSize.XL,
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    size: CheckboxSize.XL,
    checked: true,
  },
};

export const XLarge: Story = {
  args: {
    size: CheckboxSize.XL,
    checked: false,
  },
};

export const Large: Story = {
  args: {
    size: CheckboxSize.L,
    checked: false,
  },
};

export const Medium: Story = {
  args: {
    size: CheckboxSize.M,
    checked: false,
  },
};

export const Small: Story = {
  args: {
    size: CheckboxSize.S,
    checked: false,
  },
};

export const XSmall: Story = {
  args: {
    size: CheckboxSize.XS,
    checked: false,
  },
};
