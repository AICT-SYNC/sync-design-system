import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { Menu, Search, Settings, User, Home, Bell } from "lucide-react";
import { IconButtonSize } from "../../foundation/IconButton";

interface IconButtonProps {
  size?: IconButtonSize;
  onClick?: () => void;
  icon?: React.ComponentType;
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
    size: IconButtonSize.Large,
    icon: Menu,
  },
};

export const Large: Story = {
  args: {
    size: IconButtonSize.Large,
    icon: Menu,
  },
};

export const Medium: Story = {
  args: {
    size: IconButtonSize.Medium,
    icon: Menu,
  },
};

export const Small: Story = {
  args: {
    size: IconButtonSize.Small,
    icon: Menu,
  },
};

export const WithSearchIcon: Story = {
  args: {
    size: IconButtonSize.Large,
    icon: Search,
  },
};

export const WithSettingsIcon: Story = {
  args: {
    size: IconButtonSize.Large,
    icon: Settings,
  },
};

export const WithUserIcon: Story = {
  args: {
    size: IconButtonSize.Large,
    icon: User,
  },
};

export const WithHomeIcon: Story = {
  args: {
    size: IconButtonSize.Large,
    icon: Home,
  },
};

export const WithBellIcon: Story = {
  args: {
    size: IconButtonSize.Large,
    icon: Bell,
  },
};
