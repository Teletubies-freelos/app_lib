import { useContext } from "react";
import { DataContext } from "../context/DataContext";

interface IUseCart {
  openCartFloat: boolean;
  changeFloatCart: () => void;
}

export function useCart(): IUseCart {
  const { openCartFloat, changeFloatCart } = useContext(DataContext);
  return { openCartFloat, changeFloatCart };
}
