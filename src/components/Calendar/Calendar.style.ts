import styled, { css } from "styled-components";
import { Font } from "../../tokens/Font";
import { lightColors } from "../../tokens/semantic";


export const DatePickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DatePickerWrap = styled.div<{ size: "medium" | "large" }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-sizing: border-box;
  position: relative;
  background-color: #ffffff;
  transition: all 0.15s ease;
  font-family: ${Font.label.label1_semiBold.fontFamily};
  font-size: ${Font.label.label1_semiBold.fontSize};
  font-weight: ${Font.label.label1_semiBold.fontWeight};
  line-height: ${Font.label.label1_semiBold.lineHeight};
  padding: ${({ size }) => size === "large" ? "14px 20px" : "10px 16px"};
`;

export const DatePickerDate = styled.span`
  color: ${lightColors['text-black']};
  font-weight: 400;
  user-select: none;
`;

export const DatePickerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DatePickerIcon = styled.div`
  width: 24px;
  height: 24px;
  color: ${lightColors['select-btn-false']};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const DatePickerDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${lightColors['divider-archived']};
`;

export const DatePickerCalendar = styled.div<{ x: number; y: number }>`
  width: 280px;
  padding: 16px;
  border-radius: 12px;
  background-color: #ffffff;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  position: fixed;
  z-index: 1000;
  transform: translate(-50%, 8px);
  border: 1px solid #e1e5e9;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  font-family: ${Font.label.label1_semiBold.fontFamily};
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
  font-size: ${Font.label.label1_semiBold.fontSize};
  font-weight: ${Font.label.label1_semiBold.fontWeight};
  color: #1a1a1aff;
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
  color: #6b7280;
  transition: all 0.15s ease;
  
  &:hover {
    background-color: #f3f4f6;
    color: #1a1a1a;
  }
  
  &:active {
    background-color: #e5e7eb;
  }
`;

export const DatePickerCalendarHeaderArrowIcon = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
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
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
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
  font-size: 14px;
  font-weight: 400;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
  color: #1a1a1a;
  background-color: transparent;

  ${({ isDisabled, isSelected, isToday }) => {
    if (isDisabled) {
      return css`
        color: #d1d5db;
        cursor: not-allowed;
        
        &:hover {
          background-color: transparent;
        }
      `;
    }
    
    if (isSelected) {
      return css`
        background-color: #1a1a1a;
        color: #ffffff;
        font-weight: 500;
        
        &:hover {
          background-color: #374151;
        }
      `;
    }
    
    if (isToday) {
      return css`
        background-color: #f3f4f6;
        font-weight: 500;
        
        &:hover {
          background-color: #e5e7eb;
        }
      `;
    }
    
    return css`
      &:hover {
        background-color: #f3f4f6;
      }
      
      &:active {
        background-color: #e5e7eb;
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
  z-index: 999;
  background-color: transparent;
`;