"use strict";var q=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var p=q(function(I,m){
var d=require('@stdlib/math-base-assert-is-nan/dist');function P(n,e,t,c,f,s){var u,i,v,o,a,r,l;if(u=e.data,i=e.accessors[0],n===1||t===0)return r=f.call(s,i(u,c),0,c,u),r===void 0||d(r)?NaN:0;for(a=c,l=0;l<n&&(o=f.call(s,i(u,a),l,a,u),!(o===o&&o!==void 0));l++)a+=t;if(l===n)return NaN;for(v=o,l+=1,l;l<n;l++)a+=t,r=f.call(s,i(u,a),l,a,u),!(r===void 0||d(r))&&(r<o?o=r:r>v&&(v=r));return v-o}m.exports=P
});var y=q(function(J,x){
var B=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),w=p();function z(n,e,t,c,f,s){var u,i,v,o,a,r;if(n<=0)return NaN;if(o=R(e),o.accessorProtocol)return w(n,o,t,c,f,s);if(n===1||t===0)return a=f.call(s,e[c],0,c,e),a===void 0||B(a)?NaN:0;for(v=c,r=0;r<n&&(i=f.call(s,e[v],r,v,e),!(i===i&&i!==void 0));r++)v+=t;if(r===n)return NaN;for(u=i,r+=1,r;r<n;r++)v+=t,a=f.call(s,e[v],r,v,e),!(a===void 0||B(a))&&(a<i?i=a:a>u&&(u=a));return u-i}x.exports=z
});var N=q(function(K,j){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=y();function E(n,e,t,c,f){return D(n,e,t,C(n,t),c,f)}j.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=N(),G=y();F(O,"ndarray",G);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
