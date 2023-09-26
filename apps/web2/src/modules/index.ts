import { GraphQLClient } from 'graphql-request';
import { GamesGraphQL } from '../services/Games';
import { CartProductDAO } from '../data/CartProductDAO';
import { appGamesDbSingleton } from '../data';
import ShortUniqueId from 'short-unique-id';
import { PurchaseGraphql } from '../services/Purchase';

const headers = new Headers({
  'x-hasura-admin-secret': import.meta.env.VITE_HASURA_SECRET,
});

export const mainClient = new GraphQLClient(
  import.meta.env.VITE_HASURA_BASE_URL,
  {
    headers,
  },
);

export const games = new GamesGraphQL(mainClient);

export const cartClient = new CartProductDAO(appGamesDbSingleton);

export const uuidGenerator = new ShortUniqueId({ length: 10 });

export const purchase = new PurchaseGraphql(mainClient);

if (import.meta.env.DEV) {
  window.gamesClient = games;
  window.cartClient = cartClient;
}
