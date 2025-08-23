import React from 'react';
import { IconButtonContainer, IconWrapper } from './style';
import { Menu } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface IconButtonProps {
  size?: 'large' | 'medium' | 'small';
  onClick?: () => void;
  icon?: React.ComponentType<LucideProps>;
}

export const IconButton: React.FC<IconButtonProps> = ({ 
  size = 'large', 
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

