import React, { useState } from "react";
import { useTheme } from "styled-components";
import * as S from "./style";
import { SyncIcon, SyncIcons } from "@/assets";

export interface HeaderProps {
  id: string;
  title: string;
  isActive: boolean;
  onTabClick: (id: string) => void;
  onTabClose?: (id: string) => void;
}

export const HeaderButton: React.FC<HeaderProps> = ({
  id,
  title,
  isActive,
  onTabClick,
  onTabClose,
}) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 탭 클릭 이벤트 방지
    onTabClose?.(id);
  };

  return (
    <S.TabButton
      $isActive={isActive}
      onClick={() => onTabClick(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <S.TabButtonText>{title}</S.TabButtonText>
      {isHovered && (
        <S.CloseIconButton $isActive={isActive} onClick={handleCloseClick}>
          <SyncIcon
            name={SyncIcons.X}
            size={15}
            color={theme["select-btn-false"]}
          />
        </S.CloseIconButton>
      )}
    </S.TabButton>
  );
};
