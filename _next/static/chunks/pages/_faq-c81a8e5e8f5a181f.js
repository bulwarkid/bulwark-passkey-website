(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{664:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_faq",function(){return n(9813)}])},9813:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r,o,s=n(5893),a=n(7294),l=n(2984),u=n(2351),i=n(3784),c=n(9946),d=n(1363),f=n(4103),p=n(6567),m=n(4157),h=n(5466),y=n(3781),g=((r=g||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),w=((o=w||{})[o.ToggleDisclosure=0]="ToggleDisclosure",o[o.CloseDisclosure=1]="CloseDisclosure",o[o.SetButtonId=2]="SetButtonId",o[o.SetPanelId=3]="SetPanelId",o[o.LinkPanel=4]="LinkPanel",o[o.UnlinkPanel=5]="UnlinkPanel",o);let v={0:e=>({...e,disclosureState:(0,l.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},b=(0,a.createContext)(null);function E(e){let t=(0,a.useContext)(b);if(null===t){let n=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,E),n}return t}b.displayName="DisclosureContext";let x=(0,a.createContext)(null);x.displayName="DisclosureAPIContext";let k=(0,a.createContext)(null);function P(e,t){return(0,l.E)(t.type,v,e,t)}k.displayName="DisclosurePanelContext";let S=a.Fragment,j=(0,u.yV)(function(e,t){let{defaultOpen:n=!1,...r}=e,o=`headlessui-disclosure-button-${(0,c.M)()}`,s=`headlessui-disclosure-panel-${(0,c.M)()}`,d=(0,a.useRef)(null),f=(0,i.T)(t,(0,i.h)(e=>{d.current=e},void 0===e.as||e.as===a.Fragment)),m=(0,a.useRef)(null),g=(0,a.useRef)(null),w=(0,a.useReducer)(P,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:g,panelRef:m,buttonId:o,panelId:s}),[{disclosureState:v},E]=w;(0,a.useEffect)(()=>E({type:2,buttonId:o}),[o,E]),(0,a.useEffect)(()=>E({type:3,panelId:s}),[s,E]);let k=(0,y.z)(e=>{E({type:1});let t=(0,h.r)(d);if(!t)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(o):t.getElementById(o);null==n||n.focus()}),j=(0,a.useMemo)(()=>({close:k}),[k]),N=(0,a.useMemo)(()=>({open:0===v,close:k}),[v,k]);return a.createElement(b.Provider,{value:w},a.createElement(x.Provider,{value:j},a.createElement(p.up,{value:(0,l.E)(v,{0:p.ZM.Open,1:p.ZM.Closed})},(0,u.sY)({ourProps:{ref:f},theirProps:r,slot:N,defaultTag:S,name:"Disclosure"}))))}),N=(0,u.yV)(function(e,t){let[n,r]=E("Disclosure.Button"),o=(0,a.useContext)(k),s=null!==o&&o===n.panelId,l=(0,a.useRef)(null),c=(0,i.T)(l,t,s?null:n.buttonRef),p=(0,y.z)(e=>{var t;if(s){if(1===n.disclosureState)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0}),null==(t=n.buttonRef.current)||t.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0})}}),h=(0,y.z)(e=>{e.key===d.R.Space&&e.preventDefault()}),g=(0,y.z)(t=>{var o;(0,f.P)(t.currentTarget)||e.disabled||(s?(r({type:0}),null==(o=n.buttonRef.current)||o.focus()):r({type:0}))}),w=(0,a.useMemo)(()=>({open:0===n.disclosureState}),[n]),v=(0,m.f)(e,l),b=s?{ref:c,type:v,onKeyDown:p,onClick:g}:{ref:c,id:n.buttonId,type:v,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:p,onKeyUp:h,onClick:g};return(0,u.sY)({ourProps:b,theirProps:e,slot:w,defaultTag:"button",name:"Disclosure.Button"})}),C=u.AN.RenderStrategy|u.AN.Static,I=Object.assign(j,{Button:N,Panel:(0,u.yV)(function(e,t){let[n,r]=E("Disclosure.Panel"),{close:o}=function e(t){let n=(0,a.useContext)(x);if(null===n){let r=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return n}("Disclosure.Panel"),s=(0,i.T)(t,n.panelRef,e=>{r({type:e?4:5})}),l=(0,p.oJ)(),c=null!==l?l===p.ZM.Open:0===n.disclosureState,d=(0,a.useMemo)(()=>({open:0===n.disclosureState,close:o}),[n,o]),f={ref:s,id:n.panelId};return a.createElement(k.Provider,{value:n.panelId},(0,u.sY)({ourProps:f,theirProps:e,slot:d,defaultTag:"div",features:C,visible:c,name:"Disclosure.Panel"}))})}),O=a.forwardRef(function({title:e,titleId:t,...n},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))}),D=[{question:"How does it work?",answer:(0,s.jsx)(s.Fragment,{children:"Bulwark Passkey uses USB/IP to emulate a USB device that implements the FIDO2 and U2F protocols. These protocols enable support for both Two Factor Authentication and WebAuthN, independent of your browser or OS support."})},{question:"How is the data stored?",answer:(0,s.jsx)(s.Fragment,{children:"Credentials are encrypted with a master passphrase before being stored on disk or synced up to Bulwark servers. Data can also be stored only in a local file, and never synced up to Bulwark servers."})},{question:"Is this method secure?",answer:(0,s.jsx)(s.Fragment,{children:"Credentials are encrypted at-rest with a master passphrase on the local filesystem and backed up and synced to Bulwark servers. While credentials stored in software are not as secure as credentials stored in a hardware device where they cannot be physically exported, this software based method completely eliminates phishing attacks and removes the need for copying passwords/codes. In addition, being stored in software means that the same credentials can be synced between devices for much better ease-of-use, much like a password manager."})},{question:"What platforms are supported?",answer:(0,s.jsxs)(s.Fragment,{children:["Right now, only Windows is supported, with Linux support coming very soon. We will be adding Mac support ","Soon™️",", as Mac currently does not support USB/IP, and are looking to add support for iOS and Android in the future."]})},{question:"Can I see the source code?",answer:(0,s.jsxs)(s.Fragment,{children:["Sure! Bulwark Passkey is built on top of an open source core called"," ",(0,s.jsx)("a",{className:"underline",href:"https://github.com/bulwarkid/virtual-fido",children:"Virtual FIDO"}),", which contains the USB emulation and FIDO protocol code, as well as the credential encryption and formatting. You can view the safety critical parts of the code, as well as easily decrypt and transfer your credentials out of the system."]})}];function T(){return(0,s.jsx)("div",{className:"bg-gray-50",id:"faq",children:(0,s.jsx)("div",{className:"mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"mx-auto max-w-3xl divide-y-2 divide-gray-200",children:[(0,s.jsx)("h2",{className:"text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Frequently asked questions"}),(0,s.jsx)("dl",{className:"mt-6 space-y-6 divide-y divide-gray-200",children:D.map(e=>(0,s.jsx)(I,{as:"div",className:"pt-6",children(t){let{open:n}=t;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("dt",{className:"text-lg",children:(0,s.jsxs)(I.Button,{className:"flex w-full items-start justify-between text-left text-gray-400",children:[(0,s.jsx)("span",{className:"font-medium text-gray-900",children:e.question}),(0,s.jsx)("span",{className:"ml-6 flex h-7 items-center",children:(0,s.jsx)(O,{className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}(n?"-rotate-180":"rotate-0","h-6 w-6 transform"),"aria-hidden":"true"})})]})}),(0,s.jsx)(I.Panel,{as:"dd",className:"mt-2 pr-12",children:(0,s.jsx)("p",{className:"text-base text-gray-500",children:e.answer})})]})}},e.question))})]})})})}},1363:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},3781:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r=n(7294),o=n(3855);let s=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},9946:function(e,t,n){"use strict";n.d(t,{M:function(){return i}});var r,o=n(7294),s=n(6723),a=n(2180);let l=0;function u(){return++l}let i=null!=(r=o.useId)?r:function(){let e=(0,a.H)(),[t,n]=o.useState(e?u:null);return(0,s.e)(()=>{null===t&&n(u())},[t]),null!=t?""+t:void 0}},6723:function(e,t,n){"use strict";n.d(t,{e:function(){return o}});var r=n(7294);let o=n(3393).s?r.useEffect:r.useLayoutEffect},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return s}});var r=n(7294),o=n(6723);function s(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},4157:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var r=n(7294),o=n(6723);function s(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function a(e,t){let[n,a]=(0,r.useState)(()=>s(e));return(0,o.e)(()=>{a(s(e))},[e.type,e.as]),(0,o.e)(()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")},[n,t]),n}},2180:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var r=n(7294);let o={serverHandoffComplete:!1};function s(){let[e,t]=(0,r.useState)(o.serverHandoffComplete);return(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>{!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)},[]),e}},3784:function(e,t,n){"use strict";n.d(t,{T:function(){return l},h:function(){return a}});var r=n(7294),o=n(3781);let s=Symbol();function a(e,t=!0){return Object.assign(e,{[s]:t})}function l(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[s]))?void 0:n}},6567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return a},oJ:function(){return l},up:function(){return u}});var r,o=n(7294);let s=(0,o.createContext)(null);s.displayName="OpenClosedContext";var a=((r=a||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r);function l(){return(0,o.useContext)(s)}function u({value:e,children:t}){return o.createElement(s.Provider,{value:e},t)}},4103:function(e,t,n){"use strict";function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},2984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let o=t[e];return"function"==typeof o?o(...n):o}let s=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,r),s}n.d(t,{E:function(){return r}})},5466:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var r=n(3393);function o(e){return r.s?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},2351:function(e,t,n){"use strict";n.d(t,{AN:function(){return l},l4:function(){return u},sY:function(){return i},yV:function(){return f}});var r,o,s=n(7294),a=n(2984),l=((r=l||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),u=((o=u||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function i({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:s=!0,name:l}){let u=d(t,e);if(s)return c(u,n,r,l);let i=null!=o?o:0;if(2&i){let{static:f=!1,...p}=u;if(f)return c(p,n,r,l)}if(1&i){let{unmount:m=!0,...h}=u;return(0,a.E)(m?0:1,{0:()=>null,1:()=>c({...h,hidden:!0,style:{display:"none"}},n,r,l)})}return c(u,n,r,l)}function c(e,t={},n,r){let{as:o=n,children:a,refName:l="ref",...u}=m(e,["unmount","static"]),i=void 0!==e.ref?{[l]:e.ref}:{},c="function"==typeof a?a(t):a;u.className&&"function"==typeof u.className&&(u.className=u.className(t));let f={};if(t){let h=!1,y=[];for(let[g,w]of Object.entries(t))"boolean"==typeof w&&(h=!0),!0===w&&y.push(g);h&&(f["data-headlessui-state"]=y.join(" "))}if(o===s.Fragment&&Object.keys(p(u)).length>0){if(!(0,s.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));return(0,s.cloneElement)(c,Object.assign({},d(c.props,p(m(u,["ref"]))),f,i,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,i.ref)))}return(0,s.createElement)(o,Object.assign({},m(u,["ref"]),o!==s.Fragment&&i,o!==s.Fragment&&f),c)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&"function"==typeof r[o]?(null!=n[o]||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let s in n)Object.assign(t,{[s](e,...t){let r=n[s];for(let o of r){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;o(e,...t)}}});return t}function f(e){var t;return Object.assign((0,s.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function m(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},3393:function(e,t,n){"use strict";n.d(t,{s:function(){return r}});let r="undefined"==typeof window||"undefined"==typeof document}},function(e){e.O(0,[774,888,179],function(){return e(e.s=664)}),_N_E=e.O()}]);