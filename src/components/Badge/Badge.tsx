import React from "react";
import styled, { css } from "styled-components";
import { lightColors } from "../../tokens/LightColors";
// import { Font } from "../../tokens/Font";

export type BadgeVariant = "Error" | "Warring" | "Success" | "Info";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "small" | "medium" | "large";
  variant?: BadgeVariant;
  count: number;
}

const StyledBadge = styled.div<{
  variant: BadgeVariant;
  size: "small" | "medium" | "large";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  padding: 0 8px;

  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "20px";
      case "medium":
        return "24px";
      case "large":
        return "28px";
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        //   return `${lightColors["status-error"]}`;
        return "12px";
      case "medium":
        return "14px";
      case "large":
        return "16px";
    }
  }};
  color: white;

  ${(props) =>
    props.variant === "Error" &&
    css`
      background-color: ${lightColors["status-error"]};
    `}

  ${(props) =>
    props.variant === "Warring" &&
    css`
      background-color: ${lightColors["status-warning"]};
    `}

    ${(props) =>
    props.variant === "Success" &&
    css`
      background-color: ${lightColors["status-success"]};
    `}
    ${(props) =>
    props.variant === "Info" &&
    css`
      background-color: ${lightColors["status-info"]};
    `}
`;

export const Badge: React.FC<BadgeProps> = ({
  size = "medium",
  variant = "Success",
  count,
  ...rest
}) => {
  const displayCount = count >= 1000 ? "999+" : count.toString();

  return (
    <StyledBadge variant={variant} size={size} {...rest}>
      {displayCount}
    </StyledBadge>
  );
};
