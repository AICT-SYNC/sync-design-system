import React from 'react';
import * as S from './style';
import { InputSize } from '../../foundation/Input';

interface InputProps {
  Size: InputSize;
  Enabled: boolean;
  PlaceHolder: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
}

export const Input: React.FC<InputProps> = ({
  Size,
  Enabled,
  PlaceHolder,
  onChange,
  value
}) => {
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  };

  return (
    <div>
      <S.InputContainer
        type="text"
        placeholder={PlaceHolder}
        size={Size}
        enabled={Enabled}
        disabled={!Enabled}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
