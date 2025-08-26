import styled from 'styled-components';
import { Font } from '../../tokens/Font';

interface ToggleContainerProps {
  $size: 'large' | 'small';
}

export const ToggleContainer = styled.div<ToggleContainerProps>`
  width: ${props => props.$size === 'large' ? '186px' : '158px'};
  height: ${props => props.$size === 'large' ? '54px' : '46px'};
  background-color: ${({ theme }) => theme['static-white']};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['border-light']};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.$size === 'large' ? '4px' : '3px'};
  gap: 2px;
`;

interface ToggleOptionProps {
  $isSelected: boolean;
  $size: 'large' | 'small';
}

export const ToggleOption = styled.button<ToggleOptionProps>`
  width: ${props => props.$size === 'large' ? '89px' : '76px'};
  height: ${props => props.$size === 'large' ? '46px' : '40px'};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.$isSelected ? props.theme['action-secondary'] : 'transparent'};
  color: ${props => props.$isSelected ? props.theme['action-primary'] : props.theme['text-primary']};
  border: none;
  border-radius: 4px;
  font-size: ${props => props.$size === 'large' ? Font.label.label1_semiBold.fontSize : Font.label.label2_semiBold.fontSize};
  font-weight: ${props => props.$size === 'large' ? Font.label.label1_semiBold.fontWeight : Font.label.label2_semiBold.fontWeight};
  font-family: ${props => props.$size === 'large' ? Font.label.label1_semiBold.fontFamily : Font.label.label2_semiBold.fontFamily};
  line-height: ${props => props.$size === 'large' ? Font.label.label1_semiBold.lineHeight : Font.label.label2_semiBold.lineHeight};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.$isSelected 
      ? props.theme['action-secondary'] 
      : props.theme['background-hover']};
  }
`;