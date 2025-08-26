import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';
import { CheckboxSize } from '../../foundation/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: Object.values(CheckboxSize),
    },
    checked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 스토리용 래퍼 컴포넌트
const CheckboxWrapper = (args: any) => {
  const [isChecked, setIsChecked] = useState(args.checked || false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    console.log('Checkbox changed:', checked);
  };

  return (
    <Checkbox
      size={args.size}
      checked={isChecked}
      onChange={handleChange}
    />
  );
};

// 기본 체크박스
export const Default: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    size: CheckboxSize.XL,
    checked: false,
  },
};

// 체크된 상태
export const Checked: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    size: CheckboxSize.XL,
    checked: true,
  },
};

// 사이즈별 스토리
export const XLarge: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    size: CheckboxSize.XL,
    checked: false,
  },
};

export const Large: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    size: CheckboxSize.L,
    checked: false,
  },
};

export const Medium: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    size: CheckboxSize.M,
    checked: false,
  },
};

export const Small: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    size: CheckboxSize.S,
    checked: false,
  },
};

export const XSmall: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    size: CheckboxSize.XS,
    checked: false,
  },
};

// 정적 체크박스 (상호작용 없이 고정)
export const StaticUnchecked: Story = {
  render: (args) => (
    <Checkbox
      size={args.size}
      checked={args.checked}
      onChange={(checked) => console.log('Static checkbox changed:', checked)}
    />
  ),
  args: {
    size: CheckboxSize.XL,
    checked: false,
  },
};

export const StaticChecked: Story = {
  render: (args) => (
    <Checkbox
      size={args.size}
      checked={args.checked}
      onChange={(checked) => console.log('Static checkbox changed:', checked)}
    />
  ),
  args: {
    size: CheckboxSize.XL,
    checked: true,
  },
};
