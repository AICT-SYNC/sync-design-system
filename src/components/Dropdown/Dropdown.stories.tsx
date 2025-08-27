import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./dropdown";
import { DropdownSize, DropdownButtonSize } from "@foundation/Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    options: { control: "object" },
    defaultSelected: { control: "number" },
    placeholder: { control: "text" },
    size: { 
      control: { type: "radio" },
      options: Object.values(DropdownSize),
    },
    buttonSize: {
      control: { type: "radio" },
      options: Object.values(DropdownButtonSize),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ["옵션 1", "옵션 2", "옵션 3"],
    placeholder: "선택하세요",
    size: DropdownSize.L,
    buttonSize: DropdownButtonSize.L,
  },
};

export const LongText: Story = {
  args: {
    options: [
      "매우 긴 텍스트가 포함된 옵션",
      "짧은 옵션",
      "또 다른 매우 긴 텍스트가 포함된 드롭다운 옵션",
    ],
    placeholder: "선택하세요",
    size: DropdownSize.L,
    buttonSize: DropdownButtonSize.L,
  },
};

export const VariousLengths: Story = {
  args: {
    options: [
      "짧음",
      "중간 길이의 옵션",
      "이것은 정말로 매우 긴 옵션 텍스트입니다",
      "A",
      "보통 길이",
    ],
    placeholder: "다양한 길이",
    size: DropdownSize.L,
    buttonSize: DropdownButtonSize.L,
  },
};

export const SButton: Story = {
  args: {
    options: ["옵션 1", "매우 긴 옵션 텍스트", "옵션 3"],
    placeholder: "선택하세요",
    size: DropdownSize.L,
    buttonSize: DropdownButtonSize.S,
  },
};

export const MSize: Story = {
  args: {
    options: ["옵션 1", "긴 텍스트 옵션", "옵션 3"],
    placeholder: "선택하세요",
    size: DropdownSize.M,
    buttonSize: DropdownButtonSize.L,
  },
};
