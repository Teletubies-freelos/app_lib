import { useContext, useMemo } from "react";
import { Maybe } from "../types";
import { GetNextPageParamFunction, useInfiniteQuery } from "@tanstack/react-query";
import { IOffer } from "../types/games";
import { DataContext } from "../context/DataContext";
import { CardProductProps } from "../../../../packages/ui/src/molecules/CardProduct";

const serialiceGames = ({
  name = '',
  description = '',
  img_url: src = '',
  price = 0
}: IOffer)=> (
  {
    description, 
    price, 
    src, 
    alt:name, 
    title:name 
  }
)

const getNextPage: GetNextPageParamFunction<IOffer[]> = (_lastPage, pages)=>{

  return pages.length*10
}

export const useProducts = ()=>{
  const { gamesClient } = useContext(DataContext);

  const query = useInfiniteQuery({
    queryKey: ["list_games"],
    queryFn: ({pageParam = 0}) => gamesClient
      .getPaginatedGames({paginated: { limit: 10, offset: pageParam}}),
    getNextPageParam: getNextPage
  })

  const products: Maybe<CardProductProps[]> = useMemo(
    ()=> 
      query.data?.pages.flat().map(serialiceGames) , 
      [query.data?.pages]
    )

    return {
      ...query,
      products
    }
}
