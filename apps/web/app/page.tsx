"use client";

// eslint-disable-next-line import/no-unresolved
import { CardHero } from "@ui/src";
import { Box, Stack } from "@mui/material";
import { useGames } from "../hooks/useGames";
import { useMemo } from "react";
import CarouselHero from "../../../packages/ui/src/layout/CarouselHero";

const groupBy = (items: JSX.Element[], groupSize: number) => {
  const HeroItemsGroup: JSX.Element[][] = [];
  for (let i = 0; i < items.length; i += groupSize)
    HeroItemsGroup.push(items.slice(i, i + 3));

  return HeroItemsGroup;
};

export default function Page() {
  const { data } = useGames();

  const HeroItems = useMemo(
    () =>
      data?.map(({ imgUrl, description }) => (
        <CardHero
          key={imgUrl}
          alt=""
          image={imgUrl}
          description={description}
        />
      )) ?? [],
    [data],
  );

  const HeroItemsGroup = useMemo(
    () => groupBy(HeroItems ?? [], 3),
    [HeroItems],
  );

  return (
    <Box sx={{ width: "100%" }}>
      <CarouselHero sx={{ display: { md: "block", xs: "none" } }}>
        {HeroItemsGroup.map((items, index) => (
          <Stack gap={2} direction="row" key={index} justifyContent="center">
            {items}
          </Stack>
        ))}
      </CarouselHero>
      <CarouselHero sx={{ display: { md: "none", xs: "block" } }}>
        {HeroItems}
      </CarouselHero>
    </Box>
  );
}
