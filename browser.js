// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).itercumin=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,a,y,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e};var c=t;function a(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(e){return"boolean"==typeof e}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function m(e,t){return null!=e&&v.call(e,t)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(e){var t,r,n;if(null==e)return d.call(e);r=e[_],t=m(e,_);try{e[_]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[_]=r:delete e[_],n}:function(e){return d.call(e)},w=Boolean.prototype.toString;var j=s();function h(e){return"object"==typeof e&&(e instanceof Boolean||(j?function(e){try{return w.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===g(e)))}function S(e){return p(e)||h(e)}function E(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",h);var T="object"==typeof self?self:null,A="object"==typeof window?window:null,O="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof O?O:null;var B=function(e){if(arguments.length){if(!p(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return E()}if(T)return T;if(A)return A;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),N=B.document&&B.document.childNodes,P=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;a(I,"REGEXP",V);var C=Array.isArray?Array.isArray:function(e){return"[object Array]"===g(e)};function G(e){return null!==e&&"object"==typeof e}function k(e){var t,r,n,o;if(("Object"===(r=g(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=V.exec(n.toString()))return t[1]}return G(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(G,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!C(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(G));var F="function"==typeof y||"object"==typeof P||"function"==typeof N?function(e){return k(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?k(e).toLowerCase():t};function L(e){return"function"===F(e)}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function R(e){return e!=e}var U=Number.NEGATIVE_INFINITY;function X(e){return 0===e&&1/e===U}return function e(t){var r,n,o,u,i,f;if(i=typeof(u=t),null===u||"object"!==i&&"function"!==i||!L(u.next))throw new TypeError(function(){var e,t=arguments,r="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}("0f649",t));return o=function(e){return 0===arguments.length?void 0===f?null:f:((void 0===f||e<f||R(e)||e===f&&X(e))&&(f=e),f)},a(r={},"next",(function(){var e;if(n)return{done:!0};if((e=t.next()).done)return n=!0,e;e="number"==typeof e.value?o(e.value):o(NaN);return{value:e,done:!1}})),a(r,"return",(function(e){if(n=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),M&&L(t[M])&&a(r,M,(function(){return e(t[M]())})),r}}));
//# sourceMappingURL=browser.js.map
