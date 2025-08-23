import type { Meta, StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';
import Header from './Header';
import { Tab } from './types';

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

// 텍스트 자르기 함수
const truncateText = (text: string, maxLength: number): string =>
  text.length <= maxLength ? text : text.substring(0, maxLength) + '...';

// 스토리용 래퍼 컴포넌트
const HeaderWrapper = (args: any) => {
  const [tabs, setTabs] = useState<Tab[]>(args.tabs || []);
  const pageBoxWrapRef = useRef<HTMLDivElement | null>(null);

  const handleTabClick = (tabId: string) => {
    setTabs(prev => prev.map(tab => ({ ...tab, isActive: tab.id === tabId })));
    console.log('Tab clicked:', tabId);
  };

  const handleTabClose = (tabId: string) => {
    setTabs(prev => prev.filter(tab => tab.id !== tabId));
    console.log('Tab closed:', tabId);
  };

  return (
    <Header
      tabs={tabs}
      onTabClick={handleTabClick}
      onTabClose={handleTabClose}
      truncateText={truncateText}
      pageBoxWrapRef={pageBoxWrapRef}
    />
  );
};

// 기본 활성 탭
export const Default: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    tabs: [
      { id: '1', title: '프로젝트 A', isActive: true, projectId: 'proj-1' },
    ],
  },
};

// 긴 제목
export const LongTitle: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    tabs: [
      { id: '1', title: '2025 나르샤 팀 AICT 프로젝트 매우 긴 이름', isActive: true, projectId: 'proj-1' },
    ],
  },
};

// 짧은 제목
export const ShortTitle: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    tabs: [
      { id: '1', title: '짧은제목', isActive: true, projectId: 'proj-1' },
    ],
  },
};

// 여러 탭 중 활성화된 탭만 표시
export const ActiveFromMultiple: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    tabs: [
      { id: '1', title: '프로젝트 1', isActive: false, projectId: 'proj-1' },
      { id: '2', title: '활성화된 프로젝트', isActive: true, projectId: 'proj-2' },
      { id: '3', title: '프로젝트 3', isActive: false, projectId: 'proj-3' },
    ],
  },
};

// 탭 없음
export const NoTabs: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    tabs: [],
  },
};