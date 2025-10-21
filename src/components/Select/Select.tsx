import React, { useState, useRef, useEffect } from "react";
import * as S from "./style";
import { ChevronDown } from "lucide-react";
import { SelectSize, SelectItemSize } from "@foundation/Select";
import { SelectItem } from "./SelectItem";

interface SelectProps {
  options: string[];
  defaultSelected?: number;
  placeholder?: string;
  onChange?: (selectedValue: string, selectedIndex: number) => void;
  size?: SelectSize;
  itemSize?: SelectItemSize;
}

export const Select: React.FC<SelectProps> = ({
  options,
  defaultSelected = -1,
  placeholder = "선택하세요",
  onChange,
  size = SelectSize.L,
  itemSize = SelectItemSize.L
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(defaultSelected);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(false);
    onChange?.(options[index], index);
  };

  return (
    <S.SelectContainer ref={selectRef}>
      <S.SelectButton onClick={handleToggle} $isOpen={isOpen} $size={size}>
        <S.SelectText>
          {selectedIndex >= 0 ? options[selectedIndex] : placeholder}
        </S.SelectText>
        <S.SelectIcon $isOpen={isOpen}>
          <ChevronDown />
        </S.SelectIcon>
      </S.SelectButton>

      {isOpen && (
        <S.SelectList>
          {options.map((option, index) => (
            <SelectItem
              key={index}
              onClick={() => handleSelect(index)}
              isSelected={index === selectedIndex}
              size={itemSize}
            >
              {option}
            </SelectItem>
          ))}
        </S.SelectList>
      )}
    </S.SelectContainer>
  );
};
