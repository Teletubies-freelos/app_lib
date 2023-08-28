import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.3rem",
    },
    h3: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "0.75rem",
    },
    body2: {
      color: "#444",
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#7339FF",
    },
    background: {
      default: "white",
      paper: "#EEF2FF",
    },
    text: {
      primary: "#545454",
      secondary: "#737373",
    },
    action: {
      active: "#7339FF",
    },
    warning: {
      main: "#B88700",
    },
    success: {
      main: "#0A801F",
    },
    error: {
      main: "#DD1D1D",
    },
    info: {
      main: "#1773B0",
    },
  },
});
