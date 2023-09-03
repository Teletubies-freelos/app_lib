// @ts-nocheck
"use client";
import {
  CartIcon,
  NavBar,
  NintendoLogo,
  PlayStation4Logo,
  PlayStation5Logo,
  XboxLogo,
} from "ui";
import { Box, Stack } from "@mui/material";
import ResponsiveCarousel from "../../../packages/ui/src/molecules/ResponsiveCarouselHero";
import { sxInnerStack } from "./styles";
import { useGames } from "../hooks/useGames";
import { carouseItem } from "../components/carouseltem";
import dynamic from "next/dynamic";

const LazyProductList = dynamic(() => import("../components/productList"), {
  ssr: false,
});

export default function Page() {
  const { data } = useGames(undefined, { queryKey: ["games"] });

  return (
    <Stack spacing={6} sx={{ width: "100%" }}>
      {/* TODO: moverlo a un layout NavBar + wsp */}
      <NavBar cartComponent={<CartIcon />} onSearch={() => 5} />
      <Box sx={{ width: "100%", marginTop: "2.4rem" }}>
        <ResponsiveCarousel items={data} renderItem={carouseItem} />
      </Box>
      <Stack
        direction="row"
        gap={{ sm: 6 }}
        justifyContent={{ xs: "space-evenly", sm: "center" }}
        sx={sxInnerStack}
      >
        <PlayStation4Logo sx={{ margin: " 0 !important" }} />
        <PlayStation5Logo sx={{ margin: " 0 !important" }} />
        <NintendoLogo sx={{ margin: " 0 !important" }} />
        <XboxLogo sx={{ margin: " 0 !important" }} />
      </Stack>
      <LazyProductList />
    </Stack>
  );
}
