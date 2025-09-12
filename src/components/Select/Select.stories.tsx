import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { SelectSize, SelectItemSize } from "@foundation/Select";

export interface SelectProps {
  options: string[];
  defaultSelected?: number;
  placeholder?: string;
  onChange?: (selectedValue: string, selectedIndex: number) => void;
  size?: SelectSize;
  itemSize?: SelectItemSize;
}

const meta: Meta<SelectProps> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: Object.values(SelectSize),
    },
    itemSize: {
      control: { type: "radio" },
      options: Object.values(SelectItemSize),
    },
    placeholder: { control: "text" },
    defaultSelected: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<SelectProps>;

const sampleOptions = ["옵션 1", "옵션 2", "옵션 3", "옵션 4", "옵션 5"];

export const Large: Story = {
  args: {
    options: sampleOptions,
    size: SelectSize.L,
    itemSize: SelectItemSize.L,
    placeholder: "선택하세요",
    defaultSelected: -1,
  },
};

export const Medium: Story = {
  args: {
    options: sampleOptions,
    size: SelectSize.M,
    itemSize: SelectItemSize.M,
    placeholder: "선택하세요",
    defaultSelected: -1,
  },
};

export const Small: Story = {
  args: {
    options: sampleOptions,
    size: SelectSize.S,
    itemSize: SelectItemSize.S,
    placeholder: "선택하세요",
    defaultSelected: -1,
  },
};

export const ExtraSmall: Story = {
  args: {
    options: sampleOptions,
    size: SelectSize.XS,
    itemSize: SelectItemSize.XS,
    placeholder: "선택하세요",
    defaultSelected: -1,
  },
};

export const WithPlaceholder: Story = {
  args: {
    options: sampleOptions,
    size: SelectSize.L,
    itemSize: SelectItemSize.L,
    placeholder: "옵션을 선택해주세요",
    defaultSelected: -1,
  },
};