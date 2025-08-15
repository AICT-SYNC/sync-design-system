import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Calendar from "./Calendar";

interface CalendarProps {
  value: string;
  splitCharacter?: string;
  onChange: (date: Date) => void;
  type?: "entire" | "future";
  dateType?: "date" | "month" | "year";
  height?: number;
  typography?: {
    size: "small" | "medium" | "large";
    weight: "light" | "regular" | "bold";
  };
}

const CalendarWithState = (args: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(args.value);

  const handleDateChange = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}${args.splitCharacter || "-"}${month}${args.splitCharacter || "-"}${day}`;
    setSelectedDate(formattedDate);
    args.onChange(date);
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '400px',
      padding: '20px'
    }}>
      <Calendar
        {...args}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
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
    dateType: {
      control: { type: "radio" },
      options: ["date", "month", "year"],
      description: "날짜 타입",
    },
    height: {
      control: { type: "number" },
      description: "컴포넌트 높이",
    },
    splitCharacter: {
      control: { type: "text" },
      description: "날짜 구분자",
    },
    typography: {
      control: { type: "object" },
      description: "타이포그래피 설정",
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
    dateType: "date",
    typography: {
      size: "medium",
      weight: "regular",
    },
  },
};

export const FutureOnly: Story = {
  args: {
    value: "2024.12.25",
    splitCharacter: ".",
    type: "future",
    dateType: "date",
    typography: {
      size: "medium",
      weight: "regular",
    },
  },
};


export const SmallTypography: Story = {
  args: {
    value: "2024.03.10",
    splitCharacter: ".",
    type: "entire",
    dateType: "date",
    typography: {
      size: "small",
      weight: "light",
    },
  },
};

export const LargeTypography: Story = {
  args: {
    value: "2024.08.20",
    splitCharacter: ".",
    type: "entire",
    dateType: "date",
    height: 60,
    typography: {
      size: "large",
      weight: "bold",
    },
  },
};

export const CustomSeparator: Story = {
  args: {
    value: "2024.09.15",
    splitCharacter: ".",
    type: "entire",
    dateType: "date",
    typography: {
      size: "medium",
      weight: "regular",
    },
  },
};

export const NoInitialValue: Story = {
  args: {
    value: "",
    splitCharacter: ".",
    type: "entire",
    dateType: "date",
    typography: {
      size: "medium",
      weight: "regular",
    },
  },
};