"use strict";var d=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var f=d(function(b,v){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),q=require('@stdlib/assert-is-function/dist'),u=require('@stdlib/symbol-iterator/dist'),p=require('@stdlib/stats-incr-min/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function o(n){var r,t,i;if(!m(n))throw new TypeError(x('1KP3w',n));return i=p(),r={},a(r,"next",s),a(r,"return",c),u&&q(n[u])&&a(r,u,l),r;function s(){var e;return t?{done:!0}:(e=n.next(),e.done?(t=!0,e):(typeof e.value=="number"?e=i(e.value):e=i(NaN),{value:e,done:!1}))}function c(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return o(n[u]())}}v.exports=o
});var y=f();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
