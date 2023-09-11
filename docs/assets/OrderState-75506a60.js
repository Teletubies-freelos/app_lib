import{j as o,a as t,F as c}from"./jsx-runtime-dfa81c13.js";import{M as d,d as l}from"./index-205c1304.js";import{W as u}from"./WithTheme-6be35113.js";import{o as g,p as r,L as a,d as h,q as f,N as S,C as x,M as i,B as y,c as B}from"./ListContainers-54708e95.js";import"./appGames-42fbe5c8.js";import{S as C}from"./Stack-344e7749.js";import{T as j}from"./Typography-37fcc5bb.js";import{B as b}from"./Box-ce69ab00.js";import{u as p}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2ec524cd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./extends-15b115a7.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./inheritsLoose-d374ba88.js";import"./index-c4ced888.js";import"./index-356e4a49.js";import"./styled-32d3ffb0.js";import"./createTheme-6ddb5912.js";import"./generateUtilityClasses-1d54e93d.js";function E(){return o(g,{sx:{width:"100%",maxWidth:"40rem"},children:[o(r,{children:[t(a,{property:"Número de pedido",value:"XAC431981"}),t(a,{property:"Fecha de entrega estimada",value:"9 agosto"}),t(a,{property:"Productos",sx:{marginTop:"2.25rem"}})]}),t(r,{children:Array.from({length:3}).map((e,n)=>t(h,{img:t(r,{height:"4.75rem",alignItems:"center",sx:{display:{xs:"none",sm:"flex"}},children:t("img",{src:"https://m.media-amazon.com/images/I/815aKWcEkEL.jpg",srcSet:"https://m.media-amazon.com/images/I/815aKWcEkEL.jpg",alt:"image",style:{height:"80%",width:"100%",objectFit:"contain"},loading:"lazy"})}),title:"Spidermaan Marvel PS4",price:"S/ 120.00"},n))}),o(r,{sx:{marginTop:"2.25rem"},children:[t(a,{property:"COSTO DELIVERY",value:"S/ 20.00",sx:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",fontWeight:"bold !important",fontSize:"1.1rem !important"}}),t(a,{property:"TOTAL",value:"S/ 480.00",sx:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",fontWeight:"bold !important",fontSize:"1.1rem !important"}})]}),t(r,{sx:{marginTop:"2.25rem"},children:t(f,{variant:"contained",fullWidth:!0,children:"Whatsapp"})})]})}function s(){return o(C,{direction:"column",justifyContent:"space-between",alignItems:"center",sx:{height:"70rem"},children:[t(S,{cartComponent:t(x,{}),mainLogo:t(i,{}),searchBar:t(y,{label:"Buscar",variant:"contained"})}),t(j,{variant:"h2",sx:{margin:" 0 auto",border:"none"},children:"Estado de pedido"}),t(B,{steps:["En tienda","En camino","Entregado"]}),t(E,{}),t(b,{display:{xs:"none",sm:"flex"},justifyContent:"center",sx:{width:"100%"},children:t(i,{})})]})}const O=`import DetailOrderState from "../../../../../packages/ui/src/molecules/DetailOrderState";
import { Box, Stack, Typography } from "@mui/material";
import {
  NavBar,
  CartIcon,
  MainLogo,
  StepStatus,
  Button,
} from "../../../../../packages/ui/src";

export default function OrderState() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ height: "70rem" }}
    >
      <NavBar
        cartComponent={<CartIcon />}
        mainLogo={<MainLogo />}
        searchBar={<Button label="Buscar" variant="contained" />}
      />
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
`;function m(e){const n=Object.assign({p:"p"},p(),e.components);return o(c,{children:[t(d,{title:"Pages/OrderState",component:s}),`
`,t(n.p,{children:"Ejemplo de OrderState"}),`
`,t("div",{style:{display:"grid",placeItems:"center"},children:t(u,{children:t(s,{})})}),`
`,t(l,{code:O,dark:!0})]})}function H(e={}){const{wrapper:n}=Object.assign({},p(),e.components);return n?t(n,Object.assign({},e,{children:t(m,e)})):m(e)}export{H as default};
//# sourceMappingURL=OrderState-75506a60.js.map
