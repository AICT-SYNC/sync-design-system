import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 스토리용 래퍼 컴포넌트
const HeaderWrapper = (args: any) => {
  const [isHover, setIsHover] = useState(false);

  const handleTabClick = (tabId: string) => {
    console.log('Tab clicked:', tabId);
  };

  const handleTabClose = (tabId: string) => {
    console.log('Tab closed:', tabId);
  };

  return (
    <div 
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Header
        id={args.id}
        title={args.title}
        isActive={args.isActive}
        isHover={isHover}
        onTabClick={handleTabClick}
        onTabClose={handleTabClose}
      />
    </div>
  );
};

// 기본 활성 탭
export const Default: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    id: '1',
    title: '프로젝트 A',
    isActive: true,
  },
};

// 비활성 탭
export const Inactive: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    id: '1',
    title: '비활성 탭',
    isActive: false,
  },
};

// 긴 제목
export const LongTitle: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    id: '1',
    title: '2025 나르샤 팀 AICT 프로젝트 매우 긴 이름',
    isActive: true,
  },
};

// 짧은 제목
export const ShortTitle: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    id: '1',
    title: '짧은제목',
    isActive: true,
  },
};

// 호버 상태 (항상 CloseIcon 보임)
export const AlwaysShowCloseIcon: Story = {
  render: (args) => (
    <Header
      id={args.id}
      title={args.title}
      isActive={args.isActive}
      isHover={true} // 항상 hover 상태
      onTabClick={(tabId) => console.log('Tab clicked:', tabId)}
      onTabClose={(tabId) => console.log('Tab closed:', tabId)}
    />
  ),
  args: {
    id: '1',
    title: '호버 상태 탭',
    isActive: false,
  },
};

// 활성화된 탭 (CloseIcon 보임)
export const ActiveWithCloseIcon: Story = {
  render: (args) => (
    <Header
      id={args.id}
      title={args.title}
      isActive={args.isActive}
      isHover={false}
      onTabClick={(tabId) => console.log('Tab clicked:', tabId)}
      onTabClose={(tabId) => console.log('Tab closed:', tabId)}
    />
  ),
  args: {
    id: '1',
    title: '활성화된 탭',
    isActive: true,
  },
};