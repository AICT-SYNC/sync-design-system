import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./ProjectCard";

const meta = {
  title: "Components/Card/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "워크스페이스 제목",
    description: "0개의 프로젝트",
    memberCount: 5,
    notificationCount: 3,
    onDelete: () => alert("삭제 클릭!"),
  },
};

export const WithImage: Story = {
  args: {
    title: "디자인 시스템",
    description: "12개의 프로젝트",
    memberCount: 8,
    notificationCount: 5,
    image: "https://picsum.photos/200/150",
    onDelete: () => alert("삭제 클릭!"),
  },
};

export const WithBorderColor: Story = {
  args: {
    title: "개발 프로젝트",
    description: "5개의 프로젝트",
    memberCount: 3,
    notificationCount: 0,
    borderColor: "#4A90E2",
    onDelete: () => alert("삭제 클릭!"),
  },
};

export const LongText: Story = {
  args: {
    title: "매우 긴 워크스페이스 제목입니다",
    description: "이것은 매우 긴 설명 텍스트입니다. 잘려서 표시됩니다.",
    memberCount: 15,
    notificationCount: 99,
    onDelete: () => alert("삭제 클릭!"),
  },
};

export const NoNotifications: Story = {
  args: {
    title: "프로젝트 A",
    description: "3개의 프로젝트",
    memberCount: 2,
    notificationCount: 0,
    onDelete: () => alert("삭제 클릭!"),
  },
};

export const WithSettings: Story = {
  args: {
    title: "설정 가능한 카드",
    description: "7개의 프로젝트",
    memberCount: 10,
    notificationCount: 2,
    onClickSettings: () => alert("설정 버튼 클릭!"),
    onDelete: () => alert("삭제 클릭!"),
  },
};

export const WithoutDelete: Story = {
  args: {
    title: "삭제 불가능한 카드",
    description: "7개의 프로젝트",
    memberCount: 10,
    notificationCount: 2,
    // onDelete가 없으면 X 버튼이 안 보임
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <ProjectCard
        title="디자인 시스템"
        description="12개의 프로젝트"
        memberCount={8}
        notificationCount={5}
        image="https://picsum.photos/200/150"
        onDelete={() => alert("디자인 시스템 삭제")}
      />
      <ProjectCard
        title="프론트엔드"
        description="8개의 프로젝트"
        memberCount={5}
        notificationCount={3}
        borderColor="#E94E77"
        onDelete={() => alert("프론트엔드 삭제")}
      />
      <ProjectCard
        title="백엔드 개발"
        description="15개의 프로젝트"
        memberCount={12}
        notificationCount={0}
        borderColor="#4A90E2"
        onDelete={() => alert("백엔드 삭제")}
      />
      <ProjectCard
        title="모바일 앱"
        description="6개의 프로젝트"
        memberCount={4}
        notificationCount={2}
        image="https://picsum.photos/200/151"
        onDelete={() => alert("모바일 앱 삭제")}
      />
    </div>
  ),
};