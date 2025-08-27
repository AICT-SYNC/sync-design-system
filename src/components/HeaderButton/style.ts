import styled from "styled-components";
import { Font } from "@tokens/Font";

export const TabButton = styled.div<{ $isActive: boolean; $isHovered?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 100%;
  padding: 0 12px;
  background-color: ${({ $isActive, $isHovered, theme }) => {
    if ($isActive) return theme["header-tab-active"];
    if ($isHovered) return theme["header-tab-active-hover"];
    return theme["header-tab-not-active"];
  }};
  border-right: 2px solid ${({ theme }) => theme['border-light']};
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease;

  /* 활성 탭일 때 z-index를 높여서 경계선이 겹치지 않도록 */
  z-index: ${({ $isActive }) => $isActive ? 10 : 1};

  /* 인접한 탭들과의 경계선 겹침 처리 */
  margin-left: -1px;

  &:first-child {
    margin-left: 0;
  }
`;

export const TabButtonText = styled.div`
  font-family: ${Font.label.label4_medium};
  color: ${({ theme }) => theme['text-black']};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

export const CloseIconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 12px;
  color: ${({ theme }) => theme['text-muted']};
  flex-shrink: 0;
  margin-left: 8px;

  &:hover {
    background-color: ${({ theme }) => theme['bg-secondary']};
    color: ${({ theme }) => theme['text-black']};
  }
`;