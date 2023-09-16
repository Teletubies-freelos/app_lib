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
