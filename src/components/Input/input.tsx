import React from 'react';
import * as S from './style';

interface InputProps {
  Size: 'S' | 'M' | 'L';
  Enabled: boolean;
  Focus: boolean;
  PlaceHolder: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
}

const Input: React.FC<InputProps> = ({
  Size,
  Enabled,
  Focus,
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
        focus={Focus}
        disabled={!Enabled}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;