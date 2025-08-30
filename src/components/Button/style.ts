import styled from 'styled-components';
import { lightColors } from '../../tokens/Color/LightColors';
import { Font } from '../../tokens/Font';

import { ButtonVariant, ButtonSize } from '../../enums/ButtonEnum';

interface ButtonContainerProps {
  $size: ButtonSize;
  $variant: ButtonVariant;
}

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.XL:
      return { width: '98px', height: '47px' };
    case ButtonSize.L:
      return { width: '90px', height: '47px' };
    case ButtonSize.M:
      return { width: '76px', height: '47px' };
    case ButtonSize.S:
      return { width: '68px', height: '47px' };
    case ButtonSize.XS:
      return { width: '54px', height: '47px' };
    case ButtonSize.LONG_L:
      return { width: '460px', height: '47px' };
    case ButtonSize.LONG_M:
      return { width: '380px', height: '47px' };
    case ButtonSize.LONG_S:
      return { width: '300px', height: '47px' };
    default:
      return { width: '98px', height: '47px' };
  }
};

const getFontStyles = (size: ButtonSize) => {
  switch (size) {
    case ButtonSize.XL:
    case ButtonSize.L:
    case ButtonSize.LONG_L:
    case ButtonSize.LONG_M:
    case ButtonSize.LONG_S:
      return Font.label.label1_semiBold;
    case ButtonSize.M:
    case ButtonSize.S:
      return Font.label.label2_semiBold;
    case ButtonSize.XS:
      return Font.label.label4_semiBold;
    default:
      return Font.label.label1_semiBold;
  }
};

const getVariantStyles = (variant: ButtonVariant) => {
  if (variant === ButtonVariant.SECONDARY) {
    return {
      backgroundColor: lightColors['action-secondary'],
      color: lightColors['action-primary'],
      hoverBackgroundColor: 'rgba(199, 205, 254, 0.5)',
      border: 'none'
    };
  }
  if (variant === ButtonVariant.ASSISTIVE) {
    return {
      backgroundColor: lightColors['static-white'],
      color: lightColors['text-black'],
      hoverBackgroundColor: 'rgba(216, 219, 223, 0.2)',
      border: `1px solid ${lightColors['border-light']}`
    };
  }
  if (variant === ButtonVariant.NEGATIVE) {
    return {
      backgroundColor: lightColors['action-negative'],
      color: lightColors['background-primary'],
      hoverBackgroundColor: 'rgba(239, 68, 68, 0.5)',
      border: 'none'
    };
  }
  if (variant === ButtonVariant.IMPORTANT) {
    return {
      backgroundColor: lightColors['action-important'],
      color: lightColors['background-primary'],
      hoverBackgroundColor: 'rgba(245, 158, 11, 0.5)',
      border: 'none'
    };
  }
  return {
    backgroundColor: lightColors['action-primary'],
    color: lightColors['background-primary'],
    hoverBackgroundColor: 'rgba(66, 48, 163, 0.5)',
    border: 'none'
  };
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
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