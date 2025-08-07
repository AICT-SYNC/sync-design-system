export const primitiveColors = {
  // Neutral (회색 계열)
  neutral: {
    50: '#F7F8F8',
    100: '#EDEEF1',
    200: '#D8DBDF',
    300: '#B6BAC3',
    400: '#8E95A2',
    500: '#6B7280',
    600: '#',
    700: '#',
    800: '#',
    900: '#',
    950: '#', 
  },
  
  // Purple (보라 계열)
  purple: {
    50: '#',
    100: '#',
    200: '#',
    300: '#',
    400: '#',
    500: '#',
    600: '#',
    700: '#',
    800: '#',
    900: '#',
    950: '#',
  },
  
  // Red (빨간 계열)
  red: {
    50: '#',
    100: '#',
    200: '#',
    300: '#',
    400: '#',
    500: '#',
    600: '#',
    700: '#',
    800: '#',
    900: '#',
    950: '#',
  },
  
  // Green (녹색 계열)
  green: {
    50: '#',
    100: '#',
    200: '#',
    300: '#',
    400: '#',
    500: '#',
    600: '#',
    700: '#',
    800: '#',
    900: '#',
    950: '#',
  },
  
  // Yellow (노란 계열)
  yellow: {
    50: '#',
    100: '#',
    200: '#',
    300: '#',
    400: '#',
    500: '#',
    600: '#',
    700: '#',
    800: '#',
    900: '#',
    950: '#',
  }
} as const;

export type PrimitiveColorScale = typeof primitiveColors;
export type ColorName = keyof PrimitiveColorScale;
export type ColorShade = keyof PrimitiveColorScale[ColorName];