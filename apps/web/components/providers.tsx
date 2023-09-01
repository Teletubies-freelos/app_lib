"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import DataProvider from "../context/DataProvider";
import { fakeGameClient } from "../mockers/services/games";

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider gamesClient={fakeGameClient}>{children}</DataProvider>
    </QueryClientProvider>
  );
}
