import styled from 'styled-components';
import { Font } from '../../tokens/Font.ts';
import { lightColors } from '../../tokens/semantic.ts';

interface InputContainerProps {
  size: 'S' | 'M' | 'L';
  enabled: boolean;
}

export const InputContainer = styled.input<InputContainerProps>`
  display: flex;
  width: ${({ size }) => {
    switch (size) {
      case 'S': return '300px';
      case 'M': return '380px';
      case 'L': return '460px';
      default: return '460px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'S': return '32px';
      case 'M': return '40px';
      case 'L': return '48px';
      default: return '48px';
    }
  }};
  font-family: ${Font.label.label1_semiBold};
  border-radius: 4px;
  gap: 10px;
  padding: 0 16px;
  outline: none;
  transition: border-color 0.2s ease;
  border: 1px solid ${lightColors['border-light']};
  background-color: ${lightColors['static-white']};
  color: ${lightColors['text-black']};

  &:hover:not(:disabled):not(:focus) {
    border: 1px solid ${lightColors['border-medium']};
  }

  &:focus {
    border: 1px solid ${lightColors['border-primary']} !important;
    box-shadow: 0 0 0 2px ${lightColors['border-primary']}20;
  }

  &:disabled {
    border: 1px solid ${lightColors['border-light']} !important;
    background-color: ${lightColors['background-secondary']} !important;
    color: ${lightColors['text-muted']} !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
  }

  ${({ enabled }) => !enabled && `
    border: 1px solid ${lightColors['border-light']} !important;
    background-color: ${lightColors['background-secondary']} !important;
    color: ${lightColors['text-muted']} !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
         
    &:hover, &:focus {
      border: 1px solid ${lightColors['border-light']} !important;
      background-color: ${lightColors['background-secondary']} !important;
      box-shadow: none !important;
    }
  `}

  &::placeholder {
    color: ${lightColors['text-muted']};
    font-family: ${Font.label.label1_semiBold};
  }

  &:disabled::placeholder {
    color: ${lightColors['text-muted']};
    opacity: 0.5;
  }
`;