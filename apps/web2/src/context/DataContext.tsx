import { createContext } from 'react';
import { games } from '../modules';
import { GamesGraphQL } from '../services/Games';
import { PurchaseGraphql } from '../services/Purchase';

export interface IDataContext {
  gamesClient: GamesGraphQL;
  ordersClient: PurchaseGraphql;
}

export const DataContext = createContext<IDataContext>({
  gamesClient: games,
});
