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
      control: 'select',
      options: [ListSize.S, ListSize.M, ListSize.L],
      description: '리스트 아이템 크기',
    },
    select: {
      control: 'boolean',
      description: '체크박스 표시 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: ListSize.M,
    select: false,
  },
};

export const Small: Story = {
  args: {
    size: ListSize.S,
    select: false,
  },
};

export const Medium: Story = {
  args: {
    size: ListSize.M,
    select: false,
  },
};

export const Large: Story = {
  args: {
    size: ListSize.L,
    select: false,
  },
};

export const WithCheckbox: Story = {
  args: {
    size: ListSize.M,
    select: true,
  },
};

export const SmallWithCheckbox: Story = {
  args: {
    size: ListSize.S,
    select: true,
  },
};

export const LargeWithCheckbox: Story = {
  args: {
    size: ListSize.L,
    select: true,
  },
};

// 모든 크기 비교
export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Small</h3>
        <List size={ListSize.S} select={false} />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Medium</h3>
        <List size={ListSize.M} select={false} />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Large</h3>
        <List size={ListSize.L} select={false} />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// 체크박스가 있는 모든 크기 비교
export const AllSizesWithCheckbox: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Small with Checkbox</h3>
        <List size={ListSize.S} select={true} />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Medium with Checkbox</h3>
        <List size={ListSize.M} select={true} />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Large with Checkbox</h3>
        <List size={ListSize.L} select={true} />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// 리스트 그룹 예시
export const ListGroup: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', alignItems: 'flex-start', backgroundColor: '#f5f5f5', padding: '1px' }}>
      <List size={ListSize.M} select={true} />
      <List size={ListSize.M} select={true} />
      <List size={ListSize.M} select={true} />
      <List size={ListSize.M} select={true} />
      <List size={ListSize.M} select={true} />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};