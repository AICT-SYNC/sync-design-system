import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import { ButtonVariant, ButtonSize } from "../../enum/ButtonEnum";

const meta: Meta<ButtonProps> = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: Object.values(ButtonVariant),
    },
    size: {
      control: { type: "radio" },
      options: Object.values(ButtonSize),
    },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.M,
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.SECONDARY,
    size: ButtonSize.M,
    children: "Secondary Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: ButtonVariant.TERTIARY,
    size: ButtonSize.M,
    children: "Tertiary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: ButtonVariant.DANGER,
    size: ButtonSize.M,
    children: "Danger Button",
  },
};

export const Warning: Story = {
  args: {
    variant: ButtonVariant.WARNING,
    size: ButtonSize.M,
    children: "Warning Button",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.XS}>XS</Button>
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.S}>S</Button>
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.M}>M</Button>
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.L}>L</Button>
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.XL}>XL</Button>
    </div>
  ),
};

export const LongButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LONG_L}>Long Large Button (460px)</Button>
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LONG_M}>Long Medium Button (380px)</Button>
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LONG_S}>Long Small Button (300px)</Button>
    </div>
  ),
};

export const LongButtonVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LONG_M}>Primary Long Button</Button>
      <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.LONG_M}>Secondary Long Button</Button>
      <Button variant={ButtonVariant.TERTIARY} size={ButtonSize.LONG_M}>Tertiary Long Button</Button>
      <Button variant={ButtonVariant.DANGER} size={ButtonSize.LONG_M}>Danger Long Button</Button>
      <Button variant={ButtonVariant.WARNING} size={ButtonSize.LONG_M}>Warning Long Button</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.M}>Primary</Button>
        <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.M}>Secondary</Button>
        <Button variant={ButtonVariant.TERTIARY} size={ButtonSize.M}>Tertiary</Button>
        <Button variant={ButtonVariant.DANGER} size={ButtonSize.M}>Danger</Button>
        <Button variant={ButtonVariant.WARNING} size={ButtonSize.M}>Warning</Button>
      </div>
    </div>
  ),
};