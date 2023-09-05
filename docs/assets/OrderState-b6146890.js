import{j as o,a as t,F as p}from"./jsx-runtime-692dcd6a.js";import{M as c,d}from"./index-3d26e837.js";import{W as l}from"./WithTheme-7dfc2a91.js";import{w as g,x as r,L as a,c as h,y as u,N as S,C as f,S as x,M as y}from"./ListContainers-54c67dfe.js";import"./appGames-4dcb3c69.js";import{S as C}from"./Stack-b1f61044.js";import{T as j}from"./Typography-66bb1eea.js";import{B as E}from"./Box-ec9aa29d.js";import{u as m}from"./index-8df0e5c0.js";import"./index-a8142830.js";import"./_commonjsHelpers-23102255.js";import"./iframe-67d3ef6e.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./extends-eaf302a3.js";import"./index-4f45c9c0.js";import"./index-d37d4223.js";import"./inheritsLoose-d374ba88.js";import"./index-8a3569a9.js";import"./index-356e4a49.js";import"./styled-80536b6e.js";import"./generateUtilityClasses-d84237f9.js";function O(){return o(g,{sx:{width:"100%",maxWidth:"40rem"},children:[o(r,{children:[t(a,{property:"Número de pedido",value:"XAC431981"}),t(a,{property:"Fecha de entrega estimada",value:"9 agosto"}),t(a,{property:"Productos",sx:{marginTop:"2.25rem"}})]}),t(r,{children:Array.from({length:3}).map((e,n)=>t(h,{img:t(r,{height:"4.75rem",alignItems:"center",sx:{display:{xs:"none",sm:"flex"}},children:t("img",{src:"https://m.media-amazon.com/images/I/815aKWcEkEL.jpg",srcSet:"https://m.media-amazon.com/images/I/815aKWcEkEL.jpg",alt:"image",style:{height:"80%",width:"100%",objectFit:"contain"},loading:"lazy"})}),title:"Spidermaan Marvel PS4",price:"S/ 120.00"},n))}),o(r,{sx:{marginTop:"2.25rem"},children:[t(a,{property:"COSTO DELIVERY",value:"S/ 20.00",sx:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",fontWeight:"bold !important",fontSize:"1.1rem !important"}}),t(a,{property:"TOTAL",value:"S/ 480.00",sx:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",fontWeight:"bold !important",fontSize:"1.1rem !important"}})]}),t(r,{sx:{marginTop:"2.25rem"},children:t(u,{variant:"contained",fullWidth:!0,children:"Whatsapp"})})]})}function i(){return o(C,{direction:"column",justifyContent:"space-between",alignItems:"center",sx:{height:"70rem"},children:[t(S,{cartComponent:t(f,{}),onSearch:console.log}),t(j,{variant:"h2",sx:{margin:" 0 auto",border:"none"},children:"Estado de pedido"}),t(x,{steps:["En tienda","En camino","Entregado"]}),t(O,{}),t(E,{display:{xs:"none",sm:"flex"},justifyContent:"center",sx:{width:"100%"},children:t(y,{})})]})}const b=`import DetailOrderState from "../../../../../packages/ui/src/molecules/DetailOrderState";
import { Box, Stack, Typography } from "@mui/material";
import {
  NavBar,
  CartIcon,
  MainLogo,
  StepStatus,
} from "../../../../../packages/ui/src";

export default function OrderState() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ height: "70rem" }}
    >
      <NavBar cartComponent={<CartIcon />} onSearch={console.log} />
      <Typography variant="h2" sx={{ margin: " 0 auto", border: "none" }}>
        Estado de pedido
      </Typography>
      <StepStatus steps={["En tienda", "En camino", "Entregado"]} />
      <DetailOrderState />
      <Box
        display={{ xs: "none", sm: "flex" }}
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <MainLogo />
      </Box>
    </Stack>
  );
}
`;function s(e){const n=Object.assign({p:"p"},m(),e.components);return o(p,{children:[t(c,{title:"Pages/OrderState",component:i}),`
`,t(n.p,{children:"Ejemplo de OrderState"}),`
`,t("div",{style:{display:"grid",placeItems:"center"},children:t(l,{children:t(i,{})})}),`
`,t(d,{code:b,dark:!0})]})}function q(e={}){const{wrapper:n}=Object.assign({},m(),e.components);return n?t(n,Object.assign({},e,{children:t(s,e)})):s(e)}export{q as default};
//# sourceMappingURL=OrderState-b6146890.js.map
