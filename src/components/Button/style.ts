import styled from 'styled-components';
import { Font } from '@tokens';

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
    background-color: ${props.theme["action-primary"]};
    color: ${props.theme["bg-primary"]};
    border: none;
        
    &:hover {
      background-color: ${props.theme["action-primary-hover"]};
    }
  `}

  ${props => props.$variant === 'secondary' && `
    background-color: transparent;
    color: ${props.theme["action-primary"]};
    border: none;
        
    &:hover {
      background-color: ${props.theme["action-secondary-hover"]};
    }
  `}

  ${props => props.$variant === 'tertiary' && `
    background-color: ${props.theme["static-white"]};
    color: ${props.theme["text-black"]};
    border: 1px solid ${props.theme["border-light"]};
        
    &:hover {
      background-color: ${props.theme["bg-secondary"]};
    }
  `}

  ${props => props.$variant === 'danger' && `
    background-color: ${props.theme["action-negative"]};
    color: ${props.theme["bg-primary"]};
    border: none;
        
    &:hover {
      background-color: ${props.theme["action-negative-hover"]};
    }
  `}

  ${props => props.$variant === 'warning' && `
    background-color: ${props.theme["action-important"]};
    color: ${props.theme["bg-primary"]};
    border: none;
        
    &:hover {
      background-color: ${props.theme["action-important-hover"]};
    }
  `}

  &:active {
    background-color: ${props => props.theme["action-primary-active"]};
  }
`;