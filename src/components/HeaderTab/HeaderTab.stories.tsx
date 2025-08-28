import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { HeaderButton } from "./HeaderTab";

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
const InteractiveWrapper = (args: {
  id?: string;
  title?: string;
  isActive?: boolean;
  onTabClick?: (id: string) => void;
  onTabClose?: (id: string) => void;
}) => {
  const [isActive, setIsActive] = useState(args?.isActive || false);

  const handleTabClick = (tabId: string) => {
    setIsActive(!isActive);
    args?.onTabClick?.(tabId);
  };

  const handleTabClose = (tabId: string) => {
    args?.onTabClose?.(tabId);
  };

  return (
    <div style={{ width: "200px", height: "40px" }}>
      <HeaderButton
        id={args?.id || "default"}
        title={args?.title || "Default"}
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
  render: function MultipleTabRender() {
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

// 실제 탭 관리 시나리오 (열기/닫기 기능 포함)
export const TabManager: Story = {
  args: {
    title: "asdoiuashduihaisudhas",
  },

  render: function TabManagerRender() {
    const [tabs, setTabs] = useState([
      { id: "tab-1", title: "홈", isActive: true },
      { id: "tab-2", title: "설정", isActive: false },
      { id: "tab-3", title: "프로필", isActive: false },
    ]);

    const setActiveTab = (tabId: string) => {
      setTabs((prevTabs) =>
        prevTabs.map((tab) => ({
          ...tab,
          isActive: tab.id === tabId,
        }))
      );
    };

    const closeTab = (tabId: string) => {
      setTabs((prevTabs) => {
        const filteredTabs = prevTabs.filter((tab) => tab.id !== tabId);

        // 닫힌 탭이 활성 탭이었다면 첫 번째 탭을 활성화
        const closedTabWasActive = prevTabs.find(
          (tab) => tab.id === tabId
        )?.isActive;
        if (closedTabWasActive && filteredTabs.length > 0) {
          filteredTabs[0].isActive = true;
        }

        return filteredTabs;
      });
    };

    const addNewTab = () => {
      const newTabId = `tab-${Date.now()}`;
      setTabs((prevTabs) => [
        ...prevTabs.map((tab) => ({ ...tab, isActive: false })),
        { id: newTabId, title: `새 탭 ${prevTabs.length + 1}`, isActive: true },
      ]);
    };

    return (
      <div>
        <div
          style={{
            display: "flex",
            height: "40px",
            marginBottom: "16px",
            width: "1000px",
          }}
        >
          {tabs.map((tab) => (
            <HeaderButton
              key={tab.id}
              id={tab.id}
              title={tab.title}
              isActive={tab.isActive}
              onTabClick={setActiveTab}
              onTabClose={closeTab}
            />
          ))}
          <button
            onClick={addNewTab}
            style={{
              marginLeft: "8px",
              padding: "0 12px",
              height: "40px",
              border: "1px solid #ccc",
              backgroundColor: "#f5f5f5",
              cursor: "pointer",
            }}
          >
            + 탭 추가
          </button>
        </div>
        <div
          style={{
            padding: "16px",
            backgroundColor: "#f9f9f9",
            borderRadius: "4px",
          }}
        >
          현재 활성 탭: {tabs.find((tab) => tab.isActive)?.title || "없음"} | 총
          탭 개수: {tabs.length}개
        </div>
      </div>
    );
  },
};
