import { CartIcon, MainLogo } from "../../../../../packages/ui/src";
import { useCart } from "../../hooks/useCart";
import { GeneralLayout } from "../../layout/GeneralLayout";
import NavBar from "../../../../../packages/ui/src/molecules/NavBar";
import { Link } from "react-router-dom";
import NavLinks from "../../components/NavLinks";
import OrderStatus from "../../components/OrderStatus";

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
            <Link to="/">
              <MainLogo />
            </Link>
          }
          onSearch={() => 3}
        />
      }
    >
      <OrderStatus />
    </GeneralLayout>
  );
}
