import React, { useState } from 'react';
import { ToggleContainer, ToggleOption } from './style';

interface ToggleButtonProps {
  options: string[];
  defaultSelected?: number;
  onChange?: (selectedIndex: number) => void;
  size?: 'large' | 'small';
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ 
  options, 
  defaultSelected = 0, 
  onChange,
  size = 'large'
}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelected);

  const handleToggle = (index: number) => {
    setSelectedIndex(index);
    onChange?.(index);
  };

  return (
    <ToggleContainer $size={size}>
      {options.map((option, index) => (
        <ToggleOption
          key={index}
          $isSelected={selectedIndex === index}
          $size={size}
          onClick={() => handleToggle(index)}
        >
          {option}
        </ToggleOption>
      ))}
    </ToggleContainer>
  );
};

export default ToggleButton;