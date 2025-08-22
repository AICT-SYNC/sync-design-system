import { useState, useRef, useEffect } from 'react';
import { Tab } from './types';
import { loadTabsFromStorage, saveTabsToStorage, checkNewProject } from './utils';

export const useHeaderState = (initialTabs?: Tab[]) => {
  const [sideBarClose, setSideBarClose] = useState(true);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const pageBoxWrapRef = useRef<HTMLDivElement>(null);
  
  const [tabs, setTabs] = useState<Tab[]>(() => {
    const savedTabs = loadTabsFromStorage();
    return savedTabs.length > 0 ? savedTabs : (initialTabs || []);
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
  useEffect(() => saveTabsToStorage(tabs), [tabs]);

  useEffect(() => {
    const checkProject = () => {
      const newTab = checkNewProject(tabs);
      if (newTab) {
        setTabs(prev => [...prev.map(tab => ({ ...tab, isActive: false })), newTab]);
        onTabAdd?.(newTab);
        onTabChange?.(newTab.id);
      }
    };

    const interval = setInterval(checkProject, 1000);
    return () => clearInterval(interval);
  }, [tabs, onTabAdd, onTabChange, setTabs]);

  const handleTabClick = (tabId: string) => {
    setTabs(prev => prev.map(tab => ({ ...tab, isActive: tab.id === tabId })));
    onTabChange?.(tabId);
  };

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

  return { handleTabClick, handleTabClose };
};

export const useOverflowDetection = (
  pageBoxWrapRef: React.RefObject<HTMLDivElement | null>,
  tabs: Tab[],
  setIsOverflowing: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const checkOverflow = () => {
      if (pageBoxWrapRef.current) {
        setIsOverflowing(pageBoxWrapRef.current.scrollWidth > pageBoxWrapRef.current.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [tabs, pageBoxWrapRef, setIsOverflowing]);
};