import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from './Input';
import { InputSize } from '@foundation/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    Size: {
      control: { type: 'radio' },
      options: Object.values(InputSize),
    },
    Enabled: { control: 'boolean' },
    PlaceHolder: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 스토리용 래퍼 컴포넌트
const InputWrapper = (args: any) => {
  const [inputValue, setInputValue] = useState(args.value || '');

  const handleChange = (value: string) => {
    setInputValue(value);
    console.log('Input changed:', value);
  };

  return (
    <Input
      Size={args.Size}
      Enabled={args.Enabled}
      PlaceHolder={args.PlaceHolder}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

// 기본 Input
export const Default: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    Size: InputSize.M,
    Enabled: true,
    PlaceHolder: '텍스트를 입력하세요',
    value: '',
  },
};

// 사이즈별 스토리
export const Small: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    Size: InputSize.S,
    Enabled: true,
    PlaceHolder: 'Small input',
    value: "ㄴㅇ래ㅑㅗㄴ애랴",
  },
};

export const Medium: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    Size: InputSize.M,
    Enabled: true,
    PlaceHolder: 'Medium input',
    value: '',
  },
};

export const Large: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    Size: InputSize.L,
    Enabled: true,
    PlaceHolder: 'Large input',
    value: '',
  },
};

// 비활성화 상태
export const Disabled: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    Size: InputSize.M,
    Enabled: false,
    PlaceHolder: '비활성화된 입력창',
    value: '수정할 수 없음',
  },
};

// 초기값이 있는 상태
export const WithValue: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    Size: InputSize.M,
    Enabled: true,
    PlaceHolder: '초기값 있는 입력창',
    value: '초기값',
  },
};

// 정적 Input (상호작용 없이 고정)
export const StaticInput: Story = {
  render: (args) => (
    <Input
      Size={args.Size}
      Enabled={args.Enabled}
      PlaceHolder={args.PlaceHolder}
      value={args.value}
      onChange={(value) => console.log('Static input changed:', value)}
    />
  ),
  args: {
    Size: InputSize.M,
    Enabled: true,
    PlaceHolder: '정적 입력창',
    value: '고정된 값',
  },
};