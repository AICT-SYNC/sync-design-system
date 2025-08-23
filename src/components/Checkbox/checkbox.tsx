import React, { useState } from 'react';
import { CheckboxContainer, CheckboxInput, CheckboxIcon } from './style';
import { Check } from 'lucide-react';

interface CheckboxProps {
  size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  size = 'xlarge',
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

