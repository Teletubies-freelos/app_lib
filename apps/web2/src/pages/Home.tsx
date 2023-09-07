import { Link } from "react-router-dom";
import {
  CardHero,
  CartIcon,
  MainLogo,
  NavBar,
  NintendoLogo,
  PlayStation4Logo,
  PlayStation5Logo,
  XboxLogo,
} from "../../../../packages/ui/src";
import { GeneralLayout } from "../layout/GeneralLayout";
import ResponsiveCarousel from "../components/ResponsiveCarousel";
import { Stack, SxProps } from "@mui/material";
import ProductsList from "../components/ProductList";
import { useCart } from "../hooks/useCart";
import NavLinks from "../components/NavLinks";
import { useGames } from "../hooks/useGames";
import { sxInnerStack } from "./styles";

interface IRender {
  imgUrl: string;
  description: string;
}

const noMargin: SxProps = { margin: "0 !important" };

const render = ({ imgUrl, description }: IRender) => (
  <CardHero alt="" description={description} image={imgUrl} key={imgUrl} />
);

export default function Home() {
  const { data } = useGames();
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
      <ResponsiveCarousel data={data ?? []} itemRender={render} />
      <Stack
        direction="row"
        gap={{ sm: 6 }}
        justifyContent={{ xs: "space-evenly", sm: "center" }}
        sx={sxInnerStack}
      >
        <PlayStation4Logo sx={noMargin} />
        <PlayStation5Logo sx={noMargin} />
        <NintendoLogo sx={noMargin} />
        <XboxLogo sx={noMargin} />{" "}
      </Stack>
      <ProductsList />
    </GeneralLayout>
  );
}
