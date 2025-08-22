import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./Badge";

const meta: Meta<BadgeProps> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    role: {
      control: { type: "radio" },
      options: ["Error", "Warring", "Success", "Info"],
    },
    size: {
      control: { type: "radio" },
      options: ["S", "M", "L"],
    },
    count: { 
      control: { type: "number", min: 0, max: 9999 },
      description: "숫자 (1000 이상일 때 999+로 표시)" 
    },
  },
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const SCount: Story = {
  args: {
    role: "Success",
    size: "M",
    count: 5,
  },
};

export const MCount: Story = {
  args: {
    role: "Info",
    size: "M", 
    count: 99,
  },
};

export const LCount: Story = {
  args: {
    role: "Error",
    size: "M",
    count: 999,
  },
};

export const OverflowCount: Story = {
  args: {
    role: "Warring",
    size: "M",
    count: 1500,
  },
};

export const Zero: Story = {
  args: {
    role: "Success",
    size: "M",
    count: 0,
  },
};

export const Allroles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge role="Error" count={5} />
      <Badge role="Warring" count={99} />
      <Badge role="Success" count={999} />
      <Badge role="Info" count={1500} />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge role="Success" size="S" count={99} />
      <Badge role="Success" size="M" count={99} />
      <Badge role="Success" size="L" count={99} />
    </div>
  ),
};

export const CountExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge role="Success" count={1} />
      <Badge role="Info" count={12} />
      <Badge role="Warring" count={99} />
      <Badge role="Error" count={999} />
      <Badge role="Success" count={1000} />
      <Badge role="Info" count={5000} />
    </div>
  ),
};