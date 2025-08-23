import styled from 'styled-components';
import { Font } from '../../tokens/Font.ts';
import { lightColors } from '../../tokens/LightColors.ts';

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
    };
  }};
  ${({ size }) => {
    switch (size) {
      case 'S': return `
        font-family: ${Font.label.label4_semiBold};
        font-size: ${Font.label.label4_semiBold.fontSize || '12px'};
        font-weight: ${Font.label.label4_semiBold.fontWeight || '600'};
        line-height: ${Font.label.label4_semiBold.lineHeight || '1.4'};
      `;
      case 'M': return `
        font-family: ${Font.label.label2_semiBold.fontFamily || Font.label.label2_semiBold};
        font-size: ${Font.label.label2_semiBold.fontSize || '14px'};
        font-weight: ${Font.label.label2_semiBold.fontWeight || '600'};
        line-height: ${Font.label.label2_semiBold.lineHeight || '1.4'};
      `;
      case 'L': return `
        font-family: ${Font.label.label1_semiBold.fontFamily || Font.label.label1_semiBold};
        font-size: ${Font.label.label1_semiBold.fontSize || '16px'};
        font-weight: ${Font.label.label1_semiBold.fontWeight || '600'};
        line-height: ${Font.label.label1_semiBold.lineHeight || '1.4'};
      `;
      default: return `
        font-family: ${Font.label.label1_semiBold.fontFamily || Font.label.label1_semiBold};
        font-size: ${Font.label.label1_semiBold.fontSize || '16px'};
        font-weight: ${Font.label.label1_semiBold.fontWeight || '600'};
        line-height: ${Font.label.label1_semiBold.lineHeight || '1.4'};
      `;
    }
  }};
  border-radius: 4px;
  gap: 10px;
  padding: ${({ size }) => {
    switch (size) {
      case 'S': return '4px 8px';
      case 'M': return '4px 12px';  
      case 'L': return '4px 16px';
      default: return '4px 16px';
    }
  }};
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
    /* font-family: ${Font.label.label1_semiBold}; */
  }

  &:disabled::placeholder {
    color: ${lightColors['text-muted']};
    opacity: 0.5;
  }
`;