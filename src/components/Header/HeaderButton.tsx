import React, { useState } from 'react';
import * as S from './style';
import { HeaderProps } from './types';

const HeaderButton: React.FC<HeaderProps> = ({
  id,
  title,
  isActive,
  onTabClick,
  onTabClose,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength
      ? text.slice(0, maxLength) + '...'
      : text;
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 탭 클릭 이벤트 방지
    onTabClose?.(id);
  };

  // X 아이콘 표시 조건: isActive가 true면 항상 표시, false면 호버시에만 표시
  const showCloseIcon = isActive || (!isActive && isHovered);

  return (
    <S.TabButton 
      $isActive={isActive}
      $isHovered={isHovered}
      onClick={() => onTabClick(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <S.TabButtonText>
        {truncateText(title, 15)}
      </S.TabButtonText>
      
      {showCloseIcon && (
        <S.CloseIconButton onClick={handleCloseClick}>
          ✕
        </S.CloseIconButton>
      )}
    </S.TabButton>
  );
};

export default HeaderButton;
