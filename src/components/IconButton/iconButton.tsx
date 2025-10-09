import React from "react";
import { SyncIcon, SyncIcons } from "@assets/icons";
import { IconButtonSize } from "@foundation/IconButton";
import styled, { useTheme } from "styled-components";
import { ColorKey } from "@tokens/Color/semantic";

interface IconButtonContainerProps {
  $size: IconButtonSize;
  $bgColor: string;
  $hoverBgColor?: string;
  $disabled?: boolean;
}

interface IconButtonProps {
  size?: IconButtonSize;
  onClick?: () => void;
  icon: keyof typeof SyncIcons;
  iconColor?: ColorKey | string;
  bgColor: ColorKey | string;
  hoverBgColor?: ColorKey | string;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}

const getSizeStyles = (size: string) => {
  switch (size) {
    case IconButtonSize.L:
      return { width: "48px", height: "48px", iconSize: 24 };
    case IconButtonSize.M:
      return { width: "40px", height: "40px", iconSize: 20 };
    case IconButtonSize.S:
      return { width: "32px", height: "32px", iconSize: 16 };
    case IconButtonSize.XS:
      return { width: "24px", height: "24px", iconSize: 12 };
    case IconButtonSize["2XS"]:
      return { width: "16px", height: "16px", iconSize: 12 };
    default:
      return { width: "48px", height: "48px", iconSize: 24 };
  }
};

export const IconButtonContainer = styled.button<IconButtonContainerProps>`
  width: ${(props) => getSizeStyles(props.$size).width};
  height: ${(props) => getSizeStyles(props.$size).height};
  background-color: ${({ theme, $bgColor }) =>
    $bgColor in theme ? theme[$bgColor as keyof typeof theme] : $bgColor};
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${({ theme, $hoverBgColor, $disabled }) =>
      $disabled
        ? "inherit"
        : $hoverBgColor
          ? $hoverBgColor in theme
            ? theme[$hoverBgColor as keyof typeof theme]
            : $hoverBgColor
          : "rgba(216, 219, 223, 0.2)"};
  }

  &:active {
    transform: ${(props) => (props.$disabled ? "none" : "scale(0.95)")};
  }
`;

export const IconButton: React.FC<IconButtonProps> = ({
  size = IconButtonSize.L,
  onClick,
  icon,
  iconColor,
  bgColor,
  hoverBgColor,
  style,
  className,
  disabled = false,
}) => {
  const theme = useTheme();
  const resolvedColor = iconColor
    ? iconColor in theme
      ? theme[iconColor as keyof typeof theme]
      : iconColor
    : theme["default-icon"];

  return (
    <IconButtonContainer
      $size={size}
      onClick={disabled ? undefined : onClick}
      $bgColor={bgColor}
      $hoverBgColor={hoverBgColor}
      $disabled={disabled}
      disabled={disabled}
      style={style}
      className={className}
    >
      <SyncIcon
        name={SyncIcons[icon]}
        size={getSizeStyles(size).iconSize}
        color={resolvedColor}
      />
    </IconButtonContainer>
  );
};
