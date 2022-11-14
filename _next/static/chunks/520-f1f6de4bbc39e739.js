"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{1363:function(e,t,n){n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},520:function(e,t,n){n.d(t,{J:function(){return X}});var r,o,u,l,a,i,c,s,f=n(7294),d=n(2984),p=n(2351),v=n(3784),m=n(9946),E=n(1363),b=n(4103),y=n(5466);let P=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var h=((r=h||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),g=((o=g||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),S=((u=S||{})[u.Previous=-1]="Previous",u[u.Next=1]="Next",u);function w(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(P))}var O=((l=O||{})[l.Strict=0]="Strict",l[l.Loose=1]="Loose",l);function N(e,t=0){var n;return e!==(null==(n=(0,y.r)(e))?void 0:n.body)&&(0,d.E)(t,{0:()=>e.matches(P),1(){let t=e;for(;null!==t;){if(t.matches(P))return!0;t=t.parentElement}return!1}})}function F(e,t,n=!0,r=null){var o,u,l;let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let u=r.compareDocumentPosition(o);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:w(e);r=null!=r?r:a.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,i.indexOf(r))-1;if(4&t)return Math.max(0,i.indexOf(r))+1;if(8&t)return i.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},d=0,p=i.length,v;do{if(d>=p||d+p<=0)return 0;let m=s+d;if(16&t)m=(m+p)%p;else{if(m<0)return 3;if(m>=p)return 1}null==(v=i[m])||v.focus(f),d+=c}while(v!==a.activeElement);return 6&t&&null!=(l=null==(u=null==(o=v)?void 0:o.matches)?void 0:u.call(o,"textarea,input"))&&l&&v.select(),v.hasAttribute("tabindex")||v.setAttribute("tabindex","0"),2}var I=n(6567),T=n(4157),x=n(3855);function C(e,t,n){let r=(0,x.E)(t);(0,f.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}function M(...e){return(0,f.useMemo)(()=>(0,y.r)(...e),[...e])}var k=((a=k||{})[a.None=1]="None",a[a.Focusable=2]="Focusable",a[a.Hidden=4]="Hidden",a);let A=(0,p.yV)(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,p.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});var L=n(3781),R=((i=R||{})[i.Forwards=0]="Forwards",i[i.Backwards=1]="Backwards",i);function D(){var e,t;let n,r=(0,f.useRef)(0);return e="keydown",t=e=>{"Tab"===e.key&&(r.current=e.shiftKey?1:0)},n=(0,x.E)(t),(0,f.useEffect)(()=>{function t(e){n.current(e)}return window.addEventListener(e,t,!0),()=>window.removeEventListener(e,t,!0)},[e,!0]),r}var H=((c=H||{})[c.Open=0]="Open",c[c.Closed=1]="Closed",c),j=((s=j||{})[s.TogglePopover=0]="TogglePopover",s[s.ClosePopover=1]="ClosePopover",s[s.SetButton=2]="SetButton",s[s.SetButtonId=3]="SetButtonId",s[s.SetPanel=4]="SetPanel",s[s.SetPanelId=5]="SetPanelId",s);let B={0:e=>({...e,popoverState:(0,d.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},z=(0,f.createContext)(null);function $(e){let t=(0,f.useContext)(z);if(null===t){let n=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,$),n}return t}z.displayName="PopoverContext";let U=(0,f.createContext)(null);function V(e){let t=(0,f.useContext)(U);if(null===t){let n=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,V),n}return t}U.displayName="PopoverAPIContext";let W=(0,f.createContext)(null);function Y(){return(0,f.useContext)(W)}W.displayName="PopoverGroupContext";let _=(0,f.createContext)(null);function G(e,t){return(0,d.E)(t.type,B,e,t)}_.displayName="PopoverPanelContext";let K=(0,p.yV)(function(e,t){var n,r,o,u;let l;let a=`headlessui-popover-button-${(0,m.M)()}`,i=`headlessui-popover-panel-${(0,m.M)()}`,c=(0,f.useRef)(null),s=(0,v.T)(t,(0,v.h)(e=>{c.current=e})),E=(0,f.useReducer)(G,{popoverState:1,button:null,buttonId:a,panel:null,panelId:i,beforePanelSentinel:(0,f.createRef)(),afterPanelSentinel:(0,f.createRef)()}),[{popoverState:b,button:y,panel:P,beforePanelSentinel:h,afterPanelSentinel:g},S]=E,F=M(null!=(n=c.current)?n:y);(0,f.useEffect)(()=>S({type:3,buttonId:a}),[a,S]),(0,f.useEffect)(()=>S({type:5,panelId:i}),[i,S]);let T=(0,f.useMemo)(()=>{if(!y||!P)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(y))^Number(null==e?void 0:e.contains(P)))return!0;let t=w(),n=t.indexOf(y),r=(n+t.length-1)%t.length,o=(n+1)%t.length,u=t[r],l=t[o];return!P.contains(u)&&!P.contains(l)},[y,P]),k=(0,f.useMemo)(()=>({buttonId:a,panelId:i,close:()=>S({type:1})}),[a,i,S]),A=Y(),R=null==A?void 0:A.registerPopover,D=(0,L.z)(()=>{var e;return null!=(e=null==A?void 0:A.isFocusWithinPopoverGroup())?e:(null==F?void 0:F.activeElement)&&((null==y?void 0:y.contains(F.activeElement))||(null==P?void 0:P.contains(F.activeElement)))});(0,f.useEffect)(()=>null==R?void 0:R(k),[R,k]),r=null==F?void 0:F.defaultView,o="focus",u=e=>{var t,n,r,o;0===b&&(D()||!y||!P||null!=(n=null==(t=h.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=g.current)?void 0:r.contains)&&o.call(r,e.target)||S({type:1}))},l=(0,x.E)(u),(0,f.useEffect)(()=>{function e(e){l.current(e)}return(r=null!=r?r:window).addEventListener(o,e,!0),()=>r.removeEventListener(o,e,!0)},[r,o,!0]),function(e,t,n=!0){let r=(0,f.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let u=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),l=o(n);if(null!==l&&l.getRootNode().contains(l)){for(let a of u){if(null===a)continue;let i=a instanceof HTMLElement?a:a.current;if(null!=i&&i.contains(l))return}return N(l,O.Loose)||-1===l.tabIndex||n.preventDefault(),t(n,l)}}(0,f.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let u=(0,f.useRef)(null);C("mousedown",e=>{var t,n;r.current&&(u.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),C("click",e=>{u.current&&(o(e,()=>u.current),u.current=null)},!0),C("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}([y,P],(e,t)=>{S({type:1}),N(t,O.Loose)||(e.preventDefault(),null==y||y.focus())},0===b);let H=(0,L.z)(e=>{S({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:y:y;null==t||t.focus()}),j=(0,f.useMemo)(()=>({close:H,isPortalled:T}),[H,T]),B=(0,f.useMemo)(()=>({open:0===b,close:H}),[b,H]);return f.createElement(z.Provider,{value:E},f.createElement(U.Provider,{value:j},f.createElement(I.up,{value:(0,d.E)(b,{0:I.ZM.Open,1:I.ZM.Closed})},(0,p.sY)({ourProps:{ref:s},theirProps:e,slot:B,defaultTag:"div",name:"Popover"}))))}),Z=(0,p.yV)(function(e,t){let[n,r]=$("Popover.Button"),{isPortalled:o}=V("Popover.Button"),u=(0,f.useRef)(null),l=`headlessui-focus-sentinel-${(0,m.M)()}`,a=Y(),i=null==a?void 0:a.closeOthers,c=(0,f.useContext)(_),s=null!==c&&c===n.panelId,y=(0,v.T)(u,t,s?null:e=>e&&r({type:2,button:e})),P=(0,v.T)(u,t),g=M(u),S=(0,L.z)(e=>{var t,o,l;if(s){if(1===n.popoverState)return;switch(e.key){case E.R.Space:case E.R.Enter:e.preventDefault(),null==(o=(t=e.target).click)||o.call(t),r({type:1}),null==(l=n.button)||l.focus()}}else switch(e.key){case E.R.Space:case E.R.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==i||i(n.buttonId)),r({type:0});break;case E.R.Escape:if(0!==n.popoverState)return null==i?void 0:i(n.buttonId);if(!u.current||(null==g?void 0:g.activeElement)&&!u.current.contains(g.activeElement))return;e.preventDefault(),e.stopPropagation(),r({type:1})}}),w=(0,L.z)(e=>{s||e.key===E.R.Space&&e.preventDefault()}),O=(0,L.z)(t=>{var o,u;(0,b.P)(t.currentTarget)||e.disabled||(s?(r({type:1}),null==(o=n.button)||o.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==i||i(n.buttonId)),r({type:0}),null==(u=n.button)||u.focus()))}),N=(0,L.z)(e=>{e.preventDefault(),e.stopPropagation()}),I=0===n.popoverState,x=(0,f.useMemo)(()=>({open:I}),[I]),C=(0,T.f)(e,u),H=s?{ref:P,type:C,onKeyDown:S,onClick:O}:{ref:y,id:n.buttonId,type:C,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:S,onKeyUp:w,onClick:O,onMouseDown:N},j=D(),B=(0,L.z)(()=>{let e=n.panel;e&&(0,d.E)(j.current,{[R.Forwards]:()=>F(e,h.First),[R.Backwards]:()=>F(e,h.Last)})});return f.createElement(f.Fragment,null,(0,p.sY)({ourProps:H,theirProps:e,slot:x,defaultTag:"button",name:"Popover.Button"}),I&&!s&&o&&f.createElement(A,{id:l,features:k.Focusable,as:"button",type:"button",onFocus:B}))}),J=p.AN.RenderStrategy|p.AN.Static,q=(0,p.yV)(function(e,t){let[{popoverState:n},r]=$("Popover.Overlay"),o=(0,v.T)(t),u=`headlessui-popover-overlay-${(0,m.M)()}`,l=(0,I.oJ)(),a=null!==l?l===I.ZM.Open:0===n,i=(0,L.z)(e=>{if((0,b.P)(e.currentTarget))return e.preventDefault();r({type:1})}),c=(0,f.useMemo)(()=>({open:0===n}),[n]);return(0,p.sY)({ourProps:{ref:o,id:u,"aria-hidden":!0,onClick:i},theirProps:e,slot:c,defaultTag:"div",features:J,visible:a,name:"Popover.Overlay"})}),Q=p.AN.RenderStrategy|p.AN.Static,X=Object.assign(K,{Button:Z,Overlay:q,Panel:(0,p.yV)(function(e,t){let{focus:n=!1,...r}=e,[o,u]=$("Popover.Panel"),{close:l,isPortalled:a}=V("Popover.Panel"),i=`headlessui-focus-sentinel-before-${(0,m.M)()}`,c=`headlessui-focus-sentinel-after-${(0,m.M)()}`,s=(0,f.useRef)(null),b=(0,v.T)(s,t,e=>{u({type:4,panel:e})}),y=M(s),P=(0,I.oJ)(),g=null!==P?P===I.ZM.Open:0===o.popoverState,S=(0,L.z)(e=>{var t;if(e.key===E.R.Escape){if(0!==o.popoverState||!s.current||(null==y?void 0:y.activeElement)&&!s.current.contains(y.activeElement))return;e.preventDefault(),e.stopPropagation(),u({type:1}),null==(t=o.button)||t.focus()}});(0,f.useEffect)(()=>{var t;e.static||1===o.popoverState&&(null==(t=e.unmount)||t)&&u({type:4,panel:null})},[o.popoverState,e.unmount,e.static,u]),(0,f.useEffect)(()=>{if(!n||0!==o.popoverState||!s.current)return;let e=null==y?void 0:y.activeElement;s.current.contains(e)||F(s.current,h.First)},[n,s,o.popoverState]);let O=(0,f.useMemo)(()=>({open:0===o.popoverState,close:l}),[o,l]),N={ref:b,id:o.panelId,onKeyDown:S,onBlur:n&&0===o.popoverState?e=>{var t,n,r,l,a;let i=e.relatedTarget;!i||!s.current||null!=(t=s.current)&&t.contains(i)||(u({type:1}),((null==(r=null==(n=o.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,i))||(null==(a=null==(l=o.afterPanelSentinel.current)?void 0:l.contains)?void 0:a.call(l,i)))&&i.focus({preventScroll:!0}))}:void 0,tabIndex:-1},T=D(),x=(0,L.z)(()=>{let e=s.current;e&&(0,d.E)(T.current,{[R.Forwards](){F(e,h.First)},[R.Backwards](){var e;null==(e=o.button)||e.focus({preventScroll:!0})}})}),C=(0,L.z)(()=>{let e=s.current;e&&(0,d.E)(T.current,{[R.Forwards](){var e,t,n;if(!o.button)return;let r=w(),u=r.indexOf(o.button),l=r.slice(0,u+1),a=[...r.slice(u+1),...l];for(let i of a.slice())if((null==(t=null==(e=null==i?void 0:i.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=o.panel)?void 0:n.contains(i))){let c=a.indexOf(i);-1!==c&&a.splice(c,1)}F(a,h.First,!1)},[R.Backwards]:()=>F(e,h.Last)})});return f.createElement(_.Provider,{value:o.panelId},g&&a&&f.createElement(A,{id:i,ref:o.beforePanelSentinel,features:k.Focusable,as:"button",type:"button",onFocus:x}),(0,p.sY)({ourProps:N,theirProps:r,slot:O,defaultTag:"div",features:Q,visible:g,name:"Popover.Panel"}),g&&a&&f.createElement(A,{id:c,ref:o.afterPanelSentinel,features:k.Focusable,as:"button",type:"button",onFocus:C}))}),Group:(0,p.yV)(function(e,t){let n=(0,f.useRef)(null),r=(0,v.T)(n,t),[o,u]=(0,f.useState)([]),l=(0,L.z)(e=>{u(t=>{let n=t.indexOf(e);if(-1!==n){let r=t.slice();return r.splice(n,1),r}return t})}),a=(0,L.z)(e=>(u(t=>[...t,e]),()=>l(e))),i=(0,L.z)(()=>{var e;let t=(0,y.r)(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId))?void 0:o.contains(r))})}),c=(0,L.z)(e=>{for(let t of o)t.buttonId!==e&&t.close()}),s=(0,f.useMemo)(()=>({registerPopover:a,unregisterPopover:l,isFocusWithinPopoverGroup:i,closeOthers:c}),[a,l,i,c]),d=(0,f.useMemo)(()=>({}),[]);return f.createElement(W.Provider,{value:s},(0,p.sY)({ourProps:{ref:r},theirProps:e,slot:d,defaultTag:"div",name:"Popover.Group"}))})})},3781:function(e,t,n){n.d(t,{z:function(){return u}});var r=n(7294),o=n(3855);let u=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},9946:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(7294),u=n(6723),l=n(2180);let a=0;function i(){return++a}let c=null!=(r=o.useId)?r:function(){let e=(0,l.H)(),[t,n]=o.useState(e?i:null);return(0,u.e)(()=>{null===t&&n(i())},[t]),null!=t?""+t:void 0}},6723:function(e,t,n){n.d(t,{e:function(){return o}});var r=n(7294);let o=n(3393).s?r.useEffect:r.useLayoutEffect},3855:function(e,t,n){n.d(t,{E:function(){return u}});var r=n(7294),o=n(6723);function u(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},4157:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(7294),o=n(6723);function u(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function l(e,t){let[n,l]=(0,r.useState)(()=>u(e));return(0,o.e)(()=>{l(u(e))},[e.type,e.as]),(0,o.e)(()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&l("button")},[n,t]),n}},2180:function(e,t,n){n.d(t,{H:function(){return u}});var r=n(7294);let o={serverHandoffComplete:!1};function u(){let[e,t]=(0,r.useState)(o.serverHandoffComplete);return(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>{!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)},[]),e}},3784:function(e,t,n){n.d(t,{T:function(){return a},h:function(){return l}});var r=n(7294),o=n(3781);let u=Symbol();function l(e,t=!0){return Object.assign(e,{[u]:t})}function a(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[u]))?void 0:n}},6567:function(e,t,n){n.d(t,{ZM:function(){return l},oJ:function(){return a},up:function(){return i}});var r,o=n(7294);let u=(0,o.createContext)(null);u.displayName="OpenClosedContext";var l=((r=l||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r);function a(){return(0,o.useContext)(u)}function i({value:e,children:t}){return o.createElement(u.Provider,{value:e},t)}},4103:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},2984:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let o=t[e];return"function"==typeof o?o(...n):o}let u=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}},5466:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(3393);function o(e){return r.s?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},2351:function(e,t,n){n.d(t,{AN:function(){return a},l4:function(){return i},sY:function(){return c},yV:function(){return d}});var r,o,u=n(7294),l=n(2984),a=((r=a||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),i=((o=i||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:u=!0,name:a}){let i=f(t,e);if(u)return s(i,n,r,a);let c=null!=o?o:0;if(2&c){let{static:d=!1,...p}=i;if(d)return s(p,n,r,a)}if(1&c){let{unmount:v=!0,...m}=i;return(0,l.E)(v?0:1,{0:()=>null,1:()=>s({...m,hidden:!0,style:{display:"none"}},n,r,a)})}return s(i,n,r,a)}function s(e,t={},n,r){let{as:o=n,children:l,refName:a="ref",...i}=v(e,["unmount","static"]),c=void 0!==e.ref?{[a]:e.ref}:{},s="function"==typeof l?l(t):l;i.className&&"function"==typeof i.className&&(i.className=i.className(t));let d={};if(t){let m=!1,E=[];for(let[b,y]of Object.entries(t))"boolean"==typeof y&&(m=!0),!0===y&&E.push(b);m&&(d["data-headlessui-state"]=E.join(" "))}if(o===u.Fragment&&Object.keys(p(i)).length>0){if(!(0,u.isValidElement)(s)||Array.isArray(s)&&s.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));return(0,u.cloneElement)(s,Object.assign({},f(s.props,p(v(i,["ref"]))),d,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(s.ref,c.ref)))}return(0,u.createElement)(o,Object.assign({},v(i,["ref"]),o!==u.Fragment&&c,o!==u.Fragment&&d),s)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&"function"==typeof r[o]?(null!=n[o]||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let u in n)Object.assign(t,{[u](e,...t){let r=n[u];for(let o of r){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;o(e,...t)}}});return t}function d(e){var t;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},3393:function(e,t,n){n.d(t,{s:function(){return r}});let r="undefined"==typeof window||"undefined"==typeof document}}]);