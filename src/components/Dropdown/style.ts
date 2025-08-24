import styled from 'styled-components';
import { SyncLightTheme,SyncDarkTheme } from '../../style/SyncTheme/SyncTheme';
import { Font } from '../../tokens/Font';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

interface DropdownButtonProps {
  $isOpen: boolean;
  $buttonSize: 'large' | 'small';
}

export const DropdownButton = styled.button<DropdownButtonProps>`
  width: ${props => props.$buttonSize === 'large' ? '88px' : '80px'};
  height: ${props => props.$buttonSize === 'large' ? '48px' : '44px'};
  background-color: ${props => props.$isOpen ? SyncLightTheme['action-secondary'] : SyncLightTheme['static-white']};
  border: 1px solid ${props => props.$isOpen ? SyncLightTheme['action-primary'] : SyncLightTheme['border-light']};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;

  &:hover {
    background-color: ${props => props.$isOpen ? SyncLightTheme['action-secondary'] : SyncLightTheme['background-primary']};
    border-color: ${props => props.$isOpen ? SyncLightTheme['action-primary'] : SyncLightTheme['border-medium']};
  }
`;

export const DropdownText = styled.span`
  font-size: ${Font.label.label1_semiBold.fontSize};
  font-weight: ${Font.label.label1_semiBold.fontWeight};
  font-family: ${Font.label.label1_semiBold.fontFamily};
  line-height: ${Font.label.label1_semiBold.lineHeight};
  color: ${SyncLightTheme['text-black']};
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface DropdownIconProps {
  $isOpen: boolean;
}

export const DropdownIcon = styled.div<DropdownIconProps>`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s ease;

  svg {
    width: 100%;
    height: 100%;
    color: ${props => props.$isOpen ? SyncLightTheme['action-primary'] : SyncLightTheme['text-muted']};
    transition: color 0.2s ease;
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${SyncLightTheme['static-white']};
  border: 1px solid ${SyncLightTheme['border-light']};
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 2px;
  max-height: 200px;
  overflow-y: auto;
  width: max-content;
`;

interface DropdownItemProps {
  $isSelected: boolean;
  $size: 'large' | 'medium';
}

export const DropdownItem = styled.div<DropdownItemProps>`
  height: ${props => props.$size === 'large' ? '44px' : '40px'};
  padding: 0 12px;
  display: flex;
  align-items: center;
  font-size: ${Font.label.label1_semiBold.fontSize};
  font-weight: ${Font.label.label1_semiBold.fontWeight};
  font-family: ${Font.label.label1_semiBold.fontFamily};
  line-height: ${Font.label.label1_semiBold.lineHeight};
  color: ${SyncLightTheme['text-black']};
  cursor: pointer;
  background-color: ${props => props.$isSelected ? SyncLightTheme['background-primary'] : SyncLightTheme['static-white']};
  transition: background-color 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${SyncLightTheme['background-primary']};
  }

`;