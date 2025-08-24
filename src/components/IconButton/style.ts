import styled from 'styled-components';
import { SyncLightTheme, SyncDarkTheme } from '../../style/SyncTheme/SyncTheme';

interface IconButtonContainerProps {
  $size: 'large' | 'medium' | 'small';
}

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'large':
      return { width: '48px', height: '48px', iconSize: '24px' };
    case 'medium':
      return { width: '40px', height: '40px', iconSize: '20px' };
    case 'small':
      return { width: '32px', height: '32px', iconSize: '16px' };
    default:
      return { width: '48px', height: '48px', iconSize: '24px' };
  }
};

export const IconButtonContainer = styled.button<IconButtonContainerProps>`
  width: ${props => getSizeStyles(props.$size).width};
  height: ${props => getSizeStyles(props.$size).height};
  background-color: ${SyncLightTheme['static-white']};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(216, 219, 223, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;

interface IconWrapperProps {
  $size: 'large' | 'medium' | 'small';
}

export const IconWrapper = styled.div<IconWrapperProps>`
  width: ${props => getSizeStyles(props.$size).iconSize};
  height: ${props => getSizeStyles(props.$size).iconSize};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;