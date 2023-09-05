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
import { Box, Stack } from "@mui/material";
import { useGames } from "../hooks/useGames";
import ResponsiveCarousel from "../components/responsiveCarousel";
import ProductsList from "../components/productList";
import { sxInnerStack } from "./styles";

const render = ({ imgUrl, description }) => (
  <CardHero key={imgUrl} alt="" image={imgUrl} description={description} />
);

export default function Page() {
  const { data } = useGames();

  return (
    <Box sx={{ width: "100%", padding: "1rem 0" }}>
      <NavBar
        onSearch={() => 5}
        cartComponent={<CartIcon size="medium" qty={2} onClick={() => 6} />}
      />
      <ResponsiveCarousel data={data ?? []} itemRender={render} />
      <Stack
        direction="row"
        gap={{ sm: 6 }}
        justifyContent={{ xs: "space-evenly", sm: "center" }}
        sx={sxInnerStack}
      >
        <PlayStation4Logo sx={{ margin: " 0 !important" }} />
        <PlayStation5Logo sx={{ margin: " 0 !important" }} />
        <NintendoLogo sx={{ margin: " 0 !important" }} />
        <XboxLogo sx={{ margin: " 0 !important" }} />{" "}
      </Stack>
      <ProductsList />
    </Box>
  );
}
