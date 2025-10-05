import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { SyncIcons } from "@assets/icons";
import { IconButtonSize } from "@foundation/IconButton";

interface IconButtonProps {
  size?: IconButtonSize;
  onClick?: () => void;
  icon: keyof typeof SyncIcons;
  iconColor?: string;
  bgColor: string;
  hoverBgColor?: string;
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
    bgColor: {
      control: { type: "text" },
    },
    hoverBgColor: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<IconButtonProps>;

export const Default: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Globe",
    bgColor: "bg-secondary",
    hoverBgColor: "layout-header-hover-bg",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: IconButtonSize["2XS"],
    icon: "Globe",
    bgColor: "bg-secondary",
  },
};

export const XSmall: Story = {
  args: {
    size: IconButtonSize.XS,
    icon: "Globe",
    bgColor: "bg-secondary",
  },
};

export const Small: Story = {
  args: {
    size: IconButtonSize.S,
    icon: "Globe",
    bgColor: "bg-secondary",
  },
};

export const Medium: Story = {
  args: {
    size: IconButtonSize.M,
    icon: "Globe",
    bgColor: "bg-secondary",
  },
};

export const Large: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Globe",
    bgColor: "bg-secondary",
  },
};

export const WithCalendarIcon: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "CalendarDays",
    bgColor: "bg-secondary",
  },
};

export const WithSettingsIcon: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Settings",
    bgColor: "bg-secondary",
  },
};

export const WithCheckIcon: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Check",
    bgColor: "bg-secondary",
  },
};

export const WithPlusIcon: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Plus",
    bgColor: "bg-secondary",
  },
};

export const WithTrashIcon: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Trash",
    bgColor: "bg-secondary",
  },
};

export const WithCustomColor: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Settings",
    iconColor: "#FF4444",
    bgColor: "bg-secondary",
    hoverBgColor: "#FFE6E6",
  },
};

export const CustomColorExamples: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <IconButton
        size={IconButtonSize.L}
        icon="Settings"
        iconColor="#FF4444"
        bgColor="bg-secondary"
        hoverBgColor="#FFE6E6"
      />
      <IconButton
        size={IconButtonSize.L}
        icon="Check"
        iconColor="#00AA44"
        bgColor="bg-secondary"
        hoverBgColor="#E6FFE6"
      />
      <IconButton
        size={IconButtonSize.L}
        icon="Trash"
        iconColor="#FF6B35"
        bgColor="bg-secondary"
        hoverBgColor="#FFEEE6"
      />
      <IconButton
        size={IconButtonSize.L}
        icon="Plus"
        iconColor="#6366F1"
        bgColor="bg-secondary"
        hoverBgColor="#EEEEFF"
      />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <IconButton
        size={IconButtonSize["2XS"]}
        icon="Globe"
        bgColor="bg-secondary"
      />
      <IconButton size={IconButtonSize.XS} icon="Globe" bgColor="bg-secondary" />
      <IconButton size={IconButtonSize.S} icon="Globe" bgColor="bg-secondary" />
      <IconButton size={IconButtonSize.M} icon="Globe" bgColor="bg-secondary" />
      <IconButton size={IconButtonSize.L} icon="Globe" bgColor="bg-secondary" />
    </div>
  ),
};
