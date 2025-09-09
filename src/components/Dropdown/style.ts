import styled from 'styled-components';
import { Font } from '@tokens/Font';
import { DropdownButtonSize, DropdownSize } from '@foundation/Dropdown';
import { Button } from '../Button';

export const DropdownContainer = styled.div`
  position: relative;
  /* display: inline-block; */
  display:flex;
  justify-content:space-around;
`;

interface DropdownButtonProps {
  $isOpen: boolean;
  $buttonSize: DropdownButtonSize;
}

export const DropdownButton = styled.button<DropdownButtonProps>`
  /* 높이 및 너비 조건 수정 */
  width: ${({ $buttonSize }) => {
    switch ($buttonSize) {
      case 'L': return '76px';
      case 'M': return '65px';
      case 'S': return '63px';
      case 'XS': return '61px';
      default: return '76px';
    }
  }};
  height: ${({ $buttonSize }) => {
    switch ($buttonSize) {
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

  /* DropdownButton에 폰트 스타일 추가 */
  ${({ $buttonSize }) => {
    switch ($buttonSize) {
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

export const DropdownText = styled.span<DropdownButtonProps>`
  ${({ $buttonSize }) => {
    switch ($buttonSize) {
      case 'L':
        return `
          font-size: ${Font.label.label1_semiBold.fontSize};
          font-weight: ${Font.label.label1_semiBold.fontWeight};
          font-family: ${Font.label.label1_semiBold.fontFamily};
          line-height: ${Font.label.label1_semiBold.lineHeight};
          min-width: 2ch; // 2글자 너비 보장
        `;
      case 'M':
        return `
          font-size: ${Font.label.label2_semiBold.fontSize};
          font-weight: ${Font.label.label2_semiBold.fontWeight};
          font-family: ${Font.label.label2_semiBold.fontFamily};
          line-height: ${Font.label.label2_semiBold.lineHeight};
          min-width: 2ch; // 2글자 너비 보장
        `;
      case 'S':
        return `
          font-size: ${Font.label.label3_semiBold.fontSize};
          font-weight: ${Font.label.label3_semiBold.fontWeight};
          font-family: ${Font.label.label3_semiBold.fontFamily};
          line-height: ${Font.label.label3_semiBold.lineHeight};
          min-width: 2ch; // 2글자 너비 보장
        `;
      case 'XS':
        return `
          font-size: ${Font.label.label4_semiBold.fontSize};
          font-weight: ${Font.label.label4_semiBold.fontWeight};
          font-family: ${Font.label.label4_semiBold.fontFamily};
          line-height: ${Font.label.label4_semiBold.lineHeight};
          min-width: 2ch; // 2글자 너비 보장
        `;
      default:
        return '';
    }
  }};

  color: ${({ theme }) => theme['text-black']};
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

export const DropdownList = styled.div`
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

interface DropdownItemProps {
  $isSelected: boolean;
  $size: DropdownSize;
}

export const DropdownItem = styled.div<DropdownItemProps>`
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
          min-width: 2ch; // 2글자 너비 보장
        `;
      case 'M':
        return `
          font-size: ${Font.label.label2_semiBold.fontSize};
          font-weight: ${Font.label.label2_semiBold.fontWeight};
          font-family: ${Font.label.label2_semiBold.fontFamily};
          line-height: ${Font.label.label2_semiBold.lineHeight};
          min-width: 2ch; // 2글자 너비 보장
        `;
      case 'S':
        return `
          font-size: ${Font.label.label3_semiBold.fontSize};
          font-weight: ${Font.label.label3_semiBold.fontWeight};
          font-family: ${Font.label.label3_semiBold.fontFamily};
          line-height: ${Font.label.label3_semiBold.lineHeight};
          min-width: 2ch; // 2글자 너비 보장
        `;
      case 'XS':
        return `
          font-size: ${Font.label.label4_semiBold.fontSize};
          font-weight: ${Font.label.label4_semiBold.fontWeight};
          font-family: ${Font.label.label4_semiBold.fontFamily};
          line-height: ${Font.label.label4_semiBold.lineHeight};
          min-width: 2ch; // 2글자 너비 보장
        `;
      default:
        return '';
    }
  }};
`;