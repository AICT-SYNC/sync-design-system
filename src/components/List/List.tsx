import React from "react";
import * as S from "./style";
import { ListSize, ListSizeMap } from "@foundation/List";
import { Avatar } from "@assets";
import { Checkbox } from "../Checkbox";

interface ListProps {
  size: ListSize;
  select: boolean;
  name: string;
  email: string;
  image?: string;
}

export const List: React.FC<ListProps> = ({ size, select, name, email }) => {
  return (
    <S.ListContainer size={size} $select={select}>
      {select && <Checkbox size={ListSizeMap[size].checkboxSize} />}
      <Avatar size={ListSizeMap[size].avatarSize} />
      <S.ContentBox $size={size}>
        <S.ContentUserName $size={size}>{name}</S.ContentUserName>
        <S.ContentEmail $size={size}>{email}</S.ContentEmail>
      </S.ContentBox>
    </S.ListContainer>
  );
};
