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
  image?: string; // 프로필 이미지 URL (없으면 Avatar 표시)
  width: string;
  border?: string;
}

export const List: React.FC<ListProps> = ({ 
  size, 
  select, 
  name, 
  email, 
  image,
  width, 
  border = "1px solid #e0e0e0",
}) => {
  return (
    <S.ListContainer 
      size={size} 
      $select={select} 
      $width={width} 
      $border={border}
    >
      {select && <Checkbox size={ListSizeMap[size].checkboxSize} />}

      {/*  이미지가 있으면 커스텀 프로필 이미지, 없으면 Avatar */}
      {image ? (
        <S.ProfileImage
          src={image}
          alt={`${name}의 프로필 이미지`}
        />
      ) : (
        <Avatar size={ListSizeMap[size].avatarSize} />
      )}

      <S.ContentBox $size={size}>
        <S.ContentUserName $size={size}>{name}</S.ContentUserName>
        <S.ContentEmail $size={size}>{email}</S.ContentEmail>
      </S.ContentBox>
    </S.ListContainer>
  );
};
