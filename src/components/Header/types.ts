export interface HeaderProps {
  // 탭 관련
  id: string;
  title: string;
  isActive: boolean;
  isHover: boolean
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
}