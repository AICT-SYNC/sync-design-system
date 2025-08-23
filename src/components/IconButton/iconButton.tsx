import React from 'react';
import { IconButtonContainer, IconWrapper } from './style';
import { Menu } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { IconButtonSize } from '../../foundation/IconButton';

interface IconButtonProps {
  size?: IconButtonSize;
  onClick?: () => void;
  icon?: React.ComponentType<LucideProps>;
}

export const IconButton: React.FC<IconButtonProps> = ({ 
  size = IconButtonSize.Large, 
  onClick,
  icon: IconComponent = Menu
}) => {
  return (
    <IconButtonContainer 
      $size={size}
      onClick={onClick}
    >
      <IconWrapper $size={size}>
        <IconComponent />
      </IconWrapper>
    </IconButtonContainer>
  );
};

