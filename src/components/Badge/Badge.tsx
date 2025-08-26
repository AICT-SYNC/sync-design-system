import React from "react";
import styled, { css } from "styled-components";
import { BadgeRole, BadgeSize } from "../../foundation/Badge";
import { Font } from "../../tokens/Font";

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
  min-width: 36px;

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
  font: ${(props) => {
    switch (props.size) {
      case BadgeSize.S:
        return Font.label.label3_semiBold;
      case BadgeSize.M:
        return Font.label.label2_semiBold;
      case BadgeSize.L:
        return Font.label.label1_semiBold;
    }
  }};
  color: white;

  ${(props) =>
    props.role === BadgeRole.Error &&
    css`
      background-color: ${({ theme }) => theme["status-error"]};
    `}

  ${(props) =>
    props.role === BadgeRole.Warning &&
    css`
      background-color: ${({ theme }) => theme["status-warning"]};
    `}

    ${(props) =>
    props.role === BadgeRole.Success &&
    css`
      background-color: ${({ theme }) => theme["status-success"]};
    `}

    ${(props) =>
    props.role === BadgeRole.Info &&
    css`
      background-color: ${({ theme }) => theme["status-info"]};
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
