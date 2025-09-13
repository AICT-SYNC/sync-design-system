import React from "react";
import { ButtonVariant, ButtonSize, ButtonLong } from "@foundation/Button";
import { SyncIcon, SyncIcons } from "@assets/icons";
import styled, { useTheme } from "styled-components";
import { Font } from "@/tokens";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  enabled?: boolean;
  text: React.ReactNode;
  IconName?: SyncIcons;
  long?: ButtonLong;
}

const ButtonContainer = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize | boolean;
  $enabled: boolean;
  $long: ButtonLong;
  $hasIcon: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.$variant === ButtonVariant.ASSISTIVE
      ? `1px solid ${props.theme["border-light"]}`
      : "none"};
  border-radius: 4px;

  background-color: ${(props) => {
    switch (props.$variant) {
      case ButtonVariant.PRIMARY:
        return props.theme["action-primary"];
      case ButtonVariant.SECONDARY:
        return props.theme["action-secondary"];
      case ButtonVariant.ASSISTIVE:
        return props.theme["action-assisitive"];
      case ButtonVariant.NEGATIVE:
        return props.theme["action-negative"];
      case ButtonVariant.IMPORTANT:
        return props.theme["action-important"];
    }
  }};

  color: ${(props) => {
    switch (props.$variant) {
      case ButtonVariant.PRIMARY:
      case ButtonVariant.NEGATIVE:
      case ButtonVariant.IMPORTANT:
        return props.theme["static-white"];
      case ButtonVariant.SECONDARY:
        return props.theme["action-primary"];
      case ButtonVariant.ASSISTIVE:
        return props.theme["text-black"];
    }
  }};

  padding: ${(props) => {
    // Size XL + Long 값이 있는 경우
    if (props.$size === ButtonSize.XL && props.$long !== ButtonLong.False) {
      return "14px 24px";
    }
    
    // Size만 있는 경우 (Long이 false이거나 해당 없음)
    switch (props.$size) {
      case ButtonSize.XL:
        return "14px 24px";
      case ButtonSize.L:
        return "12px 20px";
      case ButtonSize.M:
        return "10px 16px";
      case ButtonSize.S:
        return "6px 12px";
      case ButtonSize.XS:
        return "4px 8px";
      default:
        return "12px 20px";
    }
  }};

  min-width: ${(props) => {
    // Size XL + Long 값이 있는 경우
    if (props.$size === ButtonSize.XL && props.$long !== ButtonLong.False) {
      switch (props.$long) {
        case ButtonLong.L:
          return "460px";
        case ButtonLong.M:
          return "380px";
        case ButtonLong.S:
          return "300px";
        case ButtonLong.XS:
          return "220px";
        default:
          return "auto";
      }
    }
    return "auto";
  }};

  gap: ${(props) => {
    // ButtonSize XL + ButtonLong 값이 있으면 12px
    if (props.$size === ButtonSize.XL && props.$long !== ButtonLong.False) {
      return "12px";
    }
    // ButtonSize XL + ButtonLong false, L, M 사이즈는 8px
    if (
      props.$size === ButtonSize.XL ||
      props.$size === ButtonSize.L ||
      props.$size === ButtonSize.M
    ) {
      return "8px";
    }
    // ButtonSize S, XS는 4px
    if (props.$size === ButtonSize.S || props.$size === ButtonSize.XS) {
      return "4px";
    }
    return "8px"; // 기본값
  }};

  font: ${(props) => {
    switch (props.$size) {
      case ButtonSize.XS:
        return Font.label.label4_semiBold;
      case ButtonSize.S:
      case ButtonSize.M:
        return Font.label.label2_semiBold;
      case ButtonSize.L:
      case ButtonSize.XL:
        return Font.label.label1_semiBold;
    }
  }};

  opacity: ${(props) => {
    if (!props.$enabled) {
      return 0.5;
    }
  }};

  cursor: ${(props) => {
    if (!props.$enabled) {
      return "not-allowed";
    } else {
      return "pointer";
    }
  }};

  &:hover {
    ${(props) => {
      if (!props.$enabled) return "";

      // hover 색상이 있는 variant들
      switch (props.$variant) {
        case ButtonVariant.PRIMARY:
          return `background-color: ${props.theme["action-primary-hover"]};`;
        case ButtonVariant.SECONDARY:
          return `background-color: ${props.theme["action-secondary-hover"]};`;
        case ButtonVariant.NEGATIVE:
          return `background-color: ${props.theme["action-negative-hover"]};`;
        case ButtonVariant.IMPORTANT:
          return `background-color: ${props.theme["action-important-hover"]};`;
        default:
          return "opacity: 0.9;";
      }
    }}
  }

  &:active {
    ${(props) => {
      if (!props.$enabled) return "";

      // active 색상이 있는 variant들
      switch (props.$variant) {
        case ButtonVariant.PRIMARY:
          return `background-color: ${props.theme["action-primary-active"]};`;
        default:
          return "opacity: 0.9;";
      }
    }}
    transform: scale(0.98);
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.L,
  enabled = true,
  text,
  IconName,
  long = ButtonLong.False,
  ...rest
}) => {
  const theme = useTheme();
  const getIconSize = () => {
    // Size XL + Long 값이 있을 때는 24px
    if (size === ButtonSize.XL && long !== ButtonLong.False) {
      return 24;
    }

    // Size만 있는 경우
    switch (size) {
      case ButtonSize.XL:
        return 20;
      case ButtonSize.L:
        return 20;
      case ButtonSize.M:
        return 16;
      case ButtonSize.S:
        return 16;
      case ButtonSize.XS:
        return 12;
      default:
        return 20;
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
      case ButtonVariant.NEGATIVE:
      case ButtonVariant.IMPORTANT:
        return theme["action-assistive"];
      case ButtonVariant.SECONDARY:
        return theme["action-primary"];
      case ButtonVariant.ASSISTIVE:
        return theme["text-black"];
    }
  };

  return (
    <ButtonContainer
      $variant={variant}
      $size={size}
      $enabled={enabled}
      $long={long}
      $hasIcon={!!IconName}
      {...rest}
    >
      {IconName && (
        <SyncIcon name={IconName} size={getIconSize()} color={getIconColor()} />
      )}
      {text}
    </ButtonContainer>
  );
};
