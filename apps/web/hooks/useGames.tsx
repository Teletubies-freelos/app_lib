import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GamesFilter } from "../services/Games";

interface IOptions {
  queryKey?: string[];
  keepPreviousData?: boolean;
}

export function useGames(filter?: GamesFilter, options?: IOptions) {
  const { gamesClient } = useContext(DataContext);
  const queryData = useQuery({
    queryFn: () => gamesClient.getMainOffers(filter),
    ...options,
  });

  return queryData;
}

export function useInfiniteGames() {
  const { gamesClient } = useContext(DataContext);
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 1 }) =>
      gamesClient.getMainOffers({ page: pageParam }),
  });

  return { ...rest, data: data?.pages?.flat() ?? [] };
}
