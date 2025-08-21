import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "../calendar";

interface CalendarProps {
  size?: number;
  color?: "primary" | "gray";
  $svgStyle?: any;
}

const meta: Meta<CalendarProps> = {
  title: "Icons/Calendar",
  component: Calendar,
  argTypes: {
    size: {
      control: { type: "number" },
      defaultValue: 24,
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "gray"],
      defaultValue: "gray",
    },
  },
};

export default meta;

type Story = StoryObj<CalendarProps>;

export const Default: Story = {
  args: {
    size: 24,
    color: "gray",
  },
};

export const Primary: Story = {
  args: {
    size: 24,
    color: "primary",
  },
};

export const Small: Story = {
  args: {
    size: 16,
    color: "gray",
  },
};

export const Large: Story = {
  args: {
    size: 32,
    color: "primary",
  },
};