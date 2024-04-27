(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[185],{

/***/ 6279:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  xC: function() { return /* binding */ configureStore; },
  hg: function() { return /* binding */ createAsyncThunk; },
  oM: function() { return /* binding */ createSlice; }
});

// UNUSED EXPORTS: EnhancerArray, MiddlewareArray, SHOULD_AUTOBATCH, TaskAbortError, __DO_NOT_USE__ActionTypes, addListener, applyMiddleware, autoBatchEnhancer, bindActionCreators, clearAllListeners, combineReducers, compose, createAction, createDraftSafeSelector, createEntityAdapter, createImmutableStateInvariantMiddleware, createListenerMiddleware, createNextState, createReducer, createSelector, createSerializableStateInvariantMiddleware, createStore, current, findNonSerializableValue, freeze, getDefaultMiddleware, getType, isAction, isAllOf, isAnyOf, isAsyncThunkAction, isDraft, isFluxStandardAction, isFulfilled, isImmutableDefault, isPending, isPlain, isPlainObject, isRejected, isRejectedWithValue, legacy_createStore, miniSerializeError, nanoid, original, prepareAutoBatched, removeListener, unwrapResult

;// CONCATENATED MODULE: ./node_modules/immer/dist/immer.esm.mjs
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(false){ var i, o; }throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){var r;return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?n.add(t):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0)),n}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return true||0,U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function g(n){O(n),n.p.forEach(S),n.p=null}function O(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.g=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.O||b("ES5").S(e,r,o),o?(i[Q].P&&(g(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o,u=o,a=!1;3===e.i&&(u=new Set(o),o.clear(),a=!0),i(u,(function(r,i){return A(n,e,o,r,i,t,a)})),x(n,o,!1),t&&n.u&&b("Patches").N(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s,v){if( false&&0,r(c)){var p=M(e,c,s&&i&&3!==i.i&&!u(i.R,a)?s.concat(a):void 0);if(f(o,a,p),!r(p))return;e.m=!1}else v&&o.add(c);if(t(c)&&!y(c)){if(!e.h.D&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),!n.l&&n.h.D&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function N(n,r,t){var e=s(r)?b("MapSet").F(r,t):v(r)?b("MapSet").T(r,t):n.O?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function R(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=D(r,c),u.I=!1}else e=D(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function D(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function F(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return false&&0,en.get(r,n)},set:function(r){var t=this[Q]; false&&0,en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.g&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.R,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=i[s];"string"!=typeof p&&"number"!=typeof p&&(p=""+p),0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},N:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.R,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.R,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.R=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=N(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.g&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,R:void 0,t:n,k:this,C:!1,g:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.R.set(n,!0),t.o.set(n,r),t.R.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.R.set(n,!1):r.R.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.R=new Map,i(n.t,(function(r){n.R.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=N(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{F:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){F(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=N(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.R[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&(void 0!==t||r in n.o)||Number.isNaN(t)&&Number.isNaN(n.o[r])||(n.o[r]=t,n.R[r]=!0),!0},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.R[r]=!1,E(n),k(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return false&&0,on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return false&&0,en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.O=B,this.D=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=N(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?g(c):O(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw g(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.D&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=R(e));var i=w(this),o=N(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; false&&(0);var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.D=n},i.setUseProxies=function(r){r&&!B&&n(20),this.O=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ var immer_esm = (fn);
//# sourceMappingURL=immer.esm.js.map

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(75);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if ((0,esm_typeof/* default */.Z)(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,esm_typeof/* default */.Z)(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return (0,esm_typeof/* default */.Z)(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
;// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = (/* unused pure expression or super */ null && (createStore));

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 0);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}



;// CONCATENATED MODULE: ./node_modules/redux-thunk/es/index.js
/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
/* harmony default export */ var es = (thunk);
;// CONCATENATED MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js
/* provided dependency */ var process = __webpack_require__(2601);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __spreadValues = function (a, b) {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++) {
            var prop = _c[_i];
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps = function (a, b) { return __defProps(a, __getOwnPropDescs(b)); };
var __async = function (__this, __arguments, generator) {
    return new Promise(function (resolve, reject) {
        var fulfilled = function (value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var rejected = function (value) {
            try {
                step(generator.throw(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var step = function (x) { return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected); };
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
// src/index.ts




// src/createDraftSafeSelector.ts


var createDraftSafeSelector = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var selector = createSelector.apply(void 0, args);
    var wrappedSelector = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return selector.apply(void 0, __spreadArray([isDraft(value) ? current(value) : value], rest));
    };
    return wrappedSelector;
};
// src/configureStore.ts

// src/devtoolsExtension.ts

var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length === 0)
        return void 0;
    if (typeof arguments[0] === "object")
        return compose;
    return compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
    return function (noop2) {
        return noop2;
    };
};
// src/isPlainObject.ts
function redux_toolkit_esm_isPlainObject(value) {
    if (typeof value !== "object" || value === null)
        return false;
    var proto = Object.getPrototypeOf(value);
    if (proto === null)
        return true;
    var baseProto = proto;
    while (Object.getPrototypeOf(baseProto) !== null) {
        baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
}
// src/getDefaultMiddleware.ts

// src/utils.ts

function getTimeMeasureUtils(maxDelay, fnName) {
    var elapsed = 0;
    return {
        measureTime: function (fn) {
            var started = Date.now();
            try {
                return fn();
            }
            finally {
                var finished = Date.now();
                elapsed += finished - started;
            }
        },
        warnIfExceeded: function () {
            if (elapsed > maxDelay) {
                console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
            }
        }
    };
}
var MiddlewareArray = /** @class */ (function (_super) {
    __extends(MiddlewareArray, _super);
    function MiddlewareArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, MiddlewareArray.prototype);
        return _this;
    }
    Object.defineProperty(MiddlewareArray, Symbol.species, {
        get: function () {
            return MiddlewareArray;
        },
        enumerable: false,
        configurable: true
    });
    MiddlewareArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray;
}(Array));
var EnhancerArray = /** @class */ (function (_super) {
    __extends(EnhancerArray, _super);
    function EnhancerArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, EnhancerArray.prototype);
        return _this;
    }
    Object.defineProperty(EnhancerArray, Symbol.species, {
        get: function () {
            return EnhancerArray;
        },
        enumerable: false,
        configurable: true
    });
    EnhancerArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    EnhancerArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray([void 0], arr.concat(this))))();
    };
    return EnhancerArray;
}(Array));
function freezeDraftable(val) {
    return t(val) ? immer_esm(val, function () {
    }) : val;
}
// src/immutableStateInvariantMiddleware.ts
var isProduction = (/* unused pure expression or super */ null && ("production" === "production"));
var prefix = "Invariant failed";
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ""));
}
function stringify(obj, serializer, indent, decycler) {
    return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}
function getSerialize(serializer, decycler) {
    var stack = [], keys = [];
    if (!decycler)
        decycler = function (_, value) {
            if (stack[0] === value)
                return "[Circular ~]";
            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
        };
    return function (key, value) {
        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value))
                value = decycler.call(this, key, value);
        }
        else
            stack.push(value);
        return serializer == null ? value : serializer.call(this, key, value);
    };
}
function isImmutableDefault(value) {
    return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
    var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
        detectMutations: function () {
            return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
        }
    };
}
function trackProperties(isImmutable, ignorePaths, obj, path) {
    if (ignorePaths === void 0) { ignorePaths = []; }
    if (path === void 0) { path = ""; }
    var tracked = { value: obj };
    if (!isImmutable(obj)) {
        tracked.children = {};
        for (var key in obj) {
            var childPath = path ? path + "." + key : key;
            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
                continue;
            }
            tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
        }
    }
    return tracked;
}
function detectMutations(isImmutable, ignoredPaths, trackedProperty, obj, sameParentRef, path) {
    if (ignoredPaths === void 0) { ignoredPaths = []; }
    if (sameParentRef === void 0) { sameParentRef = false; }
    if (path === void 0) { path = ""; }
    var prevObj = trackedProperty ? trackedProperty.value : void 0;
    var sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
        return { wasMutated: true, path: path };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
        return { wasMutated: false };
    }
    var keysToDetect = {};
    for (var key in trackedProperty.children) {
        keysToDetect[key] = true;
    }
    for (var key in obj) {
        keysToDetect[key] = true;
    }
    var hasIgnoredPaths = ignoredPaths.length > 0;
    var _loop_1 = function (key) {
        var nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            var hasMatches = ignoredPaths.some(function (ignored) {
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                return "continue";
            }
        }
        var result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
        if (result.wasMutated) {
            return { value: result };
        }
    };
    for (var key in keysToDetect) {
        var state_1 = _loop_1(key);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return { wasMutated: false };
}
function createImmutableStateInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (true) {
        return function () { return function (next) { return function (action) { return next(action); }; }; };
    }
    var _c = options.isImmutable, isImmutable = _c === void 0 ? isImmutableDefault : _c, ignoredPaths = options.ignoredPaths, _d = options.warnAfter, warnAfter = _d === void 0 ? 32 : _d, ignore = options.ignore;
    ignoredPaths = ignoredPaths || ignore;
    var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
    return function (_c) {
        var getState = _c.getState;
        var state = getState();
        var tracker = track(state);
        var result;
        return function (next) { return function (action) {
            var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
            measureUtils.measureTime(function () {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
            });
            var dispatchedAction = next(action);
            measureUtils.measureTime(function () {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
            });
            measureUtils.warnIfExceeded();
            return dispatchedAction;
        }; };
    };
}
// src/serializableStateInvariantMiddleware.ts
function isPlain(val) {
    var type = typeof val;
    return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || redux_toolkit_esm_isPlainObject(val);
}
function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths, cache) {
    if (path === void 0) { path = ""; }
    if (isSerializable === void 0) { isSerializable = isPlain; }
    if (ignoredPaths === void 0) { ignoredPaths = []; }
    var foundNestedSerializable;
    if (!isSerializable(value)) {
        return {
            keyPath: path || "<root>",
            value: value
        };
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    if (cache == null ? void 0 : cache.has(value))
        return false;
    var entries = getEntries != null ? getEntries(value) : Object.entries(value);
    var hasIgnoredPaths = ignoredPaths.length > 0;
    var _loop_2 = function (key, nestedValue) {
        var nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            var hasMatches = ignoredPaths.some(function (ignored) {
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                return "continue";
            }
        }
        if (!isSerializable(nestedValue)) {
            return { value: {
                    keyPath: nestedPath,
                    value: nestedValue
                } };
        }
        if (typeof nestedValue === "object") {
            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
            if (foundNestedSerializable) {
                return { value: foundNestedSerializable };
            }
        }
    };
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var _c = entries_1[_i], key = _c[0], nestedValue = _c[1];
        var state_2 = _loop_2(key, nestedValue);
        if (typeof state_2 === "object")
            return state_2.value;
    }
    if (cache && isNestedFrozen(value))
        cache.add(value);
    return false;
}
function isNestedFrozen(value) {
    if (!Object.isFrozen(value))
        return false;
    for (var _i = 0, _c = Object.values(value); _i < _c.length; _i++) {
        var nestedValue = _c[_i];
        if (typeof nestedValue !== "object" || nestedValue === null)
            continue;
        if (!isNestedFrozen(nestedValue))
            return false;
    }
    return true;
}
function createSerializableStateInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (true) {
        return function () { return function (next) { return function (action) { return next(action); }; }; };
    }
    var _c = options.isSerializable, isSerializable = _c === void 0 ? isPlain : _c, getEntries = options.getEntries, _d = options.ignoredActions, ignoredActions = _d === void 0 ? [] : _d, _e = options.ignoredActionPaths, ignoredActionPaths = _e === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _e, _f = options.ignoredPaths, ignoredPaths = _f === void 0 ? [] : _f, _g = options.warnAfter, warnAfter = _g === void 0 ? 32 : _g, _h = options.ignoreState, ignoreState = _h === void 0 ? false : _h, _j = options.ignoreActions, ignoreActions = _j === void 0 ? false : _j, _k = options.disableCache, disableCache = _k === void 0 ? false : _k;
    var cache = !disableCache && WeakSet ? new WeakSet() : void 0;
    return function (storeAPI) { return function (next) { return function (action) {
        var result = next(action);
        var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
        if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
            measureUtils.measureTime(function () {
                var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
                if (foundActionNonSerializableValue) {
                    var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
                    console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
                }
            });
        }
        if (!ignoreState) {
            measureUtils.measureTime(function () {
                var state = storeAPI.getState();
                var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
                if (foundStateNonSerializableValue) {
                    var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
                    console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
                }
            });
            measureUtils.warnIfExceeded();
        }
        return result;
    }; }; };
}
// src/getDefaultMiddleware.ts
function isBoolean(x) {
    return typeof x === "boolean";
}
function curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
        return getDefaultMiddleware(options);
    };
}
function getDefaultMiddleware(options) {
    if (options === void 0) { options = {}; }
    var _c = options.thunk, thunk = _c === void 0 ? true : _c, _d = options.immutableCheck, immutableCheck = _d === void 0 ? true : _d, _e = options.serializableCheck, serializableCheck = _e === void 0 ? true : _e;
    var middlewareArray = new MiddlewareArray();
    if (thunk) {
        if (isBoolean(thunk)) {
            middlewareArray.push(es);
        }
        else {
            middlewareArray.push(es.withExtraArgument(thunk.extraArgument));
        }
    }
    if (false) { var serializableOptions, immutableOptions; }
    return middlewareArray;
}
// src/configureStore.ts
var IS_PRODUCTION = "production" === "production";
function configureStore(options) {
    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
    var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
    var rootReducer;
    if (typeof reducer === "function") {
        rootReducer = reducer;
    }
    else if (redux_toolkit_esm_isPlainObject(reducer)) {
        rootReducer = combineReducers(reducer);
    }
    else {
        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    }
    var finalMiddleware = middleware;
    if (typeof finalMiddleware === "function") {
        finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
        if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
            throw new Error("when using a middleware builder function, an array of middleware must be returned");
        }
    }
    if (!IS_PRODUCTION && finalMiddleware.some(function (item) { return typeof item !== "function"; })) {
        throw new Error("each middleware provided to configureStore must be a function");
    }
    var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
    var finalCompose = compose;
    if (devTools) {
        finalCompose = composeWithDevTools(__spreadValues({
            trace: !IS_PRODUCTION
        }, typeof devTools === "object" && devTools));
    }
    var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
    var storeEnhancers = defaultEnhancers;
    if (Array.isArray(enhancers)) {
        storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
    }
    else if (typeof enhancers === "function") {
        storeEnhancers = enhancers(defaultEnhancers);
    }
    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
    return createStore(rootReducer, preloadedState, composedEnhancer);
}
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (prepareAction) {
            var prepared = prepareAction.apply(void 0, args);
            if (!prepared) {
                throw new Error("prepareAction did not return an object");
            }
            return __spreadValues(__spreadValues({
                type: type,
                payload: prepared.payload
            }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
        }
        return { type: type, payload: args[0] };
    }
    actionCreator.toString = function () { return "" + type; };
    actionCreator.type = type;
    actionCreator.match = function (action) { return action.type === type; };
    return actionCreator;
}
function isAction(action) {
    return redux_toolkit_esm_isPlainObject(action) && "type" in action;
}
function isFSA(action) {
    return isAction(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}
function getType(actionCreator) {
    return "" + actionCreator;
}
// src/createReducer.ts

// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
        addCase: function (typeOrActionCreator, reducer) {
            if (false) {}
            var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (type in actionsMap) {
                throw new Error("addCase cannot be called with two reducers for the same action type");
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addMatcher: function (matcher, reducer) {
            if (false) {}
            actionMatchers.push({ matcher: matcher, reducer: reducer });
            return builder;
        },
        addDefaultCase: function (reducer) {
            if (false) {}
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
}
// src/createReducer.ts
function isStateFunction(x) {
    return typeof x === "function";
}
var hasWarnedAboutObjectNotation = false;
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) { actionMatchers = []; }
    if (false) {}
    var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
    var getInitialState;
    if (isStateFunction(initialState)) {
        getInitialState = function () { return freezeDraftable(initialState()); };
    }
    else {
        var frozenInitialState_1 = freezeDraftable(initialState);
        getInitialState = function () { return frozenInitialState_1; };
    }
    function reducer(state, action) {
        if (state === void 0) { state = getInitialState(); }
        var caseReducers = __spreadArray([
            actionsMap[action.type]
        ], finalActionMatchers.filter(function (_c) {
            var matcher = _c.matcher;
            return matcher(action);
        }).map(function (_c) {
            var reducer2 = _c.reducer;
            return reducer2;
        }));
        if (caseReducers.filter(function (cr) { return !!cr; }).length === 0) {
            caseReducers = [finalDefaultCaseReducer];
        }
        return caseReducers.reduce(function (previousState, caseReducer) {
            if (caseReducer) {
                if (r(previousState)) {
                    var draft = previousState;
                    var result = caseReducer(draft, action);
                    if (result === void 0) {
                        return previousState;
                    }
                    return result;
                }
                else if (!t(previousState)) {
                    var result = caseReducer(previousState, action);
                    if (result === void 0) {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                }
                else {
                    return immer_esm(previousState, function (draft) {
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
}
// src/createSlice.ts
var hasWarnedAboutObjectNotation2 = false;
function getType2(slice, actionKey) {
    return slice + "/" + actionKey;
}
function createSlice(options) {
    var name = options.name;
    if (!name) {
        throw new Error("`name` is a required option for createSlice");
    }
    if (typeof process !== "undefined" && "production" === "development") {}
    var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
    var reducers = options.reducers || {};
    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function (reducerName) {
        var maybeReducerWithPrepare = reducers[reducerName];
        var type = getType2(name, reducerName);
        var caseReducer;
        var prepareCallback;
        if ("reducer" in maybeReducerWithPrepare) {
            caseReducer = maybeReducerWithPrepare.reducer;
            prepareCallback = maybeReducerWithPrepare.prepare;
        }
        else {
            caseReducer = maybeReducerWithPrepare;
        }
        sliceCaseReducersByName[reducerName] = caseReducer;
        sliceCaseReducersByType[type] = caseReducer;
        actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });
    function buildReducer() {
        if (false) {}
        var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
        var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
        return createReducer(initialState, function (builder) {
            for (var key in finalCaseReducers) {
                builder.addCase(key, finalCaseReducers[key]);
            }
            for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
                var m = actionMatchers_1[_i];
                builder.addMatcher(m.matcher, m.reducer);
            }
            if (defaultCaseReducer) {
                builder.addDefaultCase(defaultCaseReducer);
            }
        });
    }
    var _reducer;
    return {
        name: name,
        reducer: function (state, action) {
            if (!_reducer)
                _reducer = buildReducer();
            return _reducer(state, action);
        },
        actions: actionCreators,
        caseReducers: sliceCaseReducersByName,
        getInitialState: function () {
            if (!_reducer)
                _reducer = buildReducer();
            return _reducer.getInitialState();
        }
    };
}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) { return ids.map(function (id) { return entities[id]; }); });
        var selectId = function (_, id) { return id; };
        var selectById = function (entities, id) { return entities[id]; };
        var selectTotal = createDraftSafeSelector(selectIds, function (ids) { return ids.length; });
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
                selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
            };
        }
        var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
        return {
            selectIds: createDraftSafeSelector(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createDraftSafeSelector(selectState, selectAll),
            selectTotal: createDraftSafeSelector(selectState, selectTotal),
            selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return { getSelectors: getSelectors };
}
// src/entities/state_adapter.ts

function createSingleArgumentStateOperator(mutator) {
    var operator = createStateOperator(function (_, state) { return mutator(state); });
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        var runMutator = function (draft) {
            if (isPayloadActionArgument(arg)) {
                mutator(arg.payload, draft);
            }
            else {
                mutator(arg, draft);
            }
        };
        if (isDraft3(state)) {
            runMutator(state);
            return state;
        }
        else {
            return createNextState3(state, runMutator);
        }
    };
}
// src/entities/utils.ts
function selectIdValue(entity, selectId) {
    var key = selectId(entity);
    if (false) {}
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
        entities = Object.values(entities);
    }
    return entities;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    var added = [];
    var updated = [];
    for (var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++) {
        var entity = newEntities_1[_i];
        var id = selectIdValue(entity, selectId);
        if (id in state.entities) {
            updated.push({ id: id, changes: entity });
        }
        else {
            added.push(entity);
        }
    }
    return [added, updated];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return;
        }
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++) {
            var entity = newEntities_2[_i];
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) {
            state.ids.push(key);
        }
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++) {
            var entity = newEntities_3[_i];
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
        var didMutate = false;
        keys.forEach(function (key) {
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        var original2 = state.entities[update.id];
        var updated = Object.assign({}, original2, update.changes);
        var newKey = selectIdValue(updated, selectId);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        var updatesPerEntity = {};
        updates.forEach(function (update) {
            if (update.id in state.entities) {
                updatesPerEntity[update.id] = {
                    id: update.id,
                    changes: __spreadValues(__spreadValues({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
                };
            }
        });
        updates = Object.values(updatesPerEntity);
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = Object.keys(state.entities);
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function createSortedStateAdapter(selectId, sort) {
    var _c = createUnsortedStateAdapter(selectId), removeOne = _c.removeOne, removeMany = _c.removeMany, removeAll = _c.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        var models = newEntities.filter(function (model) { return !(selectIdValue(model, selectId) in state.entities); });
        if (models.length !== 0) {
            merge(models, state);
        }
    }
    function setOneMutably(entity, state) {
        return setManyMutably([entity], state);
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) {
            merge(newEntities, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var appliedUpdates = false;
        for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
            var update = updates_1[_i];
            var entity = state.entities[update.id];
            if (!entity) {
                continue;
            }
            appliedUpdates = true;
            Object.assign(entity, update.changes);
            var newId = selectId(entity);
            if (update.id !== newId) {
                delete state.entities[update.id];
                state.entities[newId] = entity;
            }
        }
        if (appliedUpdates) {
            resortEntities(state);
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length && i < b.length; i++) {
            if (a[i] === b[i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    function merge(models, state) {
        models.forEach(function (model) {
            state.entities[selectId(model)] = model;
        });
        resortEntities(state);
    }
    function resortEntities(state) {
        var allEntities = Object.values(state.entities);
        allEntities.sort(sort);
        var newSortedIds = allEntities.map(selectId);
        var ids = state.ids;
        if (!areArraysEqual(ids, newSortedIds)) {
            state.ids = newSortedIds;
        }
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _c = __spreadValues({
        sortComparer: false,
        selectId: function (instance) { return instance.id; }
    }, options), selectId = _c.selectId, sortComparer = _c.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    return __spreadValues(__spreadValues(__spreadValues({
        selectId: selectId,
        sortComparer: sortComparer
    }, stateFactory), selectorsFactory), stateAdapter);
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function (size) {
    if (size === void 0) { size = 21; }
    var id = "";
    var i = size;
    while (i--) {
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = /** @class */ (function () {
    function RejectWithValue(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return RejectWithValue;
}());
var FulfillWithMeta = /** @class */ (function () {
    function FulfillWithMeta(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return FulfillWithMeta;
}());
var miniSerializeError = function (value) {
    if (typeof value === "object" && value !== null) {
        var simpleError = {};
        for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
            var property = commonProperties_1[_i];
            if (typeof value[property] === "string") {
                simpleError[property] = value[property];
            }
        }
        return simpleError;
    }
    return { message: String(value) };
};
var createAsyncThunk = (function () {
    function createAsyncThunk2(typePrefix, payloadCreator, options) {
        var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) { return ({
            payload: payload,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "fulfilled"
            })
        }); });
        var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) { return ({
            payload: void 0,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "pending"
            })
        }); });
        var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) { return ({
            payload: payload,
            error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                rejectedWithValue: !!payload,
                requestStatus: "rejected",
                aborted: (error == null ? void 0 : error.name) === "AbortError",
                condition: (error == null ? void 0 : error.name) === "ConditionError"
            })
        }); });
        var displayedWarning = false;
        var AC = typeof AbortController !== "undefined" ? AbortController : /** @class */ (function () {
            function class_1() {
                this.signal = {
                    aborted: false,
                    addEventListener: function () {
                    },
                    dispatchEvent: function () {
                        return false;
                    },
                    onabort: function () {
                    },
                    removeEventListener: function () {
                    },
                    reason: void 0,
                    throwIfAborted: function () {
                    }
                };
            }
            class_1.prototype.abort = function () {
                if (false) {}
            };
            return class_1;
        }());
        function actionCreator(arg) {
            return function (dispatch, getState, extra) {
                var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
                var abortController = new AC();
                var abortReason;
                var started = false;
                function abort(reason) {
                    abortReason = reason;
                    abortController.abort();
                }
                var promise2 = function () {
                    return __async(this, null, function () {
                        var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 4, , 5]);
                                    conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState: getState, extra: extra });
                                    if (!isThenable(conditionResult)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, conditionResult];
                                case 1:
                                    conditionResult = _c.sent();
                                    _c.label = 2;
                                case 2:
                                    if (conditionResult === false || abortController.signal.aborted) {
                                        throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                    }
                                    started = true;
                                    abortedPromise = new Promise(function (_, reject) { return abortController.signal.addEventListener("abort", function () { return reject({
                                        name: "AbortError",
                                        message: abortReason || "Aborted"
                                    }); }); });
                                    dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId: requestId, arg: arg }, { getState: getState, extra: extra })));
                                    return [4 /*yield*/, Promise.race([
                                            abortedPromise,
                                            Promise.resolve(payloadCreator(arg, {
                                                dispatch: dispatch,
                                                getState: getState,
                                                extra: extra,
                                                requestId: requestId,
                                                signal: abortController.signal,
                                                abort: abort,
                                                rejectWithValue: function (value, meta) {
                                                    return new RejectWithValue(value, meta);
                                                },
                                                fulfillWithValue: function (value, meta) {
                                                    return new FulfillWithMeta(value, meta);
                                                }
                                            })).then(function (result) {
                                                if (result instanceof RejectWithValue) {
                                                    throw result;
                                                }
                                                if (result instanceof FulfillWithMeta) {
                                                    return fulfilled(result.payload, requestId, arg, result.meta);
                                                }
                                                return fulfilled(result, requestId, arg);
                                            })
                                        ])];
                                case 3:
                                    finalAction = _c.sent();
                                    return [3 /*break*/, 5];
                                case 4:
                                    err_1 = _c.sent();
                                    finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                                    return [3 /*break*/, 5];
                                case 5:
                                    skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                                    if (!skipDispatch) {
                                        dispatch(finalAction);
                                    }
                                    return [2 /*return*/, finalAction];
                            }
                        });
                    });
                }();
                return Object.assign(promise2, {
                    abort: abort,
                    requestId: requestId,
                    arg: arg,
                    unwrap: function () {
                        return promise2.then(unwrapResult);
                    }
                });
            };
        }
        return Object.assign(actionCreator, {
            pending: pending,
            rejected: rejected,
            fulfilled: fulfilled,
            typePrefix: typePrefix
        });
    }
    createAsyncThunk2.withTypes = function () { return createAsyncThunk2; };
    return createAsyncThunk2;
})();
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
        throw action.payload;
    }
    if (action.error) {
        throw action.error;
    }
    return action.payload;
}
function isThenable(value) {
    return value !== null && typeof value === "object" && typeof value.then === "function";
}
// src/tsHelpers.ts
var hasMatchFunction = function (v) {
    return v && typeof v.match === "function";
};
// src/matchers.ts
var matches = function (matcher, action) {
    if (hasMatchFunction(matcher)) {
        return matcher.match(action);
    }
    else {
        return matcher(action);
    }
};
function isAnyOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.some(function (matcher) { return matches(matcher, action); });
    };
}
function isAllOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.every(function (matcher) { return matches(matcher, action); });
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta)
        return false;
    var hasValidRequestId = typeof action.meta.requestId === "string";
    var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isPending()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.pending; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejected() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejected()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.rejected; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejectedWithValue() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    var hasFlag = function (action) {
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
        return function (action) {
            var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
            return combinedMatcher(action);
        };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejectedWithValue()(asyncThunks[0]);
    }
    return function (action) {
        var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
        return combinedMatcher(action);
    };
}
function isFulfilled() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["fulfilled"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isFulfilled()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.fulfilled; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isAsyncThunkAction() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isAsyncThunkAction()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = [];
        for (var _i = 0, asyncThunks_1 = asyncThunks; _i < asyncThunks_1.length; _i++) {
            var asyncThunk = asyncThunks_1[_i];
            matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
        }
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
// src/listenerMiddleware/utils.ts
var assertFunction = function (func, expected) {
    if (typeof func !== "function") {
        throw new TypeError(expected + " is not a function");
    }
};
var noop = function () {
};
var catchRejection = function (promise2, onError) {
    if (onError === void 0) { onError = noop; }
    promise2.catch(onError);
    return promise2;
};
var addAbortSignalListener = function (abortSignal, callback) {
    abortSignal.addEventListener("abort", callback, { once: true });
    return function () { return abortSignal.removeEventListener("abort", callback); };
};
var abortControllerWithReason = function (abortController, reason) {
    var signal = abortController.signal;
    if (signal.aborted) {
        return;
    }
    if (!("reason" in signal)) {
        Object.defineProperty(signal, "reason", {
            enumerable: true,
            value: reason,
            configurable: true,
            writable: true
        });
    }
    ;
    abortController.abort(reason);
};
// src/listenerMiddleware/exceptions.ts
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = "task-" + cancelled;
var taskCompleted = "task-" + completed;
var listenerCancelled = listener + "-" + cancelled;
var listenerCompleted = listener + "-" + completed;
var TaskAbortError = /** @class */ (function () {
    function TaskAbortError(code) {
        this.code = code;
        this.name = "TaskAbortError";
        this.message = task + " " + cancelled + " (reason: " + code + ")";
    }
    return TaskAbortError;
}());
// src/listenerMiddleware/task.ts
var validateActive = function (signal) {
    if (signal.aborted) {
        throw new TaskAbortError(signal.reason);
    }
};
function raceWithSignal(signal, promise2) {
    var cleanup = noop;
    return new Promise(function (resolve, reject) {
        var notifyRejection = function () { return reject(new TaskAbortError(signal.reason)); };
        if (signal.aborted) {
            notifyRejection();
            return;
        }
        cleanup = addAbortSignalListener(signal, notifyRejection);
        promise2.finally(function () { return cleanup(); }).then(resolve, reject);
    }).finally(function () {
        cleanup = noop;
    });
}
var runTask = function (task2, cleanUp) { return __async(void 0, null, function () {
    var value, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, 4, 5]);
                return [4 /*yield*/, Promise.resolve()];
            case 1:
                _c.sent();
                return [4 /*yield*/, task2()];
            case 2:
                value = _c.sent();
                return [2 /*return*/, {
                        status: "ok",
                        value: value
                    }];
            case 3:
                error_1 = _c.sent();
                return [2 /*return*/, {
                        status: error_1 instanceof TaskAbortError ? "cancelled" : "rejected",
                        error: error_1
                    }];
            case 4:
                cleanUp == null ? void 0 : cleanUp();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
var createPause = function (signal) {
    return function (promise2) {
        return catchRejection(raceWithSignal(signal, promise2).then(function (output) {
            validateActive(signal);
            return output;
        }));
    };
};
var createDelay = function (signal) {
    var pause = createPause(signal);
    return function (timeoutMs) {
        return pause(new Promise(function (resolve) { return setTimeout(resolve, timeoutMs); }));
    };
};
// src/listenerMiddleware/index.ts
var redux_toolkit_esm_assign = Object.assign;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = function (parentAbortSignal) {
    var linkControllers = function (controller) { return addAbortSignalListener(parentAbortSignal, function () { return abortControllerWithReason(controller, parentAbortSignal.reason); }); };
    return function (taskExecutor) {
        assertFunction(taskExecutor, "taskExecutor");
        var childAbortController = new AbortController();
        linkControllers(childAbortController);
        var result = runTask(function () { return __async(void 0, null, function () {
            var result2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        validateActive(parentAbortSignal);
                        validateActive(childAbortController.signal);
                        return [4 /*yield*/, taskExecutor({
                                pause: createPause(childAbortController.signal),
                                delay: createDelay(childAbortController.signal),
                                signal: childAbortController.signal
                            })];
                    case 1:
                        result2 = _c.sent();
                        validateActive(childAbortController.signal);
                        return [2 /*return*/, result2];
                }
            });
        }); }, function () { return abortControllerWithReason(childAbortController, taskCompleted); });
        return {
            result: createPause(parentAbortSignal)(result),
            cancel: function () {
                abortControllerWithReason(childAbortController, taskCancelled);
            }
        };
    };
};
var createTakePattern = function (startListening, signal) {
    var take = function (predicate, timeout) { return __async(void 0, null, function () {
        var unsubscribe, tuplePromise, promises, output;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    validateActive(signal);
                    unsubscribe = function () {
                    };
                    tuplePromise = new Promise(function (resolve, reject) {
                        var stopListening = startListening({
                            predicate: predicate,
                            effect: function (action, listenerApi) {
                                listenerApi.unsubscribe();
                                resolve([
                                    action,
                                    listenerApi.getState(),
                                    listenerApi.getOriginalState()
                                ]);
                            }
                        });
                        unsubscribe = function () {
                            stopListening();
                            reject();
                        };
                    });
                    promises = [
                        tuplePromise
                    ];
                    if (timeout != null) {
                        promises.push(new Promise(function (resolve) { return setTimeout(resolve, timeout, null); }));
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, raceWithSignal(signal, Promise.race(promises))];
                case 2:
                    output = _c.sent();
                    validateActive(signal);
                    return [2 /*return*/, output];
                case 3:
                    unsubscribe();
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return function (predicate, timeout) { return catchRejection(take(predicate, timeout)); };
};
var getListenerEntryPropsFrom = function (options) {
    var type = options.type, actionCreator = options.actionCreator, matcher = options.matcher, predicate = options.predicate, effect = options.effect;
    if (type) {
        predicate = createAction(type).match;
    }
    else if (actionCreator) {
        type = actionCreator.type;
        predicate = actionCreator.match;
    }
    else if (matcher) {
        predicate = matcher;
    }
    else if (predicate) {
    }
    else {
        throw new Error("Creating or removing a listener requires one of the known fields for matching an action");
    }
    assertFunction(effect, "options.listener");
    return { predicate: predicate, type: type, effect: effect };
};
var createListenerEntry = function (options) {
    var _c = getListenerEntryPropsFrom(options), type = _c.type, predicate = _c.predicate, effect = _c.effect;
    var id = nanoid();
    var entry = {
        id: id,
        effect: effect,
        type: type,
        predicate: predicate,
        pending: new Set(),
        unsubscribe: function () {
            throw new Error("Unsubscribe not initialized");
        }
    };
    return entry;
};
var cancelActiveListeners = function (entry) {
    entry.pending.forEach(function (controller) {
        abortControllerWithReason(controller, listenerCancelled);
    });
};
var createClearListenerMiddleware = function (listenerMap) {
    return function () {
        listenerMap.forEach(cancelActiveListeners);
        listenerMap.clear();
    };
};
var safelyNotifyError = function (errorHandler, errorToNotify, errorInfo) {
    try {
        errorHandler(errorToNotify, errorInfo);
    }
    catch (errorHandlerError) {
        setTimeout(function () {
            throw errorHandlerError;
        }, 0);
    }
};
var addListener = createAction(alm + "/add");
var clearAllListeners = createAction(alm + "/removeAll");
var removeListener = createAction(alm + "/remove");
var defaultErrorHandler = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.error.apply(console, __spreadArray([alm + "/error"], args));
};
function createListenerMiddleware(middlewareOptions) {
    var _this = this;
    if (middlewareOptions === void 0) { middlewareOptions = {}; }
    var listenerMap = new Map();
    var extra = middlewareOptions.extra, _c = middlewareOptions.onError, onError = _c === void 0 ? defaultErrorHandler : _c;
    assertFunction(onError, "onError");
    var insertEntry = function (entry) {
        entry.unsubscribe = function () { return listenerMap.delete(entry.id); };
        listenerMap.set(entry.id, entry);
        return function (cancelOptions) {
            entry.unsubscribe();
            if (cancelOptions == null ? void 0 : cancelOptions.cancelActive) {
                cancelActiveListeners(entry);
            }
        };
    };
    var findListenerEntry = function (comparator) {
        for (var _i = 0, _c = Array.from(listenerMap.values()); _i < _c.length; _i++) {
            var entry = _c[_i];
            if (comparator(entry)) {
                return entry;
            }
        }
        return void 0;
    };
    var startListening = function (options) {
        var entry = findListenerEntry(function (existingEntry) { return existingEntry.effect === options.effect; });
        if (!entry) {
            entry = createListenerEntry(options);
        }
        return insertEntry(entry);
    };
    var stopListening = function (options) {
        var _c = getListenerEntryPropsFrom(options), type = _c.type, effect = _c.effect, predicate = _c.predicate;
        var entry = findListenerEntry(function (entry2) {
            var matchPredicateOrType = typeof type === "string" ? entry2.type === type : entry2.predicate === predicate;
            return matchPredicateOrType && entry2.effect === effect;
        });
        if (entry) {
            entry.unsubscribe();
            if (options.cancelActive) {
                cancelActiveListeners(entry);
            }
        }
        return !!entry;
    };
    var notifyListener = function (entry, action, api, getOriginalState) { return __async(_this, null, function () {
        var internalTaskController, take, listenerError_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    internalTaskController = new AbortController();
                    take = createTakePattern(startListening, internalTaskController.signal);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, 4, 5]);
                    entry.pending.add(internalTaskController);
                    return [4 /*yield*/, Promise.resolve(entry.effect(action, redux_toolkit_esm_assign({}, api, {
                            getOriginalState: getOriginalState,
                            condition: function (predicate, timeout) { return take(predicate, timeout).then(Boolean); },
                            take: take,
                            delay: createDelay(internalTaskController.signal),
                            pause: createPause(internalTaskController.signal),
                            extra: extra,
                            signal: internalTaskController.signal,
                            fork: createFork(internalTaskController.signal),
                            unsubscribe: entry.unsubscribe,
                            subscribe: function () {
                                listenerMap.set(entry.id, entry);
                            },
                            cancelActiveListeners: function () {
                                entry.pending.forEach(function (controller, _, set) {
                                    if (controller !== internalTaskController) {
                                        abortControllerWithReason(controller, listenerCancelled);
                                        set.delete(controller);
                                    }
                                });
                            }
                        })))];
                case 2:
                    _c.sent();
                    return [3 /*break*/, 5];
                case 3:
                    listenerError_1 = _c.sent();
                    if (!(listenerError_1 instanceof TaskAbortError)) {
                        safelyNotifyError(onError, listenerError_1, {
                            raisedBy: "effect"
                        });
                    }
                    return [3 /*break*/, 5];
                case 4:
                    abortControllerWithReason(internalTaskController, listenerCompleted);
                    entry.pending.delete(internalTaskController);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
    var middleware = function (api) { return function (next) { return function (action) {
        if (!isAction(action)) {
            return next(action);
        }
        if (addListener.match(action)) {
            return startListening(action.payload);
        }
        if (clearAllListeners.match(action)) {
            clearListenerMiddleware();
            return;
        }
        if (removeListener.match(action)) {
            return stopListening(action.payload);
        }
        var originalState = api.getState();
        var getOriginalState = function () {
            if (originalState === INTERNAL_NIL_TOKEN) {
                throw new Error(alm + ": getOriginalState can only be called synchronously");
            }
            return originalState;
        };
        var result;
        try {
            result = next(action);
            if (listenerMap.size > 0) {
                var currentState = api.getState();
                var listenerEntries = Array.from(listenerMap.values());
                for (var _i = 0, listenerEntries_1 = listenerEntries; _i < listenerEntries_1.length; _i++) {
                    var entry = listenerEntries_1[_i];
                    var runListener = false;
                    try {
                        runListener = entry.predicate(action, currentState, originalState);
                    }
                    catch (predicateError) {
                        runListener = false;
                        safelyNotifyError(onError, predicateError, {
                            raisedBy: "predicate"
                        });
                    }
                    if (!runListener) {
                        continue;
                    }
                    notifyListener(entry, action, api, getOriginalState);
                }
            }
        }
        finally {
            originalState = INTERNAL_NIL_TOKEN;
        }
        return result;
    }; }; };
    return {
        middleware: middleware,
        startListening: startListening,
        stopListening: stopListening,
        clearListeners: clearListenerMiddleware
    };
}
// src/autoBatchEnhancer.ts
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = function () { return function (payload) {
    var _c;
    return ({
        payload: payload,
        meta: (_c = {}, _c[SHOULD_AUTOBATCH] = true, _c)
    });
}; };
var promise;
var queueMicrotaskShim = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : globalThis) : function (cb) { return (promise || (promise = Promise.resolve())).then(cb).catch(function (err) { return setTimeout(function () {
    throw err;
}, 0); }); };
var createQueueWithTimer = function (timeout) {
    return function (notify) {
        setTimeout(notify, timeout);
    };
};
var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
var autoBatchEnhancer = function (options) {
    if (options === void 0) { options = { type: "raf" }; }
    return function (next) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var store = next.apply(void 0, args);
        var notifying = true;
        var shouldNotifyAtEndOfTick = false;
        var notificationQueued = false;
        var listeners = new Set();
        var queueCallback = options.type === "tick" ? queueMicrotaskShim : options.type === "raf" ? rAF : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
        var notifyListeners = function () {
            notificationQueued = false;
            if (shouldNotifyAtEndOfTick) {
                shouldNotifyAtEndOfTick = false;
                listeners.forEach(function (l) { return l(); });
            }
        };
        return Object.assign({}, store, {
            subscribe: function (listener2) {
                var wrappedListener = function () { return notifying && listener2(); };
                var unsubscribe = store.subscribe(wrappedListener);
                listeners.add(listener2);
                return function () {
                    unsubscribe();
                    listeners.delete(listener2);
                };
            },
            dispatch: function (action) {
                var _a;
                try {
                    notifying = !((_a = action == null ? void 0 : action.meta) == null ? void 0 : _a[SHOULD_AUTOBATCH]);
                    shouldNotifyAtEndOfTick = !notifying;
                    if (shouldNotifyAtEndOfTick) {
                        if (!notificationQueued) {
                            notificationQueued = true;
                            queueCallback(notifyListeners);
                        }
                    }
                    return store.dispatch(action);
                }
                finally {
                    notifying = true;
                }
            }
        });
    }; };
};
// src/index.ts
F();

