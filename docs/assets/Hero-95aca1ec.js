import{a as n,j as i,F as m}from"./jsx-runtime-692dcd6a.js";import{M as a,d as p}from"./index-3d26e837.js";import{W as c}from"./WithTheme-7dfc2a91.js";import{H as t}from"./Hero.example-9bc94e10.js";import{u as s}from"./index-8df0e5c0.js";import"./index-a8142830.js";import"./_commonjsHelpers-23102255.js";import"./iframe-67d3ef6e.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./extends-eaf302a3.js";import"./index-4f45c9c0.js";import"./index-d37d4223.js";import"./inheritsLoose-d374ba88.js";import"./index-8a3569a9.js";import"./index-356e4a49.js";import"./appGames-4dcb3c69.js";import"./jsx-runtime_commonjs-proxy-00d7c96d.js";import"./ListContainers-54c67dfe.js";import"./Box-ec9aa29d.js";import"./Stack-b1f61044.js";import"./styled-80536b6e.js";const d=`import CarouselHero from "../../../../../packages/ui/src/layout/CarouselHero";
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
`;function r(e){const o=Object.assign({p:"p"},s(),e.components);return i(m,{children:[n(a,{title:"Organisms/Hero",component:t}),`
`,n(o.p,{children:"Ejemplo de carusel responsivo"}),`
`,n("div",{style:{display:"grid",placeItems:"center"},children:n(c,{children:n(t,{})})}),`
`,n(p,{code:d,dark:!0})]})}function O(e={}){const{wrapper:o}=Object.assign({},s(),e.components);return o?n(o,Object.assign({},e,{children:n(r,e)})):r(e)}export{O as default};
//# sourceMappingURL=Hero-95aca1ec.js.map
