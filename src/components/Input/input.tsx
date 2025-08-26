import React, { useState, useEffect } from 'react';
import * as S from './style';
import { InputSize } from '../../foundation/Input';

interface InputProps {
  Size: InputSize;
  Enabled: boolean;
  PlaceHolder: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

export const Input: React.FC<InputProps> = ({
  Size,
  Enabled,
  PlaceHolder,
  onChange,
  value
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange?.(event.target.value, event);
  };

  return (
    <div>
      <S.InputContainer
        type="text"
        placeholder={PlaceHolder}
        $size={Size}
        $enabled={Enabled}
        disabled={!Enabled}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};
