import { useQuery } from "@tanstack/react-query";
import { cartClient } from "../modules";

export const useGetIndexedDb= ()=>{
  const dataPrice = useQuery({
    queryKey: ['total'],
    queryFn: ()=> cartClient.getTotalProductsPrice(),
    cacheTime: 0,
    staleTime: 0
  })

  const dataProducts = useQuery({
    queryKey: ['products'],
    queryFn:()=> cartClient.getProducts(),
    cacheTime: 0,
    staleTime: 0
  })

  return {
    dataPrice,
    dataProducts
  }

}
