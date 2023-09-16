import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import DataProvider from "../context/DataProvider";
import { games } from "../modules";
import { ThemeProvider } from "./theme";
import { CartProvider } from "../context/cartContext";

// import { fakeGameClient } from "../mockers/services/games";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  }
});

export default function Providers({ children }: PropsWithChildren) {

  return (
    <QueryClientProvider client={queryClient}>
     <ThemeProvider>
      <CartProvider>
        <DataProvider
          // gamesClient={fakeGameClient}
          gamesClient={games}
        >
          {children}
        </DataProvider>
      </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
