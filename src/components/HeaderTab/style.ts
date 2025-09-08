import styled from "styled-components";
import { Font } from "@tokens/Font";

export const TabButton = styled.div<{
  $isActive: boolean;
  $isHovered?: boolean;
  $isLast?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 140px;
  height: 100%;
  padding: 0 12px;
  background-color: ${({ $isActive, $isHovered, theme }) => {
    if ($isActive) return theme["header-tab-active"];
    if ($isHovered) return theme["layout-actived-header-hover-bg"];
    return theme["header-tab-not-active"];
  }};
  border-right: ${({ $isLast, theme }) =>
    $isLast ? `1px solid ${theme["border-light"]}` : "none"};
  border-left: 1px solid ${({ theme }) => theme["border-light"]};
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease;

  /* 활성 탭일 때 z-index를 높여서 경계선이 겹치지 않도록 */
  z-index: ${({ $isActive }) => ($isActive ? 10 : 1)};
`;

export const TabButtonText = styled.div`
  font-family: ${Font.label.label4_medium};
  color: ${({ theme }) => theme["text-black"]};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

export const CloseIconButton = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.2s ease, transform 0.2s ease, background-color 0.2s ease;
  animation: fadeInScale 0.2s ease forwards;

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:hover {
    background-color: ${({ theme, $isActive }) =>
      $isActive
        ? theme["layout-actived-header-hover-bg"]
        : theme["layout-header-hover-bg"]};
  }
`;
