import React from "react";
import { useDatePicker } from "./useDatePicker";
import { DAY } from "./constant";
import { Calendar as CalendarIcon } from "../../assets/icons";
import * as S from "./Calendar.style";

type DatePickerMode = "entire" | "future";

interface CalendarProps {
  value: string;
  splitCharacter?: string;
  onChange: (date: Date) => void;
  type?: DatePickerMode;
  size?: "medium" | "large";
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  splitCharacter = ".",
  onChange,
  type = "entire",
  size = "medium",
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
    if (type === "future") {
      const today = new Date();
      const currentDate = new Date(calendarDate.year, calendarDate.month - 1, day);
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
    <S.DatePickerContainer ref={containerRef}>
      <S.DatePickerWrap
        size={size}
        onClick={() => setFold(!fold)}
      >
        <S.DatePickerContent>
          <S.DatePickerIcon>
            <CalendarIcon size={24} />
          </S.DatePickerIcon>
          <S.DatePickerDate>
            {value ? formatDate(selectDate.year, selectDate.month, selectDate.day) : "연도.월.일"}
          </S.DatePickerDate>
        </S.DatePickerContent>
        <S.DatePickerDivider />
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
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </S.DatePickerCalendarHeaderArrowIcon>
              </S.DatePickerCalendarHeaderArrow>
              <S.DatePickerCalendarHeaderArrow
                onClick={() => onChangeCalendarMonth("next")}
              >
                <S.DatePickerCalendarHeaderArrowIcon>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
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

export default Calendar;