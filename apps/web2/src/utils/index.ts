import { cartClient } from '../modules';
import { setPriceTotalProducts, setTotalCountProducts } from '../observables';

export const poblateData = async () => {
  const [initialPrce, inititalCount] = await Promise.all([
    cartClient.getTotalProductsPrice(),
    cartClient.getTotalCount(),
  ]);

  setPriceTotalProducts(initialPrce);
  setTotalCountProducts(inititalCount);
};

export const objectToSession = (object: Record<string, string | number>) =>
  Object.keys(object).forEach((key) =>
    sessionStorage.setItem(key, String(object[key])),
  );

export const PAYMENT_METHODS = [
  { value: '1', label: 'Efectivo' },
  { value: '2', label: 'Transferencia' },
  { value: '3', label: 'Yape' },
  { value: '4', label: 'Plin' },
];

export const PRICE_DELIVERY = 20;
