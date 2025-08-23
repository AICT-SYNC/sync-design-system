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

// 기본 탭 데이터
const mockTabs: Tab[] = [
  { id: '1', title: '프로젝트 A', isActive: true, projectId: 'proj-1' },
  { id: '2', title: '프로젝트 B', isActive: false, projectId: 'proj-2' },
  { id: '3', title: '매우 긴 프로젝트 이름', isActive: false, projectId: 'proj-3' },
];

// 텍스트 자르기 함수
const truncateText = (text: string, maxLength: number): string =>
  text.length <= maxLength ? text : text.substring(0, maxLength) + '...';

// 스토리용 래퍼 컴포넌트
const HeaderWrapper = (args: any) => {
  const [sideBarClose, setSideBarClose] = useState(args.sideBarClose || true);
  const [tabs, setTabs] = useState<Tab[]>(args.tabs || mockTabs);
  const [isOverflowing] = useState(args.isOverflowing || false);
  const pageBoxWrapRef = useRef<HTMLDivElement | null>(null);

  const handleTabClick = (tabId: string) => {
    setTabs(prev => prev.map(tab => ({ ...tab, isActive: tab.id === tabId })));
    console.log('Tab clicked:', tabId);
  };

  const handleTabClose = (tabId: string) => {
    setTabs(prev => {
      const newTabs = prev.filter(tab => tab.id !== tabId);
      if (newTabs.length > 0 && prev.find(tab => tab.id === tabId)?.isActive) {
        newTabs[0].isActive = true;
      }
      return newTabs;
    });
    console.log('Tab closed:', tabId);
  };

  const handleSidebarToggle = () => {
    setSideBarClose(!sideBarClose);
    console.log('Sidebar toggled:', !sideBarClose);
  };

  const handleTabAdd = () => {
    const newTab: Tab = {
      id: Date.now().toString(),
      title: `새 프로젝트 ${tabs.length + 1}`,
      isActive: false,
      projectId: `proj-${Date.now()}`
    };
    setTabs(prev => [...prev, newTab]);
    console.log('Tab added:', newTab);
  };

  return (
    <Header
      sideBarClose={sideBarClose}
      onSidebarToggle={handleSidebarToggle}
      canGoBack={args.canGoBack}
      canGoForward={args.canGoForward}
      onNavigateBack={() => console.log('Navigate back')}
      onNavigateForward={() => console.log('Navigate forward')}
      tabs={tabs}
      onTabClick={handleTabClick}
      onTabClose={handleTabClose}
      onTabAdd={handleTabAdd}
      truncateText={truncateText}
      isOverflowing={isOverflowing}
      pageBoxWrapRef={pageBoxWrapRef}
    />
  );
};

// 기본 스토리
export const Default: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    canGoBack: true,
    canGoForward: false,
    sideBarClose: true,
    tabs: mockTabs,
    isOverflowing: false,
  },
};

// 사이드바 열린 상태
export const SidebarOpen: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    ...Default.args,
    sideBarClose: false,
  },
};

// 네비게이션 비활성화
export const NoNavigation: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    ...Default.args,
    canGoBack: false,
    canGoForward: false,
  },
};

// 많은 탭 (오버플로우)
export const ManyTabs: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    ...Default.args,
    tabs: [
      { id: '1', title: '프로젝트 1', isActive: true, projectId: 'proj-1' },
      { id: '2', title: '프로젝트 2', isActive: false, projectId: 'proj-2' },
      { id: '3', title: '프로젝트 3', isActive: false, projectId: 'proj-3' },
      { id: '4', title: '프로젝트 4', isActive: false, projectId: 'proj-4' },
      { id: '5', title: '프로젝트 5', isActive: false, projectId: 'proj-5' },
      { id: '6', title: '프로젝트 6', isActive: false, projectId: 'proj-6' },
      { id: '7', title: '프로젝트 7', isActive: false, projectId: 'proj-7' },
    ],
    isOverflowing: true,
  },
};

// 단일 탭
export const SingleTab: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    ...Default.args,
    tabs: [
      { id: '1', title: '유일한 프로젝트', isActive: true, projectId: 'proj-1' },
    ],
  },
};

// 탭 없음
export const NoTabs: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    ...Default.args,
    tabs: [],
  },
};

// 긴 제목들
export const LongTitles: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    ...Default.args,
    tabs: [
      { id: '1', title: '매우 매우 긴 프로젝트 이름이 있는 탭', isActive: true, projectId: 'proj-1' },
      { id: '2', title: '또 다른 매우 긴 프로젝트 제목', isActive: false, projectId: 'proj-2' },
      { id: '3', title: '짧은 이름', isActive: false, projectId: 'proj-3' },
    ],
  },
};

// 모든 네비게이션 활성화
export const AllNavigationEnabled: Story = {
  render: (args) => <HeaderWrapper {...args} />,
  args: {
    ...Default.args,
    canGoBack: true,
    canGoForward: true,
  },
};