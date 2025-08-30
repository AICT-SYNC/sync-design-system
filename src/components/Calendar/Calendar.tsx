import React from "react";
import { useTheme } from "styled-components";
import * as S from "./style";
import { SyncIcon, SyncIcons } from "@assets/icons/SyncIcons";
import { DatePickerVariant, CalendarSize } from "@foundation";
import { Divider } from "../Divider";
import { DatePicker, useDatePicker } from "./DatePicker";
import { formatDate } from "./formatDate";

interface CalendarProps {
  value: string;
  splitCharacter?: string;
  onChange: (date: Date) => void;
  type?: DatePickerVariant;
  size?: CalendarSize;
  baseDate?: Date;
}

export const Calendar: React.FC<CalendarProps> = ({
  value,
  splitCharacter = ".",
  onChange,
  type = DatePickerVariant.entire,
  size = CalendarSize.M,
  baseDate,
}) => {
  const theme = useTheme();
  const {
    fold,
    setFold,
    containerRef,
    calendarCoord,
    selectDate,
    onChangeSelectDate,
    calendarDate,
    dayList,
    onChangeCalendarMonth,
  } = useDatePicker({
    value,
    splitCharacter,
    onChange,
    type,
  });

  return (
    <S.DatePickerContainer ref={containerRef} size={size}>
      <S.DatePickerWrap onClick={() => setFold(!fold)}>
        <S.DatePickerContent>
          <S.DatePickerIcon>
            <SyncIcon name={SyncIcons.CalendarDays} size={24} color={theme["select-btn-false"]}/>
          </S.DatePickerIcon>
          <S.DatePickerDate>
            {value
              ? formatDate(
                  selectDate.year,
                  selectDate.month,
                  selectDate.day,
                  splitCharacter
                )
              : "연도.월.일"}
          </S.DatePickerDate>
        </S.DatePickerContent>
        <Divider widthProps={"100%"} Size={"Thin"} />
      </S.DatePickerWrap>

      {!fold && (
        <DatePicker
          setFold={setFold}
          calendarCoord={calendarCoord}
          selectDate={selectDate}
          onChangeSelectDate={onChangeSelectDate}
          calendarDate={calendarDate}
          dayList={dayList}
          onChangeCalendarMonth={onChangeCalendarMonth}
          type={type}
          baseDate={baseDate}
        />
      )}
    </S.DatePickerContainer>
  );
};
