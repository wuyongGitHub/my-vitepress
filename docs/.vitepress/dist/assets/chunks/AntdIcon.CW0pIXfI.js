import{X as nn,Y as en}from"./index.CrlqzJtg.js";import{L as tn,p as b,av as x,P as rn,a1 as on,a8 as an,d as cn,G as v}from"./framework.DVkiNd0e.js";let B=n=>setTimeout(n,16),L=n=>clearTimeout(n);typeof window<"u"&&"requestAnimationFrame"in window&&(B=n=>window.requestAnimationFrame(n),L=n=>window.cancelAnimationFrame(n));let A=0;const w=new Map;function M(n){w.delete(n)}function ln(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;A+=1;const t=A;function o(r){if(r===0)M(t),n();else{const a=B(()=>{o(r-1)});w.set(t,a)}}return o(e),t}ln.cancel=n=>{const e=w.get(n);return M(e),L(e)};const Un=n=>{if(!n)return!1;if(n.offsetParent)return!0;if(n.getBBox){const e=n.getBBox();if(e.width||e.height)return!0}if(n.getBoundingClientRect){const e=n.getBoundingClientRect();if(e.width||e.height)return!0}return!1};var un=Symbol("iconContext"),D=function(){return tn(un,{prefixCls:b("anticon"),rootClassName:b(""),csp:b()})};function O(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function sn(n,e){return n&&n.contains?n.contains(e):!1}var P="data-vc-order",fn="vc-icon-key",C=new Map;function z(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.mark;return e?e.startsWith("data-")?e:"data-".concat(e):fn}function T(n){if(n.attachTo)return n.attachTo;var e=document.querySelector("head");return e||document.body}function dn(n){return n==="queue"?"prependQueue":n?"prepend":"append"}function W(n){return Array.from((C.get(n)||n).children).filter(function(e){return e.tagName==="STYLE"})}function q(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!O())return null;var t=e.csp,o=e.prepend,r=document.createElement("style");r.setAttribute(P,dn(o)),t&&t.nonce&&(r.nonce=t.nonce),r.innerHTML=n;var a=T(e),i=a.firstChild;if(o){if(o==="queue"){var c=W(a).filter(function(l){return["prepend","prependQueue"].includes(l.getAttribute(P))});if(c.length)return a.insertBefore(r,c[c.length-1].nextSibling),r}a.insertBefore(r,i)}else a.appendChild(r);return r}function pn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=T(e);return W(t).find(function(o){return o.getAttribute(z(e))===n})}function mn(n,e){var t=C.get(n);if(!t||!sn(document,t)){var o=q("",e),r=o.parentNode;C.set(n,r),n.removeChild(o)}}function yn(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=T(t);mn(o,t);var r=pn(e,t);if(r)return t.csp&&t.csp.nonce&&r.nonce!==t.csp.nonce&&(r.nonce=t.csp.nonce),r.innerHTML!==n&&(r.innerHTML=n),r;var a=q(n,t);return a.setAttribute(z(t),e),a}function k(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.forEach(function(r){gn(n,r,t[r])})}return n}function gn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function $(n){return typeof n=="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(typeof n.icon=="object"||typeof n.icon=="function")}function h(n,e,t){return t?x(n.tag,k({key:e},t,n.attrs),(n.children||[]).map(function(o,r){return h(o,"".concat(e,"-").concat(n.tag,"-").concat(r))})):x(n.tag,k({key:e},n.attrs),(n.children||[]).map(function(o,r){return h(o,"".concat(e,"-").concat(n.tag,"-").concat(r))}))}function H(n){return nn(n)[0]}function U(n){return n?Array.isArray(n)?n:[n]:[]}var bn=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;function F(n){return n&&n.getRootNode&&n.getRootNode()}function vn(n){return O()?F(n)instanceof ShadowRoot:!1}function Cn(n){return vn(n)?F(n):null}var hn=function(){var e=D(),t=e.prefixCls,o=e.csp,r=on(),a=bn;t&&(a=a.replace(/anticon/g,t.value)),rn(function(){if(O()){var i=r.vnode.el,c=Cn(i);yn(a,"@ant-design-vue-icons",{prepend:!0,csp:o.value,attachTo:c})}})},wn=["icon","primaryColor","secondaryColor"];function On(n,e){if(n==null)return{};var t=Tn(n,e),o,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)o=a[r],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}function Tn(n,e){if(n==null)return{};var t={},o=Object.keys(n),r,a;for(a=0;a<o.length;a++)r=o[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function m(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.forEach(function(r){_n(n,r,t[r])})}return n}function _n(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var d=an({primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1});function Sn(n){var e=n.primaryColor,t=n.secondaryColor;d.primaryColor=e,d.secondaryColor=t||H(e),d.calculated=!!t}function jn(){return m({},d)}var s=function(e,t){var o=m({},e,t.attrs),r=o.icon,a=o.primaryColor,i=o.secondaryColor,c=On(o,wn),l=d;if(a&&(l={primaryColor:a,secondaryColor:i||H(a)}),$(r),!$(r))return null;var u=r;return u&&typeof u.icon=="function"&&(u=m({},u,{icon:u.icon(l.primaryColor,l.secondaryColor)})),h(u.icon,"svg-".concat(u.name),m({},c,{"data-icon":u.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}))};s.props={icon:Object,primaryColor:String,secondaryColor:String,focusable:String};s.inheritAttrs=!1;s.displayName="IconBase";s.getTwoToneColors=jn;s.setTwoToneColors=Sn;function In(n,e){return kn(n)||Pn(n,e)||An(n,e)||xn()}function xn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function An(n,e){if(n){if(typeof n=="string")return E(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(n,e)}}function E(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}function Pn(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var o=[],r=!0,a=!1,i,c;try{for(t=t.call(n);!(r=(i=t.next()).done)&&(o.push(i.value),!(e&&o.length===e));r=!0);}catch(l){a=!0,c=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(a)throw c}}return o}}function kn(n){if(Array.isArray(n))return n}function Y(n){var e=U(n),t=In(e,2),o=t[0],r=t[1];return s.setTwoToneColors({primaryColor:o,secondaryColor:r})}function $n(){var n=s.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var En=cn({name:"InsertStyles",setup:function(){return hn(),function(){return null}}}),Rn=["class","icon","spin","rotate","tabindex","twoToneColor","onClick"];function Nn(n,e){return Dn(n)||Mn(n,e)||Ln(n,e)||Bn()}function Bn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ln(n,e){if(n){if(typeof n=="string")return R(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(n,e)}}function R(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}function Mn(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var o=[],r=!0,a=!1,i,c;try{for(t=t.call(n);!(r=(i=t.next()).done)&&(o.push(i.value),!(e&&o.length===e));r=!0);}catch(l){a=!0,c=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(a)throw c}}return o}}function Dn(n){if(Array.isArray(n))return n}function N(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.forEach(function(r){f(n,r,t[r])})}return n}function f(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function zn(n,e){if(n==null)return{};var t=Wn(n,e),o,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)o=a[r],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}function Wn(n,e){if(n==null)return{};var t={},o=Object.keys(n),r,a;for(a=0;a<o.length;a++)r=o[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}Y(en.primary);var p=function(e,t){var o,r=N({},e,t.attrs),a=r.class,i=r.icon,c=r.spin,l=r.rotate,u=r.tabindex,Q=r.twoToneColor,_=r.onClick,V=zn(r,Rn),S=D(),y=S.prefixCls,j=S.rootClassName,G=(o={},f(o,j.value,!!j.value),f(o,y.value,!0),f(o,"".concat(y.value,"-").concat(i.name),!!i.name),f(o,"".concat(y.value,"-spin"),!!c||i.name==="loading"),o),g=u;g===void 0&&_&&(g=-1);var X=l?{msTransform:"rotate(".concat(l,"deg)"),transform:"rotate(".concat(l,"deg)")}:void 0,J=U(Q),I=Nn(J,2),Z=I[0],K=I[1];return v("span",N({role:"img","aria-label":i.name},V,{onClick:_,class:[G,a],tabindex:g}),[v(s,{icon:i,primaryColor:Z,secondaryColor:K,style:X},null),v(En,null,null)])};p.props={spin:Boolean,rotate:Number,icon:Object,twoToneColor:[String,Array]};p.displayName="AntdIcon";p.inheritAttrs=!1;p.getTwoToneColor=$n;p.setTwoToneColor=Y;export{p as I,Un as i,ln as w};
