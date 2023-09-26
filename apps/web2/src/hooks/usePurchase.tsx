import { useMutation } from '@tanstack/react-query';
import { purchase } from '../modules';
import { setPurchaseCode } from '../observables';
import { SavePurchasePayload } from '../services/Purchase';

// TODO: pasar por argumetnos la data de la compra
const mutationFunction = async (payload: SavePurchasePayload) => {
  const code = await purchase.savePurchase(payload);

  setPurchaseCode(code);
};

export const usePurchase = () => {
  const mutateData = useMutation({
    mutationKey: ['purchase'],
    mutationFn: (payload: SavePurchasePayload) => mutationFunction(payload),
    cacheTime: 0,
  });

  return mutateData;
};
