import{a as r,b as M,j as p,k as j,l as P}from"./material-66966922.js";import{r as N}from"./react-242e8da7.js";import{c as O,d as T,f as b,B as K,l as Q,L as V,n as h,h as Y}from"./NavLinks-e10507dd.js";import{z as I,y as Z,x as ee}from"./index-e881a035.js";function oe(e){return O("PrivateSwitchBase",e)}T("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const te=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ae=e=>{const{classes:o,checked:t,disabled:s,edge:i}=e,d={root:["root",t&&"checked",s&&"disabled",i&&`edge${h(i)}`],input:["input"]};return P(d,oe,o)},se=b(K)(({ownerState:e})=>r({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),re=b("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ie=N.forwardRef(function(o,t){const{autoFocus:s,checked:i,checkedIcon:d,className:k,defaultChecked:g,disabled:f,disableFocusRipple:m=!1,edge:l=!1,icon:u,id:v,inputProps:U,inputRef:L,name:E,onBlur:x,onChange:$,onFocus:y,readOnly:_,required:q=!1,tabIndex:D,type:S,value:B}=o,A=M(o,te),[R,W]=Q({controlled:i,default:!!g,name:"SwitchBase",state:"checked"}),n=V(),X=c=>{y&&y(c),n&&n.onFocus&&n.onFocus(c)},G=c=>{x&&x(c),n&&n.onBlur&&n.onBlur(c)},H=c=>{if(c.nativeEvent.defaultPrevented)return;const F=c.target.checked;W(F),$&&$(c,F)};let w=f;n&&typeof w>"u"&&(w=n.disabled);const J=S==="checkbox"||S==="radio",C=r({},o,{checked:R,disabled:w,disableFocusRipple:m,edge:l}),z=ae(C);return p.jsxs(se,r({component:"span",className:j(z.root,k),centerRipple:!0,focusRipple:!m,disabled:w,tabIndex:null,role:void 0,onFocus:X,onBlur:G,ownerState:C,ref:t},A,{children:[p.jsx(re,r({autoFocus:s,checked:i,defaultChecked:g,className:z.input,disabled:w,id:J?v:void 0,name:E,onChange:H,readOnly:_,ref:L,required:q,ownerState:C,tabIndex:D,type:S},S==="checkbox"&&B===void 0?{}:{value:B},U)),R?d:u]}))}),ce=ie;function ne(e){return O("MuiSwitch",e)}const de=T("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),a=de,le=["className","color","edge","size","sx"],ue=e=>{const{classes:o,edge:t,size:s,color:i,checked:d,disabled:k}=e,g={root:["root",t&&`edge${h(t)}`,`size${h(s)}`],switchBase:["switchBase",`color${h(i)}`,d&&"checked",k&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},f=P(g,ne,o);return r({},o,f)},pe=b("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.edge&&o[`edge${h(t.edge)}`],o[`size${h(t.size)}`]]}})(({ownerState:e})=>r({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${a.thumb}`]:{width:16,height:16},[`& .${a.switchBase}`]:{padding:4,[`&.${a.checked}`]:{transform:"translateX(16px)"}}})),he=b(ce,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.switchBase,{[`& .${a.input}`]:o.input},t.color!=="default"&&o[`color${h(t.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${a.checked}`]:{transform:"translateX(20px)"},[`&.${a.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${a.checked} + .${a.track}`]:{opacity:.5},[`&.${a.disabled} + .${a.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${a.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:o})=>r({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:I(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${a.checked}`]:{color:(e.vars||e).palette[o.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:I(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${a.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${o.color}DisabledColor`]:`${e.palette.mode==="light"?Z(e.palette[o.color].main,.62):ee(e.palette[o.color].main,.55)}`}},[`&.${a.checked} + .${a.track}`]:{backgroundColor:(e.vars||e).palette[o.color].main}})),ge=b("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,o)=>o.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),be=b("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,o)=>o.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),ke=N.forwardRef(function(o,t){const s=Y({props:o,name:"MuiSwitch"}),{className:i,color:d="primary",edge:k=!1,size:g="medium",sx:f}=s,m=M(s,le),l=r({},s,{color:d,edge:k,size:g}),u=ue(l),v=p.jsx(be,{className:u.thumb,ownerState:l});return p.jsxs(pe,{className:j(u.root,i),sx:f,ownerState:l,children:[p.jsx(he,r({type:"checkbox",icon:v,checkedIcon:v,ref:t,ownerState:l},m,{classes:r({},u,{root:u.switchBase})})),p.jsx(ge,{className:u.track,ownerState:l})]})}),fe=ke,we=""+new URL("moon-8c8571eb.svg",import.meta.url).href;function xe({moonUrl:e=`url(${we})`,overrideCheckBg:o,onChange:t}){return p.jsx(fe,{onChange:t,defaultChecked:!0,sx:s=>({padding:.2,"& .MuiSwitch-track":{borderRadius:"2rem",borderColor:s.palette.text.secondary,backgroundColor:s.palette.mode=="dark"?"#333 !important":s.palette.background.paper+(o?" !important":""),borderWidth:"0.1rem",borderStyle:"solid"},"& .MuiSwitch-thumb":{backgroundColor:s.palette.primary.main},"& .Mui-checked":{"& .MuiSwitch-thumb":{background:e,backgroundColor:"transparent",boxShadow:"none",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}})})}export{xe as C,ce as S,fe as a,ne as g,a as s};
