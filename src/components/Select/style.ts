import styled from "styled-components";
import { Font } from "@tokens/Font";
import { SelectSize } from "@foundation/Select";

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  width: fit-content;
`;

interface SelectButtonProps {
  $isOpen: boolean;
  $size: SelectSize;
}

export const SelectButton = styled.button<SelectButtonProps>`
  padding: ${({ $size }) => {
    switch ($size) {
      case "L":
        return "8px 16px";
      case "M":
        return "8xp 12px";
      case "S":
        return "8px 12px";
      case "XS":
        return "8px 12px";
      default:
        return "8px 16px";
    }
  }};;

  background-color: ${(props) =>
    props.$isOpen
      ? props.theme["action-secondary"]
      : props.theme["static-white"]};
  border: 1px solid
    ${(props) =>
      props.$isOpen
        ? props.theme["action-primary"]
        : props.theme["border-light"]};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ $size }) => {
    switch ($size) {
      case "L":
        return `
          font: ${Font.label.label1_semiBold};
        `;
      case "M":
        return `
          font: ${Font.label.label2_semiBold};
        `;
      case "S":
        return `
          font: ${Font.label.label3_semiBold};
        `;
      case "XS":
        return `
          font: ${Font.label.label4_semiBold};
        `;
      default:
        return "";
    }
  }};

  &:hover {
    background-color: ${(props) =>
      props.$isOpen
        ? props.theme["action-secondary"]
        : props.theme["bg-primary"]};
    border-color: ${(props) =>
      props.$isOpen
        ? props.theme["action-primary"]
        : props.theme["border-medium"]};
  }
`;

export const SelectText = styled.span`
  color: ${({ theme }) => theme["text-black"]};
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface SelectIconProps {
  $isOpen: boolean;
}

export const SelectIcon = styled.div<SelectIconProps>`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;

  svg {
    width: 100%;
    height: 100%;
    color: ${(props) =>
      props.$isOpen
        ? props.theme["action-primary"]
        : props.theme["text-muted"]};
    transition: color 0.2s ease;
  }
`;

export const SelectList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme["static-white"]};
  border: 1px solid ${({ theme }) => theme["border-light"]};
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 2px;
  max-height: 200px;
  overflow-y: auto;
`;
