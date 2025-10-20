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
  image?: string; // 프로필 사진 프롭스
  width: string;
  border?: string; // 기본값을 컴포넌트에서 설정
}

export const List: React.FC<ListProps> = ({ 
  size, 
  select, 
  name, 
  email, 
  image, // 프롭스로 받아오기
  width, 
  border = "1px solid #e0e0e0"
}) => {
  const getInitials = (name?: string) => {
    if (!name) return "?";
    const parts = name.split(" ");
    return parts.length > 1 ? parts[0][0] + parts[1][0] : parts[0][0];
  };

  return (
    <S.ListContainer 
      size={size} 
      $select={select} 
      $width={width} 
      $border={border}
    >
      {select && <Checkbox size={ListSizeMap[size].checkboxSize} />}
      
      {/* 아바타 또는 이미지 덮어씌우기 */}
      {image ? (
        <Avatar size={ListSizeMap[size].avatarSize} img={image} />
      ) : (
        <S.ListAvatarInitial $size={ListSizeMap[size].avatarSize}>
          {getInitials(name)}
        </S.ListAvatarInitial>
      )}

      <S.ContentBox $size={size}>
        <S.ContentUserName $size={size}>{name}</S.ContentUserName>
        <S.ContentEmail $size={size}>{email}</S.ContentEmail>
      </S.ContentBox>
    </S.ListContainer>
  );
};
