import { DefaultTheme } from "styled-components";
import { lightColors } from "../../tokens/Color/LightColors";
import { darkColors } from "../../tokens/Color/DarkColors"

export const SyncLightTheme: DefaultTheme = Object.freeze({
  ...lightColors,
});

export const SyncDarkTheme: DefaultTheme = Object.freeze({
  ...darkColors,
});
