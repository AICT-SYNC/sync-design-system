import { useState, useRef, useEffect } from 'react';
import { Tab, HeaderProps } from './types';
import { loadTabsFromStorage, saveTabsToStorage, checkNewProject } from './utils';

export const useHeaderState = (initialTabs?: Tab[]) => {
  const [sideBarClose, setSideBarClose] = useState(true);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const pageBoxWrapRef = useRef<HTMLDivElement>(null);

  const [tabs, setTabs] = useState<Tab[]>(() => {
    const savedTabs = loadTabsFromStorage();
    if (savedTabs.length > 0) return savedTabs;
    if (initialTabs && initialTabs.length > 0) return initialTabs;
    return [];
  });

  return {
    sideBarClose,
    setSideBarClose,
    isOverflowing,
    setIsOverflowing,
    pageBoxWrapRef,
    tabs,
    setTabs
  };
};

export const useTabManagement = (
  tabs: Tab[],
  setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,
  onTabAdd?: (newTab: Tab) => void,
  onTabChange?: (activeTabId: string) => void,
  onTabClose?: (tabId: string) => void
) => {
  useEffect(() => {
    saveTabsToStorage(tabs);
  }, [tabs]);

  useEffect(() => {
    const checkProject = () => {
      const newTab = checkNewProject(tabs, onTabAdd, onTabChange);
      if (newTab) {
        setTabs(prevTabs => [
          ...prevTabs.map(tab => ({ ...tab, isActive: false })),
          newTab
        ]);
      }
    };

    const interval = setInterval(checkProject, 1000);
    return () => clearInterval(interval);
  }, [tabs, onTabAdd, onTabChange, setTabs]);

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

  const handleAddTab = (newProjectId?: string, newProjectTitle?: string) => {
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

  return {
    handleTabClick,
    handleTabClose,
    handleAddTab
  };
};

export const useOverflowDetection = (
  pageBoxWrapRef: React.RefObject<HTMLDivElement>,
  tabs: Tab[],
  setIsOverflowing: React.Dispatch<React.SetStateAction<boolean>>
) => {
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
};