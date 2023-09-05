import{j as r,a as n,F as m}from"./jsx-runtime-692dcd6a.js";import{M as s,d as p}from"./index-3d26e837.js";import{W as d}from"./WithTheme-7dfc2a91.js";import{N as l,C as h,h as u,M as g}from"./ListContainers-54c67dfe.js";import"./appGames-4dcb3c69.js";import{S as x}from"./Stack-b1f61044.js";import{B as e}from"./Box-ec9aa29d.js";import{T as f}from"./Typography-66bb1eea.js";import{u as c}from"./index-8df0e5c0.js";import"./index-a8142830.js";import"./_commonjsHelpers-23102255.js";import"./iframe-67d3ef6e.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./extends-eaf302a3.js";import"./index-4f45c9c0.js";import"./index-d37d4223.js";import"./inheritsLoose-d374ba88.js";import"./index-8a3569a9.js";import"./index-356e4a49.js";import"./styled-80536b6e.js";import"./generateUtilityClasses-d84237f9.js";function a(){return r(x,{direction:"column",justifyContent:"space-between",sx:{height:"40rem"},children:[n(l,{cartComponent:n(h,{}),onSearch:console.log}),r(e,{sx:{width:{xs:"100%",sm:"25rem"},margin:"auto"},children:[n(f,{variant:"h3",sx:{marginBottom:"2rem"},children:"Ingresa tu número de pedido"}),n(u,{placeHolder:"ABC123",searchButtonContent:"Buscar",onSubmit:()=>console.log("click"),btnVariant:"contained",direction:"column"})]}),n(e,{justifyContent:"center",sx:{display:{xs:"none",sm:"flex"},width:"100%"},children:n(g,{})})]})}const B=`import { Box, Stack, Typography } from "@mui/material";
import {
  SearchBar,
  NavBar,
  CartIcon,
  MainLogo,
} from "../../../../../packages/ui/src";

export default function OrderSearch() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      sx={{ height: "40rem" }}
    >
      <NavBar cartComponent={<CartIcon />} onSearch={console.log} />
      <Box sx={{ width: { xs: "100%", sm: "25rem" }, margin: "auto" }}>
        <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
          Ingresa tu número de pedido
        </Typography>
        <SearchBar
          placeHolder="ABC123"
          searchButtonContent="Buscar"
          onSubmit={() => console.log("click")}
          btnVariant="contained"
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
`;function i(o){const t=Object.assign({p:"p"},c(),o.components);return r(m,{children:[n(s,{title:"Pages/OrderSearch",component:a}),`
`,n(t.p,{children:"Ejemplo de OrderSearch"}),`
`,n("div",{style:{display:"grid",placeItems:"center"},children:n(d,{children:n(a,{})})}),`
`,n(p,{code:B,dark:!0})]})}function E(o={}){const{wrapper:t}=Object.assign({},c(),o.components);return t?n(t,Object.assign({},o,{children:n(i,o)})):i(o)}export{E as default};
//# sourceMappingURL=OrderSearch-c633661a.js.map
