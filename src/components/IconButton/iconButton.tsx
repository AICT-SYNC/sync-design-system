import React from 'react';
import { IconButtonContainer, IconWrapper } from './style';
import MenuIcon from '../../assets/icons/Menu.svg';

interface IconButtonProps {
  size?: 'large' | 'medium' | 'small';
  onClick?: () => void;
  icon?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ 
  size = 'large', 
  onClick,
  icon = MenuIcon
}) => {
  return (
    <IconButtonContainer 
      $size={size}
      onClick={onClick}
    >
      <IconWrapper $size={size}>
        <img src={icon} alt="icon" />
      </IconWrapper>
    </IconButtonContainer>
  );
};

export default IconButton;