export interface Tab {
  id: string;
  title: string;
  isActive: boolean;
  projectId: string;
}

export interface HeaderProps {
  onNavigateBack?: () => void;
  onNavigateForward?: () => void;
  canGoBack?: boolean;
  canGoForward?: boolean;
  initialTabs?: Tab[];
  onTabChange?: (activeTabId: string) => void;
  onTabClose?: (tabId: string) => void;
  onTabAdd?: (newTab: Tab) => void;
  onSidebarToggle?: (isOpen: boolean) => void;
  newProjectId?: string;
  newProjectTitle?: string;
}