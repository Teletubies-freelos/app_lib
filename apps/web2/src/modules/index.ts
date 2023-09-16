import { GraphQLClient } from 'graphql-request'
import { GamesGraphQL } from '../services/Games';
import { CartProductDAO } from '../data/CartProductDAO';
import { appGamesDbSingleton } from '../data';

const headers = new Headers({
  "x-hasura-admin-secret": import.meta.env.VITE_HASURA_SECRET
})

export const mainClient = new GraphQLClient(import.meta.env.VITE_HASURA_BASE_URL, {
  headers
});

export const games = new GamesGraphQL(mainClient);

export const cartClient = new CartProductDAO(appGamesDbSingleton)

if(import.meta.env.DEV){
  window.gamesClient = games;
  window.cartClient = cartClient;
}
