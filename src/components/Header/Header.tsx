import React, { useState, useRef, useEffect } from 'react'
import * as S from './style'
import { SyncIcon, SyncIcons } from '../../assets/icons/SyncIcons'
import { Tab, HeaderProps } from './types'

// 탭 배열을 로컬 스토리지에 저장
const saveTabsToStorage = (tabs: Tab[]): void => {
  try {
    localStorage.setItem('TabInfo', JSON.stringify(tabs));
  } catch (error) {
    console.error('탭 저장 실패:', error);
  }
};

// 로컬 스토리지에서 탭 배열 불러오기
const loadTabsFromStorage = (): Tab[] => {
  try {
    const stored = localStorage.getItem('TabInfo');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('탭 불러오기 실패:', error);
    return [];
  }
};

const Header: React.FC<HeaderProps> = ({
  onNavigateBack, onNavigateForward, canGoBack = false, canGoForward = false,
  initialTabs, onTabChange, onTabClose, onTabAdd, onSidebarToggle,
  newProjectId, newProjectTitle,
}) => {
  const [sideBarClose, setSideBarClose] = useState(true);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const pageBoxWrapRef = useRef<HTMLDivElement>(null);
  
  // 로컬 스토리지에서 탭 목록 초기화
  const [tabs, setTabs] = useState<Tab[]>(() => {
    const savedTabs = loadTabsFromStorage();
    return savedTabs.length > 0 ? savedTabs : (initialTabs || []);
  });

  // 탭 변경 시마다 로컬 스토리지에 자동 저장
  useEffect(() => saveTabsToStorage(tabs), [tabs]);

  // 새 프로젝트 참여 시 자동으로 탭 추가하는 감지 로직
  useEffect(() => {
    const checkNewProject = () => {
      const newProject = localStorage.getItem('newProject');
      if (newProject) {
        try {
          const { projectId, projectName } = JSON.parse(newProject);
          const existingTab = tabs.find(tab => tab.projectId === projectId);
          
          if (!existingTab) {
            const newTab: Tab = {
              id: Date.now().toString(),
              title: projectName,
              isActive: true,
              projectId
            };
            
            setTabs(prev => [...prev.map(tab => ({ ...tab, isActive: false })), newTab]);
            onTabAdd?.(newTab);
            onTabChange?.(newTab.id);
          }
          localStorage.removeItem('newProject');
        } catch (error) {
          console.error('새 프로젝트 정보 파싱 실패:', error);
        }
      }
    };

    const interval = setInterval(checkNewProject, 1000);
    return () => clearInterval(interval);
  }, [tabs, onTabAdd, onTabChange]);

  // 탭이 화면을 넘어갈 때 스크롤 여부 감지
  useEffect(() => {
    const checkOverflow = () => {
      if (pageBoxWrapRef.current) {
        setIsOverflowing(pageBoxWrapRef.current.scrollWidth > pageBoxWrapRef.current.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [tabs]);

  // 텍스트가 지정 길이를 넘으면 ... 처리
  const truncateText = (text: string, maxLength: number): string => 
    text.length <= maxLength ? text : text.substring(0, maxLength) + '...';

  // 사이드바 열기/닫기 토글
  const handleSidebarToggle = () => {
    const newState = !sideBarClose;
    setSideBarClose(newState);
    onSidebarToggle?.(newState);
  };

  // 탭 클릭 시 해당 탭을 활성화
  const handleTabClick = (tabId: string) => {
    setTabs(prev => prev.map(tab => ({ ...tab, isActive: tab.id === tabId })));
    onTabChange?.(tabId);
  };

  // 탭 닫기 버튼 클릭 시 탭 제거 및 다른 탭 활성화
  const handleTabClose = (tabId: string) => {
    setTabs(prev => {
      const newTabs = prev.filter(tab => tab.id !== tabId);
      const closedTab = prev.find(tab => tab.id === tabId);
      
      if (closedTab?.isActive && newTabs.length > 0) {
        newTabs[0].isActive = true;
        onTabChange?.(newTabs[0].id);
      }
      return newTabs;
    });
    onTabClose?.(tabId);
  };

  // + 버튼 클릭 시 프로젝트 페이지로 이동 (탭 생성 X)
  const handleAddTab = () => {
    alert('프로젝트로 가짐');
  };

  // + 아이콘 컴포넌트 (중복 제거용)
  const PlusIcon = () => (
    <S.PlusIconWrap onClick={handleAddTab} style={{ cursor: 'pointer' }}>
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
        {[
          { handler: onNavigateBack, icon: SyncIcons.ChevronLeft, enabled: canGoBack },
          { handler: onNavigateForward, icon: SyncIcons.ChevronRight, enabled: canGoForward }
        ].map(({ handler, icon, enabled }, index) => (
          <div 
            key={index}
            onClick={() => enabled && handler?.()}
            style={{ 
              cursor: enabled ? 'pointer' : 'not-allowed',
              opacity: enabled ? 1 : 0.5
            }}
          >
            <SyncIcon name={icon} size={30} color='#8E95A2' strokeWidth={1} />
          </div>
        ))}
      </S.BackButtonBox>

      <S.PageBoxWrap ref={pageBoxWrapRef}>
        {tabs.map((tab) => (
          <S.TabBox 
            key={tab.id}
            isActive={tab.isActive}
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

/**
 * localStorage.setItem('newProject', JSON.stringify({
    projectId: 'your-project-id',
    projectName: 'your-project-name'
}));
프로젝트 참여 할 때 이거 추가해야함
 * 
 */