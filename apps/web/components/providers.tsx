"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import DataProvider from "../context/DataProvider";
import { fakeGameClient } from "../mockers/services/games";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "../../../packages/ui/src";

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <DataProvider gamesClient={fakeGameClient}>{children}</DataProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
