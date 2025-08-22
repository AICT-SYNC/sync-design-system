// index.tsx
import React from 'react';
import * as S from './style';
import { SyncIcon, SyncIcons } from '../../assets/icons/SyncIcons';
import { HeaderProps } from './types';
import { truncateText } from './utils';
import { useHeaderState, useTabManagement, useOverflowDetection } from './hooks';

const Header: React.FC<HeaderProps> = ({
  onNavigateBack,
  onNavigateForward,
  canGoBack = false,
  canGoForward = false,
  initialTabs,
  onTabChange,
  onTabClose,
  onTabAdd,
  onSidebarToggle,
  newProjectId,
  newProjectTitle,
}) => {
  const {
    sideBarClose,
    setSideBarClose,
    isOverflowing,
    setIsOverflowing,
    pageBoxWrapRef,
    tabs,
    setTabs
  } = useHeaderState(initialTabs);

  const { handleTabClick, handleTabClose } = useTabManagement(
    tabs,
    setTabs,
    onTabAdd,
    onTabChange,
    onTabClose
  );

  useOverflowDetection(pageBoxWrapRef, tabs, setIsOverflowing);

  const navigationItems = [
    { handler: onNavigateBack, icon: SyncIcons.ChevronLeft, enabled: canGoBack },
    { handler: onNavigateForward, icon: SyncIcons.ChevronRight, enabled: canGoForward }
  ];

  const handleSidebarToggle = () => {
    const newState = !sideBarClose;
    setSideBarClose(newState);
    onSidebarToggle?.(newState);
  };

  const handleAddTab = () => {
    alert('프로젝트로 가짐');
  };

  const PlusIcon = () => (
    <S.PlusIconWrap onClick={handleAddTab}>
      <SyncIcon name={SyncIcons.Plus} color='#8E95A2' size={20} />
    </S.PlusIconWrap>
  );

  return (
    <S.HeaderContainer>
      <S.OpenIconBox onClick={handleSidebarToggle}>
        <SyncIcon
          name={sideBarClose ? SyncIcons.PanelLeftClose : SyncIcons.PanelRightClose}
          color='#6B7280'
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
            <SyncIcon name={icon} size={30} color='#8E95A2' strokeWidth={1} />
          </S.NavigationButton>
        ))}
      </S.BackButtonBox>

      <S.PageBoxWrap ref={pageBoxWrapRef}>
        {tabs.map((tab, index) => (
          <S.TabBox 
            key={tab.id}
            isActive={tab.isActive}
            isFirst={index === 0}
            onClick={() => handleTabClick(tab.id)}
          >
            <S.ContentBox>{truncateText(tab.title, 12)}</S.ContentBox>
            <S.CloseIcon onClick={(e) => {
              e.stopPropagation();
              handleTabClose(tab.id);
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

/*
사용법:

<Header 
  canGoBack={true}
  canGoForward={false} 
  onNavigateBack={() => navigate(-1)}
  onNavigateForward={() => navigate(1)}
  initialTabs={[
    { id: '1', title: '프로젝트1', isActive: true, projectId: 'proj1' },
    { id: '2', title: '프로젝트2', isActive: false, projectId: 'proj2' }
  ]}
  onTabChange={(tabId) => setActiveTab(tabId)}
  onTabClose={(tabId) => handleTabClose(tabId)}
  onTabAdd={(newTab) => handleNewTab(newTab)}
  onSidebarToggle={(isOpen) => setSidebarOpen(isOpen)}
/>

프로젝트 참여 시 자동 탭 추가:
localStorage.setItem('newProject', JSON.stringify({
  projectId: 'project-123',
  projectName: '새로운 프로젝트'
}));
*/