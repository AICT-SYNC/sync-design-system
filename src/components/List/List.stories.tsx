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
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
};

export const Small: Story = {
  args: {
    size: ListSize.S,
    select: false,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  },
};

export const Medium: Story = {
  args: {
    size: ListSize.M,
    select: false,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
  },
};

export const Large: Story = {
  args: {
    size: ListSize.L,
    select: false,
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
  },
};

export const WithCheckbox: Story = {
  args: {
    size: ListSize.M,
    select: true,
    name: 'Alex Brown',
    email: 'alex.brown@example.com',
  },
};

export const SmallWithCheckbox: Story = {
  args: {
    size: ListSize.S,
    select: true,
    name: 'Emma Davis',
    email: 'emma.davis@example.com',
  },
};

export const LargeWithCheckbox: Story = {
  args: {
    size: ListSize.L,
    select: true,
    name: 'David Miller',
    email: 'david.miller@example.com',
  },
};

// 모든 크기 비교
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Small</h3>
        <List size={ListSize.S} select={false} name="Small User" email="small@example.com" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Medium</h3>
        <List size={ListSize.M} select={false} name="Medium User" email="medium@example.com" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Large</h3>
        <List size={ListSize.L} select={false} name="Large User" email="large@example.com" />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// 체크박스가 있는 모든 크기 비교
export const AllSizesWithCheckbox: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Small with Checkbox</h3>
        <List size={ListSize.S} select={true} name="Small User" email="small@example.com" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Medium with Checkbox</h3>
        <List size={ListSize.M} select={true} name="Medium User" email="medium@example.com" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Large with Checkbox</h3>
        <List size={ListSize.L} select={true} name="Large User" email="large@example.com" />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// 리스트 그룹 예시
export const ListGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', alignItems: 'flex-start', backgroundColor: '#f5f5f5', padding: '1px' }}>
      <List size={ListSize.M} select={true} name="User 1" email="user1@example.com" />
      <List size={ListSize.M} select={true} name="User 2" email="user2@example.com" />
      <List size={ListSize.M} select={true} name="User 3" email="user3@example.com" />
      <List size={ListSize.M} select={true} name="User 4" email="user4@example.com" />
      <List size={ListSize.M} select={true} name="User 5" email="user5@example.com" />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};