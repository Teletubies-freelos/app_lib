import { useCallback, useEffect, useRef } from "react";
import { setIsCartShop, useTotalCountProducts, isCartShop$ } from "../observables";
import { CartIcon } from "../../../../packages/ui/src";

 const CartIconReactive = () => {
    const totalCount = useTotalCountProducts();
    const isOpenRef = useRef<boolean | undefined>(false)

    useEffect(()=>{
      const subscription = isCartShop$.subscribe((next)=> isOpenRef.current = next)
      return ()=> subscription.unsubscribe()
    },[])

    const handleOnClick = useCallback(()=>{
      setIsCartShop(!isOpenRef.current)
      isOpenRef.current = !isOpenRef.current
    },[isOpenRef.current ])

    return(
      <CartIcon onClick={handleOnClick} qty={totalCount} size="medium" />
    )
}

export default CartIconReactive
