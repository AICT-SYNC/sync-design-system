import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./Badge";

const meta: Meta<BadgeProps> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["Error", "Warring", "Success", "Info"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    count: { 
      control: { type: "number", min: 0, max: 9999 },
      description: "숫자 (1000 이상일 때 999+로 표시)" 
    },
  },
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const SmallCount: Story = {
  args: {
    variant: "Success",
    size: "medium",
    count: 5,
  },
};

export const MediumCount: Story = {
  args: {
    variant: "Info",
    size: "medium", 
    count: 99,
  },
};

export const LargeCount: Story = {
  args: {
    variant: "Error",
    size: "medium",
    count: 999,
  },
};

export const OverflowCount: Story = {
  args: {
    variant: "Warring",
    size: "medium",
    count: 1500,
  },
};

export const Zero: Story = {
  args: {
    variant: "Success",
    size: "medium",
    count: 0,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="Error" count={5} />
      <Badge variant="Warring" count={99} />
      <Badge variant="Success" count={999} />
      <Badge variant="Info" count={1500} />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="Success" size="small" count={99} />
      <Badge variant="Success" size="medium" count={99} />
      <Badge variant="Success" size="large" count={99} />
    </div>
  ),
};

export const CountExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="Success" count={1} />
      <Badge variant="Info" count={12} />
      <Badge variant="Warring" count={99} />
      <Badge variant="Error" count={999} />
      <Badge variant="Success" count={1000} />
      <Badge variant="Info" count={5000} />
    </div>
  ),
};