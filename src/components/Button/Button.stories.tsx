import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonVariant, ButtonSize, ButtonLong } from "@foundation/Button";
import { SyncIcons } from "@assets/icons";

interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  enabled?: boolean;
  text: React.ReactNode;
  IconName?: SyncIcons;
  long?: ButtonLong;
}

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
    long: {
      control: { type: "radio" },
      options: Object.values(ButtonLong),
    },
    enabled: {
      control: { type: "boolean" },
    },
    text: { 
      control: "text",
      description: "버튼에 표시될 텍스트"
    },
    IconName: {
      control: { type: "select" },
      options: Object.values(SyncIcons),
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.M,
    enabled: true,
    text: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.SECONDARY,
    size: ButtonSize.M,
    enabled: true,
    text: "Secondary Button",
  },
};

export const Assistive: Story = {
  args: {
    variant: ButtonVariant.ASSISTIVE,
    size: ButtonSize.M,
    enabled: true,
    text: "Assistive Button",
  },
};

export const Negative: Story = {
  args: {
    variant: ButtonVariant.NEGATIVE,
    size: ButtonSize.M,
    enabled: true,
    text: "Negative Button",
  },
};

export const Important: Story = {
  args: {
    variant: ButtonVariant.IMPORTANT,
    size: ButtonSize.M,
    enabled: true,
    text: "Important Button",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.XS} text="XS" enabled={true} />
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.S} text="S" enabled={true} />
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.M} text="M" enabled={true} />
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.L} text="L" enabled={true} />
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.XL} text="XL" enabled={true} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.M} text="Primary" enabled={true} />
      <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.M} text="Secondary" enabled={true} />
      <Button variant={ButtonVariant.ASSISTIVE} size={ButtonSize.M} text="Assistive" enabled={true} />
      <Button variant={ButtonVariant.NEGATIVE} size={ButtonSize.M} text="Negative" enabled={true} />
      <Button variant={ButtonVariant.IMPORTANT} size={ButtonSize.M} text="Important" enabled={true} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.M,
    enabled: false,
    text: "Disabled Button",
  },
};

export const LongButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexDirection: 'column' }}>
      <Button variant={ButtonVariant.PRIMARY} size={ButtonSize.XL} long={ButtonLong.L} text="Long XL Button" enabled={true} />
      <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.L} text="Regular L Button" enabled={true} />
    </div>
  ),
};
