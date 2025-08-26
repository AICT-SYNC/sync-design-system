import styled from 'styled-components';
import { Font } from '../../tokens/Font';
import { ToggleButtonSize } from '../../foundation/ToggleButton';

interface ToggleContainerProps {
  $size: ToggleButtonSize;
}

interface ToggleOptionProps {
  $isSelected: boolean;
  $size: ToggleButtonSize;
}

export const ToggleContainer = styled.div<ToggleContainerProps>`
  display: flex;
  background-color: ${({ theme }) => theme['background-secondary']};
  border-radius: 8px;
  padding: 4px;
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
    const fontStyle = $size === 'large' 
      ? Font.label.label2_semiBold 
      : Font.label.label4_semiBold;
      
    const padding = $size === 'large' ? '8px 16px' : '6px 12px';
    const height = $size === 'large' ? '36px' : '28px';
        
    return `
      font-family: ${fontStyle.fontFamily};
      font-size: ${fontStyle.fontSize};
      font-weight: ${fontStyle.fontWeight};
      line-height: ${fontStyle.lineHeight};
      font-style: ${fontStyle.fontStyle};
      padding: ${padding};
      min-height: ${height};
    `;
  }};

  background-color: ${({ $isSelected, theme }) => 
    $isSelected ? theme['static-white'] : 'transparent'
  };
  
  color: ${({ $isSelected, theme }) => 
    $isSelected ? theme['text-black'] : theme['text-muted']
  };

  box-shadow: ${({ $isSelected, theme }) => 
    $isSelected ? `0 1px 2px ${theme['shadow-light']}` : 'none'
  };

  &:hover {
    background-color: ${({ $isSelected, theme }) => 
      $isSelected ? theme['static-white'] : theme['background-primary']
    };
    
    color: ${({ $isSelected, theme }) => 
      $isSelected ? theme['text-black'] : theme['text-default']
    };
  }

  &:active {
    transform: scale(0.98);
  }
`;
