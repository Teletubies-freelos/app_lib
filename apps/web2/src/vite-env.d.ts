/// <reference types="vite/client" />

import type { CartProductDAO } from "./data/CartProductDAO";
import type { GamesGraphQL } from "./services/Games";


declare global {
  interface Window{
    gamesClient: GamesGraphQL;
    cartClient: CartProductDAO;
  }
}
