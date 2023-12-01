"use strict";var c=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var y=c(function(E,q){
var s=require('@stdlib/math-base-assert-is-nan/dist');function R(i,a,f,l,t){var o,u,n,e,r;if(i<=0)return NaN;if(i===1||f===0)return e=l.call(t,a[0],0,0,a),e===void 0||s(e)?NaN:0;for(f<0?n=(1-i)*f:n=0,r=0;r<i&&(u=l.call(t,a[n],r,n,a),!(u===u&&u!==void 0));r++)n+=f;if(r===i)return NaN;for(o=u,r+=1,r;r<i;r++)n+=f,e=l.call(t,a[n],r,n,a),!(e===void 0||s(e))&&(e<u?u=e:e>o&&(o=e));return o-u}q.exports=R
});var d=c(function(F,p){
var m=require('@stdlib/math-base-assert-is-nan/dist');function j(i,a,f,l,t,o){var u,n,e,r,v;if(i<=0)return NaN;if(i===1||f===0)return r=t.call(o,a[0],0,0,a),r===void 0||m(r)?NaN:0;for(e=l,v=0;v<i&&(n=t.call(o,a[e],v,e,a),!(n===n&&n!==void 0));v++)e+=f;if(v===i)return NaN;for(u=n,v+=1,v;v<i;v++)e+=f,r=t.call(o,a[e],v,e,a),!(r===void 0||m(r))&&(r<n?n=r:r>u&&(u=r));return u-n}p.exports=j
});var O=c(function(G,N){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=y(),z=d();w(B,"ndarray",z);N.exports=B
});var C=O();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
