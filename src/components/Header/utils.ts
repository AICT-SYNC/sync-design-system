import { Tab } from './types';

export const saveTabsToStorage = (tabs: Tab[]): void => {
  try {
    localStorage.setItem('TabInfo', JSON.stringify(tabs));
  } catch (error) {
    console.error('탭 저장 실패:', error);
  }
};

export const loadTabsFromStorage = (): Tab[] => {
  try {
    const stored = localStorage.getItem('TabInfo');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('탭 불러오기 실패:', error);
    return [];
  }
};

export const truncateText = (text: string, maxLength: number): string => 
  text.length <= maxLength ? text : text.substring(0, maxLength) + '...';

export const checkNewProject = (tabs: Tab[]): Tab | null => {
  const newProject = localStorage.getItem('newProject');
  if (!newProject) return null;

  try {
    const { projectId, projectName } = JSON.parse(newProject);
    const existingTab = tabs.find(tab => tab.projectId === projectId);
    
    if (existingTab) {
      localStorage.removeItem('newProject');
      return null;
    }

    const newTab: Tab = {
      id: Date.now().toString(),
      title: projectName,
      isActive: true,
      projectId
    };

    localStorage.removeItem('newProject');
    return newTab;
  } catch (error) {
    console.error('새 프로젝트 정보 파싱 실패:', error);
    return null;
  }
};