import { PropsWithChildren } from "react";
import { DataContext, IDataContext } from "./DataContext";
import { games } from "../modules";

const DataProvider = ({ children }: PropsWithChildren<IDataContext>) => {
  return (
    <>
      <DataContext.Provider value={{ gamesClient: games }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataProvider;
