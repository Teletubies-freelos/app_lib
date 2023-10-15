import { createContext } from "react";
import { categories, games } from "../modules";
import { GamesGraphQL } from "../services/Games";
import { CategoriesGraphQL } from "../services/Categories";

export interface IDataContext {
  gamesClient: GamesGraphQL;
  categoriesClient: CategoriesGraphQL;
}

export const DataContext = createContext<IDataContext>({
  gamesClient: games,
  categoriesClient: categories,
});
