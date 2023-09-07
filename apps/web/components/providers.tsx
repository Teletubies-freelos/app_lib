"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import DataProvider from "../context/DataProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "../../../packages/ui/src";
import { games } from "../modules";

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  const [openCartFloat, setOpenCartFloat] = useState(false);
  const changeFloatCart = () => {
    setOpenCartFloat(!openCartFloat);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <DataProvider
          gamesClient={games}
          openCartFloat={openCartFloat}
          changeFloatCart={changeFloatCart}
        >
          {children}
        </DataProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
