import{a as n,j as i,F as m}from"./jsx-runtime-692dcd6a.js";import{M as s,d as p}from"./index-3d26e837.js";import{W as c}from"./WithTheme-7dfc2a91.js";import{H as r}from"./Header.example-3f7d421e.js";import{u as a}from"./index-8df0e5c0.js";import"./index-a8142830.js";import"./_commonjsHelpers-23102255.js";import"./iframe-67d3ef6e.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./extends-eaf302a3.js";import"./index-4f45c9c0.js";import"./index-d37d4223.js";import"./inheritsLoose-d374ba88.js";import"./index-8a3569a9.js";import"./index-356e4a49.js";import"./appGames-4dcb3c69.js";import"./ListContainers-54c67dfe.js";import"./Hero.example-9bc94e10.js";import"./jsx-runtime_commonjs-proxy-00d7c96d.js";import"./Box-ec9aa29d.js";import"./Stack-b1f61044.js";import"./styled-80536b6e.js";const d=`import { Stack, SxProps } from "@mui/material";
import {
  CartIcon,
  NavBar,
  NintendoLogo,
  PlayStation4Logo,
  PlayStation5Logo,
  XboxLogo,
} from "../../../../../packages/ui/src";

import Hero from "../Hero/Hero.example";

const sxInnerStack: SxProps = {
  height: {
    xs: "1rem",
    md: "unset",
  },
  "& svg": { width: "5rem" },
};

// TODO: add Container for responsive
export default function Header() {
  return (
    <Stack sx={{ width: "100%" }} spacing={6}>
      <NavBar cartComponent={<CartIcon />} onSearch={console.log} />
      <Hero />
      <Stack
        sx={sxInnerStack}
        direction="row"
        spacing={1}
        justifyContent={"space-evenly"}
      >
        <PlayStation4Logo />
        <PlayStation5Logo />
        <NintendoLogo />
        <XboxLogo />
      </Stack>
    </Stack>
  );
}
`;function e(o){const t=Object.assign({p:"p"},a(),o.components);return i(m,{children:[n(s,{title:"Organisms/Header",component:r}),`
`,n(t.p,{children:"Ejemplo de Header"}),`
`,n("div",{style:{display:"grid",placeItems:"center"},children:n(c,{children:n(r,{})})}),`
`,n(p,{code:d,dark:!0})]})}function B(o={}){const{wrapper:t}=Object.assign({},a(),o.components);return t?n(t,Object.assign({},o,{children:n(e,o)})):e(o)}export{B as default};
//# sourceMappingURL=Header-b9f215e0.js.map
