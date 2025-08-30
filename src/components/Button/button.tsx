import React from "react";
import { ButtonVariant, ButtonSize, Long } from "../../enums/ButtonEnum";
import { SyncIcon, SyncIcons } from "../../assets/icons/SyncIcons";
import styled from "styled-components";
import { Font } from "@/tokens";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  enabled?: boolean;
  text: React.ReactNode;
  withIcon?: SyncIcons;
}

const ButtonContainer = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize | boolean;
  $enabled: boolean;
  $long: Long;
}>`
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
      default:
        return props.theme["action-primary"];
    }
  }};

  font: ${(props) => {
    switch (props.$size) {
      case ButtonSize.XS:
        return Font.label.label4_semiBold;
      case ButtonSize.S:
        return Font.label.label2_semiBold;
      case ButtonSize.M:
        return Font.label.label1_semiBold;
      case ButtonSize.L:
        return Font.label.label1_semiBold;
      case ButtonSize.XL:
        return Font.label.label1_semiBold;
      case ButtonSize["2XL"]:
        return Font.label.label1_semiBold;
    }
  }};

  opacity: ${(props) => {
    if (!props.$enabled) {
      return 0.5;
    }
  }};

  padding: ${(props) => {
    if (props.$size == ButtonSize["2XL"] && props.$long == Long.L) {
      return "24px 14px";
    } else if (props.$size == ButtonSize["XL"]){
      return "24px 14px";
    } else if (props.$size == ButtonSize["L"]){
      return "24px 14px";
    } 
  }};
`;

export const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.L,
  enabled = true,
  text,
  // withIcon,
  ...rest
}) => {
  return (
    <ButtonContainer
      $variant={variant}
      $size={size}
      $enabled={enabled}
      $long={Long}
      {...rest}
    >
      {text}
    </ButtonContainer>
  );
};
