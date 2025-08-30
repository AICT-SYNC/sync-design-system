import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";
import styled from "styled-components";
import { DatePickerVariant, CalendarSize } from "@foundation";

interface CalendarProps {
  value: string;
  splitCharacter?: string;
  onChange: (date: Date) => void;
  type?: DatePickerVariant;
  size?: CalendarSize;
  baseDate?: string;
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 20px;
`;

const CalendarWithState = (args: CalendarProps & { baseDate?: string }) => {
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

  const baseDate = args.baseDate ? new Date(args.baseDate) : undefined;

  return (
    <Wrap>
      <Calendar {...args} value={selectedDate} onChange={handleDateChange} baseDate={baseDate} />
    </Wrap>
  );
};

const meta: Meta<CalendarProps> = {
  title: "Components/Calendar",
  component: CalendarWithState,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: [DatePickerVariant.entire, DatePickerVariant.future],
      description: "날짜 선택 모드 (전체 또는 미래 날짜만)",
    },
    size: {
      control: { type: "radio" },
      options: [CalendarSize.M, CalendarSize.L],
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
    baseDate: {
      control: { type: "text" },
      description: "기준 날짜 (YYYY-MM-DD 형식, future 모드에서 이 날짜 이후만 선택 가능)",
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
    type: DatePickerVariant.entire,
    size: CalendarSize.M,
  },
};

export const FutureOnly: Story = {
  args: {
    value: "2024.12.25",
    splitCharacter: ".",
    type: DatePickerVariant.future,
    size: CalendarSize.M,
  },
};

export const Large: Story = {
  args: {
    value: "2024.03.10",
    splitCharacter: ".",
    type: DatePickerVariant.entire,
    size: CalendarSize.L,
  },
};

export const CustomSeparator: Story = {
  args: {
    value: "2024/08/20",
    splitCharacter: "/",
    type: DatePickerVariant.entire,
    size: CalendarSize.M,
  },
};

export const NoInitialValue: Story = {
  args: {
    value: "",
    splitCharacter: ".",
    type: DatePickerVariant.entire,
    size: CalendarSize.M,
  },
};

export const FutureWithBaseDate: Story = {
  args: {
    value: "2024.12.25",
    splitCharacter: ".",
    type: DatePickerVariant.future,
    size: CalendarSize.M,
    baseDate: "2024-11-15",
  },
};
