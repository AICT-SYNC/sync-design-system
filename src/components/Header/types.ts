// types.ts
export interface Tab {
  id: string;
  title: string;
  isActive: boolean;
  projectId: string;
}

export interface HeaderProps {
  // 탭 관련
  tabs: Tab[];
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
  truncateText: (text: string, maxLength: number) => string;

  // ref
  pageBoxWrapRef: React.RefObject<HTMLDivElement | null>;
}