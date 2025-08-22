import React from 'react';
import * as S from './style';

interface InputProps {
  Size: 'S' | 'M' | 'L';
  Enabled: boolean;
  PlaceHolder: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
}

const Input: React.FC<InputProps> = ({
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

export default Input;