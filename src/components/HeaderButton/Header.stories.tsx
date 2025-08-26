import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Header from './HeaderButton';

const meta: Meta<typeof Header> = {
  title: 'Components/HeaderButton',
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
  const [isActive, setIsActive] = useState(args.isActive || false);

  const handleTabClick = (tabId: string) => {
    setIsActive(!isActive); // 클릭시 토글
    console.log('Tab clicked:', tabId, 'New active state:', !isActive);
  };

  const handleTabClose = (tabId: string) => {
    console.log('Tab closed:', tabId);
  };

  return (
    <Header
      id={args.id}
      title={args.title}
      isActive={isActive} // state 값 사용
      onTabClick={handleTabClick}
      onTabClose={handleTabClose}
    />
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
    isActive: false,
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

// 정적 활성 탭 (클릭 토글 없이 고정)
export const StaticActive: Story = {
  render: (args) => (
    <Header
      id={args.id}
      title={args.title}
      isActive={args.isActive}
      onTabClick={(tabId) => console.log('Tab clicked:', tabId)}
      onTabClose={(tabId) => console.log('Tab closed:', tabId)}
    />
  ),
  args: {
    id: '1',
    title: '활성 탭 (고정)',
    isActive: true,
  },
};

// 정적 비활성 탭 (클릭 토글 없이 고정)
export const StaticInactive: Story = {
  render: (args) => (
    <Header
      id={args.id}
      title={args.title}
      isActive={args.isActive}
      onTabClick={(tabId) => console.log('Tab clicked:', tabId)}
      onTabClose={(tabId) => console.log('Tab closed:', tabId)}
    />
  ),
  args: {
    id: '1',
    title: '비활성 탭 (고정)',
    isActive: false,
  },
};