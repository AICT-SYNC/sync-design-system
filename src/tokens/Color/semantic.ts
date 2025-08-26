import { lightColors } from "./LightColors";
import { darkColors } from "./DarkColors";

// lightColor 와 darkColors 통합 expot 파일
export const semanticColors = {
  light: lightColors,
  dark: darkColors,
} as const;

export type Theme = "light" | "dark";
export type ColorKey = keyof typeof lightColors & keyof typeof darkColors;

export const getSemanticColor = (theme: Theme, colorKey: ColorKey): string => {
  return semanticColors[theme][colorKey];
};

export { lightColors, darkColors };
