import { lightColors } from "../../tokens/LightColors";

export type SyncTheme = {
  [K in keyof typeof lightColors]: string;
};

export type ThemeMode = "light" | "dark";