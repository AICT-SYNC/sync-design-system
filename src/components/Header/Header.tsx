import React from 'react';
import * as S from './style';
import { SyncIcon, SyncIcons } from '../../assets/icons/SyncIcons';
import { HeaderProps } from './types';
import { lightColors } from '../../tokens/semantic';
import { primitiveColors } from '../../tokens/Primitive';

const Header: React.FC<HeaderProps> = ({
  sideBarClose,
  onSidebarToggle,
  canGoBack,
  canGoForward,
  onNavigateBack,
  onNavigateForward,
  tabs,
  onTabClick,
  onTabClose,
  truncateText,
  isOverflowing,
  pageBoxWrapRef,
}) => {
  const navigationItems = [
    { handler: onNavigateBack, icon: SyncIcons.ChevronLeft, enabled: canGoBack },
    { handler: onNavigateForward, icon: SyncIcons.ChevronRight, enabled: canGoForward }
  ];

  const PlusIcon = () => (
    <S.PlusIconWrap onClick={() => alert('탭 추가 버튼이 클릭되었습니다')}>
      <SyncIcon name={SyncIcons.Plus} color={lightColors['text-muted']} size={20} />
    </S.PlusIconWrap>
  );

  return (
    <S.HeaderContainer>
      <S.OpenIconBox onClick={onSidebarToggle}>
        <SyncIcon
          name={sideBarClose ? SyncIcons.PanelLeftClose : SyncIcons.PanelRightClose}
          color={lightColors['text-secondary']}
          size={20}
        />
      </S.OpenIconBox>

      <S.BackButtonBox>
        {navigationItems.map(({ handler, icon, enabled }, index) => (
          <S.NavigationButton
            key={index}
            enabled={enabled}
            onClick={() => enabled && handler?.()}
          >
            <SyncIcon name={icon} size={30} color={primitiveColors.neutral[400]} strokeWidth={1} />
          </S.NavigationButton>
        ))}
      </S.BackButtonBox>

      <S.PageBoxWrap ref={pageBoxWrapRef}>
        {tabs.map((tab, index) => (
          <S.TabBox 
            key={tab.id}
            isActive={tab.isActive}
            isFirst={index === 0}
            onClick={() => onTabClick(tab.id)}
          >
            <S.ContentBox>{truncateText(tab.title, 12)}</S.ContentBox>
            <S.CloseIcon onClick={(e) => {
              e.stopPropagation();
              onTabClose(tab.id);
            }}>
              <SyncIcon name={SyncIcons.X} size={15} />
            </S.CloseIcon>
          </S.TabBox>
        ))}
                        
        {!isOverflowing && <PlusIcon />}
      </S.PageBoxWrap>

      {isOverflowing && <PlusIcon />}
    </S.HeaderContainer>
  );
};

export default Header;