//# sourceMappingURL=redux-toolkit.esm.js.map

/***/ }),

/***/ 5487:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(5241);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 4150:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 5241:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(4150);
} else {}


/***/ }),

/***/ 2601:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var _global_process, _global_process1;
module.exports = ((_global_process = __webpack_require__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = __webpack_require__.g.process) == null ? void 0 : _global_process1.env) === "object" ? __webpack_require__.g.process : __webpack_require__(8960);

//# sourceMappingURL=process.js.map

/***/ }),

/***/ 3638:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9742));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1699));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6663));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5291));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5267, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 946, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2364));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3388, 23))

/***/ }),

/***/ 4874:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: function() { return /* binding */ fetchSustainability; }
/* harmony export */ });
/* unused harmony export fetchSustainabilityDetails */
/* harmony import */ var _lib_redux_slices_pressReleaseSlice_fetchPressRelease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2454);

const HOME_PAGE_ID = "webtoon-global";
const BOARD_ID = "sustainability";
const fetchSustainability = async function() {
    let offset = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, limit = arguments.length > 1 ? arguments[1] : void 0, year = arguments.length > 2 ? arguments[2] : void 0, quarter = arguments.length > 3 ? arguments[3] : void 0, keyword = arguments.length > 4 ? arguments[4] : void 0, totalResults = arguments.length > 5 ? arguments[5] : void 0;
    const url = new URL("".concat("https://dev-api-about.webtoon.com", "/posts/all"));
    url.searchParams.set("newsType", "SUSTAINABILITY");
    url.searchParams.set("offset", "".concat(offset));
    url.searchParams.set("limit", "".concat(limit));
    if (year) url.searchParams.set("year", "".concat(year));
    if (quarter) url.searchParams.set("quarter", "".concat((0,_lib_redux_slices_pressReleaseSlice_fetchPressRelease__WEBPACK_IMPORTED_MODULE_0__/* .convertQuarter */ .Nw)(quarter[0])));
    if (keyword) url.searchParams.set("keyword", keyword);
    // url.searchParams.set('homePageId', HOME_PAGE_ID);
    // url.searchParams.set('lang', 'en');
    // url.searchParams.set('boardMetaId', BOARD_ID);
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-store"
        });
        const result = await response.json();
        const { data } = result.results[0];
        // Server fetch
        if (totalResults === undefined) return data;
        // Client Fetch - Remove this one when BE return totalResults field
        let _totalResults = 0;
        if (data.totalPage > 1) {
            url.searchParams.set("page", "".concat(data.totalPage));
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                cache: "no-store"
            });
            const result = await response.json();
            const dataLastPage = result.results[0].data;
            _totalResults = dataLastPage.articleList.length + (data.totalPage - 1) * limit;
        } else {
            _totalResults = data.articleList.length;
        }
        return {
            ...data,
            totalResults: _totalResults
        };
    } catch (err) {
        console.log(err);
        return {
            totalPage: 0,
            totalResults: 0,
            articleList: []
        };
    }
};
const fetchSustainabilityDetails = async (articleId)=>{
    const url = new URL("".concat("https://dev-api-about.webtoon.com", "/posts/newDetails"));
    // url.searchParams.set('homePageId', HOME_PAGE_ID);
    // url.searchParams.set('boardMetaId', BOARD_ID);
    // url.searchParams.set('lang', 'en');
    url.searchParams.set("newsType", "SUSTAINABILITY");
    url.searchParams.set("newsNo", articleId);
    // url.searchParams.set('sortBy', 'create_date');
    // url.searchParams.set('sortOrder', 'DESC');
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store"
    });
    const result = await response.json();
    return result.results[0].data;
};


