import styled from 'styled-components';
import { Font } from '../../tokens/Font';
import { InputSize } from '../../foundation/Input';
import { inputWidth,inputHeight } from '../../tokens'


interface InputContainerProps {
  size: InputSize;
  enabled: boolean;
}

export const InputContainer = styled.input<InputContainerProps>`
  display: flex;
  width: ${({ size }) => {
    switch (size) {
      case InputSize.S: return inputWidth['input-sm'];
      case InputSize.M: return inputWidth['input-md'];
      case InputSize.L: return inputWidth['input-lg'];
      default: return inputWidth['input-lg'];
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case InputSize.S: return inputHeight['input-sm'];
      case InputSize.M: return inputHeight['input-md'];
      case InputSize.L: return inputHeight['input-lg'];
      default: return inputHeight['input-lg'];
    }
  }};

  ${({ size }) => {
    const fontStyle = (() => {
      switch (size) {
        case InputSize.S: return Font.label.label4_semiBold;
        case InputSize.M: return Font.label.label2_semiBold;
        case InputSize.L: return Font.label.label1_semiBold;
        default: return Font.label.label1_semiBold;
      }
    })();
        
    return `
      font-family: ${fontStyle.fontFamily};
      font-size: ${fontStyle.fontSize};
      font-weight: ${fontStyle.fontWeight};
      line-height: ${fontStyle.lineHeight};
      font-style: ${fontStyle.fontStyle};
    `;
  }};
    
  border-radius: 4px;
  gap: 10px;
  padding: 0 16px;
  outline: none;
  transition: border-color 0.2s ease;
  border: 1px solid ${({ theme }) => theme['border-light']};
  background-color: ${({ theme }) => theme['static-white']};
  color: ${({ theme }) => theme['text-black']};

  &:hover:not(:disabled):not(:focus) {
    border: 1px solid ${({ theme }) => theme['border-medium']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme['border-primary']} !important;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['border-primary']}20;
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme['border-light']} !important;
    background-color: ${({ theme }) => theme['background-secondary']} !important;
    color: ${({ theme }) => theme['text-muted']} !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
  }

  ${({ enabled, theme }) => !enabled && `
    border: 1px solid ${theme['border-light']} !important;
    background-color: ${theme['background-secondary']} !important;
    color: ${theme['text-muted']} !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
                
    &:hover, &:focus {
      border: 1px solid ${theme['border-light']} !important;
      background-color: ${theme['background-secondary']} !important;
      box-shadow: none !important;
    }
  `}

  &::placeholder {
    color: ${({ theme }) => theme['text-muted']};
    font-family: ${Font.label.label1_semiBold.fontFamily};
  }

  &:disabled::placeholder {
    color: ${({ theme }) => theme['text-muted']};
    opacity: 0.5;
  }
`;