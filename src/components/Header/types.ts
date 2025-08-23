export interface Tab {
  id: string;
  title: string;
  isActive: boolean;
  projectId: string;
}

export interface HeaderProps {
  // 사이드바 관련
  sideBarClose: boolean;
  onSidebarToggle: () => void;

  // 네비게이션 관련
  canGoBack: boolean;
  canGoForward: boolean;
  onNavigateBack?: () => void;
  onNavigateForward?: () => void;

  // 탭 관련
  tabs: Tab[];
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
  truncateText: (text: string, maxLength: number) => string;

  // 오버플로우 관련
  isOverflowing: boolean;
  pageBoxWrapRef: React.RefObject<HTMLDivElement>;
}