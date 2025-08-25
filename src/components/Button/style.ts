import styled from 'styled-components';
import { Font } from '../../tokens/Font';

interface ButtonContainerProps {
  $size: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  $variant: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning';
}

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'xlarge':
      return { width: '106px', height: '51px' };
    case 'large':
      return { width: '98px', height: '47px' };
    case 'medium':
      return { width: '90px', height: '43px' };
    case 'small':
      return { width: '76px', height: '37px' };
    case 'xsmall':
      return { width: '68px', height: '29px' };
    default:
      return { width: '98px', height: '47px' };
  }
};

const getFontStyles = (size: string) => {
  if (size === 'xlarge') {
    return Font.label.label1_semiBold;
  }
  if (size === 'small' || size === 'xsmall') {
    return Font.label.label2_semiBold;
  }
  return Font.label.label1_semiBold;
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${props => getSizeStyles(props.$size).width};
  height: ${props => getSizeStyles(props.$size).height};
  border-radius: 4px;
  font-size: ${props => getFontStyles(props.$size).fontSize};
  font-weight: ${props => getFontStyles(props.$size).fontWeight};
  font-family: ${props => getFontStyles(props.$size).fontFamily};
  line-height: ${props => getFontStyles(props.$size).lineHeight};
  cursor: pointer;
  transition: background-color 0.2s ease;

  ${props => props.$variant === 'primary' && `
    background-color: ${({ theme }) => theme["action-primary"]};
    color: ${({ theme }) => theme["background-primary"]};
    border: none;
    
    &:hover {
      background-color: rgba(66, 48, 163, 0.5);
    }
  `}

  ${props => props.$variant === 'secondary' && `
    background-color: transparent;
    color: ${({ theme }) => theme["action-primary"]};
    border: none;
    
    &:hover {
      background-color: rgba(199, 205, 254, 0.5);
    }
  `}

  ${props => props.$variant === 'tertiary' && `
    background-color: ${({ theme }) => theme["static-white"]};
    color: ${({ theme }) => theme["text-black"]};
    border: 1px solid ${({ theme }) => theme["border-light"]};
    
    &:hover {
      background-color: rgba(216, 219, 223, 0.2);
    }
  `}

  ${props => props.$variant === 'danger' && `
    background-color: ${({ theme }) => theme["action-negative"]};
    color: ${({ theme }) => theme["background-primary"]};
    border: none;
    
    &:hover {
      background-color: rgba(239, 68, 68, 0.5);
    }
  `}

  ${props => props.$variant === 'warning' && `
    background-color: ${({ theme }) => theme["action-important"]};
    color: ${({ theme }) => theme["background-primary"]};
    border: none;
    
    &:hover {
      background-color: rgba(245, 158, 11, 0.5);
    }
  `}

  &:active {
    background-color: #32237a;
  }
`;