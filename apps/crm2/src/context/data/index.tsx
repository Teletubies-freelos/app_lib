import { PropsWithChildren, createContext } from "react";
import { type Products } from "../../services/products";
import { type Orders } from "../../services/orders";



export const dataContext = createContext<Partial<DataProviderProps>>({})

interface DataProviderProps{
  products: Products;
  orders: Orders;
}

export const DataProvider = ({children, ...rest}: PropsWithChildren<DataProviderProps>)=>{
  return (<dataContext.Provider value={rest}>
    {children}
  </dataContext.Provider>)
}
