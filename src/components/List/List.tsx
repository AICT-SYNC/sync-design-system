import React from 'react';
import * as S from './style';
import { ListSize } from '../../foundation/List';
import { Avatar } from '../../assets/icons/avatar';
import { Checkbox } from '../Checkbox'
import { CheckboxSize, AvatarSizeEnum } from '../../foundation'

interface ListProps {
  size: ListSize;
  select: boolean;
  name: string;
  email: string;
  image?: string;
}

const List: React.FC<ListProps> = ({ size, select, name, email }) => {
  return (
    <S.ListContainer size={size} $select={select}>
      {select && <Checkbox size={(() => {
        switch (size) {
          case ListSize.L:
            return CheckboxSize.M;
          case ListSize.M:
            return CheckboxSize.S;
          case ListSize.S:
            return CheckboxSize.XS;
          default:
            return CheckboxSize.XS;
        }
      })()} />}
      <Avatar 
        size={(() => {
          switch (size) {
            case ListSize.S:
              return AvatarSizeEnum.S;
            case ListSize.M:
              return AvatarSizeEnum.L;
            case ListSize.L:
              return AvatarSizeEnum.XL;
            default:
              return AvatarSizeEnum.XL;
          }
        })()}
      />
       
      <S.ContentBox $size={size}>
        <S.ContentName $size={size}>{name}</S.ContentName>
        <S.ContentEmail $size={size}>{email}</S.ContentEmail>
      </S.ContentBox>
    </S.ListContainer>
  );
};

export default List;