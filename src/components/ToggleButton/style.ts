import styled from 'styled-components';
import { Font } from '@tokens/Font';
import { ToggleButtonSize } from '@foundation/ToggleButton';

interface ToggleContainerProps {
  $size: ToggleButtonSize;
}

interface ToggleOptionProps {
  $isSelected: boolean;
  $size: ToggleButtonSize;
}

// 높이 사이즈 맵 추가
const HeightSizeMap = {
  L: { size: '51px' },
  M: { size: '45px' },
  SM: { size: '40px' },
  S: { size: '34px' }
} as const;

export const ToggleContainer = styled.div<ToggleContainerProps>`
  display: flex;
  background-color: ${({ theme }) => theme['bg-secondary']};
  border-radius: 8px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme['border-light']};
  gap: 2px;
  width: fit-content;
`;

export const ToggleOption = styled.button<ToggleOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 6px;
  
  ${({ $size }) => {
    const fontStyle = $size === 'L' 
       ? Font.label.label2_semiBold 
       : Font.label.label4_semiBold;
           
    const padding = $size === 'L' ? '8px 16px' : '6px 12px';
             
    return `
      font-family: ${fontStyle.fontFamily};
      font-size: ${fontStyle.fontSize};
      font-weight: ${fontStyle.fontWeight};
      line-height: ${fontStyle.lineHeight};
      font-style: ${fontStyle.fontStyle};
      padding: ${padding};
      min-height: ${HeightSizeMap[$size].size};
    `;
  }};

  background-color: ${({ $isSelected, theme }) =>
     $isSelected ? theme['action-secondary'] : 'transparent'
  };
     
  color: ${({ $isSelected, theme }) =>
     $isSelected ? theme['action-primary'] : theme['text-muted']
  };

  box-shadow: ${({ $isSelected }) =>
     $isSelected ? `0 1px 2px rgba(0, 0, 0, 0.1)` : 'none'
  };
  border: 1px solid ${({ $isSelected, theme }) =>
     $isSelected ? theme['action-primary'] : 'FFFFF'
  };

  &:hover {
    background-color: ${({ $isSelected, theme }) =>
       $isSelected ? theme['action-secondary'] : theme['bg-hover']
    };
         
    color: ${({ $isSelected, theme }) =>
       $isSelected ? theme['text-black'] : theme['text-black']
    };
  }

  &:active {
    transform: scale(0.98);
  }
`;