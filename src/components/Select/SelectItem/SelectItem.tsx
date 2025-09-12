import React from "react";
import * as S from "./style";
import { SelectItemSize } from "@foundation/Select";

interface SelectItemProps {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
  size?: SelectItemSize;
}

export const SelectItem: React.FC<SelectItemProps> = ({
  children,
  onClick,
  isSelected,
  size = SelectItemSize.L
}) => {
  return (
    <S.SelectItem
      onClick={onClick}
      $isSelected={isSelected}
      $size={size}
    >
      {children}
    </S.SelectItem>
  );
};