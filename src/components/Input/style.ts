import styled from 'styled-components';
import { Font } from '../../tokens/Font';
import { SyncLightTheme, SyncDarkTheme } from '../../style/SyncTheme/SyncTheme';

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

  ${({ size }) => {
    const fontStyle = (() => {
      switch (size) {
        case 'S': return Font.label.label4_semiBold;
        case 'M': return Font.label.label2_semiBold;
        case 'L': return Font.label.label1_semiBold;
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
  border: 1px solid ${SyncLightTheme['border-light']};
  background-color: ${SyncLightTheme['static-white']};
  color: ${SyncLightTheme['text-black']};

  &:hover:not(:disabled):not(:focus) {
    border: 1px solid ${SyncLightTheme['border-medium']};
  }

  &:focus {
    border: 1px solid ${SyncLightTheme['border-primary']} !important;
    box-shadow: 0 0 0 2px ${SyncLightTheme['border-primary']}20;
  }

  &:disabled {
    border: 1px solid ${SyncLightTheme['border-light']} !important;
    background-color: ${SyncLightTheme['background-secondary']} !important;
    color: ${SyncLightTheme['text-muted']} !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
  }

  ${({ enabled }) => !enabled && `
    border: 1px solid ${SyncLightTheme['border-light']} !important;
    background-color: ${SyncLightTheme['background-secondary']} !important;
    color: ${SyncLightTheme['text-muted']} !important;
    cursor: not-allowed !important;
    box-shadow: none !important;
            
    &:hover, &:focus {
      border: 1px solid ${SyncLightTheme['border-light']} !important;
      background-color: ${SyncLightTheme['background-secondary']} !important;
      box-shadow: none !important;
    }
  `}

  &::placeholder {
    color: ${SyncLightTheme['text-muted']};
    font-family: ${Font.label.label1_semiBold.fontFamily};
  }

  &:disabled::placeholder {
    color: ${SyncLightTheme['text-muted']};
    opacity: 0.5;
  }
`;