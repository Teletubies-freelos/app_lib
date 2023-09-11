/// <reference types="vite/client" />

import type { GamesGraphQL } from "./services/Games";


declare global {
  interface Window{
    gamesClient: GamesGraphQL;
  }
}
