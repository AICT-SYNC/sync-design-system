import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import WorkspaceCard from './WorkspaceCard/index.tsx';
import ProjectCard from './ProjectCard/card.tsx';
import { Avatar } from '../../assets/icons/avatar.tsx';

// ==================== WorkspaceCard Stories ====================
const workspaceCardMeta: Meta<typeof WorkspaceCard> = {
  title: 'Components/WorkspaceCard',
  component: WorkspaceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isAdmin: {
      control: { type: 'boolean' },
      description: '관리자 여부 (Settings 아이콘 표시)',
    },
    showSettings: {
      control: { type: 'boolean' },
      description: '설정 아이콘 표시 여부',
    },
    title: {
      control: { type: 'text' },
      description: '워크스페이스 제목',
    },
    description: {
      control: { type: 'text' },
      description: '워크스페이스 설명',
    },
    memberCount: {
      control: { type: 'number', min: 0, max: 999 },
      description: '멤버 수',
    },
    notificationCount: {
      control: { type: 'number', min: 0, max: 99 },
      description: '알림 개수',
    },
    avatar: {
      control: false,
      description: '아바타 컴포넌트',
    },
  },
};

export default workspaceCardMeta;
type WorkspaceCardStory = StoryObj<typeof workspaceCardMeta>;

// WorkspaceCard Stories
export const WorkspaceDefault: WorkspaceCardStory = {
  args: {
    isAdmin: false,
    showSettings: false,
    title: '워크스페이스 제목',
    description: '워크스페이스 설명',
    memberCount: 4,
    notificationCount: 1,
  },
};

export const WorkspaceAdmin: WorkspaceCardStory = {
  args: {
    isAdmin: true,
    showSettings: true,
    title: '개발 팀 워크스페이스',
    description: '프론트엔드 개발 협업 공간',
    memberCount: 8,
    notificationCount: 3,
  },
};

export const WorkspaceNoNotifications: WorkspaceCardStory = {
  args: {
    isAdmin: false,
    showSettings: false,
    title: '마케팅 팀',
    description: '마케팅 전략 기획',
    memberCount: 6,
    notificationCount: 0,
  },
};

// 관리자 권한별 비교
export const WorkspacePermissionComparison: WorkspaceCardStory = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '20px',
      padding: '20px'
    }}>
      <div>
        <h4 style={{ marginBottom: '12px', color: '#666' }}>일반 멤버</h4>
        <WorkspaceCard
          isAdmin={false}
          showSettings={false}
          title="디자인 팀"
          description="Settings 아이콘 없음"
          memberCount={6}
          notificationCount={3}
        />
      </div>
      
      <div>
        <h4 style={{ marginBottom: '12px', color: '#666' }}>관리자</h4>
        <WorkspaceCard
          isAdmin={true}
          showSettings={true}
          title="디자인 팀"
          description="Settings 아이콘 있음"
          memberCount={6}
          notificationCount={3}
        />
      </div>
    </div>
  ),
};

// ==================== ProjectCard Stories ====================
const projectCardMeta: Meta<typeof ProjectCard> = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showSettings: {
      control: { type: 'boolean' },
      description: '설정 아이콘 표시 여부',
    },
    title: {
      control: { type: 'text' },
      description: '프로젝트 제목',
    },
    description: {
      control: { type: 'text' },
      description: '프로젝트 설명',
    },
    memberCount: {
      control: { type: 'number', min: 0, max: 999 },
      description: '멤버 수',
    },
    notificationCount: {
      control: { type: 'number', min: 0, max: 99 },
      description: '알림 개수',
    },
    image: {
      control: { type: 'text' },
      description: '프로젝트 이미지 URL',
    },
  },
};

type ProjectCardStory = StoryObj<typeof projectCardMeta>;

export const ProjectDefault: ProjectCardStory = {
  args: {
    showSettings: false,
    title: '프로젝트 제목',
    description: '프로젝트 설명',
    memberCount: 4,
    notificationCount: 1,
  },
};

export const ProjectAdmin: ProjectCardStory = {
  args: {
    showSettings: true,
    title: '웹 개발 프로젝트',
    description: '새로운 웹사이트 개발',
    memberCount: 6,
    notificationCount: 3,
  },
};

export const ProjectWithImage: ProjectCardStory = {
  args: {
    showSettings: true,
    title: '모바일 앱 프로젝트',
    description: 'iOS/Android 앱 개발',
    memberCount: 8,
    notificationCount: 5,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop',
  },
};

// 관리자 권한별 비교
export const ProjectPermissionComparison: ProjectCardStory = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '20px',
      padding: '20px'
    }}>
      <div>
        <h4 style={{ marginBottom: '12px', color: '#666' }}>일반 멤버</h4>
        <ProjectCard
          showSettings={false}
          title="개발 프로젝트"
          description="Settings 아이콘 없음"
          memberCount={5}
          notificationCount={2}
        />
      </div>
      
      <div>
        <h4 style={{ marginBottom: '12px', color: '#666' }}>관리자</h4>
        <ProjectCard
          showSettings={true}
          title="개발 프로젝트"
          description="Settings 아이콘 있음"
          memberCount={5}
          notificationCount={2}
        />
      </div>
    </div>
  ),
};