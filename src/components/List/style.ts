import styled from "styled-components";
import { ListSize, ListSizeMap } from "@foundation/List";
import { spacing } from "@tokens";

interface ListContainerProps {
  size: ListSize;
  $select: boolean;
}

export const ListContainer = styled.div<ListContainerProps>`
  display: flex;
  flex-direction: row;
  width: 967px;
  height: ${(props) => ListSizeMap[props.size].ListHeight};
  border: 1px solid ${({ theme }) => theme["border-light"]};
  padding-left: ${({ size, $select }) => {
    if ($select) return "30px";
    return ListSizeMap[size].HoriontalPadding;
  }};
  display: flex;
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
