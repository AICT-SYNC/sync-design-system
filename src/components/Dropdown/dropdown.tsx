import React, { useState } from 'react';
import { DropdownContainer, DropdownButton, DropdownText, DropdownIcon, DropdownList, DropdownItem } from './style';
import { ChevronDown } from 'lucide-react';
import { DropdownSize, DropdownButtonSize } from '../../foundation/Dropdown';

interface DropdownProps {
  options: string[];
  defaultSelected?: number;
  placeholder?: string;
  onChange?: (selectedValue: string, selectedIndex: number) => void;
  size?: DropdownSize;
  buttonSize?: DropdownButtonSize;
}

export const Dropdown: React.FC<DropdownProps> = ({ 
  options,
  defaultSelected = 0,
  placeholder = "선택하세요",
  onChange,
  size = DropdownSize.L,
  buttonSize = DropdownButtonSize.L
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(defaultSelected);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(false);
    onChange?.(options[index], index);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleToggle} $isOpen={isOpen} $buttonSize={buttonSize}>
        <DropdownText>
          {selectedIndex >= 0 ? options[selectedIndex] : placeholder}
        </DropdownText>
        <DropdownIcon $isOpen={isOpen}>
          <ChevronDown />
        </DropdownIcon>
      </DropdownButton>
      
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleSelect(index)}
              $isSelected={index === selectedIndex}
              $size={size}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};
