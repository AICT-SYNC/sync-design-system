import { SyncIcons, SyncIconMap } from "./syncIconTypes";

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