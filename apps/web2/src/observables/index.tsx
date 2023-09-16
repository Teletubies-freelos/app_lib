
import { bind } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"

export const [totalCountProducts$, setTotalCountProducts] = createSignal<number>();
export const [useTotalCountProducts, totalCountProductsItems$] = bind(totalCountProducts$, 0);

export const [priceTotalProducts$, setPriceTotalProducts] = createSignal<number>();
export const [usePriceTotalProducts, priceTotalProductsItems$] = bind(priceTotalProducts$, 0);

export const [isWishList$, setIsWishList] = createSignal<boolean | undefined>();
export const [useIsWishListOpen, isWishListOpen$] = bind(isWishList$, false);

export const [isCartShop$, setIsCartShop] = createSignal<boolean | undefined>();
export const [useIsCartShopOpen, isCartShowOpen$] = bind(isCartShop$, false);

export const [isPickupStore$, setIsPickupStore] = createSignal<boolean | undefined>();
export const [useIsPickupStoreOpen, isPickupStoreOpen$] = bind(isPickupStore$, false);

export const [isYourData$, setIsYourData] = createSignal<boolean | undefined>();
export const [useIsYourDataOpen, isYourDataOpen$] = bind(isYourData$, false);
