import{a as i,j as p}from"./jsx-runtime-dfa81c13.js";import{u as S,T as v,_ as T,a as m,b as x,G as b,e as C}from"./appGames-42fbe5c8.js";import{_ as c}from"./extends-15b115a7.js";import{r as l}from"./index-76fb7be0.js";const _=l.createContext(null),g=_;function y(){return l.useContext(g)}const E=typeof Symbol=="function"&&Symbol.for,M=E?Symbol.for("mui.nested"):"__THEME_NESTED__";function k(e,o){return typeof o=="function"?o(e):c({},e,o)}function P(e){const{children:o,theme:t}=e,n=y(),r=l.useMemo(()=>{const s=n===null?t:k(n,t);return s!=null&&(s[M]=n!==null),s},[t,n]);return i(g.Provider,{value:r,children:o})}const f={};function h(e,o,t,n=!1){return l.useMemo(()=>{const r=e&&o[e]||o;if(typeof t=="function"){const s=t(r),a=e?c({},o,{[e]:s}):s;return n?()=>a:a}return e?c({},o,{[e]:t}):c({},o,t)},[e,o,t,n])}function z(e){const{children:o,theme:t,themeId:n}=e,r=S(f),s=y()||f,a=h(n,r,t),u=h(n,s,t,!0);return i(P,{theme:u,children:i(v.Provider,{value:a,children:o})})}const W=["theme"];function $(e){let{theme:o}=e,t=T(e,W);const n=o[m];return i(z,c({},t,{themeId:n?m:void 0,theme:n||o}))}const j=(e,o)=>c({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},o&&!e.vars&&{colorScheme:e.palette.mode}),O=e=>c({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),B=(e,o=!1)=>{var t;const n={};o&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([a,u])=>{var d;n[e.getColorSchemeSelector(a).replace(/\s*&/,"")]={colorScheme:(d=u.palette)==null?void 0:d.mode}});let r=c({html:j(e,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:c({margin:0},O(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},n);const s=(t=e.components)==null||(t=t.MuiCssBaseline)==null?void 0:t.styleOverrides;return s&&(r=[r,s]),r};function F(e){const o=x({props:e,name:"MuiCssBaseline"}),{children:t,enableColorScheme:n=!1}=o;return p(l.Fragment,{children:[i(b,{styles:r=>B(r,n)}),t]})}function w({children:e}){return p($,{theme:C,children:[i(F,{}),i(b,{styles:{body:{fontSize:14},fontSize:14,boxSizing:"border-box"}}),e]})}export{F as C,z as T,w as W,$ as a,O as b,j as h,y as u};
//# sourceMappingURL=WithTheme-6be35113.js.map