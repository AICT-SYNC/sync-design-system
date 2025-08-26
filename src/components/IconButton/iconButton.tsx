import React from 'react';
import { SyncIcon, SyncIcons } from "../../assets/icons/SyncIcons";
import { IconButtonSize } from '../../foundation/IconButton';
import styled from 'styled-components';

interface IconButtonContainerProps {
  $size: IconButtonSize;
}

interface IconButtonProps {
  size?: 'large' | 'medium' | 'small';
  onClick?: () => void;
  icon: keyof typeof SyncIcons
}

const getSizeStyles = (size: string) => {
  switch (size) {
    case IconButtonSize.L:
      return { width: '48px', height: '48px', iconSize: 24 };
    case IconButtonSize.M:
      return { width: '40px', height: '40px', iconSize: 20 };
    case IconButtonSize.S:
      return { width: '32px', height: '32px', iconSize: 16 };
    default:
      return { width: '48px', height: '48px', iconSize: 24 };
  }
};

export const IconButtonContainer = styled.button<IconButtonContainerProps>`
  width: ${props => getSizeStyles(props.$size).width};
  height: ${props => getSizeStyles(props.$size).height};
  background-color: ${({ theme }) => theme["static-white"]};
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

export const IconButton: React.FC<IconButtonProps> = ({ 
  size = IconButtonSize.L,
  onClick,
  icon,
}) => {
  return (
    <IconButtonContainer $size={size} onClick={onClick}>
      <SyncIcon name={SyncIcons[icon]} size={getSizeStyles(size).iconSize}/>
    </IconButtonContainer>
  );
};

export default IconButton;