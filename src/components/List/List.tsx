// List.tsx
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
  width: string;
  border?: string; // 기본값을 컴포넌트에서 설정
}

export const List: React.FC<ListProps> = ({ 
  size, 
  select, 
  name, 
  email, 
  width, 
  /**
   * 1px solid "#color" 형식으로 작성
   */
  border = "1px solid #e0e0e0" 
}) => {
  return (
    <S.ListContainer 
      size={size} 
      $select={select} 
      $width={width} 
      $border={border}
    >
      {select && <Checkbox size={ListSizeMap[size].checkboxSize} />}
      <Avatar size={ListSizeMap[size].avatarSize} />
      <S.ContentBox $size={size}>
        <S.ContentUserName $size={size}>{name}</S.ContentUserName>
        <S.ContentEmail $size={size}>{email}</S.ContentEmail>
      </S.ContentBox>
    </S.ListContainer>
  );
};