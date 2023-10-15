import { PropsWithChildren } from "react";
import { DataContext, IDataContext } from "./DataContext";

const DataProvider = ({
  children,
  ...rest
}: PropsWithChildren<IDataContext>) => {

  return (
      <DataContext.Provider
        value={{ ...rest }}
      >
        {children}
      </DataContext.Provider>
  );
};

export default DataProvider;
