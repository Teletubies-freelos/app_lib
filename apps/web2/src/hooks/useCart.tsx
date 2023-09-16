import { useContext } from "react";
import { DataContext } from "../context/DataContext";

interface IUseCart {
  openCart: boolean;
  onAddElement: () => void;
}

export function useCart(): IUseCart {
  const { openCart, onAddElement } = useContext(DataContext);
  return { openCart, onAddElement };
}
