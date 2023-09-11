import{j as r,a as n,F as p}from"./jsx-runtime-dfa81c13.js";import{M as d,d as l}from"./index-205c1304.js";import{W as u}from"./WithTheme-6be35113.js";import{N as h,C as g,B as e,M as a,S as B}from"./ListContainers-54708e95.js";import"./appGames-42fbe5c8.js";import{S as x}from"./Stack-344e7749.js";import{B as i}from"./Box-ce69ab00.js";import{T as f}from"./Typography-37fcc5bb.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2ec524cd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./extends-15b115a7.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./inheritsLoose-d374ba88.js";import"./index-c4ced888.js";import"./index-356e4a49.js";import"./styled-32d3ffb0.js";import"./createTheme-6ddb5912.js";import"./generateUtilityClasses-1d54e93d.js";function c(){return r(x,{direction:"column",justifyContent:"space-between",sx:{height:"40rem"},children:[n(h,{cartComponent:n(g,{}),searchBar:n(e,{label:"Buscar",variant:"contained"}),mainLogo:n(a,{})}),r(i,{sx:{width:{xs:"100%",sm:"25rem"},margin:"auto"},children:[n(f,{variant:"h3",sx:{marginBottom:"2rem"},children:"Ingresa tu número de pedido"}),n(B,{placeHolder:"ABC123",buttonSearch:n(e,{label:"buscar",variant:"contained"}),onSubmit:()=>console.log("click"),direction:"column"})]}),n(i,{justifyContent:"center",sx:{display:{xs:"none",sm:"flex"},width:"100%"},children:n(a,{})})]})}const S=`import { Box, Stack, Typography } from "@mui/material";
import {
  SearchBar,
  NavBar,
  CartIcon,
  MainLogo,
  Button,
} from "../../../../../packages/ui/src";

export default function OrderSearch() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      sx={{ height: "40rem" }}
    >
      <NavBar
        cartComponent={<CartIcon />}
        searchBar={<Button label="Buscar" variant="contained" />}
        mainLogo={<MainLogo />}
      />
      <Box sx={{ width: { xs: "100%", sm: "25rem" }, margin: "auto" }}>
        <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
          Ingresa tu número de pedido
        </Typography>
        <SearchBar
          placeHolder="ABC123"
          buttonSearch={<Button label="buscar" variant="contained" />}
          onSubmit={() => console.log("click")}
          direction="column"
        />
      </Box>
      <Box
        justifyContent="center"
        sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
      >
        <MainLogo />
      </Box>
    </Stack>
  );
}
`;function m(t){const o=Object.assign({p:"p"},s(),t.components);return r(p,{children:[n(d,{title:"Pages/OrderSearch",component:c}),`
`,n(o.p,{children:"Ejemplo de OrderSearch"}),`
`,n("div",{style:{display:"grid",placeItems:"center"},children:n(u,{children:n(c,{})})}),`
`,n(l,{code:S,dark:!0})]})}function z(t={}){const{wrapper:o}=Object.assign({},s(),t.components);return o?n(o,Object.assign({},t,{children:n(m,t)})):m(t)}export{z as default};
//# sourceMappingURL=OrderSearch-c0716e93.js.map
