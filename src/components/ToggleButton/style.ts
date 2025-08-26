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