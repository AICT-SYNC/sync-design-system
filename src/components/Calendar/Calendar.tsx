import React from "react";
import { useDatePicker } from "./useDatePicker";
import { DAY } from "./constant";
import * as S from "./style";
import { SyncIcon, SyncIcons } from "../../assets/icons/SyncIcons";
import { DatePickerVariant, CalendarSize } from "../../foundation";
import { Divider } from "../Divider";
import { Thin } from "../Divider/Divider.stories";

interface CalendarProps {
  value: string;
  splitCharacter?: string;
  onChange: (date: Date) => void;
  type?: DatePickerVariant;
  size?: CalendarSize;
}

export const Calendar: React.FC<CalendarProps> = ({
  value,
  splitCharacter = ".",
  onChange,
  type = DatePickerVariant.entire,
  size = CalendarSize.M,
}) => {
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

  const formatDate = (year: number, month: number, day: number) => {
    const formattedMonth = month.toString().padStart(2, "0");
    const formattedDay = day.toString().padStart(2, "0");
    return `${year}${splitCharacter}${formattedMonth}${splitCharacter}${formattedDay}`;
  };

  const isDisabled = (day: number) => {
    if (type === DatePickerVariant.future) {
      const today = new Date();
      const currentDate = new Date(
        calendarDate.year,
        calendarDate.month - 1,
        day
      );
      return currentDate < today;
    }
    return false;
  };

  const isSelected = (day: number) => {
    return (
      selectDate.year === calendarDate.year &&
      selectDate.month === calendarDate.month &&
      selectDate.day === day
    );
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getFullYear() === calendarDate.year &&
      today.getMonth() + 1 === calendarDate.month &&
      today.getDate() === day
    );
  };

  return (
    <S.DatePickerContainer ref={containerRef} size={size}>
      <S.DatePickerWrap onClick={() => setFold(!fold)}>
        <S.DatePickerContent>
          <S.DatePickerIcon>
            <SyncIcon name={SyncIcons.CalendarDays} size={24} />
          </S.DatePickerIcon>
          <S.DatePickerDate>
            {value
              ? formatDate(selectDate.year, selectDate.month, selectDate.day)
              : "연도.월.일"}
          </S.DatePickerDate>
        </S.DatePickerContent>
        <Divider widthProps={"100%"} Size={"Thin"} />
      </S.DatePickerWrap>

      {!fold && (
        <>
          <S.DatePickerOverlay onClick={() => setFold(true)} />
          <S.DatePickerCalendar x={calendarCoord.x} y={calendarCoord.y + 40}>
            <S.DatePickerCalendarHeader>
              <S.DatePickerHeaderTitle>
                {calendarDate.year}년 {calendarDate.month}월
              </S.DatePickerHeaderTitle>
              <S.DatePickerHeaderContect>
                <S.DatePickerCalendarHeaderArrow
                  onClick={() => onChangeCalendarMonth("prev")}
                >
                  <S.DatePickerCalendarHeaderArrowIcon>
                    <SyncIcon name={SyncIcons.ChevronLeft} size={14} />
                  </S.DatePickerCalendarHeaderArrowIcon>
                </S.DatePickerCalendarHeaderArrow>
                <S.DatePickerCalendarHeaderArrow
                  onClick={() => onChangeCalendarMonth("next")}
                >
                  <S.DatePickerCalendarHeaderArrowIcon>
                    <SyncIcon name={SyncIcons.ChevronRight} size={14} />
                  </S.DatePickerCalendarHeaderArrowIcon>
                </S.DatePickerCalendarHeaderArrow>
              </S.DatePickerHeaderContect>
            </S.DatePickerCalendarHeader>

            <S.DatePickerCalendarHeaderDayWrap>
              {DAY.map((day) => (
                <S.DatePickerCalendarHeaderDayItem key={day}>
                  {day}
                </S.DatePickerCalendarHeaderDayItem>
              ))}
            </S.DatePickerCalendarHeaderDayWrap>

            <S.DatePickerCalendarItemWrap>
              {dayList.map((day, index) =>
                day === 0 ? (
                  <div key={index} style={{ height: "32px" }} />
                ) : (
                  <S.DatePickerCalendarItem
                    key={index}
                    isDisabled={isDisabled(day)}
                    isSelected={isSelected(day)}
                    isToday={isToday(day)}
                    onClick={() => !isDisabled(day) && onChangeSelectDate(day)}
                  >
                    {day}
                  </S.DatePickerCalendarItem>
                )
              )}
            </S.DatePickerCalendarItemWrap>
          </S.DatePickerCalendar>
        </>
      )}
    </S.DatePickerContainer>
  );
};
