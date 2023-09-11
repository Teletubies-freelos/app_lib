import{c as V,a as R,u as F,h,r as p,b as B,m as D,e as M,g as v,s as _,d as $}from"./Modal-7990966f.js";import{d as G,_ as N}from"./appGames-c040a519.js";import{_ as k}from"./extends-15b115a7.js";import{r as d}from"./index-76fb7be0.js";import{i as E,l as O,g as U}from"./ListContainers-9ea7e573.js";import{a as A}from"./jsx-runtime-dfa81c13.js";const L=V(),I=L,W=["component","direction","spacing","divider","children","className","useFlexGap"],q=R(),z=I("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function H(e){return F({props:e,name:"MuiStack",defaultTheme:q})}function J(e,s){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((c,a,t)=>(c.push(a),t<n.length-1&&c.push(d.cloneElement(s,{key:`separator-${t}`})),c),[])}const K=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Q=({ownerState:e,theme:s})=>{let n=k({display:"flex",flexDirection:"column"},h({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),c=>({flexDirection:c})));if(e.spacing){const c=B(s),a=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:a}),m=p({values:e.spacing,base:a});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=G(n,h({theme:s},m,(o,r)=>e.useFlexGap?{gap:v(c,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${K(r?t[r]:e.direction)}`]:v(c,o)}}))}return n=D(s.breakpoints,n),n};function X(e={}){const{createStyledComponent:s=z,useThemeProps:n=H,componentName:c="MuiStack"}=e,a=()=>O({root:["root"]},o=>U(c,o),{}),t=s(Q);return d.forwardRef(function(o,r){const i=n(o),l=M(i),{component:u="div",direction:S="column",spacing:x=0,divider:y,children:g,className:P,useFlexGap:C=!1}=l,b=N(l,W),j={direction:S,spacing:x,useFlexGap:C},T=a();return A(t,k({as:u,ownerState:j,ref:r,className:E(T.root,P)},b,{children:y?J(g,y):g}))})}const Y=X({createStyledComponent:_("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>$({props:e,name:"MuiStack"})}),re=Y;export{re as S};
//# sourceMappingURL=Stack-f20df9f2.js.map
