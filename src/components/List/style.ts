import styled from 'styled-components';
import { Font } from '../../tokens/Font';
import { SyncDarkTheme, SyncLightTheme } from '../../style/SyncTheme/SyncTheme';

interface ListContainerProps {
  size: 'S' | 'M' | 'L';
}

export const ListContainer = styled.div<ListContainerProps>`
  display:flex;
  flex-direction:row;
  width: 967px;
  height: ${({ size }) => {
    switch (size) {
      case 'S': return '48px';
      case 'M': return '64px';
      case 'L': return '86px';
      default: return '86px';
    }
  }};
  border: 1px solid ${SyncLightTheme['border-light']};
  padding: ${({ size }) => {
    switch (size) {
      case 'S': return '16px 28px';
      case 'M': return '24px 28px';
      case 'L': return '32px 28px';
      default: return '32px 28px';
    }
  }};
  display: flex;
  align-items: center;
  gap: 32px;
  
  /* ${({ size }) => {
    const fontStyle = (() => {
      switch (size) {
        case 'S': return Font.label.label3_Regular;
        case 'M': return Font.label.label2_Regular;
        case 'L': return Font.label.label1_Regular;
        default: return Font.label.label1_Regular;
      }
    })();
    
    return `
      font-family: ${fontStyle.fontFamily};
      font-size: ${fontStyle.fontSize};
      font-weight: ${fontStyle.fontWeight};
      line-height: ${fontStyle.lineHeight};
      font-style: ${fontStyle.fontStyle};
    `;
  }}; */
  
`;