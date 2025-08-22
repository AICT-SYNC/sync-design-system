import styled from 'styled-components';
import { lightColors } from '../../tokens/LightColors';
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

const getVariantStyles = (variant: string) => {
  if (variant === 'secondary') {
    return {
      backgroundColor: lightColors['action-secondary'],
      color: lightColors['action-primary'],
      hoverBackgroundColor: 'rgba(199, 205, 254, 0.5)',
      border: 'none'
    };
  }
  if (variant === 'tertiary') {
    return {
      backgroundColor: lightColors['static-white'],
      color: lightColors['text-black'],
      hoverBackgroundColor: 'rgba(216, 219, 223, 0.2)',
      border: `1px solid ${lightColors['border-light']}`
    };
  }
  if (variant === 'danger') {
    return {
      backgroundColor: lightColors['action-negative'],
      color: lightColors['background-primary'],
      hoverBackgroundColor: 'rgba(239, 68, 68, 0.5)',
      border: 'none'
    };
  }
  if (variant === 'warning') {
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
  width: ${props => getSizeStyles(props.$size).width};
  height: ${props => getSizeStyles(props.$size).height};
  background-color: ${props => getVariantStyles(props.$variant).backgroundColor};
  border: ${props => getVariantStyles(props.$variant).border};
  border-radius: 4px;
  color: ${props => getVariantStyles(props.$variant).color};
  font-size: ${props => getFontStyles(props.$size).fontSize};
  font-weight: ${props => getFontStyles(props.$size).fontWeight};
  font-family: ${props => getFontStyles(props.$size).fontFamily};
  line-height: ${props => getFontStyles(props.$size).lineHeight};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => getVariantStyles(props.$variant).hoverBackgroundColor};
  }

  &:active {
    background-color: #32237a;
  }
`;