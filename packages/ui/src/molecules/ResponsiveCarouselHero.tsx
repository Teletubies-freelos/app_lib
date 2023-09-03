import { Stack } from "@mui/material";
import CarouselHero from "../layout/CarouselHero";
import { useMemo } from "react";

interface ResponsiveCarouselProps<T> {
  items?: T[];
  renderItem(item: T): JSX.Element;
  groupSize?: number;
}

function groupBy<T>(items: T[], groupSize: number) {
  const HeroItemsGroup: T[][] = [];
  for (let i = 0; i < items.length; i += groupSize)
    HeroItemsGroup.push(items.slice(i, i + 3));

  return HeroItemsGroup;
}

export default function ResponsiveCarousel<T>({
  items,
  renderItem,
  groupSize = 3,
}: ResponsiveCarouselProps<T>) {
  const HeroItems = useMemo(
    () => items?.map(renderItem) ?? [],
    [items, renderItem],
  );

  const HeroItemsGroup = useMemo(
    () => groupBy<JSX.Element>(HeroItems ?? [], groupSize),
    [HeroItems, groupSize],
  );

  return (
    <>
      <CarouselHero sx={{ display: { md: "block", xs: "none" } }}>
        {HeroItemsGroup.map((items, index) => (
          <Stack
            gap={"3rem"}
            direction="row"
            key={index}
            justifyContent="center"
            padding="0 2rem"
          >
            {items}
          </Stack>
        ))}
      </CarouselHero>
      <CarouselHero
        sx={{
          display: { md: "none", xs: "block" },
          justifyContent: "center",
        }}
      >
        {HeroItems}
      </CarouselHero>
    </>
  );
}
