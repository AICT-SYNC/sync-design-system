import styled from 'styled-components';
import { Font } from '../../tokens/Font';

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
  border: 1px solid ${({ theme }) => theme['border-light']};
  background-color: ${({ theme }) => theme['static-white']};
  color: ${({ theme }) => theme['text-primary']};

  &:hover:not(:disabled):not(:focus) {
    border: 1px solid ${({ theme }) => theme['border-medium']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme['action-primary']} !important;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['action-primary']}20;
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme['border-light']} !important;
    background-color: ${({ theme }) => theme['background-secondary']} !important;
    color: ${({ theme }) => theme['text-disabled']} !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
  }

  ${({ theme, enabled }) => !enabled && `
    border: 1px solid ${theme['border-light']} !important;
    background-color: ${theme['background-secondary']} !important;
    color: ${theme['text-disabled']} !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
         
    &:hover, &:focus {
      border: 1px solid ${theme['border-light']} !important;
      background-color: ${theme['background-secondary']} !important;
      box-shadow: none !important;
    }
  `}

  &::placeholder {
    color: ${({ theme }) => theme['text-secondary']};
    font-family: ${Font.label.label1_semiBold};
  }

  &:disabled::placeholder {
    color: ${({ theme }) => theme['text-disabled']};
    opacity: 0.5;
  }
`;