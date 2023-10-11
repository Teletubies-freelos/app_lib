


import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DataContext } from '../context/DataContext';

export function useCategories() {
  const { categoriesClient } = useContext(DataContext);
  
  const queryData = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoriesClient?.list({ limit: 10, offset: 0, orderBy: 'desc' })
  });

  return queryData;
}
