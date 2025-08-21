import React from "react";
import { ButtonContainer } from "./style";
import { ButtonVariant, ButtonSize } from "./types";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.L,
  children,
  ...rest
}) => {
  return (
    <ButtonContainer $variant={variant} $size={size} {...rest}>
      {children}
    </ButtonContainer>
  );
};