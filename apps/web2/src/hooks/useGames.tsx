import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useQuery } from '@tanstack/react-query';

export function useGames() {
  const { gamesClient } = useContext(DataContext);
  const queryData = useQuery({
    queryKey: ['games', 'list_games'],
    queryFn: () => gamesClient.getPaginatedGames(20, 0),
  });

  return queryData;
}
