import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { SyncLightTheme, SyncDarkTheme } from "./SyncTheme";

export interface SyncThemeProviderProps {
  children: ReactNode;
  theme: "light" | "dark";
}

export const SyncThemeProvider = ({
  children,
  theme,
}: SyncThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme === "light" ? SyncLightTheme : SyncDarkTheme}>
      {children}
    </ThemeProvider>
  );
};