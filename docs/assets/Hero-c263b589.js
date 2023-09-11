import{a as n,j as s,F as m}from"./jsx-runtime-dfa81c13.js";import{M as a,d as p}from"./index-f6d16ce1.js";import{W as c}from"./WithTheme-9505c6f2.js";import{H as t}from"./Hero.example-99428067.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-88f0bdb0.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./extends-15b115a7.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./inheritsLoose-d374ba88.js";import"./index-c4ced888.js";import"./index-356e4a49.js";import"./appGames-c040a519.js";import"./ListContainers-9ea7e573.js";import"./generateUtilityClasses-b6bf937b.js";import"./useControlled-58a03918.js";import"./useIsFocusVisible-e5f6c995.js";import"./Box-04874925.js";import"./createTheme-98f63f06.js";import"./Stack-200b7b20.js";import"./styled-1922bd45.js";const d=`import CarouselHero from "../../../../../packages/ui/src/layout/CarouselHero";
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
`;function r(e){const o=Object.assign({p:"p"},i(),e.components);return s(m,{children:[n(a,{title:"Organisms/Hero",component:t}),`
`,n(o.p,{children:"Ejemplo de carusel responsivo"}),`
`,n("div",{style:{display:"grid",placeItems:"center"},children:n(c,{children:n(t,{})})}),`
`,n(p,{code:d,dark:!0})]})}function q(e={}){const{wrapper:o}=Object.assign({},i(),e.components);return o?n(o,Object.assign({},e,{children:n(r,e)})):r(e)}export{q as default};
//# sourceMappingURL=Hero-c263b589.js.map
