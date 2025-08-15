import type { Meta, StoryObj } from '@storybook/react';
import Input from './input.tsx';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    Size: {
      control: { type: 'select' },
      options: ['S', 'M', 'L'],
      description: 'Input 크기',
    },
    Enabled: {
      control: { type: 'boolean' },
      description: 'Input 활성화 상태',
    },
    Focus: {
      control: { type: 'boolean' },
      description: 'Input 포커스 상태 (강제)',
    },
    PlaceHolder: {
      control: { type: 'text' },
      description: 'Placeholder 텍스트',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    Size: 'M',
    Enabled: true,
    Focus: false,
    PlaceHolder: '텍스트를 입력하세요',
  },
};

// 크기별 스토리
export const Small: Story = {
  args: {
    Size: 'S',
    Enabled: true,
    Focus: false,
    PlaceHolder: '작은 입력창',
  },
};

export const Medium: Story = {
  args: {
    Size: 'M',
    Enabled: true,
    Focus: false,
    PlaceHolder: '중간 입력창',
  },
};

export const Large: Story = {
  args: {
    Size: 'L',
    Enabled: true,
    Focus: false,
    PlaceHolder: '큰 입력창',
  },
};

// 상태별 스토리
export const Focused: Story = {
  args: {
    Size: 'M',
    Enabled: true,
    Focus: true,
    PlaceHolder: '포커스된 상태',
  },
};

export const Disabled: Story = {
  args: {
    Size: 'M',
    Enabled: false,
    Focus: false,
    PlaceHolder: '비활성화된 입력창',
  },
};

export const WithoutPlaceholder: Story = {
  args: {
    Size: 'M',
    Enabled: true,
    Focus: false,
    PlaceHolder: '',
  },
};

// 모든 크기 비교
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input Size="S" Enabled={true} Focus={false} PlaceHolder="Small (S)" />
      <Input Size="M" Enabled={true} Focus={false} PlaceHolder="Medium (M)" />
      <Input Size="L" Enabled={true} Focus={false} PlaceHolder="Large (L)" />
    </div>
  ),
};

// 모든 상태 비교
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4>Default</h4>
        <Input Size="M" Enabled={true} Focus={false} PlaceHolder="기본 상태" />
      </div>
      <div>
        <h4>Focused</h4>
        <Input Size="M" Enabled={true} Focus={true} PlaceHolder="포커스 상태" />
      </div>
      <div>
        <h4>Disabled</h4>
        <Input Size="M" Enabled={false} Focus={false} PlaceHolder="비활성화 상태" />
      </div>
      <div>
        <h4>No Placeholder</h4>
        <Input Size="M" Enabled={true} Focus={false} PlaceHolder="" />
      </div>
    </div>
  ),
};