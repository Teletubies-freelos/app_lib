import { CartIcon, MainLogo } from "../../../../../packages/ui/src";
import { GeneralLayout } from "../../layout/GeneralLayout";
import NavBar from "../../../../../packages/ui/src/molecules/NavBar";
import { Link } from "react-router-dom";
import NavLinks from "../../components/NavLinks";
import OrderStatus from "../../components/OrderStatus";
import { setIsCartShop } from "../../observables";

export default function Page() {
  return (
    <GeneralLayout
      navBar={
        <NavBar
          cartComponent={
            <CartIcon onClick={()=> setIsCartShop(true)} qty={2} size="medium" />
          }
          navigatorLinks={<NavLinks />}
          mainLogo={
            <Link to="/">
              <MainLogo />
            </Link>
          }
        />
      }
    >
      <OrderStatus />
    </GeneralLayout>
  );
}
