import { useContext, useMemo } from 'react';
import { Maybe } from '../types';
import {
  GetNextPageParamFunction,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { IOffer } from '../types/games';
import { DataContext } from '../context/DataContext';
import { CardProductProps } from '../../../../packages/ui/src/molecules/CardProduct';
import { useCategoryIdSelected } from '../observables';

const serialiceGames = ({
  name = '',
  description = '',
  image_url: src = '',
  price = 0,
  price_offer = 0,
  category_id,
}: IOffer) => ({
  description,
  price: price_offer || price,
  previousPrice: price_offer && price,
  src,
  alt: name,
  title: name,
  category_id
});

const getNextPage: GetNextPageParamFunction<IOffer[]> = (_lastPage, pages) => {
  return pages.length * 10;
};

export const useProducts = () => {
  const { gamesClient } = useContext(DataContext);

  const query = useInfiniteQuery({
    queryKey: ['list_games'],
    queryFn: ({ pageParam = 0 }) =>
      gamesClient.getPaginatedGames(20, pageParam),
    getNextPageParam: getNextPage,
  });

  const products: Maybe<CardProductProps[]> = useMemo(
    () => query.data?.pages.flat().map(serialiceGames),
    [query.data?.pages],
  );

  return {
    ...query,
    products,
  };
};


export const useFiltedProducts = () => {
  const { gamesClient } = useContext(DataContext);
  const id = useCategoryIdSelected();

  const query = useInfiniteQuery(
    ['products', id],
    async () =>
      await gamesClient?.getFilterdProducts({
        filters: {
          categoryId: id,
        },
        pagination: {
          limit: 100,
        },
      }),
    {
      cacheTime: Number.MAX_VALUE,
      staleTime: Number.MAX_VALUE,
    },
  );

  const products: Maybe<CardProductProps[]> = useMemo(
    () => query.data?.pages.flat().map(serialiceGames),
    [query.data?.pages],
  );

  return {
    ...query,
    products
  };
};