import styled from "styled-components";
import { ListSize, ListSizeMap } from "@foundation/List";
import { spacing } from "@tokens";

interface ListContainerProps {
  size: ListSize;
  $select: boolean;
  $width: string;
  $border: string;
}

export const ListContainer = styled.div<ListContainerProps>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.$width}; // 템플릿 리터럴로 수정
  height: ${(props) => ListSizeMap[props.size].ListHeight};
  border: ${(props) => props.$border};
  padding-left: ${({ size, $select }) => {
    if ($select) return "30px";
    return ListSizeMap[size].HoriontalPadding;
  }};
  align-items: center;
  gap: ${spacing["3xl"]};
  background-color: white;
`;

interface ContentBoxProps {
  $size: ListSize;
}

export const ContentBox = styled.div<ContentBoxProps>`
  display: flex;
  flex-direction: column;
  gap: ${spacing["xs"]};
`;

export const ContentUserName = styled.div<ContentBoxProps>`
  font: ${(props) => ListSizeMap[props.$size].ContentUserName};
`;

export const ContentEmail = styled.div<ContentBoxProps>`
  font: ${(props) => ListSizeMap[props.$size].ContentEmail};
  color: ${({ theme }) => theme["text-muted"]};
`;
/* ---------------------- List 아바타 초기값 디자인 ---------------------- */
export const ListAvatarInitial = styled.div<{ $size: number }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background-color:red;
`;
