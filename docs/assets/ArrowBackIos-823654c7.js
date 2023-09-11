import{_ as Z,k as ee}from"./appGames-c040a519.js";import{_ as V}from"./extends-15b115a7.js";import{r as n}from"./index-76fb7be0.js";import{g as me,i as v,l as be,T as Ue,D as le,A as Y,m as Fe,r as Ae}from"./ListContainers-9ea7e573.js";import{s as O,f as ue,d as te}from"./Modal-7990966f.js";import{g as oe}from"./generateUtilityClasses-b6bf937b.js";import{a as N,j as Ke}from"./jsx-runtime-dfa81c13.js";import{u as qe}from"./useIsFocusVisible-e5f6c995.js";import{r as ze}from"./createSvgIcon-e2fe83a2.js";const je=e=>{let o;return e<1?o=5.11916*e**2:o=4.5*Math.log(e+1)+2,(o/100).toFixed(2)},ce=je;function Xe(e){return me("MuiPaper",e)}oe("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Ye=["className","component","elevation","square","variant"],Oe=e=>{const{square:o,elevation:s,variant:r,classes:f}=e,i={root:["root",r,!o&&"rounded",r==="elevation"&&`elevation${s}`]};return be(i,Xe,f)},He=O("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,o[s.variant],!s.square&&o.rounded,s.variant==="elevation"&&o[`elevation${s.elevation}`]]}})(({theme:e,ownerState:o})=>{var s;return V({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},o.variant==="elevation"&&V({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${ue("#fff",ce(o.elevation))}, ${ue("#fff",ce(o.elevation))})`},e.vars&&{backgroundImage:(s=e.vars.overlays)==null?void 0:s[o.elevation]}))}),We=n.forwardRef(function(o,s){const r=te({props:o,name:"MuiPaper"}),{className:f,component:i="div",elevation:c=1,square:C=!1,variant:p="elevation"}=r,l=Z(r,Ye),d=V({},r,{component:i,elevation:c,square:C,variant:p}),h=Oe(d);return N(He,V({as:i,ownerState:d,className:v(h.root,f),ref:s},l))}),wt=We;function Ge(e){const{className:o,classes:s,pulsate:r=!1,rippleX:f,rippleY:i,rippleSize:c,in:C,onExited:p,timeout:l}=e,[d,h]=n.useState(!1),b=v(o,s.ripple,s.rippleVisible,r&&s.ripplePulsate),x={width:c,height:c,top:-(c/2)+i,left:-(c/2)+f},u=v(s.child,d&&s.childLeaving,r&&s.childPulsate);return!C&&!d&&h(!0),n.useEffect(()=>{if(!C&&p!=null){const g=setTimeout(p,l);return()=>{clearTimeout(g)}}},[p,C,l]),N("span",{className:b,style:x,children:N("span",{className:u})})}const Je=oe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Je,Qe=["center","classes","className"];let H=e=>e,pe,de,fe,he;const Q=550,Ze=80,et=ee(pe||(pe=H`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),tt=ee(de||(de=H`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ot=ee(fe||(fe=H`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),nt=O("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),st=O(Ge,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=H`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,et,Q,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,tt,Q,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ot,({theme:e})=>e.transitions.easing.easeInOut),at=n.forwardRef(function(o,s){const r=te({props:o,name:"MuiTouchRipple"}),{center:f=!1,classes:i={},className:c}=r,C=Z(r,Qe),[p,l]=n.useState([]),d=n.useRef(0),h=n.useRef(null);n.useEffect(()=>{h.current&&(h.current(),h.current=null)},[p]);const b=n.useRef(!1),x=n.useRef(0),u=n.useRef(null),g=n.useRef(null);n.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]);const F=n.useCallback(a=>{const{pulsate:R,rippleX:y,rippleY:L,rippleSize:U,cb:K}=a;l(M=>[...M,N(st,{classes:{ripple:v(i.ripple,m.ripple),rippleVisible:v(i.rippleVisible,m.rippleVisible),ripplePulsate:v(i.ripplePulsate,m.ripplePulsate),child:v(i.child,m.child),childLeaving:v(i.childLeaving,m.childLeaving),childPulsate:v(i.childPulsate,m.childPulsate)},timeout:Q,pulsate:R,rippleX:y,rippleY:L,rippleSize:U},d.current)]),d.current+=1,h.current=K},[i]),S=n.useCallback((a={},R={},y=()=>{})=>{const{pulsate:L=!1,center:U=f||R.pulsate,fakeElement:K=!1}=R;if((a==null?void 0:a.type)==="mousedown"&&b.current){b.current=!1;return}(a==null?void 0:a.type)==="touchstart"&&(b.current=!0);const M=K?null:g.current,B=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let P,w,D;if(U||a===void 0||a.clientX===0&&a.clientY===0||!a.clientX&&!a.touches)P=Math.round(B.width/2),w=Math.round(B.height/2);else{const{clientX:_,clientY:$}=a.touches&&a.touches.length>0?a.touches[0]:a;P=Math.round(_-B.left),w=Math.round($-B.top)}if(U)D=Math.sqrt((2*B.width**2+B.height**2)/3),D%2===0&&(D+=1);else{const _=Math.max(Math.abs((M?M.clientWidth:0)-P),P)*2+2,$=Math.max(Math.abs((M?M.clientHeight:0)-w),w)*2+2;D=Math.sqrt(_**2+$**2)}a!=null&&a.touches?u.current===null&&(u.current=()=>{F({pulsate:L,rippleX:P,rippleY:w,rippleSize:D,cb:y})},x.current=setTimeout(()=>{u.current&&(u.current(),u.current=null)},Ze)):F({pulsate:L,rippleX:P,rippleY:w,rippleSize:D,cb:y})},[f,F]),A=n.useCallback(()=>{S({},{pulsate:!0})},[S]),E=n.useCallback((a,R)=>{if(clearTimeout(x.current),(a==null?void 0:a.type)==="touchend"&&u.current){u.current(),u.current=null,x.current=setTimeout(()=>{E(a,R)});return}u.current=null,l(y=>y.length>0?y.slice(1):y),h.current=R},[]);return n.useImperativeHandle(s,()=>({pulsate:A,start:S,stop:E}),[A,S,E]),N(nt,V({className:v(m.root,i.root,c),ref:g},C,{children:N(Ue,{component:null,exit:!0,children:p})}))}),rt=at;function it(e){return me("MuiButtonBase",e)}const lt=oe("MuiButtonBase",["root","disabled","focusVisible"]),ut=lt,ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],pt=e=>{const{disabled:o,focusVisible:s,focusVisibleClassName:r,classes:f}=e,c=be({root:["root",o&&"disabled",s&&"focusVisible"]},it,f);return s&&r&&(c.root+=` ${r}`),c},dt=O("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ut.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ft=n.forwardRef(function(o,s){const r=te({props:o,name:"MuiButtonBase"}),{action:f,centerRipple:i=!1,children:c,className:C,component:p="button",disabled:l=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:b=!1,LinkComponent:x="a",onBlur:u,onClick:g,onContextMenu:F,onDragLeave:S,onFocus:A,onFocusVisible:E,onKeyDown:a,onKeyUp:R,onMouseDown:y,onMouseLeave:L,onMouseUp:U,onTouchEnd:K,onTouchMove:M,onTouchStart:B,tabIndex:P=0,TouchRippleProps:w,touchRippleRef:D,type:_}=r,$=Z(r,ct),q=n.useRef(null),T=n.useRef(null),ve=le(T,D),{isFocusVisibleRef:se,onFocus:ge,onBlur:Re,ref:ye}=qe(),[I,j]=n.useState(!1);l&&I&&j(!1),n.useImperativeHandle(f,()=>({focusVisible:()=>{j(!0),q.current.focus()}}),[]);const[W,Me]=n.useState(!1);n.useEffect(()=>{Me(!0)},[]);const Te=W&&!d&&!l;n.useEffect(()=>{I&&b&&!d&&W&&T.current.pulsate()},[d,b,I,W]);function k(t,re,Ee=h){return Y(ie=>(re&&re(ie),!Ee&&T.current&&T.current[t](ie),!0))}const Ce=k("start",y),xe=k("stop",F),Pe=k("stop",S),$e=k("stop",U),ke=k("stop",t=>{I&&t.preventDefault(),L&&L(t)}),Be=k("start",B),we=k("stop",K),De=k("stop",M),Ve=k("stop",t=>{Re(t),se.current===!1&&j(!1),u&&u(t)},!1),Le=Y(t=>{q.current||(q.current=t.currentTarget),ge(t),se.current===!0&&(j(!0),E&&E(t)),A&&A(t)}),G=()=>{const t=q.current;return p&&p!=="button"&&!(t.tagName==="A"&&t.href)},J=n.useRef(!1),_e=Y(t=>{b&&!J.current&&I&&T.current&&t.key===" "&&(J.current=!0,T.current.stop(t,()=>{T.current.start(t)})),t.target===t.currentTarget&&G()&&t.key===" "&&t.preventDefault(),a&&a(t),t.target===t.currentTarget&&G()&&t.key==="Enter"&&!l&&(t.preventDefault(),g&&g(t))}),Ie=Y(t=>{b&&t.key===" "&&T.current&&I&&!t.defaultPrevented&&(J.current=!1,T.current.stop(t,()=>{T.current.pulsate(t)})),R&&R(t),g&&t.target===t.currentTarget&&G()&&t.key===" "&&!t.defaultPrevented&&g(t)});let X=p;X==="button"&&($.href||$.to)&&(X=x);const z={};X==="button"?(z.type=_===void 0?"button":_,z.disabled=l):(!$.href&&!$.to&&(z.role="button"),l&&(z["aria-disabled"]=l));const Ne=le(s,ye,q),ae=V({},r,{centerRipple:i,component:p,disabled:l,disableRipple:d,disableTouchRipple:h,focusRipple:b,tabIndex:P,focusVisible:I}),Se=pt(ae);return Ke(dt,V({as:X,className:v(Se.root,C),ownerState:ae,onBlur:Ve,onClick:g,onContextMenu:xe,onFocus:Le,onKeyDown:_e,onKeyUp:Ie,onMouseDown:Ce,onMouseLeave:ke,onMouseUp:$e,onDragLeave:Pe,onTouchEnd:we,onTouchMove:De,onTouchStart:Be,ref:Ne,tabIndex:l?-1:P,type:_},z,$,{children:[c,Te?N(rt,V({ref:ve,center:i},w)):null]}))}),Dt=ft;var ne={},ht=Fe;Object.defineProperty(ne,"__esModule",{value:!0});var mt=ne.default=void 0,bt=ht(ze()),vt=Ae,gt=(0,bt.default)((0,vt.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");mt=ne.default=gt;export{Dt as B,wt as P,mt as d};
//# sourceMappingURL=ArrowBackIos-823654c7.js.map