/***/ }),

/***/ 9742:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1396);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6222);
/* harmony import */ var _app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Footer(param) {
    let { className } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "relative z-10 px-[25px] bg-white bg-white-200 font-medium",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-screen-2xl mx-auto px-2 md:px-0 mt-[50px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid sm:grid-cols-1 md:grid-cols-2 w-auto md:justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "hidden md:block mb-6 md:mb-0 md:ml-2 lg:ml-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/",
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                        className: "h-14 fill-green-900",
                                        width: "54",
                                        height: "54",
                                        viewBox: "0 0 54 54",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                            d: "M38.1683 21.3633C37.4504 21.3648 37.0864 21.3764 36.3845 21.3778C36.341 21.3778 36.3061 21.4155 36.3061 21.4605C36.3032 22.0537 36.3003 22.3655 36.2974 22.9311C36.2974 22.9746 36.3323 23.0094 36.3743 23.0109C37.0763 23.0225 37.4417 23.0283 38.1596 23.0399C39.1748 23.0529 39.3054 22.5801 39.3054 22.219C39.3054 21.6099 38.9312 21.3604 38.1683 21.3619V21.3633ZM33.9175 29.6563C32.6905 29.6563 31.8668 30.5207 31.8813 31.9202C31.8958 33.3198 32.7631 34.2001 33.9625 34.1479C35.1619 34.0957 35.9537 33.1835 35.9552 31.8564C35.9552 30.4902 35.1851 29.6548 33.9189 29.6548L33.9175 29.6563ZM23.2737 29.6055C21.9496 29.591 21.0185 30.5004 21.02 32.074C21.0214 33.649 21.9786 34.5961 23.3085 34.5453C24.6385 34.4946 25.5348 33.5141 25.5275 32.0102C25.5188 30.5062 24.5979 29.6186 23.2737 29.6041V29.6055ZM36.399 18.7687C37.0299 18.7484 37.3576 18.7382 38.0016 18.7194C38.7267 18.6962 39.0922 18.393 39.0922 17.8521C39.0922 17.4518 38.9776 17.0529 38.019 17.0979C37.3721 17.1269 37.0429 17.1429 36.4091 17.1719C36.3656 17.1733 36.3308 17.211 36.3308 17.2545C36.3279 17.7999 36.3265 18.1204 36.3221 18.6889C36.3221 18.7339 36.3569 18.7701 36.399 18.7687ZM46.5047 23.1777L48.335 2L5.28709 8.69906L8.93315 22.409H1L9.13619 47.3938L28.1714 44.5671V52L50.2363 41.8796L53.3907 23.1762H46.5061L46.5047 23.1777ZM12.4458 16.454C13.0941 16.4104 13.8526 16.3756 14.5284 16.3278C14.6212 16.3205 14.7025 16.393 14.7242 16.5018C15.0549 18.1146 15.4073 19.5301 15.7554 21.1385C15.7641 21.182 15.796 21.4866 15.8076 21.4909C15.8177 21.4909 15.8496 21.1806 15.8598 21.1385C16.2659 19.4735 16.6662 17.9971 17.0621 16.3292C17.0882 16.219 17.1752 16.1363 17.2724 16.1291C18.0541 16.0725 18.5298 16.045 19.3449 15.9869C19.4464 15.9797 19.5363 16.0493 19.5624 16.1566C19.9685 17.8709 20.3717 19.3938 20.7705 21.108C20.7807 21.1545 20.8169 21.4634 20.8285 21.4634C20.8401 21.4634 20.8764 21.153 20.888 21.1066C21.3086 19.3314 21.7292 17.7491 22.1585 15.9768C22.186 15.8637 22.2832 15.7795 22.392 15.7723C23.178 15.7172 23.7335 15.6896 24.5485 15.6345C24.6269 15.6287 24.6994 15.6606 24.7472 15.7201C24.7937 15.781 24.8082 15.8593 24.7864 15.9391C23.9728 18.8803 23.2012 21.8318 22.3818 24.7701C22.3513 24.876 22.2556 24.9485 22.1498 24.9456C21.1868 24.9181 20.5617 24.905 19.6436 24.8789C19.5421 24.876 19.4536 24.7991 19.4275 24.6904C19.0635 23.2183 18.6661 21.9362 18.3036 20.4627C18.2934 20.4191 18.2586 20.2103 18.2484 20.2103C18.2383 20.2103 18.2049 20.4206 18.1933 20.4641C17.8134 21.9144 17.3928 23.1733 17.02 24.6251C16.9925 24.731 16.9069 24.8035 16.8126 24.802C15.9497 24.7788 15.1782 24.7745 14.3587 24.7542C14.2688 24.7513 14.189 24.6744 14.1644 24.5671C13.5712 21.9695 12.8562 19.3822 12.2572 16.7846C12.2036 16.5555 12.3254 16.4598 12.4458 16.4511V16.454ZM17.7104 29.401C17.7046 29.517 17.6074 29.607 17.4899 29.6084L14.8649 29.5794C14.8156 29.5794 14.7764 29.62 14.7764 29.6679L14.8243 37.2502C14.8243 37.3648 14.7358 37.4605 14.6198 37.4692L11.9512 37.6548C11.8207 37.665 11.709 37.5649 11.709 37.4358L11.7395 29.6403C11.7395 29.5925 11.7003 29.5533 11.651 29.5518L8.79247 29.4895C8.675 29.4895 8.57928 29.3996 8.57203 29.285L8.47196 26.7977C8.46325 26.6686 8.57058 26.5613 8.7011 26.5656L17.5581 26.8035C17.6828 26.8078 17.78 26.9108 17.7742 27.0341L17.7104 29.4025V29.401ZM23.3187 37.314C20.2005 37.4141 17.8989 35.3894 17.8989 32.1102C17.8989 29.0413 19.8931 26.7962 23.2708 26.7962C26.1381 26.7962 28.3991 29.0558 28.3991 31.971C28.3991 35.1327 26.1975 37.2226 23.3187 37.314ZM25.6435 25.0529C25.5028 25.0486 25.3912 24.934 25.3926 24.7933C25.4187 21.797 25.4434 18.802 25.4695 15.8057C25.4695 15.6664 25.5855 15.546 25.7247 15.5373C27.9191 15.388 30.1148 15.2458 32.3091 15.1051C32.4643 15.095 32.5905 15.1994 32.589 15.3416C32.5847 16.0682 32.5818 16.4656 32.576 17.2879C32.576 17.4489 32.4469 17.5867 32.2917 17.5939C30.5717 17.6766 29.7392 17.7172 28.1264 17.797C28.0887 17.7984 28.0583 17.8332 28.0568 17.8738C28.0539 18.2683 28.0525 18.4685 28.0496 18.8702C28.0496 18.9108 28.08 18.9442 28.1177 18.9427C29.5129 18.892 30.2685 18.8658 31.742 18.8151C31.8958 18.8093 32.0205 18.9398 32.0205 19.108C32.0147 19.913 32.0118 20.3234 32.0075 21.1298C32.0075 21.2966 31.8798 21.4329 31.7261 21.4329C30.2511 21.4373 29.4955 21.4387 28.1003 21.4431C28.0626 21.4431 28.0322 21.4764 28.0307 21.5185C28.0278 21.9666 28.0249 22.19 28.022 22.628C28.022 22.6686 28.0525 22.702 28.0902 22.702C29.7044 22.7223 30.5383 22.7324 32.2598 22.7527C32.415 22.7542 32.5412 22.8876 32.5397 23.0486C32.5339 23.8695 32.531 24.2669 32.5267 24.9949C32.5267 25.1371 32.3976 25.2458 32.2424 25.2415C30.0437 25.1806 27.8451 25.1197 25.6464 25.0558L25.6435 25.0529ZM33.9915 36.6904C31.2852 36.8006 29.1068 34.7484 29.1068 31.9623C29.1068 29.1762 30.8936 27.079 33.8783 27.079C36.5208 27.079 38.573 29.0036 38.573 31.8173C38.573 34.6309 36.5614 36.5874 33.9915 36.6918V36.6904ZM38.3032 25.4097C36.7383 25.3706 35.2996 25.33 33.7348 25.2879C33.5752 25.2835 33.4462 25.1675 33.4476 25.0254C33.4694 21.7708 33.4897 18.5163 33.51 15.2632C33.51 15.1211 33.6405 15.0007 33.8 14.9906C35.2721 14.8992 37.156 14.7687 38.6281 14.6831C40.4366 14.5642 42.3684 15.1051 42.38 17.5141C42.3844 18.4191 41.9391 19.3212 41.1705 19.8898C41.1357 19.9159 41.1313 19.9507 41.1313 19.9681C41.1313 20 41.1473 20.0305 41.1777 20.0435C42.1117 20.4482 42.644 21.1501 42.5758 22.4772C42.4467 25.0138 40.3235 25.4329 38.3018 25.4112L38.3032 25.4097ZM47.0384 35.4692C47.0311 35.5736 46.9456 35.6563 46.8382 35.665L44.9166 35.7244C44.8368 35.7317 44.7585 35.6969 44.7121 35.6331L42.1799 31.9782C42.1291 31.9086 42.016 31.9434 42.0174 32.0276L42.0102 35.7041C42.0116 35.8173 41.9217 35.9115 41.8042 35.9202L39.5389 36.0247C39.4098 36.0334 39.301 35.9347 39.2996 35.8115L39.3924 27.4967C39.3924 27.3793 39.4896 27.2821 39.6128 27.2821L41.636 27.3604C41.7114 27.3604 41.7825 27.3967 41.8245 27.4576L44.6004 31.6447C44.6483 31.7143 44.7614 31.6853 44.7643 31.6012L44.8093 27.591C44.8136 27.4764 44.9108 27.3865 45.0297 27.3865L47.1327 27.4083C47.2632 27.4083 47.3662 27.5141 47.3575 27.6389L47.0384 35.4663V35.4692Z"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "absolute right-[25px] bottom-[25px] sm:top-[50px] sm:right-[30px] md:right-[40px] h-fit",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                    onClick: ()=>window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        }),
                                    className: "box-border btn-effect-top rounded-full bg-gray-400 flex justify-center items-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                        width: "50",
                                        height: "50",
                                        viewBox: "0 0 50 50",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                            d: "M32 27L25 20L18 27",
                                            strokeWidth: "2.5"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-cols-2 sm:grid-cols-[repeat(4,140px)] md:grid-cols-[repeat(2,140px)_120px_min-content] gap-x-[25px] gap-y-[60px] sm:gap-x-[10px] md:gap-x-[20px] -mr-5 sm:mr-0 md:justify-center lg:col-start-2 lg:justify-start",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                                className: "mb-[19px] text-base/[19.2px] font-semibold",
                                                children: "About"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        className: "text-sm mb-[13px]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            className: (_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().subNavItem),
                                                            href: "/vision",
                                                            children: "Vision"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        className: "text-sm mb-[13px]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            className: (_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().subNavItem),
                                                            href: "/our-brands",
                                                            children: "Our Brands"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        className: "text-sm",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            className: (_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().subNavItem),
                                                            href: "/governance/",
                                                            children: "Governance"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                                className: "mb-[19px] text-base/[19.2px] font-semibold",
                                                children: "News"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        className: "text-sm mb-[13px]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            className: (_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().subNavItem),
                                                            href: "/press-release/",
                                                            children: "Press Releases"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        className: "text-sm",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            className: (_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().subNavItem),
                                                            href: "/sustainability",
                                                            children: "Sustainability"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                                className: "mb-[19px] text-base/[19.2px] font-semibold",
                                                children: "IR"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        className: "text-sm mb-[13px]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            className: (_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().subNavItem),
                                                            href: "/event",
                                                            children: "Events"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        className: "text-sm mb-[13px]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            className: (_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().subNavItem),
                                                            href: "/stock-info",
                                                            children: "Stock Info"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        className: "text-sm mb-[13px]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            className: (_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().subNavItem),
                                                            href: "/financials",
                                                            children: "Financials"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        className: "text-sm mb-[13px]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            className: (_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().subNavItem),
                                                            href: "/ir-governance",
                                                            children: "Governance"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        className: "text-sm",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            className: (_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().subNavItem),
                                                            href: "/resources",
                                                            children: "Resources"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                            className: "mb-[19px] text-base/[19.2px] font-semibold",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/careers",
                                                className: "relative",
                                                children: "Careers"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "grid sm:gap-10 mt-[50px] sm:mt-[16px] md:w-[535px] md:mx-auto lg:grid-cols-2 lg:mx-0 lg:w-auto lg:gap-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                            className: "lg:col-start-2"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {
                className: "border-gray-footer sm:mx-auto mt-[80px] sm:mt-[96px]"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "sm:flex sm:flex-row-reverse sm:justify-between pt-5 pb-[40px] sm:py-[30px] md:pt-[42px] md:pb-[44px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "flex flex-col gap-4 sm:flex-row sm:gap-5 mb-[84px] sm:mb-0 lg:flex-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                className: "text-gray-200 after:bg-gray-200 text-xs sm:text-sm",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/terms",
                                    className: "inline-block",
                                    children: "Terms of use"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                className: "text-gray-200 after:bg-gray-200 text-xs sm:text-sm",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/privacy-policy",
                                    className: "inline-block",
                                    children: "Privacy Policy"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                className: "text-gray-200 after:bg-gray-200 text-xs sm:text-sm",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/business-ethics",
                                    className: "inline-block",
                                    children: "Business Ethics"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "transition text-xs sm:text-sm duration-600 text-gray-200 lg:flex-1",
                        children: "\xa9 WEBTOON ENTERTAINMENT"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7042);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6691);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1396);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4033);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2265);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3198);
