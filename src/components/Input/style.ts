import styled from "styled-components";
import { Font } from "../../tokens/Font";
import { InputSize, InputSizeMap } from "../../foundation/Input";

interface InputContainerProps {
  $size: InputSize;
  $enabled: boolean;
}

export const InputContainer = styled.input<InputContainerProps>`
  display: flex;
  width: ${({ $size }) => InputSizeMap[$size].width};
  height: ${({ $size }) => InputSizeMap[$size].height};
  font: ${({ $size }) => InputSizeMap[$size].font};

  border-radius: 4px;
  gap: 10px;
  padding: 0 16px;
  outline: none;
  transition: border-color 0.2s ease;
  border: 1px solid ${({ theme }) => theme["border-light"]};
  background-color: ${({ theme }) => theme["static-white"]};
  color: ${({ theme }) => theme["text-black"]};

  &:hover:not(:disabled):not(:focus) {
    border: 1px solid ${({ theme }) => theme["border-medium"]};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme["border-primary"]} !important;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["border-primary"]}20;
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme["border-light"]} !important;
    background-color: ${({ theme }) =>
      theme["bg-secondary"]} !important;
    color: ${({ theme }) => theme["text-muted"]} !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
  }

  ${({ $enabled, theme }) =>
    !$enabled &&
    `
    border: 1px solid ${theme["border-light"]} !important;
    background-color: ${theme["bg-secondary"]} !important;
    color: ${theme["text-muted"]} !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
                
    &:hover, &:focus {
      border: 1px solid ${theme["border-light"]} !important;
      background-color: ${theme["bg-secondary"]} !important;
      box-shadow: none !important;
    }
  `}

  &::placeholder {
    color: ${({ theme }) => theme["text-muted"]};
    font-family: ${Font.label.label1_semiBold.fontFamily};
  }

  &:disabled::placeholder {
    color: ${({ theme }) => theme["text-muted"]};
    opacity: 0.5;
  }
`;
