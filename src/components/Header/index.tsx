import React, { useState, useRef, useEffect } from 'react'
import * as S from './style'
import { SyncIcon, SyncIcons } from '../../assets/icons/SyncIcons'

interface Tab {
  id: string;
  title: string;
  isActive: boolean;
  projectId: string;
}

interface HeaderProps {
  onNavigateBack?: () => void;
  onNavigateForward?: () => void;
  canGoBack?: boolean;
  canGoForward?: boolean;
  initialTabs?: Tab[];
  onTabChange?: (activeTabId: string) => void;
  onTabClose?: (tabId: string) => void;
  onTabAdd?: (newTab: Tab) => void;
  onSidebarToggle?: (isOpen: boolean) => void;
  newProjectId?: string;
  newProjectTitle?: string;
}

const TAB_STORAGE_KEY = 'TabInfo';

const saveTabsToStorage = (tabs: Tab[]): void => {
  try {
    localStorage.setItem(TAB_STORAGE_KEY, JSON.stringify(tabs));
  } catch (error) {
    console.error('탭 저장 실패:', error);
  }
};

const loadTabsFromStorage = (): Tab[] => {
  try {
    const stored = localStorage.getItem(TAB_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('탭 불러오기 실패:', error);
  }
  return [];
};

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
  const [sideBarClose, setSideBarClose] = useState(true);
  
  const [tabs, setTabs] = useState<Tab[]>(() => {
    const savedTabs = loadTabsFromStorage();
    
    if (savedTabs.length > 0) {
      return savedTabs;
    }
    
    if (initialTabs && initialTabs.length > 0) {
      return initialTabs;
    }
    
    return [];
  });
  
  const [isOverflowing, setIsOverflowing] = useState(false);
  const pageBoxWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    saveTabsToStorage(tabs);
  }, [tabs]);

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
              projectId: projectId
            };
            
            setTabs(prevTabs => [
              ...prevTabs.map(tab => ({ ...tab, isActive: false })),
              newTab
            ]);
            
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

  const checkOverflow = () => {
    if (pageBoxWrapRef.current) {
      const element = pageBoxWrapRef.current;
      setIsOverflowing(element.scrollWidth > element.clientWidth);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [tabs]);

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const handleSidebarToggle = () => {
    const newState = !sideBarClose;
    setSideBarClose(newState);
    onSidebarToggle?.(newState);
  };

  const handleTabClick = (tabId: string) => {
    setTabs(prevTabs => 
      prevTabs.map(tab => ({
        ...tab,
        isActive: tab.id === tabId
      }))
    );
    onTabChange?.(tabId);
  };

  const handleTabClose = (tabId: string) => {
    setTabs(prevTabs => {
      const newTabs = prevTabs.filter(tab => tab.id !== tabId);
      
      const closedTab = prevTabs.find(tab => tab.id === tabId);
      if (closedTab?.isActive && newTabs.length > 0) {
        newTabs[0].isActive = true;
        onTabChange?.(newTabs[0].id);
      }
      
      return newTabs;
    });
    onTabClose?.(tabId);
  };

  const handleAddTab = () => {
    const newId = Date.now().toString();
    
    const projectId = newProjectId || `project-${newId}`;
    const title = newProjectTitle || '새 프로젝트';
    
    const newTab: Tab = {
      id: newId,
      title: title,
      isActive: true,
      projectId: projectId,
    };

    setTabs(prevTabs => [
      ...prevTabs.map(tab => ({ ...tab, isActive: false })),
      newTab
    ]);
    onTabAdd?.(newTab);
    onTabChange?.(newTab.id);
  };

  const handleBackClick = () => {
    if (canGoBack && onNavigateBack) {
      onNavigateBack();
    }
  };

  const handleForwardClick = () => {
    if (canGoForward && onNavigateForward) {
      onNavigateForward();
    }
  };

  return (
    <S.HeaderContainer>
      <S.OpenIconBox onClick={handleSidebarToggle}>
        {sideBarClose && (
          <SyncIcon
            name={SyncIcons.PanelLeftClose}
            color='#6B7280'
            size={20}
          />
        )}
        {!sideBarClose && (
          <SyncIcon
            name={SyncIcons.PanelRightClose}
            color='#6B7280'
            size={20}
          />
        )}
      </S.OpenIconBox>

      <S.BackButtonBox>
        <div 
          onClick={handleBackClick}
          style={{ 
            cursor: canGoBack ? 'pointer' : 'not-allowed',
            opacity: canGoBack ? 1 : 0.5
          }}
        >
          <SyncIcon
            name={SyncIcons.ChevronLeft}
            size={30}
            color='#8E95A2'
            strokeWidth={1}
          />
        </div>
        <div 
          onClick={handleForwardClick}
          style={{ 
            cursor: canGoForward ? 'pointer' : 'not-allowed',
            opacity: canGoForward ? 1 : 0.5
          }}
        >
          <SyncIcon
            name={SyncIcons.ChevronRight}
            size={30}
            color='#8E95A2'
            strokeWidth={1}
          />
        </div>
      </S.BackButtonBox>

      <S.PageBoxWrap ref={pageBoxWrapRef}>
        {tabs.map((tab) => (
          <S.TabBox 
            key={tab.id}
            isActive={tab.isActive}
            onClick={() => handleTabClick(tab.id)}
          >
            <S.ContentBox>{truncateText(tab.title, 12)}</S.ContentBox>
            <S.CloseIcon
              onClick={(e) => {
                e.stopPropagation();
                handleTabClose(tab.id);
              }}
            >
              <SyncIcon name={SyncIcons.X} size={15} />
            </S.CloseIcon>
          </S.TabBox>
        ))}
        
        {!isOverflowing && (
          <S.PlusIconWrap 
            onClick={handleAddTab}
            style={{ cursor: 'pointer' }}
          >
            <SyncIcon
              name={SyncIcons.Plus}
              color='#8E95A2'
              size={20}
            />
          </S.PlusIconWrap>
        )}
      </S.PageBoxWrap>

      {isOverflowing && (
        <S.PlusIconWrap 
          onClick={handleAddTab}
          style={{ cursor: 'pointer' }}
        >
          <SyncIcon
            name={SyncIcons.Plus}
            color='#8E95A2'
            size={20}
          />
        </S.PlusIconWrap>
      )}
    </S.HeaderContainer>
  )
}

export default Header