/* harmony import */ var _app_hooks_useScreenSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5055);
/* harmony import */ var _app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6222);
/* harmony import */ var _app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_redux_slices_mainSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4584);
/* __next_internal_client_entry_do_not_use__ default auto */ 









const SMALL_SCREEN_SIZE = 1024;
function SubNav(param) {
    let { name, path, shouldBeWhite, toggleMenu } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: path,
        onClick: (e)=>{
            e.stopPropagation();
            if (toggleMenu) {
                toggleMenu();
            }
        },
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("relative my-2 pt-1 pb-[0.1rem] w-fit lg:w-auto md:mx-2 ".concat((_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().subNavItem)), {
            "after:bg-black text-black": !shouldBeWhite,
            "after:bg-white-100 text-white-100": shouldBeWhite
        }),
        children: name
    });
}
function HeaderItem(param) {
    let { title, children, shouldHighlight, onMouseEnter, onMouseLeave, onClick, shouldBeWhite, path, isSelected } = param;
    const hasChildren = react__WEBPACK_IMPORTED_MODULE_4__.Children.count(children) > 0;
    const linkClass = (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("text-4xl sm:text-5xl menu-hover my-2 py-[0.8rem] md:text-base font-semibold", {
        "md:text-stone-400": !shouldHighlight && !shouldBeWhite,
        "md:text-black": shouldHighlight && !shouldBeWhite,
        "md:text-white-100": shouldBeWhite
    });
    const arrowCommonClasses = [
        "ml-[5px] w-[24px] h-[24px] sm:ml-2 md:ml-[5px] md:w-[16px] md:h-[16px] transition-transform duration-300 shrink-0",
        {
            "rotate-180": isSelected
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group cursor-pointer",
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center md:justify-between",
                children: [
                    path ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: linkClass,
                        href: path,
                        children: title
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                        className: linkClass,
                        children: title
                    }),
                    hasChildren && (shouldBeWhite ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(...arrowCommonClasses),
                        src: "./icon/arrow-down-white.svg",
                        width: 16,
                        height: 16,
                        alt: "Arrow down white",
                        unoptimized: false
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(...arrowCommonClasses, {
                            "md:opacity-50": !shouldHighlight
                        }),
                        src: "./icon/arrow-down-black.svg",
                        width: 16,
                        height: 16,
                        alt: "Arrow down white",
                        unoptimized: false
                    }))
                ]
            }),
            hasChildren && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("bg-white-100 md:bg-transparent left-0 md:justify-center opacity-0 md:absolute z-50 flex w-full lg:py-1 md:px-4 h-0 duration-200 transition-[opacity, visible]", {
                    "h-auto opacity-100": isSelected,
                    invisible: !isSelected
                }),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex-col md:flex-row md:h-[50px] flex md:justify-center md:items-center md:space-x-12 text-xl md:text-base ".concat(title == "About" ? "md:ml-[7px] lg:ml-[10px]" : "0"),
                    children: children
                })
            })
        ]
    });
}
function Header(param) {
    let { className } = param;
    const [hoverItem, setHoverItem] = react__WEBPACK_IMPORTED_MODULE_4__.useState([]);
    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_4__.useState(false);
    const isHeaderInsideVideo = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(_lib_redux_slices_mainSlice__WEBPACK_IMPORTED_MODULE_7__/* .selectIsHeaderInsideVideo */ .q1);
    const isHeaderInsideKeyVisual = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(_lib_redux_slices_mainSlice__WEBPACK_IMPORTED_MODULE_7__/* .selectIsHeaderInsideKeyVisual */ .xo);
    const screenSize = (0,_app_hooks_useScreenSize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const [isStickyOnTop, setStickyOnTop] = react__WEBPACK_IMPORTED_MODULE_4__.useState(false);
    // Auto close mobile menu when resizing
    react__WEBPACK_IMPORTED_MODULE_4__.useEffect(()=>{
        if (screenSize >= SMALL_SCREEN_SIZE && isOpen) setIsOpen(false);
        if (isOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [
        isOpen,
        screenSize
    ]);
    react__WEBPACK_IMPORTED_MODULE_4__.useEffect(()=>{
        const handleScroll = ()=>{
            const el = document.querySelector(".sticky");
            if (el && el.getBoundingClientRect().top === 80) {
                // height of the header
                setStickyOnTop(true);
            } else {
                setStickyOnTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll, false);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const closeMenu = ()=>{
        setHoverItem([]);
        setIsOpen(false);
    };
    const toggleMenu = ()=>{
        if (screenSize < SMALL_SCREEN_SIZE) {
            if (isOpen) {
                closeMenu();
            } else {
                setIsOpen(true);
            }
        }
    };
    const handleMouseEnter = (item)=>{
        if (screenSize < SMALL_SCREEN_SIZE) return;
        setHoverItem(item);
    };
    const handleMouseClick = (item)=>{
        if (screenSize >= SMALL_SCREEN_SIZE) return;
        setHoverItem((currItem)=>currItem.includes(item) ? currItem.filter((i)=>i !== item) : [
                ...currItem,
                item
            ]);
    };
    const isMenuExpanding = hoverItem.length > 0 && !hoverItem.includes("careers");
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    const shouldBeWhite = (isHeaderInsideVideo && pathname === "/" || (isHeaderInsideKeyVisual || window.scrollY === 0) && pathname === "/careers") && !isOpen;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", {
        id: "header-container",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("md:mx-auto left-0 right-0 z-40 top-0 fixed w-full md:m-auto duration-200 linear", {
            "h-[80px]": !isMenuExpanding && !isStickyOnTop,
            "h-[140px]": isMenuExpanding,
            "h-[133px]": !isMenuExpanding && isStickyOnTop,
            "z-[40]": !isMenuExpanding && !isOpen,
            "z-[100]": isMenuExpanding || isOpen,
            "bg-white-500 backdrop-blur-[20px] text-black": !shouldBeWhite && !isOpen,
            "bg-white-100 overflow-x-hidden md:overflow-x-visible md:overflow-y-visible fixed h-full w-full md:w-auto md:block": isOpen,
            "text-white-100": shouldBeWhite
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
            className: "h-full max-w-screen-2xl mx-auto px-[25px] lg:px-[40px] md:pl-[30px] md:pr-[24px] relative overflow-auto md:overflow-hidden",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "".concat((_app_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default().headerWrapper), " h-full aa md:mx-auto"),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        style: {
                            gridArea: "logo"
                        },
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            className: "w-[48px] md:w-[54px] md:pl-0",
                            onClick: closeMenu,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "h-full w-full cursor-pointer",
                                src: "./img/logo.svg",
                                width: 54,
                                height: 54,
                                alt: "WebToon Logo",
                                unoptimized: false
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        style: {
                            gridArea: "menu"
                        },
                        className: "md:block text-white ease-in-out justify-between items-center w-full md:w-auto md:order-1 ".concat(isOpen ? "translate-x-0 z-40 duration-300" : "-translate-x-full md:translate-x-1/1 hidden"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "px-[5px] mt-[2.6rem] mb-24 sm:mb-0 sm:px-[15px] sm:mt-[80px] md:px-0 md:pr-[8px] lg:pl-[14px] flex flex-col font-medium md:flex-row gap-[8px] md:gap-[63px] md:mt-0 md:justify-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeaderItem, {
                                    shouldBeWhite: shouldBeWhite,
                                    title: "About",
                                    shouldHighlight: hoverItem.length === 0 || hoverItem.includes("about"),
                                    onMouseEnter: ()=>handleMouseEnter([
                                            "about"
                                        ]),
                                    onMouseLeave: ()=>handleMouseEnter([]),
                                    onClick: ()=>{
                                        handleMouseClick("about");
                                    },
                                    isSelected: hoverItem.includes("about"),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNav, {
                                            toggleMenu: toggleMenu,
                                            name: "Vision",
                                            path: "/vision",
                                            shouldBeWhite: shouldBeWhite
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNav, {
                                            toggleMenu: toggleMenu,
                                            name: "Our Brands",
                                            path: "/our-brands",
                                            shouldBeWhite: shouldBeWhite
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNav, {
                                            toggleMenu: toggleMenu,
                                            name: "Management",
                                            path: "/management",
                                            shouldBeWhite: shouldBeWhite
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeaderItem, {
                                    shouldBeWhite: shouldBeWhite,
                                    title: "News",
                                    shouldHighlight: hoverItem.length === 0 || hoverItem.includes("news"),
                                    onMouseEnter: ()=>handleMouseEnter([
                                            "news"
                                        ]),
                                    onMouseLeave: ()=>handleMouseEnter([]),
                                    onClick: ()=>{
                                        handleMouseClick("news");
                                    },
                                    isSelected: hoverItem.includes("news"),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNav, {
                                            toggleMenu: toggleMenu,
                                            name: "Press Releases",
                                            path: "/press-release",
                                            shouldBeWhite: shouldBeWhite
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNav, {
                                            toggleMenu: toggleMenu,
                                            name: "Sustainability",
                                            path: "/sustainability",
                                            shouldBeWhite: shouldBeWhite
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeaderItem, {
                                    shouldBeWhite: shouldBeWhite,
                                    title: "IR",
                                    shouldHighlight: hoverItem.length === 0 || hoverItem.includes("ir"),
                                    onMouseEnter: ()=>handleMouseEnter([
                                            "ir"
                                        ]),
                                    onMouseLeave: ()=>handleMouseEnter([]),
                                    onClick: ()=>{
                                        handleMouseClick("ir");
                                    },
                                    isSelected: hoverItem.includes("ir"),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNav, {
                                            toggleMenu: toggleMenu,
                                            name: "Event",
                                            path: "/event",
                                            shouldBeWhite: shouldBeWhite
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNav, {
                                            toggleMenu: toggleMenu,
                                            name: "Stock Info",
                                            path: "/stock-info",
                                            shouldBeWhite: shouldBeWhite
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNav, {
                                            toggleMenu: toggleMenu,
                                            name: "Financials",
                                            path: "/financials",
                                            shouldBeWhite: shouldBeWhite
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNav, {
                                            toggleMenu: toggleMenu,
                                            name: "Governance",
                                            path: "/ir-governance",
                                            shouldBeWhite: shouldBeWhite
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNav, {
                                            toggleMenu: toggleMenu,
                                            name: "Resources",
                                            path: "/resources",
                                            shouldBeWhite: shouldBeWhite
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeaderItem, {
                                    path: "/careers",
                                    shouldBeWhite: shouldBeWhite,
                                    title: "Careers",
                                    // shouldHighlight={
                                    //   hoverItem.length === 0 || hoverItem.includes('careers')
                                    // }
                                    shouldHighlight: true,
                                    onMouseEnter: ()=>handleMouseEnter([
                                            "careers"
                                        ]),
                                    onMouseLeave: ()=>handleMouseEnter([]),
                                    isSelected: hoverItem.includes("careers"),
                                    onClick: ()=>{
                                        toggleMenu();
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        style: {
                            gridArea: "trigger"
                        },
                        className: "flex items-center justify-end",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                            onClick: toggleMenu,
                            type: "button",
                            className: "relative z-42 w-[24px] h-[24px] flex justify-end items-center rounded-lg md:hidden focus:outline-none",
                            "aria-controls": "mobile-menu-2",
                            "aria-expanded": "false",
                            children: isOpen ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                                        width: "24",
                                        height: "24",
                                        fill: "white"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        d: "M21 3L3 21",
                                        stroke: "#111111",
                                        "stroke-width": "3"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                        d: "M21 21L3 3",
                                        stroke: "#111111",
                                        "stroke-width": "3"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                className: "w-6 h-8",
                                width: "24",
                                height: "22",
                                viewBox: "0 0 24 22",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                                        y: "14",
                                        width: "24",
                                        height: "3",
                                        fill: shouldBeWhite ? "#ffffff" : "#111111"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                                        y: "4",
                                        width: "24",
                                        height: "3",
                                        fill: shouldBeWhite ? "#ffffff" : "#111111"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        style: {
                            gridArea: "link"
                        },
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("md:block mt-[82px] sm:mt-[140px] md:mt-0", {
                            hidden: !isOpen
                        }),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "https://www.webtoons.com",
                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("flex justify-end items-center font-semibold rounded-lg text-base sm:justify-end sm:pr-[15px] md:py-2.5 focus:outline-none md:pr-0 mr-[15px] md:mr-0 mb-[60px] sm:mb-[80px] md:mb-0", {
                                "text-white-100": shouldBeWhite
                            }),
                            target: "_blank",
                            children: [
                                "Go to WEBTOON",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    className: "mt-[-2px] ml-[4px]",
                                    src: shouldBeWhite ? "./icon/arrow-right-white.svg" : "./icon/arrow-right.svg",
                                    width: 16,
                                    height: 16,
                                    alt: "Arrow right",
                                    unoptimized: false
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 6663:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScrollController; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function ScrollController() {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        window.onbeforeunload = function() {
            window.scrollTo(0, 0);
        };
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "auto";
        }
    }, []);
    return null;
}


/***/ }),

/***/ 5291:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SentryProvider; }
/* harmony export */ });
/* __next_internal_client_entry_do_not_use__ default auto */ 
if (false) {}
function SentryProvider() {
    return null;
}


/***/ }),

/***/ 9447:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const NEWS_TYPES = {
    pressRelease: "press-release",
    sustainability: "sustainability"
};
/* harmony default export */ __webpack_exports__.Z = (NEWS_TYPES);


/***/ }),

/***/ 5055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useScreenSize; },
/* harmony export */   m: function() { return /* binding */ useScreenDimension; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);

function useScreenSize() {
    const [screenSize, setScreenSize] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        function handleResize() {
            setScreenSize(window.innerWidth);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return screenSize;
}
function useScreenDimension() {
    const [screenWidth, setScreenWidth] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    const [screenHeight, setScreenHeight] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        function handleResize() {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return {
        screenWidth,
        screenHeight
    };
}


/***/ }),

/***/ 2364:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Providers: function() { return /* binding */ Providers; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3198);
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1369);
/* __next_internal_client_entry_do_not_use__ Providers auto */ 
/* Core */ 
/* Instruments */ 
const Providers = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_1__/* .Provider */ .zt, {
        store: _lib_redux__WEBPACK_IMPORTED_MODULE_2__/* .reduxStore */ .tO,
        children: props.children
    });
};


/***/ }),

/***/ 3546:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ createAppAsyncThunk; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6279);
/* Core */ 
/**
 * ? A utility function to create a typed Async Thunk Actions.
 */ const createAppAsyncThunk = _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createAsyncThunk */ .hg.withTypes();


/***/ }),

/***/ 1369:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  tO: function() { return /* reexport */ reduxStore; },
  I0: function() { return /* reexport */ useDispatch; },
  v9: function() { return /* reexport */ useSelector; }
});

// UNUSED EXPORTS: DEFAULT_REPORT_AND_PROXY_LIMIT, counterSlice, fetchReportAndProxy, incrementAsync, incrementIfOddAsync, pressRelease, reportAndProxySlice, selectCount, selectLimit, selectOffset, selectReportAndProxy, selectTotalCount, sustainability

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 7 modules
var redux_toolkit_esm = __webpack_require__(6279);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(3198);
// EXTERNAL MODULE: ./node_modules/redux-logger/dist/redux-logger.js
var redux_logger = __webpack_require__(3944);
;// CONCATENATED MODULE: ./lib/redux/middleware.ts
/* Core */ 
const middleware = [
    (0,redux_logger.createLogger)({
        duration: true,
        timestamp: false,
        collapsed: true,
        colors: {
            title: ()=>"#139BFE",
            prevState: ()=>"#1C5FAF",
            action: ()=>"#149945",
            nextState: ()=>"#A47104",
            error: ()=>"#ff0005"
        },
        predicate: ()=>"object" !== "undefined"
    })
];


// EXTERNAL MODULE: ./lib/redux/createAppAsyncThunk.ts
var createAppAsyncThunk = __webpack_require__(3546);
;// CONCATENATED MODULE: ./lib/redux/slices/counterSlice/fetchIdentityCount.ts
const fetchIdentityCount = async function() {
    let amount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
    const response = await fetch("http://localhost:3000/api/identity-count", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount
        })
    });
    const result = await response.json();
    return result;
};

