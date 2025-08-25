import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { CheckboxSize } from "../../foundation/Checkbox";

interface CheckboxProps {
  size?: CheckboxSize;
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
      options: Object.values(CheckboxSize),
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    size: CheckboxSize.XLarge,
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    size: CheckboxSize.XLarge,
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    size: CheckboxSize.XLarge,
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    size: CheckboxSize.XLarge,
    checked: true,
    disabled: true,
  },
};

export const XLarge: Story = {
  args: {
    size: CheckboxSize.XLarge,
    checked: false,
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    size: CheckboxSize.Large,
    checked: false,
    disabled: false,
  },
};

export const Medium: Story = {
  args: {
    size: CheckboxSize.Medium,
    checked: false,
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    size: CheckboxSize.Small,
    checked: false,
    disabled: false,
  },
};

export const XSmall: Story = {
  args: {
    size: CheckboxSize.XSmall,
    checked: false,
    disabled: false,
  },
};
