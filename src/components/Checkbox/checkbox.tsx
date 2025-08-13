import React, { useState } from 'react';
import { CheckboxContainer, CheckboxInput, CheckboxIcon } from './style';
import CheckBoldIcon from '../../assets/icons/checkBold.svg';

interface CheckboxProps {
  size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ 
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
          <img src={CheckBoldIcon} alt="checked" />
        </CheckboxIcon>
      )}
    </CheckboxContainer>
  );
};

export default Checkbox;