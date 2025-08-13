import React from 'react';
import { ButtonContainer } from './style';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, size = 'large', variant = 'primary' }) => {
  return (
    <ButtonContainer onClick={onClick} $size={size} $variant={variant}>
      {children}
    </ButtonContainer>
  );
};

export default Button;