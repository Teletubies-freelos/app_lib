import { cartClient } from "../modules"
import { setPriceTotalProducts, setTotalCountProducts } from "../observables"

export const poblateData = async ()=>{
  const [ initialPrce, inititalCount] = await Promise.all([
    cartClient.getTotalProductsPrice(),
    cartClient.getTotalCount()
  ])

  console.log(initialPrce,inititalCount )

  setPriceTotalProducts(initialPrce)
  setTotalCountProducts(inititalCount)
}