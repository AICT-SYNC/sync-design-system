import React from "react";
import styled, { css } from "styled-components";
import { lightColors } from "../../tokens/LightColors";
// import { Font } from "../../tokens/Font";

export type Badgerole = "Error" | "Warring" | "Success" | "Info";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "S" | "M" | "L";
  role?: Badgerole;
  count: number;
}

const StyledBadge = styled.div<{
  role: Badgerole;
  size: "S" | "M" | "L";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  padding: 0 8px;

  height: ${(props) => {
    switch (props.size) {
      case "S":
        return "20px";
      case "M":
        return "24px";
      case "L":
        return "28px";
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case "S":
        //   return `${lightColors["status-error"]}`;
        return "12px";
      case "M":
        return "14px";
      case "L":
        return "16px";
    }
  }};
  color: white;

  ${(props) =>
    props.role === "Error" &&
    css`
      background-color: ${lightColors["status-error"]};
    `}

  ${(props) =>
    props.role === "Warring" &&
    css`
      background-color: ${lightColors["status-warning"]};
    `}

    ${(props) =>
    props.role === "Success" &&
    css`
      background-color: ${lightColors["status-success"]};
    `}
    ${(props) =>
    props.role === "Info" &&
    css`
      background-color: ${lightColors["status-info"]};
    `}
`;

export const Badge: React.FC<BadgeProps> = ({
  size = "M",
  role = "Success",
  count,
  ...rest
}) => {
  const displayCount = count >= 1000 ? "999+" : count.toString();

  return (
    <StyledBadge role={role} size={size} {...rest}>
      {displayCount}
    </StyledBadge>
  );
};
