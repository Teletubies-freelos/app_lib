import { useCallback, useEffect, useRef, useState } from "react";
import { setIsCartShop, useTotalCountProducts, isCartShop$ } from "../observables";
import { CartIcon } from "../../../../packages/ui/src";
import { cartClient } from "../modules";

 const CartIconReactive = () => {
    const totalCount = useTotalCountProducts();
    const [initialTotalCount, setInitialTotalCount] = useState(totalCount)
    
    const isOpenRef = useRef<boolean | undefined>(false)

    useEffect(()=>{
      const subscription = isCartShop$.subscribe((next)=> isOpenRef.current = next)

      if(!totalCount)
        cartClient.getTotalCount().then( setInitialTotalCount)

      return ()=> subscription.unsubscribe()
    },[])

    const handleOnClick = useCallback(()=>{
      setIsCartShop(!isOpenRef.current)
      isOpenRef.current = !isOpenRef.current
  
    },[isOpenRef.current ])

    return(
      <CartIcon onClick={handleOnClick} qty={totalCount || initialTotalCount} size="medium" />
    )
}

export default CartIconReactive
