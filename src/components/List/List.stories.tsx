import type { Meta, StoryObj } from '@storybook/react';
import List from './List';
import { ListSize } from '../../foundation/List';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['S', 'M', 'L'],
      description: 'List 컴포넌트의 크기',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Small 사이즈
export const Small: Story = {
  args: {
    size: 'S' as ListSize,
  },
};

// Medium 사이즈
export const Medium: Story = {
  args: {
    size: 'M' as ListSize,
  },
};

// Large 사이즈 (기본)
export const Large: Story = {
  args: {
    size: 'L' as ListSize,
  },
};

// 모든 사이즈 비교
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <List size={'S' as ListSize} />
      <List size={'M' as ListSize} />
      <List size={'L' as ListSize} />
    </div>
  ),
};