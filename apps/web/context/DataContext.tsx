"use client";
import { createContext } from "react";
import { type Games } from "../services/Games";
import { games } from "../modules";

export interface IDataContext {
  gamesClient: Games;
}

export const DataContext = createContext<IDataContext>({
  gamesClient: games,
});
