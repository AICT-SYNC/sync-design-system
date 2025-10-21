import styled from "styled-components";
import { Font } from "@tokens/Font";
import { SelectItemSize } from "@foundation/Select";

interface SelectItemProps {
  $isSelected: boolean;
  $size: SelectItemSize;
}

export const SelectItem = styled.div<SelectItemProps>`
  padding: ${({ $size }) => {
    switch ($size) {
      case "L":
        return "8px 16px";
      case "M":
        return "6px 12px";
      case "S":
        return "6px 8px";
      case "XS":
        return "4px 8px";
      default:
        return "8px 16px";
    }
  }};
  
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme["text-black"]};
  cursor: pointer;
  background-color: ${(props) =>
    props.$isSelected
      ? props.theme["bg-primary"]
      : props.theme["static-white"]};
  transition: background-color 0.2s ease;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: ${({ theme }) => theme["bg-primary"]};
  }

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
`;
