import React from 'react';
import * as S from './style';
import { SyncIcon, SyncIcons } from '../../assets/icons/SyncIcons';
import { HeaderProps } from './types';


const Header: React.FC<HeaderProps> = ({
  id,
  title,
  isActive,
  isHover,
  onTabClick,
  onTabClose,
}) => {

  const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength
      ? text.slice(0, maxLength) + '...'
      : text;
  };

  return (
    <S.HeaderContainer>
      <S.TabBox
        isActive={isActive}
        isFirst={true}
        onClick={() => onTabClick(id)}
      >
        <S.ContentBox>{truncateText(title, 12)}</S.ContentBox>

        {(isHover || isActive) && (
          <S.CloseIcon onClick={(e) => {
            e.stopPropagation();
            onTabClose(id);
          }}>
            <SyncIcon name={SyncIcons.X} size={15} />
          </S.CloseIcon>
        )}
      </S.TabBox>
    </S.HeaderContainer>
  );
};

export default Header;