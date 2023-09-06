"use client";
import {
  CardHero,
  NintendoLogo,
  PlayStation4Logo,
  PlayStation5Logo,
  XboxLogo,
} from "ui";
import NavBar from "../../../packages/ui/src/molecules/NavBar";
import CartIcon from "../../../packages/ui/src/atoms/CartIcon";
import { Stack } from "@mui/material";
import { useGames } from "../hooks/useGames";
import ResponsiveCarousel from "../components/responsiveCarousel";
import ProductsList from "../components/productList";
import { sxInnerStack } from "./styles";
import { GeneralLayout } from "../layout/GeneralLayout";

const render = ({ imgUrl, description }) => (
  <CardHero key={imgUrl} alt="" image={imgUrl} description={description} />
);

export default function Page() {
  const { data } = useGames();

  const noMargin = { margin: "0 !important" };

  return (
    <GeneralLayout
      navbar={
        <NavBar
          onSearch={() => 5}
          cartComponent={<CartIcon size="medium" qty={2} onClick={() => 6} />}
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
