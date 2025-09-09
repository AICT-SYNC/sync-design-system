import styled from 'styled-components';
import { Font } from '@tokens/Font';
import { SelectSize } from '@foundation/Select';

export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`;

interface SelectButtonProps {
  $isOpen: boolean;
  $size: SelectSize;
}

export const SelectButton = styled.button<SelectButtonProps>`
  width: ${({ $size }) => {
    switch ($size) {
      case 'L': return '76px';
      case 'M': return '65px';
      case 'S': return '63px';
      case 'XS': return '61px';
      default: return '76px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'L': return '35px';
      case 'M': return '33px';
      case 'S': return '32px';
      case 'XS': return '30px';
      default: return '33px';
    }
  }};
  
  background-color: ${props => props.$isOpen ? props.theme['action-secondary'] : props.theme['static-white']};
  border: 1px solid ${props => props.$isOpen ? props.theme['action-primary'] : props.theme['border-light']};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;

  ${({ $size }) => {
    switch ($size) {
      case 'L':
        return `
          font-size: ${Font.label.label1_semiBold.fontSize};
          font-weight: ${Font.label.label1_semiBold.fontWeight};
          font-family: ${Font.label.label1_semiBold.fontFamily};
          line-height: ${Font.label.label1_semiBold.lineHeight};
        `;
      case 'M':
        return `
          font-size: ${Font.label.label2_semiBold.fontSize};
          font-weight: ${Font.label.label2_semiBold.fontWeight};
          font-family: ${Font.label.label2_semiBold.fontFamily};
          line-height: ${Font.label.label2_semiBold.lineHeight};
        `;
      case 'S':
        return `
          font-size: ${Font.label.label3_semiBold.fontSize};
          font-weight: ${Font.label.label3_semiBold.fontWeight};
          font-family: ${Font.label.label3_semiBold.fontFamily};
          line-height: ${Font.label.label3_semiBold.lineHeight};
        `;
      case 'XS':
        return `
          font-size: ${Font.label.label4_semiBold.fontSize};
          font-weight: ${Font.label.label4_semiBold.fontWeight};
          font-family: ${Font.label.label4_semiBold.fontFamily};
          line-height: ${Font.label.label4_semiBold.lineHeight};
        `;
      default:
        return '';
    }
  }};

  &:hover {
    background-color: ${props => props.$isOpen ? props.theme['action-secondary'] : props.theme['bg-primary']};
    border-color: ${props => props.$isOpen ? props.theme['action-primary'] : props.theme['border-medium']};
  }
`;

export const SelectText = styled.span`
  color: ${({ theme }) => theme['text-black']};
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface SelectIconProps {
  $isOpen: boolean;
}

export const SelectIcon = styled.div<SelectIconProps>`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;

  svg {
    width: 100%;
    height: 100%;
    color: ${props => props.$isOpen ? props.theme['action-primary'] : props.theme['text-muted']};
    transition: color 0.2s ease;
  }
`;

export const SelectList = styled.div`
  position: absolute;
  top: 100%;
  left: 30%;
  background-color: ${({ theme }) => theme['static-white']};
  border: 1px solid ${({ theme }) => theme['border-light']};
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 2px;
  max-height: 200px;
  overflow-y: auto;
  width: max-content;
`;