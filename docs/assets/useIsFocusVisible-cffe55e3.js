import{r as n}from"./index-a8142830.js";function l(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const f=typeof window<"u"?n.useLayoutEffect:n.useEffect,d=f;function v(e){const t=n.useRef(e);return d(()=>{t.current=e}),n.useCallback((...r)=>(0,t.current)(...r),[])}function F(...e){return n.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(r=>{l(r,t)})},e)}let i=!0,a=!1,o;const y={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function h(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&y[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function b(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function s(){i=!1}function E(){this.visibilityState==="hidden"&&a&&(i=!0)}function m(e){e.addEventListener("keydown",b,!0),e.addEventListener("mousedown",s,!0),e.addEventListener("pointerdown",s,!0),e.addEventListener("touchstart",s,!0),e.addEventListener("visibilitychange",E,!0)}function w(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return i||h(t)}function R(){const e=n.useCallback(u=>{u!=null&&m(u.ownerDocument)},[]),t=n.useRef(!1);function r(){return t.current?(a=!0,window.clearTimeout(o),o=window.setTimeout(()=>{a=!1},100),t.current=!1,!0):!1}function c(u){return w(u)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:c,onBlur:r,ref:e}}export{R as a,v as b,d as c,l as s,F as u};
//# sourceMappingURL=useIsFocusVisible-cffe55e3.js.map
