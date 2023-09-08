import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";
import DataProvider from "../context/DataProvider";
import { games } from "../modules";
import { ThemeProvider } from "./theme";
// import { fakeGameClient } from "../mockers/services/games";


const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
  const [openCartFloat, setOpenCartFloat] = useState(false);
  const changeFloatCart = () => {
    setOpenCartFloat(!openCartFloat);
  };

  return (
    <QueryClientProvider client={queryClient}>
     <ThemeProvider>
        <DataProvider
          // gamesClient={fakeGameClient}
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
