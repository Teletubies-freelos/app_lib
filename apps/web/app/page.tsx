"use client";
import {
  CardHero,
  CartIcon,
  MainLogo,
  NintendoLogo,
  PlayStation4Logo,
  PlayStation5Logo,
  XboxLogo,
} from "ui";
import NavBar from "../../../packages/ui/src/molecules/NavBar";
import type { SxProps } from "@mui/material";
import { Stack } from "@mui/material";
import { useGames } from "../hooks/useGames";
import ResponsiveCarousel from "../components/responsiveCarousel";
import ProductsList from "../components/productList";
import { GeneralLayout } from "../layout/GeneralLayout";
import { sxInnerStack } from "./styles";
import { useCart } from "../hooks/useCart";
import NavLinks from "../components/NavLinks";
import Link from "next/link";

const render = ({ imgUrl, description }) => (
  <CardHero alt="" description={description} image={imgUrl} key={imgUrl} />
);

export default function Page() {
  const { data } = useGames();
  const { changeFloatCart } = useCart();
  const noMargin: SxProps = { margin: "0 !important" };

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
