import React from "react";
import { ButtonContainer } from "./style";
import { ButtonVariant, ButtonSize } from "../../enums/ButtonEnum";
import { SyncIcon, SyncIcons } from "../../assets/icons/SyncIcons";
import { lightColors } from "../../tokens/Color/LightColors";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  withIcon?: SyncIcons;
}


export const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.L,
  children,
  withIcon,
  ...rest
}) => {
  const getIconSize = () => {
    switch (size) {
      case ButtonSize.LONG_L:
      case ButtonSize.LONG_M:
      case ButtonSize.LONG_S:
        return 28;
      case ButtonSize.XL:
      case ButtonSize.L:
        return 24;
      case ButtonSize.M:
      case ButtonSize.S:
        return 20;
      case ButtonSize.XS:
        return 16;
      default:
        return 20;
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
        return lightColors['static-white'];
      case ButtonVariant.SECONDARY:
        return lightColors['action-primary'];
      case ButtonVariant.ASSISTIVE:
        return lightColors['action-primary'];
      case ButtonVariant.NEGATIVE:
      case ButtonVariant.IMPORTANT: 
        return lightColors['static-white'];
      default:
        return lightColors['static-white'];
    }
  };

  return (
    <ButtonContainer $variant={variant} $size={size} {...rest}>
      {withIcon && (
        <div style={{ 
          marginRight: "8px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center" 
        }}>
          <SyncIcon 
            name={withIcon}
            size={getIconSize()} 
            color={getIconColor()}
          />
        </div>
      )}
      {children}
    </ButtonContainer>
  );
};