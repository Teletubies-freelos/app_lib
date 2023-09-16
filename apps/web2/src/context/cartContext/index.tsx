import {
  PropsWithChildren,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  isWishList$,
  priceTotalProducts$,
  setIsWishList,
  setPriceTotalProducts,
  setTotalCountProducts,
  totalCountProducts$,
} from "../../observables";
import { poblateData } from "../../utils";
import { CircularProgress } from "@mui/material";

export const cartContext = createContext({
  handleOnClick: (_price: number, _count?: number, _is?: boolean) => {},
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const isOpenRef = useRef<boolean | undefined>(false);
  const countRef = useRef<number>(0);
  const priceRef = useRef<number>(0);

  useEffect(() => {
    const subscriptionWishList = isWishList$.subscribe((next) => {
      isOpenRef.current = next;
    });
    const subscriptionTotalCount = totalCountProducts$.subscribe((next) => {
      countRef.current = next;
    });
    const subscriptionTotalPrice = priceTotalProducts$.subscribe(
      (next) => (priceRef.current = next),
    );

    poblateData().then(() => setIsLoading(false));

    return () => {
      subscriptionWishList.unsubscribe();
      subscriptionTotalCount.unsubscribe();
      subscriptionTotalPrice.unsubscribe();
    };
  }, []);

  const handleOnClick = (
    price: number,
    count = 1,
    isGoingToOpenWish = true,
  ) => {
    if (isGoingToOpenWish) {
      setIsWishList(!isOpenRef.current);
      isOpenRef.current = !isOpenRef.current;
    }

    setTotalCountProducts(countRef.current + count);
    setPriceTotalProducts(priceRef.current + price);
  };

  return (
    <cartContext.Provider value={{ handleOnClick }}>
      {isLoading ? <CircularProgress /> : children}
    </cartContext.Provider>
  );
};
