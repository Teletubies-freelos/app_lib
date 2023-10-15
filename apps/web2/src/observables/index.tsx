
import { bind } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"
import { CardProductProps } from "../../../../packages/ui/src/molecules/CardProduct";
import { Maybe } from "../types";

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

export const [isPaymentData$, setIsPaymentData] = createSignal<boolean | undefined>();
export const [useIsPaymentDataOpen, isPaymentDataOpen$] = bind(isPaymentData$, false);

export const [isConfirmedOrder$, setIsConfirmedOrder] = createSignal<boolean | undefined>();
export const [useIsConfirmedOrderOpen, isConfirmedOrderOpen$] = bind(isConfirmedOrder$, false);

export const [isConfirmedStore$, setIsConfirmedStore] = createSignal<boolean | undefined>();
export const [useIsConfirmedStoreOpen, isConfirmedStoreOpen$] = bind(isConfirmedStore$, false);

export const [purchaseCode$, setPurchaseCode] = createSignal<string>();
export const [usePurchaseCode, purchaseCodeDefault$] = bind(purchaseCode$, '');

export const [isProductDetail$, setIsProductDetail] = createSignal<boolean | undefined>();
export const [useIsProductDetailOpen, isProductDetailOpen$] = bind(isProductDetail$, false);

export const [productDetail$, setProductDetail] = createSignal<Maybe<CardProductProps>>();
export const [useProductDetail, productDetailDefault$] = bind(productDetail$, null);

export const [anchorElMenu$, setAnchorElMenu] = createSignal<null | HTMLElement>();
export const [useAnchorElMenu, anchorElMenuDefault$] = bind(anchorElMenu$, null);

export const [categoryIdSelected$, setCategoryIdSelected] = createSignal<number>();
export const [useCategoryIdSelected, categoryIdSelectedDefault$] = bind(categoryIdSelected$, 0);
