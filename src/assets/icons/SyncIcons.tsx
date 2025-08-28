import {
  Globe,
  CalendarDays,
  Settings,
  Check,
  SquareKanban,
  ChartGantt,
  List,
  FileText,
  X,
  Plus,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  CornerUpLeft,
  Pencil,
  ThumbsUp,
  Trash,
  PanelLeftClose,
  PanelRightClose,
} from "lucide-react";

export enum SyncIcons {
  Globe = "Globe",
  CalendarDays = "CalendarDays",
  Settings = "Settings",
  Check = "Check",
  SquareKanban = "SquareKanban",
  ChartGantt = "ChartGantt",
  List = "List",
  FileText = "FileText",
  X = "X",
  Plus = "Plus",
  ChevronLeft = "ChevronLeft",
  ChevronRight = "ChevronRight",
  ChevronDown = "ChevronDown",
  ArrowRight = "ArrowRight",
  CornerUpLeft = "CornerUpLeft",
  Pencil = "Pencil",
  ThumbsUp = "ThumbsUp",
  Trash = "Trash",
  PanelLeftClose = "PanelLeftClose",
  PanelRightClose = "PanelRightClose"
}

export const SyncIconMap: Record<SyncIcons, React.FC<{ size?: number; color?: string; strokeWidth?: number }>> = {
  [SyncIcons.Globe]: Globe,
  [SyncIcons.CalendarDays]: CalendarDays,
  [SyncIcons.Settings]: Settings,
  [SyncIcons.Check]: Check,
  [SyncIcons.SquareKanban]: SquareKanban,
  [SyncIcons.ChartGantt]: ChartGantt,
  [SyncIcons.List]: List,
  [SyncIcons.FileText]: FileText,
  [SyncIcons.X]: X,
  [SyncIcons.Plus]: Plus,
  [SyncIcons.ChevronLeft]: ChevronLeft,
  [SyncIcons.ChevronRight]: ChevronRight,
  [SyncIcons.ChevronDown]: ChevronDown,
  [SyncIcons.ArrowRight]: ArrowRight,
  [SyncIcons.CornerUpLeft]: CornerUpLeft,
  [SyncIcons.Pencil]: Pencil,
  [SyncIcons.ThumbsUp]: ThumbsUp,
  [SyncIcons.Trash]: Trash,
  [SyncIcons.PanelRightClose]: PanelRightClose,
  [SyncIcons.PanelLeftClose]:PanelLeftClose

};

type SyncIconProps = {
  name: SyncIcons;
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export const SyncIcon: React.FC<SyncIconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
}) => {
  const IconComponent = SyncIconMap[name];
  return <IconComponent size={size} color={color} strokeWidth={strokeWidth} />;
};