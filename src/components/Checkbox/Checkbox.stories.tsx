import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

interface CheckboxProps {
  size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["xlarge", "large", "medium", "small", "xsmall"],
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    size: "xlarge",
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    size: "xlarge",
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    size: "xlarge",
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    size: "xlarge",
    checked: true,
    disabled: true,
  },
};

export const XLarge: Story = {
  args: {
    size: "xlarge",
    checked: false,
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    checked: false,
    disabled: false,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    checked: false,
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    checked: false,
    disabled: false,
  },
};

export const XSmall: Story = {
  args: {
    size: "xsmall",
    checked: false,
    disabled: false,
  },
};