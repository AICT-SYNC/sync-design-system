import type { Meta, StoryObj } from "@storybook/react";
import { WorkspaceCard } from "./WorkspaceCard";

const meta = {
  title: "Components/Card/WorkspaceCard",
  component: WorkspaceCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WorkspaceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "프로젝트 제목",
    description: "프로젝트",
    memberCount: 5,
    notificationCount: 3,
  },
};

export const WithImage: Story = {
  args: {
    title: "워크스페이스",
    description: "팀 협업 공간",
    memberCount: 12,
    notificationCount: 8,
    imageUrl: "https://picsum.photos/200/200",
  },
};

export const LongText: Story = {
  args: {
    title: "매우 긴 워크스페이스 제목입니다",
    description: "이것은 매우 긴 설명 텍스트입니다. 잘려서 표시됩니다.",
    memberCount: 25,
    notificationCount: 99,
  },
};

export const NoNotifications: Story = {
  args: {
    title: "개발 워크스페이스",
    description: "개발팀 전용",
    memberCount: 8,
    notificationCount: 0,
  },
};

export const WithSettings: Story = {
  args: {
    title: "설정 가능한 워크스페이스",
    description: "설정 버튼 활성화",
    memberCount: 15,
    notificationCount: 5,
    onClickSettings: () => alert("설정 버튼 클릭!"),
  },
};

export const MinimalInfo: Story = {
  args: {
    title: "최소 정보",
    description: "기본 워크스페이스",
    memberCount: 1,
    notificationCount: 0,
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <WorkspaceCard
        title="디자인팀"
        description="디자인 협업 공간"
        memberCount={15}
        notificationCount={8}
        imageUrl="https://picsum.photos/200/200"
      />
      <WorkspaceCard
        title="개발팀"
        description="개발 협업 공간"
        memberCount={20}
        notificationCount={5}
        imageUrl="https://picsum.photos/200/201"
      />
      <WorkspaceCard
        title="마케팅팀"
        description="마케팅 협업 공간"
        memberCount={10}
        notificationCount={12}
      />
      <WorkspaceCard
        title="기획팀"
        description="기획 협업 공간"
        memberCount={8}
        notificationCount={0}
        imageUrl="https://picsum.photos/200/202"
      />
    </div>
  ),
};
