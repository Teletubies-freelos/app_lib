import CarouselHero from "../../../../../packages/ui/src/layout/CarouselHero";
import { CardHero } from "../../../../../packages/ui/src";
import { Box, Stack } from "@mui/material";

const sonicImages = [
  "https://www.gameinformer.com/sites/default/files/styles/full/public/2022/04/11/afe977b6/sonicorigins.jpg",
  "https://www.truetrophies.com/imgs/070531/sonic-ps5.jpg",
  "https://i.ytimg.com/vi/aJ7DVCmsSPg/maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-_gR6kBYu5XvMh7zuG3Zwf47upd5d7Q_vg&usqp=CAU",
];

const getRandomImageSonic = () =>
  sonicImages[
    Math.round(Math.random() * (sonicImages.length - 1)) % sonicImages.length
  ];

const HeroItems = Array.from({ length: 6 })
  .map((_, index) => ({ id: index }))
  .map(({ id }) => (
    <CardHero
      key={id}
      alt=""
      image={getRandomImageSonic()}
      description="Sonic the Hedgehog"
    />
  ));

const HeroItemsGroup: JSX.Element[][] = [];

for (let i = 0; i < HeroItems.length; i += 3)
  HeroItemsGroup.push(HeroItems.slice(i, i + 3));

const Hero = () => (
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

export default Hero;
