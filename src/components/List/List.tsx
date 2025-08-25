import React from 'react';
import * as S from './style';
import { ListSize } from '../../foundation/List';
import { Avatar } from '../../assets/icons/avatar';

interface ListProps {
  size:ListSize
}

const List: React.FC<ListProps> = ({ size }) => {
  return (
    <S.ListContainer size={size}>
        <Avatar size='large'/>
    </S.ListContainer>
  );
};

export default List;