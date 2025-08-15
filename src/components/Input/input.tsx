import React from 'react';
import * as S from './style';

interface InputProps {
  Size: 'S' | 'M' | 'L';
  Enabled: boolean;
  Focus: boolean;
  PlaceHolder: string;
}

const Input: React.FC<InputProps> = ({ 
  Size, 
  Enabled, 
  Focus, 
  PlaceHolder 
}) => {
  return (
    <div>
      <S.InputContainer
        type="text"
        placeholder={PlaceHolder}
        size={Size}
        enabled={Enabled}
        focus={Focus}
        disabled={!Enabled}
      />
    </div>
  );
};

export default Input;