import React, { useState, useEffect } from 'react';
import { CheckboxContainer, CheckboxInput, CheckboxIcon } from './style';
import { Check } from 'lucide-react';
import { CheckboxSize } from '../../foundation/Checkbox';

interface CheckboxProps {
  size?: CheckboxSize;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  size = CheckboxSize.XL,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <CheckboxContainer 
      $size={size} 
      $checked={isChecked}
      onClick={handleChange}
    >
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={() => {}}
      />
      {isChecked && (
        <CheckboxIcon $size={size}>
          <Check />
        </CheckboxIcon>
      )}
    </CheckboxContainer>
  );
};

