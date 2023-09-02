"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import DataProvider from "../context/DataProvider";
import { fakeGameClient } from "../mockers/services/games";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "../../../packages/ui/src/theme/appGames";

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <DataProvider gamesClient={fakeGameClient}>{children}</DataProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
