import React from 'react';
import * as S from './style';
import { SyncIcon, SyncIcons } from '../../assets/icons/SyncIcons';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({
  tabs,
  onTabClick,
  onTabClose,
  truncateText,
  pageBoxWrapRef,
}) => {
  const activeTab = tabs.find(tab => tab.isActive) || tabs[0];
  
  if (!activeTab) return null;

  return (
    <S.HeaderContainer>
      <S.PageBoxWrap ref={pageBoxWrapRef}>
        <S.TabBox 
          isActive={activeTab.isActive}
          isFirst={true}
          onClick={() => onTabClick(activeTab.id)}
        >
          <S.ContentBox>{truncateText(activeTab.title, 12)}</S.ContentBox>
          <S.CloseIcon onClick={(e) => {
            e.stopPropagation();
            onTabClose(activeTab.id);
          }}>
            <SyncIcon name={SyncIcons.X} size={15} />
          </S.CloseIcon>
        </S.TabBox>
      </S.PageBoxWrap>
    </S.HeaderContainer>
  );
};

export default Header;