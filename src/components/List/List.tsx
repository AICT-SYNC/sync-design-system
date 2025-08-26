import React from 'react';
import * as S from './style';
import { ListSize } from '../../foundation/List';
import { Avatar } from '../../assets/icons/avatar';
import { Checkbox } from '../Checkbox'

interface ListProps {
  size: ListSize;
  select: boolean;
  name: string;
  email: string;
  image?: string;
}

const List: React.FC<ListProps> = ({ size, select, name, email, image }) => {
  return (
    <S.ListContainer size={size} select={select}>
      {select && <Checkbox size={
        size === ListSize.L ? 'M' :
        size === ListSize.M ? 'S' :
        size === ListSize.S ? 'XS' : 'XS'
      } />}
      <Avatar 
        size={
          size === ListSize.S ? 'small' :
          size === ListSize.M ? 'large' :
          size === ListSize.L ? 'extraLarge' : 'large'
        }
      />
       
      <S.ContentBox $size={size}>
        <S.ContentName $size={size}>{name}</S.ContentName>
        <S.ContentEmail $size={size}>{email}</S.ContentEmail>
      </S.ContentBox>
    </S.ListContainer>
  );
};

export default List;