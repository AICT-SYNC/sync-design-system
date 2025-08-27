import { DefaultTheme } from "styled-components";
import { lightColors, darkColors } from "../../tokens";

export const SyncLightTheme: DefaultTheme = Object.freeze({
  ...lightColors,
});

export const SyncDarkTheme: DefaultTheme = Object.freeze({
  ...darkColors,
});
