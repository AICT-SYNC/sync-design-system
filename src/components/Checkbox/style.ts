import styled from 'styled-components';
import { lightColors } from '../../tokens/semantic';

interface CheckboxContainerProps {
  $size: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  $checked: boolean;
  $disabled: boolean;
}

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'xlarge':
      return { width: '56px', height: '56px', iconSize: '40px' };
    case 'large':
      return { width: '48px', height: '48px', iconSize: '34px' };
    case 'medium':
      return { width: '40px', height: '40px', iconSize: '28px' };
    case 'small':
      return { width: '32px', height: '32px', iconSize: '22px' };
    case 'xsmall':
      return { width: '24px', height: '24px', iconSize: '16px' };
    default:
      return { width: '56px', height: '56px', iconSize: '40px' };
  }
};

export const CheckboxContainer = styled.div<CheckboxContainerProps>`
  width: ${props => getSizeStyles(props.$size).width};
  height: ${props => getSizeStyles(props.$size).height};
  background-color: ${props => {
    if (props.$disabled) {
      return props.$checked ? lightColors['border-medium'] : lightColors['background-secondary'];
    }
    return props.$checked ? lightColors['action-primary'] : lightColors['static-white'];
  }};
  border: 2px solid ${props => {
    if (props.$disabled) {
      return lightColors['border-medium'];
    }
    return props.$checked ? lightColors['action-primary'] : lightColors['border-light'];
  }};
  border-radius: 4px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    ${props => !props.$disabled && !props.$checked && `
      border-color: ${lightColors['border-medium']};
      background-color: ${lightColors['background-primary']};
    `}
    ${props => !props.$disabled && props.$checked && `
      background-color: rgba(66, 48, 163, 0.9);
    `}
  }

  &:active {
    ${props => !props.$disabled && `
      transform: scale(0.95);
    `}
  }
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: inherit;
  width: 100%;
  height: 100%;
  margin: 0;
`;

interface CheckboxIconProps {
  $size: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
}

export const CheckboxIcon = styled.div<CheckboxIconProps>`
  width: ${props => getSizeStyles(props.$size).iconSize};
  height: ${props => getSizeStyles(props.$size).iconSize};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  svg {
    width: 100%;
    height: 100%;
    color: white;
  }
`;