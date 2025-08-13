import React from "react";
import styled, { css } from "styled-components";
import { Calendar as CalendarIcon } from "../../assets/icons/calendar";

type sizeType =
  | "medium"
  | "large";

interface CalendarProps {
  size?: sizeType;
}

const StyledCalendar = styled.div<CalendarProps>`
  
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #e0e0e0;
  margin: 0 8px;
`;

export const Calendar:React.FC<CalendarProps> = ({size = "medium"}) => {
  return (
    <StyledCalendar size={size}>
      
      <CalendarIcon color="gray" />
      <Divider />
    </StyledCalendar>
  );
}