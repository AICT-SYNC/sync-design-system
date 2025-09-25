import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { WorkspaceCard } from "./WorkspaceCard";
import { ProjectCard } from "./ProjectCard";

const workspaceCardMeta: Meta<typeof WorkspaceCard> = {
  title: "Components/Card",
  component: WorkspaceCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "워크스페이스 제목",
    },
    description: {
      control: { type: "text" },
      description: "워크스페이스 설명",
    },
    memberCount: {
      control: { type: "number", min: 0, max: 999 },
      description: "멤버 수",
    },
    notificationCount: {
      control: { type: "number", min: 0, max: 99 },
      description: "알림 개수",
    },
    avatar: {
      control: false,
      description: "아바타 컴포넌트",
    },
    borderColor: {
      control: { type: "color" },
      description: "워크스페이스 테두리 색상",
    },
    imageUrl: {
      control: { type: "text" },
      description: "워크스페이스 이미지 URL",
    },
  },
};

export default workspaceCardMeta;
type WorkspaceCardStory = StoryObj<typeof workspaceCardMeta>;

// WorkspaceCard Stories
export const WorkspaceDefault: WorkspaceCardStory = {
  args: {
    title: "워크스페이스 제목",
    description: "워크스페이스 설명",
    memberCount: 4,
    notificationCount: 1,
  },
};

export const WorkspaceWithBorderColor: WorkspaceCardStory = {
  args: {
    title: "디자인 워크스페이스",
    description: "UI/UX 디자인 협업 공간",
    memberCount: 3,
    notificationCount: 2,
    borderColor: "#FF6B6B",
  },
};

export const WorkspaceAdmin: WorkspaceCardStory = {
  args: {
    title: "개발 팀 워크스페이스",
    description: "프론트엔드 개발 협업 공간",
    memberCount: 8,
    notificationCount: 3,
    borderColor: "#4DABF7",
  },
};

export const WorkspaceNoNotifications: WorkspaceCardStory = {
  args: {
    title: "마케팅 팀",
    description: "마케팅 전략 기획",
    memberCount: 6,
    notificationCount: 0,
    borderColor: "#51CF66",
  },
};

export const WorkspaceWithImage: WorkspaceCardStory = {
  args: {
    title: "프로덕트 팀",
    description: "제품 기획 및 관리",
    memberCount: 5,
    notificationCount: 1,
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
  },
};

// 관리자 권한별 비교
export const WorkspacePermissionComparison: WorkspaceCardStory = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>기본 스타일</h4>
        <WorkspaceCard
          title="디자인 팀"
          description="UI/UX 협업"
          memberCount={6}
          notificationCount={3}
        />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>커스텀 색상</h4>
        <WorkspaceCard
          title="개발 팀"
          description="백엔드 개발"
          memberCount={8}
          notificationCount={5}
          borderColor="#9775FA"
        />
      </div>
    </div>
  ),
};

export const WorkspaceColorThemes: WorkspaceCardStory = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>Red 테마</h4>
        <WorkspaceCard
          title="마케팅 팀"
          description="브랜드 마케팅"
          memberCount={4}
          notificationCount={1}
          borderColor="#FF6B6B"
        />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>Blue 테마</h4>
        <WorkspaceCard
          title="개발 팀"
          description="프론트엔드"
          memberCount={6}
          notificationCount={3}
          borderColor="#4DABF7"
        />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>Green 테마</h4>
        <WorkspaceCard
          title="운영 팀"
          description="서비스 운영"
          memberCount={2}
          notificationCount={0}
          borderColor="#51CF66"
        />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>Purple 테마</h4>
        <WorkspaceCard
          title="QA 팀"
          description="품질 보증"
          memberCount={5}
          notificationCount={7}
          borderColor="#9775FA"
        />
      </div>
    </div>
  ),
};

// ==================== ProjectCard Stories ====================
const projectCardMeta = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "프로젝트 제목",
    },
    description: {
      control: { type: "text" },
      description: "프로젝트 설명",
    },
    memberCount: {
      control: { type: "number", min: 0, max: 999 },
      description: "멤버 수",
    },
    notificationCount: {
      control: { type: "number", min: 0, max: 99 },
      description: "알림 개수",
    },
    image: {
      control: { type: "text" },
      description: "프로젝트 이미지 URL",
    },
    borderColor: {
      control: { type: "color" },
      description: "기본 배경의 테두리 색상",
    },
    onClickSettings: {
      action: "settings-clicked",
      description: "설정 아이콘 클릭 이벤트",
    },
  },
};

type ProjectCardStory = StoryObj<typeof projectCardMeta>;

export const ProjectDefault: ProjectCardStory = {
  args: {
    title: "프로젝트 제목",
    description: "프로젝트 설명",
    memberCount: 4,
    notificationCount: 1,
  },
};

export const ProjectAdmin: ProjectCardStory = {
  args: {
    title: "웹 개발 프로젝트 앱 개발 프로젝트",
    description: "새로운 웹사이트 개발",
    memberCount: 6,
    notificationCount: 3,
  },
};

export const ProjectWithImage: ProjectCardStory = {
  args: {
    title: "모바일 앱 프로젝트",
    description: "iOS/Android 앱 개발",
    memberCount: 8,
    notificationCount: 5,
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
  },
};

export const ProjectWithBorderColor: ProjectCardStory = {
  args: {
    title: "디자인 프로젝트",
    description: "UI/UX 디자인 시스템 구축",
    memberCount: 3,
    notificationCount: 2,
    borderColor: "#FF6B6B",
  },
};

export const ProjectCustomColors: ProjectCardStory = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>Red 테마</h4>
        <ProjectCard
          title="백엔드 API"
          description="REST API 개발"
          memberCount={4}
          notificationCount={1}
          borderColor="#FF6B6B"
        />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>Blue 테마</h4>
        <ProjectCard
          title="프론트엔드"
          description="React 웹 개발"
          memberCount={6}
          notificationCount={3}
          borderColor="#4DABF7"
        />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>Green 테마</h4>
        <ProjectCard
          title="데이터베이스"
          description="DB 설계 및 구축"
          memberCount={2}
          notificationCount={0}
          borderColor="#51CF66"
        />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>Purple 테마</h4>
        <ProjectCard
          title="QA 테스팅"
          description="품질 보증 테스트"
          memberCount={5}
          notificationCount={7}
          borderColor="#9775FA"
        />
      </div>
    </div>
  ),
};

// 관리자 권한별 비교
export const ProjectPermissionComparison: ProjectCardStory = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>일반 멤버</h4>
        <ProjectCard
          title="개발 프로젝트 개발 프로젝트 개발"
          description="Settings 아이콘 없음ㅁㄴㅇㅁㄴㅇㅁㄴㅇ"
          memberCount={5}
          notificationCount={2}
          borderColor="#0c0c0c70"
        />
      </div>
    </div>
  ),
};

// 이미지 vs 테두리 색상 비교
export const ProjectImageVsBorder: ProjectCardStory = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>이미지 있음</h4>
        <ProjectCard
          title="모바일 앱"
          description="Flutter 앱 개발"
          memberCount={4}
          notificationCount={2}
          image="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop"
        />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>테두리 색상</h4>
        <ProjectCard
          title="웹 개발"
          description="React 웹 개발"
          memberCount={4}
          notificationCount={2}
          borderColor="#4DABF7"
        />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>기본 스타일</h4>
        <ProjectCard
          title="데이터 분석"
          description="빅데이터 처리"
          memberCount={4}
          notificationCount={2}
        />
      </div>
    </div>
  ),
};