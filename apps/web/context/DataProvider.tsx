import { PropsWithChildren } from "react";
import { DataContext, IDataContext } from "./DataContext";

const DataProvider = ({
  children,
  gamesClient,
}: PropsWithChildren<IDataContext>) => {
  return (
    <>
      <DataContext.Provider value={{ gamesClient }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataProvider;
