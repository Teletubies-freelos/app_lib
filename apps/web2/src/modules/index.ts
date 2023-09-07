import { Games } from "../services/Games";

import { GraphQLClient } from 'graphql-request'

const headers = new Headers({
  "x-hasura-admin-secret": import.meta.env.VITE_HASURA_SECRET
})

export const mainClient = new GraphQLClient(import.meta.env.VITE_HASURA_BASE_URL, {
  headers
});

export const games = new Games(mainClient);

declare global {
  interface Window{
    gamesClient: Games;
  }
}

if(import.meta.env.DEV)
  window.gamesClient = games;
