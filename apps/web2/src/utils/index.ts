import { cartClient } from "../modules";
import { setPriceTotalProducts, setTotalCountProducts } from "../observables";

export const poblateData = async () => {
  const [initialPrce, inititalCount] = await Promise.all([
    cartClient.getTotalProductsPrice(),
    cartClient.getTotalCount(),
  ]);

  setPriceTotalProducts(initialPrce);
  setTotalCountProducts(inititalCount);
};


export const objectToSession = (object: Record<string, string | number>)=>Object
  .keys(object)
  .forEach((key)=> sessionStorage.setItem(key, String(object[key])))
