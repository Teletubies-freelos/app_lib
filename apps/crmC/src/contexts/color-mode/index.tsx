import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider } from "@mui/material/styles";
import { RefineThemes } from "@refinedev/mui";
import { defaultTheme } from "../../../../../packages/ui/src";
import { darkTheme } from "../../../../../packages/ui/src/theme/appGames";
import { CssBaseline, GlobalStyles } from "@mui/material";

type ColorModeContextType = {
  mode: string;
  setMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const colorModeFromLocalStorage = localStorage.getItem("colorMode");
  const isSystemPreferenceDark = window?.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const systemPreference = isSystemPreferenceDark ? "dark" : "light";
  const [mode, setMode] = useState(
    colorModeFromLocalStorage || systemPreference
  );

  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

 
  const value = useMemo(()=>({
    setMode: () => {
      if (mode === "light") {
        setMode("dark");
      } else {
        setMode("light");
      }
    },
    mode
  }), [])

  return (
    <ColorModeContext.Provider
      value={value}
    >
      <ThemeProvider
        theme={mode === "light" ? defaultTheme : darkTheme}
      >
        <CssBaseline />
        <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
