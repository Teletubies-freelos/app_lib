import { useMutation } from "@tanstack/react-query"
import { purchase } from "../modules"
import { setPurchaseCode } from "../observables"

// TODO: pasar por argumetnos la data de la compra
const mutationFunction = async ()=>{
  const code = await purchase.savePurchase()

  setPurchaseCode(code)
}

export const usePurchase = ()=>{
  const mutateData = useMutation({
    mutationKey: ['purchase'],
    mutationFn: ()=> mutationFunction(),
    cacheTime: 0,
  })

  return mutateData
}
