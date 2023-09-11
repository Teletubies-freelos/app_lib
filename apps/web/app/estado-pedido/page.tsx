"use client";
import { CartIcon, MainLogo } from "ui";
import OrderSearch from "../../components/OrderSearch";
import { useCart } from "../../hooks/useCart";
import { GeneralLayout } from "../../layout/GeneralLayout";
import NavBar from "../../../../packages/ui/src/molecules/NavBar";
import Link from "next/link";
import NavLinks from "../../components/NavLinks";

export default function Page() {
  const { changeFloatCart } = useCart();

  return (
    <GeneralLayout
      navBar={
        <NavBar
          cartComponent={
            <CartIcon onClick={changeFloatCart} qty={2} size="medium" />
          }
          navigatorLinks={<NavLinks />}
          mainLogo={
            <Link href="/">
              <MainLogo />
            </Link>
          }
        />
      }
    >
      <OrderSearch />
    </GeneralLayout>
  );
}
