import React, { useState } from 'react';
import { CheckboxContainer, CheckboxInput, CheckboxIcon } from './style';
import { Check } from 'lucide-react';
import { CheckboxSize } from '../../foundation/Checkbox';

interface CheckboxProps {
  size?: CheckboxSize;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  size = CheckboxSize.XLarge,
  checked = false,
  onChange,
  disabled = false
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <CheckboxContainer 
      $size={size} 
      $checked={isChecked}
      $disabled={disabled}
      onClick={handleChange}
    >
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={() => {}}
        disabled={disabled}
      />
      {isChecked && (
        <CheckboxIcon $size={size}>
          <Check />
        </CheckboxIcon>
      )}
    </CheckboxContainer>
  );
};