;// CONCATENATED MODULE: ./lib/redux/slices/counterSlice/thunks.ts
/* Instruments */ 



// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
const incrementAsync = (0,createAppAsyncThunk/* createAppAsyncThunk */.a)("counter/fetchIdentityCount", async (amount)=>{
    const response = await fetchIdentityCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
});
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
const incrementIfOddAsync = (amount)=>(dispatch, getState)=>{
        const currentValue = selectCount(getState());
        if (currentValue % 2 === 1) {
            dispatch(counterSlice.actions.incrementByAmount(amount));
        }
    };

;// CONCATENATED MODULE: ./lib/redux/slices/counterSlice/counterSlice.ts
/* Core */ 
/* Instruments */ 
const initialState = {
    value: 0,
    status: "idle"
};
const counterSlice_counterSlice = (0,redux_toolkit_esm/* createSlice */.oM)({
    name: "counter",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state)=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action)=>{
            state.value += action.payload;
        }
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder)=>{
        builder.addCase(incrementAsync.pending, (state)=>{
            state.status = "loading";
        }).addCase(incrementAsync.fulfilled, (state, action)=>{
            state.status = "idle";
            state.value += action.payload;
        });
    }
});

;// CONCATENATED MODULE: ./lib/redux/slices/counterSlice/index.ts




// EXTERNAL MODULE: ./lib/redux/slices/pressReleaseSlice/fetchPressRelease.ts
var fetchPressRelease = __webpack_require__(2454);
;// CONCATENATED MODULE: ./lib/redux/slices/pressReleaseSlice/selectors.ts
const selectPressReleases = (state)=>state.pressRelease.pressReleases;
const selectOffset = (state)=>state.pressRelease.offset;
const selectLimit = (state)=>state.pressRelease.limit;
const selectStatus = (state)=>state.pressRelease.status;
const selectYear = (state)=>state.pressRelease.year;
const selectQuarter = (state)=>state.pressRelease.quarter;
const selectKeyword = (state)=>state.pressRelease.keyword;
const selectDisplayType = (state)=>state.pressRelease.displayType;
const selectTotalPage = (state)=>state.pressRelease.totalPage;
const selectTotalResults = (state)=>state.pressRelease.totalResults;

;// CONCATENATED MODULE: ./lib/redux/slices/pressReleaseSlice/thunks.ts




const fetchMorePressReleases = (0,createAppAsyncThunk/* createAppAsyncThunk */.a)("pressRelease/fetchMorePressRelease", async (param, param1)=>{
    let { shouldResetList } = param, { getState, dispatch } = param1;
    if (shouldResetList) {
        dispatch(pressReleaseSlice.actions.resetList());
    }
    const offset = selectOffset(getState());
    const limit = selectLimit(getState());
    const year = selectYear(getState());
    const quarter = selectQuarter(getState());
    const keyword = selectKeyword(getState());
    const totalResults = selectTotalResults(getState());
    const response = await (0,fetchPressRelease/* fetchPressRelease */.cn)(offset, limit, year, quarter, keyword, totalResults);
    return response;
});

;// CONCATENATED MODULE: ./lib/redux/slices/pressReleaseSlice/pressReleaseSlice.ts


const DEFAULT_PR_LIMIT = 6;
const pressReleaseSlice_initialState = {
    pressReleases: [],
    offset: 0,
    limit: DEFAULT_PR_LIMIT,
    status: "idle",
    year: null,
    quarter: null,
    keyword: null,
    totalPage: 0,
    totalResults: 0,
    displayType: "list"
};
const pressReleaseSlice = (0,redux_toolkit_esm/* createSlice */.oM)({
    name: "pressRelease",
    initialState: pressReleaseSlice_initialState,
    reducers: {
        setInitialData: (state, action)=>{
            state.totalPage = action.payload.totalPage;
            state.pressReleases = action.payload.pressReleases;
            state.offset = 0;
            state.year = null;
            state.quarter = null;
            state.keyword = null;
        },
        resetList: (state)=>{
            state.offset = 0;
            state.pressReleases = [];
            state.totalPage = 0;
        },
        setFilter: (state, action)=>{
            if (action.payload.year !== undefined) state.year = action.payload.year;
            if (action.payload.quarter !== undefined) state.quarter = action.payload.quarter;
            if (action.payload.keyword !== undefined) state.keyword = action.payload.keyword;
        },
        resetFilter: (state)=>{
            state.year = null;
            state.quarter = null;
            state.keyword = null;
        },
        setDisplayStyle: (state, action)=>{
            state.displayType = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchMorePressReleases.pending, (state)=>{
            state.status = "loading";
        }).addCase(fetchMorePressReleases.fulfilled, (state, action)=>{
            state.status = "idle";
            state.pressReleases = [
                ...state.pressReleases,
                ...action.payload.articleList
            ];
            state.totalPage = action.payload.totalPage;
            state.totalResults = action.payload.totalResults;
            state.offset += 1;
        });
    }
});

;// CONCATENATED MODULE: ./lib/redux/slices/pressReleaseSlice/index.ts




// EXTERNAL MODULE: ./app/api/sustainability.ts
var sustainability = __webpack_require__(4874);
;// CONCATENATED MODULE: ./lib/redux/slices/sustainabilitySlice/selectors.ts
const selectSustainabilities = (state)=>state.sustainability.sustainabilities;
const selectors_selectOffset = (state)=>state.sustainability.offset;
const selectors_selectLimit = (state)=>state.sustainability.limit;
const selectors_selectStatus = (state)=>state.sustainability.status;
const selectors_selectYear = (state)=>state.sustainability.year;
const selectors_selectQuarter = (state)=>state.sustainability.quarter;
const selectors_selectKeyword = (state)=>state.sustainability.keyword;
const selectors_selectDisplayType = (state)=>state.sustainability.displayType;
const selectors_selectTotalPage = (state)=>state.sustainability.totalPage;
const selectors_selectTotalResults = (state)=>state.sustainability.totalResults;

;// CONCATENATED MODULE: ./lib/redux/slices/sustainabilitySlice/thunks.ts




const fetchMoreSustainabilities = (0,createAppAsyncThunk/* createAppAsyncThunk */.a)("sustainability/fetchMoreSustainability", async (param, param1)=>{
    let { shouldResetList } = param, { getState, dispatch } = param1;
    if (shouldResetList) {
        dispatch(sustainabilitySlice.actions.resetList());
    }
    const offset = selectors_selectOffset(getState());
    const limit = selectors_selectLimit(getState());
    const year = selectors_selectYear(getState());
    const quarter = selectors_selectQuarter(getState());
    const keyword = selectors_selectKeyword(getState());
    const totalResults = selectors_selectTotalResults(getState());
    const response = await (0,sustainability/* fetchSustainability */.j)(offset, limit, year, quarter, keyword, totalResults);
    return response;
});

;// CONCATENATED MODULE: ./lib/redux/slices/sustainabilitySlice/slice.ts


const slice_DEFAULT_PR_LIMIT = 6;
const slice_initialState = {
    sustainabilities: [],
    offset: 0,
    limit: slice_DEFAULT_PR_LIMIT,
    status: "idle",
    year: null,
    quarter: null,
    keyword: null,
    totalPage: 0,
    totalResults: 0,
    displayType: "list"
};
const sustainabilitySlice = (0,redux_toolkit_esm/* createSlice */.oM)({
    name: "sustainability",
    initialState: slice_initialState,
    reducers: {
        setInitialData: (state, action)=>{
            state.totalPage = action.payload.totalPage;
            state.sustainabilities = action.payload.sustainabilities;
            state.offset = 0;
            state.year = null;
            state.quarter = null;
            state.keyword = null;
        },
        resetList: (state)=>{
            state.offset = 0;
            state.sustainabilities = [];
            state.totalPage = 0;
        },
        setFilter: (state, action)=>{
            if (action.payload.year !== undefined) state.year = action.payload.year;
            if (action.payload.quarter !== undefined) state.quarter = action.payload.quarter;
            if (action.payload.keyword !== undefined) state.keyword = action.payload.keyword;
        },
        resetFilter: (state)=>{
            state.year = null;
            state.quarter = null;
            state.keyword = null;
        },
        setDisplayStyle: (state, action)=>{
            state.displayType = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchMoreSustainabilities.pending, (state)=>{
            state.status = "loading";
        }).addCase(fetchMoreSustainabilities.fulfilled, (state, action)=>{
            state.status = "idle";
            state.sustainabilities = [
                ...state.sustainabilities,
                ...action.payload.articleList
            ];
            state.totalPage = action.payload.totalPage;
            state.totalResults = action.payload.totalResults;
            state.offset += 1;
        });
    }
});

;// CONCATENATED MODULE: ./lib/redux/slices/sustainabilitySlice/index.ts




// EXTERNAL MODULE: ./lib/redux/slices/reportAndProxySlice/index.ts + 3 modules
var reportAndProxySlice = __webpack_require__(1618);
;// CONCATENATED MODULE: ./lib/redux/slices/index.ts







// EXTERNAL MODULE: ./lib/redux/slices/eventSlice/index.ts + 3 modules
var eventSlice = __webpack_require__(7766);
// EXTERNAL MODULE: ./lib/redux/slices/mainSlice/index.ts + 2 modules
var mainSlice = __webpack_require__(4584);
// EXTERNAL MODULE: ./lib/redux/slices/quarterlyResultSlice/index.ts + 3 modules
var quarterlyResultSlice = __webpack_require__(2525);
// EXTERNAL MODULE: ./lib/redux/slices/secFilingSlice/index.ts + 3 modules
var secFilingSlice = __webpack_require__(4769);
;// CONCATENATED MODULE: ./lib/redux/rootReducer.ts
/* Instruments */ 






const reducer = {
    counter: counterSlice_counterSlice.reducer,
    pressRelease: pressReleaseSlice.reducer,
    main: mainSlice/* mainSlice */.PL.reducer,
    sustainability: sustainabilitySlice.reducer,
    event: eventSlice/* eventSlice */.yU.reducer,
    secFiling: secFilingSlice/* secfilingSlice */.Ij.reducer,
    reportAndProxy: reportAndProxySlice/* reportAndProxySlice */.aS.reducer,
    quarterlyResult: quarterlyResultSlice/* quarterlyResultSlice */.IX.reducer
};

;// CONCATENATED MODULE: ./lib/redux/store.ts
/* Core */ 


/* Instruments */ 
const reduxStore = (0,redux_toolkit_esm/* configureStore */.xC)({
    reducer: reducer,
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(middleware);
    }
});
const useDispatch = ()=>(0,es/* useDispatch */.I0)();
const useSelector = es/* useSelector */.v9;

;// CONCATENATED MODULE: ./lib/redux/index.ts




/***/ }),

/***/ 7766:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Tv: function() { return /* reexport */ FileType; },
  yU: function() { return /* reexport */ eventSlice; },
  C2: function() { return /* reexport */ fetchPastEvents; },
  Rh: function() { return /* reexport */ fetchUpcomingEvents; },
  vU: function() { return /* reexport */ selectLimit; },
  Pg: function() { return /* reexport */ selectPastEvents; },
  _M: function() { return /* reexport */ selectPastTotalCount; },
  yE: function() { return /* reexport */ selectUpcomingEvents; },
  Vt: function() { return /* reexport */ selectUpcomingTotalCount; }
});

// UNUSED EXPORTS: DEFAULT_EVENT_LIMIT, selectOffset, selectPastYear, selectUpcomingYear

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 7 modules
var redux_toolkit_esm = __webpack_require__(6279);
;// CONCATENATED MODULE: ./lib/redux/slices/eventSlice/eventSlice.ts

// import { fetchMorePressReleases } from './thunks';
const DEFAULT_EVENT_LIMIT = 5;
const initialState = {
    upcomingEvents: [],
    pastEvents: [],
    offset: 0,
    limit: DEFAULT_EVENT_LIMIT,
    upcomingTotalCount: 0,
    upcomingEventCurPage: 0,
    pastTotalCount: 0,
    pastEventCurPage: 0,
    upcomingYear: null,
    pastYear: null
};
const eventSlice = (0,redux_toolkit_esm/* createSlice */.oM)({
    name: "pressRelease",
    initialState,
    reducers: {
        setInitialData: (state, action)=>{
            state.upcomingTotalCount = action.payload.upcomingTotalPage;
            state.upcomingEvents = action.payload.upcomingEvents;
            state.pastTotalCount = action.payload.pastEventTotalPage;
            state.pastEvents = action.payload.pastEvents;
            state.offset = 0;
        },
        resetList: (state)=>{
            state.offset = 0;
            state.upcomingEvents = [];
            state.pastEvents = [];
            state.upcomingTotalCount = 0;
            state.upcomingEventCurPage = 0;
            state.pastTotalCount = 0;
            state.pastEventCurPage = 0;
        },
        setUpcomingEvents: (state, action)=>{
            state.upcomingEvents = action.payload.data;
            state.upcomingTotalCount = action.payload.meta.totalCount;
        },
        setPastEvents: (state, action)=>{
            state.pastEvents = action.payload.data;
            state.pastTotalCount = action.payload.meta.totalCount;
        }
    },
    extraReducers: (builder)=>{
        builder;
    // .addCase(fetchMorePressReleases.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(
    //   fetchMorePressReleases.fulfilled,
    //   (state, action: PayloadAction<EventResult>) => {
    //     state.status = 'idle';
    //     state.pressReleases = [
    //       ...state.pressReleases,
    //       ...action.payload.articleList,
    //     ];
    //     state.totalPage = action.payload.totalPage;
    //     state.totalResults = action.payload.totalResults;
    //     state.offset += 1;
    //   },
    // );
    }
});
var FileType;
(function(FileType) {
    FileType["WEBTOON_COLOR_LOGO"] = "WEBTOON_COLOR_LOGO";
    FileType["WEBTOON_COLOR_BG"] = "WEBTOON_COLOR_BG";
    FileType["WEBTOON_BLACK"] = "WEBTOON_BLACK";
    FileType["WATTPAD"] = "WATTPAD";
    FileType["TOONRADAR"] = "TOONRADAR";
    FileType["WEBTOON_DC_COMICS"] = "WEBTOON_DC_COMICS";
    FileType["WEBTOON_WITH"] = "WEBTOON_WITH";
    FileType["LINE_MANGA_COLOR_LOGO"] = "LINE_MANGA_COLOR_LOGO";
    FileType["LINE_MANGA_COLOR_BG"] = "LINE_MANGA_COLOR_BG";
    FileType["LINE_MANGA_BLACK"] = "LINE_MANGA_BLACK";
    FileType["LINE_MANGA_X_EBOOK_INITIATIVE_JAPAN"] = "LINE_MANGA_X_EBOOK_INITIATIVE_JAPAN";
    FileType["UPLOAD"] = "UPLOAD";
    FileType["PRESS_RELEASE"] = "PRESS_RELEASE";
    FileType["SHAREHOLDER_LETTER"] = "SHAREHOLDER_LETTER";
    FileType["EARNINGS_WEBCAST"] = "EARNINGS_WEBCAST";
    FileType["EARNINGS_TRANSCRIPT"] = "EARNINGS_TRANSCRIPT";
    FileType["DIRECT_INPUT"] = "DIRECT_INPUT";
})(FileType || (FileType = {}));

