import { GamesGraphQL } from "../services/Games";

import { GraphQLClient } from 'graphql-request'

const headers = new Headers({
  "x-hasura-admin-secret": import.meta.env.VITE_HASURA_SECRET
})

export const mainClient = new GraphQLClient(import.meta.env.VITE_HASURA_BASE_URL, {
  headers
});

export const games = new GamesGraphQL(mainClient);

declare global {
  interface Window{
    gamesClient: GamesGraphQL;
  }
}

if(import.meta.env.DEV)
  window.gamesClient = games;
