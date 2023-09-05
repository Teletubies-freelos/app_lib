import{a as t,j as r,F as s}from"./jsx-runtime-692dcd6a.js";import{M as c,d as m}from"./index-3d26e837.js";import{W as C}from"./WithTheme-7dfc2a91.js";import{U as l,N as d,C as h}from"./ListContainers-54c67dfe.js";import"./appGames-4dcb3c69.js";import{S as u}from"./Stack-b1f61044.js";import{B as f}from"./Box-ec9aa29d.js";import{u as p}from"./index-8df0e5c0.js";import"./index-a8142830.js";import"./_commonjsHelpers-23102255.js";import"./iframe-67d3ef6e.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./extends-eaf302a3.js";import"./index-4f45c9c0.js";import"./index-d37d4223.js";import"./inheritsLoose-d374ba88.js";import"./index-8a3569a9.js";import"./index-356e4a49.js";import"./styled-80536b6e.js";function e({sx:o}){return t(l,{sx:o,children:r("svg",{width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25Z",fill:"#25D366"}),t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M33.75 16.0938C31.4063 13.75 28.2812 12.5 25 12.5C18.125 12.5 12.5 18.125 12.5 25C12.5 27.1875 13.125 29.375 14.2188 31.25L12.5 37.5L19.0625 35.7812C20.9375 36.7188 22.9688 37.3438 25 37.3438C31.875 37.3438 37.5 31.7188 37.5 24.8437C37.5 21.5625 36.0938 18.4375 33.75 16.0938ZM25 35.3125C23.125 35.3125 21.25 34.8438 19.6875 33.9063L19.375 33.75L15.4687 34.8437L16.5625 31.0938L16.25 30.625C15.1562 28.9062 14.6875 27.0313 14.6875 25.1563C14.6875 19.5313 19.375 14.8438 25 14.8438C27.8125 14.8438 30.3125 15.9375 32.3438 17.8125C34.375 19.8437 35.3125 22.3438 35.3125 25.1563C35.3125 30.625 30.7812 35.3125 25 35.3125ZM30.625 27.5C30.3125 27.3438 28.75 26.5625 28.4375 26.5625C28.125 26.4062 27.9687 26.4063 27.8125 26.7188C27.6562 27.0313 27.0313 27.6562 26.875 27.9687C26.7188 28.125 26.5625 28.125 26.25 28.125C25.9375 27.9688 25 27.6562 23.75 26.5625C22.8125 25.7812 22.1875 24.6875 22.0313 24.375C21.875 24.0625 22.0313 23.9062 22.1875 23.75C22.3438 23.5938 22.5 23.4375 22.6562 23.2812C22.8125 23.125 22.8125 22.9688 22.9688 22.8125C23.125 22.6563 22.9688 22.5 22.9688 22.3438C22.9688 22.1875 22.3438 20.625 22.0313 20C21.875 19.5313 21.5625 19.5312 21.4063 19.5312C21.25 19.5312 21.0937 19.5312 20.7812 19.5312C20.625 19.5312 20.3125 19.5312 20 19.8437C19.6875 20.1562 18.9063 20.9375 18.9063 22.5C18.9063 24.0625 20 25.4688 20.1562 25.7812C20.3125 25.9375 22.3437 29.2188 25.4687 30.4688C28.125 31.5625 28.5938 31.25 29.2188 31.25C29.8438 31.25 31.0938 30.4688 31.25 29.8438C31.5625 29.0625 31.5625 28.4375 31.4063 28.4375C31.25 27.6563 30.9375 27.6563 30.625 27.5Z",fill:"white"})]})})}try{e.displayName="WhatsappLogo",e.__docgenInfo={description:"",displayName:"WhatsappLogo",props:{sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<{}>"}}}}}catch{}function a(){return r(u,{direction:"column",justifyContent:"space-between",sx:{height:"40rem"},children:[t(d,{cartComponent:t(h,{}),onSearch:console.log}),t(f,{display:"flex",justifyContent:"end",sx:{width:"100%"},children:t(e,{})})]})}const g=`import { Box, Stack } from "@mui/material";
import { CartIcon, NavBar } from "../../../../packages/ui/src";
import WhatsappLogo from "../../../../packages/ui/src/atoms/WhatsappLogo";

export default function LogoWhatsapp() {
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      sx={{ height: "40rem" }}
    >
      <NavBar cartComponent={<CartIcon />} onSearch={console.log} />
      <Box display="flex" justifyContent="end" sx={{ width: "100%" }}>
        <WhatsappLogo />
      </Box>
    </Stack>
  );
}
`;function i(o){const n=Object.assign({p:"p"},p(),o.components);return r(s,{children:[t(c,{title:"Layout/LogoWhatsapp",component:a}),`
`,t(n.p,{children:"Ejemplo de LogoWhatsapp"}),`
`,t("div",{style:{display:"grid",placeItems:"center"},children:t(C,{children:t(a,{})})}),`
`,t(m,{code:g,dark:!0})]})}function U(o={}){const{wrapper:n}=Object.assign({},p(),o.components);return n?t(n,Object.assign({},o,{children:t(i,o)})):i(o)}export{U as default};
//# sourceMappingURL=LogoWhatsapp-0539ab65.js.map
