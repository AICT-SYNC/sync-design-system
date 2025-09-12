import * as S from "./style";
import { DAY } from "./constant";
import { SyncIcon, SyncIcons } from "@assets/icons/SyncIcons";
import { DatePickerVariant } from "@foundation";
import { useTheme } from "styled-components";

interface DatePickerProps {
  setFold: (fold: boolean) => void;
  calendarCoord: { x: number; y: number };
  selectDate: { year: number; month: number; day: number };
  onChangeSelectDate: (day: number) => void;
  calendarDate: { year: number; month: number };
  dayList: number[];
  onChangeCalendarMonth: (direction: "prev" | "next") => void;
  type?: DatePickerVariant;
  baseDate?: Date;
  minDate?: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  setFold,
  calendarCoord,
  selectDate,
  onChangeSelectDate,
  calendarDate,
  dayList,
  onChangeCalendarMonth,
  type,
  baseDate,
  minDate,
}) => {
  const theme = useTheme();
  const isDisabled = (day: number) => {
    const currentDate = new Date(
      calendarDate.year,
      calendarDate.month - 1,
      day
    );

    if (type === DatePickerVariant.future) {
      const referenceDate = baseDate || new Date();
      return currentDate < referenceDate;
    }

    if (minDate) {
      return currentDate < minDate;
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
    <>
      <S.DatePickerOverlay onClick={(e) => { e.stopPropagation(); setFold(true); }} />
      <S.DatePickerCalendar 
        x={calendarCoord.x} 
        y={calendarCoord.y + 40}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <S.DatePickerCalendarHeader>
          <S.DatePickerHeaderTitle>
            {calendarDate.year}년 {calendarDate.month}월
          </S.DatePickerHeaderTitle>
          <S.DatePickerHeaderContect>
            <S.DatePickerCalendarHeaderArrow
              onClick={() => onChangeCalendarMonth("prev")}
            >
              <S.DatePickerCalendarHeaderArrowIcon>
                <SyncIcon
                  name={SyncIcons.ChevronLeft}
                  size={14}
                  color={theme["select-btn-false"]}
                />
              </S.DatePickerCalendarHeaderArrowIcon>
            </S.DatePickerCalendarHeaderArrow>
            <S.DatePickerCalendarHeaderArrow
              onClick={() => onChangeCalendarMonth("next")}
            >
              <S.DatePickerCalendarHeaderArrowIcon>
                <SyncIcon
                  name={SyncIcons.ChevronRight}
                  size={14}
                  color={theme["select-btn-false"]}
                />
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
  );
};
