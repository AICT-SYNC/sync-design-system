import styled, { css } from "styled-components";
import { Font } from "../../tokens/Font";
import { CalendarSize } from "../../foundation/Calendar";

export const DatePickerContainer = styled.div<{ size: CalendarSize }>`
  position: relative;
  display: inline-block;
  padding: ${({ size }) =>
    size === CalendarSize.L ? "14px 20px" : "10px 16px"};
`;

export const DatePickerWrap = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-sizing: border-box;
  position: relative;
  background-color: ${({ theme }) => theme["static-white"]};
  transition: all 0.15s ease;
  font: ${Font.label.label1_semiBold};
`;

export const DatePickerDate = styled.span`
  background-color: ${({ theme }) => theme["text-black"]};
  font: ${Font.label.label1_semiBold};
  user-select: none;
`;

export const DatePickerContent = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
`;

export const DatePickerIcon = styled.div`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme["select-btn-false"]};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;