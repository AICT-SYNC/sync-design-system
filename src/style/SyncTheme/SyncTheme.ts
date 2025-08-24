import { DefaultTheme } from "styled-components";
import { lightColors } from "../../tokens/LightColors";
import { darkColors } from "../../tokens/DarkColors";

export const SyncLightTheme: DefaultTheme = Object.freeze({
  ...lightColors,
});

export const SyncDarkTheme: DefaultTheme = Object.freeze({
  ...darkColors,
});