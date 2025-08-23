import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";
import styled from "styled-components";

interface CalendarProps {
  value: string;
  splitCharacter?: string;
  onChange: (date: Date) => void;
  type?: "entire" | "future";
  size?: "medium" | "large";
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 20px;
`;

const CalendarWithState = (args: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(args.value);

  const handleDateChange = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}${args.splitCharacter || "-"}${month}${args.splitCharacter || "-"
      }${day}`;
    setSelectedDate(formattedDate);
    args.onChange(date);
  };

  return (
    <Wrap>
      <Calendar {...args} value={selectedDate} onChange={handleDateChange} />
    </Wrap>
  );
};

const meta: Meta<CalendarProps> = {
  title: "Components/Calendar",
  component: CalendarWithState,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["entire", "future"],
      description: "날짜 선택 모드 (전체 또는 미래 날짜만)",
    },
    size: {
      control: { type: "radio" },
      options: ["medium", "large"],
      description: "컴포넌트 크기",
    },
    splitCharacter: {
      control: { type: "text" },
      description: "날짜 구분자",
    },
    value: {
      control: { type: "text" },
      description: "초기 날짜 값 (YYYY-MM-DD 형식)",
    },
    onChange: { action: "date changed" },
  },
};

export default meta;

type Story = StoryObj<CalendarProps>;

export const Default: Story = {
  args: {
    value: "2024.01.15",
    splitCharacter: ".",
    type: "entire",
    size: "medium",
  },
};

export const FutureOnly: Story = {
  args: {
    value: "2024.12.25",
    splitCharacter: ".",
    type: "future",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    value: "2024.03.10",
    splitCharacter: ".",
    type: "entire",
    size: "large",
  },
};

export const CustomSeparator: Story = {
  args: {
    value: "2024/08/20",
    splitCharacter: "/",
    type: "entire",
    size: "medium",
  },
};

export const NoInitialValue: Story = {
  args: {
    value: "",
    splitCharacter: ".",
    type: "entire",
    size: "medium",
  },
};
