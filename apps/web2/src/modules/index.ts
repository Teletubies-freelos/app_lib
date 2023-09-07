import { Games } from "../services/Games";

import {  GraphQLClient } from 'graphql-request'

const headers = new Headers({
  "x-hasura-admin-secret": "XOp9ZBvpRmoexOWBS2BgG7ZHh526PEArnzdFzJX84vKOxiO6J16Tm9BGdSP0pEVr"

})

export const mainClient = new GraphQLClient('https://harmless-caiman-36.hasura.app/v1/graphql', {
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
