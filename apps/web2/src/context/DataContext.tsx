import { createContext } from "react";
import { games } from "../modules";
import { GamesGraphQL } from "../services/Games";

export interface IDataContext {
  gamesClient: GamesGraphQL;
}

export const DataContext = createContext<IDataContext>({
  gamesClient: games,
});
