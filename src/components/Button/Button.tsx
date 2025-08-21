import React from "react";
import { ButtonContainer } from "./style";
import { ButtonVariant, ButtonSize } from "../../enums/ButtonEnum";
import { Calendar } from "../../assets/icons/calendar";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  withCalendarIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.L,
  children,
  withCalendarIcon = false,
  ...rest
}) => {
  const getIconSize = () => {
    switch (size) {
      case ButtonSize.LONG_L:
      case ButtonSize.LONG_M:
      case ButtonSize.LONG_S:
        return 24;
      case ButtonSize.XL:
      case ButtonSize.L:
        return 20;
      case ButtonSize.M:
      case ButtonSize.S:
        return 16;
      case ButtonSize.XS:
        return 12;
      default:
        return 16;
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
        return "white";
      case ButtonVariant.SECONDARY:
        return "secondary";
      case ButtonVariant.TERTIARY:
        return "tertiary";
      case ButtonVariant.DANGER:
      case ButtonVariant.WARNING:
        return "white";
      default:
        return "white";
    }
  };

  return (
    <ButtonContainer $variant={variant} $size={size} {...rest}>
      {withCalendarIcon && (
        <Calendar 
          size={getIconSize()} 
          color={getIconColor()}
          $svgStyle={{ marginRight: "8px" }}
        />
      )}
      {children}
    </ButtonContainer>
  );
};