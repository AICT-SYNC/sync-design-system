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
    imageUrl: "data:image/jpeg;base64,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\n"
  },
};

export const WorkspaceAdmin: WorkspaceCardStory = {
  args: {
    title: "개발 팀 워크스페이스",
    description: "프론트엔드 개발 협업 공간",
    memberCount: 8,
    notificationCount: 3,
  },
};

export const WorkspaceNoNotifications: WorkspaceCardStory = {
  args: {
    title: "마케팅 팀",
    description: "마케팅 전략 기획",
    memberCount: 6,
    notificationCount: 0,
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
        <h4 style={{ marginBottom: "12px", color: "#666" }}>일반</h4>
        <WorkspaceCard
          title="디자인 팀"
          description="Settings 아이콘 없음"
          memberCount={6}
          notificationCount={3}
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
        />
      </div>
    </div>
  ),
};
