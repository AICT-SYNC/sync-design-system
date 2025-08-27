import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../avatar";
import { AvatarSizeEnum } from "@foundation";

interface AvatarProps {
  size?: AvatarSizeEnum;
}

const meta: Meta<AvatarProps> = {
  title: "Icons/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: Object.values(AvatarSizeEnum),
    },
  },
};

export default meta;

type Story = StoryObj<AvatarProps>;

export const XS: Story = {
  args: {
    size: AvatarSizeEnum.XS,
  },
};

export const S: Story = {
  args: {
    size: AvatarSizeEnum.S,
  },
};

export const SM: Story = {
  args: {
    size: AvatarSizeEnum.SM,
  },
};

export const M: Story = {
  args: {
    size: AvatarSizeEnum.M,
  },
};

export const L: Story = {
  args: {
    size: AvatarSizeEnum.L,
  },
};

export const XL: Story = {
  args: {
    size: AvatarSizeEnum.XL,
  },
};

export const XXL: Story = {
  args: {
    size: AvatarSizeEnum["2XL"],
  },
};
