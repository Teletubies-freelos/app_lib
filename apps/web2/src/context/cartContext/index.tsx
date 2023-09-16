import { PropsWithChildren, createContext, useCallback, useEffect, useRef } from "react";
import { isWishList$, priceTotalProducts$, setIsWishList, setPriceTotalProducts, setTotalCountProducts, totalCountProducts$ } from "../../observables";

export const cartContext = createContext({handleOnClick:(_price:number,_count:number)=>{}})

export const CartProvider = ({children}:PropsWithChildren)=>{

  const isOpenRef = useRef<boolean | undefined>(false)
  const countRef = useRef<number>(0)
  const priceRef = useRef<number>(0)

    useEffect(()=>{
        const subscriptionWishList = isWishList$.subscribe((next)=> isOpenRef.current = next)
        const subscriptionTotalCount = totalCountProducts$.subscribe((next)=> countRef.current = next)
        const subscriptionTotalPrice = priceTotalProducts$.subscribe((next)=> priceRef.current = next)
        return ()=> {
          subscriptionWishList.unsubscribe()
          subscriptionTotalCount.unsubscribe()
          subscriptionTotalPrice.unsubscribe()
        }
      },[])

      const handleOnClick = useCallback((price:number,count = 1)=>{
        console.log('%c priceRef.current :', 'background-color:#048A81', priceRef.current,price);
        setIsWishList(!isOpenRef.current)
        isOpenRef.current = !isOpenRef.current
        setTotalCountProducts(countRef.current + count)
        setPriceTotalProducts(priceRef.current + price)
      },[isOpenRef.current ])

    return(
        <cartContext.Provider value={{handleOnClick}}>
            {children}
        </cartContext.Provider>
    )
}
