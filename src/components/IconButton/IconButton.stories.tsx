import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./iconButton";
import { SyncIcons } from "@assets/icons/SyncIcons";
import { IconButtonSize } from "@foundation/IconButton";

interface IconButtonProps {
  size?: IconButtonSize;
  onClick?: () => void;
  icon: keyof typeof SyncIcons;
  iconColor?: string;
}

const meta: Meta<IconButtonProps> = {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: Object.values(IconButtonSize),
    },
    icon: {
      control: { type: "select" },
      options: Object.keys(SyncIcons),
    },
    iconColor: {
      control: { type: "color" },
    },
  },
};

export default meta;

type Story = StoryObj<IconButtonProps>;

export const Default: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Globe",
  },
};

export const Large: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Globe",
  },
};

export const Medium: Story = {
  args: {
    size: IconButtonSize.M,
    icon: "Globe",
  },
};

export const Small: Story = {
  args: {
    size: IconButtonSize.S,
    icon: "Globe",
  },
};

export const WithCalendarIcon: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "CalendarDays",
  },
};

export const WithSettingsIcon: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Settings",
  },
};

export const WithCheckIcon: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Check",
  },
};

export const WithPlusIcon: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Plus",
  },
};

export const WithTrashIcon: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Trash",
  },
};

export const WithCustomColor: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Settings",
    iconColor: "#FF4444",
  },
};

export const CustomColorExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton size={IconButtonSize.L} icon="Settings" iconColor="#FF4444" />
      <IconButton size={IconButtonSize.L} icon="Check" iconColor="#00AA44" />
      <IconButton size={IconButtonSize.L} icon="Trash" iconColor="#FF6B35" />
      <IconButton size={IconButtonSize.L} icon="Plus" iconColor="#6366F1" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton size={IconButtonSize.S} icon="Globe" />
      <IconButton size={IconButtonSize.M} icon="Globe" />
      <IconButton size={IconButtonSize.L} icon="Globe" />
    </div>
  ),
};