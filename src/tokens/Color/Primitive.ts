export const primitiveColors = {
  // Neutral (회색 계열)
  neutral: {
    50: '#F7F8F8',
    100: '#EDEEF1',
    200: '#D8DBDF',
    300: '#B6BAC3',
    400: '#8E95A2',
    500: '#6B7280',
    600: '#5B616E',
    700: '#4A4E5A',
    800: '#40444C',
    900: '#383A42',
    950: '#25272C', 
  },
  
  // Purple (보라 계열)
  purple: {
    50: '#EEF0FF',
    100: '#E0E4FF',
    200: '#C7CDFE',
    300: '#A5ACFC',
    400: '#8281F8',
    500: '#6E63F1',
    600: '#5E46E5',
    700: '#5138CA',
    800: '#4230A3',
    900: '#3E328C',
    950: '#231B4B',
  },
  
  // Red (빨간 계열)
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },
  
  // Green (녹색 계열)
  green: {
    50: '#ECFDF7',
    100: '#D1FAEC',
    200: '#A7F3DA',
    300: '#6EE7BF',
    400: '#34D39E',
    500: '#10B981',
    600: '#059666',
    700: '#047852',
    800: '#065F42',
    900: '#064E36',
    950: '#022C1E',
  },
  
  // Yellow (노란 계열)
  yellow: {
    50: '#FFF8EB',
    100: '#FEEAC7',
    200: '#FDD28A',
    300: '#FCBB4D',
    400: '#FBAB24',
    500: '#F59E0B',
    600: '#D98B06',
    700: '#B47409',
    800: '#92610E',
    900: '#78510F',
    950: '#452C03',
  },


  common: {
    0: '#FFFFFF', // white
    1000: '#000000', // black
  }
} as const;

export type PrimitiveColorScale = typeof primitiveColors;
export type ColorName = keyof PrimitiveColorScale;
export type ColorShade = keyof PrimitiveColorScale[ColorName];