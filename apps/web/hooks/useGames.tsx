import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useQuery } from "@tanstack/react-query";

export function useGames() {
  const { gamesClient } = useContext(DataContext);
  const queryData = useQuery({
    queryKey: ["games"],
    queryFn: () => gamesClient.getMainOffers(),
  });

  return queryData;
}
