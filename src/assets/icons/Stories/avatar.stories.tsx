import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../avatar";

interface AvatarProps {
  size?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'xxl';
}

const meta: Meta<AvatarProps> = {
  title: "Icons/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["extraSmall", "small", "medium", "large", "extraLarge", "xxl"],
    },
  },
};

export default meta;

type Story = StoryObj<AvatarProps>;

export const ExtraSmall: Story = {
  args: {
    size: "extraSmall",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "extraLarge",
  },
};

export const XXL: Story = {
  args: {
    size: "xxl",
  },
};
