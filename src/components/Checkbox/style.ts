import styled from 'styled-components';
import { CheckboxSize } from '@foundation/Checkbox'

interface CheckboxContainerProps {
  $size: CheckboxSize;
  $checked: boolean;
}

const getSizeStyles = (size: string) => {
  switch (size) {
    case CheckboxSize.XL:
      return { width: '56px', height: '56px', iconSize: '40px' };
    case CheckboxSize.L:
      return { width: '48px', height: '48px', iconSize: '34px' };
    case CheckboxSize.M:
      return { width: '40px', height: '40px', iconSize: '28px' };
    case CheckboxSize.S:
      return { width: '32px', height: '32px', iconSize: '22px' };
    case CheckboxSize.XS:
      return { width: '24px', height: '24px', iconSize: '16px' };
    case CheckboxSize.XXS:
      return { width: '16px', height: '16px', iconSize: '14px' };
    default:
      return { width: '56px', height: '56px', iconSize: '40px' };
  }
};

export const CheckboxContainer = styled.div<CheckboxContainerProps>`
  width: ${props => getSizeStyles(props.$size).width};
  height: ${props => getSizeStyles(props.$size).height};
  background-color: ${props => 
    props.$checked ? props.theme['action-primary'] : props.theme['static-white']
  };
  border: 2px solid ${props => 
    props.$checked ? props.theme['action-primary'] : props.theme['border-light']
  };
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    ${props => !props.$checked && `
      border-color: ${props.theme['border-medium']};
      background-color: ${props.theme['bg-primary']};
    `}
    ${props => props.$checked && `
      background-color: ${props.theme['action-primary']};
      opacity: 0.9;
    `}
  }

  &:active {
    transform: scale(0.95);
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
  $size: CheckboxSize;
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
    color: ${({ theme }) => theme['static-white']};
  }
`;