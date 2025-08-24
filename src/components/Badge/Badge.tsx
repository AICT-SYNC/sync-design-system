import React from "react";
import styled, { css } from "styled-components";
import { lightColors } from "../../tokens/semantic";
import { BadgeRole, BadgeSize } from "../../foundation/Badge";
// import { Font } from "../../tokens/Font";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: BadgeSize;
  role?: BadgeRole;
  count: number;
}

const StyledBadge = styled.div<{
  role: BadgeRole;
  size: BadgeSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  padding: 0 8px;

  height: ${(props) => {
    switch (props.size) {
      case BadgeSize.S:
        return "20px";
      case BadgeSize.M:
        return "24px";
      case BadgeSize.L:
        return "28px";
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case BadgeSize.S:
        //   return `${lightColors["status-error"]}`;
        return "12px";
      case BadgeSize.M:
        return "14px";
      case BadgeSize.L:
        return "16px";
    }
  }};
  color: white;

  ${(props) =>
    props.role === BadgeRole.Error &&
    css`
      background-color: ${lightColors["status-error"]};
    `}

  ${(props) =>
    props.role === BadgeRole.Warning &&
    css`
      background-color: ${lightColors["status-warning"]};
    `}

    ${(props) =>
    props.role === BadgeRole.Success &&
    css`
      background-color: ${lightColors["status-success"]};
    `}
    ${(props) =>
    props.role === BadgeRole.Info &&
    css`
      background-color: ${lightColors["status-info"]};
    `}
`;

export const Badge: React.FC<BadgeProps> = ({
  size = BadgeSize.M,
  role = BadgeRole.Success,
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
