import React from "react";
import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  color: white;

  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: #1e90ff;
      &:hover {
        background-color: #0077ff;
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: #888;
      &:hover {
        background-color: #555;
      }
    `}
`;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};