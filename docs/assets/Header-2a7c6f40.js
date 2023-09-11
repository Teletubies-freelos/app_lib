import{a as n,j as i,F as m}from"./jsx-runtime-dfa81c13.js";import{M as s,d as p}from"./index-f6d16ce1.js";import{W as c}from"./WithTheme-9505c6f2.js";import{H as r}from"./Header.example-6284fd53.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-88f0bdb0.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./extends-15b115a7.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./inheritsLoose-d374ba88.js";import"./index-c4ced888.js";import"./index-356e4a49.js";import"./appGames-c040a519.js";import"./ListContainers-9ea7e573.js";import"./Hero.example-99428067.js";import"./generateUtilityClasses-b6bf937b.js";import"./useControlled-58a03918.js";import"./useIsFocusVisible-e5f6c995.js";import"./Box-04874925.js";import"./createTheme-98f63f06.js";import"./Stack-200b7b20.js";import"./styled-1922bd45.js";const d=`import { Stack, SxProps } from "@mui/material";
import {
  CartIcon,
  NavBar,
  NintendoLogo,
  PlayStation4Logo,
  PlayStation5Logo,
  XboxLogo,
  MainLogo,
  SearchBar,
  Button,
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
      <NavBar
        cartComponent={<CartIcon />}
        searchBar={
          <SearchBar
            onSubmit={() => 3}
            buttonSearch={<Button label="buscar" variant="contained" />}
          />
        }
        mainLogo={<MainLogo />}
      />
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
`,n(p,{code:d,dark:!0})]})}function W(o={}){const{wrapper:t}=Object.assign({},a(),o.components);return t?n(t,Object.assign({},o,{children:n(e,o)})):e(o)}export{W as default};
//# sourceMappingURL=Header-2a7c6f40.js.map
