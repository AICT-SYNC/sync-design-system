import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./iconButton";
import { IconButtonSize } from "../../foundation/IconButton";
import { SyncIcons } from "../../assets/icons/SyncIcons";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: Object.values(IconButtonSize),
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
    size: IconButtonSize.L,
    icon: "Settings",
  },
};

export const Large: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Settings",
  },
};

export const Medium: Story = {
  args: {
    size: IconButtonSize.M,
    icon: "Settings",
  },
};

export const Small: Story = {
  args: {
    size: IconButtonSize.S,
    icon: "Settings",
  },
};

export const WithGlobeIcon: Story = {
  args: {
    size: IconButtonSize.L,
    icon: "Globe",
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

export const WithPencilIcon: Story = {
  args: {
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
};