;// CONCATENATED MODULE: ./lib/redux/slices/eventSlice/selectors.ts
const selectUpcomingEvents = (state)=>state.event.upcomingEvents;
const selectPastEvents = (state)=>state.event.pastEvents;
const selectOffset = (state)=>state.event.offset;
const selectLimit = (state)=>state.event.limit;
const selectUpcomingYear = (state)=>state.event.upcomingYear;
const selectPastYear = (state)=>state.event.pastYear;
const selectUpcomingTotalCount = (state)=>state.event.upcomingTotalCount;
const selectPastTotalCount = (state)=>state.event.pastTotalCount; // export const selectTotalPage = (state: ReduxState) =>
 //   state.event.totalPage;
 // export const selectTotalResults = (state: ReduxState) =>
 //   state.event.totalResults;

;// CONCATENATED MODULE: ./lib/redux/slices/eventSlice/thunks.ts


const fetchUpcomingEvents = (year, offset)=>async (dispatch, getState)=>{
        const limit = selectLimit(getState());
        const url = new URL("".concat("https://dev-api-about.webtoon.com", "/events"));
        url.searchParams.set("offset", "".concat(offset));
        url.searchParams.set("limit", "".concat(limit));
        if (year) url.searchParams.set("year", "".concat(year));
        url.searchParams.set("eventStatus", "UPCOMING");
        // const response = await fetch(url, {
        //   method: 'GET',
        //   headers: { 'Content-Type': 'application/json' },
        //   cache: 'no-store',
        // });
        // const result = await response.json();
        dispatch(eventSlice.actions.setUpcomingEvents({
            data: [
                {
                    eventNo: 1,
                    title: "event_1",
                    uploadDate: "2024-04-24T09:19:12.929Z",
                    attachmentNo: 1,
                    eventStatus: "UPCOMING",
                    emailAlert: "N",
                    deleteYn: "N",
                    createYmdt: "2024-04-24T09:19:12.929Z",
                    updateYmdt: "2024-04-24T09:19:12.929Z",
                    firstFileName: "File Name",
                    totalFileNumber: 1,
                    webcastYn: "N",
                    files: [
                        {
                            fileNo: 0,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.pdf",
                            attachmentNo: 1,
                            fileType: "PRESS_RELEASE",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 1,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.png",
                            attachmentNo: 1,
                            fileType: "SHAREHOLDER_LETTER",
                            orderNo: 1,
                            linkUploaded: "N",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        }
                    ]
                }
            ],
            meta: {
                totalCount: 1
            }
        }));
    };
const fetchPastEvents = (year, offset)=>async (dispatch, getState)=>{
        const limit = selectLimit(getState());
        const url = new URL("".concat("https://dev-api-about.webtoon.com", "/events"));
        url.searchParams.set("offset", "".concat(offset));
        url.searchParams.set("limit", "".concat(limit));
        if (year) url.searchParams.set("year", "".concat(year));
        url.searchParams.set("eventStatus", "PAST");
        // const response = await fetch(url, {
        //   method: 'GET',
        //   headers: { 'Content-Type': 'application/json' },
        //   cache: 'no-store',
        // });
        // const result = await response.json();
        dispatch(eventSlice.actions.setPastEvents({
            data: [
                {
                    eventNo: 1,
                    title: "event_1",
                    uploadDate: "2024-04-24T09:19:12.929Z",
                    attachmentNo: 1,
                    eventStatus: "PAST",
                    emailAlert: "N",
                    deleteYn: "N",
                    createYmdt: "2024-04-24T09:19:12.929Z",
                    updateYmdt: "2024-04-24T09:19:12.929Z",
                    firstFileName: "File Name",
                    totalFileNumber: 1,
                    webcastYn: "N",
                    files: [
                        {
                            fileNo: 0,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.pdf",
                            attachmentNo: 1,
                            fileType: "PRESS_RELEASE",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 1,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.png",
                            attachmentNo: 1,
                            fileType: "SHAREHOLDER_LETTER",
                            orderNo: 1,
                            linkUploaded: "N",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 1,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.png",
                            attachmentNo: 1,
                            fileType: "EARNINGS_WEBCAST",
                            orderNo: 1,
                            linkUploaded: "N",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 1,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.png",
                            attachmentNo: 1,
                            fileType: "EARNINGS_TRANSCRIPT",
                            orderNo: 1,
                            linkUploaded: "N",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        }
                    ]
                },
                {
                    eventNo: 2,
                    title: "event_2",
                    uploadDate: "2024-04-24T09:19:12.929Z",
                    attachmentNo: 1,
                    eventStatus: "PAST",
                    emailAlert: "N",
                    deleteYn: "N",
                    createYmdt: "2024-04-24T09:19:12.929Z",
                    updateYmdt: "2024-04-24T09:19:12.929Z",
                    firstFileName: "File Name",
                    totalFileNumber: 1,
                    webcastYn: "N",
                    files: [
                        {
                            fileNo: 0,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.pdf",
                            attachmentNo: 1,
                            fileType: "PRESS_RELEASE",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 1,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.png",
                            attachmentNo: 1,
                            fileType: "SHAREHOLDER_LETTER",
                            orderNo: 1,
                            linkUploaded: "N",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 1,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.png",
                            attachmentNo: 1,
                            fileType: "EARNINGS_WEBCAST",
                            orderNo: 1,
                            linkUploaded: "N",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 1,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.png",
                            attachmentNo: 1,
                            fileType: "EARNINGS_TRANSCRIPT",
                            orderNo: 1,
                            linkUploaded: "N",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        }
                    ]
                }
            ],
            meta: {
                totalCount: 2
            }
        }));
    };

;// CONCATENATED MODULE: ./lib/redux/slices/eventSlice/index.ts





/***/ }),

/***/ 4584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PL: function() { return /* reexport */ mainSlice; },
  XK: function() { return /* reexport */ selectCareersIndex; },
  xo: function() { return /* reexport */ selectIsHeaderInsideKeyVisual; },
  q1: function() { return /* reexport */ selectIsHeaderInsideVideo; },
  sh: function() { return /* reexport */ selectLatestNews; }
});

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 7 modules
var redux_toolkit_esm = __webpack_require__(6279);
// EXTERNAL MODULE: ./lib/redux/slices/mainSlice/thunks.ts
var thunks = __webpack_require__(1241);
;// CONCATENATED MODULE: ./lib/redux/slices/mainSlice/mainSlice.ts


const initialState = {
    isHeaderInsideVideo: false,
    isHeaderInsideKeyVidual: false,
    latestNews: [],
    careersIndex: {
        openItemId: "",
        openImgs: {
            "U.S.A": "WEBTOON Entertainment Inc.",
            Japan: "LINE Digital Frontier",
            Korea: "NAVER WEBTOON Ltd."
        }
    }
};
const mainSlice = (0,redux_toolkit_esm/* createSlice */.oM)({
    name: "main",
    initialState,
    reducers: {
        updateHeaderInsideKeyVisual: (state, action)=>{
            state.isHeaderInsideKeyVidual = action.payload;
        },
        updateHeaderInsideVideo: (state, action)=>{
            state.isHeaderInsideVideo = action.payload;
        },
        saveLatesNews: (state, action)=>{
            state.latestNews = action.payload;
        },
        setOpenItem: (state, action)=>{
            state.careersIndex.openItemId = action.payload;
        },
        setOpenImage: (state, action)=>{
            state.careersIndex.openImgs = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(thunks/* fetchLatestNews */.L.fulfilled, (state, action)=>{
            state.latestNews = action.payload;
        });
    }
});

;// CONCATENATED MODULE: ./lib/redux/slices/mainSlice/selectors.ts
const selectIsHeaderInsideVideo = (state)=>state.main.isHeaderInsideVideo;
const selectLatestNews = (state)=>state.main.latestNews;
const selectIsHeaderInsideKeyVisual = (state)=>state.main.isHeaderInsideKeyVidual;
const selectCareersIndex = (state)=>state.main.careersIndex;

;// CONCATENATED MODULE: ./lib/redux/slices/mainSlice/index.ts




/***/ }),

/***/ 1241:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: function() { return /* binding */ fetchLatestNews; }
/* harmony export */ });
/* harmony import */ var _app_api_sustainability__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4874);
/* harmony import */ var _app_constants_news_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9447);
/* harmony import */ var _createAppAsyncThunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3546);
/* harmony import */ var _pressReleaseSlice_fetchPressRelease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2454);




const fetchLatestNews = (0,_createAppAsyncThunk__WEBPACK_IMPORTED_MODULE_1__/* .createAppAsyncThunk */ .a)("main/fetchLatestNews", async ()=>{
    const [PRResponse, SusResponse] = await Promise.all([
        (0,_pressReleaseSlice_fetchPressRelease__WEBPACK_IMPORTED_MODULE_2__/* .fetchPressRelease */ .cn)(0, 3, null, null, null),
        (0,_app_api_sustainability__WEBPACK_IMPORTED_MODULE_3__/* .fetchSustainability */ .j)(0, 3, null, null, null)
    ]);
    const prList = PRResponse.articleList.map((item)=>({
            articleId: item.articleId,
            title: item.title,
            tnUrl: item.tnUrl,
            newsType: _app_constants_news_const__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.pressRelease,
            noticeYmd: item.noticeYmd,
            thumbnailType: item.thumbnailType
        }));
    const susList = SusResponse.articleList.map((item)=>({
            articleId: item.articleId,
            title: item.title,
            tnUrl: item.tnUrl,
            newsType: _app_constants_news_const__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.sustainability,
            noticeYmd: item.noticeYmd,
            thumbnailType: item.thumbnailType
        }));
    const mergedList = [
        ...prList,
        ...susList
    ];
    mergedList.sort((a, b)=>Number(b.noticeYmd) - Number(a.noticeYmd));
    return mergedList.slice(0, 4);
});


/***/ }),

/***/ 2454:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nw: function() { return /* binding */ convertQuarter; },
/* harmony export */   cn: function() { return /* binding */ fetchPressRelease; }
/* harmony export */ });
/* unused harmony export fetchPressReleaseDetails */
const HOME_PAGE_ID = "webtoon-global";
const BOARD_ID = "press-releases";
const convertQuarter = (quarter)=>{
    let result;
    switch(quarter){
        case "1":
            result = "I";
            break;
        case "2":
            result = "II";
            break;
        case "3":
            result = "III";
            break;
        case "4":
            result = "IV";
            break;
    }
    return result;
};
const fetchPressRelease = async function() {
    let offset = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, limit = arguments.length > 1 ? arguments[1] : void 0, year = arguments.length > 2 ? arguments[2] : void 0, quarter = arguments.length > 3 ? arguments[3] : void 0, keyword = arguments.length > 4 ? arguments[4] : void 0, totalResults = arguments.length > 5 ? arguments[5] : void 0;
    const url = new URL("".concat("https://dev-api-about.webtoon.com", "/posts/all"));
    url.searchParams.set("newsType", "PRESS_RELEASE");
    url.searchParams.set("offset", "".concat(offset));
    url.searchParams.set("limit", "".concat(limit));
    if (year) url.searchParams.set("year", "".concat(year));
    if (quarter) url.searchParams.set("quarter", "".concat(convertQuarter(quarter[0])));
    if (keyword) url.searchParams.set("keyword", keyword);
    // url.searchParams.set('homePageId', HOME_PAGE_ID);
    // url.searchParams.set('lang', 'en');
    // url.searchParams.set('boardMetaId', BOARD_ID);
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-store"
        });
        const result = await response.json();
        const { data } = result.results[0];
        console.log("data: ", data);
        // Server fetch
        if (totalResults === undefined) return data;
        // Client Fetch - Remove this one when BE return totalResults field
        let _totalResults = 0;
        if (data.totalPage > 1) {
            url.searchParams.set("page", "".concat(data.totalPage));
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                cache: "no-store"
            });
            const result = await response.json();
            const dataLastPage = result.results[0].data;
            _totalResults = dataLastPage.articleList.length + (data.totalPage - 1) * limit;
        } else {
            _totalResults = data.articleList.length;
        }
        return {
            ...data,
            totalResults: _totalResults
        };
    } catch (err) {
        console.log(err);
        return {
            totalPage: 0,
            totalResults: 0,
            articleList: []
        };
    }
};
const fetchPressReleaseDetails = async (articleId)=>{
    const url = new URL("".concat("https://dev-api-about.webtoon.com", "/posts/newDetails"));
    // url.searchParams.set('homePageId', HOME_PAGE_ID);
    // url.searchParams.set('boardMetaId', BOARD_ID);
    // url.searchParams.set('lang', 'en');
    url.searchParams.set("newsType", "PRESS_RELEASE");
    url.searchParams.set("newsNo", articleId);
    // url.searchParams.set('sortBy', 'create_date');
    // url.searchParams.set('sortOrder', 'DESC');
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store"
    });
    const result = await response.json();
    console.log("result: ", result.results[0].data);
    return result.results[0].data;
};


/***/ }),

/***/ 2525:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Uz: function() { return /* reexport */ fetchQuarterlyResults; },
  IX: function() { return /* reexport */ quarterlyResultSlice; },
  vU: function() { return /* reexport */ selectLimit; },
  g6: function() { return /* reexport */ selectQuarterlyResults; }
});

// UNUSED EXPORTS: DEFAULT_SEC_FILING_LIMIT, fetchQuarterlyResultDetails, selectOffset, selectTotalCount

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 7 modules
var redux_toolkit_esm = __webpack_require__(6279);
;// CONCATENATED MODULE: ./lib/redux/slices/quarterlyResultSlice/quarterlyResult.ts

// import { fetchMorePressReleases } from './thunks';
const DEFAULT_SEC_FILING_LIMIT = 5;
const initialState = {
    quarterlyResults: [],
    offset: 0,
    limit: DEFAULT_SEC_FILING_LIMIT,
    selectedYear: new Date().getFullYear(),
    totalCount: 0
};
const quarterlyResultSlice = (0,redux_toolkit_esm/* createSlice */.oM)({
    name: "quarterlyResult",
    initialState,
    reducers: {
        setInitialData: (state, action)=>{
            state.totalCount = action.payload.totalCount;
            state.quarterlyResults = action.payload.quarterlyResults;
            state.offset = 0;
        },
        resetList: (state)=>{
            state.offset = 0;
            state.quarterlyResults = [];
            state.totalCount = 0;
        },
        setQuarterlyResults: (state, action)=>{
            state.quarterlyResults = action.payload.data;
            state.totalCount = action.payload.meta.totalCount;
        }
    },
    extraReducers: (builder)=>{
        builder;
    // .addCase(fetchMorePressReleases.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(
    //   fetchMorePressReleases.fulfilled,
    //   (state, action: PayloadAction<EventResult>) => {
    //     state.status = 'idle';
    //     state.pressReleases = [
    //       ...state.pressReleases,
    //       ...action.payload.articleList,
    //     ];
    //     state.totalPage = action.payload.totalPage;
    //     state.totalResults = action.payload.totalResults;
    //     state.offset += 1;
    //   },
    // );
    }
});

;// CONCATENATED MODULE: ./lib/redux/slices/quarterlyResultSlice/selectors.ts
const selectQuarterlyResults = (state)=>state.quarterlyResult.quarterlyResults;
const selectTotalCount = (state)=>state.quarterlyResult.totalCount;
const selectOffset = (state)=>state.quarterlyResult.offset;
const selectLimit = (state)=>state.quarterlyResult.limit;

;// CONCATENATED MODULE: ./lib/redux/slices/quarterlyResultSlice/thunks.ts


const fetchQuarterlyResults = function() {
    let offset = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, year = arguments.length > 1 ? arguments[1] : void 0;
    return async (dispatch, getState)=>{
        const limit = selectLimit(getState());
        const url = new URL("".concat("https://dev-api-about.webtoon.com", "/quarterly_results"));
        url.searchParams.set("offset", "".concat(offset));
        url.searchParams.set("limit", "".concat(limit));
        url.searchParams.set("startQuarter", "I");
        url.searchParams.set("endQuarter", "IV");
        if (year) url.searchParams.set("startYear", "".concat(year));
        if (year) url.searchParams.set("endYear", "".concat(year));
        // const response = await fetch(url, {
        //   method: 'GET',
        //   headers: { 'Content-Type': 'application/json' },
        //   cache: 'no-store',
        // });
        // const result = await response.json();
        dispatch(quarterlyResultSlice.actions.setQuarterlyResults({
            data: [
                {
                    quarterlyResultNo: 0,
                    year: 0,
                    quarter: "I",
                    attachmentNo: 0,
                    files: [
                        {
                            fileNo: 0,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "string",
                            attachmentNo: 1,
                            fileType: "PRESS_RELEASE",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 1,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "string",
                            attachmentNo: 1,
                            fileType: "SHAREHOLDER_LETTER",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 2,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "string",
                            attachmentNo: 1,
                            fileType: "EARNINGS_WEBCAST",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 2,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "string",
                            attachmentNo: 1,
                            fileType: "EARNINGS_TRANSCRIPT",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        }
                    ],
                    deleteYn: "Y",
                    createYmdt: "2024-04-24T09:19:12.929Z",
                    updateYmdt: "2024-04-24T09:19:12.929Z",
                    firstFileName: "string",
                    totalFileNumber: 1,
                    webcastYn: "Y"
                },
                {
                    quarterlyResultNo: 0,
                    year: 0,
                    quarter: "II",
                    attachmentNo: 0,
                    files: [
                        {
                            fileNo: 0,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "string",
                            attachmentNo: 1,
                            fileType: "PRESS_RELEASE",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 1,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "string",
                            attachmentNo: 1,
                            fileType: "SHAREHOLDER_LETTER",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 2,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "string",
                            attachmentNo: 1,
                            fileType: "EARNINGS_WEBCAST",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 2,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "string",
                            attachmentNo: 1,
                            fileType: "EARNINGS_TRANSCRIPT",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        }
                    ],
                    deleteYn: "Y",
                    createYmdt: "2024-04-24T09:19:12.929Z",
                    updateYmdt: "2024-04-24T09:19:12.929Z",
                    firstFileName: "string",
                    totalFileNumber: 1,
                    webcastYn: "Y"
                }
            ],
            meta: {
                totalCount: 1
            }
        }));
    };
};
const fetchQuarterlyResultDetails = async (secFilingNo)=>{
    const url = new URL("".concat("https://dev-api-about.webtoon.com", "/sec-filing/").concat(secFilingNo));
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store"
    });
    const result = await response.json();
    return result.results[0];
};

