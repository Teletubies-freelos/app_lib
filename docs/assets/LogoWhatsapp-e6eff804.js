import{j as e,a as t,F as s}from"./jsx-runtime-dfa81c13.js";import{M as p,d as m}from"./index-f6d16ce1.js";import{W as c}from"./WithTheme-9505c6f2.js";import{N as u,C as d,B as h,W as l}from"./ListContainers-9ea7e573.js";import"./appGames-c040a519.js";import{S as f}from"./Stack-200b7b20.js";import{B as g}from"./Box-04874925.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-88f0bdb0.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./extends-15b115a7.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./inheritsLoose-d374ba88.js";import"./index-c4ced888.js";import"./index-356e4a49.js";import"./styled-1922bd45.js";import"./createTheme-98f63f06.js";function a(){return e(f,{direction:"column",justifyContent:"space-between",sx:{height:"40rem"},children:[t(u,{cartComponent:t(d,{}),searchBar:t(h,{label:"Buscar",variant:"contained"})}),t(g,{display:"flex",justifyContent:"end",sx:{width:"100%"},children:t(l,{})})]})}const B=`import { Box, Stack } from "@mui/material";
import { Button, CartIcon, NavBar } from "../../../../packages/ui/src";
import WhatsappLogo from "../../../../packages/ui/src/atoms/WhatsappLogo";

export default function LogoWhatsapp() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      sx={{ height: "40rem" }}
    >
      <NavBar
        cartComponent={<CartIcon />}
        searchBar={<Button label="Buscar" variant="contained" />}
      />
      <Box display="flex" justifyContent="end" sx={{ width: "100%" }}>
        <WhatsappLogo />
      </Box>
    </Stack>
  );
}
`;function r(o){const n=Object.assign({p:"p"},i(),o.components);return e(s,{children:[t(p,{title:"Layout/LogoWhatsapp",component:a}),`
`,t(n.p,{children:"Ejemplo de LogoWhatsapp"}),`
`,t("div",{style:{display:"grid",placeItems:"center"},children:t(c,{children:t(a,{})})}),`
`,t(m,{code:B,dark:!0})]})}function q(o={}){const{wrapper:n}=Object.assign({},i(),o.components);return n?t(n,Object.assign({},o,{children:t(r,o)})):r(o)}export{q as default};
//# sourceMappingURL=LogoWhatsapp-e6eff804.js.map
