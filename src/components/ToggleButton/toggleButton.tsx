import React, { useState } from 'react';
import * as S from './style';
import { ToggleButtonSize } from '../../foundation/ToggleButton';

interface ToggleButtonProps {
  options: string[];
  defaultSelected?: number;
  onChange?: (selectedIndex: number) => void;
  size?: ToggleButtonSize;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  options,
  defaultSelected = 0,
  onChange,
  size = ToggleButtonSize.L
}) => {
  
};