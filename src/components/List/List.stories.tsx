import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import { ListSize } from '@foundation/List';

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
    width: {
      control: 'text',
      description: '리스트 아이템 너비',
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
    width: '320px',
  },
};

export const Small: Story = {
  args: {
    size: ListSize.S,
    select: false,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    width: '280px',
  },
};

export const Medium: Story = {
  args: {
    size: ListSize.M,
    select: false,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    width: '320px',
  },
};

export const Large: Story = {
  args: {
    size: ListSize.L,
    select: false,
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    width: '360px',
  },
};

export const WithCheckbox: Story = {
  args: {
    size: ListSize.M,
    select: true,
    name: 'Alex Brown',
    email: 'alex.brown@example.com',
    width: '320px',
  },
};

export const SmallWithCheckbox: Story = {
  args: {
    size: ListSize.S,
    select: true,
    name: 'Emma Davis',
    email: 'emma.davis@example.com',
    width: '280px',
  },
};

export const LargeWithCheckbox: Story = {
  args: {
    size: ListSize.L,
    select: true,
    name: 'David Miller',
    email: 'david.miller@example.com',
    width: '360px',
  },
};

// 다양한 너비 비교
export const DifferentWidths: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Small Width (240px)</h3>
        <List size={ListSize.M} select={false} name="Narrow User" email="narrow@example.com" width="240px" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Medium Width (320px)</h3>
        <List size={ListSize.M} select={false} name="Medium User" email="medium@example.com" width="320px" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Large Width (400px)</h3>
        <List size={ListSize.M} select={false} name="Wide User" email="wide@example.com" width="400px" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Full Width (100%)</h3>
        <div style={{ width: '500px' }}>
          <List size={ListSize.M} select={false} name="Full Width User" email="fullwidth@example.com" width="100%" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// 모든 크기 비교 (동일한 너비)
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Small</h3>
        <List size={ListSize.S} select={false} name="Small User" email="small@example.com" width="320px" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Medium</h3>
        <List size={ListSize.M} select={false} name="Medium User" email="medium@example.com" width="320px" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Large</h3>
        <List size={ListSize.L} select={false} name="Large User" email="large@example.com" width="320px" />
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
        <List size={ListSize.S} select={true} name="Small User" email="small@example.com" width="320px" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Medium with Checkbox</h3>
        <List size={ListSize.M} select={true} name="Medium User" email="medium@example.com" width="320px" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Large with Checkbox</h3>
        <List size={ListSize.L} select={true} name="Large User" email="large@example.com" width="320px" />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// 리스트 그룹 예시 (반응형 너비)
export const ListGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', alignItems: 'stretch', backgroundColor: '#f5f5f5', padding: '1px', width: '350px' }}>
      <List size={ListSize.M} select={true} name="User 1" email="user1@example.com" width="100%" />
      <List size={ListSize.M} select={true} name="User 2" email="user2@example.com" width="100%" />
      <List size={ListSize.M} select={true} name="User 3 with a very long name" email="verylongemail@example.com" width="100%" />
      <List size={ListSize.M} select={true} name="User 4" email="user4@example.com" width="100%" />
      <List size={ListSize.M} select={true} name="User 5" email="user5@example.com" width="100%" />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// 반응형 테스트
export const ResponsiveWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Min Width (200px)</h3>
        <List size={ListSize.M} select={true} name="Min" email="min@test.com" width="200px" />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>Max Width (600px)</h3>
        <List size={ListSize.M} select={true} name="Maximum Width User Name" email="maximum.width.email@example.com" width="600px" />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};