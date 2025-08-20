import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./iconButton";
import { Menu, Search, Settings, User, Home, Bell } from "lucide-react";

interface IconButtonProps {
  size?: 'large' | 'medium' | 'small';
  onClick?: () => void;
  icon?: React.ComponentType;
}

const meta: Meta<IconButtonProps> = {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["large", "medium", "small"],
    },
    icon: {
      control: { type: "select" },
      options: {
        Menu: Menu,
        Search: Search,
        Settings: Settings,
        User: User,
        Home: Home,
        Bell: Bell,
      },
      mapping: {
        Menu: Menu,
        Search: Search,
        Settings: Settings,
        User: User,
        Home: Home,
        Bell: Bell,
      },
    },
  },
};

export default meta;

type Story = StoryObj<IconButtonProps>;

export const Default: Story = {
  args: {
    size: "large",
    icon: Menu,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    icon: Menu,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    icon: Menu,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    icon: Menu,
  },
};

export const WithSearchIcon: Story = {
  args: {
    size: "large",
    icon: Search,
  },
};

export const WithSettingsIcon: Story = {
  args: {
    size: "large",
    icon: Settings,
  },
};

export const WithUserIcon: Story = {
  args: {
    size: "large",
    icon: User,
  },
};

export const WithHomeIcon: Story = {
  args: {
    size: "large",
    icon: Home,
  },
};

export const WithBellIcon: Story = {
  args: {
    size: "large",
    icon: Bell,
  },
};