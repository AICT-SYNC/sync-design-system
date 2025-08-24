import { lightColors } from './LightColors';
import { darkColors } from './DarkColors';
import { primitiveColors } from './Primitive';

// primitive colors도 함께 export
export { primitiveColors };

// lightColor 와 darkColors 통합 export 파일
export const semanticColors = {
  light: lightColors,
  dark: darkColors,
} as const;

export type Theme = 'light' | 'dark';
export type ColorKey = keyof typeof lightColors;

export const getSemanticColor = (theme: Theme, colorKey: ColorKey): string => {
  return semanticColors[theme][colorKey];
};

// primitive 컬러 직접 접근을 위한 헬퍼 함수
export const getPrimitiveColor = (color: keyof typeof primitiveColors, shade: number): string => {
  const colorScale = primitiveColors[color];
  if (typeof colorScale === 'object' && shade in colorScale) {
    return colorScale[shade as keyof typeof colorScale];
  }
  return '';
};

// 자주 사용하는 primitive 컬러들을 바로 접근할 수 있게
export const colors = {
  // semantic colors (테마별)
  semantic: semanticColors,
  
  // primitive colors (직접 접근)
  primitive: primitiveColors,
  
  // 자주 사용하는 컬러들 (shorthand)
  neutral: primitiveColors.neutral,
  purple: primitiveColors.purple,
  red: primitiveColors.red,
  green: primitiveColors.green,
  yellow: primitiveColors.yellow,
  common: primitiveColors.common,
} as const;

export { lightColors, darkColors };

// 타입 export
export type PrimitiveColorScale = typeof primitiveColors;
export type ColorName = keyof PrimitiveColorScale;
export type ColorShade = keyof PrimitiveColorScale[ColorName];