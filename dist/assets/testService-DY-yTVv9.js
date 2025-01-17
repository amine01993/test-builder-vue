import{L as wu,z as Ru,C as Pu,A as Di,B as Vu,D as Nt,S as Cu,G as Su,H as pe,I as Du,J as bu,K as ku,M as Nu,N as xu,O as Io,P as Lu}from"./index-CO2k4fc9.js";var bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var te,vo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,v){for(var g=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)g[Dt-2]=arguments[Dt];return m.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var v=T.g[3],g=m+(v^_&(E^v))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=v+(E^m&(_^E))+y[1]+3905402710&4294967295,v=m+(g<<12&4294967295|g>>>20),g=E+(_^v&(m^_))+y[2]+606105819&4294967295,E=v+(g<<17&4294967295|g>>>15),g=_+(m^E&(v^m))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(v^_&(E^v))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=v+(E^m&(_^E))+y[5]+1200080426&4294967295,v=m+(g<<12&4294967295|g>>>20),g=E+(_^v&(m^_))+y[6]+2821735955&4294967295,E=v+(g<<17&4294967295|g>>>15),g=_+(m^E&(v^m))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(v^_&(E^v))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=v+(E^m&(_^E))+y[9]+2336552879&4294967295,v=m+(g<<12&4294967295|g>>>20),g=E+(_^v&(m^_))+y[10]+4294925233&4294967295,E=v+(g<<17&4294967295|g>>>15),g=_+(m^E&(v^m))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(v^_&(E^v))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=v+(E^m&(_^E))+y[13]+4254626195&4294967295,v=m+(g<<12&4294967295|g>>>20),g=E+(_^v&(m^_))+y[14]+2792965006&4294967295,E=v+(g<<17&4294967295|g>>>15),g=_+(m^E&(v^m))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^v&(_^E))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=v+(_^E&(m^_))+y[6]+3225465664&4294967295,v=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(v^m))+y[11]+643717713&4294967295,E=v+(g<<14&4294967295|g>>>18),g=_+(v^m&(E^v))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^v&(_^E))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=v+(_^E&(m^_))+y[10]+38016083&4294967295,v=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(v^m))+y[15]+3634488961&4294967295,E=v+(g<<14&4294967295|g>>>18),g=_+(v^m&(E^v))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^v&(_^E))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=v+(_^E&(m^_))+y[14]+3275163606&4294967295,v=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(v^m))+y[3]+4107603335&4294967295,E=v+(g<<14&4294967295|g>>>18),g=_+(v^m&(E^v))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^v&(_^E))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=v+(_^E&(m^_))+y[2]+4243563512&4294967295,v=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(v^m))+y[7]+1735328473&4294967295,E=v+(g<<14&4294967295|g>>>18),g=_+(v^m&(E^v))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^v)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=v+(m^_^E)+y[8]+2272392833&4294967295,v=m+(g<<11&4294967295|g>>>21),g=E+(v^m^_)+y[11]+1839030562&4294967295,E=v+(g<<16&4294967295|g>>>16),g=_+(E^v^m)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^v)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=v+(m^_^E)+y[4]+1272893353&4294967295,v=m+(g<<11&4294967295|g>>>21),g=E+(v^m^_)+y[7]+4139469664&4294967295,E=v+(g<<16&4294967295|g>>>16),g=_+(E^v^m)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^v)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=v+(m^_^E)+y[0]+3936430074&4294967295,v=m+(g<<11&4294967295|g>>>21),g=E+(v^m^_)+y[3]+3572445317&4294967295,E=v+(g<<16&4294967295|g>>>16),g=_+(E^v^m)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^v)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=v+(m^_^E)+y[12]+3873151461&4294967295,v=m+(g<<11&4294967295|g>>>21),g=E+(v^m^_)+y[15]+530742520&4294967295,E=v+(g<<16&4294967295|g>>>16),g=_+(E^v^m)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~v))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=v+(_^(m|~E))+y[7]+1126891415&4294967295,v=m+(g<<10&4294967295|g>>>22),g=E+(m^(v|~_))+y[14]+2878612391&4294967295,E=v+(g<<15&4294967295|g>>>17),g=_+(v^(E|~m))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~v))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=v+(_^(m|~E))+y[3]+2399980690&4294967295,v=m+(g<<10&4294967295|g>>>22),g=E+(m^(v|~_))+y[10]+4293915773&4294967295,E=v+(g<<15&4294967295|g>>>17),g=_+(v^(E|~m))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~v))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=v+(_^(m|~E))+y[15]+4264355552&4294967295,v=m+(g<<10&4294967295|g>>>22),g=E+(m^(v|~_))+y[6]+2734768916&4294967295,E=v+(g<<15&4294967295|g>>>17),g=_+(v^(E|~m))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~v))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=v+(_^(m|~E))+y[11]+3174756917&4294967295,v=m+(g<<10&4294967295|g>>>22),g=E+(m^(v|~_))+y[2]+718787259&4294967295,E=v+(g<<15&4294967295|g>>>17),g=_+(v^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+v&4294967295}n.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,v=0;v<m;){if(E==0)for(;v<=_;)i(this,T,v),v+=this.blockSize;if(typeof T=="string"){for(;v<m;)if(y[E++]=T.charCodeAt(v++),E==this.blockSize){i(this,y),E=0;break}}else for(;v<m;)if(y[E++]=T[v++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=h;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function u(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var v=T[E]|0;y&&v==m||(_[E]=v,y=!1)}this.g=_}var h={};function c(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return A;if(0>T)return b(d(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new u(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return b(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=A,E=0;E<T.length;E+=8){var v=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+v),m);8>v?(v=d(Math.pow(m,v)),y=y.j(v).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var A=c(0),P=c(1),C=c(16777216);r=u.prototype,r.m=function(){if(L(this))return-b(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(L(this))return"-"+b(this).toString(T);for(var m=d(Math.pow(T,6)),_=this,y="";;){var E=rt(_,m).g;_=G(_,E.j(m));var v=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,N(_))return v+y;for(;6>v.length;)v="0"+v;y=v+y}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function L(T){return T.h==-1}r.l=function(T){return T=G(this,T),L(T)?-1:N(T)?0:1};function b(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new u(_,~T.h).add(P)}r.abs=function(){return L(this)?b(this):this},r.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var v=y+(this.i(E)&65535)+(T.i(E)&65535),g=(v>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=g>>>16,v&=65535,g&=65535,_[E]=g<<16|v}return new u(_,_[_.length-1]&-2147483648?-1:0)};function G(T,m){return T.add(b(m))}r.j=function(T){if(N(this)||N(T))return A;if(L(this))return L(T)?b(this).j(b(T)):b(b(this).j(T));if(L(T))return b(this.j(b(T)));if(0>this.l(C)&&0>T.l(C))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var v=this.i(y)>>>16,g=this.i(y)&65535,Dt=T.i(E)>>>16,Ce=T.i(E)&65535;_[2*y+2*E]+=g*Ce,K(_,2*y+2*E),_[2*y+2*E+1]+=v*Ce,K(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Dt,K(_,2*y+2*E+1),_[2*y+2*E+2]+=v*Dt,K(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function K(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function $(T,m){this.g=T,this.h=m}function rt(T,m){if(N(m))throw Error("division by zero");if(N(T))return new $(A,A);if(L(T))return m=rt(b(T),m),new $(b(m.g),b(m.h));if(L(m))return m=rt(T,b(m)),new $(b(m.g),m.h);if(30<T.g.length){if(L(T)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var _=P,y=m;0>=y.l(T);)_=St(_),y=St(y);var E=it(_,1),v=it(y,1);for(y=it(y,2),_=it(_,2);!N(y);){var g=v.add(y);0>=g.l(T)&&(E=E.add(_),v=g),y=it(y,1),_=it(_,1)}return m=G(T,E.j(m)),new $(E,m)}for(E=A;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),v=d(_),g=v.j(m);L(g)||0<g.l(T);)_-=y,v=d(_),g=v.j(m);N(v)&&(v=P),E=E.add(v),T=G(T,g)}return new $(E,T)}r.A=function(T){return rt(this,T).h},r.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new u(_,this.h&T.h)},r.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new u(_,this.h|T.h)},r.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new u(_,this.h^T.h)};function St(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(_,T.h)}function it(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],v=0;v<y;v++)E[v]=0<m?T.i(v+_)>>>m|T.i(v+_+1)<<32-m:T.i(v+_);return new u(E,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,vo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=p,te=u}).apply(typeof bi<"u"?bi:typeof self<"u"?self:typeof window<"u"?window:{});var Sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ao,Ke,wo,Ln,qr,Ro,Po,Vo;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sn=="object"&&Sn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in l))break t;l=l[I]}s=s[s.length-1],f=l[s],a=a(f),a!=f&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,f=!1,I={next:function(){if(!f&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function c(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function p(s,a,l){return s.call.apply(s.bind,arguments)}function A(s,a,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function P(s,a,l){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:A,P.apply(null,arguments)}function C(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function N(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,I,w){for(var S=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)S[Q-2]=arguments[Q];return a.prototype[I].apply(f,S)}}function L(s){const a=s.length;if(0<a){const l=Array(a);for(let f=0;f<a;f++)l[f]=s[f];return l}return[]}function b(s,a){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(c(f)){const I=s.length||0,w=f.length||0;s.length=I+w;for(let S=0;S<w;S++)s[I+S]=f[S]}else s.push(f)}}class G{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(s){return/^[\s\xa0]*$/.test(s)}function $(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var St=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function it(s,a,l){for(const f in s)a.call(l,s[f],f,s)}function T(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(l in f)s[l]=f[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function v(s){h.setTimeout(()=>{throw s},0)}function g(){var s=fr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Dt{constructor(){this.h=this.g=null}add(a,l){const f=Ce.get();f.set(a,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Ce=new G(()=>new za,s=>s.reset());class za{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,De=!1,fr=new Dt,Ds=()=>{const s=h.Promise.resolve(void 0);Se=()=>{s.then(Ga)}};var Ga=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){v(l)}var a=Ce;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}De=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Ka=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};h.addEventListener("test",l,a),h.removeEventListener("test",l,a)}catch{}return s}();function be(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(St){t:{try{rt(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:$a[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&be.aa.h.call(this)}}N(be,ht);var $a={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),Qa=0;function Wa(s,a,l,f,I){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!f,this.ha=I,this.key=++Qa,this.da=this.fa=!1}function cn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function fn(s){this.src=s,this.g={},this.h=0}fn.prototype.add=function(s,a,l,f,I){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var S=mr(s,a,f,I);return-1<S?(a=s[S],l||(a.fa=!1)):(a=new Wa(a,this.src,w,!!f,I),a.fa=l,s.push(a)),a};function dr(s,a){var l=a.type;if(l in s.g){var f=s.g[l],I=Array.prototype.indexOf.call(f,a,void 0),w;(w=0<=I)&&Array.prototype.splice.call(f,I,1),w&&(cn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function mr(s,a,l,f){for(var I=0;I<s.length;++I){var w=s[I];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==f)return I}return-1}var pr="closure_lm_"+(1e6*Math.random()|0),gr={};function bs(s,a,l,f,I){if(Array.isArray(a)){for(var w=0;w<a.length;w++)bs(s,a[w],l,f,I);return null}return l=xs(l),s&&s[hn]?s.K(a,l,d(f)?!!f.capture:!1,I):Ha(s,a,l,!1,f,I)}function Ha(s,a,l,f,I,w){if(!a)throw Error("Invalid event type");var S=d(I)?!!I.capture:!!I,Q=yr(s);if(Q||(s[pr]=Q=new fn(s)),l=Q.add(a,l,f,S,w),l.proxy)return l;if(f=Xa(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)Ka||(I=S),I===void 0&&(I=!1),s.addEventListener(a.toString(),f,I);else if(s.attachEvent)s.attachEvent(Ns(a.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Xa(){function s(l){return a.call(s.src,s.listener,l)}const a=Ya;return s}function ks(s,a,l,f,I){if(Array.isArray(a))for(var w=0;w<a.length;w++)ks(s,a[w],l,f,I);else f=d(f)?!!f.capture:!!f,l=xs(l),s&&s[hn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=mr(w,l,f,I),-1<l&&(cn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=yr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=mr(a,l,f,I)),(l=-1<s?a[s]:null)&&_r(l))}function _r(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[hn])dr(a.i,s);else{var l=s.type,f=s.proxy;a.removeEventListener?a.removeEventListener(l,f,s.capture):a.detachEvent?a.detachEvent(Ns(l),f):a.addListener&&a.removeListener&&a.removeListener(f),(l=yr(a))?(dr(l,s),l.h==0&&(l.src=null,a[pr]=null)):cn(s)}}}function Ns(s){return s in gr?gr[s]:gr[s]="on"+s}function Ya(s,a){if(s.da)s=!0;else{a=new be(a,this);var l=s.listener,f=s.ha||s.src;s.fa&&_r(s),s=l.call(f,a)}return s}function yr(s){return s=s[pr],s instanceof fn?s:null}var Er="__closure_events_fn_"+(1e9*Math.random()>>>0);function xs(s){return typeof s=="function"?s:(s[Er]||(s[Er]=function(a){return s.handleEvent(a)}),s[Er])}function ct(){Ot.call(this),this.i=new fn(this),this.M=this,this.F=null}N(ct,Ot),ct.prototype[hn]=!0,ct.prototype.removeEventListener=function(s,a,l,f){ks(this,s,a,l,f)};function _t(s,a){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var I=a;a=new ht(f,s),y(a,I)}if(I=!0,l)for(var w=l.length-1;0<=w;w--){var S=a.g=l[w];I=dn(S,f,!0,a)&&I}if(S=a.g=s,I=dn(S,f,!0,a)&&I,I=dn(S,f,!1,a)&&I,l)for(w=0;w<l.length;w++)S=a.g=l[w],I=dn(S,f,!1,a)&&I}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],f=0;f<l.length;f++)cn(l[f]);delete s.g[a],s.h--}}this.F=null},ct.prototype.K=function(s,a,l,f){return this.i.add(String(s),a,!1,l,f)},ct.prototype.L=function(s,a,l,f){return this.i.add(String(s),a,!0,l,f)};function dn(s,a,l,f){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,w=0;w<a.length;++w){var S=a[w];if(S&&!S.da&&S.capture==l){var Q=S.listener,ot=S.ha||S.src;S.fa&&dr(s.i,S),I=Q.call(ot,f)!==!1&&I}}return I&&!f.defaultPrevented}function Ls(s,a,l){if(typeof s=="function")l&&(s=P(s,l));else if(s&&typeof s.handleEvent=="function")s=P(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(s,a||0)}function Ms(s){s.g=Ls(()=>{s.g=null,s.i&&(s.i=!1,Ms(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Ja extends Ot{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ms(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(s){Ot.call(this),this.h=s,this.g={}}N(ke,Ot);var Os=[];function Fs(s){it(s.g,function(a,l){this.g.hasOwnProperty(l)&&_r(a)},s),s.g={}}ke.prototype.N=function(){ke.aa.N.call(this),Fs(this)},ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tr=h.JSON.stringify,Za=h.JSON.parse,tu=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function Ir(){}Ir.prototype.h=null;function Us(s){return s.h||(s.h=s.i())}function qs(){}var Ne={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vr(){ht.call(this,"d")}N(vr,ht);function Ar(){ht.call(this,"c")}N(Ar,ht);var Ht={},Bs=null;function mn(){return Bs=Bs||new ct}Ht.La="serverreachability";function js(s){ht.call(this,Ht.La,s)}N(js,ht);function xe(s){const a=mn();_t(a,new js(a))}Ht.STAT_EVENT="statevent";function zs(s,a){ht.call(this,Ht.STAT_EVENT,s),this.stat=a}N(zs,ht);function yt(s){const a=mn();_t(a,new zs(a,s))}Ht.Ma="timingevent";function Gs(s,a){ht.call(this,Ht.Ma,s),this.size=a}N(Gs,ht);function Le(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},a)}function Me(){this.g=!0}Me.prototype.xa=function(){this.g=!1};function eu(s,a,l,f,I,w){s.info(function(){if(s.g)if(w)for(var S="",Q=w.split("&"),ot=0;ot<Q.length;ot++){var j=Q[ot].split("=");if(1<j.length){var ft=j[0];j=j[1];var dt=ft.split("_");S=2<=dt.length&&dt[1]=="type"?S+(ft+"="+j+"&"):S+(ft+"=redacted&")}}else S=null;else S=w;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+a+`
`+l+`
`+S})}function nu(s,a,l,f,I,w,S){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+a+`
`+l+`
`+w+" "+S})}function oe(s,a,l,f){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+su(s,l)+(f?" "+f:"")})}function ru(s,a){s.info(function(){return"TIMEOUT: "+a})}Me.prototype.info=function(){};function su(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var w=I[0];if(w!="noop"&&w!="stop"&&w!="close")for(var S=1;S<I.length;S++)I[S]=""}}}}return Tr(l)}catch{return a}}var pn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ks={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wr;function gn(){}N(gn,Ir),gn.prototype.g=function(){return new XMLHttpRequest},gn.prototype.i=function(){return{}},wr=new gn;function Ft(s,a,l,f){this.j=s,this.i=a,this.l=l,this.R=f||1,this.U=new ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $s}function $s(){this.i=null,this.g="",this.h=!1}var Qs={},Rr={};function Pr(s,a,l){s.L=1,s.v=Tn(bt(a)),s.m=l,s.P=!0,Ws(s,null)}function Ws(s,a){s.F=Date.now(),_n(s),s.A=bt(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ui(l.i,"t",f),s.C=0,l=s.j.J,s.h=new $s,s.g=Pi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new Ja(P(s.Y,s,s.g),s.O)),a=s.U,l=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(Os[0]=I.toString()),I=Os);for(var w=0;w<I.length;w++){var S=bs(l,I[w],f||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),xe(),eu(s.i,s.u,s.A,s.l,s.R,s.m)}Ft.prototype.ca=function(s){s=s.target;const a=this.M;a&&kt(s)==3?a.j():this.Y(s)},Ft.prototype.Y=function(s){try{if(s==this.g)t:{const dt=kt(this.g);var a=this.g.Ba();const le=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||pi(this.g)))){this.J||dt!=4||a==7||(a==8||0>=le?xe(3):xe(2)),Vr(this);var l=this.g.Z();this.X=l;e:if(Hs(this)){var f=pi(this.g);s="";var I=f.length,w=kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xt(this),Oe(this);var S="";break e}this.h.i=new h.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(f[a],{stream:!(w&&a==I-1)});f.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,nu(this.i,this.u,this.A,this.l,this.R,dt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ot=this.g;if((Q=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Q)){var j=Q;break e}}j=null}if(l=j)oe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cr(this,l);else{this.o=!1,this.s=3,yt(12),Xt(this),Oe(this);break t}}if(this.P){l=!0;let At;for(;!this.J&&this.C<S.length;)if(At=iu(this,S),At==Rr){dt==4&&(this.s=4,yt(14),l=!1),oe(this.i,this.l,null,"[Incomplete Response]");break}else if(At==Qs){this.s=4,yt(15),oe(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else oe(this.i,this.l,At,null),Cr(this,At);if(Hs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||S.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)oe(this.i,this.l,S,"[Invalid Chunked Response]"),Xt(this),Oe(this);else if(0<S.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),xr(ft),ft.M=!0,yt(11))}}else oe(this.i,this.l,S,null),Cr(this,S);dt==4&&Xt(this),this.o&&!this.J&&(dt==4?vi(this.j,this):(this.o=!1,_n(this)))}else vu(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Xt(this),Oe(this)}}}catch{}finally{}};function Hs(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function iu(s,a){var l=s.C,f=a.indexOf(`
`,l);return f==-1?Rr:(l=Number(a.substring(l,f)),isNaN(l)?Qs:(f+=1,f+l>a.length?Rr:(a=a.slice(f,f+l),s.C=f+l,a)))}Ft.prototype.cancel=function(){this.J=!0,Xt(this)};function _n(s){s.S=Date.now()+s.I,Xs(s,s.I)}function Xs(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Le(P(s.ba,s),a)}function Vr(s){s.B&&(h.clearTimeout(s.B),s.B=null)}Ft.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(ru(this.i,this.A),this.L!=2&&(xe(),yt(17)),Xt(this),this.s=2,Oe(this)):Xs(this,this.S-s)};function Oe(s){s.j.G==0||s.J||vi(s.j,s)}function Xt(s){Vr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Fs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Cr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Sr(l.h,s))){if(!s.K&&Sr(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Pn(l),wn(l);else break t;Nr(l),yt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Le(P(l.Za,l),6e3));if(1>=Zs(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Jt(l,11)}else if((s.K||l.g==s)&&Pn(l),!K(a))for(I=l.Da.g.parse(a),a=0;a<I.length;a++){let j=I[a];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const ft=j[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const dt=j[4];dt!=null&&(l.Aa=dt,l.j.info("SVER="+l.Aa));const le=j[5];le!=null&&typeof le=="number"&&0<le&&(f=1.5*le,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const At=s.g;if(At){const Cn=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cn){var w=f.h;w.g||Cn.indexOf("spdy")==-1&&Cn.indexOf("quic")==-1&&Cn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Dr(w,w.h),w.h=null))}if(f.D){const Lr=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Lr&&(f.ya=Lr,W(f.I,f.D,Lr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var S=s;if(f.qa=Ri(f,f.J?f.ia:null,f.W),S.K){ti(f.h,S);var Q=S,ot=f.L;ot&&(Q.I=ot),Q.B&&(Vr(Q),_n(Q)),f.g=S}else Ti(f);0<l.i.length&&Rn(l)}else j[0]!="stop"&&j[0]!="close"||Jt(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Jt(l,7):kr(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}xe(4)}catch{}}var ou=class{constructor(s,a){this.g=s,this.map=a}};function Ys(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Js(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Zs(s){return s.h?1:s.g?s.g.size:0}function Sr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Dr(s,a){s.g?s.g.add(a):s.h=a}function ti(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Ys.prototype.cancel=function(){if(this.i=ei(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ei(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return L(s.i)}function au(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(c(s)){for(var a=[],l=s.length,f=0;f<l;f++)a.push(s[f]);return a}a=[],l=0;for(f in s)a[l++]=s[f];return a}function uu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(c(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const f in s)a[l++]=f;return a}}}function ni(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(c(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=uu(s),f=au(s),I=f.length,w=0;w<I;w++)a.call(void 0,f[w],l&&l[w],s)}var ri=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),I=null;if(0<=f){var w=s[l].substring(0,f);I=s[l].substring(f+1)}else w=s[l];a(w,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Yt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Yt){this.h=s.h,yn(this,s.j),this.o=s.o,this.g=s.g,En(this,s.s),this.l=s.l;var a=s.i,l=new qe;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),si(this,l),this.m=s.m}else s&&(a=String(s).match(ri))?(this.h=!1,yn(this,a[1]||"",!0),this.o=Fe(a[2]||""),this.g=Fe(a[3]||"",!0),En(this,a[4]),this.l=Fe(a[5]||"",!0),si(this,a[6]||"",!0),this.m=Fe(a[7]||"")):(this.h=!1,this.i=new qe(null,this.h))}Yt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Ue(a,ii,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ue(a,ii,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Ue(l,l.charAt(0)=="/"?fu:cu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Ue(l,mu)),s.join("")};function bt(s){return new Yt(s)}function yn(s,a,l){s.j=l?Fe(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function En(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function si(s,a,l){a instanceof qe?(s.i=a,pu(s.i,s.h)):(l||(a=Ue(a,du)),s.i=new qe(a,s.h))}function W(s,a,l){s.i.set(a,l)}function Tn(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Fe(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ue(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,hu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function hu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ii=/[#\/\?@]/g,cu=/[#\?:]/g,fu=/[#\?]/g,du=/[#\?@]/g,mu=/#/g;function qe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Ut(s){s.g||(s.g=new Map,s.h=0,s.i&&lu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=qe.prototype,r.add=function(s,a){Ut(this),this.i=null,s=ae(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function oi(s,a){Ut(s),a=ae(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function ai(s,a){return Ut(s),a=ae(s,a),s.g.has(a)}r.forEach=function(s,a){Ut(this),this.g.forEach(function(l,f){l.forEach(function(I){s.call(a,I,f,this)},this)},this)},r.na=function(){Ut(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let f=0;f<a.length;f++){const I=s[f];for(let w=0;w<I.length;w++)l.push(a[f])}return l},r.V=function(s){Ut(this);let a=[];if(typeof s=="string")ai(this,s)&&(a=a.concat(this.g.get(ae(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return Ut(this),this.i=null,s=ae(this,s),ai(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function ui(s,a,l){oi(s,a),0<l.length&&(s.i=null,s.g.set(ae(s,a),L(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var f=a[l];const w=encodeURIComponent(String(f)),S=this.V(f);for(f=0;f<S.length;f++){var I=w;S[f]!==""&&(I+="="+encodeURIComponent(String(S[f]))),s.push(I)}}return this.i=s.join("&")};function ae(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function pu(s,a){a&&!s.j&&(Ut(s),s.i=null,s.g.forEach(function(l,f){var I=f.toLowerCase();f!=I&&(oi(this,f),ui(this,I,l))},s)),s.j=a}function gu(s,a){const l=new Me;if(h.Image){const f=new Image;f.onload=C(qt,l,"TestLoadImage: loaded",!0,a,f),f.onerror=C(qt,l,"TestLoadImage: error",!1,a,f),f.onabort=C(qt,l,"TestLoadImage: abort",!1,a,f),f.ontimeout=C(qt,l,"TestLoadImage: timeout",!1,a,f),h.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else a(!1)}function _u(s,a){const l=new Me,f=new AbortController,I=setTimeout(()=>{f.abort(),qt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:f.signal}).then(w=>{clearTimeout(I),w.ok?qt(l,"TestPingServer: ok",!0,a):qt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),qt(l,"TestPingServer: error",!1,a)})}function qt(s,a,l,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(l)}catch{}}function yu(){this.g=new tu}function Eu(s,a,l){const f=l||"";try{ni(s,function(I,w){let S=I;d(I)&&(S=Tr(I)),a.push(f+w+"="+encodeURIComponent(S))})}catch(I){throw a.push(f+"type="+encodeURIComponent("_badmap")),I}}function In(s){this.l=s.Ub||null,this.j=s.eb||!1}N(In,Ir),In.prototype.g=function(){return new vn(this.l,this.j)},In.prototype.i=function(s){return function(){return s}}({});function vn(s,a){ct.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(vn,ct),r=vn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,je(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Be(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;li(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function li(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Be(this):je(this),this.readyState==3&&li(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Be(this))},r.Qa=function(s){this.g&&(this.response=s,Be(this))},r.ga=function(){this.g&&Be(this)};function Be(s){s.readyState=4,s.l=null,s.j=null,s.v=null,je(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function je(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function hi(s){let a="";return it(s,function(l,f){a+=f,a+=":",a+=l,a+=`\r
`}),a}function br(s,a,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=hi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):W(s,a,l))}function Y(s){ct.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Y,ct);var Tu=/^https?$/i,Iu=["POST","PUT"];r=Y.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wr.g(),this.v=this.o?Us(this.o):Us(wr),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){ci(this,w);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)l.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const w of f.keys())l.set(w,f.get(w));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),I=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Iu,a,void 0))||f||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of l)this.g.setRequestHeader(w,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mi(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){ci(this,w)}};function ci(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,fi(s),An(s)}function fi(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),An(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),An(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?di(this):this.bb())},r.bb=function(){di(this)};function di(s){if(s.h&&typeof u<"u"&&(!s.v[1]||kt(s)!=4||s.Z()!=2)){if(s.u&&kt(s)==4)Ls(s.Ea,0,s);else if(_t(s,"readystatechange"),kt(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var f;if(f=S===0){var I=String(s.D).match(ri)[1]||null;!I&&h.self&&h.self.location&&(I=h.self.location.protocol.slice(0,-1)),f=!Tu.test(I?I.toLowerCase():"")}l=f}if(l)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var w=2<kt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",fi(s)}}finally{An(s)}}}}function An(s,a){if(s.g){mi(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||_t(s,"ready");try{l.onreadystatechange=f}catch{}}}function mi(s){s.I&&(h.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function kt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Za(a)}};function pi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function vu(s){const a={};s=(s.g&&2<=kt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(K(s[f]))continue;var l=E(s[f]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[I]||[];a[I]=w,w.push(l)}T(a,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ze(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function gi(s){this.Aa=0,this.i=[],this.j=new Me,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ze("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ze("baseRetryDelayMs",5e3,s),this.cb=ze("retryDelaySeedMs",1e4,s),this.Wa=ze("forwardChannelMaxRetries",2,s),this.wa=ze("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ys(s&&s.concurrentRequestLimit),this.Da=new yu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=gi.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,f){yt(0),this.W=s,this.H=a||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Ri(this,null,this.W),Rn(this)};function kr(s){if(_i(s),s.G==3){var a=s.U++,l=bt(s.I);if(W(l,"SID",s.K),W(l,"RID",a),W(l,"TYPE","terminate"),Ge(s,l),a=new Ft(s,s.j,a),a.L=2,a.v=Tn(bt(l)),l=!1,h.navigator&&h.navigator.sendBeacon)try{l=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&h.Image&&(new Image().src=a.v,l=!0),l||(a.g=Pi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),_n(a)}wi(s)}function wn(s){s.g&&(xr(s),s.g.cancel(),s.g=null)}function _i(s){wn(s),s.u&&(h.clearTimeout(s.u),s.u=null),Pn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function Rn(s){if(!Js(s.h)&&!s.s){s.s=!0;var a=s.Ga;Se||Ds(),De||(Se(),De=!0),fr.add(a,s),s.B=0}}function Au(s,a){return Zs(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Le(P(s.Ga,s,a),Ai(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Ft(this,this.j,s);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(I.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ei(this,I,a),l=bt(this.I),W(l,"RID",s),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),Ge(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(hi(w)))+"&"+a:this.m&&br(l,this.m,w)),Dr(this.h,I),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),I.T=!0,Pr(I,l,null)):Pr(I,l,a),this.G=2}}else this.G==3&&(s?yi(this,s):this.i.length==0||Js(this.h)||yi(this))};function yi(s,a){var l;a?l=a.l:l=s.U++;const f=bt(s.I);W(f,"SID",s.K),W(f,"RID",l),W(f,"AID",s.T),Ge(s,f),s.m&&s.o&&br(f,s.m,s.o),l=new Ft(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ei(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Dr(s.h,l),Pr(l,f,a)}function Ge(s,a){s.H&&it(s.H,function(l,f){W(a,f,l)}),s.l&&ni({},function(l,f){W(a,f,l)})}function Ei(s,a,l){l=Math.min(s.i.length,l);var f=s.l?P(s.l.Na,s.l,s):null;t:{var I=s.i;let w=-1;for(;;){const S=["count="+l];w==-1?0<l?(w=I[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let Q=!0;for(let ot=0;ot<l;ot++){let j=I[ot].g;const ft=I[ot].map;if(j-=w,0>j)w=Math.max(0,I[ot].g-100),Q=!1;else try{Eu(ft,S,"req"+j+"_")}catch{f&&f(ft)}}if(Q){f=S.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,f}function Ti(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Se||Ds(),De||(Se(),De=!0),fr.add(a,s),s.v=0}}function Nr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Le(P(s.Fa,s),Ai(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Ii(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Le(P(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),wn(this),Ii(this))};function xr(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function Ii(s){s.g=new Ft(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=bt(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),Ge(s,a),s.m&&s.o&&br(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Tn(bt(a)),l.m=null,l.P=!0,Ws(l,s)}r.Za=function(){this.C!=null&&(this.C=null,wn(this),Nr(this),yt(19))};function Pn(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function vi(s,a){var l=null;if(s.g==a){Pn(s),xr(s),s.g=null;var f=2}else if(Sr(s.h,a))l=a.D,ti(s.h,a),f=1;else return;if(s.G!=0){if(a.o)if(f==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;f=mn(),_t(f,new Gs(f,l)),Rn(s)}else Ti(s);else if(I=a.s,I==3||I==0&&0<a.X||!(f==1&&Au(s,a)||f==2&&Nr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),I){case 1:Jt(s,5);break;case 4:Jt(s,10);break;case 3:Jt(s,6);break;default:Jt(s,2)}}}function Ai(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function Jt(s,a){if(s.j.info("Error code "+a),a==2){var l=P(s.fb,s),f=s.Xa;const I=!f;f=new Yt(f||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||yn(f,"https"),Tn(f),I?gu(f.toString(),l):_u(f.toString(),l)}else yt(2);s.G=0,s.l&&s.l.sa(a),wi(s),_i(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function wi(s){if(s.G=0,s.ka=[],s.l){const a=ei(s.h);(a.length!=0||s.i.length!=0)&&(b(s.ka,a),b(s.ka,s.i),s.h.i.length=0,L(s.i),s.i.length=0),s.l.ra()}}function Ri(s,a,l){var f=l instanceof Yt?bt(l):new Yt(l);if(f.g!="")a&&(f.g=a+"."+f.g),En(f,f.s);else{var I=h.location;f=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var w=new Yt(null);f&&yn(w,f),a&&(w.g=a),I&&En(w,I),l&&(w.l=l),f=w}return l=s.D,a=s.ya,l&&a&&W(f,l,a),W(f,"VER",s.la),Ge(s,f),f}function Pi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Y(new In({eb:l})):new Y(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vi(){}r=Vi.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Vn(){}Vn.prototype.g=function(s,a){return new Tt(s,a)};function Tt(s,a){ct.call(this),this.g=new gi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!K(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ue(this)}N(Tt,ct),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){kr(this.g)},Tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Tr(s),s=l);a.i.push(new ou(a.Ya++,s)),a.G==3&&Rn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,kr(this.g),delete this.g,Tt.aa.N.call(this)};function Ci(s){vr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}N(Ci,vr);function Si(){Ar.call(this),this.status=1}N(Si,Ar);function ue(s){this.g=s}N(ue,Vi),ue.prototype.ua=function(){_t(this.g,"a")},ue.prototype.ta=function(s){_t(this.g,new Ci(s))},ue.prototype.sa=function(s){_t(this.g,new Si)},ue.prototype.ra=function(){_t(this.g,"b")},Vn.prototype.createWebChannel=Vn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Vo=function(){return new Vn},Po=function(){return mn()},Ro=Ht,qr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pn.NO_ERROR=0,pn.TIMEOUT=8,pn.HTTP_ERROR=6,Ln=pn,Ks.COMPLETE="complete",wo=Ks,qs.EventType=Ne,Ne.OPEN="a",Ne.CLOSE="b",Ne.ERROR="c",Ne.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ke=qs,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,Ao=Y}).apply(typeof Sn<"u"?Sn:typeof self<"u"?self:typeof window<"u"?window:{});const ki="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ae="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new wu("@firebase/firestore");function he(){return ee.logLevel}function D(r,...t){if(ee.logLevel<=Nt.DEBUG){const e=t.map(es);ee.debug(`Firestore (${Ae}): ${r}`,...e)}}function Lt(r,...t){if(ee.logLevel<=Nt.ERROR){const e=t.map(es);ee.error(`Firestore (${Ae}): ${r}`,...e)}}function ge(r,...t){if(ee.logLevel<=Nt.WARN){const e=t.map(es);ee.warn(`Firestore (${Ae}): ${r}`,...e)}}function es(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r="Unexpected state"){const t=`FIRESTORE (${Ae}) INTERNAL ASSERTION FAILED: `+r;throw Lt(t),new Error(t)}function z(r,t){r||M()}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Vu{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Mu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class Ou{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Fu{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let o=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new jt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const c=o;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},h=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(c=>h(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?h(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new jt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string"),new Co(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string"),new pt(t)}}class Uu{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class qu{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Uu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ju{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){z(this.o===void 0);const n=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(z(typeof e.token=="string"),this.R=e.token,new Bu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=zu(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function _e(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new et(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static fromTimestamp(t){return new O(t)}static min(){return new O(new et(0,0))}static max(){return new O(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(),n===void 0?n=t.length-e:n>t.length-e&&M(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Je.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Je?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends Je{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new H(e)}static emptyPath(){return new H([])}}const Gu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Je{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return Gu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new k(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new k(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new k(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,i+=2}else h==="`"?(u=!u,i++):h!=="."||u?(n+=h,i++):(o(),i++)}if(o(),u)throw new k(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(H.fromString(t))}static fromName(t){return new x(H.fromString(t).popFirst(5))}static empty(){return new x(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new H(t.slice()))}}function Ku(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=O.fromTimestamp(n===1e9?new et(e+1,0):new et(e,n));return new Gt(i,x.empty(),t)}function $u(r){return new Gt(r.readTime,r.key,-1)}class Gt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Gt(O.min(),x.empty(),-1)}static max(){return new Gt(O.max(),x.empty(),-1)}}function Qu(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Wu)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,n)=>{e(t)})}static reject(t){return new R((e,n)=>{n(t)})}static waitFor(t){return new R((e,n)=>{let i=0,o=0,u=!1;t.forEach(h=>{++i,h.next(()=>{++o,u&&o===i&&e()},c=>n(c))}),u=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const n of t)e=e.next(i=>i?R.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new R((n,i)=>{const o=t.length,u=new Array(o);let h=0;for(let c=0;c<o;c++){const d=c;e(t[d]).next(p=>{u[d]=p,++h,h===o&&n(u)},p=>i(p))}})}static doWhile(t,e){return new R((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Xu(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Re(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Jn.oe=-1;function Zn(r){return r==null}function Bn(r){return r===0&&1/r==-1/0}function Yu(r){return typeof r=="number"&&Number.isInteger(r)&&!Bn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Ni(t)),t=Zu(r.get(e),t);return Ni(t)}function Zu(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function Ni(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ne(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Do(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dn(this.root,t,this.comparator,!0)}}class Dn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new at(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,i,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Li(this.data.getIterator())}getIteratorFrom(t){return new Li(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new nt(this.comparator);return e.data=t,e}}class Li{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new wt([])}unionWith(t){let e=new nt(ut.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _e(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new bo("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const tl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(r){if(z(!!r),typeof r=="string"){let t=0;const e=tl.exec(r);if(z(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function $t(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function tr(r){const t=r.mapValue.fields.__previous_value__;return ns(t)?tr(t):t}function Ze(r){const t=Kt(r.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t,e,n,i,o,u,h,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=c,this.useFetchStreams=d}}class tn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new tn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof tn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ns(r)?4:rl(r)?9007199254740991:nl(r)?10:11:M()}function Ct(r,t){if(r===t)return!0;const e=Qt(r);if(e!==Qt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Ze(r).isEqual(Ze(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Kt(i.timestampValue),h=Kt(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return $t(i.bytesValue).isEqual($t(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=J(i.doubleValue),h=J(o.doubleValue);return u===h?Bn(u)===Bn(h):isNaN(u)&&isNaN(h)}return!1}(r,t);case 9:return _e(r.arrayValue.values||[],t.arrayValue.values||[],Ct);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},h=o.mapValue.fields||{};if(xi(u)!==xi(h))return!1;for(const c in u)if(u.hasOwnProperty(c)&&(h[c]===void 0||!Ct(u[c],h[c])))return!1;return!0}(r,t);default:return M()}}function en(r,t){return(r.values||[]).find(e=>Ct(e,t))!==void 0}function ye(r,t){if(r===t)return 0;const e=Qt(r),n=Qt(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return function(o,u){const h=J(o.integerValue||o.doubleValue),c=J(u.integerValue||u.doubleValue);return h<c?-1:h>c?1:h===c?0:isNaN(h)?isNaN(c)?0:-1:1}(r,t);case 3:return Mi(r.timestampValue,t.timestampValue);case 4:return Mi(Ze(r),Ze(t));case 5:return q(r.stringValue,t.stringValue);case 6:return function(o,u){const h=$t(o),c=$t(u);return h.compareTo(c)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const h=o.split("/"),c=u.split("/");for(let d=0;d<h.length&&d<c.length;d++){const p=q(h[d],c[d]);if(p!==0)return p}return q(h.length,c.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const h=q(J(o.latitude),J(u.latitude));return h!==0?h:q(J(o.longitude),J(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Oi(r.arrayValue,t.arrayValue);case 10:return function(o,u){var h,c,d,p;const A=o.fields||{},P=u.fields||{},C=(h=A.value)===null||h===void 0?void 0:h.arrayValue,N=(c=P.value)===null||c===void 0?void 0:c.arrayValue,L=q(((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0,((p=N==null?void 0:N.values)===null||p===void 0?void 0:p.length)||0);return L!==0?L:Oi(C,N)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===bn.mapValue&&u===bn.mapValue)return 0;if(o===bn.mapValue)return 1;if(u===bn.mapValue)return-1;const h=o.fields||{},c=Object.keys(h),d=u.fields||{},p=Object.keys(d);c.sort(),p.sort();for(let A=0;A<c.length&&A<p.length;++A){const P=q(c[A],p[A]);if(P!==0)return P;const C=ye(h[c[A]],d[p[A]]);if(C!==0)return C}return q(c.length,p.length)}(r.mapValue,t.mapValue);default:throw M()}}function Mi(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=Kt(r),n=Kt(t),i=q(e.seconds,n.seconds);return i!==0?i:q(e.nanos,n.nanos)}function Oi(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=ye(e[i],n[i]);if(o)return o}return q(e.length,n.length)}function Ee(r){return Br(r)}function Br(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Kt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return $t(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return x.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Br(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${Br(e.fields[u])}`;return i+"}"}(r.mapValue):M()}function Mn(r){switch(Qt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=tr(r);return t?16+Mn(t):16;case 5:return 2*r.stringValue.length;case 6:return $t(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Mn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return ne(n.fields,(o,u)=>{i+=o.length+Mn(u)}),i}(r.mapValue);default:throw M()}}function Fi(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function jr(r){return!!r&&"integerValue"in r}function rs(r){return!!r&&"arrayValue"in r}function Ui(r){return!!r&&"nullValue"in r}function qi(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function On(r){return!!r&&"mapValue"in r}function nl(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function We(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return ne(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=We(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=We(r.arrayValue.values[e]);return t}return Object.assign({},r)}function rl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!On(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=We(e)}setAll(t){let e=ut.emptyPath(),n={},i=[];t.forEach((u,h)=>{if(!e.isImmediateParentOf(h)){const c=this.getFieldsMap(e);this.applyChanges(c,n,i),n={},i=[],e=h.popLast()}u?n[h.lastSegment()]=We(u):i.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());On(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ct(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];On(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ne(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new It(We(this.value))}}function ko(r){const t=[];return ne(r.fields,(e,n)=>{const i=new ut([e]);if(On(n)){const o=ko(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,n,i,o,u,h){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new gt(t,0,O.min(),O.min(),O.min(),It.empty(),0)}static newFoundDocument(t,e,n,i){return new gt(t,1,e,O.min(),n,i,0)}static newNoDocument(t,e){return new gt(t,2,e,O.min(),O.min(),It.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,O.min(),O.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e){this.position=t,this.inclusive=e}}function Bi(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=x.comparator(x.fromName(u.referenceValue),e.key):n=ye(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ji(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ct(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e="asc"){this.field=t,this.dir=e}}function sl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{}class tt extends No{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new ol(t,e,n):e==="array-contains"?new ll(t,n):e==="in"?new hl(t,n):e==="not-in"?new cl(t,n):e==="array-contains-any"?new fl(t,n):new tt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new al(t,n):new ul(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ye(e,this.value)):e!==null&&Qt(this.value)===Qt(e)&&this.matchesComparison(ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends No{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Rt(t,e)}matches(t){return xo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function xo(r){return r.op==="and"}function Lo(r){return il(r)&&xo(r)}function il(r){for(const t of r.filters)if(t instanceof Rt)return!1;return!0}function zr(r){if(r instanceof tt)return r.field.canonicalString()+r.op.toString()+Ee(r.value);if(Lo(r))return r.filters.map(t=>zr(t)).join(",");{const t=r.filters.map(e=>zr(e)).join(",");return`${r.op}(${t})`}}function Mo(r,t){return r instanceof tt?function(n,i){return i instanceof tt&&n.op===i.op&&n.field.isEqual(i.field)&&Ct(n.value,i.value)}(r,t):r instanceof Rt?function(n,i){return i instanceof Rt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,h)=>o&&Mo(u,i.filters[h]),!0):!1}(r,t):void M()}function Oo(r){return r instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ee(e.value)}`}(r):r instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Oo).join(" ,")+"}"}(r):"Filter"}class ol extends tt{constructor(t,e,n){super(t,e,n),this.key=x.fromName(n.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class al extends tt{constructor(t,e){super(t,"in",e),this.keys=Fo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ul extends tt{constructor(t,e){super(t,"not-in",e),this.keys=Fo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Fo(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>x.fromName(n.referenceValue))}class ll extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return rs(e)&&en(e.arrayValue,this.value)}}class hl extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&en(this.value.arrayValue,e)}}class cl extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(en(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!en(this.value.arrayValue,e)}}class fl extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!rs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>en(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,e=null,n=[],i=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=h,this.ue=null}}function zi(r,t=null,e=[],n=[],i=null,o=null,u=null){return new dl(r,t,e,n,i,o,u)}function ss(r){const t=F(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>zr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Zn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ee(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ee(n)).join(",")),t.ue=e}return t.ue}function is(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!sl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Mo(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ji(r.startAt,t.startAt)&&ji(r.endAt,t.endAt)}function Gr(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e=null,n=[],i=[],o=null,u="F",h=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ml(r,t,e,n,i,o,u,h){return new sn(r,t,e,n,i,o,u,h)}function Uo(r){return new sn(r)}function Gi(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function qo(r){return r.collectionGroup!==null}function He(r){const t=F(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new nt(ut.comparator);return u.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(h=h.add(d.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new zn(o,n))}),e.has(ut.keyField().canonicalString())||t.ce.push(new zn(ut.keyField(),n))}return t.ce}function Pt(r){const t=F(r);return t.le||(t.le=pl(t,He(r))),t.le}function pl(r,t){if(r.limitType==="F")return zi(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new zn(i.field,o)});const e=r.endAt?new jn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new jn(r.startAt.position,r.startAt.inclusive):null;return zi(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Kr(r,t){const e=r.filters.concat([t]);return new sn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function $r(r,t,e){return new sn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function er(r,t){return is(Pt(r),Pt(t))&&r.limitType===t.limitType}function Bo(r){return`${ss(Pt(r))}|lt:${r.limitType}`}function ce(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Oo(i)).join(", ")}]`),Zn(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ee(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ee(i)).join(",")),`Target(${n})`}(Pt(r))}; limitType=${r.limitType})`}function nr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):x.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of He(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,h,c){const d=Bi(u,h,c);return u.inclusive?d<=0:d<0}(n.startAt,He(n),i)||n.endAt&&!function(u,h,c){const d=Bi(u,h,c);return u.inclusive?d>=0:d>0}(n.endAt,He(n),i))}(r,t)}function gl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function jo(r){return(t,e)=>{let n=!1;for(const i of He(r)){const o=_l(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function _l(r,t,e){const n=r.field.isKeyField()?x.comparator(t.key,e.key):function(o,u,h){const c=u.data.field(o),d=h.data.field(o);return c!==null&&d!==null?ye(c,d):M()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ne(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Do(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new X(x.comparator);function Mt(){return yl}const zo=new X(x.comparator);function $e(...r){let t=zo;for(const e of r)t=t.insert(e.key,e);return t}function Go(r){let t=zo;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Zt(){return Xe()}function Ko(){return Xe()}function Xe(){return new re(r=>r.toString(),(r,t)=>r.isEqual(t))}const El=new X(x.comparator),Tl=new nt(x.comparator);function U(...r){let t=Tl;for(const e of r)t=t.add(e);return t}const Il=new nt(q);function vl(){return Il}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bn(t)?"-0":t}}function $o(r){return{integerValue:""+r}}function Al(r,t){return Yu(t)?$o(t):os(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this._=void 0}}function wl(r,t,e){return r instanceof Gn?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ns(o)&&(o=tr(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof nn?Wo(r,t):r instanceof rn?Ho(r,t):function(i,o){const u=Qo(i,o),h=Ki(u)+Ki(i.Pe);return jr(u)&&jr(i.Pe)?$o(h):os(i.serializer,h)}(r,t)}function Rl(r,t,e){return r instanceof nn?Wo(r,t):r instanceof rn?Ho(r,t):e}function Qo(r,t){return r instanceof Kn?function(n){return jr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Gn extends rr{}class nn extends rr{constructor(t){super(),this.elements=t}}function Wo(r,t){const e=Xo(t);for(const n of r.elements)e.some(i=>Ct(i,n))||e.push(n);return{arrayValue:{values:e}}}class rn extends rr{constructor(t){super(),this.elements=t}}function Ho(r,t){let e=Xo(t);for(const n of r.elements)e=e.filter(i=>!Ct(i,n));return{arrayValue:{values:e}}}class Kn extends rr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ki(r){return J(r.integerValue||r.doubleValue)}function Xo(r){return rs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Pl(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof nn&&i instanceof nn||n instanceof rn&&i instanceof rn?_e(n.elements,i.elements,Ct):n instanceof Kn&&i instanceof Kn?Ct(n.Pe,i.Pe):n instanceof Gn&&i instanceof Gn}(r.transform,t.transform)}class Vl{constructor(t,e){this.version=t,this.transformResults=e}}class xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xt}static exists(t){return new xt(void 0,t)}static updateTime(t){return new xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Fn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class sr{}function Yo(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Zo(r.key,xt.none()):new on(r.key,r.data,xt.none());{const e=r.data,n=It.empty();let i=new nt(ut.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new se(r.key,n,new wt(i.toArray()),xt.none())}}function Cl(r,t,e){r instanceof on?function(i,o,u){const h=i.value.clone(),c=Qi(i.fieldTransforms,o,u.transformResults);h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):r instanceof se?function(i,o,u){if(!Fn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const h=Qi(i.fieldTransforms,o,u.transformResults),c=o.data;c.setAll(Jo(i)),c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Ye(r,t,e,n){return r instanceof on?function(o,u,h,c){if(!Fn(o.precondition,u))return h;const d=o.value.clone(),p=Wi(o.fieldTransforms,c,u);return d.setAll(p),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof se?function(o,u,h,c){if(!Fn(o.precondition,u))return h;const d=Wi(o.fieldTransforms,c,u),p=u.data;return p.setAll(Jo(o)),p.setAll(d),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,h){return Fn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(r,t,e)}function Sl(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=Qo(n.transform,i||null);o!=null&&(e===null&&(e=It.empty()),e.set(n.field,o))}return e||null}function $i(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&_e(n,i,(o,u)=>Pl(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class on extends sr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class se extends sr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Jo(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Qi(r,t,e){const n=new Map;z(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,h=t.data.field(o.field);n.set(o.field,Rl(u,h,e[i]))}return n}function Wi(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,wl(o,u,t))}return n}class Zo extends sr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dl extends sr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Cl(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ye(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ye(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ko();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(i.key)?null:h;const c=Yo(u,h);c!==null&&n.set(i.key,c),u.isValidDocument()||u.convertToNoDocument(O.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&_e(this.mutations,t.mutations,(e,n)=>$i(e,n))&&_e(this.baseMutations,t.baseMutations,(e,n)=>$i(e,n))}}class as{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){z(t.mutations.length===n.length);let i=function(){return El}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new as(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,B;function xl(r){switch(r){default:return M();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function ta(r){if(r===void 0)return Lt("GRPC error has no .code"),V.UNKNOWN;switch(r){case Z.OK:return V.OK;case Z.CANCELLED:return V.CANCELLED;case Z.UNKNOWN:return V.UNKNOWN;case Z.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Z.INTERNAL:return V.INTERNAL;case Z.UNAVAILABLE:return V.UNAVAILABLE;case Z.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Z.NOT_FOUND:return V.NOT_FOUND;case Z.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Z.ABORTED:return V.ABORTED;case Z.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Z.DATA_LOSS:return V.DATA_LOSS;default:return M()}}(B=Z||(Z={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new te([4294967295,4294967295],0);function Hi(r){const t=Ll().encode(r),e=new vo;return e.update(t),new Uint8Array(e.digest())}function Xi(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new te([e,n],0),new te([i,o],0)]}class us{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Qe(`Invalid padding: ${e}`);if(n<0)throw new Qe(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Qe(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Qe(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=te.fromNumber(this.Te)}Ee(t,e,n){let i=t.add(e.multiply(te.fromNumber(n)));return i.compare(Ml)===1&&(i=new te([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=Hi(t),[n,i]=Xi(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new us(o,i,e);return n.forEach(h=>u.insert(h)),u}insert(t){if(this.Te===0)return;const e=Hi(t),[n,i]=Xi(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Qe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,an.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ir(O.min(),i,new X(q),Mt(),U())}}class an{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new an(n,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class ea{constructor(t,e){this.targetId=t,this.me=e}}class na{constructor(t,e,n=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Yi{constructor(){this.fe=0,this.ge=Ji(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),n=U();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:M()}}),new an(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Ji()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ol{constructor(t){this.Le=t,this.Be=new Map,this.ke=Mt(),this.qe=kn(),this.Qe=kn(),this.Ke=new X(q)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.je(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,n=t.me.count,i=this.Ye(e);if(i){const o=i.target;if(Gr(o))if(n===0){const u=new x(o.path);this.We(e,u,gt.newNoDocument(u,O.min()))}else z(n===1);else{const u=this.Ze(e);if(u!==n){const h=this.Xe(t),c=h?this.et(h,t,u):1;if(c!==0){this.He(e);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,d)}}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,h;try{u=$t(n).toUint8Array()}catch(c){if(c instanceof bo)return ge("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{h=new us(u,i,o)}catch(c){return ge(c instanceof Qe?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return h.Te===0?null:h}et(t,e,n){return e.me.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.Le.nt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.We(e,o,null),i++)}),i}it(t){const e=new Map;this.Be.forEach((o,u)=>{const h=this.Ye(u);if(h){if(o.current&&Gr(h.target)){const c=new x(h.target.path);this.st(c).has(u)||this.ot(u,c)||this.We(u,c,gt.newNoDocument(c,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let n=U();this.Qe.forEach((o,u)=>{let h=!0;u.forEachWhile(c=>{const d=this.Ye(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const i=new ir(t,e,this.Ke,this.ke,n);return this.ke=Mt(),this.qe=kn(),this.Qe=kn(),this.Ke=new X(q),i}Ue(t,e){if(!this.je(t))return;const n=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const i=this.ze(t);this.ot(t,e)?i.Fe(e,1):i.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new Yi,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new nt(q),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new nt(q),this.qe=this.qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new Yi),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function kn(){return new X(x.comparator)}function Ji(){return new X(x.comparator)}const Fl={asc:"ASCENDING",desc:"DESCENDING"},Ul={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ql={and:"AND",or:"OR"};class Bl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Qr(r,t){return r.useProto3Json||Zn(t)?t:{value:t}}function $n(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ra(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function jl(r,t){return $n(r,t.toTimestamp())}function Vt(r){return z(!!r),O.fromTimestamp(function(e){const n=Kt(e);return new et(n.seconds,n.nanos)}(r))}function ls(r,t){return Wr(r,t).canonicalString()}function Wr(r,t){const e=function(i){return new H(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function sa(r){const t=H.fromString(r);return z(la(t)),t}function Hr(r,t){return ls(r.databaseId,t.path)}function Mr(r,t){const e=sa(t);if(e.get(1)!==r.databaseId.projectId)throw new k(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new x(oa(e))}function ia(r,t){return ls(r.databaseId,t)}function zl(r){const t=sa(r);return t.length===4?H.emptyPath():oa(t)}function Xr(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function oa(r){return z(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Zi(r,t,e){return{name:Hr(r,t),fields:e.value.mapValue.fields}}function Gl(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(z(p===void 0||typeof p=="string"),lt.fromBase64String(p||"")):(z(p===void 0||p instanceof Buffer||p instanceof Uint8Array),lt.fromUint8Array(p||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,h=u&&function(d){const p=d.code===void 0?V.UNKNOWN:ta(d.code);return new k(p,d.message||"")}(u);e=new na(n,i,o,h||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Mr(r,n.document.name),o=Vt(n.document.updateTime),u=n.document.createTime?Vt(n.document.createTime):O.min(),h=new It({mapValue:{fields:n.document.fields}}),c=gt.newFoundDocument(i,o,u,h),d=n.targetIds||[],p=n.removedTargetIds||[];e=new Un(d,p,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Mr(r,n.document),o=n.readTime?Vt(n.readTime):O.min(),u=gt.newNoDocument(i,o),h=n.removedTargetIds||[];e=new Un([],h,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Mr(r,n.document),o=n.removedTargetIds||[];e=new Un([],o,i,null)}else{if(!("filter"in t))return M();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Nl(i,o),h=n.targetId;e=new ea(h,u)}}return e}function Kl(r,t){let e;if(t instanceof on)e={update:Zi(r,t.key,t.value)};else if(t instanceof Zo)e={delete:Hr(r,t.key)};else if(t instanceof se)e={update:Zi(r,t.key,t.data),updateMask:th(t.fieldMask)};else{if(!(t instanceof Dl))return M();e={verify:Hr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const h=u.transform;if(h instanceof Gn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof nn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof rn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Kn)return{fieldPath:u.field.canonicalString(),increment:h.Pe};throw M()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:jl(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(r,t.precondition)),e}function $l(r,t){return r&&r.length>0?(z(t!==void 0),r.map(e=>function(i,o){let u=i.updateTime?Vt(i.updateTime):Vt(o);return u.isEqual(O.min())&&(u=Vt(o)),new Vl(u,i.transformResults||[])}(e,t))):[]}function Ql(r,t){return{documents:[ia(r,t.path)]}}function Wl(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=ia(r,i);const o=function(d){if(d.length!==0)return ua(Rt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(d){if(d.length!==0)return d.map(p=>function(P){return{field:fe(P.field),direction:Yl(P.dir)}}(p))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const h=Qr(r,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ct:e,parent:i}}function Hl(r){let t=zl(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){z(n===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(A){const P=aa(A);return P instanceof Rt&&Lo(P)?P.getFilters():[P]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(P=>function(N){return new zn(de(N.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(P))}(e.orderBy));let h=null;e.limit&&(h=function(A){let P;return P=typeof A=="object"?A.value:A,Zn(P)?null:P}(e.limit));let c=null;e.startAt&&(c=function(A){const P=!!A.before,C=A.values||[];return new jn(C,P)}(e.startAt));let d=null;return e.endAt&&(d=function(A){const P=!A.before,C=A.values||[];return new jn(C,P)}(e.endAt)),ml(t,i,u,o,h,"F",c,d)}function Xl(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function aa(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=de(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=de(e.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=de(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=de(e.unaryFilter.field);return tt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(e){return tt.create(de(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(n=>aa(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(r):M()}function Yl(r){return Fl[r]}function Jl(r){return Ul[r]}function Zl(r){return ql[r]}function fe(r){return{fieldPath:r.canonicalString()}}function de(r){return ut.fromServerFormat(r.fieldPath)}function ua(r){return r instanceof tt?function(e){if(e.op==="=="){if(qi(e.value))return{unaryFilter:{field:fe(e.field),op:"IS_NAN"}};if(Ui(e.value))return{unaryFilter:{field:fe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qi(e.value))return{unaryFilter:{field:fe(e.field),op:"IS_NOT_NAN"}};if(Ui(e.value))return{unaryFilter:{field:fe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fe(e.field),op:Jl(e.op),value:e.value}}}(r):r instanceof Rt?function(e){const n=e.getFilters().map(i=>ua(i));return n.length===1?n[0]:{compositeFilter:{op:Zl(e.op),filters:n}}}(r):M()}function th(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function la(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e,n,i,o=O.min(),u=O.min(),h=lt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=c}withSequenceNumber(t){return new Bt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this.ht=t}}function nh(r){const t=Hl({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?$r(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.ln=new sh}addToCollectionParentIndex(t,e){return this.ln.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Gt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Gt.min())}updateCollectionGroup(t,e,n){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class sh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new nt(H.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new nt(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(41943040,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Te(0)}static Qn(){return new Te(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo([r,t],[e,n]){const i=q(r,e);return i===0?q(t,n):i}class ih{constructor(t){this.Gn=t,this.buffer=new nt(eo),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();eo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class oh{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){D("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Re(e)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await we(e)}await this.Yn(3e5)})}}class ah{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return R.resolve(Jn.oe);const n=new ih(e);return this.Zn.forEachTarget(t,i=>n.Hn(i.sequenceNumber)).next(()=>this.Zn.er(t,i=>n.Hn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Zn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(to)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),to):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let n,i,o,u,h,c,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i))).next(A=>(n=A,h=Date.now(),this.removeTargets(t,n,e))).next(A=>(o=A,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(A=>(d=Date.now(),he()<=Nt.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-p}ms
	Determined least recently used ${i} in `+(h-u)+`ms
	Removed ${o} targets in `+(c-h)+`ms
	Removed ${A} documents in `+(d-c)+`ms
Total Duration: ${d-p}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A})))}}function uh(r,t){return new ah(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.changes=new re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?R.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&Ye(n.mutation,i,wt.empty(),et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,U()).next(()=>n))}getLocalViewOfDocuments(t,e,n=U()){const i=Zt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=$e();return o.forEach((h,c)=>{u=u.insert(h,c.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=Zt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,U()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,h)=>{e.set(u,h)})})}computeViews(t,e,n,i){let o=Mt();const u=Xe(),h=function(){return Xe()}();return e.forEach((c,d)=>{const p=n.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof se)?o=o.insert(d.key,d):p!==void 0?(u.set(d.key,p.mutation.getFieldMask()),Ye(p.mutation,d,p.mutation.getFieldMask(),et.now())):u.set(d.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(c=>(c.forEach((d,p)=>u.set(d,p)),e.forEach((d,p)=>{var A;return h.set(d,new hh(p,(A=u.get(d))!==null&&A!==void 0?A:null))}),h))}recalculateAndSaveOverlays(t,e){const n=Xe();let i=new X((u,h)=>u-h),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const h of u)h.keys().forEach(c=>{const d=e.get(c);if(d===null)return;let p=n.get(c)||wt.empty();p=h.applyToLocalView(d,p),n.set(c,p);const A=(i.get(h.batchId)||U()).add(c);i=i.insert(h.batchId,A)})}).next(()=>{const u=[],h=i.getReverseIterator();for(;h.hasNext();){const c=h.getNext(),d=c.key,p=c.value,A=Ko();p.forEach(P=>{if(!o.has(P)){const C=Yo(e.get(P),n.get(P));C!==null&&A.set(P,C),o=o.add(P)}}),u.push(this.documentOverlayCache.saveOverlays(t,d,A))}return R.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return x.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):qo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):R.resolve(Zt());let h=-1,c=o;return u.next(d=>R.forEach(d,(p,A)=>(h<A.largestBatchId&&(h=A.largestBatchId),o.get(p)?R.resolve():this.remoteDocumentCache.getEntry(t,p).next(P=>{c=c.insert(p,P)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,c,d,U())).next(p=>({batchId:h,changes:Go(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(n=>{let i=$e();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=$e();return this.indexManager.getCollectionParents(t,o).next(h=>R.forEach(h,c=>{const d=function(A,P){return new sn(P,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,c.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(p=>{p.forEach((A,P)=>{u=u.insert(A,P)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((c,d)=>{const p=d.getKey();u.get(p)===null&&(u=u.insert(p,gt.newInvalidDocument(p)))});let h=$e();return u.forEach((c,d)=>{const p=o.get(c);p!==void 0&&Ye(p.mutation,d,wt.empty(),et.now()),nr(e,d)&&(h=h.insert(c,d))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return R.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Vt(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(i){return{name:i.name,query:nh(i.bundledQuery),readTime:Vt(i.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.overlays=new X(x.comparator),this.Er=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Zt();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.Tt(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Er.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(n)),R.resolve()}getOverlaysForCollection(t,e,n){const i=Zt(),o=e.length+1,u=new x(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const c=h.getNext().value,d=c.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&c.largestBatchId>n&&i.set(c.getKey(),c)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new X((d,p)=>d-p);const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let p=o.get(d.largestBatchId);p===null&&(p=Zt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const h=Zt(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,p)=>h.set(d,p)),!(h.size()>=i)););return R.resolve(h)}Tt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Er.get(i.largestBatchId).delete(n.key);this.Er.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new kl(e,n));let o=this.Er.get(e);o===void 0&&(o=U(),this.Er.set(e,o)),this.Er.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.dr=new nt(st.Ar),this.Rr=new nt(st.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const n=new st(t,e);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.gr(new st(t,e))}pr(t,e){t.forEach(n=>this.removeReference(n,e))}yr(t){const e=new x(new H([])),n=new st(e,t),i=new st(e,t+1),o=[];return this.Rr.forEachInRange([n,i],u=>{this.gr(u),o.push(u.key)}),o}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new x(new H([])),n=new st(e,t),i=new st(e,t+1);let o=U();return this.Rr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),n=this.dr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class st{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return x.comparator(t.key,e.key)||q(t.br,e.br)}static Vr(t,e){return q(t.br,e.br)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new nt(st.Ar)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new bl(o,e,n,i);this.mutationQueue.push(u);for(const h of i)this.vr=this.vr.add(new st(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Fr(n),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([n,i],u=>{const h=this.Cr(u.br);o.push(h)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new nt(q);return e.forEach(i=>{const o=new st(i,0),u=new st(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,u],h=>{n=n.add(h.br)})}),R.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;x.isDocumentKey(o)||(o=o.child(""));const u=new st(new x(o),0);let h=new nt(q);return this.vr.forEachWhile(c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(h=h.add(c.br)),!0)},u),R.resolve(this.Mr(h))}Mr(t){const e=[];return t.forEach(n=>{const i=this.Cr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){z(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return R.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.vr=n})}Ln(t){}containsKey(t,e){const n=new st(e,0),i=this.vr.firstAfterOrEqual(n);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t){this.Nr=t,this.docs=function(){return new X(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return R.resolve(n?n.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let n=Mt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))}),R.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Mt();const u=e.path,h=new x(u.child("")),c=this.docs.getIteratorFrom(h);for(;c.hasNext();){const{key:d,value:{document:p}}=c.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||Qu($u(p),n)<=0||(i.has(p.key)||nr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,n,i){M()}Lr(t,e){return R.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new _h(this)}getSize(t){return R.resolve(this.size)}}class _h extends lh{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.hr.addEntry(t,i)):this.hr.removeEntry(n)}),R.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t){this.persistence=t,this.Br=new re(e=>ss(e),is),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.kr=0,this.qr=new hs,this.targetCount=0,this.Qr=Te.qn()}forEachTarget(t,e){return this.Br.forEach((n,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),R.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new Te(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Un(e),R.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Br.forEach((u,h)=>{h.sequenceNumber<=e&&n.get(h.targetId)===null&&(this.Br.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const n=this.Br.get(e)||null;return R.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),R.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return R.resolve(n)}containsKey(t,e){return R.resolve(this.qr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,e){this.Kr={},this.overlays={},this.$r=new Jn(0),this.Ur=!1,this.Ur=!0,this.Wr=new mh,this.referenceDelegate=t(this),this.Gr=new yh(this),this.indexManager=new rh,this.remoteDocumentCache=function(i){return new gh(i)}(n=>this.referenceDelegate.zr(n)),this.serializer=new eh(e),this.jr=new fh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new dh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new ph(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){D("MemoryPersistence","Starting transaction:",t);const i=new Eh(this.$r.next());return this.referenceDelegate.Hr(),n(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(t,e){return R.or(Object.values(this.Kr).map(n=>()=>n.containsKey(t,e)))}}class Eh extends Hu{constructor(t){super(),this.currentSequenceNumber=t}}class cs{constructor(t){this.persistence=t,this.Zr=new hs,this.Xr=null}static ei(t){return new cs(t)}get ti(){if(this.Xr)return this.Xr;throw M()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),R.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),R.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(i=>this.ti.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ti,n=>{const i=x.fromPath(n);return this.ni(t,i).next(o=>{o||e.removeEntry(i,O.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(n=>{n?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return R.or([()=>R.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class Qn{constructor(t,e){this.persistence=t,this.ri=new re(n=>Ju(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=uh(this,e)}static ei(t,e){return new Qn(t,e)}Hr(){}Jr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}nr(t){let e=0;return this.er(t,n=>{e++}).next(()=>e)}er(t,e){return R.forEach(this.ri,(n,i)=>this.ir(t,n,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Lr(t,u=>this.ir(t,u,e).next(h=>{h||(n++,o.removeEntry(u,O.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),R.resolve()}removeReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),R.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Mn(t.data.value)),e}ir(t,e,n){return R.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.ri.get(e);return R.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=i}static zi(t,e){let n=U(),i=U();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new fs(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Nu()?8:Xu(xu())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.Xi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.es(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Th;return this.ts(t,e,u).next(h=>{if(o.result=h,this.Hi)return this.ns(t,e,u,h.size)})}).next(()=>o.result)}ns(t,e,n,i){return n.documentReadCount<this.Ji?(he()<=Nt.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",ce(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),R.resolve()):(he()<=Nt.DEBUG&&D("QueryEngine","Query:",ce(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Yi*i?(he()<=Nt.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",ce(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pt(e))):R.resolve())}Xi(t,e){if(Gi(e))return R.resolve(null);let n=Pt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=$r(e,null,"F"),n=Pt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=U(...o);return this.Zi.getDocuments(t,u).next(h=>this.indexManager.getMinOffset(t,n).next(c=>{const d=this.rs(e,h);return this.ss(e,d,u,c.readTime)?this.Xi(t,$r(e,null,"F")):this.os(t,d,e,c)}))})))}es(t,e,n,i){return Gi(e)||i.isEqual(O.min())?R.resolve(null):this.Zi.getDocuments(t,n).next(o=>{const u=this.rs(e,o);return this.ss(e,u,n,i)?R.resolve(null):(he()<=Nt.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ce(e)),this.os(t,u,e,Ku(i,-1)).next(h=>h))})}rs(t,e){let n=new nt(jo(t));return e.forEach((i,o)=>{nr(t,o)&&(n=n.add(o))}),n}ss(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(t,e,n){return he()<=Nt.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",ce(e)),this.Zi.getDocumentsMatchingQuery(t,e,Gt.min(),n)}os(t,e,n,i){return this.Zi.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t,e,n,i){this.persistence=t,this._s=e,this.serializer=i,this.us=new X(q),this.cs=new re(o=>ss(o),is),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ch(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function Ah(r,t,e,n){return new vh(r,t,e,n)}async function ca(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],h=[];let c=U();for(const d of i){u.push(d.batchId);for(const p of d.mutations)c=c.add(p.key)}for(const d of o){h.push(d.batchId);for(const p of d.mutations)c=c.add(p.key)}return e.localDocuments.getDocuments(n,c).next(d=>({Ts:d,removedBatchIds:u,addedBatchIds:h}))})})}function wh(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(h,c,d,p){const A=d.batch,P=A.keys();let C=R.resolve();return P.forEach(N=>{C=C.next(()=>p.getEntry(c,N)).next(L=>{const b=d.docVersions.get(N);z(b!==null),L.version.compareTo(b)<0&&(A.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),p.addEntry(L)))})}),C.next(()=>h.mutationQueue.removeMutationBatch(c,A))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(h){let c=U();for(let d=0;d<h.mutationResults.length;++d)h.mutationResults[d].transformResults.length>0&&(c=c.add(h.batch.mutations[d].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function fa(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function Rh(r,t){const e=F(r),n=t.snapshotVersion;let i=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.hs.newChangeBuffer({trackRemovals:!0});i=e.us;const h=[];t.targetChanges.forEach((p,A)=>{const P=i.get(A);if(!P)return;h.push(e.Gr.removeMatchingKeys(o,p.removedDocuments,A).next(()=>e.Gr.addMatchingKeys(o,p.addedDocuments,A)));let C=P.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?C=C.withResumeToken(lt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,n)),i=i.insert(A,C),function(L,b,G){return L.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(P,C,p)&&h.push(e.Gr.updateTargetData(o,C))});let c=Mt(),d=U();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),h.push(Ph(o,u,t.documentUpdates).next(p=>{c=p.Is,d=p.Es})),!n.isEqual(O.min())){const p=e.Gr.getLastRemoteSnapshotVersion(o).next(A=>e.Gr.setTargetsMetadata(o,o.currentSequenceNumber,n));h.push(p)}return R.waitFor(h).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,c,d)).next(()=>c)}).then(o=>(e.us=i,o))}function Ph(r,t,e){let n=U(),i=U();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Mt();return e.forEach((h,c)=>{const d=o.get(h);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(h)),c.isNoDocument()&&c.version.isEqual(O.min())?(t.removeEntry(h,c.readTime),u=u.insert(h,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(c),u=u.insert(h,c)):D("LocalStore","Ignoring outdated watch update for ",h,". Current version:",d.version," Watch version:",c.version)}),{Is:u,Es:i}})}function Vh(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Ch(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Gr.getTargetData(n,t).next(o=>o?(i=o,R.resolve(i)):e.Gr.allocateTargetId(n).next(u=>(i=new Bt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Gr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.us.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.us=e.us.insert(n.targetId,n),e.cs.set(t,n.targetId)),n})}async function Yr(r,t,e){const n=F(r),i=n.us.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Re(u))throw u;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.us=n.us.remove(t),n.cs.delete(i.target)}function no(r,t,e){const n=F(r);let i=O.min(),o=U();return n.persistence.runTransaction("Execute query","readwrite",u=>function(c,d,p){const A=F(c),P=A.cs.get(p);return P!==void 0?R.resolve(A.us.get(P)):A.Gr.getTargetData(d,p)}(n,u,Pt(t)).next(h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(u,h.targetId).next(c=>{o=c})}).next(()=>n._s.getDocumentsMatchingQuery(u,t,e?i:O.min(),e?o:U())).next(h=>(Sh(n,gl(t),h),{documents:h,ds:o})))}function Sh(r,t,e){let n=r.ls.get(t)||O.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.ls.set(t,n)}class ro{constructor(){this.activeTargetIds=vl()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Dh{constructor(){this._o=new ro,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new ro,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn=null;function Or(){return Nn===null?Nn=function(){return 268435456+Math.round(2147483648*Math.random())}():Nn++,"0x"+Nn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class xh extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+e.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(e,n,i,o,u){const h=Or(),c=this.No(e,n.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${h}:`,c,i);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,o,u),this.Bo(e,c,d,i).then(p=>(D("RestConnection",`Received RPC '${e}' ${h}: `,p),p),p=>{throw ge("RestConnection",`RPC '${e}' ${h} failed with error: `,p,"url: ",c,"request:",i),p})}ko(e,n,i,o,u,h){return this.Oo(e,n,i,o,u)}Lo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ae}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),i&&i.headers.forEach((o,u)=>e[u]=o)}No(e,n){const i=kh[e];return`${this.Fo}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,n,i){const o=Or();return new Promise((u,h)=>{const c=new Ao;c.setWithCredentials(!0),c.listenOnce(wo.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ln.NO_ERROR:const p=c.getResponseJson();D(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),u(p);break;case Ln.TIMEOUT:D(mt,`RPC '${t}' ${o} timed out`),h(new k(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ln.HTTP_ERROR:const A=c.getStatus();if(D(mt,`RPC '${t}' ${o} failed with status:`,A,"response text:",c.getResponseText()),A>0){let P=c.getResponseJson();Array.isArray(P)&&(P=P[0]);const C=P==null?void 0:P.error;if(C&&C.status&&C.message){const N=function(b){const G=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(G)>=0?G:V.UNKNOWN}(C.status);h(new k(N,C.message))}else h(new k(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else h(new k(V.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{D(mt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);D(mt,`RPC '${t}' ${o} sending request:`,i),c.send(e,"POST",d,n,15)})}qo(t,e,n){const i=Or(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Vo(),h=Po(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const p=o.join("");D(mt,`Creating RPC '${t}' stream ${i}: ${p}`,c);const A=u.createWebChannel(p,c);let P=!1,C=!1;const N=new Nh({Eo:b=>{C?D(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(P||(D(mt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),P=!0),D(mt,`RPC '${t}' stream ${i} sending:`,b),A.send(b))},Ao:()=>A.close()}),L=(b,G,K)=>{b.listen(G,$=>{try{K($)}catch(rt){setTimeout(()=>{throw rt},0)}})};return L(A,Ke.EventType.OPEN,()=>{C||(D(mt,`RPC '${t}' stream ${i} transport opened.`),N.So())}),L(A,Ke.EventType.CLOSE,()=>{C||(C=!0,D(mt,`RPC '${t}' stream ${i} transport closed`),N.Do())}),L(A,Ke.EventType.ERROR,b=>{C||(C=!0,ge(mt,`RPC '${t}' stream ${i} transport errored:`,b),N.Do(new k(V.UNAVAILABLE,"The operation could not be completed")))}),L(A,Ke.EventType.MESSAGE,b=>{var G;if(!C){const K=b.data[0];z(!!K);const $=K,rt=($==null?void 0:$.error)||((G=$[0])===null||G===void 0?void 0:G.error);if(rt){D(mt,`RPC '${t}' stream ${i} received error:`,rt);const St=rt.status;let it=function(_){const y=Z[_];if(y!==void 0)return ta(y)}(St),T=rt.message;it===void 0&&(it=V.INTERNAL,T="Unknown error status: "+St+" with message "+rt.message),C=!0,N.Do(new k(it,T)),A.close()}else D(mt,`RPC '${t}' stream ${i} received:`,K),N.vo(K)}}),L(h,Ro.STAT_EVENT,b=>{b.stat===qr.PROXY?D(mt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===qr.NOPROXY&&D(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.bo()},0),N}}function Fr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(r){return new Bl(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t,e,n=1e3,i=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),i=Math.max(0,e-n);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e,n,i,o,u,h,c){this.li=t,this.Yo=n,this.Zo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new da(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Lt(e.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Xo===e&&this.I_(n,i)},n=>{t(()=>{const i=new k(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(i)})})}I_(t,e){const n=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{n(()=>this.E_(i))}),this.stream.onMessage(i=>{n(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lh extends ma{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=Gl(this.serializer,t),n=function(o){if(!("targetChange"in o))return O.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?O.min():u.readTime?Vt(u.readTime):O.min()}(t);return this.listener.R_(e,n)}V_(t){const e={};e.database=Xr(this.serializer),e.addTarget=function(o,u){let h;const c=u.target;if(h=Gr(c)?{documents:Ql(o,c)}:{query:Wl(o,c).ct},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=ra(o,u.resumeToken);const d=Qr(o,u.expectedCount);d!==null&&(h.expectedCount=d)}else if(u.snapshotVersion.compareTo(O.min())>0){h.readTime=$n(o,u.snapshotVersion.toTimestamp());const d=Qr(o,u.expectedCount);d!==null&&(h.expectedCount=d)}return h}(this.serializer,t);const n=Xl(this.serializer,t);n&&(e.labels=n),this.c_(e)}m_(t){const e={};e.database=Xr(this.serializer),e.removeTarget=t,this.c_(e)}}class Mh extends ma{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return z(!!t.streamToken),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=$l(t.writeResults,t.commitTime),n=Vt(t.commitTime);return this.listener.y_(n,e)}w_(){const t={};t.database=Xr(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Kl(this.serializer,n))};this.c_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new k(V.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Oo(t,Wr(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(V.UNKNOWN,o.toString())})}ko(t,e,n,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.ko(t,Wr(e,n),i,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(V.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Fh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Lt(e),this.C_=!1):D("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(u=>{n.enqueueAndForget(async()=>{ie(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=F(c);d.k_.add(4),await un(d),d.K_.set("Unknown"),d.k_.delete(4),await ar(d)}(this))})}),this.K_=new Fh(n,i)}}async function ar(r){if(ie(r))for(const t of r.q_)await t(!0)}async function un(r){for(const t of r.q_)await t(!1)}function pa(r,t){const e=F(r);e.B_.has(t.targetId)||(e.B_.set(t.targetId,t),gs(e)?ps(e):Pe(e).s_()&&ms(e,t))}function ds(r,t){const e=F(r),n=Pe(e);e.B_.delete(t),n.s_()&&ga(e,t),e.B_.size===0&&(n.s_()?n.a_():ie(e)&&e.K_.set("Unknown"))}function ms(r,t){if(r.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Pe(r).V_(t)}function ga(r,t){r.U_.xe(t),Pe(r).m_(t)}function ps(r){r.U_=new Ol({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>r.B_.get(t)||null,nt:()=>r.datastore.serializer.databaseId}),Pe(r).start(),r.K_.F_()}function gs(r){return ie(r)&&!Pe(r).i_()&&r.B_.size>0}function ie(r){return F(r).k_.size===0}function _a(r){r.U_=void 0}async function qh(r){r.K_.set("Online")}async function Bh(r){r.B_.forEach((t,e)=>{ms(r,t)})}async function jh(r,t){_a(r),gs(r)?(r.K_.O_(t),ps(r)):r.K_.set("Unknown")}async function zh(r,t,e){if(r.K_.set("Online"),t instanceof na&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const h of o.targetIds)i.B_.has(h)&&(await i.remoteSyncer.rejectListen(h,u),i.B_.delete(h),i.U_.removeTarget(h))}(r,t)}catch(n){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Wn(r,n)}else if(t instanceof Un?r.U_.$e(t):t instanceof ea?r.U_.Je(t):r.U_.Ge(t),!e.isEqual(O.min()))try{const n=await fa(r.localStore);e.compareTo(n)>=0&&await function(o,u){const h=o.U_.it(u);return h.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const p=o.B_.get(d);p&&o.B_.set(d,p.withResumeToken(c.resumeToken,u))}}),h.targetMismatches.forEach((c,d)=>{const p=o.B_.get(c);if(!p)return;o.B_.set(c,p.withResumeToken(lt.EMPTY_BYTE_STRING,p.snapshotVersion)),ga(o,c);const A=new Bt(p.target,c,d,p.sequenceNumber);ms(o,A)}),o.remoteSyncer.applyRemoteEvent(h)}(r,e)}catch(n){D("RemoteStore","Failed to raise snapshot:",n),await Wn(r,n)}}async function Wn(r,t,e){if(!Re(t))throw t;r.k_.add(1),await un(r),r.K_.set("Offline"),e||(e=()=>fa(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),r.k_.delete(1),await ar(r)})}function ya(r,t){return t().catch(e=>Wn(r,e,t))}async function ur(r){const t=F(r),e=Wt(t);let n=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;Gh(t);)try{const i=await Vh(t.localStore,n);if(i===null){t.L_.length===0&&e.a_();break}n=i.batchId,Kh(t,i)}catch(i){await Wn(t,i)}Ea(t)&&Ta(t)}function Gh(r){return ie(r)&&r.L_.length<10}function Kh(r,t){r.L_.push(t);const e=Wt(r);e.s_()&&e.f_&&e.g_(t.mutations)}function Ea(r){return ie(r)&&!Wt(r).i_()&&r.L_.length>0}function Ta(r){Wt(r).start()}async function $h(r){Wt(r).w_()}async function Qh(r){const t=Wt(r);for(const e of r.L_)t.g_(e.mutations)}async function Wh(r,t,e){const n=r.L_.shift(),i=as.from(n,t,e);await ya(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await ur(r)}async function Hh(r,t){t&&Wt(r).f_&&await async function(n,i){if(function(u){return xl(u)&&u!==V.ABORTED}(i.code)){const o=n.L_.shift();Wt(n).__(),await ya(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ur(n)}}(r,t),Ea(r)&&Ta(r)}async function io(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const n=ie(e);e.k_.add(3),await un(e),n&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await ar(e)}async function Xh(r,t){const e=F(r);t?(e.k_.delete(2),await ar(e)):t||(e.k_.add(2),await un(e),e.K_.set("Unknown"))}function Pe(r){return r.W_||(r.W_=function(e,n,i){const o=F(e);return o.b_(),new Lh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Ro:qh.bind(null,r),mo:Bh.bind(null,r),po:jh.bind(null,r),R_:zh.bind(null,r)}),r.q_.push(async t=>{t?(r.W_.__(),gs(r)?ps(r):r.K_.set("Unknown")):(await r.W_.stop(),_a(r))})),r.W_}function Wt(r){return r.G_||(r.G_=function(e,n,i){const o=F(e);return o.b_(),new Mh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:$h.bind(null,r),po:Hh.bind(null,r),p_:Qh.bind(null,r),y_:Wh.bind(null,r)}),r.q_.push(async t=>{t?(r.G_.__(),await ur(r)):(await r.G_.stop(),r.L_.length>0&&(D("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,h=new _s(t,e,u,i,o);return h.start(n),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ys(r,t){if(Lt("AsyncQueue",`${t}: ${r}`),Re(r))return new k(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{static emptySet(t){return new me(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||x.comparator(e.key,n.key):(e,n)=>x.comparator(e.key,n.key),this.keyedMap=$e(),this.sortedSet=new X(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof me)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new me;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.z_=new X(x.comparator)}track(t){const e=t.doc.key,n=this.z_.get(e);n?t.type!==0&&n.type===3?this.z_=this.z_.insert(e,t):t.type===3&&n.type!==1?this.z_=this.z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.z_=this.z_.remove(e):t.type===1&&n.type===2?this.z_=this.z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):M():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ie{constructor(t,e,n,i,o,u,h,c,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(h=>{u.push({type:0,doc:h})}),new Ie(t,e,me.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&er(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class Jh{constructor(){this.queries=ao(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,n){const i=F(e),o=i.queries;i.queries=ao(),o.forEach((u,h)=>{for(const c of h.J_)c.onError(n)})})(this,new k(V.ABORTED,"Firestore shutting down"))}}function ao(){return new re(r=>Bo(r),er)}async function Zh(r,t){const e=F(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.Y_()&&t.Z_()&&(n=2):(o=new Yh,n=t.Z_()?0:1);try{switch(n){case 0:o.H_=await e.onListen(i,!0);break;case 1:o.H_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const h=ys(u,`Initialization of query '${ce(t.query)}' failed`);return void t.onError(h)}e.queries.set(i,o),o.J_.push(t),t.ea(e.onlineState),o.H_&&t.ta(o.H_)&&Es(e)}async function tc(r,t){const e=F(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.J_.indexOf(t);u>=0&&(o.J_.splice(u,1),o.J_.length===0?i=t.Z_()?0:1:!o.Y_()&&t.Z_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function ec(r,t){const e=F(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const h of u.J_)h.ta(i)&&(n=!0);u.H_=i}}n&&Es(e)}function nc(r,t,e){const n=F(r),i=n.queries.get(t);if(i)for(const o of i.J_)o.onError(e);n.queries.delete(t)}function Es(r){r.X_.forEach(t=>{t.next()})}var Jr,uo;(uo=Jr||(Jr={})).na="default",uo.Cache="cache";class rc{constructor(t,e,n){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Ie(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache||!this.Z_())return!0;const n=e!=="Offline";return(!this.options.ua||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}aa(t){t=Ie.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==Jr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t){this.key=t}}class va{constructor(t){this.key=t}}class sc{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=U(),this.mutatedKeys=U(),this.Va=jo(t),this.ma=new me(this.Va)}get fa(){return this.da}ga(t,e){const n=e?e.pa:new oo,i=e?e.ma:this.ma;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,h=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,A)=>{const P=i.get(p),C=nr(this.query,A)?A:null,N=!!P&&this.mutatedKeys.has(P.key),L=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let b=!1;P&&C?P.data.isEqual(C.data)?N!==L&&(n.track({type:3,doc:C}),b=!0):this.ya(P,C)||(n.track({type:2,doc:C}),b=!0,(c&&this.Va(C,c)>0||d&&this.Va(C,d)<0)&&(h=!0)):!P&&C?(n.track({type:0,doc:C}),b=!0):P&&!C&&(n.track({type:1,doc:P}),b=!0,(c||d)&&(h=!0)),b&&(C?(u=u.add(C),o=L?o.add(p):o.delete(p)):(u=u.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const p=this.query.limitType==="F"?u.last():u.first();u=u.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{ma:u,pa:n,ss:h,mutatedKeys:o}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const u=t.pa.j_();u.sort((p,A)=>function(C,N){const L=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return L(C)-L(N)}(p.type,A.type)||this.Va(p.doc,A.doc)),this.wa(n),i=i!=null&&i;const h=e&&!i?this.Sa():[],c=this.Ra.size===0&&this.current&&!i?1:0,d=c!==this.Aa;return this.Aa=c,u.length!==0||d?{snapshot:new Ie(this.query,t.ma,o,u,t.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:h}:{ba:h}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new oo,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(e=>this.da=this.da.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=U(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const e=[];return t.forEach(n=>{this.Ra.has(n)||e.push(new va(n))}),this.Ra.forEach(n=>{t.has(n)||e.push(new Ia(n))}),e}va(t){this.da=t.ds,this.Ra=U();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return Ie.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class ic{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class oc{constructor(t){this.key=t,this.Fa=!1}}class ac{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new re(h=>Bo(h),er),this.Oa=new Map,this.Na=new Set,this.La=new X(x.comparator),this.Ba=new Map,this.ka=new hs,this.qa={},this.Qa=new Map,this.Ka=Te.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function uc(r,t,e=!0){const n=Ca(r);let i;const o=n.xa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Ca()):i=await Aa(n,t,e,!0),i}async function lc(r,t){const e=Ca(r);await Aa(e,t,!0,!1)}async function Aa(r,t,e,n){const i=await Ch(r.localStore,Pt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let h;return n&&(h=await hc(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&pa(r.remoteStore,i),h}async function hc(r,t,e,n,i){r.Ua=(A,P,C)=>async function(L,b,G,K){let $=b.view.ga(G);$.ss&&($=await no(L.localStore,b.query,!1).then(({documents:T})=>b.view.ga(T,$)));const rt=K&&K.targetChanges.get(b.targetId),St=K&&K.targetMismatches.get(b.targetId)!=null,it=b.view.applyChanges($,L.isPrimaryClient,rt,St);return ho(L,b.targetId,it.ba),it.snapshot}(r,A,P,C);const o=await no(r.localStore,t,!0),u=new sc(t,o.ds),h=u.ga(o.documents),c=an.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=u.applyChanges(h,r.isPrimaryClient,c);ho(r,e,d.ba);const p=new ic(t,e,u);return r.xa.set(t,p),r.Oa.has(e)?r.Oa.get(e).push(t):r.Oa.set(e,[t]),d.snapshot}async function cc(r,t,e){const n=F(r),i=n.xa.get(t),o=n.Oa.get(i.targetId);if(o.length>1)return n.Oa.set(i.targetId,o.filter(u=>!er(u,t))),void n.xa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Yr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&ds(n.remoteStore,i.targetId),Zr(n,i.targetId)}).catch(we)):(Zr(n,i.targetId),await Yr(n.localStore,i.targetId,!0))}async function fc(r,t){const e=F(r),n=e.xa.get(t),i=e.Oa.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ds(e.remoteStore,n.targetId))}async function dc(r,t,e){const n=Tc(r);try{const i=await function(u,h){const c=F(u),d=et.now(),p=h.reduce((C,N)=>C.add(N.key),U());let A,P;return c.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=Mt(),L=U();return c.hs.getEntries(C,p).next(b=>{N=b,N.forEach((G,K)=>{K.isValidDocument()||(L=L.add(G))})}).next(()=>c.localDocuments.getOverlayedDocuments(C,N)).next(b=>{A=b;const G=[];for(const K of h){const $=Sl(K,A.get(K.key).overlayedDocument);$!=null&&G.push(new se(K.key,$,ko($.value.mapValue),xt.exists(!0)))}return c.mutationQueue.addMutationBatch(C,d,G,h)}).next(b=>{P=b;const G=b.applyToLocalDocumentSet(A,L);return c.documentOverlayCache.saveOverlays(C,b.batchId,G)})}).then(()=>({batchId:P.batchId,changes:Go(A)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,h,c){let d=u.qa[u.currentUser.toKey()];d||(d=new X(q)),d=d.insert(h,c),u.qa[u.currentUser.toKey()]=d}(n,i.batchId,e),await ln(n,i.changes),await ur(n.remoteStore)}catch(i){const o=ys(i,"Failed to persist write");e.reject(o)}}async function wa(r,t){const e=F(r);try{const n=await Rh(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Ba.get(o);u&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Fa=!0:i.modifiedDocuments.size>0?z(u.Fa):i.removedDocuments.size>0&&(z(u.Fa),u.Fa=!1))}),await ln(e,n,t)}catch(n){await we(n)}}function lo(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.xa.forEach((o,u)=>{const h=u.view.ea(t);h.snapshot&&i.push(h.snapshot)}),function(u,h){const c=F(u);c.onlineState=h;let d=!1;c.queries.forEach((p,A)=>{for(const P of A.J_)P.ea(h)&&(d=!0)}),d&&Es(c)}(n.eventManager,t),i.length&&n.Ma.R_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function mc(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Ba.get(t),o=i&&i.key;if(o){let u=new X(x.comparator);u=u.insert(o,gt.newNoDocument(o,O.min()));const h=U().add(o),c=new ir(O.min(),new Map,new X(q),u,h);await wa(n,c),n.La=n.La.remove(o),n.Ba.delete(t),Ts(n)}else await Yr(n.localStore,t,!1).then(()=>Zr(n,t,e)).catch(we)}async function pc(r,t){const e=F(r),n=t.batch.batchId;try{const i=await wh(e.localStore,t);Pa(e,n,null),Ra(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ln(e,i)}catch(i){await we(i)}}async function gc(r,t,e){const n=F(r);try{const i=await function(u,h){const c=F(u);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return c.mutationQueue.lookupMutationBatch(d,h).next(A=>(z(A!==null),p=A.keys(),c.mutationQueue.removeMutationBatch(d,A))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,p,h)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>c.localDocuments.getDocuments(d,p))})}(n.localStore,t);Pa(n,t,e),Ra(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ln(n,i)}catch(i){await we(i)}}function Ra(r,t){(r.Qa.get(t)||[]).forEach(e=>{e.resolve()}),r.Qa.delete(t)}function Pa(r,t,e){const n=F(r);let i=n.qa[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.qa[n.currentUser.toKey()]=i}}function Zr(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Oa.get(t))r.xa.delete(n),e&&r.Ma.Wa(n,e);r.Oa.delete(t),r.isPrimaryClient&&r.ka.yr(t).forEach(n=>{r.ka.containsKey(n)||Va(r,n)})}function Va(r,t){r.Na.delete(t.path.canonicalString());const e=r.La.get(t);e!==null&&(ds(r.remoteStore,e),r.La=r.La.remove(t),r.Ba.delete(e),Ts(r))}function ho(r,t,e){for(const n of e)n instanceof Ia?(r.ka.addReference(n.key,t),_c(r,n)):n instanceof va?(D("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,t),r.ka.containsKey(n.key)||Va(r,n.key)):M()}function _c(r,t){const e=t.key,n=e.path.canonicalString();r.La.get(e)||r.Na.has(n)||(D("SyncEngine","New document in limbo: "+e),r.Na.add(n),Ts(r))}function Ts(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const t=r.Na.values().next().value;r.Na.delete(t);const e=new x(H.fromString(t)),n=r.Ka.next();r.Ba.set(n,new oc(e)),r.La=r.La.insert(e,n),pa(r.remoteStore,new Bt(Pt(Uo(e.path)),n,"TargetPurposeLimboResolution",Jn.oe))}}async function ln(r,t,e){const n=F(r),i=[],o=[],u=[];n.xa.isEmpty()||(n.xa.forEach((h,c)=>{u.push(n.Ua(c,t,e).then(d=>{var p;if((d||e)&&n.isPrimaryClient){const A=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(c.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(c.targetId,A?"current":"not-current")}if(d){i.push(d);const A=fs.zi(c.targetId,d);o.push(A)}}))}),await Promise.all(u),n.Ma.R_(i),await async function(c,d){const p=F(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(d,P=>R.forEach(P.Wi,C=>p.persistence.referenceDelegate.addReference(A,P.targetId,C)).next(()=>R.forEach(P.Gi,C=>p.persistence.referenceDelegate.removeReference(A,P.targetId,C)))))}catch(A){if(!Re(A))throw A;D("LocalStore","Failed to update sequence numbers: "+A)}for(const A of d){const P=A.targetId;if(!A.fromCache){const C=p.us.get(P),N=C.snapshotVersion,L=C.withLastLimboFreeSnapshotVersion(N);p.us=p.us.insert(P,L)}}}(n.localStore,o))}async function yc(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const n=await ca(e.localStore,t);e.currentUser=t,function(o,u){o.Qa.forEach(h=>{h.forEach(c=>{c.reject(new k(V.CANCELLED,u))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ln(e,n.Ts)}}function Ec(r,t){const e=F(r),n=e.Ba.get(t);if(n&&n.Fa)return U().add(n.key);{let i=U();const o=e.Oa.get(t);if(!o)return i;for(const u of o){const h=e.xa.get(u);i=i.unionWith(h.view.fa)}return i}}function Ca(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=wa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ec.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=mc.bind(null,t),t.Ma.R_=ec.bind(null,t.eventManager),t.Ma.Wa=nc.bind(null,t.eventManager),t}function Tc(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=pc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=gc.bind(null,t),t}class Hn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=or(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return Ah(this.persistence,new Ih,t.initialUser,this.serializer)}ja(t){return new ha(cs.ei,this.serializer)}za(t){return new Dh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hn.provider={build:()=>new Hn};class Ic extends Hn{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){z(this.persistence.referenceDelegate instanceof Qn);const n=this.persistence.referenceDelegate.garbageCollector;return new oh(n,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new ha(n=>Qn.ei(n,e),this.serializer)}}class ts{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>lo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=yc.bind(null,this.syncEngine),await Xh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Jh}()}createDatastore(t){const e=or(t.databaseInfo.databaseId),n=function(o){return new xh(o)}(t.databaseInfo);return function(o,u,h,c){return new Oh(o,u,h,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,h){return new Uh(n,i,o,u,h)}(this.localStore,this.datastore,t.asyncQueue,e=>lo(this.syncEngine,e,0),function(){return so.p()?new so:new bh}())}createSyncEngine(t,e){return function(i,o,u,h,c,d,p){const A=new ac(i,o,u,h,c,d);return p&&(A.$a=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);D("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await un(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ts.provider={build:()=>new ts};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):Lt("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=So.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{D("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(D("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ys(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ur(r,t){r.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await ca(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function co(r,t){r.asyncQueue.verifyOperationInProgress();const e=await wc(r);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>io(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>io(t.remoteStore,i)),r._onlineComponents=t}async function wc(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ur(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;ge("Error using user provided cache. Falling back to memory cache: "+e),await Ur(r,new Hn)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Ur(r,new Ic(void 0));return r._offlineComponents}async function Sa(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await co(r,r._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await co(r,new ts))),r._onlineComponents}function Rc(r){return Sa(r).then(t=>t.syncEngine)}async function Pc(r){const t=await Sa(r),e=t.eventManager;return e.onListen=uc.bind(null,t.syncEngine),e.onUnlisten=cc.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=lc.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=fc.bind(null,t.syncEngine),e}function Vc(r,t,e={}){const n=new jt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,h,c,d){const p=new vc({next:P=>{p.eu(),u.enqueueAndForget(()=>tc(o,A)),P.fromCache&&c.source==="server"?d.reject(new k(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(P)},error:P=>d.reject(P)}),A=new rc(h,p,{includeMetadataChanges:!0,ua:!0});return Zh(o,A)}(await Pc(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(r,t,e){if(!e)throw new k(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Cc(r,t,e,n){if(t===!0&&n===!0)throw new k(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function mo(r){if(!x.isDocumentKey(r))throw new k(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function po(r){if(x.isDocumentKey(r))throw new k(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function lr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M()}function Xn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=lr(r);throw new k(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new k(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Cc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Da((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class hr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new go({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new go(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Mu;switch(n.type){case"firstParty":return new qu(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=fo.get(e);n&&(D("ComponentProvider","Removing Datastore"),fo.delete(e),n.terminate())}(this),Promise.resolve()}}function ka(r,t,e,n={}){var i;const o=(r=Xn(r,hr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&ge("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let h,c;if(typeof n.mockUserToken=="string")h=n.mockUserToken,c=pt.MOCK_USER;else{h=Su(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new k(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new pt(d)}r._authCredentials=new Ou(new Co(h,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ve(this.firestore,t,this._query)}}class vt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new vt(this.firestore,t,this._key)}}class zt extends Ve{constructor(t,e,n){super(t,e,Uo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new vt(this.firestore,null,new x(t))}withConverter(t){return new zt(this.firestore,t,this._path)}}function _o(r,t,...e){if(r=pe(r),ba("collection","path",t),r instanceof hr){const n=H.fromString(t,...e);return po(n),new zt(r,null,n)}{if(!(r instanceof vt||r instanceof zt))throw new k(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return po(n),new zt(r.firestore,null,n)}}function Sc(r,t,...e){if(r=pe(r),arguments.length===1&&(t=So.newId()),ba("doc","path",t),r instanceof hr){const n=H.fromString(t,...e);return mo(n),new vt(r,null,new x(n))}{if(!(r instanceof vt||r instanceof zt))throw new k(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return mo(n),new vt(r.firestore,r instanceof zt?r.converter:null,new x(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new da(this,"async_queue_retry"),this.fu=()=>{const n=Fr();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=t;const e=Fr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Fr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new jt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!Re(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(n=>{this.Au=n,this.Ru=!1;const i=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(n);throw Lt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.Ru=!1,n))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const i=_s.createAndSchedule(this,t,e,n,o=>this.Su(o));return this.du.push(i),i}pu(){this.Au&&M()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class Is extends hr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new yo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new yo(t),this._firestoreClient=void 0,await t}}}function Dc(r,t){const e=typeof r=="object"?r:Du(),n=typeof r=="string"?r:"(default)",i=bu(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=ku("firestore");o&&ka(i,...o)}return i}function Na(r){if(r._terminated)throw new k(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||bc(r),r._firestoreClient}function bc(r){var t,e,n;const i=r._freezeSettings(),o=function(h,c,d,p){return new el(h,c,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Da(p.experimentalLongPollingOptions),p.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Ac(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(h){const c=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(c),_online:c}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ve(lt.fromBase64String(t))}catch(e){throw new k(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ve(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=/^__.*__$/;class Nc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new on(t,this.data,e,this.fieldTransforms)}}function La(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Rs{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new Rs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:n,Nu:!1});return i.Lu(t),i}Bu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:n,Nu:!1});return i.Fu(),i}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Yn(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(La(this.Mu)&&kc.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class xc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||or(t)}$u(t,e,n,i=!1){return new Rs({Mu:t,methodName:e,Ku:n,path:ut.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ma(r){const t=r._freezeSettings(),e=or(r._databaseId);return new xc(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Lc(r,t,e,n,i,o={}){const u=r.$u(o.merge||o.mergeFields?2:0,t,e,i);Ua("Data must be an object, but it was:",u,n);const h=Oa(n,u);let c,d;if(o.merge)c=new wt(u.fieldMask),d=u.fieldTransforms;else if(o.mergeFields){const p=[];for(const A of o.mergeFields){const P=Oc(t,A,e);if(!u.contains(P))throw new k(V.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);Uc(p,P)||p.push(P)}c=new wt(p),d=u.fieldTransforms.filter(A=>c.covers(A.field))}else c=null,d=u.fieldTransforms;return new Nc(new It(h),c,d)}function Mc(r,t,e,n=!1){return Ps(e,r.$u(n?4:3,t))}function Ps(r,t){if(Fa(r=pe(r)))return Ua("Unsupported field value:",t,r),Oa(r,t);if(r instanceof xa)return function(n,i){if(!La(i.Mu))throw i.qu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const h of n){let c=Ps(h,i.ku(u));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=pe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Al(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=et.fromDate(n);return{timestampValue:$n(i.serializer,o)}}if(n instanceof et){const o=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$n(i.serializer,o)}}if(n instanceof As)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ve)return{bytesValue:ra(i.serializer,n._byteString)};if(n instanceof vt){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ls(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof ws)return function(u,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(c=>{if(typeof c!="number")throw h.qu("VectorValues must only contain numeric values.");return os(h.serializer,c)})}}}}}}(n,i);throw i.qu(`Unsupported field value: ${lr(n)}`)}(r,t)}function Oa(r,t){const e={};return Do(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ne(r,(n,i)=>{const o=Ps(i,t.Ou(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Fa(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof As||r instanceof ve||r instanceof vt||r instanceof xa||r instanceof ws)}function Ua(r,t,e){if(!Fa(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=lr(e);throw n==="an object"?t.qu(r+" a custom object"):t.qu(r+" "+n)}}function Oc(r,t,e){if((t=pe(t))instanceof vs)return t._internalPath;if(typeof t=="string")return qa(r,t);throw Yn("Field path arguments must be of type string or ",r,!1,void 0,e)}const Fc=new RegExp("[~\\*/\\[\\]]");function qa(r,t,e){if(t.search(Fc)>=0)throw Yn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new vs(...t.split("."))._internalPath}catch{throw Yn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Yn(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let c="";return(o||u)&&(c+=" (found",o&&(c+=` in field ${n}`),u&&(c+=` in document ${i}`),c+=")"),new k(V.INVALID_ARGUMENT,h+r+c)}function Uc(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new qc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Vs("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class qc extends Ba{data(){return super.data()}}function Vs(r,t){return typeof t=="string"?qa(r,t):t instanceof vs?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cs{}class jc extends Cs{}function zc(r,t,...e){let n=[];t instanceof Cs&&n.push(t),n=n.concat(e),function(o){const u=o.filter(c=>c instanceof Ss).length,h=o.filter(c=>c instanceof cr).length;if(u>1||u>0&&h>0)throw new k(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class cr extends jc{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new cr(t,e,n)}_apply(t){const e=this._parse(t);return ja(t._query,e),new Ve(t.firestore,t.converter,Kr(t._query,e))}_parse(t){const e=Ma(t.firestore);return function(o,u,h,c,d,p,A){let P;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new k(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){To(A,p);const C=[];for(const N of A)C.push(Eo(c,o,N));P={arrayValue:{values:C}}}else P=Eo(c,o,A)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||To(A,p),P=Mc(h,u,A,p==="in"||p==="not-in");return tt.create(d,p,P)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Gc(r,t,e){const n=t,i=Vs("where",r);return cr._create(i,n,e)}class Ss extends Cs{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ss(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Rt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let u=i;const h=o.getFlattenedFilters();for(const c of h)ja(u,c),u=Kr(u,c)}(t._query,e),new Ve(t.firestore,t.converter,Kr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Eo(r,t,e){if(typeof(e=pe(e))=="string"){if(e==="")throw new k(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qo(t)&&e.indexOf("/")!==-1)throw new k(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(H.fromString(e));if(!x.isDocumentKey(n))throw new k(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Fi(r,new x(n))}if(e instanceof vt)return Fi(r,e._key);throw new k(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lr(e)}.`)}function To(r,t){if(!Array.isArray(r)||r.length===0)throw new k(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ja(r,t){const e=function(i,o){for(const u of i)for(const h of u.getFlattenedFilters())if(o.indexOf(h.op)>=0)return h.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Kc{convertValue(t,e="none"){switch(Qt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes($t(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ne(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>J(u.doubleValue));return new ws(o)}convertGeoPoint(t){return new As(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=tr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ze(t));default:return null}}convertTimestamp(t){const e=Kt(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);z(la(n));const i=new tn(n.get(1),n.get(3)),o=new x(n.popFirst(5));return i.isEqual(e)||Lt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qc extends Ba{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Vs("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class qn extends Qc{data(t={}){return super.data(t)}}class Wc{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new xn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new qn(this._firestore,this._userDataWriter,n.key,n,new xn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(h=>{const c=new qn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new xn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:c,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const c=new qn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new xn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return h.type!==0&&(d=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),p=u.indexOf(h.doc.key)),{type:Hc(h.type),doc:c,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Hc(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class Xc extends Kc{constructor(t){super(),this.firestore=t}convertBytes(t){return new ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new vt(this.firestore,null,e)}}function Yc(r){r=Xn(r,Ve);const t=Xn(r.firestore,Is),e=Na(t),n=new Xc(t);return Bc(r._query),Vc(e,r._query).then(i=>new Wc(t,n,r,i))}function Jc(r,t){const e=Xn(r.firestore,Is),n=Sc(r),i=$c(r.converter,t);return Zc(e,[Lc(Ma(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,xt.exists(!1))]).then(()=>n)}function Zc(r,t){return function(n,i){const o=new jt;return n.asyncQueue.enqueueAndForget(async()=>dc(await Rc(n),i,o)),o.promise}(Na(r),t)}(function(t,e=!0){(function(i){Ae=i})(Cu),Ru(new Pu("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),h=new Is(new Fu(n.getProvider("auth-internal")),new ju(n.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tn(d.options.projectId,p)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Di(ki,"4.7.5",t),Di(ki,"4.7.5","esm2017")})();const tf=Io("firestore",()=>{const{firebaseApp:r}=Lu(),t=Dc(r);return ka(t,"127.0.0.1",8080),{db:t}}),of=Io("testService",()=>{const{db:r}=tf();async function t(n){return await Jc(_o(r,"tests"),n)}async function e(n){const i=_o(r,"tests"),o=zc(i,Gc("user_id","==",n));return(await Yc(o)).docs.map(c=>{const d=c.data();return d.id=c.id,d})}return{addTest:t,getTests:e}});export{et as T,of as u};
