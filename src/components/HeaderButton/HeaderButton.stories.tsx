import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { HeaderButton } from "./HeaderButton";

const meta: Meta<typeof HeaderButton> = {
  title: "Components/HeaderButton",
  component: HeaderButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: { type: "text" },
      description: "탭의 고유 ID",
    },
    title: {
      control: { type: "text" },
      description: "탭에 표시될 제목",
    },
    isActive: {
      control: { type: "boolean" },
      description: "탭의 활성 상태",
    },
    onTabClick: {
      action: "clicked",
      description: "탭 클릭 시 호출되는 함수",
    },
    onTabClose: {
      action: "closed",
      description: "탭 닫기 버튼 클릭 시 호출되는 함수 (선택적)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 상호작용 가능한 래퍼 컴포넌트
const InteractiveWrapper = (args: any) => {
  const [isActive, setIsActive] = useState(args.isActive || false);

  const handleTabClick = (tabId: string) => {
    setIsActive(!isActive);
    args.onTabClick?.(tabId);
  };

  const handleTabClose = (tabId: string) => {
    args.onTabClose?.(tabId);
  };

  return (
    <div style={{ width: "200px", height: "40px" }}>
      <HeaderButton
        id={args.id}
        title={args.title}
        isActive={isActive}
        onTabClick={handleTabClick}
        onTabClose={handleTabClose}
      />
    </div>
  );
};

// 기본 활성 탭
export const Active: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    id: "tab-1",
    title: "활성 탭",
    isActive: true,
  },
};

// 비활성 탭
export const Inactive: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    id: "tab-2",
    title: "비활성 탭",
    isActive: false,
  },
};

// 긴 제목 (텍스트 잘림 확인)
export const LongTitle: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    id: "tab-3",
    title: "매우 긴 탭 제목으로 텍스트 잘림 테스트",
    isActive: true,
  },
};

// 닫기 버튼 없는 탭
export const WithoutCloseButton: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    id: "tab-4",
    title: "닫기 불가능 탭",
    isActive: true,
    // onTabClose 없음
  },
};

// 상호작용 가능한 탭 (클릭으로 상태 변경)
export const Interactive: Story = {
  render: (args) => <InteractiveWrapper {...args} />,
  args: {
    id: "interactive-tab",
    title: "클릭하여 토글",
    isActive: false,
  },
};

// 여러 탭이 함께 있는 예시
export const MultipleTab: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("tab-1");
    
    const tabs = [
      { id: "tab-1", title: "첫 번째 탭" },
      { id: "tab-2", title: "두 번째 탭" },
      { id: "tab-3", title: "세 번째 탭" },
    ];

    return (
      <div style={{ display: "flex", height: "40px" }}>
        {tabs.map((tab) => (
          <HeaderButton
            key={tab.id}
            id={tab.id}
            title={tab.title}
            isActive={activeTab === tab.id}
            onTabClick={(id) => setActiveTab(id)}
            onTabClose={(id) => console.log("Close tab:", id)}
          />
        ))}
      </div>
    );
  },
};
