import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import { ButtonVariant, ButtonSize } from "../../enums/ButtonEnum";
import { SyncIcons } from "../../assets/icons/SyncIcons";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
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
    withIcon: { 
      control: { type: "select" },
      options: [undefined, ...Object.values(SyncIcons)]
    },
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

export const Assistive: Story = {
  args: {
    variant: ButtonVariant.ASSISTIVE,
    size: ButtonSize.M,
    children: "Assistive Button",
  },
};

export const Negative: Story = {
  args: {
    variant: ButtonVariant.NEGATIVE,
    size: ButtonSize.M,
    children: "Negative Button",
  },
};

export const Important: Story = {
  args: {
    variant: ButtonVariant.IMPORTANT,
    size: ButtonSize.M,
    children: "Important Button",
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
      <Button variant={ButtonVariant.ASSISTIVE} size={ButtonSize.LONG_M}>Assistive Long Button</Button>
      <Button variant={ButtonVariant.NEGATIVE} size={ButtonSize.LONG_M}>Negative Long Button</Button>
      <Button variant={ButtonVariant.IMPORTANT} size={ButtonSize.LONG_M}>Important Long Button</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.M} withIcon={SyncIcons.CalendarDays}>Calendar</Button>
        <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.M} withIcon={SyncIcons.Settings}>Settings</Button>
        <Button variant={ButtonVariant.ASSISTIVE} size={ButtonSize.M} withIcon={SyncIcons.Plus}>Add</Button>
        <Button variant={ButtonVariant.NEGATIVE} size={ButtonSize.M} withIcon={SyncIcons.Trash}>Delete</Button>
        <Button variant={ButtonVariant.IMPORTANT} size={ButtonSize.M} withIcon={SyncIcons.Check}>Confirm</Button>
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.S} withIcon={SyncIcons.CalendarDays}>Small</Button>
        <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.M} withIcon={SyncIcons.CalendarDays}>Medium</Button>
        <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.L} withIcon={SyncIcons.CalendarDays}>Large</Button>
        <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.XL} withIcon={SyncIcons.CalendarDays}>XLarge</Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
        <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LONG_L} withIcon={SyncIcons.CalendarDays}>Long Large Button with Icon</Button>
        <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.LONG_M} withIcon={SyncIcons.Settings}>Long Medium Button with Icon</Button>
        <Button variant={ButtonVariant.ASSISTIVE} size={ButtonSize.LONG_S} withIcon={SyncIcons.Plus}>Long Small Button with Icon</Button>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.M}>Primary</Button>
        <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.M}>Secondary</Button>
        <Button variant={ButtonVariant.ASSISTIVE} size={ButtonSize.M}>Assistive</Button>
        <Button variant={ButtonVariant.NEGATIVE} size={ButtonSize.M}>Negative</Button>
        <Button variant={ButtonVariant.IMPORTANT} size={ButtonSize.M}>Important</Button>
      </div>
    </div>
  ),
};