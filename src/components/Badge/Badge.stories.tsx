import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./Badge";
import { BadgeRole, BadgeSize } from "../../foundation/Badge";

const meta: Meta<BadgeProps> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    role: {
      control: { type: "radio" },
      options: Object.values(BadgeRole),
    },
    size: {
      control: { type: "radio" },
      options: Object.values(BadgeSize),
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
    role: BadgeRole.Success,
    size: BadgeSize.M,
    count: 5,
  },
};

export const MCount: Story = {
  args: {
    role: BadgeRole.Info,
    size: BadgeSize.M, 
    count: 99,
  },
};

export const LCount: Story = {
  args: {
    role: BadgeRole.Error,
    size: BadgeSize.M,
    count: 999,
  },
};

export const OverflowCount: Story = {
  args: {
    role: BadgeRole.Warning,
    size: BadgeSize.M,
    count: 1500,
  },
};

export const Zero: Story = {
  args: {
    role: BadgeRole.Success,
    size: BadgeSize.M,
    count: 0,
  },
};

export const Allroles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge role={BadgeRole.Error} count={5} />
      <Badge role={BadgeRole.Warning} count={99} />
      <Badge role={BadgeRole.Success} count={999} />
      <Badge role={BadgeRole.Info} count={1500} />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge role={BadgeRole.Success} size={BadgeSize.S} count={99} />
      <Badge role={BadgeRole.Success} size={BadgeSize.M} count={99} />
      <Badge role={BadgeRole.Success} size={BadgeSize.L} count={99} />
    </div>
  ),
};

export const CountExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge role={BadgeRole.Success} count={1} />
      <Badge role={BadgeRole.Info} count={12} />
      <Badge role={BadgeRole.Warning} count={99} />
      <Badge role={BadgeRole.Error} count={999} />
      <Badge role={BadgeRole.Success} count={1000} />
      <Badge role={BadgeRole.Info} count={5000} />
    </div>
  ),
};