import styled from 'styled-components';
import { Font } from '@tokens/Font';
import { SelectItemSize } from '@foundation/Select';

interface SelectItemProps {
  $isSelected: boolean;
  $size: SelectItemSize;
}

export const SelectItem = styled.div<SelectItemProps>`
  height: ${({ $size }) => {
    switch ($size) {
      case 'L': return '35px';
      case 'M': return '29px';
      case 'S': return '28px';
      case 'XS': return '22px';
      default: return '29px';
    }
  }};
  width: ${({ $size }) => {
    switch ($size) {
      case 'L': return '76px';
      case 'M': return '65px';
      case 'S': return '63px';
      case 'XS': return '61px';
      default: return '76px';
    }
  }};
  
  padding: 0 12px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme['text-black']};
  cursor: pointer;
  background-color: ${props => props.$isSelected ? props.theme['bg-primary'] : props.theme['static-white']};
  transition: background-color 0.2s ease;
  
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: ${({ theme }) => theme['bg-primary']};
  }

  ${({ $size }) => {
    switch ($size) {
      case 'L':
        return `
          font-size: ${Font.label.label1_semiBold.fontSize};
          font-weight: ${Font.label.label1_semiBold.fontWeight};
          font-family: ${Font.label.label1_semiBold.fontFamily};
          line-height: ${Font.label.label1_semiBold.lineHeight};
          min-width: 2ch;
        `;
      case 'M':
        return `
          font-size: ${Font.label.label2_semiBold.fontSize};
          font-weight: ${Font.label.label2_semiBold.fontWeight};
          font-family: ${Font.label.label2_semiBold.fontFamily};
          line-height: ${Font.label.label2_semiBold.lineHeight};
          min-width: 2ch;
        `;
      case 'S':
        return `
          font-size: ${Font.label.label3_semiBold.fontSize};
          font-weight: ${Font.label.label3_semiBold.fontWeight};
          font-family: ${Font.label.label3_semiBold.fontFamily};
          line-height: ${Font.label.label3_semiBold.lineHeight};
          min-width: 2ch;
        `;
      case 'XS':
        return `
          font-size: ${Font.label.label4_semiBold.fontSize};
          font-weight: ${Font.label.label4_semiBold.fontWeight};
          font-family: ${Font.label.label4_semiBold.fontFamily};
          line-height: ${Font.label.label4_semiBold.lineHeight};
          min-width: 2ch;
        `;
      default:
        return '';
    }
  }};
`;