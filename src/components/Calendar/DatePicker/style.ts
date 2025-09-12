import styled, { css } from "styled-components";
import { Font } from "@tokens/Font";

export const DatePickerCalendar = styled.div<{ x: number; y: number }>`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme["static-white"]};
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  position: fixed;
  z-index: 1000;
  transform: translate(-50%, 8px);
  border: 1px solid ${({ theme }) => theme["border-calendar-DatePicker"]};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  font: ${Font.label.label1_semiBold};
`;

export const DatePickerCalendarHeader = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DatePickerHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme["text-black"]};
  user-select: none;
`;

export const DatePickerHeaderContect = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DatePickerCalendarHeaderArrow = styled.button`
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme["calendar-hover-bg"]};
  }

  &:active {
    background-color: ${({ theme }) => theme["calendar-active-bg"]};
  }
`;

export const DatePickerCalendarHeaderArrowIcon = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const DatePickerCalendarHeaderDayWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 8px;
`;

export const DatePickerCalendarHeaderDayItem = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${Font.label.label4_medium};
  color: ${({ theme }) => theme["text-secondary"]};
  text-transform: uppercase;
  user-select: none;
`;

export const DatePickerCalendarItemWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;

export const DatePickerCalendarItem = styled.button<{
  isDisabled: boolean;
  isSelected: boolean;
  isToday?: boolean;
}>`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${Font.label.label2_Regular};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
  color: ${({ theme }) => theme["text-black"]};
  background-color: transparent;

  ${({ isDisabled, isSelected, isToday }) => {
    if (isDisabled) {
      return css`
        color: ${({ theme }) => theme["calendar-disabled-text"]};
        cursor: not-allowed;

        &:hover {
          background-color: transparent;
        }
      `;
    }

    if (isSelected) {
      return css`
        background-color: ${({ theme }) => theme["calendar-date-selected"]};
        color: ${({ theme }) => theme["static-white"]};
        font: ${Font.label.label2_semiBold};

        &:hover {
          background-color: ${({ theme }) => theme["calendar-date-selected-hover"]};
        }
      `;
    }

    if (isToday) {
      return css`
        background-color: ${({ theme }) => theme["calendar-today-bg"]};
        font: ${Font.label.label2_semiBold};

        &:hover {
          background-color: ${({ theme }) => theme["calendar-active-bg"]};
        }
      `;
    }

    return css`
      &:hover {
        background-color: ${({ theme }) => theme["calendar-hover-bg"]};
      }

      &:active {
        background-color: ${({ theme }) => theme["calendar-active-bg"]};
      }
    `;
  }}
`;

export const DatePickerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  background-color: transparent;
`;
