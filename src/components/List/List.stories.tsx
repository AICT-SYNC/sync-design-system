import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";
import { ListSize } from "@foundation/List";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: [ListSize.S, ListSize.M, ListSize.L],
      description: "리스트 아이템 크기",
    },
    select: {
      control: "boolean",
      description: "체크박스 표시 여부",
    },
    width: {
      control: "text",
      description: "리스트 아이템 너비",
    },
    image: {
      control: "text",
      description: "사용자 프로필 이미지 URL (입력 시 즉시 반영)",
      table: { category: "Visual" },
    },
    name: { control: "text" },
    email: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* -------------------------- 기본 리스트 -------------------------- */
export const Default: Story = {
  args: {
    size: ListSize.M,
    select: false,
    name: "John Doe",
    email: "john.doe@example.com",
    width: "320px",
  },
};

/* -------------------------- 이미지 포함 -------------------------- */
export const WithImage: Story = {
  args: {
    size: ListSize.M,
    select: false,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    width: "320px",
    image: "https://i.pravatar.cc/150?img=32", // ✅ 실제 이미지 미리보기 가능
  },
};

/* -------------------------- 체크박스 포함 -------------------------- */
export const WithCheckbox: Story = {
  args: {
    size: ListSize.M,
    select: true,
    name: "Alex Brown",
    email: "alex.brown@example.com",
    width: "320px",
    image: "https://i.pravatar.cc/150?img=33",
  },
};

/* -------------------------- 모든 크기 (이미지 있음) -------------------------- */
export const AllSizesWithImage: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "flex-start",
      }}
    >
      <List
        size={ListSize.S}
        select={true}
        name="Small User"
        email="small@example.com"
        width="320px"
        image="https://i.pravatar.cc/150?img=1"
      />
      <List
        size={ListSize.M}
        select={true}
        name="Medium User"
        email="medium@example.com"
        width="320px"
        image="https://i.pravatar.cc/150?img=2"
      />
      <List
        size={ListSize.L}
        select={true}
        name="Large User"
        email="large@example.com"
        width="320px"
        image="https://i.pravatar.cc/150?img=3"
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};

/* -------------------------- 체크박스 없는 이미지 테스트 -------------------------- */
export const AllSizesNoCheckboxWithImage: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "flex-start",
      }}
    >
      <List
        size={ListSize.S}
        select={false}
        name="Small User"
        email="small@example.com"
        width="320px"
        image="https://i.pravatar.cc/150?img=4"
      />
      <List
        size={ListSize.M}
        select={false}
        name="Medium User"
        email="medium@example.com"
        width="320px"
        image="https://i.pravatar.cc/150?img=5"
      />
      <List
        size={ListSize.L}
        select={false}
        name="Large User"
        email="large@example.com"
        width="320px"
        image="https://i.pravatar.cc/150?img=6"
      />
    </div>
  ),
  parameters: { controls: { disable: true } },
};
