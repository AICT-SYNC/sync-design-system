
export interface HeaderProps {
  id: string;
  title: string;
  isActive: boolean;
  onTabClick: (id: string) => void;
  onTabClose?: (id: string) => void;
}