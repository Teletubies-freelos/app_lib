"use client";
import { CardHero } from "ui";
import { Box } from "@mui/material";
import { useGames } from "../hooks/useGames";
import ResponsiveCarousel from "../components/responsiveCarousel";

const render = ({ imgUrl, description }) => (
  <CardHero
    key={imgUrl}
    alt=""
    image={imgUrl}
    description={description}
  />
)

export default function Page() {
  const { data } = useGames();

  return (
    <Box sx={{ width: "100%" }}>
     <ResponsiveCarousel data={data ?? []} itemRender={render}/>
    </Box>
  );
}