;// CONCATENATED MODULE: ./lib/redux/slices/quarterlyResultSlice/index.ts





/***/ }),

/***/ 1618:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Yy: function() { return /* reexport */ fetchReportAndProxy; },
  aS: function() { return /* reexport */ reportAndProxySlice; },
  Iy: function() { return /* reexport */ selectReportAndProxy; }
});

// UNUSED EXPORTS: DEFAULT_REPORT_AND_PROXY_LIMIT, selectLimit, selectOffset, selectTotalCount

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 7 modules
var redux_toolkit_esm = __webpack_require__(6279);
;// CONCATENATED MODULE: ./lib/redux/slices/reportAndProxySlice/reportAndProxySlice.ts

const DEFAULT_REPORT_AND_PROXY_LIMIT = 10;
const initialState = {
    data: [],
    offset: 0,
    limit: DEFAULT_REPORT_AND_PROXY_LIMIT,
    selectedYear: null,
    totalCount: 0
};
const reportAndProxySlice = (0,redux_toolkit_esm/* createSlice */.oM)({
    name: "reportAndProxy",
    initialState,
    reducers: {
        setReportAndProxy: (state, action)=>{
            state.data = action.payload.data;
            state.totalCount = action.payload.meta.totalCount;
        }
    }
});

;// CONCATENATED MODULE: ./lib/redux/slices/reportAndProxySlice/selectors.ts
const selectReportAndProxy = (state)=>state.reportAndProxy.data;
const selectTotalCount = (state)=>state.reportAndProxy.totalCount;
const selectOffset = (state)=>state.reportAndProxy.offset;
const selectLimit = (state)=>state.reportAndProxy.limit;

;// CONCATENATED MODULE: ./lib/redux/slices/reportAndProxySlice/thunks.ts


const fetchReportAndProxy = function(year) {
    let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return async (dispatch, getState)=>{
        const limit = selectLimit(getState());
        const url = new URL("".concat("https://dev-api-about.webtoon.com", "/report-proxy"));
        url.searchParams.set("offset", "".concat(offset));
        url.searchParams.set("limit", "".concat(limit));
        url.searchParams.set("year", "".concat(year));
        // const response = await fetch(url, {
        //   method: 'GET',
        //   headers: { 'Content-Type': 'application/json' },
        //   cache: 'no-store',
        // });
        // const result = await response.json();
        dispatch(reportAndProxySlice.actions.setReportAndProxy({
            data: [
                {
                    annualReportNo: 1,
                    title: "Report 1",
                    files: [
                        {
                            fileName: "file 1",
                            filePath: "test.pdf"
                        }
                    ]
                },
                {
                    annualReportNo: 2,
                    title: "Report 2",
                    files: [
                        {
                            fileName: "file 2",
                            filePath: "test.pdf"
                        }
                    ]
                },
                {
                    annualReportNo: 3,
                    title: "Report 3",
                    files: [
                        {
                            fileName: "file 3",
                            filePath: "test.pdf"
                        }
                    ]
                }
            ],
            meta: {
                totalCount: 2
            }
        }));
    };
};

;// CONCATENATED MODULE: ./lib/redux/slices/reportAndProxySlice/index.ts





/***/ }),

/***/ 4769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  uA: function() { return /* reexport */ fetchSecFilings; },
  Ij: function() { return /* reexport */ secfilingSlice; },
  vU: function() { return /* reexport */ selectLimit; },
  VV: function() { return /* reexport */ selectSecFilings; },
  pr: function() { return /* reexport */ selectTotalCount; }
});

// UNUSED EXPORTS: DEFAULT_SEC_FILING_LIMIT, fetchSecFilingDetails, selectOffset

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 7 modules
var redux_toolkit_esm = __webpack_require__(6279);
;// CONCATENATED MODULE: ./lib/redux/slices/secFilingSlice/secFilingSlice.ts

// import { fetchMorePressReleases } from './thunks';
const DEFAULT_SEC_FILING_LIMIT = 5;
const initialState = {
    secFilings: [],
    offset: 0,
    limit: DEFAULT_SEC_FILING_LIMIT,
    selectedYear: new Date().getFullYear(),
    selectedFilings: null,
    totalCount: 0
};
const secfilingSlice = (0,redux_toolkit_esm/* createSlice */.oM)({
    name: "secFiling",
    initialState,
    reducers: {
        setInitialData: (state, action)=>{
            state.totalCount = action.payload.totalCount;
            state.secFilings = action.payload.secFilings;
            state.offset = 0;
        },
        resetList: (state)=>{
            state.offset = 0;
            state.secFilings = [];
            state.totalCount = 0;
        },
        setSecFilings: (state, action)=>{
            state.secFilings = action.payload.data;
            state.totalCount = action.payload.meta.totalCount;
        }
    },
    extraReducers: (builder)=>{
        builder;
    // .addCase(fetchMorePressReleases.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(
    //   fetchMorePressReleases.fulfilled,
    //   (state, action: PayloadAction<EventResult>) => {
    //     state.status = 'idle';
    //     state.pressReleases = [
    //       ...state.pressReleases,
    //       ...action.payload.articleList,
    //     ];
    //     state.totalPage = action.payload.totalPage;
    //     state.totalResults = action.payload.totalResults;
    //     state.offset += 1;
    //   },
    // );
    }
});

;// CONCATENATED MODULE: ./lib/redux/slices/secFilingSlice/selectors.ts
const selectSecFilings = (state)=>state.secFiling.secFilings;
const selectTotalCount = (state)=>state.secFiling.totalCount;
const selectOffset = (state)=>state.secFiling.offset;
const selectLimit = (state)=>state.secFiling.limit;

;// CONCATENATED MODULE: ./lib/redux/slices/secFilingSlice/thunks.ts


const fetchSecFilings = function() {
    let offset = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, year = arguments.length > 1 ? arguments[1] : void 0, type = arguments.length > 2 ? arguments[2] : void 0;
    return async (dispatch, getState)=>{
        const limit = selectLimit(getState());
        const url = new URL("".concat("https://dev-api-about.webtoon.com", "/sec-filing"));
        url.searchParams.set("offset", "".concat(offset));
        url.searchParams.set("limit", "".concat(limit));
        if (year) url.searchParams.set("year", "".concat(year));
        if (type) url.searchParams.set("type", type);
        // const response = await fetch(url, {
        //   method: 'GET',
        //   headers: { 'Content-Type': 'application/json' },
        //   cache: 'no-store',
        // });
        // const result = await response.json();
        dispatch(secfilingSlice.actions.setSecFilings({
            data: [
                {
                    secFilingNo: 1,
                    filingDate: "2024-04-24T09:19:12.929Z",
                    filingType: "ANNUAL",
                    deleteYn: "Y",
                    filingName: "Filing 1",
                    attachmentNo: "1",
                    filingDescription: "This is desc 1",
                    fileResults: [
                        {
                            fileNo: 0,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.pdf",
                            attachmentNo: 1,
                            fileType: "PRESS_RELEASE",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 1,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.xls",
                            attachmentNo: 1,
                            fileType: "SHAREHOLDER_LETTER",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 2,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.zip",
                            attachmentNo: 1,
                            fileType: "EARNINGS_WEBCAST",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        }
                    ],
                    emailAlert: "Y",
                    createYmdt: "2024-04-24T09:19:12.929Z",
                    updateYmdt: "2024-04-24T09:19:12.929Z"
                },
                {
                    secFilingNo: 1,
                    filingDate: "2024-04-24T09:19:12.929Z",
                    filingType: "PROXY",
                    deleteYn: "Y",
                    filingName: "Filing 1",
                    attachmentNo: "1",
                    filingDescription: "This is desc 2",
                    fileResults: [
                        {
                            fileNo: 0,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.pdf",
                            attachmentNo: 1,
                            fileType: "PRESS_RELEASE",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 1,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.xls",
                            attachmentNo: 1,
                            fileType: "SHAREHOLDER_LETTER",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        },
                        {
                            fileNo: 2,
                            fileName: "string",
                            originalFileName: "string",
                            filePath: "file.zip",
                            attachmentNo: 1,
                            fileType: "EARNINGS_WEBCAST",
                            orderNo: 1,
                            linkUploaded: "Y",
                            createYmdt: "2024-04-24T09:19:12.929Z",
                            updateYmdt: "2024-04-24T09:19:12.929Z",
                            deleteYn: "Y"
                        }
                    ],
                    emailAlert: "Y",
                    createYmdt: "2024-04-24T09:19:12.929Z",
                    updateYmdt: "2024-04-24T09:19:12.929Z"
                }
            ],
            meta: {
                totalCount: 2
            }
        }));
    };
};
const fetchSecFilingDetails = async (secFilingNo)=>{
    const url = new URL("".concat("https://dev-api-about.webtoon.com", "/sec-filing/").concat(secFilingNo));
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store"
    });
    const result = await response.json();
    return result.results[0];
};

;// CONCATENATED MODULE: ./lib/redux/slices/secFilingSlice/index.ts





/***/ }),

/***/ 7582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSSFLink: function() { return /* binding */ getSSFLink; }
/* harmony export */ });
// 'use client';
const CDN_ASSETS_FOLDER = "/wec/20231025";
function getSSFLink(src) {
    let width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100, quality = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 2;
    const isDev = "dev" === "dev";
    const isUploadAssetSuccess = "SUCCESS" === "SUCCESS";
    const isExternalSrc = src.includes("http") && !src.includes("ssf.navercorp.com");
    if (isDev || !isUploadAssetSuccess || isExternalSrc) return src;
    return "https://ssl.pstatic.net/static".concat(CDN_ASSETS_FOLDER, "/").concat(src, "?w=").concat(width, "&q=").concat(quality);
}
const imageLoader = (param)=>{
    let { src, width, quality } = param;
    return getSSFLink(src, width, quality);
};
/* harmony default export */ __webpack_exports__["default"] = (imageLoader);


/***/ }),

/***/ 5277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(474);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 5468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(474);
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 6964:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Image", ({
    enumerable: true,
    get: function() {
        return Image;
    }
}));
const _interop_require_default = __webpack_require__(1024);
const _interop_require_wildcard = __webpack_require__(8533);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(4887));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9232));
const _getimgprops = __webpack_require__(3655);
const _imageconfig = __webpack_require__(6921);
const _imageconfigcontextsharedruntime = __webpack_require__(8143);
const _warnonce = __webpack_require__(7707);
const _routercontextsharedruntime = __webpack_require__(7650);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(7582));
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image/","loader":"custom","dangerouslyAllowSVG":false,"unoptimized":false};
if (false) {}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    const src = img == null ? void 0 : img.src;
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== "empty") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, onLoad, onError, ...rest } = param;
    return /*#__PURE__*/ _react.default.createElement("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            src,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== "empty") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        // See https://github.com/facebook/react/pull/26940
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", {
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        // Note how we omit the `href` attribute, as it would only be relevant
        // for browsers that do not support `imagesrcset`, and in those cases
        // it would cause the incorrect image to be preloaded.
        //
        // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        ...opts
    }));
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, {
        ...imgAttributes,
        unoptimized: imgMeta.unoptimized,
        placeholder: imgMeta.placeholder,
        fill: imgMeta.fill,
        onLoadRef: onLoadRef,
        onLoadingCompleteRef: onLoadingCompleteRef,
        setBlurComplete: setBlurComplete,
        setShowAltText: setShowAltText,
        ref: forwardedRef
    }), imgMeta.priority ? /*#__PURE__*/ _react.default.createElement(ImagePreload, {
        isAppRouter: isAppRouter,
        imgAttributes: imgAttributes
    }) : null);
});
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 4724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(1024);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const _resolvehref = __webpack_require__(7896);
const _islocalurl = __webpack_require__(9357);
const _formaturl = __webpack_require__(7746);
const _utils = __webpack_require__(2337);
const _addlocale = __webpack_require__(5277);
const _routercontextsharedruntime = __webpack_require__(7650);
const _approutercontextsharedruntime = __webpack_require__(1792);
const _useintersection = __webpack_require__(1013);
const _getdomainlocale = __webpack_require__(5468);
const _addbasepath = __webpack_require__(9207);
const _routerreducertypes = __webpack_require__(2271);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (false) {}
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options);
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(prefetchPromise).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll: routerScroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled,
                scroll: routerScroll
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const pagesRouter = _react.default.useContext(_routercontextsharedruntime.RouterContext);
    const appRouter = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if (false) {}
    if (false) {}
    const { href, as } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ((!prefetchEnabled || "production" === "development") && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", {
        ...restProps,
        ...childProps
    }, children);
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 4913:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 7896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "resolveHref", ({
    enumerable: true,
    get: function() {
        return resolveHref;
    }
}));
const _querystring = __webpack_require__(8888);
const _formaturl = __webpack_require__(7746);
const _omit = __webpack_require__(9946);
const _utils = __webpack_require__(2337);
const _normalizetrailingslash = __webpack_require__(474);
const _islocalurl = __webpack_require__(9357);
const _utils1 = __webpack_require__(1956);
const _interpolateas = __webpack_require__(5125);
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split("?");
    if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL("/", "http://n");
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
            const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formaturl.formatWithValidation)({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: (0, _omit.omit)(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=resolve-href.js.map


/***/ }),

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(2265);
const _requestidlecallback = __webpack_require__(4913);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 6948:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "AmpStateContext", ({
    enumerable: true,
    get: function() {
        return AmpStateContext;
    }
}));
const _interop_require_default = __webpack_require__(1024);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const AmpStateContext = _react.default.createContext({});
if (false) {} //# sourceMappingURL=amp-context.shared-runtime.js.map


/***/ }),

/***/ 8827:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isInAmpMode", ({
    enumerable: true,
    get: function() {
        return isInAmpMode;
    }
}));
function isInAmpMode(param) {
    let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
    return ampFirst || hybrid && hasQuery;
} //# sourceMappingURL=amp-mode.js.map


/***/ }),

/***/ 2361:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
// regexp is based on https://github.com/sindresorhus/escape-string-regexp

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "escapeStringRegexp", ({
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
}));
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map


/***/ }),

/***/ 3655:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImgProps", ({
    enumerable: true,
    get: function() {
        return getImgProps;
    }
}));
const _warnonce = __webpack_require__(7707);
const _imageblursvg = __webpack_require__(8932);
const _imageconfig = __webpack_require__(6921);
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps(param, _state) {
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ("allSizes" in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes
        };
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || "",
        objectFit: imgStyle.objectFit
    }) + '")' : 'url("' + placeholder + '")' // assume `data:image/`
     : null;
    let placeholderStyle = backgroundImage ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    if (false) {}
    const props = {
        ...rest,
        loading: isLazy ? "lazy" : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: imgAttributes.src
    };
    const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map


/***/ }),

/***/ 9232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    defaultHead: function() {
        return defaultHead;
    },
    default: function() {
        return _default;
    }
});
const _interop_require_default = __webpack_require__(1024);
const _interop_require_wildcard = __webpack_require__(8533);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5184));
const _ampcontextsharedruntime = __webpack_require__(6948);
const _headmanagercontextsharedruntime = __webpack_require__(3305);
const _ampmode = __webpack_require__(8827);
const _warnonce = __webpack_require__(7707);
function defaultHead(inAmpMode) {
    if (inAmpMode === void 0) inAmpMode = false;
    const head = [
        /*#__PURE__*/ _react.default.createElement("meta", {
            charSet: "utf-8"
        })
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ _react.default.createElement("meta", {
            name: "viewport",
            content: "width=device-width"
        }));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === "string" || typeof child === "number") {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    "name",
    "httpEquiv",
    "charSet",
    "itemProp"
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case "title":
            case "base":
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case "meta":
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === "charSet") {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ( true && !inAmpMode) {
            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
            [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
            ].some((url)=>c.props["href"].startsWith(url))) {
                const newProps = {
                    ...c.props || {}
                };
                newProps["data-href"] = newProps["href"];
                newProps["href"] = undefined;
                // Add this attribute to make it easy to identify optimized tags
                newProps["data-optimized-fonts"] = true;
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
        }
        if (false) {}
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head(param) {
    let { children } = param;
    const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ _react.default.createElement(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState)
    }, children);
}
const _default = Head;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map


/***/ }),

/***/ 8932:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImageBlurSvg", ({
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
}));
function getImageBlurSvg(param) {
    let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
    const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
} //# sourceMappingURL=image-blur-svg.js.map


/***/ }),

/***/ 8143:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ImageConfigContext", ({
    enumerable: true,
    get: function() {
        return ImageConfigContext;
    }
}));
const _interop_require_default = __webpack_require__(1024);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const _imageconfig = __webpack_require__(6921);
const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
if (false) {} //# sourceMappingURL=image-config-context.shared-runtime.js.map


/***/ }),

/***/ 6921:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: "/_next/image",
    loader: "default",
    loaderFile: "",
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        "image/webp"
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: "inline",
    remotePatterns: [],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map


/***/ }),

/***/ 2597:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    unstable_getImgProps: function() {
        return unstable_getImgProps;
    }
});
const _interop_require_default = __webpack_require__(1024);
const _getimgprops = __webpack_require__(3655);
const _warnonce = __webpack_require__(7707);
const _imagecomponent = __webpack_require__(6964);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(7582));
const unstable_getImgProps = (imgProps)=>{
    (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image/","loader":"custom","dangerouslyAllowSVG":false,"unoptimized":false}
    });
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
};
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 3388:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    suspense: function() {
        return suspense;
    },
    NoSSR: function() {
        return NoSSR;
    }
});
const _interop_require_default = __webpack_require__(1024);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const _nossrerror = __webpack_require__(4922);
function suspense() {
    const error = new Error(_nossrerror.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _nossrerror.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
}
function NoSSR(param) {
    let { children } = param;
    if (false) {}
    return children;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 7650:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "RouterContext", ({
    enumerable: true,
    get: function() {
        return RouterContext;
    }
}));
const _interop_require_default = __webpack_require__(1024);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const RouterContext = _react.default.createContext(null);
if (false) {} //# sourceMappingURL=router-context.shared-runtime.js.map


/***/ }),

