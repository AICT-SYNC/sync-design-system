import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
<<<<<<< Updated upstream
import IconButton from "./iconButton";
import { Menu, Search, Settings, User, Home, Bell } from "lucide-react";

interface IconButtonProps {
  size?: 'large' | 'medium' | 'small';
  onClick?: () => void;
  icon?: React.ComponentType;
}

const meta: Meta<IconButtonProps> = {
=======
import { IconButton } from "./IconButton";
import { IconButtonSize } from "../../foundation/IconButton";
import { SyncIcons } from "../../assets/icons/SyncIcons";

const meta: Meta<typeof IconButton> = {
>>>>>>> Stashed changes
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["large", "medium", "small"],
    },
    icon: {
      control: { type: "select" },
      options: Object.keys(SyncIcons),
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
<<<<<<< Updated upstream
    size: "large",
    icon: Menu,
=======
    size: IconButtonSize.L,
    icon: "Settings",
>>>>>>> Stashed changes
  },
};

export const Large: Story = {
  args: {
<<<<<<< Updated upstream
    size: "large",
    icon: Menu,
=======
    size: IconButtonSize.L,
    icon: "Settings",
>>>>>>> Stashed changes
  },
};

export const Medium: Story = {
  args: {
<<<<<<< Updated upstream
    size: "medium",
    icon: Menu,
=======
    size: IconButtonSize.M,
    icon: "Settings",
>>>>>>> Stashed changes
  },
};

export const Small: Story = {
  args: {
<<<<<<< Updated upstream
    size: "small",
    icon: Menu,
=======
    size: IconButtonSize.S,
    icon: "Settings",
>>>>>>> Stashed changes
  },
};

export const WithGlobeIcon: Story = {
  args: {
<<<<<<< Updated upstream
    size: "large",
    icon: Search,
=======
    size: IconButtonSize.L,
    icon: "Globe",
>>>>>>> Stashed changes
  },
};

export const WithCheckIcon: Story = {
  args: {
<<<<<<< Updated upstream
    size: "large",
    icon: Settings,
=======
    size: IconButtonSize.L,
    icon: "Check",
>>>>>>> Stashed changes
  },
};

export const WithPlusIcon: Story = {
  args: {
<<<<<<< Updated upstream
    size: "large",
    icon: User,
=======
    size: IconButtonSize.L,
    icon: "Plus",
>>>>>>> Stashed changes
  },
};

export const WithTrashIcon: Story = {
  args: {
<<<<<<< Updated upstream
    size: "large",
    icon: Home,
=======
    size: IconButtonSize.L,
    icon: "Trash",
>>>>>>> Stashed changes
  },
};

export const WithPencilIcon: Story = {
  args: {
<<<<<<< Updated upstream
    size: "large",
    icon: Bell,
  },
=======
    size: IconButtonSize.L,
    icon: "Pencil",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <IconButton size={IconButtonSize.L} icon="Settings" />
      <IconButton size={IconButtonSize.M} icon="Settings" />
      <IconButton size={IconButtonSize.S} icon="Settings" />
    </div>
  ),
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px", padding: "16px" }}>
      {Object.keys(SyncIcons).map((iconName) => (
        <div key={iconName} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <IconButton size={IconButtonSize.L} icon={iconName as keyof typeof SyncIcons} />
          <span style={{ fontSize: "12px", textAlign: "center" }}>{iconName}</span>
        </div>
      ))}
    </div>
  ),
>>>>>>> Stashed changes
};