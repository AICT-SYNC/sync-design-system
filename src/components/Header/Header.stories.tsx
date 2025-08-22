import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '탭 관리와 네비게이션 기능을 제공하는 헤더 컴포넌트입니다. 탭 정보는 로컬 스토리지에 자동 저장됩니다.',
      },
    },
  },
  argTypes: {
    canGoBack: {
      control: 'boolean',
      description: '뒤로가기 버튼 활성화 여부',
    },
    canGoForward: {
      control: 'boolean',
      description: '앞으로가기 버튼 활성화 여부',
    },
    initialTabs: {
      control: 'object',
      description: '초기 탭 배열 (projectId, projectName 포함)',
    },
    onNavigateBack: {
      action: 'navigate back',
      description: '뒤로가기 클릭 시 실행',
    },
    onNavigateForward: {
      action: 'navigate forward',
      description: '앞으로가기 클릭 시 실행',
    },
    onTabChange: {
      action: 'tab changed',
      description: '탭 변경 시 실행',
    },
    onTabClose: {
      action: 'tab closed',
      description: '탭 닫기 시 실행',
    },
    onTabAdd: {
      action: 'tab added',
      description: '탭 추가 시 실행',
    },
    onSidebarToggle: {
      action: 'sidebar toggled',
      description: '사이드바 토글 시 실행',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// 기본 헤더
export const Default: Story = {
  args: {
    canGoBack: false,
    canGoForward: true,
  },
};

// 네비게이션 활성화
export const WithNavigation: Story = {
  args: {
    canGoBack: true,
    canGoForward: true,
  },
};

// 네비게이션 비활성화
export const NoNavigation: Story = {
  args: {
    canGoBack: false,
    canGoForward: false,
  },
};

// 커스텀 탭들 (프로젝트 정보 포함)
export const CustomTabs: Story = {
  args: {
    initialTabs: [
      { 
        id: '1', 
        title: '홈', 
        isActive: true, 
        projectId: 'proj-home-001', 
      },
      { 
        id: '2', 
        title: '프로젝트 관리', 
        isActive: false, 
        projectId: 'proj-mgmt-002', 
      },
      { 
        id: '3', 
        title: '설정', 
        isActive: false, 
        projectId: 'proj-settings-003', 
      },
    ],
    canGoBack: true,
    canGoForward: false,
  },
};

// 긴 제목 탭들
export const LongTitleTabs: Story = {
  args: {
    initialTabs: [
      { 
        id: '1', 
        title: '매우 긴 프로젝트 제목이 들어가는 경우의 처리 방법', 
        isActive: true, 
        projectId: 'proj-long-001', 
      },
      { 
        id: '2', 
        title: '이것도 긴 제목으로 텍스트 오버플로우 확인', 
        isActive: false, 
        projectId: 'proj-overflow-002', 
      },
      { 
        id: '3', 
        title: '짧은 제목', 
        isActive: false, 
        projectId: 'proj-short-003', 
      },
    ],
  },
};

// 많은 탭들
export const ManyTabs: Story = {
  args: {
    initialTabs: [
      { id: '1', title: '홈', isActive: true, projectId: 'proj-001', },
      { id: '2', title: '프로젝트 A', isActive: false, projectId: 'proj-002' },
      { id: '3', title: '프로젝트 B', isActive: false, projectId: 'proj-003'},
      { id: '4', title: '설정', isActive: false, projectId: 'proj-004' },
      { id: '5', title: '문서', isActive: false, projectId: 'proj-005'},
      { id: '6', title: '리포트', isActive: false, projectId: 'proj-006' },
      { id: '7', title: '분석', isActive: false, projectId: 'proj-007' },
      { id: '8', title: '테스트', isActive: false, projectId: 'proj-008'},
    ],
    canGoBack: true,
    canGoForward: true,
  },
};

// 단일 탭
export const SingleTab: Story = {
  args: {
    initialTabs: [
      { 
        id: '1', 
        title: '유일한 탭', 
        isActive: true, 
        projectId: 'proj-single-001', 
      },
    ],
    canGoBack: false,
    canGoForward: false,
  },
};

// 탭 없음 (로컬 스토리지 테스트)
export const NoTabs: Story = {
  args: {
    initialTabs: [],
    canGoBack: true,
    canGoForward: false,
  },
};

// 탭 정보 확인 스토리
export const TabInfoViewer: Story = {
  render: () => {
    const [selectedTabInfo, setSelectedTabInfo] = React.useState<any>(null);
    const [storageData, setStorageData] = React.useState<any[]>([]);

    const updateStorageData = () => {
      const data = localStorage.getItem('TabInfo');
      setStorageData(data ? JSON.parse(data) : []);
    };

    React.useEffect(() => {
      updateStorageData();
      const interval = setInterval(updateStorageData, 1000); // 1초마다 업데이트
      return () => clearInterval(interval);
    }, []);

    const handleTabChange = (tabId: string) => {
      const data = localStorage.getItem('TabInfo');
      if (data) {
        const tabs = JSON.parse(data);
        const selectedTab = tabs.find((tab: any) => tab.id === tabId);
        setSelectedTabInfo(selectedTab);
      }
    };

    const clearStorage = () => {
      localStorage.removeItem('TabInfo');
      setStorageData([]);
      setSelectedTabInfo(null);
    };

    return (
      <div>
        <Header 
          canGoBack={true} 
          canGoForward={true}
          onTabChange={handleTabChange}
        />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          padding: '20px'
        }}>
          {/* 선택된 탭 정보 */}
          <div style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '8px'
          }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#495057' }}>선택된 탭 정보</h3>
            {selectedTabInfo ? (
              <div>
                <p><strong>탭 ID:</strong> {selectedTabInfo.id}</p>
                <p><strong>제목:</strong> {selectedTabInfo.title}</p>
                <p><strong>프로젝트 ID:</strong> {selectedTabInfo.projectId}</p>
                <p><strong>활성 상태:</strong> {selectedTabInfo.isActive ? '활성' : '비활성'}</p>
              </div>
            ) : (
              <p style={{ color: '#6c757d', fontStyle: 'italic' }}>
                탭을 클릭하면 정보가 표시됩니다.
              </p>
            )}
          </div>

          {/* 전체 로컬 스토리지 데이터 */}
          <div style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '8px'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <h3 style={{ margin: 0, color: '#495057' }}>로컬 스토리지 데이터</h3>
              <button 
                onClick={clearStorage}
                style={{ 
                  padding: '5px 10px', 
                  fontSize: '12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                초기화
              </button>
            </div>
            
            {storageData.length > 0 ? (
              <div style={{ 
                maxHeight: '400px', 
                overflowY: 'auto',
                fontSize: '12px'
              }}>
                <pre style={{ 
                  backgroundColor: '#e9ecef', 
                  padding: '10px', 
                  borderRadius: '4px',
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}>
                  {JSON.stringify(storageData, null, 2)}
                </pre>
              </div>
            ) : (
              <p style={{ color: '#6c757d', fontStyle: 'italic' }}>
                저장된 탭 데이터가 없습니다.
              </p>
            )}
          </div>
        </div>

        <div style={{
          padding: '20px',
          backgroundColor: '#d1ecf1',
          border: '1px solid #bee5eb',
          margin: '20px',
          borderRadius: '8px'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#0c5460' }}>사용 방법</h4>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#0c5460' }}>
            <li>탭을 클릭하면 왼쪽에 해당 탭의 상세 정보가 표시됩니다</li>
            <li>오른쪽에는 실시간으로 로컬 스토리지에 저장된 모든 탭 데이터가 표시됩니다</li>
            <li>+ 버튼으로 새 탭을 추가하거나 X 버튼으로 탭을 삭제해보세요</li>
            <li>새로고침해도 데이터가 유지되는지 확인해보세요</li>
          </ul>
        </div>
      </div>
    );
  },
};

// 인터랙티브 스토리 - 실제 동작 확인
export const Interactive: Story = {
  args: {
    initialTabs: [
      { 
        id: '1', 
        title: '메인 프로젝트', 
        isActive: true, 
        projectId: 'main-proj-001', 
      },
      { 
        id: '2', 
        title: '서브 프로젝트', 
        isActive: false, 
        projectId: 'sub-proj-002', 
      },
      { 
        id: '3', 
        title: '테스트 환경', 
        isActive: false, 
        projectId: 'test-env-003', 
      },
    ],
    canGoBack: true,
    canGoForward: false,
  },
  render: function InteractiveHeader(args) {
    const [navigationState, setNavigationState] = React.useState({
      canGoBack: args.canGoBack,
      canGoForward: args.canGoForward,
    });

    const handleNavigateBack = () => {
      console.log('뒤로가기 클릭');
      setNavigationState(prev => ({ ...prev, canGoBack: false, canGoForward: true }));
    };

    const handleNavigateForward = () => {
      console.log('앞으로가기 클릭');
      setNavigationState(prev => ({ ...prev, canGoBack: true, canGoForward: false }));
    };

    return (
      <Header
        {...args}
        canGoBack={navigationState.canGoBack}
        canGoForward={navigationState.canGoForward}
        onNavigateBack={handleNavigateBack}
        onNavigateForward={handleNavigateForward}
        onTabChange={(tabId) => console.log('활성 탭 변경:', tabId)}
        onTabClose={(tabId) => console.log('탭 닫기:', tabId)}
        onTabAdd={(newTab) => console.log('새 탭 추가:', newTab)}
        onSidebarToggle={(isOpen) => console.log('사이드바 상태:', isOpen ? '열림' : '닫힘')}
      />
    );
  },
};

// 사이드바 상태 확인
export const SidebarStates: Story = {
  render: () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    
    return (
      <div>
        <Header
          onSidebarToggle={(isOpen) => setSidebarOpen(isOpen)}
          canGoBack={true}
          canGoForward={true}
        />
        <div style={{
          padding: '20px',
          backgroundColor: '#f5f5f5',
          border: '1px dashed #ddd',
          margin: '10px',
          borderRadius: '4px'
        }}>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
            사이드바 상태: <strong>{sidebarOpen ? '열림' : '닫힘'}</strong>
          </p>
          <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#999' }}>
            왼쪽 패널 아이콘을 클릭해보세요!
          </p>
        </div>
      </div>
    );
  },
};