/***/ 7746:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    }
});
const _interop_require_wildcard = __webpack_require__(8533);
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8888));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || "";
    let pathname = urlObj.pathname || "";
    let hash = urlObj.hash || "";
    let query = urlObj.query || "";
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ":" + urlObj.port;
        }
    }
    if (query && typeof query === "object") {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || "";
    if (protocol && !protocol.endsWith(":")) protocol += ":";
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
    } else if (!host) {
        host = "";
    }
    if (hash && hash[0] !== "#") hash = "#" + hash;
    if (search && search[0] !== "?") search = "?" + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace("#", "%23");
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    "auth",
    "hash",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "slashes"
];
function formatWithValidation(url) {
    if (false) {}
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map


/***/ }),

/***/ 1956:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __webpack_require__(3799);
const _isdynamic = __webpack_require__(9731); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 5125:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "interpolateAs", ({
    enumerable: true,
    get: function() {
        return interpolateAs;
    }
}));
const _routematcher = __webpack_require__(5366);
const _routeregex = __webpack_require__(5319);
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = "";
    const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
    // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = "[" + (repeat ? "..." : "") + param + "]";
        if (optional) {
            replaced = (!value ? "/" : "") + "[" + replaced + "]";
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
    })) {
        interpolatedRoute = "" // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
} //# sourceMappingURL=interpolate-as.js.map


/***/ }),

/***/ 9731:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
// Identify /[param]/ in route string

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isDynamicRoute", ({
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
}));
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map


/***/ }),

/***/ 9357:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isLocalURL", ({
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
}));
const _utils = __webpack_require__(2337);
const _hasbasepath = __webpack_require__(4561);
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map


/***/ }),

/***/ 9946:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "omit", ({
    enumerable: true,
    get: function() {
        return omit;
    }
}));
function omit(object, keys) {
    const omitted = {};
    Object.keys(object).forEach((key)=>{
        if (!keys.includes(key)) {
            omitted[key] = object[key];
        }
    });
    return omitted;
} //# sourceMappingURL=omit.js.map


/***/ }),

/***/ 8888:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    },
    assign: function() {
        return assign;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === "undefined") {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
    } else {
        return "";
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map


/***/ }),

/***/ 5366:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getRouteMatcher", ({
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
}));
const _utils = __webpack_require__(2337);
function getRouteMatcher(param) {
    let { re, groups } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (_) {
                throw new _utils.DecodeError("failed to decode param");
            }
        };
        const params = {};
        Object.keys(groups).forEach((slugName)=>{
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== undefined) {
                params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry)=>decode(entry)) : g.repeat ? [
                    decode(m)
                ] : decode(m);
            }
        });
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map


/***/ }),

/***/ 5319:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRouteRegex: function() {
        return getRouteRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    }
});
const _interceptionroutes = __webpack_require__(4507);
const _escaperegexp = __webpack_require__(2361);
const _removetrailingslash = __webpack_require__(993);
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
/**
 * Parses a given parameter from a route to a data structure that can be used
 * to generate the parametrized route. Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 */ function parseParameter(param) {
    const optional = param.startsWith("[") && param.endsWith("]");
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith("...");
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const groups = {};
    let groupIndex = 1;
    return {
        parameterizedRoute: segments.map((segment)=>{
            const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (markerMatch && paramMatches) {
                const { key, optional, repeat } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return "/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)";
            } else if (paramMatches) {
                const { key, repeat, optional } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        groups
    };
}
function getRouteRegex(normalizedRoute) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
    return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = "";
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
    const { key, optional, repeat } = parseParameter(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, "");
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = "" + key;
    }
    return repeat ? optional ? "(?:/(?<" + cleanedKey + ">.+?))?" : "/(?<" + cleanedKey + ">.+?)" : "/(?<" + cleanedKey + ">[^/]+?)";
}
function getNamedParametrizedRoute(route, prefixRouteKeys) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    return {
        namedParameterizedRoute: segments.map((segment)=>{
            const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (hasInterceptionMarker && paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_INTERCEPTION_MARKER_PREFIX : undefined
                });
            } else if (paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_QUERY_PARAM_PREFIX : undefined
                });
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
    return {
        ...getRouteRegex(normalizedRoute),
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
    const { catchAll = true } = options;
    if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
    let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map


/***/ }),

/***/ 3799:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSortedRoutes", ({
    enumerable: true,
    get: function() {
        return getSortedRoutes;
    }
}));
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === "/" ? "/" : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith("...")) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith(".")) {
                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                    }
                    if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = "[[...]]";
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = "[...]";
                }
            } else {
                if (isOptional) {
                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = "[]";
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
} //# sourceMappingURL=sorted-routes.js.map


/***/ }),

/***/ 5184:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return SideEffect;
    }
}));
const _interop_require_wildcard = __webpack_require__(8533);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2265));
const isServer = "object" === "undefined";
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements, props));
        }
    }
    if (isServer) {
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect(()=>{
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        return ()=>{
            var _headManager_mountedInstances;
            headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.delete(props.children);
        };
    });
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect(()=>{
        if (headManager) {
            headManager._pendingUpdate = emitChange;
        }
        return ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
        };
    });
    useClientOnlyEffect(()=>{
        if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
        }
        return ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
        };
    });
    return null;
} //# sourceMappingURL=side-effect.js.map


/***/ }),

/***/ 2337:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    isResSent: function() {
        return isResSent;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    DecodeError: function() {
        return DecodeError;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : "");
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
}
async function loadGetInitialProps(App, ctx) {
    if (false) { var _App_prototype; }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== "undefined";
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 7707:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "warnOnce", ({
    enumerable: true,
    get: function() {
        return warnOnce;
    }
}));
let warnOnce = (_)=>{};
if (false) {} //# sourceMappingURL=warn-once.js.map


/***/ }),

/***/ 5267:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 946:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 6222:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"logo":"layout_logo__kJlMN","container":"layout_container__F8gUU","header":"layout_header__ajigz","nav":"layout_nav__fHtXU","subNavItem":"layout_subNavItem___BlQw","link":"layout_link__RDXtV","active":"layout_active__4tdEs","logo-float":"layout_logo-float__ZRzUF","headerWrapper":"layout_headerWrapper__THL34"};

/***/ }),

/***/ 8960:
/***/ (function(module) {

var __dirname = "/";
(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout==="function"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=true;t.env={};t.argv=[];t.version="";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(229);module.exports=r})();

/***/ }),

/***/ 622:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(2265),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 7437:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(622);
} else {}


/***/ }),

/***/ 6691:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(2597)


/***/ }),

/***/ 1396:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(4724)


/***/ }),

/***/ 4033:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(290)


/***/ }),

/***/ 8236:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}__webpack_unused_export__=h;__webpack_unused_export__=g;__webpack_unused_export__=b;__webpack_unused_export__=l;__webpack_unused_export__=d;__webpack_unused_export__=q;__webpack_unused_export__=p;__webpack_unused_export__=c;__webpack_unused_export__=f;__webpack_unused_export__=e;__webpack_unused_export__=m;
__webpack_unused_export__=n;__webpack_unused_export__=function(){return!1};__webpack_unused_export__=function(){return!1};__webpack_unused_export__=function(a){return v(a)===h};__webpack_unused_export__=function(a){return v(a)===g};__webpack_unused_export__=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};__webpack_unused_export__=function(a){return v(a)===l};__webpack_unused_export__=function(a){return v(a)===d};__webpack_unused_export__=function(a){return v(a)===q};__webpack_unused_export__=function(a){return v(a)===p};
__webpack_unused_export__=function(a){return v(a)===c};__webpack_unused_export__=function(a){return v(a)===f};__webpack_unused_export__=function(a){return v(a)===e};__webpack_unused_export__=function(a){return v(a)===m};__webpack_unused_export__=function(a){return v(a)===n};
__webpack_unused_export__=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};__webpack_unused_export__=v;


/***/ }),

/***/ 2358:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  /* unused reexport */ __webpack_require__(8236);
} else {}


/***/ }),

/***/ 3198:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zt: function() { return /* reexport */ components_Provider; },
  I0: function() { return /* reexport */ useDispatch; },
  v9: function() { return /* reexport */ useSelector; }
});

// UNUSED EXPORTS: ReactReduxContext, batch, connect, createDispatchHook, createSelectorHook, createStoreHook, shallowEqual, useStore

// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(6272);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/with-selector.js
var with_selector = __webpack_require__(5401);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react-dom/index.js
var react_dom = __webpack_require__(4887);
;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/reactBatchedUpdates.js

;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/batch.js
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

let batch = defaultNoopBatch; // Allow injecting another batching function later

const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

const getBatch = () => batch;
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
;// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Context.js

let realContext = null;

function getContext() {
  if (!realContext) {
    realContext = (0,react.createContext)(null);

    if (false) {}
  }

  return realContext;
}

const Context_ReactReduxContext = /*#__PURE__*/new Proxy({}, /*#__PURE__*/new Proxy({}, {
  get(_, handler) {
    const target = getContext(); // @ts-ignore

    return (_target, ...args) => Reflect[handler](target, ...args);
  }

}));
/* harmony default export */ var Context = ((/* unused pure expression or super */ null && (Context_ReactReduxContext)));
;// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useReduxContext.js



/**
 * Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useReduxContext` hook bound to the specified context.
 */
function createReduxContextHook(context = Context_ReactReduxContext) {
  return function useReduxContext() {
    const contextValue = (0,react.useContext)(context);

    if (false) {}

    return contextValue;
  };
}
/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

const useReduxContext_useReduxContext = /*#__PURE__*/createReduxContextHook();
;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/useSyncExternalStore.js
const useSyncExternalStore_notInitialized = () => {
  throw new Error('uSES not initialized!');
};
;// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useSelector.js




let useSyncExternalStoreWithSelector = useSyncExternalStore_notInitialized;
const initializeUseSelector = fn => {
  useSyncExternalStoreWithSelector = fn;
};

const refEquality = (a, b) => a === b;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context = Context_ReactReduxContext) {
  const useReduxContext = context === Context_ReactReduxContext ? useReduxContext_useReduxContext : createReduxContextHook(context);
  return function useSelector(selector, equalityFnOrOptions = {}) {
    const {
      equalityFn = refEquality,
      stabilityCheck = undefined,
      noopCheck = undefined
    } = typeof equalityFnOrOptions === 'function' ? {
      equalityFn: equalityFnOrOptions
    } : equalityFnOrOptions;

    if (false) {}

    const {
      store,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck
    } = useReduxContext();
    const firstRun = (0,react.useRef)(true);
    const wrappedSelector = (0,react.useCallback)({
      [selector.name](state) {
        const selected = selector(state);

        if (false) {}

        return selected;
      }

    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
    (0,react.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

const useSelector = /*#__PURE__*/createSelectorHook();
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(5487);
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(2358);
;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  const batch = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};
function Subscription_createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}
;// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file

const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
const useIsomorphicLayoutEffect_useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;
;// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connect.js


const _excluded = (/* unused pure expression or super */ null && (["reactReduxForwardedRef"]));

/* eslint-disable valid-jsdoc, @typescript-eslint/no-unused-vars */













let useSyncExternalStore = (/* unused pure expression or super */ null && (notInitialized));
const initializeConnect = fn => {
  useSyncExternalStore = fn;
}; // Define some constant arrays just to avoid re-creating these

const EMPTY_ARRAY = (/* unused pure expression or super */ null && ([null, 0]));
const NO_SUBSCRIPTION_ARRAY = (/* unused pure expression or super */ null && ([null, null])); // Attempts to stringify whatever not-really-a-component value we were given
// for logging in an error message

const stringifyComponent = Comp => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

// This is "just" a `useLayoutEffect`, but with two modifications:
// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
// - we extract this to a separate function to avoid closing over values
//   and causing memory leaks
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(() => effectFunc(...effectArgs), dependencies);
} // Effect callback, extracted: assign the latest props values to refs for later usage


function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,
childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
// check for updates after dispatched actions, and trigger re-renders.


function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,
additionalSubscribeListener) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return () => {}; // Capture values for checking if and when this component unmounts

  let didUnsubscribe = false;
  let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it


    const latestStoreState = store.getState();
    let newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
      // Trigger the React `useSyncExternalStore` subscriber

      additionalSubscribeListener();
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
} // Reducer initial state creation for our update reducer


const initStateUpdates = () => EMPTY_ARRAY;

function strictEqual(a, b) {
  return a === b;
}
/**
 * Infers the type of props that a connector will inject into a component.
 */


let hasWarnedAboutDeprecatedPureOption = false;
/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps A function that extracts values from state
 * @param mapDispatchToProps Setup for dispatching actions
 * @param mergeProps Optional callback to merge state and dispatch props together
 * @param options Options for configuring the connection
 *
 */

function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = shallowEqual,
  areStatePropsEqual = shallowEqual,
  areMergedPropsEqual = shallowEqual,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = ReactReduxContext
} = {}) {
  if (false) {}

  const Context = context;
  const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
  const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
  const initMergeProps = mergePropsFactory(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);

  const wrapWithConnect = WrappedComponent => {
    if (false) {}

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };

    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = useMemo(() => {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        const {
          reactReduxForwardedRef
        } = props,
              wrapperProps = _objectWithoutPropertiesLoose(props, _excluded);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]);
      const ContextToUse = useMemo(() => {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && // @ts-ignore
        isContextConsumer( /*#__PURE__*/React.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      const contextValue = useContext(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {} // Based on the previous check, one of these must be true


      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = useMemo(() => {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return defaultSelectorFactory(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = useMemo(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        const subscription = createSubscription(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]); // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.

      const overriddenContextValue = useMemo(() => {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic

      const lastChildProps = useRef();
      const lastWrapperProps = useRef(wrapperProps);
      const childPropsFromStoreUpdate = useRef();
      const renderIsScheduled = useRef(false);
      const isProcessingDispatch = useRef(false);
      const isMounted = useRef(false);
      const latestSubscriptionCallbackError = useRef();
      useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = useMemo(() => {
        const selector = () => {
          // Tricky logic here:
          // - This render may have been triggered by a Redux store update that produced new child props
          // - However, we may have gotten new wrapper props after that
          // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
          // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
          // So, we'll use the child props from store update only if the wrapper props are the same as last time.
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          } // TODO We're reading the store directly in render() here. Bad idea?
          // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
          // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
          // to determine what the child props should be.


          return childPropsSelector(store.getState(), wrapperProps);
        };

        return selector;
      }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      const subscribeForReact = useMemo(() => {
        const subscribe = reactListener => {
          if (!subscription) {
            return () => {};
          }

          return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
          childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
        };

        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      let actualChildProps;

      try {
        actualChildProps = useSyncExternalStore( // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
        subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
        // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
        actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
        }

        throw err;
      }

      useIsomorphicLayoutEffect(() => {
        latestSubscriptionCallbackError.current = undefined;
        childPropsFromStoreUpdate.current = undefined;
        lastChildProps.current = actualChildProps;
      }); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      const renderedWrappedComponent = useMemo(() => {
        return (
          /*#__PURE__*/
          // @ts-ignore
          React.createElement(WrappedComponent, _extends({}, actualChildProps, {
            ref: reactReduxForwardedRef
          }))
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      const renderedChild = useMemo(() => {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/React.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }

    const _Connect = React.memo(ConnectFunction);

    // Add a hacky cast to get the right output type
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const _forwarded = React.forwardRef(function forwardConnectRef(props, ref) {
        // @ts-ignore
        return /*#__PURE__*/React.createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });

      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoistStatics(forwarded, WrappedComponent);
    }

    return hoistStatics(Connect, WrappedComponent);
  };

  return wrapWithConnect;
}

/* harmony default export */ var components_connect = ((/* unused pure expression or super */ null && (connect)));
;// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js





function Provider({
  store,
  context,
  children,
  serverState,
  stabilityCheck = 'once',
  noopCheck = 'once'
}) {
  const contextValue = (0,react.useMemo)(() => {
    const subscription = Subscription_createSubscription(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : undefined,
      stabilityCheck,
      noopCheck
    };
  }, [store, serverState, stabilityCheck, noopCheck]);
  const previousState = (0,react.useMemo)(() => store.getState(), [store]);
  useIsomorphicLayoutEffect_useIsomorphicLayoutEffect(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);
  const Context = context || Context_ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

/* harmony default export */ var components_Provider = (Provider);
;// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useStore.js


/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context = Context_ReactReduxContext) {
  const useReduxContext = // @ts-ignore
  context === Context_ReactReduxContext ? useReduxContext_useReduxContext : // @ts-ignore
  createReduxContextHook(context);
  return function useStore() {
    const {
      store
    } = useReduxContext(); // @ts-ignore

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

const useStore_useStore = /*#__PURE__*/createStoreHook();
;// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useDispatch.js


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context = Context_ReactReduxContext) {
  const useStore = // @ts-ignore
  context === Context_ReactReduxContext ? useStore_useStore : createStoreHook(context);
  return function useDispatch() {
    const store = useStore(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

const useDispatch = /*#__PURE__*/createDispatchHook();
;// CONCATENATED MODULE: ./node_modules/react-redux/es/exports.js









;// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js
// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.






initializeUseSelector(with_selector.useSyncExternalStoreWithSelector);
initializeConnect(shim.useSyncExternalStore); // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

setBatch(react_dom.unstable_batchedUpdates);



/***/ }),

/***/ 3944:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):0}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof __webpack_require__.g?"undefined":N(__webpack_require__.g))&&__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});


/***/ }),

/***/ 1853:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(2265);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),

/***/ 8704:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h=__webpack_require__(2265),n=__webpack_require__(6272);function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
u(function(){f.hasValue=!0;f.value=d},[d]);w(d);return d};


/***/ }),

/***/ 6272:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(1853);
} else {}


/***/ }),

/***/ 5401:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(8704);
} else {}


/***/ }),

/***/ 75:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),

/***/ 7042:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ __webpack_exports__.Z = (clsx);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(3638));
/******/ _N_E = __webpack_exports__;
/******/ }
]);