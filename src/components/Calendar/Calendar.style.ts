import styled, { css } from "styled-components";
import { Font } from "../../tokens/Font";

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
  background-color: ${(props: any) => props.theme["static-white"]};
  transition: all 0.15s ease;
  font-family: ${Font.label.label1_semiBold.fontFamily};
  font-size: ${Font.label.label1_semiBold.fontSize};
  font-weight: ${Font.label.label1_semiBold.fontWeight};
  line-height: ${Font.label.label1_semiBold.lineHeight};
  padding: ${({ size }) => size === "large" ? "14px 20px" : "10px 16px"};
`;

export const DatePickerDate = styled.span`
  color: ${(props: any) => props.theme["text-black"]};
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
  color: ${(props: any) => props.theme["select-btn-false"]};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const DatePickerDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props: any) => props.theme["divider-archived"]};
`;

export const DatePickerCalendar = styled.div<{ x: number; y: number }>`
  width: 280px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${(props: any) => props.theme["static-white"]};
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  position: fixed;
  z-index: 1000;
  transform: translate(-50%, 8px);
  border: 1px solid ${(props: any) => props.theme["border-light"]};
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
  color: ${(props: any) => props.theme["text-black"]};
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
  color: ${(props: any) => props.theme["text-muted"]};
  transition: all 0.15s ease;
  
  &:hover {
    background-color: ${(props: any) => props.theme["background-secondary"]};
    color: ${(props: any) => props.theme["text-black"]};
  }
  
  &:active {
    background-color: ${(props: any) => props.theme["border-light"]};
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
  color: ${(props: any) => props.theme["text-muted"]};
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
  color: ${(props: any) => props.theme["text-black"]};
  background-color: transparent;

  ${({ isDisabled, isSelected, isToday }) => {
    if (isDisabled) {
      return css`
        color: ${(props: any) => props.theme["text-muted"]};
        cursor: not-allowed;
        
        &:hover {
          background-color: transparent;
        }
      `;
    }
    
    if (isSelected) {
      return css`
        background-color: ${(props: any) => props.theme["text-black"]};
        color: ${(props: any) => props.theme["static-white"]};
        font-weight: 500;
        
        &:hover {
          background-color: ${(props: any) => props.theme["text-secondary"]};
        }
      `;
    }
    
    if (isToday) {
      return css`
        background-color: ${(props: any) => props.theme["background-secondary"]};
        font-weight: 500;
        
        &:hover {
          background-color: ${(props: any) => props.theme["border-light"]};
        }
      `;
    }
    
    return css`
      &:hover {
        background-color: ${(props: any) => props.theme["background-secondary"]};
      }
      
      &:active {
        background-color: ${(props: any) => props.theme["border-light"]};
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