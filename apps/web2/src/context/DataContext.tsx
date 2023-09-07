import { createContext } from "react";
import { type Games } from "../services/Games";
import { games } from "../modules";

export interface IDataContext {
  gamesClient: Games;
  changeFloatCart: () => void;
  openCartFloat: boolean;
}

export const DataContext = createContext<IDataContext>({
  gamesClient: games,
  changeFloatCart: () => 5,
  openCartFloat: false,
});
