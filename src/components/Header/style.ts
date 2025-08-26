import styled from "styled-components";
import { Font } from "../../tokens/Font";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
`;

export const OpenIconBox = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  height: 100%;
  cursor: pointer;
  padding-left: 1%;
`;

export const BackButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7%;
  height: 100%;
`;

export const NavigationButton = styled.div<{ enabled: boolean }>`
  cursor: ${(props) => (props.enabled ? "pointer" : "not-allowed")};
  opacity: ${(props) => (props.enabled ? 1 : 0.5)};
`;

export const PageBoxWrap = styled.div`
  display: flex;
  align-items: end;
  height: 100%;
  overflow-x: auto;
  flex: 1;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const TabBox = styled.div<{ isActive: boolean; isFirst: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  min-width: 150px;
  height: 100%;
  font-family: ${(props) =>
    props.isActive ? Font.label.label4_semiBold : Font.label.label4_Regular};
  color: ${(props) => (props.isActive ? props.theme['text-black'] : "inherit")};
  position: relative;
  cursor: pointer;
  padding: 0 8px;
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CloseIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme['background-secondary']};
  }
`;

export const PlusIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 95%;
  width: 30px;
  cursor: pointer;
`;

export const TabButton = styled.div<{ isActive: boolean; isHovered?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 3.52vh;
  padding: 0 12px;
  background-color: ${({ isActive, isHovered, theme }) => {
    if (isActive) return theme["header-tab-active"];
    if (isHovered) return theme["header-tab-active"];
    return theme["header-tab-not-active"];
  }};
  border-right: 2px solid ${({ theme }) => theme['border-light']};
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease;

  /* 활성 탭일 때 z-index를 높여서 경계선이 겹치지 않도록 */
  z-index: ${({ isActive }) => isActive ? 10 : 1};

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
    background-color: ${({ theme }) => theme['background-secondary']};
    color: ${({ theme }) => theme['text-black']};
  }
`;