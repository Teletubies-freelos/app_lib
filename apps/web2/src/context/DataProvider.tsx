import { PropsWithChildren } from "react";
import { DataContext, IDataContext } from "./DataContext";

const DataProvider = ({
  children,
  gamesClient,
  openCartFloat,
  changeFloatCart,
}: PropsWithChildren<IDataContext>) => {
  return (
    <>
      <DataContext.Provider
        value={{ gamesClient, openCartFloat, changeFloatCart }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataProvider;
