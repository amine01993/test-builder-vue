import{ah as $u,ai as Qu,aj as Ku,ak as Xi,al as Wu,am as Ot,an as Hu,ao as Rt,ap as Xu,aq as Yu,ar as Ju,as as Zu,at as tl,au as el,M as nl,av as rl}from"./index-B1zD-M5g.js";var Yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ae,Uo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function _(){}_.prototype=p.prototype,E.D=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,T,v){for(var g=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)g[xt-2]=arguments[xt];return p.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)y[T]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],T=E.g[2];var v=E.g[3],g=p+(v^_&(T^v))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=v+(T^p&(_^T))+y[1]+3905402710&4294967295,v=p+(g<<12&4294967295|g>>>20),g=T+(_^v&(p^_))+y[2]+606105819&4294967295,T=v+(g<<17&4294967295|g>>>15),g=_+(p^T&(v^p))+y[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(v^_&(T^v))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=v+(T^p&(_^T))+y[5]+1200080426&4294967295,v=p+(g<<12&4294967295|g>>>20),g=T+(_^v&(p^_))+y[6]+2821735955&4294967295,T=v+(g<<17&4294967295|g>>>15),g=_+(p^T&(v^p))+y[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(v^_&(T^v))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=v+(T^p&(_^T))+y[9]+2336552879&4294967295,v=p+(g<<12&4294967295|g>>>20),g=T+(_^v&(p^_))+y[10]+4294925233&4294967295,T=v+(g<<17&4294967295|g>>>15),g=_+(p^T&(v^p))+y[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(v^_&(T^v))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=v+(T^p&(_^T))+y[13]+4254626195&4294967295,v=p+(g<<12&4294967295|g>>>20),g=T+(_^v&(p^_))+y[14]+2792965006&4294967295,T=v+(g<<17&4294967295|g>>>15),g=_+(p^T&(v^p))+y[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(T^v&(_^T))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=v+(_^T&(p^_))+y[6]+3225465664&4294967295,v=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(v^p))+y[11]+643717713&4294967295,T=v+(g<<14&4294967295|g>>>18),g=_+(v^p&(T^v))+y[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^v&(_^T))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=v+(_^T&(p^_))+y[10]+38016083&4294967295,v=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(v^p))+y[15]+3634488961&4294967295,T=v+(g<<14&4294967295|g>>>18),g=_+(v^p&(T^v))+y[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^v&(_^T))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=v+(_^T&(p^_))+y[14]+3275163606&4294967295,v=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(v^p))+y[3]+4107603335&4294967295,T=v+(g<<14&4294967295|g>>>18),g=_+(v^p&(T^v))+y[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^v&(_^T))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=v+(_^T&(p^_))+y[2]+4243563512&4294967295,v=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(v^p))+y[7]+1735328473&4294967295,T=v+(g<<14&4294967295|g>>>18),g=_+(v^p&(T^v))+y[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(_^T^v)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=v+(p^_^T)+y[8]+2272392833&4294967295,v=p+(g<<11&4294967295|g>>>21),g=T+(v^p^_)+y[11]+1839030562&4294967295,T=v+(g<<16&4294967295|g>>>16),g=_+(T^v^p)+y[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^v)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=v+(p^_^T)+y[4]+1272893353&4294967295,v=p+(g<<11&4294967295|g>>>21),g=T+(v^p^_)+y[7]+4139469664&4294967295,T=v+(g<<16&4294967295|g>>>16),g=_+(T^v^p)+y[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^v)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=v+(p^_^T)+y[0]+3936430074&4294967295,v=p+(g<<11&4294967295|g>>>21),g=T+(v^p^_)+y[3]+3572445317&4294967295,T=v+(g<<16&4294967295|g>>>16),g=_+(T^v^p)+y[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^v)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=v+(p^_^T)+y[12]+3873151461&4294967295,v=p+(g<<11&4294967295|g>>>21),g=T+(v^p^_)+y[15]+530742520&4294967295,T=v+(g<<16&4294967295|g>>>16),g=_+(T^v^p)+y[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(T^(_|~v))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=v+(_^(p|~T))+y[7]+1126891415&4294967295,v=p+(g<<10&4294967295|g>>>22),g=T+(p^(v|~_))+y[14]+2878612391&4294967295,T=v+(g<<15&4294967295|g>>>17),g=_+(v^(T|~p))+y[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~v))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=v+(_^(p|~T))+y[3]+2399980690&4294967295,v=p+(g<<10&4294967295|g>>>22),g=T+(p^(v|~_))+y[10]+4293915773&4294967295,T=v+(g<<15&4294967295|g>>>17),g=_+(v^(T|~p))+y[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~v))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=v+(_^(p|~T))+y[15]+4264355552&4294967295,v=p+(g<<10&4294967295|g>>>22),g=T+(p^(v|~_))+y[6]+2734768916&4294967295,T=v+(g<<15&4294967295|g>>>17),g=_+(v^(T|~p))+y[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~v))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=v+(_^(p|~T))+y[11]+3174756917&4294967295,v=p+(g<<10&4294967295|g>>>22),g=T+(p^(v|~_))+y[2]+718787259&4294967295,T=v+(g<<15&4294967295|g>>>17),g=_+(v^(T|~p))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+v&4294967295}n.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var _=p-this.blockSize,y=this.B,T=this.h,v=0;v<p;){if(T==0)for(;v<=_;)i(this,E,v),v+=this.blockSize;if(typeof E=="string"){for(;v<p;)if(y[T++]=E.charCodeAt(v++),T==this.blockSize){i(this,y),T=0;break}}else for(;v<p;)if(y[T++]=E[v++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=p},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var _=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=_&255,_/=256;for(this.u(E),E=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)E[_++]=this.g[p]>>>y&255;return E};function o(E,p){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function u(E,p){this.h=p;for(var _=[],y=!0,T=E.length-1;0<=T;T--){var v=E[T]|0;y&&v==p||(_[T]=v,y=!1)}this.g=_}var c={};function h(E){return-128<=E&&128>E?o(E,function(p){return new u([p|0],0>p?-1:0)}):new u([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return D(f(-E));for(var p=[],_=1,y=0;E>=_;y++)p[y]=E/_|0,_*=4294967296;return new u(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=A,T=0;T<E.length;T+=8){var v=Math.min(8,E.length-T),g=parseInt(E.substring(T,T+v),p);8>v?(v=f(Math.pow(p,v)),y=y.j(v).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var A=h(0),w=h(1),C=h(16777216);r=u.prototype,r.m=function(){if(x(this))return-D(this).m();for(var E=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*p,p*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(x(this))return"-"+D(this).toString(E);for(var p=f(Math.pow(E,6)),_=this,y="";;){var T=rt(_,p).g;_=j(_,T.j(p));var v=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=T,k(_))return v+y;for(;6>v.length;)v="0"+v;y=v+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=j(this,E),x(E)?-1:k(E)?0:1};function D(E){for(var p=E.g.length,_=[],y=0;y<p;y++)_[y]=~E.g[y];return new u(_,~E.h).add(w)}r.abs=function(){return x(this)?D(this):this},r.add=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0,T=0;T<=p;T++){var v=y+(this.i(T)&65535)+(E.i(T)&65535),g=(v>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=g>>>16,v&=65535,g&=65535,_[T]=g<<16|v}return new u(_,_[_.length-1]&-2147483648?-1:0)};function j(E,p){return E.add(D(p))}r.j=function(E){if(k(this)||k(E))return A;if(x(this))return x(E)?D(this).j(D(E)):D(D(this).j(E));if(x(E))return D(this.j(D(E)));if(0>this.l(C)&&0>E.l(C))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var v=this.i(y)>>>16,g=this.i(y)&65535,xt=E.i(T)>>>16,Ne=E.i(T)&65535;_[2*y+2*T]+=g*Ne,$(_,2*y+2*T),_[2*y+2*T+1]+=v*Ne,$(_,2*y+2*T+1),_[2*y+2*T+1]+=g*xt,$(_,2*y+2*T+1),_[2*y+2*T+2]+=v*xt,$(_,2*y+2*T+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new u(_,0)};function $(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function Q(E,p){this.g=E,this.h=p}function rt(E,p){if(k(p))throw Error("division by zero");if(k(E))return new Q(A,A);if(x(E))return p=rt(D(E),p),new Q(D(p.g),D(p.h));if(x(p))return p=rt(E,D(p)),new Q(D(p.g),p.h);if(30<E.g.length){if(x(E)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=w,y=p;0>=y.l(E);)_=Nt(_),y=Nt(y);var T=it(_,1),v=it(y,1);for(y=it(y,2),_=it(_,2);!k(y);){var g=v.add(y);0>=g.l(E)&&(T=T.add(_),v=g),y=it(y,1),_=it(_,1)}return p=j(E,T.j(p)),new Q(T,p)}for(T=A;0<=E.l(p);){for(_=Math.max(1,Math.floor(E.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),v=f(_),g=v.j(p);x(g)||0<g.l(E);)_-=y,v=f(_),g=v.j(p);k(v)&&(v=w),T=T.add(v),E=j(E,g)}return new Q(T,E)}r.A=function(E){return rt(this,E).h},r.and=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&E.i(y);return new u(_,this.h&E.h)},r.or=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|E.i(y);return new u(_,this.h|E.h)},r.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^E.i(y);return new u(_,this.h^E.h)};function Nt(E){for(var p=E.g.length+1,_=[],y=0;y<p;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(_,E.h)}function it(E,p){var _=p>>5;p%=32;for(var y=E.g.length-_,T=[],v=0;v<y;v++)T[v]=0<p?E.i(v+_)>>>p|E.i(v+_+1)<<32-p:E.i(v+_);return new u(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Uo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=m,ae=u}).apply(typeof Yi<"u"?Yi:typeof self<"u"?self:typeof window<"u"?window:{});var Fn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qo,Xe,Bo,zn,ts,jo,zo,Go;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fn=="object"&&Fn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var d=0;d<s.length-1;d++){var I=s[d];if(!(I in l))break t;l=l[I]}s=s[s.length-1],d=l[s],a=a(d),a!=d&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,d=!1,I={next:function(){if(!d&&l<s.length){var R=l++;return{value:a(R,s[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function m(s,a,l){return s.call.apply(s.bind,arguments)}function A(s,a,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function w(s,a,l){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:A,w.apply(null,arguments)}function C(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function k(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,I,R){for(var S=Array(arguments.length-2),K=2;K<arguments.length;K++)S[K-2]=arguments[K];return a.prototype[I].apply(d,S)}}function x(s){const a=s.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=s[d];return l}return[]}function D(s,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=s.length||0,R=d.length||0;s.length=I+R;for(let S=0;S<R;S++)s[I+S]=d[S]}else s.push(d)}}class j{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function $(s){return/^[\s\xa0]*$/.test(s)}function Q(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var Nt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function it(s,a,l){for(const d in s)a.call(l,s[d],d,s)}function E(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function p(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)s[l]=d[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function T(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function v(s){c.setTimeout(()=>{throw s},0)}function g(){var s=Rr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class xt{constructor(){this.h=this.g=null}add(a,l){const d=Ne.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Ne=new j(()=>new cu,s=>s.reset());class cu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,Le=!1,Rr=new xt,Xs=()=>{const s=c.Promise.resolve(void 0);xe=()=>{s.then(hu)}};var hu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){v(l)}var a=Ne;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Le=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var du=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function Me(s,a){if(ct.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Nt){t:{try{rt(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:fu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Me.aa.h.call(this)}}k(Me,ct);var fu={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Tn="closure_listenable_"+(1e6*Math.random()|0),mu=0;function pu(s,a,l,d,I){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=I,this.key=++mu,this.da=this.fa=!1}function En(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function In(s){this.src=s,this.g={},this.h=0}In.prototype.add=function(s,a,l,d,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var S=Vr(s,a,d,I);return-1<S?(a=s[S],l||(a.fa=!1)):(a=new pu(a,this.src,R,!!d,I),a.fa=l,s.push(a)),a};function Pr(s,a){var l=a.type;if(l in s.g){var d=s.g[l],I=Array.prototype.indexOf.call(d,a,void 0),R;(R=0<=I)&&Array.prototype.splice.call(d,I,1),R&&(En(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Vr(s,a,l,d){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==a&&R.capture==!!l&&R.ha==d)return I}return-1}var Cr="closure_lm_"+(1e6*Math.random()|0),Sr={};function Ys(s,a,l,d,I){if(Array.isArray(a)){for(var R=0;R<a.length;R++)Ys(s,a[R],l,d,I);return null}return l=ti(l),s&&s[Tn]?s.K(a,l,f(d)?!!d.capture:!1,I):gu(s,a,l,!1,d,I)}function gu(s,a,l,d,I,R){if(!a)throw Error("Invalid event type");var S=f(I)?!!I.capture:!!I,K=br(s);if(K||(s[Cr]=K=new In(s)),l=K.add(a,l,d,S,R),l.proxy)return l;if(d=_u(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)du||(I=S),I===void 0&&(I=!1),s.addEventListener(a.toString(),d,I);else if(s.attachEvent)s.attachEvent(Zs(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function _u(){function s(l){return a.call(s.src,s.listener,l)}const a=yu;return s}function Js(s,a,l,d,I){if(Array.isArray(a))for(var R=0;R<a.length;R++)Js(s,a[R],l,d,I);else d=f(d)?!!d.capture:!!d,l=ti(l),s&&s[Tn]?(s=s.i,a=String(a).toString(),a in s.g&&(R=s.g[a],l=Vr(R,l,d,I),-1<l&&(En(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete s.g[a],s.h--)))):s&&(s=br(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Vr(a,l,d,I)),(l=-1<s?a[s]:null)&&Dr(l))}function Dr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Tn])Pr(a.i,s);else{var l=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(l,d,s.capture):a.detachEvent?a.detachEvent(Zs(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=br(a))?(Pr(l,s),l.h==0&&(l.src=null,a[Cr]=null)):En(s)}}}function Zs(s){return s in Sr?Sr[s]:Sr[s]="on"+s}function yu(s,a){if(s.da)s=!0;else{a=new Me(a,this);var l=s.listener,d=s.ha||s.src;s.fa&&Dr(s),s=l.call(d,a)}return s}function br(s){return s=s[Cr],s instanceof In?s:null}var kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ti(s){return typeof s=="function"?s:(s[kr]||(s[kr]=function(a){return s.handleEvent(a)}),s[kr])}function ht(){Bt.call(this),this.i=new In(this),this.M=this,this.F=null}k(ht,Bt),ht.prototype[Tn]=!0,ht.prototype.removeEventListener=function(s,a,l,d){Js(this,s,a,l,d)};function _t(s,a){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ct(a,s);else if(a instanceof ct)a.target=a.target||s;else{var I=a;a=new ct(d,s),y(a,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var S=a.g=l[R];I=An(S,d,!0,a)&&I}if(S=a.g=s,I=An(S,d,!0,a)&&I,I=An(S,d,!1,a)&&I,l)for(R=0;R<l.length;R++)S=a.g=l[R],I=An(S,d,!1,a)&&I}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],d=0;d<l.length;d++)En(l[d]);delete s.g[a],s.h--}}this.F=null},ht.prototype.K=function(s,a,l,d){return this.i.add(String(s),a,!1,l,d)},ht.prototype.L=function(s,a,l,d){return this.i.add(String(s),a,!0,l,d)};function An(s,a,l,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,R=0;R<a.length;++R){var S=a[R];if(S&&!S.da&&S.capture==l){var K=S.listener,ot=S.ha||S.src;S.fa&&Pr(s.i,S),I=K.call(ot,d)!==!1&&I}}return I&&!d.defaultPrevented}function ei(s,a,l){if(typeof s=="function")l&&(s=w(s,l));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function ni(s){s.g=ei(()=>{s.g=null,s.i&&(s.i=!1,ni(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Tu extends Bt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ni(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oe(s){Bt.call(this),this.h=s,this.g={}}k(Oe,Bt);var ri=[];function si(s){it(s.g,function(a,l){this.g.hasOwnProperty(l)&&Dr(a)},s),s.g={}}Oe.prototype.N=function(){Oe.aa.N.call(this),si(this)},Oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nr=c.JSON.stringify,Eu=c.JSON.parse,Iu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function xr(){}xr.prototype.h=null;function ii(s){return s.h||(s.h=s.i())}function oi(){}var Fe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lr(){ct.call(this,"d")}k(Lr,ct);function Mr(){ct.call(this,"c")}k(Mr,ct);var ne={},ai=null;function vn(){return ai=ai||new ht}ne.La="serverreachability";function ui(s){ct.call(this,ne.La,s)}k(ui,ct);function Ue(s){const a=vn();_t(a,new ui(a))}ne.STAT_EVENT="statevent";function li(s,a){ct.call(this,ne.STAT_EVENT,s),this.stat=a}k(li,ct);function yt(s){const a=vn();_t(a,new li(a,s))}ne.Ma="timingevent";function ci(s,a){ct.call(this,ne.Ma,s),this.size=a}k(ci,ct);function qe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Be(){this.g=!0}Be.prototype.xa=function(){this.g=!1};function Au(s,a,l,d,I,R){s.info(function(){if(s.g)if(R)for(var S="",K=R.split("&"),ot=0;ot<K.length;ot++){var z=K[ot].split("=");if(1<z.length){var dt=z[0];z=z[1];var ft=dt.split("_");S=2<=ft.length&&ft[1]=="type"?S+(dt+"="+z+"&"):S+(dt+"=redacted&")}}else S=null;else S=R;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+a+`
`+l+`
`+S})}function vu(s,a,l,d,I,R,S){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+a+`
`+l+`
`+R+" "+S})}function de(s,a,l,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Ru(s,l)+(d?" "+d:"")})}function wu(s,a){s.info(function(){return"TIMEOUT: "+a})}Be.prototype.info=function(){};function Ru(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var S=1;S<I.length;S++)I[S]=""}}}}return Nr(l)}catch{return a}}var wn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Or;function Rn(){}k(Rn,xr),Rn.prototype.g=function(){return new XMLHttpRequest},Rn.prototype.i=function(){return{}},Or=new Rn;function jt(s,a,l,d){this.j=s,this.i=a,this.l=l,this.R=d||1,this.U=new Oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new di}function di(){this.i=null,this.g="",this.h=!1}var fi={},Fr={};function Ur(s,a,l){s.L=1,s.v=Sn(Lt(a)),s.m=l,s.P=!0,mi(s,null)}function mi(s,a){s.F=Date.now(),Pn(s),s.A=Lt(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Ci(l.i,"t",d),s.C=0,l=s.j.J,s.h=new di,s.g=Qi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new Tu(w(s.Y,s,s.g),s.O)),a=s.U,l=s.g,d=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(ri[0]=I.toString()),I=ri);for(var R=0;R<I.length;R++){var S=Ys(l,I[R],d||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Ue(),Au(s.i,s.u,s.A,s.l,s.R,s.m)}jt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Mt(s)==3?a.j():this.Y(s)},jt.prototype.Y=function(s){try{if(s==this.g)t:{const ft=Mt(this.g);var a=this.g.Ba();const pe=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Li(this.g)))){this.J||ft!=4||a==7||(a==8||0>=pe?Ue(3):Ue(2)),qr(this);var l=this.g.Z();this.X=l;e:if(pi(this)){var d=Li(this.g);s="";var I=d.length,R=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),je(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(R&&a==I-1)});d.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,vu(this.i,this.u,this.A,this.l,this.R,ft,l),this.o){if(this.T&&!this.K){e:{if(this.g){var K,ot=this.g;if((K=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(K)){var z=K;break e}}z=null}if(l=z)de(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Br(this,l);else{this.o=!1,this.s=3,yt(12),re(this),je(this);break t}}if(this.P){l=!0;let Pt;for(;!this.J&&this.C<S.length;)if(Pt=Pu(this,S),Pt==Fr){ft==4&&(this.s=4,yt(14),l=!1),de(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==fi){this.s=4,yt(15),de(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else de(this.i,this.l,Pt,null),Br(this,Pt);if(pi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||S.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)de(this.i,this.l,S,"[Invalid Chunked Response]"),re(this),je(this);else if(0<S.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Kr(dt),dt.M=!0,yt(11))}}else de(this.i,this.l,S,null),Br(this,S);ft==4&&re(this),this.o&&!this.J&&(ft==4?ji(this.j,this):(this.o=!1,Pn(this)))}else zu(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),re(this),je(this)}}}catch{}finally{}};function pi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Pu(s,a){var l=s.C,d=a.indexOf(`
`,l);return d==-1?Fr:(l=Number(a.substring(l,d)),isNaN(l)?fi:(d+=1,d+l>a.length?Fr:(a=a.slice(d,d+l),s.C=d+l,a)))}jt.prototype.cancel=function(){this.J=!0,re(this)};function Pn(s){s.S=Date.now()+s.I,gi(s,s.I)}function gi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=qe(w(s.ba,s),a)}function qr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}jt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(wu(this.i,this.A),this.L!=2&&(Ue(),yt(17)),re(this),this.s=2,je(this)):gi(this,this.S-s)};function je(s){s.j.G==0||s.J||ji(s.j,s)}function re(s){qr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,si(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Br(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||jr(l.h,s))){if(!s.K&&jr(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Ln(l),Nn(l);else break t;Qr(l),yt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=qe(w(l.Za,l),6e3));if(1>=Ti(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ie(l,11)}else if((s.K||l.g==s)&&Ln(l),!$(a))for(I=l.Da.g.parse(a),a=0;a<I.length;a++){let z=I[a];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const dt=z[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const ft=z[4];ft!=null&&(l.Aa=ft,l.j.info("SVER="+l.Aa));const pe=z[5];pe!=null&&typeof pe=="number"&&0<pe&&(d=1.5*pe,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Pt=s.g;if(Pt){const On=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(On){var R=d.h;R.g||On.indexOf("spdy")==-1&&On.indexOf("quic")==-1&&On.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(zr(R,R.h),R.h=null))}if(d.D){const Wr=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Wr&&(d.ya=Wr,H(d.I,d.D,Wr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var S=s;if(d.qa=$i(d,d.J?d.ia:null,d.W),S.K){Ei(d.h,S);var K=S,ot=d.L;ot&&(K.I=ot),K.B&&(qr(K),Pn(K)),d.g=S}else qi(d);0<l.i.length&&xn(l)}else z[0]!="stop"&&z[0]!="close"||ie(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?ie(l,7):$r(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}Ue(4)}catch{}}var Vu=class{constructor(s,a){this.g=s,this.map=a}};function _i(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ti(s){return s.h?1:s.g?s.g.size:0}function jr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function zr(s,a){s.g?s.g.add(a):s.h=a}function Ei(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}_i.prototype.cancel=function(){if(this.i=Ii(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ii(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return x(s.i)}function Cu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],l=s.length,d=0;d<l;d++)a.push(s[d]);return a}a=[],l=0;for(d in s)a[l++]=s[d];return a}function Su(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const d in s)a[l++]=d;return a}}}function Ai(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Su(s),d=Cu(s),I=d.length,R=0;R<I;R++)a.call(void 0,d[R],l&&l[R],s)}var vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Du(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),I=null;if(0<=d){var R=s[l].substring(0,d);I=s[l].substring(d+1)}else R=s[l];a(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function se(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof se){this.h=s.h,Vn(this,s.j),this.o=s.o,this.g=s.g,Cn(this,s.s),this.l=s.l;var a=s.i,l=new $e;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),wi(this,l),this.m=s.m}else s&&(a=String(s).match(vi))?(this.h=!1,Vn(this,a[1]||"",!0),this.o=ze(a[2]||""),this.g=ze(a[3]||"",!0),Cn(this,a[4]),this.l=ze(a[5]||"",!0),wi(this,a[6]||"",!0),this.m=ze(a[7]||"")):(this.h=!1,this.i=new $e(null,this.h))}se.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Ge(a,Ri,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ge(a,Ri,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Ge(l,l.charAt(0)=="/"?Nu:ku,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Ge(l,Lu)),s.join("")};function Lt(s){return new se(s)}function Vn(s,a,l){s.j=l?ze(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Cn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function wi(s,a,l){a instanceof $e?(s.i=a,Mu(s.i,s.h)):(l||(a=Ge(a,xu)),s.i=new $e(a,s.h))}function H(s,a,l){s.i.set(a,l)}function Sn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function ze(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ge(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,bu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function bu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ri=/[#\/\?@]/g,ku=/[#\?:]/g,Nu=/[#\?]/g,xu=/[#\?@]/g,Lu=/#/g;function $e(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function zt(s){s.g||(s.g=new Map,s.h=0,s.i&&Du(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=$e.prototype,r.add=function(s,a){zt(this),this.i=null,s=fe(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Pi(s,a){zt(s),a=fe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Vi(s,a){return zt(s),a=fe(s,a),s.g.has(a)}r.forEach=function(s,a){zt(this),this.g.forEach(function(l,d){l.forEach(function(I){s.call(a,I,d,this)},this)},this)},r.na=function(){zt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const I=s[d];for(let R=0;R<I.length;R++)l.push(a[d])}return l},r.V=function(s){zt(this);let a=[];if(typeof s=="string")Vi(this,s)&&(a=a.concat(this.g.get(fe(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return zt(this),this.i=null,s=fe(this,s),Vi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Ci(s,a,l){Pi(s,a),0<l.length&&(s.i=null,s.g.set(fe(s,a),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const R=encodeURIComponent(String(d)),S=this.V(d);for(d=0;d<S.length;d++){var I=R;S[d]!==""&&(I+="="+encodeURIComponent(String(S[d]))),s.push(I)}}return this.i=s.join("&")};function fe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Mu(s,a){a&&!s.j&&(zt(s),s.i=null,s.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(Pi(this,d),Ci(this,I,l))},s)),s.j=a}function Ou(s,a){const l=new Be;if(c.Image){const d=new Image;d.onload=C(Gt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=C(Gt,l,"TestLoadImage: error",!1,a,d),d.onabort=C(Gt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(Gt,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Fu(s,a){const l=new Be,d=new AbortController,I=setTimeout(()=>{d.abort(),Gt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(R=>{clearTimeout(I),R.ok?Gt(l,"TestPingServer: ok",!0,a):Gt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),Gt(l,"TestPingServer: error",!1,a)})}function Gt(s,a,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function Uu(){this.g=new Iu}function qu(s,a,l){const d=l||"";try{Ai(s,function(I,R){let S=I;f(I)&&(S=Nr(I)),a.push(d+R+"="+encodeURIComponent(S))})}catch(I){throw a.push(d+"type="+encodeURIComponent("_badmap")),I}}function Dn(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Dn,xr),Dn.prototype.g=function(){return new bn(this.l,this.j)},Dn.prototype.i=function(s){return function(){return s}}({});function bn(s,a){ht.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(bn,ht),r=bn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Ke(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qe(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ke(this)),this.g&&(this.readyState=3,Ke(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Si(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Si(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Qe(this):Ke(this),this.readyState==3&&Si(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Qe(this))},r.Qa=function(s){this.g&&(this.response=s,Qe(this))},r.ga=function(){this.g&&Qe(this)};function Qe(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ke(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Ke(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Di(s){let a="";return it(s,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function Gr(s,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Di(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):H(s,a,l))}function Y(s){ht.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Y,ht);var Bu=/^https?$/i,ju=["POST","PUT"];r=Y.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Or.g(),this.v=this.o?ii(this.o):ii(Or),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){bi(this,R);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())l.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ju,a,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,S]of l)this.g.setRequestHeader(R,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xi(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){bi(this,R)}};function bi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,ki(s),kn(s)}function ki(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),kn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kn(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ni(this):this.bb())},r.bb=function(){Ni(this)};function Ni(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Mt(s)!=4||s.Z()!=2)){if(s.u&&Mt(s)==4)ei(s.Ea,0,s);else if(_t(s,"readystatechange"),Mt(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=S===0){var I=String(s.D).match(vi)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),d=!Bu.test(I?I.toLowerCase():"")}l=d}if(l)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var R=2<Mt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",ki(s)}}finally{kn(s)}}}}function kn(s,a){if(s.g){xi(s);const l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||_t(s,"ready");try{l.onreadystatechange=d}catch{}}}function xi(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Mt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Eu(a)}};function Li(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function zu(s){const a={};s=(s.g&&2<=Mt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if($(s[d]))continue;var l=T(s[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=a[I]||[];a[I]=R,R.push(l)}E(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function We(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Mi(s){this.Aa=0,this.i=[],this.j=new Be,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=We("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=We("baseRetryDelayMs",5e3,s),this.cb=We("retryDelaySeedMs",1e4,s),this.Wa=We("forwardChannelMaxRetries",2,s),this.wa=We("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new _i(s&&s.concurrentRequestLimit),this.Da=new Uu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Mi.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,d){yt(0),this.W=s,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=$i(this,null,this.W),xn(this)};function $r(s){if(Oi(s),s.G==3){var a=s.U++,l=Lt(s.I);if(H(l,"SID",s.K),H(l,"RID",a),H(l,"TYPE","terminate"),He(s,l),a=new jt(s,s.j,a),a.L=2,a.v=Sn(Lt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Qi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Pn(a)}Gi(s)}function Nn(s){s.g&&(Kr(s),s.g.cancel(),s.g=null)}function Oi(s){Nn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Ln(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function xn(s){if(!yi(s.h)&&!s.s){s.s=!0;var a=s.Ga;xe||Xs(),Le||(xe(),Le=!0),Rr.add(a,s),s.B=0}}function Gu(s,a){return Ti(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=qe(w(s.Ga,s,a),zi(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new jt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ui(this,I,a),l=Lt(this.I),H(l,"RID",s),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),He(this,l),R&&(this.O?a="headers="+encodeURIComponent(String(Di(R)))+"&"+a:this.m&&Gr(l,this.m,R)),zr(this.h,I),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",a),H(l,"SID","null"),I.T=!0,Ur(I,l,null)):Ur(I,l,a),this.G=2}}else this.G==3&&(s?Fi(this,s):this.i.length==0||yi(this.h)||Fi(this))};function Fi(s,a){var l;a?l=a.l:l=s.U++;const d=Lt(s.I);H(d,"SID",s.K),H(d,"RID",l),H(d,"AID",s.T),He(s,d),s.m&&s.o&&Gr(d,s.m,s.o),l=new jt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ui(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),zr(s.h,l),Ur(l,d,a)}function He(s,a){s.H&&it(s.H,function(l,d){H(a,d,l)}),s.l&&Ai({},function(l,d){H(a,d,l)})}function Ui(s,a,l){l=Math.min(s.i.length,l);var d=s.l?w(s.l.Na,s.l,s):null;t:{var I=s.i;let R=-1;for(;;){const S=["count="+l];R==-1?0<l?(R=I[0].g,S.push("ofs="+R)):R=0:S.push("ofs="+R);let K=!0;for(let ot=0;ot<l;ot++){let z=I[ot].g;const dt=I[ot].map;if(z-=R,0>z)R=Math.max(0,I[ot].g-100),K=!1;else try{qu(dt,S,"req"+z+"_")}catch{d&&d(dt)}}if(K){d=S.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,d}function qi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;xe||Xs(),Le||(xe(),Le=!0),Rr.add(a,s),s.v=0}}function Qr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=qe(w(s.Fa,s),zi(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Bi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=qe(w(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Nn(this),Bi(this))};function Kr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Bi(s){s.g=new jt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Lt(s.qa);H(a,"RID","rpc"),H(a,"SID",s.K),H(a,"AID",s.T),H(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(a,"TO",s.ja),H(a,"TYPE","xmlhttp"),He(s,a),s.m&&s.o&&Gr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Sn(Lt(a)),l.m=null,l.P=!0,mi(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Nn(this),Qr(this),yt(19))};function Ln(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function ji(s,a){var l=null;if(s.g==a){Ln(s),Kr(s),s.g=null;var d=2}else if(jr(s.h,a))l=a.D,Ei(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;d=vn(),_t(d,new ci(d,l)),xn(s)}else qi(s);else if(I=a.s,I==3||I==0&&0<a.X||!(d==1&&Gu(s,a)||d==2&&Qr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),I){case 1:ie(s,5);break;case 4:ie(s,10);break;case 3:ie(s,6);break;default:ie(s,2)}}}function zi(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function ie(s,a){if(s.j.info("Error code "+a),a==2){var l=w(s.fb,s),d=s.Xa;const I=!d;d=new se(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Vn(d,"https"),Sn(d),I?Ou(d.toString(),l):Fu(d.toString(),l)}else yt(2);s.G=0,s.l&&s.l.sa(a),Gi(s),Oi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Gi(s){if(s.G=0,s.ka=[],s.l){const a=Ii(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function $i(s,a,l){var d=l instanceof se?Lt(l):new se(l);if(d.g!="")a&&(d.g=a+"."+d.g),Cn(d,d.s);else{var I=c.location;d=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var R=new se(null);d&&Vn(R,d),a&&(R.g=a),I&&Cn(R,I),l&&(R.l=l),d=R}return l=s.D,a=s.ya,l&&a&&H(d,l,a),H(d,"VER",s.la),He(s,d),d}function Qi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Y(new Dn({eb:l})):new Y(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ki(){}r=Ki.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Mn(){}Mn.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){ht.call(this),this.g=new Mi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!$(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!$(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new me(this)}k(vt,ht),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){$r(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Nr(s),s=l);a.i.push(new Vu(a.Ya++,s)),a.G==3&&xn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,$r(this.g),delete this.g,vt.aa.N.call(this)};function Wi(s){Lr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(Wi,Lr);function Hi(){Mr.call(this),this.status=1}k(Hi,Mr);function me(s){this.g=s}k(me,Ki),me.prototype.ua=function(){_t(this.g,"a")},me.prototype.ta=function(s){_t(this.g,new Wi(s))},me.prototype.sa=function(s){_t(this.g,new Hi)},me.prototype.ra=function(){_t(this.g,"b")},Mn.prototype.createWebChannel=Mn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Go=function(){return new Mn},zo=function(){return vn()},jo=ne,ts={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wn.NO_ERROR=0,wn.TIMEOUT=8,wn.HTTP_ERROR=6,zn=wn,hi.COMPLETE="complete",Bo=hi,oi.EventType=Fe,Fe.OPEN="a",Fe.CLOSE="b",Fe.ERROR="c",Fe.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Xe=oi,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,qo=Y}).apply(typeof Fn<"u"?Fn:typeof self<"u"?self:typeof window<"u"?window:{});const Ji="@firebase/firestore";/**
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
 */let Se="11.0.2";/**
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
 */const ue=new $u("@firebase/firestore");function ge(){return ue.logLevel}function N(r,...t){if(ue.logLevel<=Ot.DEBUG){const e=t.map(ps);ue.debug(`Firestore (${Se}): ${r}`,...e)}}function Ft(r,...t){if(ue.logLevel<=Ot.ERROR){const e=t.map(ps);ue.error(`Firestore (${Se}): ${r}`,...e)}}function Ie(r,...t){if(ue.logLevel<=Ot.WARN){const e=t.map(ps);ue.warn(`Firestore (${Se}): ${r}`,...e)}}function ps(r){if(typeof r=="string")return r;try{/**
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
 */function M(r="Unexpected state"){const t=`FIRESTORE (${Se}) INTERNAL ASSERTION FAILED: `+r;throw Ft(t),new Error(t)}function G(r,t){r||M()}function O(r,t){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Wu{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class St{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class $o{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class il{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ol{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new St;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new St,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new St)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string"),new $o(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string"),new pt(t)}}class al{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ul{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new al(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ll{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cl{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){G(this.o===void 0);const n=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string"),this.R=e.token,new ll(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class Qo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=hl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function Ae(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
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
 */class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new et(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new et(0,0))}static max(){return new F(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class rn{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(),n===void 0?n=t.length-e:n>t.length-e&&M(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return rn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof rn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=t.get(i),u=e.get(i);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class W extends rn{construct(t,e,n){return new W(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new b(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new W(e)}static emptyPath(){return new W([])}}const dl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends rn{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return dl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new b(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new b(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new b(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
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
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(W.fromString(t))}static fromName(t){return new L(W.fromString(t).popFirst(5))}static empty(){return new L(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new W(t.slice()))}}function fl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=F.fromTimestamp(n===1e9?new et(e+1,0):new et(e,n));return new Wt(i,L.empty(),t)}function ml(r){return new Wt(r.readTime,r.key,-1)}class Wt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Wt(F.min(),L.empty(),-1)}static max(){return new Wt(F.max(),L.empty(),-1)}}function pl(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
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
 */const gl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _l{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function De(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==gl)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,n)=>{e(t)})}static reject(t){return new V((e,n)=>{n(t)})}static waitFor(t){return new V((e,n)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},h=>n(h))}),u=!0,o===i&&e()})}static or(t){let e=V.resolve(!1);for(const n of t)e=e.next(i=>i?V.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new V((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{u[f]=m,++c,c===o&&n(u)},m=>i(m))}})}static doWhile(t,e){return new V((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function yl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function be(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class ir{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ir.oe=-1;function or(r){return r==null}function Hn(r){return r===0&&1/r==-1/0}function Tl(r){return typeof r=="number"&&Number.isInteger(r)&&!Hn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function El(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Zi(t)),t=Il(r.get(e),t);return Zi(t)}function Il(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function Zi(r){return r+""}/**
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
 */function to(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Zt(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Al(r,t){const e=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.push(t(r[n],n,r));return e}function Ko(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class X{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Un(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Un(this.root,t,this.comparator,!1)}getReverseIterator(){return new Un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Un(this.root,t,this.comparator,!0)}}class Un{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new at(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,i,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new eo(this.data.getIterator())}getIteratorFrom(t){return new eo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new nt(this.comparator);return e.data=t,e}}class eo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new wt([])}unionWith(t){let e=new nt(ut.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ae(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class Wo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Wo("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const vl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(r){if(G(!!r),typeof r=="string"){let t=0;const e=vl.exec(r);if(G(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Xt(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
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
 */function ar(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ur(r){const t=r.mapValue.fields.__previous_value__;return ar(t)?ur(t):t}function sn(r){const t=Ht(r.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
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
 */class wl{constructor(t,e,n,i,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class on{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new on("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof on&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const qn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ar(r)?4:Pl(r)?9007199254740991:Rl(r)?10:11:M()}function kt(r,t){if(r===t)return!0;const e=Yt(r);if(e!==Yt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return sn(r).isEqual(sn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Ht(i.timestampValue),c=Ht(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return Xt(i.bytesValue).isEqual(Xt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=J(i.doubleValue),c=J(o.doubleValue);return u===c?Hn(u)===Hn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return Ae(r.arrayValue.values||[],t.arrayValue.values||[],kt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(to(u)!==to(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!kt(u[h],c[h])))return!1;return!0}(r,t);default:return M()}}function an(r,t){return(r.values||[]).find(e=>kt(e,t))!==void 0}function ve(r,t){if(r===t)return 0;const e=Yt(r),n=Yt(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=J(o.integerValue||o.doubleValue),h=J(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return no(r.timestampValue,t.timestampValue);case 4:return no(sn(r),sn(t));case 5:return q(r.stringValue,t.stringValue);case 6:return function(o,u){const c=Xt(o),h=Xt(u);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=q(c[f],h[f]);if(m!==0)return m}return q(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=q(J(o.latitude),J(u.latitude));return c!==0?c:q(J(o.longitude),J(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return ro(r.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,f,m;const A=o.fields||{},w=u.fields||{},C=(c=A.value)===null||c===void 0?void 0:c.arrayValue,k=(h=w.value)===null||h===void 0?void 0:h.arrayValue,x=q(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((m=k==null?void 0:k.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:ro(C,k)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===qn.mapValue&&u===qn.mapValue)return 0;if(o===qn.mapValue)return 1;if(u===qn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let A=0;A<h.length&&A<m.length;++A){const w=q(h[A],m[A]);if(w!==0)return w;const C=ve(c[h[A]],f[m[A]]);if(C!==0)return C}return q(h.length,m.length)}(r.mapValue,t.mapValue);default:throw M()}}function no(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=Ht(r),n=Ht(t),i=q(e.seconds,n.seconds);return i!==0?i:q(e.nanos,n.nanos)}function ro(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=ve(e[i],n[i]);if(o)return o}return q(e.length,n.length)}function we(r){return es(r)}function es(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Ht(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Xt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return L.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=es(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${es(e.fields[u])}`;return i+"}"}(r.mapValue):M()}function Gn(r){switch(Yt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ur(r);return t?16+Gn(t):16;case 5:return 2*r.stringValue.length;case 6:return Xt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Gn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return Zt(n.fields,(o,u)=>{i+=o.length+Gn(u)}),i}(r.mapValue);default:throw M()}}function Xn(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ns(r){return!!r&&"integerValue"in r}function gs(r){return!!r&&"arrayValue"in r}function so(r){return!!r&&"nullValue"in r}function io(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function $n(r){return!!r&&"mapValue"in r}function Rl(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function tn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Zt(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=tn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=tn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Pl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Et{constructor(t){this.value=t}static empty(){return new Et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!$n(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=tn(e)}setAll(t){let e=ut.emptyPath(),n={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=tn(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());$n(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];$n(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Zt(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Et(tn(this.value))}}function Ho(r){const t=[];return Zt(r.fields,(e,n)=>{const i=new ut([e]);if($n(n)){const o=Ho(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new wt(t)}/**
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
 */class gt{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new gt(t,0,F.min(),F.min(),F.min(),Et.empty(),0)}static newFoundDocument(t,e,n,i){return new gt(t,1,e,F.min(),n,i,0)}static newNoDocument(t,e){return new gt(t,2,e,F.min(),F.min(),Et.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,F.min(),F.min(),Et.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Re{constructor(t,e){this.position=t,this.inclusive=e}}function oo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=L.comparator(L.fromName(u.referenceValue),e.key):n=ve(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ao(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!kt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class un{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Xo{}class tt extends Xo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Sl(t,e,n):e==="array-contains"?new kl(t,n):e==="in"?new Nl(t,n):e==="not-in"?new xl(t,n):e==="array-contains-any"?new Ll(t,n):new tt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Dl(t,n):new bl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ve(e,this.value)):e!==null&&Yt(this.value)===Yt(e)&&this.matchesComparison(ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends Xo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Vt(t,e)}matches(t){return Yo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yo(r){return r.op==="and"}function Jo(r){return Cl(r)&&Yo(r)}function Cl(r){for(const t of r.filters)if(t instanceof Vt)return!1;return!0}function rs(r){if(r instanceof tt)return r.field.canonicalString()+r.op.toString()+we(r.value);if(Jo(r))return r.filters.map(t=>rs(t)).join(",");{const t=r.filters.map(e=>rs(e)).join(",");return`${r.op}(${t})`}}function Zo(r,t){return r instanceof tt?function(n,i){return i instanceof tt&&n.op===i.op&&n.field.isEqual(i.field)&&kt(n.value,i.value)}(r,t):r instanceof Vt?function(n,i){return i instanceof Vt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,c)=>o&&Zo(u,i.filters[c]),!0):!1}(r,t):void M()}function ta(r){return r instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${we(e.value)}`}(r):r instanceof Vt?function(e){return e.op.toString()+" {"+e.getFilters().map(ta).join(" ,")+"}"}(r):"Filter"}class Sl extends tt{constructor(t,e,n){super(t,e,n),this.key=L.fromName(n.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class Dl extends tt{constructor(t,e){super(t,"in",e),this.keys=ea("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class bl extends tt{constructor(t,e){super(t,"not-in",e),this.keys=ea("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ea(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>L.fromName(n.referenceValue))}class kl extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return gs(e)&&an(e.arrayValue,this.value)}}class Nl extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&an(this.value.arrayValue,e)}}class xl extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(an(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!an(this.value.arrayValue,e)}}class Ll extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!gs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>an(this.value.arrayValue,n))}}/**
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
 */class Ml{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function uo(r,t=null,e=[],n=[],i=null,o=null,u=null){return new Ml(r,t,e,n,i,o,u)}function _s(r){const t=O(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>rs(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),or(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>we(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>we(n)).join(",")),t.ue=e}return t.ue}function ys(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Vl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Zo(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ao(r.startAt,t.startAt)&&ao(r.endAt,t.endAt)}function ss(r){return L.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class le{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ol(r,t,e,n,i,o,u,c){return new le(r,t,e,n,i,o,u,c)}function Ts(r){return new le(r)}function lo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Es(r){return r.collectionGroup!==null}function Te(r){const t=O(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new nt(ut.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new un(o,n))}),e.has(ut.keyField().canonicalString())||t.ce.push(new un(ut.keyField(),n))}return t.ce}function Dt(r){const t=O(r);return t.le||(t.le=na(t,Te(r))),t.le}function Fl(r){const t=O(r);return t.he||(t.he=na(t,r.explicitOrderBy)),t.he}function na(r,t){if(r.limitType==="F")return uo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new un(i.field,o)});const e=r.endAt?new Re(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Re(r.startAt.position,r.startAt.inclusive):null;return uo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function is(r,t){const e=r.filters.concat([t]);return new le(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Yn(r,t,e){return new le(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function lr(r,t){return ys(Dt(r),Dt(t))&&r.limitType===t.limitType}function ra(r){return`${_s(Dt(r))}|lt:${r.limitType}`}function _e(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>ta(i)).join(", ")}]`),or(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>we(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>we(i)).join(",")),`Target(${n})`}(Dt(r))}; limitType=${r.limitType})`}function cr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):L.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of Te(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,c,h){const f=oo(u,c,h);return u.inclusive?f<=0:f<0}(n.startAt,Te(n),i)||n.endAt&&!function(u,c,h){const f=oo(u,c,h);return u.inclusive?f>=0:f>0}(n.endAt,Te(n),i))}(r,t)}function Ul(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function sa(r){return(t,e)=>{let n=!1;for(const i of Te(r)){const o=ql(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function ql(r,t,e){const n=r.field.isKeyField()?L.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?ve(h,f):M()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M()}}/**
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
 */class ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Zt(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Ko(this.inner)}size(){return this.innerSize}}/**
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
 */const Bl=new X(L.comparator);function Ut(){return Bl}const ia=new X(L.comparator);function Ye(...r){let t=ia;for(const e of r)t=t.insert(e.key,e);return t}function oa(r){let t=ia;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function oe(){return en()}function aa(){return en()}function en(){return new ce(r=>r.toString(),(r,t)=>r.isEqual(t))}const jl=new X(L.comparator),zl=new nt(L.comparator);function U(...r){let t=zl;for(const e of r)t=t.add(e);return t}const Gl=new nt(q);function $l(){return Gl}/**
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
 */function Is(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hn(t)?"-0":t}}function ua(r){return{integerValue:""+r}}function Ql(r,t){return Tl(t)?ua(t):Is(r,t)}/**
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
 */class hr{constructor(){this._=void 0}}function Kl(r,t,e){return r instanceof Jn?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ar(o)&&(o=ur(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof ln?ca(r,t):r instanceof cn?ha(r,t):function(i,o){const u=la(i,o),c=co(u)+co(i.Pe);return ns(u)&&ns(i.Pe)?ua(c):Is(i.serializer,c)}(r,t)}function Wl(r,t,e){return r instanceof ln?ca(r,t):r instanceof cn?ha(r,t):e}function la(r,t){return r instanceof Zn?function(n){return ns(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Jn extends hr{}class ln extends hr{constructor(t){super(),this.elements=t}}function ca(r,t){const e=da(t);for(const n of r.elements)e.some(i=>kt(i,n))||e.push(n);return{arrayValue:{values:e}}}class cn extends hr{constructor(t){super(),this.elements=t}}function ha(r,t){let e=da(t);for(const n of r.elements)e=e.filter(i=>!kt(i,n));return{arrayValue:{values:e}}}class Zn extends hr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function co(r){return J(r.integerValue||r.doubleValue)}function da(r){return gs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Hl(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof ln&&i instanceof ln||n instanceof cn&&i instanceof cn?Ae(n.elements,i.elements,kt):n instanceof Zn&&i instanceof Zn?kt(n.Pe,i.Pe):n instanceof Jn&&i instanceof Jn}(r.transform,t.transform)}class Xl{constructor(t,e){this.version=t,this.transformResults=e}}class It{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new It}static exists(t){return new It(void 0,t)}static updateTime(t){return new It(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Qn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class dr{}function fa(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new fr(r.key,It.none()):new hn(r.key,r.data,It.none());{const e=r.data,n=Et.empty();let i=new nt(ut.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new te(r.key,n,new wt(i.toArray()),It.none())}}function Yl(r,t,e){r instanceof hn?function(i,o,u){const c=i.value.clone(),h=fo(i.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof te?function(i,o,u){if(!Qn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=fo(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(ma(i)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function nn(r,t,e,n){return r instanceof hn?function(o,u,c,h){if(!Qn(o.precondition,u))return c;const f=o.value.clone(),m=mo(o.fieldTransforms,h,u);return f.setAll(m),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof te?function(o,u,c,h){if(!Qn(o.precondition,u))return c;const f=mo(o.fieldTransforms,h,u),m=u.data;return m.setAll(ma(o)),m.setAll(f),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,c){return Qn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function Jl(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=la(n.transform,i||null);o!=null&&(e===null&&(e=Et.empty()),e.set(n.field,o))}return e||null}function ho(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ae(n,i,(o,u)=>Hl(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class hn extends dr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class te extends dr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ma(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function fo(r,t,e){const n=new Map;G(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,Wl(u,c,e[i]))}return n}function mo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,Kl(o,u,t))}return n}class fr extends dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zl extends dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Yl(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=nn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=nn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=aa();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const h=fa(u,c);h!==null&&n.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&Ae(this.mutations,t.mutations,(e,n)=>ho(e,n))&&Ae(this.baseMutations,t.baseMutations,(e,n)=>ho(e,n))}}class As{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){G(t.mutations.length===n.length);let i=function(){return jl}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new As(t,e,n,i)}}/**
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
 */class ec{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class nc{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}/**
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
 */class rc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Z,B;function sc(r){switch(r){default:return M();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function pa(r){if(r===void 0)return Ft("GRPC error has no .code"),P.UNKNOWN;switch(r){case Z.OK:return P.OK;case Z.CANCELLED:return P.CANCELLED;case Z.UNKNOWN:return P.UNKNOWN;case Z.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Z.INTERNAL:return P.INTERNAL;case Z.UNAVAILABLE:return P.UNAVAILABLE;case Z.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Z.NOT_FOUND:return P.NOT_FOUND;case Z.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Z.ABORTED:return P.ABORTED;case Z.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Z.DATA_LOSS:return P.DATA_LOSS;default:return M()}}(B=Z||(Z={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ic(){return new TextEncoder}/**
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
 */const oc=new ae([4294967295,4294967295],0);function po(r){const t=ic().encode(r),e=new Uo;return e.update(t),new Uint8Array(e.digest())}function go(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ae([e,n],0),new ae([i,o],0)]}class vs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Je(`Invalid padding: ${e}`);if(n<0)throw new Je(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Je(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Je(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=ae.fromNumber(this.Te)}Ee(t,e,n){let i=t.add(e.multiply(ae.fromNumber(n)));return i.compare(oc)===1&&(i=new ae([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=po(t),[n,i]=go(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new vs(o,i,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.Te===0)return;const e=po(t),[n,i]=go(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Je extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,dn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new mr(F.min(),i,new X(q),Ut(),U())}}class dn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new dn(n,e,U(),U(),U())}}/**
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
 */class Kn{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class ga{constructor(t,e){this.targetId=t,this.me=e}}class _a{constructor(t,e,n=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class _o{constructor(){this.fe=0,this.ge=yo(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),n=U();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:M()}}),new dn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=yo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ac{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ut(),this.qe=Bn(),this.Qe=Bn(),this.Ke=new X(q)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.je(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,n=t.me.count,i=this.Ye(e);if(i){const o=i.target;if(ss(o))if(n===0){const u=new L(o.path);this.We(e,u,gt.newNoDocument(u,F.min()))}else G(n===1);else{const u=this.Ze(e);if(u!==n){const c=this.Xe(t),h=c?this.et(c,t,u):1;if(h!==0){this.He(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Xt(n).toUint8Array()}catch(h){if(h instanceof Wo)return Ie("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new vs(u,i,o)}catch(h){return Ie(h instanceof Je?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Te===0?null:c}et(t,e,n){return e.me.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.Le.nt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.We(e,o,null),i++)}),i}it(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Ye(u);if(c){if(o.current&&ss(c.target)){const h=new L(c.target.path);this.st(h).has(u)||this.ot(u,h)||this.We(u,h,gt.newNoDocument(h,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let n=U();this.Qe.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this.Ye(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const i=new mr(t,e,this.Ke,this.ke,n);return this.ke=Ut(),this.qe=Bn(),this.Qe=Bn(),this.Ke=new X(q),i}Ue(t,e){if(!this.je(t))return;const n=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const i=this.ze(t);this.ot(t,e)?i.Fe(e,1):i.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new _o,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new nt(q),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new nt(q),this.qe=this.qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new _o),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Bn(){return new X(L.comparator)}function yo(){return new X(L.comparator)}const uc={asc:"ASCENDING",desc:"DESCENDING"},lc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cc={and:"AND",or:"OR"};class hc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function os(r,t){return r.useProto3Json||or(t)?t:{value:t}}function tr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ya(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function dc(r,t){return tr(r,t.toTimestamp())}function bt(r){return G(!!r),F.fromTimestamp(function(e){const n=Ht(e);return new et(n.seconds,n.nanos)}(r))}function ws(r,t){return as(r,t).canonicalString()}function as(r,t){const e=function(i){return new W(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Ta(r){const t=W.fromString(r);return G(Ra(t)),t}function us(r,t){return ws(r.databaseId,t.path)}function Hr(r,t){const e=Ta(t);if(e.get(1)!==r.databaseId.projectId)throw new b(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new b(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new L(Ia(e))}function Ea(r,t){return ws(r.databaseId,t)}function fc(r){const t=Ta(r);return t.length===4?W.emptyPath():Ia(t)}function ls(r){return new W(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ia(r){return G(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function To(r,t,e){return{name:us(r,t),fields:e.value.mapValue.fields}}function mc(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(G(m===void 0||typeof m=="string"),lt.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array),lt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const m=f.code===void 0?P.UNKNOWN:pa(f.code);return new b(m,f.message||"")}(u);e=new _a(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Hr(r,n.document.name),o=bt(n.document.updateTime),u=n.document.createTime?bt(n.document.createTime):F.min(),c=new Et({mapValue:{fields:n.document.fields}}),h=gt.newFoundDocument(i,o,u,c),f=n.targetIds||[],m=n.removedTargetIds||[];e=new Kn(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Hr(r,n.document),o=n.readTime?bt(n.readTime):F.min(),u=gt.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Kn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Hr(r,n.document),o=n.removedTargetIds||[];e=new Kn([],o,i,null)}else{if(!("filter"in t))return M();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new rc(i,o),c=n.targetId;e=new ga(c,u)}}return e}function pc(r,t){let e;if(t instanceof hn)e={update:To(r,t.key,t.value)};else if(t instanceof fr)e={delete:us(r,t.key)};else if(t instanceof te)e={update:To(r,t.key,t.data),updateMask:wc(t.fieldMask)};else{if(!(t instanceof Zl))return M();e={verify:us(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof Jn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ln)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof cn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Zn)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw M()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:dc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(r,t.precondition)),e}function gc(r,t){return r&&r.length>0?(G(t!==void 0),r.map(e=>function(i,o){let u=i.updateTime?bt(i.updateTime):bt(o);return u.isEqual(F.min())&&(u=bt(o)),new Xl(u,i.transformResults||[])}(e,t))):[]}function _c(r,t){return{documents:[Ea(r,t.path)]}}function Aa(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ea(r,i);const o=function(f){if(f.length!==0)return wa(Vt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(m=>function(w){return{field:$t(w.field),direction:Ic(w.dir)}}(m))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=os(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ct:e,parent:i}}function yc(r,t,e,n){const{ct:i,parent:o}=Aa(r,t),u={},c=[];let h=0;return e.forEach(f=>{const m="aggregate_"+h++;u[m]=f.alias,f.aggregateType==="count"?c.push({alias:m,count:{}}):f.aggregateType==="avg"?c.push({alias:m,avg:{field:$t(f.fieldPath)}}):f.aggregateType==="sum"&&c.push({alias:m,sum:{field:$t(f.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:i.structuredQuery},parent:i.parent},lt:u,parent:o}}function Tc(r){let t=fc(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){G(n===1);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(A){const w=va(A);return w instanceof Vt&&Jo(w)?w.getFilters():[w]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(w=>function(k){return new un(ye(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(A){let w;return w=typeof A=="object"?A.value:A,or(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(A){const w=!!A.before,C=A.values||[];return new Re(C,w)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const w=!A.before,C=A.values||[];return new Re(C,w)}(e.endAt)),Ol(t,i,u,o,c,"F",h,f)}function Ec(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function va(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ye(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=ye(e.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ye(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ye(e.unaryFilter.field);return tt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(e){return tt.create(ye(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Vt.create(e.compositeFilter.filters.map(n=>va(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(r):M()}function Ic(r){return uc[r]}function Ac(r){return lc[r]}function vc(r){return cc[r]}function $t(r){return{fieldPath:r.canonicalString()}}function ye(r){return ut.fromServerFormat(r.fieldPath)}function wa(r){return r instanceof tt?function(e){if(e.op==="=="){if(io(e.value))return{unaryFilter:{field:$t(e.field),op:"IS_NAN"}};if(so(e.value))return{unaryFilter:{field:$t(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(io(e.value))return{unaryFilter:{field:$t(e.field),op:"IS_NOT_NAN"}};if(so(e.value))return{unaryFilter:{field:$t(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$t(e.field),op:Ac(e.op),value:e.value}}}(r):r instanceof Vt?function(e){const n=e.getFilters().map(i=>wa(i));return n.length===1?n[0]:{compositeFilter:{op:vc(e.op),filters:n}}}(r):M()}function wc(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ra(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Qt{constructor(t,e,n,i,o=F.min(),u=F.min(),c=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Rc{constructor(t){this.ht=t}}function Pc(r){const t=Tc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Yn(t,t.limit,"L"):t}/**
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
 */class Vc{constructor(){this.ln=new Cc}addToCollectionParentIndex(t,e){return this.ln.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Wt.min())}updateCollectionGroup(t,e,n){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class Cc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new nt(W.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new nt(W.comparator)).toArray()}}/**
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
 */const Eo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(41943040,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
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
 */class Pe{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Pe(0)}static Qn(){return new Pe(-1)}}/**
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
 */function Io([r,t],[e,n]){const i=q(r,e);return i===0?q(t,n):i}class Sc{constructor(t){this.Gn=t,this.buffer=new nt(Io),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Io(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Dc{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){N("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){be(e)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await De(e)}await this.Yn(3e5)})}}class bc{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return V.resolve(ir.oe);const n=new Sc(e);return this.Zn.forEachTarget(t,i=>n.Hn(i.sequenceNumber)).next(()=>this.Zn.er(t,i=>n.Hn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Zn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Eo)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Eo):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let n,i,o,u,c,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i))).next(A=>(n=A,c=Date.now(),this.removeTargets(t,n,e))).next(A=>(o=A,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(A=>(f=Date.now(),ge()<=Ot.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-m}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${A} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A})))}}function kc(r,t){return new bc(r,t)}/**
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
 */class Nc{constructor(){this.changes=new ce(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?V.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class xc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Lc{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&nn(n.mutation,i,wt.empty(),et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,U()).next(()=>n))}getLocalViewOfDocuments(t,e,n=U()){const i=oe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=Ye();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=oe();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,U()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,i){let o=Ut();const u=en(),c=function(){return en()}();return e.forEach((h,f)=>{const m=n.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof te)?o=o.insert(f.key,f):m!==void 0?(u.set(f.key,m.mutation.getFieldMask()),nn(m.mutation,f,m.mutation.getFieldMask(),et.now())):u.set(f.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>u.set(f,m)),e.forEach((f,m)=>{var A;return c.set(f,new xc(m,(A=u.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const n=en();let i=new X((u,c)=>u-c),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=n.get(h)||wt.empty();m=c.applyToLocalView(f,m),n.set(h,m);const A=(i.get(c.batchId)||U()).add(h);i=i.insert(c.batchId,A)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,A=aa();m.forEach(w=>{if(!o.has(w)){const C=fa(e.get(w),n.get(w));C!==null&&A.set(w,C),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return V.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return L.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Es(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):V.resolve(oe());let c=-1,h=o;return u.next(f=>V.forEach(f,(m,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(m)?V.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,U())).next(m=>({batchId:c,changes:oa(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(n=>{let i=Ye();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=Ye();return this.indexManager.getCollectionParents(t,o).next(c=>V.forEach(c,h=>{const f=function(A,w){return new le(w,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(m=>{m.forEach((A,w)=>{u=u.insert(A,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((h,f)=>{const m=f.getKey();u.get(m)===null&&(u=u.insert(m,gt.newInvalidDocument(m)))});let c=Ye();return u.forEach((h,f)=>{const m=o.get(h);m!==void 0&&nn(m.mutation,f,wt.empty(),et.now()),cr(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class Mc{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return V.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:bt(i.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(i){return{name:i.name,query:Pc(i.bundledQuery),readTime:bt(i.readTime)}}(e)),V.resolve()}}/**
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
 */class Oc{constructor(){this.overlays=new X(L.comparator),this.Er=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const n=oe();return V.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.Tt(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Er.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(n)),V.resolve()}getOverlaysForCollection(t,e,n){const i=oe(),o=e.length+1,u=new L(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new X((f,m)=>f-m);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let m=o.get(f.largestBatchId);m===null&&(m=oe(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=oe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=i)););return V.resolve(c)}Tt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Er.get(i.largestBatchId).delete(n.key);this.Er.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new ec(e,n));let o=this.Er.get(e);o===void 0&&(o=U(),this.Er.set(e,o)),this.Er.set(e,o.add(n.key))}}/**
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
 */class Fc{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class Rs{constructor(){this.dr=new nt(st.Ar),this.Rr=new nt(st.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const n=new st(t,e);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.gr(new st(t,e))}pr(t,e){t.forEach(n=>this.removeReference(n,e))}yr(t){const e=new L(new W([])),n=new st(e,t),i=new st(e,t+1),o=[];return this.Rr.forEachInRange([n,i],u=>{this.gr(u),o.push(u.key)}),o}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new L(new W([])),n=new st(e,t),i=new st(e,t+1);let o=U();return this.Rr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),n=this.dr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class st{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return L.comparator(t.key,e.key)||q(t.br,e.br)}static Vr(t,e){return q(t.br,e.br)||L.comparator(t.key,e.key)}}/**
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
 */class Uc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new nt(st.Ar)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new tc(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.vr=this.vr.add(new st(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return V.resolve(u)}lookupMutationBatch(t,e){return V.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Fr(n),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([n,i],u=>{const c=this.Cr(u.br);o.push(c)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new nt(q);return e.forEach(i=>{const o=new st(i,0),u=new st(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,u],c=>{n=n.add(c.br)})}),V.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;L.isDocumentKey(o)||(o=o.child(""));const u=new st(new L(o),0);let c=new nt(q);return this.vr.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.br)),!0)},u),V.resolve(this.Mr(c))}Mr(t){const e=[];return t.forEach(n=>{const i=this.Cr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){G(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return V.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.vr=n})}Ln(t){}containsKey(t,e){const n=new st(e,0),i=this.vr.firstAfterOrEqual(n);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class qc{constructor(t){this.Nr=t,this.docs=function(){return new X(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return V.resolve(n?n.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let n=Ut();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))}),V.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Ut();const u=e.path,c=new L(u.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||pl(ml(m),n)<=0||(i.has(m.key)||cr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,n,i){M()}Lr(t,e){return V.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Bc(this)}getSize(t){return V.resolve(this.size)}}class Bc extends Nc{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.hr.addEntry(t,i)):this.hr.removeEntry(n)}),V.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
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
 */class jc{constructor(t){this.persistence=t,this.Br=new ce(e=>_s(e),ys),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.kr=0,this.qr=new Rs,this.targetCount=0,this.Qr=Pe.qn()}forEachTarget(t,e){return this.Br.forEach((n,i)=>e(i)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),V.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new Pe(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Un(e),V.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Br.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Br.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const n=this.Br.get(e)||null;return V.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),V.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return V.resolve(n)}containsKey(t,e){return V.resolve(this.qr.containsKey(e))}}/**
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
 */class Pa{constructor(t,e){this.Kr={},this.overlays={},this.$r=new ir(0),this.Ur=!1,this.Ur=!0,this.Wr=new Fc,this.referenceDelegate=t(this),this.Gr=new jc(this),this.indexManager=new Vc,this.remoteDocumentCache=function(i){return new qc(i)}(n=>this.referenceDelegate.zr(n)),this.serializer=new Rc(e),this.jr=new Mc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Oc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new Uc(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const i=new zc(this.$r.next());return this.referenceDelegate.Hr(),n(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(t,e){return V.or(Object.values(this.Kr).map(n=>()=>n.containsKey(t,e)))}}class zc extends _l{constructor(t){super(),this.currentSequenceNumber=t}}class Ps{constructor(t){this.persistence=t,this.Zr=new Rs,this.Xr=null}static ei(t){return new Ps(t)}get ti(){if(this.Xr)return this.Xr;throw M()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),V.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),V.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(i=>this.ti.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ti,n=>{const i=L.fromPath(n);return this.ni(t,i).next(o=>{o||e.removeEntry(i,F.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(n=>{n?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return V.or([()=>V.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class er{constructor(t,e){this.persistence=t,this.ri=new ce(n=>El(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=kc(this,e)}static ei(t,e){return new er(t,e)}Hr(){}Jr(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}nr(t){let e=0;return this.er(t,n=>{e++}).next(()=>e)}er(t,e){return V.forEach(this.ri,(n,i)=>this.ir(t,n,i).next(o=>o?V.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Lr(t,u=>this.ir(t,u,e).next(c=>{c||(n++,o.removeEntry(u,F.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),V.resolve()}removeReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),V.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Gn(t.data.value)),e}ir(t,e,n){return V.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.ri.get(e);return V.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Vs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=i}static zi(t,e){let n=U(),i=U();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Vs(t,e.fromCache,n,i)}}/**
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
 */class Gc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class $c{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return tl()?8:yl(el())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.Xi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.es(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Gc;return this.ts(t,e,u).next(c=>{if(o.result=c,this.Hi)return this.ns(t,e,u,c.size)})}).next(()=>o.result)}ns(t,e,n,i){return n.documentReadCount<this.Ji?(ge()<=Ot.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",_e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),V.resolve()):(ge()<=Ot.DEBUG&&N("QueryEngine","Query:",_e(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Yi*i?(ge()<=Ot.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",_e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Dt(e))):V.resolve())}Xi(t,e){if(lo(e))return V.resolve(null);let n=Dt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Yn(e,null,"F"),n=Dt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=U(...o);return this.Zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.rs(e,c);return this.ss(e,f,u,h.readTime)?this.Xi(t,Yn(e,null,"F")):this.os(t,f,e,h)}))})))}es(t,e,n,i){return lo(e)||i.isEqual(F.min())?V.resolve(null):this.Zi.getDocuments(t,n).next(o=>{const u=this.rs(e,o);return this.ss(e,u,n,i)?V.resolve(null):(ge()<=Ot.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_e(e)),this.os(t,u,e,fl(i,-1)).next(c=>c))})}rs(t,e){let n=new nt(sa(t));return e.forEach((i,o)=>{cr(t,o)&&(n=n.add(o))}),n}ss(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(t,e,n){return ge()<=Ot.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",_e(e)),this.Zi.getDocumentsMatchingQuery(t,e,Wt.min(),n)}os(t,e,n,i){return this.Zi.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */class Qc{constructor(t,e,n,i){this.persistence=t,this._s=e,this.serializer=i,this.us=new X(q),this.cs=new ce(o=>_s(o),ys),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Lc(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function Kc(r,t,e,n){return new Qc(r,t,e,n)}async function Va(r,t){const e=O(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let h=U();for(const f of i){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(f=>({Ts:f,removedBatchIds:u,addedBatchIds:c}))})})}function Wc(r,t){const e=O(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const A=f.batch,w=A.keys();let C=V.resolve();return w.forEach(k=>{C=C.next(()=>m.getEntry(h,k)).next(x=>{const D=f.docVersions.get(k);G(D!==null),x.version.compareTo(D)<0&&(A.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),m.addEntry(x)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(h,A))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=U();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Ca(r){const t=O(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function Hc(r,t){const e=O(r),n=t.snapshotVersion;let i=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.hs.newChangeBuffer({trackRemovals:!0});i=e.us;const c=[];t.targetChanges.forEach((m,A)=>{const w=i.get(A);if(!w)return;c.push(e.Gr.removeMatchingKeys(o,m.removedDocuments,A).next(()=>e.Gr.addMatchingKeys(o,m.addedDocuments,A)));let C=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?C=C.withResumeToken(lt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,n)),i=i.insert(A,C),function(x,D,j){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(w,C,m)&&c.push(e.Gr.updateTargetData(o,C))});let h=Ut(),f=U();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Xc(o,u,t.documentUpdates).next(m=>{h=m.Is,f=m.Es})),!n.isEqual(F.min())){const m=e.Gr.getLastRemoteSnapshotVersion(o).next(A=>e.Gr.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(m)}return V.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.us=i,o))}function Xc(r,t,e){let n=U(),i=U();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Ut();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Is:u,Es:i}})}function Yc(r,t){const e=O(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Jc(r,t){const e=O(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Gr.getTargetData(n,t).next(o=>o?(i=o,V.resolve(i)):e.Gr.allocateTargetId(n).next(u=>(i=new Qt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Gr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.us.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.us=e.us.insert(n.targetId,n),e.cs.set(t,n.targetId)),n})}async function cs(r,t,e){const n=O(r),i=n.us.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!be(u))throw u;N("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.us=n.us.remove(t),n.cs.delete(i.target)}function Ao(r,t,e){const n=O(r);let i=F.min(),o=U();return n.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,m){const A=O(h),w=A.cs.get(m);return w!==void 0?V.resolve(A.us.get(w)):A.Gr.getTargetData(f,m)}(n,u,Dt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>n._s.getDocumentsMatchingQuery(u,t,e?i:F.min(),e?o:U())).next(c=>(Zc(n,Ul(t),c),{documents:c,ds:o})))}function Zc(r,t,e){let n=r.ls.get(t)||F.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.ls.set(t,n)}class vo{constructor(){this.activeTargetIds=$l()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class th{constructor(){this._o=new vo,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new vo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class eh{uo(t){}shutdown(){}}/**
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
 */class wo{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let jn=null;function Xr(){return jn===null?jn=function(){return 268435456+Math.round(2147483648*Math.random())}():jn++,"0x"+jn.toString(16)}/**
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
 */const nh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class rh{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
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
 */const mt="WebChannelConnection";class sh extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+e.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(e,n,i,o,u){const c=Xr(),h=this.No(e,n.toUriEncodedString());N("RestConnection",`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,o,u),this.Bo(e,h,f,i).then(m=>(N("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw Ie("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",i),m})}ko(e,n,i,o,u,c){return this.Oo(e,n,i,o,u)}Lo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Se}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),i&&i.headers.forEach((o,u)=>e[u]=o)}No(e,n){const i=nh[e];return`${this.Fo}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,n,i){const o=Xr();return new Promise((u,c)=>{const h=new qo;h.setWithCredentials(!0),h.listenOnce(Bo.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case zn.NO_ERROR:const m=h.getResponseJson();N(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),u(m);break;case zn.TIMEOUT:N(mt,`RPC '${t}' ${o} timed out`),c(new b(P.DEADLINE_EXCEEDED,"Request time out"));break;case zn.HTTP_ERROR:const A=h.getStatus();if(N(mt,`RPC '${t}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const C=w==null?void 0:w.error;if(C&&C.status&&C.message){const k=function(D){const j=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN}(C.status);c(new b(k,C.message))}else c(new b(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new b(P.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{N(mt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);N(mt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,n,15)})}qo(t,e,n){const i=Xr(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Go(),c=zo(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Lo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");N(mt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const A=u.createWebChannel(m,h);let w=!1,C=!1;const k=new rh({Eo:D=>{C?N(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(w||(N(mt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),w=!0),N(mt,`RPC '${t}' stream ${i} sending:`,D),A.send(D))},Ao:()=>A.close()}),x=(D,j,$)=>{D.listen(j,Q=>{try{$(Q)}catch(rt){setTimeout(()=>{throw rt},0)}})};return x(A,Xe.EventType.OPEN,()=>{C||(N(mt,`RPC '${t}' stream ${i} transport opened.`),k.So())}),x(A,Xe.EventType.CLOSE,()=>{C||(C=!0,N(mt,`RPC '${t}' stream ${i} transport closed`),k.Do())}),x(A,Xe.EventType.ERROR,D=>{C||(C=!0,Ie(mt,`RPC '${t}' stream ${i} transport errored:`,D),k.Do(new b(P.UNAVAILABLE,"The operation could not be completed")))}),x(A,Xe.EventType.MESSAGE,D=>{var j;if(!C){const $=D.data[0];G(!!$);const Q=$,rt=(Q==null?void 0:Q.error)||((j=Q[0])===null||j===void 0?void 0:j.error);if(rt){N(mt,`RPC '${t}' stream ${i} received error:`,rt);const Nt=rt.status;let it=function(_){const y=Z[_];if(y!==void 0)return pa(y)}(Nt),E=rt.message;it===void 0&&(it=P.INTERNAL,E="Unknown error status: "+Nt+" with message "+rt.message),C=!0,k.Do(new b(it,E)),A.close()}else N(mt,`RPC '${t}' stream ${i} received:`,$),k.vo($)}}),x(c,jo.STAT_EVENT,D=>{D.stat===ts.PROXY?N(mt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===ts.NOPROXY&&N(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}function Yr(){return typeof document<"u"?document:null}/**
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
 */function pr(r){return new hc(r,!0)}/**
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
 */class Sa{constructor(t,e,n=1e3,i=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),i=Math.max(0,e-n);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Da{constructor(t,e,n,i,o,u,c,h){this.li=t,this.Yo=n,this.Zo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Sa(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Ft(e.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Xo===e&&this.I_(n,i)},n=>{t(()=>{const i=new b(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(i)})})}I_(t,e){const n=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{n(()=>this.E_(i))}),this.stream.onMessage(i=>{n(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return N("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ih extends Da{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=mc(this.serializer,t),n=function(o){if(!("targetChange"in o))return F.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?F.min():u.readTime?bt(u.readTime):F.min()}(t);return this.listener.R_(e,n)}V_(t){const e={};e.database=ls(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=ss(h)?{documents:_c(o,h)}:{query:Aa(o,h).ct},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=ya(o,u.resumeToken);const f=os(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(F.min())>0){c.readTime=tr(o,u.snapshotVersion.toTimestamp());const f=os(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=Ec(this.serializer,t);n&&(e.labels=n),this.c_(e)}m_(t){const e={};e.database=ls(this.serializer),e.removeTarget=t,this.c_(e)}}class oh extends Da{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return G(!!t.streamToken),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){G(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=gc(t.writeResults,t.commitTime),n=bt(t.commitTime);return this.listener.y_(n,e)}w_(){const t={};t.database=ls(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>pc(this.serializer,n))};this.c_(e)}}/**
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
 */class ah extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Oo(t,as(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(P.UNKNOWN,o.toString())})}ko(t,e,n,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.ko(t,as(e,n),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new b(P.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class uh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ft(e),this.C_=!1):N("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class lh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(u=>{n.enqueueAndForget(async()=>{he(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=O(h);f.k_.add(4),await fn(f),f.K_.set("Unknown"),f.k_.delete(4),await gr(f)}(this))})}),this.K_=new uh(n,i)}}async function gr(r){if(he(r))for(const t of r.q_)await t(!0)}async function fn(r){for(const t of r.q_)await t(!1)}function ba(r,t){const e=O(r);e.B_.has(t.targetId)||(e.B_.set(t.targetId,t),bs(e)?Ds(e):ke(e).s_()&&Ss(e,t))}function Cs(r,t){const e=O(r),n=ke(e);e.B_.delete(t),n.s_()&&ka(e,t),e.B_.size===0&&(n.s_()?n.a_():he(e)&&e.K_.set("Unknown"))}function Ss(r,t){if(r.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ke(r).V_(t)}function ka(r,t){r.U_.xe(t),ke(r).m_(t)}function Ds(r){r.U_=new ac({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>r.B_.get(t)||null,nt:()=>r.datastore.serializer.databaseId}),ke(r).start(),r.K_.F_()}function bs(r){return he(r)&&!ke(r).i_()&&r.B_.size>0}function he(r){return O(r).k_.size===0}function Na(r){r.U_=void 0}async function ch(r){r.K_.set("Online")}async function hh(r){r.B_.forEach((t,e)=>{Ss(r,t)})}async function dh(r,t){Na(r),bs(r)?(r.K_.O_(t),Ds(r)):r.K_.set("Unknown")}async function fh(r,t,e){if(r.K_.set("Online"),t instanceof _a&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.B_.delete(c),i.U_.removeTarget(c))}(r,t)}catch(n){N("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await nr(r,n)}else if(t instanceof Kn?r.U_.$e(t):t instanceof ga?r.U_.Je(t):r.U_.Ge(t),!e.isEqual(F.min()))try{const n=await Ca(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.U_.it(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.B_.get(f);m&&o.B_.set(f,m.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const m=o.B_.get(h);if(!m)return;o.B_.set(h,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),ka(o,h);const A=new Qt(m.target,h,f,m.sequenceNumber);Ss(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){N("RemoteStore","Failed to raise snapshot:",n),await nr(r,n)}}async function nr(r,t,e){if(!be(t))throw t;r.k_.add(1),await fn(r),r.K_.set("Offline"),e||(e=()=>Ca(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await e(),r.k_.delete(1),await gr(r)})}function xa(r,t){return t().catch(e=>nr(r,e,t))}async function _r(r){const t=O(r),e=Jt(t);let n=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;mh(t);)try{const i=await Yc(t.localStore,n);if(i===null){t.L_.length===0&&e.a_();break}n=i.batchId,ph(t,i)}catch(i){await nr(t,i)}La(t)&&Ma(t)}function mh(r){return he(r)&&r.L_.length<10}function ph(r,t){r.L_.push(t);const e=Jt(r);e.s_()&&e.f_&&e.g_(t.mutations)}function La(r){return he(r)&&!Jt(r).i_()&&r.L_.length>0}function Ma(r){Jt(r).start()}async function gh(r){Jt(r).w_()}async function _h(r){const t=Jt(r);for(const e of r.L_)t.g_(e.mutations)}async function yh(r,t,e){const n=r.L_.shift(),i=As.from(n,t,e);await xa(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await _r(r)}async function Th(r,t){t&&Jt(r).f_&&await async function(n,i){if(function(u){return sc(u)&&u!==P.ABORTED}(i.code)){const o=n.L_.shift();Jt(n).__(),await xa(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await _r(n)}}(r,t),La(r)&&Ma(r)}async function Ro(r,t){const e=O(r);e.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const n=he(e);e.k_.add(3),await fn(e),n&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await gr(e)}async function Eh(r,t){const e=O(r);t?(e.k_.delete(2),await gr(e)):t||(e.k_.add(2),await fn(e),e.K_.set("Unknown"))}function ke(r){return r.W_||(r.W_=function(e,n,i){const o=O(e);return o.b_(),new ih(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Ro:ch.bind(null,r),mo:hh.bind(null,r),po:dh.bind(null,r),R_:fh.bind(null,r)}),r.q_.push(async t=>{t?(r.W_.__(),bs(r)?Ds(r):r.K_.set("Unknown")):(await r.W_.stop(),Na(r))})),r.W_}function Jt(r){return r.G_||(r.G_=function(e,n,i){const o=O(e);return o.b_(),new oh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:gh.bind(null,r),po:Th.bind(null,r),p_:_h.bind(null,r),y_:yh.bind(null,r)}),r.q_.push(async t=>{t?(r.G_.__(),await _r(r)):(await r.G_.stop(),r.L_.length>0&&(N("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
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
 */class ks{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new St,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new ks(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ns(r,t){if(Ft("AsyncQueue",`${t}: ${r}`),be(r))return new b(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ee{static emptySet(t){return new Ee(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||L.comparator(e.key,n.key):(e,n)=>L.comparator(e.key,n.key),this.keyedMap=Ye(),this.sortedSet=new X(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ee)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ee;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class Po{constructor(){this.z_=new X(L.comparator)}track(t){const e=t.doc.key,n=this.z_.get(e);n?t.type!==0&&n.type===3?this.z_=this.z_.insert(e,t):t.type===3&&n.type!==1?this.z_=this.z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.z_=this.z_.remove(e):t.type===1&&n.type===2?this.z_=this.z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):M():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ve{constructor(t,e,n,i,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Ve(t,e,Ee.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&lr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Ih{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class Ah{constructor(){this.queries=Vo(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,n){const i=O(e),o=i.queries;i.queries=Vo(),o.forEach((u,c)=>{for(const h of c.J_)h.onError(n)})})(this,new b(P.ABORTED,"Firestore shutting down"))}}function Vo(){return new ce(r=>ra(r),lr)}async function Oa(r,t){const e=O(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.Y_()&&t.Z_()&&(n=2):(o=new Ih,n=t.Z_()?0:1);try{switch(n){case 0:o.H_=await e.onListen(i,!0);break;case 1:o.H_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=Ns(u,`Initialization of query '${_e(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.J_.push(t),t.ea(e.onlineState),o.H_&&t.ta(o.H_)&&xs(e)}async function Fa(r,t){const e=O(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.J_.indexOf(t);u>=0&&(o.J_.splice(u,1),o.J_.length===0?i=t.Z_()?0:1:!o.Y_()&&t.Z_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function vh(r,t){const e=O(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.J_)c.ta(i)&&(n=!0);u.H_=i}}n&&xs(e)}function wh(r,t,e){const n=O(r),i=n.queries.get(t);if(i)for(const o of i.J_)o.onError(e);n.queries.delete(t)}function xs(r){r.X_.forEach(t=>{t.next()})}var hs,Co;(Co=hs||(hs={})).na="default",Co.Cache="cache";class Ua{constructor(t,e,n){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Ve(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache||!this.Z_())return!0;const n=e!=="Offline";return(!this.options.ua||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}aa(t){t=Ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==hs.Cache}}/**
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
 */class qa{constructor(t){this.key=t}}class Ba{constructor(t){this.key=t}}class Rh{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=U(),this.mutatedKeys=U(),this.Va=sa(t),this.ma=new Ee(this.Va)}get fa(){return this.da}ga(t,e){const n=e?e.pa:new Po,i=e?e.ma:this.ma;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,A)=>{const w=i.get(m),C=cr(this.query,A)?A:null,k=!!w&&this.mutatedKeys.has(w.key),x=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;w&&C?w.data.isEqual(C.data)?k!==x&&(n.track({type:3,doc:C}),D=!0):this.ya(w,C)||(n.track({type:2,doc:C}),D=!0,(h&&this.Va(C,h)>0||f&&this.Va(C,f)<0)&&(c=!0)):!w&&C?(n.track({type:0,doc:C}),D=!0):w&&!C&&(n.track({type:1,doc:w}),D=!0,(h||f)&&(c=!0)),D&&(C?(u=u.add(C),o=x?o.add(m):o.delete(m)):(u=u.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const m=this.query.limitType==="F"?u.last():u.first();u=u.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{ma:u,pa:n,ss:c,mutatedKeys:o}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const u=t.pa.j_();u.sort((m,A)=>function(C,k){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return x(C)-x(k)}(m.type,A.type)||this.Va(m.doc,A.doc)),this.wa(n),i=i!=null&&i;const c=e&&!i?this.Sa():[],h=this.Ra.size===0&&this.current&&!i?1:0,f=h!==this.Aa;return this.Aa=h,u.length!==0||f?{snapshot:new Ve(this.query,t.ma,o,u,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Po,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(e=>this.da=this.da.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=U(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const e=[];return t.forEach(n=>{this.Ra.has(n)||e.push(new Ba(n))}),this.Ra.forEach(n=>{t.has(n)||e.push(new qa(n))}),e}va(t){this.da=t.ds,this.Ra=U();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return Ve.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Ph{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Vh{constructor(t){this.key=t,this.Fa=!1}}class Ch{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new ce(c=>ra(c),lr),this.Oa=new Map,this.Na=new Set,this.La=new X(L.comparator),this.Ba=new Map,this.ka=new Rs,this.qa={},this.Qa=new Map,this.Ka=Pe.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Sh(r,t,e=!0){const n=Ka(r);let i;const o=n.xa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Ca()):i=await ja(n,t,e,!0),i}async function Dh(r,t){const e=Ka(r);await ja(e,t,!0,!1)}async function ja(r,t,e,n){const i=await Jc(r.localStore,Dt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await bh(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&ba(r.remoteStore,i),c}async function bh(r,t,e,n,i){r.Ua=(A,w,C)=>async function(x,D,j,$){let Q=D.view.ga(j);Q.ss&&(Q=await Ao(x.localStore,D.query,!1).then(({documents:E})=>D.view.ga(E,Q)));const rt=$&&$.targetChanges.get(D.targetId),Nt=$&&$.targetMismatches.get(D.targetId)!=null,it=D.view.applyChanges(Q,x.isPrimaryClient,rt,Nt);return Do(x,D.targetId,it.ba),it.snapshot}(r,A,w,C);const o=await Ao(r.localStore,t,!0),u=new Rh(t,o.ds),c=u.ga(o.documents),h=dn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=u.applyChanges(c,r.isPrimaryClient,h);Do(r,e,f.ba);const m=new Ph(t,e,u);return r.xa.set(t,m),r.Oa.has(e)?r.Oa.get(e).push(t):r.Oa.set(e,[t]),f.snapshot}async function kh(r,t,e){const n=O(r),i=n.xa.get(t),o=n.Oa.get(i.targetId);if(o.length>1)return n.Oa.set(i.targetId,o.filter(u=>!lr(u,t))),void n.xa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await cs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Cs(n.remoteStore,i.targetId),ds(n,i.targetId)}).catch(De)):(ds(n,i.targetId),await cs(n.localStore,i.targetId,!0))}async function Nh(r,t){const e=O(r),n=e.xa.get(t),i=e.Oa.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Cs(e.remoteStore,n.targetId))}async function xh(r,t,e){const n=Bh(r);try{const i=await function(u,c){const h=O(u),f=et.now(),m=c.reduce((C,k)=>C.add(k.key),U());let A,w;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=Ut(),x=U();return h.hs.getEntries(C,m).next(D=>{k=D,k.forEach((j,$)=>{$.isValidDocument()||(x=x.add(j))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,k)).next(D=>{A=D;const j=[];for(const $ of c){const Q=Jl($,A.get($.key).overlayedDocument);Q!=null&&j.push(new te($.key,Q,Ho(Q.value.mapValue),It.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,j,c)}).next(D=>{w=D;const j=D.applyToLocalDocumentSet(A,x);return h.documentOverlayCache.saveOverlays(C,D.batchId,j)})}).then(()=>({batchId:w.batchId,changes:oa(A)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,c,h){let f=u.qa[u.currentUser.toKey()];f||(f=new X(q)),f=f.insert(c,h),u.qa[u.currentUser.toKey()]=f}(n,i.batchId,e),await mn(n,i.changes),await _r(n.remoteStore)}catch(i){const o=Ns(i,"Failed to persist write");e.reject(o)}}async function za(r,t){const e=O(r);try{const n=await Hc(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Ba.get(o);u&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Fa=!0:i.modifiedDocuments.size>0?G(u.Fa):i.removedDocuments.size>0&&(G(u.Fa),u.Fa=!1))}),await mn(e,n,t)}catch(n){await De(n)}}function So(r,t,e){const n=O(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.xa.forEach((o,u)=>{const c=u.view.ea(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const h=O(u);h.onlineState=c;let f=!1;h.queries.forEach((m,A)=>{for(const w of A.J_)w.ea(c)&&(f=!0)}),f&&xs(h)}(n.eventManager,t),i.length&&n.Ma.R_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Lh(r,t,e){const n=O(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Ba.get(t),o=i&&i.key;if(o){let u=new X(L.comparator);u=u.insert(o,gt.newNoDocument(o,F.min()));const c=U().add(o),h=new mr(F.min(),new Map,new X(q),u,c);await za(n,h),n.La=n.La.remove(o),n.Ba.delete(t),Ls(n)}else await cs(n.localStore,t,!1).then(()=>ds(n,t,e)).catch(De)}async function Mh(r,t){const e=O(r),n=t.batch.batchId;try{const i=await Wc(e.localStore,t);$a(e,n,null),Ga(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await mn(e,i)}catch(i){await De(i)}}async function Oh(r,t,e){const n=O(r);try{const i=await function(u,c){const h=O(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(A=>(G(A!==null),m=A.keys(),h.mutationQueue.removeMutationBatch(f,A))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(n.localStore,t);$a(n,t,e),Ga(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await mn(n,i)}catch(i){await De(i)}}function Ga(r,t){(r.Qa.get(t)||[]).forEach(e=>{e.resolve()}),r.Qa.delete(t)}function $a(r,t,e){const n=O(r);let i=n.qa[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.qa[n.currentUser.toKey()]=i}}function ds(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Oa.get(t))r.xa.delete(n),e&&r.Ma.Wa(n,e);r.Oa.delete(t),r.isPrimaryClient&&r.ka.yr(t).forEach(n=>{r.ka.containsKey(n)||Qa(r,n)})}function Qa(r,t){r.Na.delete(t.path.canonicalString());const e=r.La.get(t);e!==null&&(Cs(r.remoteStore,e),r.La=r.La.remove(t),r.Ba.delete(e),Ls(r))}function Do(r,t,e){for(const n of e)n instanceof qa?(r.ka.addReference(n.key,t),Fh(r,n)):n instanceof Ba?(N("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,t),r.ka.containsKey(n.key)||Qa(r,n.key)):M()}function Fh(r,t){const e=t.key,n=e.path.canonicalString();r.La.get(e)||r.Na.has(n)||(N("SyncEngine","New document in limbo: "+e),r.Na.add(n),Ls(r))}function Ls(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const t=r.Na.values().next().value;r.Na.delete(t);const e=new L(W.fromString(t)),n=r.Ka.next();r.Ba.set(n,new Vh(e)),r.La=r.La.insert(e,n),ba(r.remoteStore,new Qt(Dt(Ts(e.path)),n,"TargetPurposeLimboResolution",ir.oe))}}async function mn(r,t,e){const n=O(r),i=[],o=[],u=[];n.xa.isEmpty()||(n.xa.forEach((c,h)=>{u.push(n.Ua(h,t,e).then(f=>{var m;if((f||e)&&n.isPrimaryClient){const A=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,A?"current":"not-current")}if(f){i.push(f);const A=Vs.zi(h.targetId,f);o.push(A)}}))}),await Promise.all(u),n.Ma.R_(i),await async function(h,f){const m=O(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>V.forEach(f,w=>V.forEach(w.Wi,C=>m.persistence.referenceDelegate.addReference(A,w.targetId,C)).next(()=>V.forEach(w.Gi,C=>m.persistence.referenceDelegate.removeReference(A,w.targetId,C)))))}catch(A){if(!be(A))throw A;N("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const w=A.targetId;if(!A.fromCache){const C=m.us.get(w),k=C.snapshotVersion,x=C.withLastLimboFreeSnapshotVersion(k);m.us=m.us.insert(w,x)}}}(n.localStore,o))}async function Uh(r,t){const e=O(r);if(!e.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());const n=await Va(e.localStore,t);e.currentUser=t,function(o,u){o.Qa.forEach(c=>{c.forEach(h=>{h.reject(new b(P.CANCELLED,u))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await mn(e,n.Ts)}}function qh(r,t){const e=O(r),n=e.Ba.get(t);if(n&&n.Fa)return U().add(n.key);{let i=U();const o=e.Oa.get(t);if(!o)return i;for(const u of o){const c=e.xa.get(u);i=i.unionWith(c.view.fa)}return i}}function Ka(r){const t=O(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=za.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=qh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Lh.bind(null,t),t.Ma.R_=vh.bind(null,t.eventManager),t.Ma.Wa=wh.bind(null,t.eventManager),t}function Bh(r){const t=O(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Mh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Oh.bind(null,t),t}class rr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=pr(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return Kc(this.persistence,new $c,t.initialUser,this.serializer)}ja(t){return new Pa(Ps.ei,this.serializer)}za(t){return new th}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rr.provider={build:()=>new rr};class jh extends rr{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){G(this.persistence.referenceDelegate instanceof er);const n=this.persistence.referenceDelegate.garbageCollector;return new Dc(n,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new Pa(n=>er.ei(n,e),this.serializer)}}class fs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>So(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uh.bind(null,this.syncEngine),await Eh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ah}()}createDatastore(t){const e=pr(t.databaseInfo.databaseId),n=function(o){return new sh(o)}(t.databaseInfo);return function(o,u,c,h){return new ah(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,c){return new lh(n,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>So(this.syncEngine,e,0),function(){return wo.p()?new wo:new eh}())}createSyncEngine(t,e){return function(i,o,u,c,h,f,m){const A=new Ch(i,o,u,c,h,f);return m&&(A.$a=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=O(i);N("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await fn(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}fs.provider={build:()=>new fs};/**
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
 */class Wa{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class zh{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=Qo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{N("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(N("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new St;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ns(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Jr(r,t){r.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Va(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function bo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Gh(r);N("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Ro(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Ro(t.remoteStore,i)),r._onlineComponents=t}async function Gh(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ie("Error using user provided cache. Falling back to memory cache: "+e),await Jr(r,new rr)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Jr(r,new jh(void 0));return r._offlineComponents}async function Ms(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await bo(r,r._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await bo(r,new fs))),r._onlineComponents}function $h(r){return Ms(r).then(t=>t.syncEngine)}function Qh(r){return Ms(r).then(t=>t.datastore)}async function Ha(r){const t=await Ms(r),e=t.eventManager;return e.onListen=Sh.bind(null,t.syncEngine),e.onUnlisten=kh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Dh.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Nh.bind(null,t.syncEngine),e}function Kh(r,t,e={}){const n=new St;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,f){const m=new Wa({next:w=>{m.eu(),u.enqueueAndForget(()=>Fa(o,A));const C=w.docs.has(c);!C&&w.fromCache?f.reject(new b(P.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&w.fromCache&&h&&h.source==="server"?f.reject(new b(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),A=new Ua(Ts(c.path),m,{includeMetadataChanges:!0,ua:!0});return Oa(o,A)}(await Ha(r),r.asyncQueue,t,e,n)),n.promise}function Wh(r,t,e={}){const n=new St;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,f){const m=new Wa({next:w=>{m.eu(),u.enqueueAndForget(()=>Fa(o,A)),w.fromCache&&h.source==="server"?f.reject(new b(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),A=new Ua(c,m,{includeMetadataChanges:!0,ua:!0});return Oa(o,A)}(await Ha(r),r.asyncQueue,t,e,n)),n.promise}function Hh(r,t,e){const n=new St;return r.asyncQueue.enqueueAndForget(async()=>{try{const i=await Qh(r);n.resolve(async function(u,c,h){var f;const m=O(u),{request:A,lt:w,parent:C}=yc(m.serializer,Fl(c),h);m.connection.Co||delete A.parent;const k=(await m.ko("RunAggregationQuery",m.serializer.databaseId,C,A,1)).filter(D=>!!D.result);G(k.length===1);const x=(f=k[0].result)===null||f===void 0?void 0:f.aggregateFields;return Object.keys(x).reduce((D,j)=>(D[w[j]]=x[j],D),{})}(i,t,e))}catch(i){n.reject(i)}}),n.promise}/**
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
 */function Xa(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const ko=new Map;/**
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
 */function Ya(r,t,e){if(!e)throw new b(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Xh(r,t,e,n){if(t===!0&&n===!0)throw new b(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function No(r){if(!L.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function xo(r){if(L.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function yr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M()}function Ct(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new b(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=yr(r);throw new b(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */class Lo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Xh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xa((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Tr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new b(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new sl;switch(n.type){case"firstParty":return new ul(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ko.get(e);n&&(N("ComponentProvider","Removing Datastore"),ko.delete(e),n.terminate())}(this),Promise.resolve()}}function Yh(r,t,e,n={}){var i;const o=(r=Ct(r,Tr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Ie("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let c,h;if(typeof n.mockUserToken=="string")c=n.mockUserToken,h=pt.MOCK_USER;else{c=Zu(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new b(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new pt(f)}r._authCredentials=new il(new $o(c,h))}}/**
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
 */class qt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new qt(this.firestore,t,this._query)}}class At{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new At(this.firestore,t,this._key)}}class Kt extends qt{constructor(t,e,n){super(t,e,Ts(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new At(this.firestore,null,new L(t))}withConverter(t){return new Kt(this.firestore,t,this._path)}}function Id(r,t,...e){if(r=Rt(r),Ya("collection","path",t),r instanceof Tr){const n=W.fromString(t,...e);return xo(n),new Kt(r,null,n)}{if(!(r instanceof At||r instanceof Kt))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return xo(n),new Kt(r.firestore,null,n)}}function Jh(r,t,...e){if(r=Rt(r),arguments.length===1&&(t=Qo.newId()),Ya("doc","path",t),r instanceof Tr){const n=W.fromString(t,...e);return No(n),new At(r,null,new L(n))}{if(!(r instanceof At||r instanceof Kt))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return No(n),new At(r.firestore,r instanceof Kt?r.converter:null,new L(n))}}/**
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
 */class Mo{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Sa(this,"async_queue_retry"),this.fu=()=>{const n=Yr();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=t;const e=Yr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Yr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new St;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!be(t))throw t;N("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(n=>{this.Au=n,this.Ru=!1;const i=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(n);throw Ft("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.Ru=!1,n))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const i=ks.createAndSchedule(this,t,e,n,o=>this.Su(o));return this.du.push(i),i}pu(){this.Au&&M()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class ee extends Tr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Mo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Mo(t),this._firestoreClient=void 0,await t}}}function Zh(r,t){const e=typeof r=="object"?r:Xu(),n=typeof r=="string"?r:"(default)",i=Yu(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Ju("firestore");o&&Yh(i,...o)}return i}function pn(r){if(r._terminated)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||td(r),r._firestoreClient}function td(r){var t,e,n;const i=r._freezeSettings(),o=function(c,h,f,m){return new wl(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Xa(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new zh(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
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
 */class ed{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class nd{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Ce{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ce(lt.fromBase64String(t))}catch(e){throw new b(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ce(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class gn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Os{constructor(t){this._methodName=t}}/**
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
 */class Fs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
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
 */class Us{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const rd=/^__.*__$/;class sd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new te(t,this.data,this.fieldMask,e,this.fieldTransforms):new hn(t,this.data,e,this.fieldTransforms)}}class Ja{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new te(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Za(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class qs{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new qs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:n,Nu:!1});return i.Lu(t),i}Bu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:n,Nu:!1});return i.Fu(),i}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return sr(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(Za(this.Mu)&&rd.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class id{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||pr(t)}$u(t,e,n,i=!1){return new qs({Mu:t,methodName:e,Ku:n,path:ut.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _n(r){const t=r._freezeSettings(),e=pr(r._databaseId);return new id(r._databaseId,!!t.ignoreUndefinedProperties,e)}function tu(r,t,e,n,i,o={}){const u=r.$u(o.merge||o.mergeFields?2:0,t,e,i);Bs("Data must be an object, but it was:",u,n);const c=su(n,u);let h,f;if(o.merge)h=new wt(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const m=[];for(const A of o.mergeFields){const w=ms(t,A,e);if(!u.contains(w))throw new b(P.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);ou(m,w)||m.push(w)}h=new wt(m),f=u.fieldTransforms.filter(A=>h.covers(A.field))}else h=null,f=u.fieldTransforms;return new sd(new Et(c),h,f)}class Er extends Os{_toFieldTransform(t){if(t.Mu!==2)throw t.Mu===1?t.qu(`${this._methodName}() can only appear at the top level of your update data`):t.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Er}}function eu(r,t,e,n){const i=r.$u(1,t,e);Bs("Data must be an object, but it was:",i,n);const o=[],u=Et.empty();Zt(n,(h,f)=>{const m=js(t,h,e);f=Rt(f);const A=i.Bu(m);if(f instanceof Er)o.push(m);else{const w=yn(f,A);w!=null&&(o.push(m),u.set(m,w))}});const c=new wt(o);return new Ja(u,c,i.fieldTransforms)}function nu(r,t,e,n,i,o){const u=r.$u(1,t,e),c=[ms(t,n,e)],h=[i];if(o.length%2!=0)throw new b(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(ms(t,o[w])),h.push(o[w+1]);const f=[],m=Et.empty();for(let w=c.length-1;w>=0;--w)if(!ou(f,c[w])){const C=c[w];let k=h[w];k=Rt(k);const x=u.Bu(C);if(k instanceof Er)f.push(C);else{const D=yn(k,x);D!=null&&(f.push(C),m.set(C,D))}}const A=new wt(f);return new Ja(m,A,u.fieldTransforms)}function ru(r,t,e,n=!1){return yn(e,r.$u(n?4:3,t))}function yn(r,t){if(iu(r=Rt(r)))return Bs("Unsupported field value:",t,r),su(r,t);if(r instanceof Os)return function(n,i){if(!Za(i.Mu))throw i.qu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const c of n){let h=yn(c,i.ku(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ql(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=et.fromDate(n);return{timestampValue:tr(i.serializer,o)}}if(n instanceof et){const o=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:tr(i.serializer,o)}}if(n instanceof Fs)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ce)return{bytesValue:ya(i.serializer,n._byteString)};if(n instanceof At){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ws(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Us)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(h=>{if(typeof h!="number")throw c.qu("VectorValues must only contain numeric values.");return Is(c.serializer,h)})}}}}}}(n,i);throw i.qu(`Unsupported field value: ${yr(n)}`)}(r,t)}function su(r,t){const e={};return Ko(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Zt(r,(n,i)=>{const o=yn(i,t.Ou(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function iu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof Fs||r instanceof Ce||r instanceof At||r instanceof Os||r instanceof Us)}function Bs(r,t,e){if(!iu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=yr(e);throw n==="an object"?t.qu(r+" a custom object"):t.qu(r+" "+n)}}function ms(r,t,e){if((t=Rt(t))instanceof gn)return t._internalPath;if(typeof t=="string")return js(r,t);throw sr("Field path arguments must be of type string or ",r,!1,void 0,e)}const od=new RegExp("[~\\*/\\[\\]]");function js(r,t,e){if(t.search(od)>=0)throw sr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new gn(...t.split("."))._internalPath}catch{throw sr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function sr(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${n}`),u&&(h+=` in document ${i}`),h+=")"),new b(P.INVALID_ARGUMENT,c+r+h)}function ou(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class zs{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ad(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ir("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ad extends zs{data(){return super.data()}}function Ir(r,t){return typeof t=="string"?js(r,t):t instanceof gn?t._internalPath:t._delegate._internalPath}/**
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
 */function ud(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new b(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gs{}class Ar extends Gs{}function Ad(r,t,...e){let n=[];t instanceof Gs&&n.push(t),n=n.concat(e),function(o){const u=o.filter(h=>h instanceof $s).length,c=o.filter(h=>h instanceof vr).length;if(u>1||u>0&&c>0)throw new b(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class vr extends Ar{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new vr(t,e,n)}_apply(t){const e=this._parse(t);return au(t._query,e),new qt(t.firestore,t.converter,is(t._query,e))}_parse(t){const e=_n(t.firestore);return function(o,u,c,h,f,m,A){let w;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new b(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Fo(A,m);const C=[];for(const k of A)C.push(Oo(h,o,k));w={arrayValue:{values:C}}}else w=Oo(h,o,A)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Fo(A,m),w=ru(c,u,A,m==="in"||m==="not-in");return tt.create(f,m,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function vd(r,t,e){const n=t,i=Ir("where",r);return vr._create(i,n,e)}class $s extends Gs{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new $s(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Vt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let u=i;const c=o.getFlattenedFilters();for(const h of c)au(u,h),u=is(u,h)}(t._query,e),new qt(t.firestore,t.converter,is(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qs extends Ar{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Qs(t,e)}_apply(t){const e=function(i,o,u){if(i.startAt!==null)throw new b(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new b(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new un(o,u)}(t._query,this._field,this._direction);return new qt(t.firestore,t.converter,function(i,o){const u=i.explicitOrderBy.concat([o]);return new le(i.path,i.collectionGroup,u,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function wd(r,t="asc"){const e=t,n=Ir("orderBy",r);return Qs._create(n,e)}class Ks extends Ar{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Ks(t,e,n)}_apply(t){return new qt(t.firestore,t.converter,Yn(t._query,this._limit,this._limitType))}}function Rd(r){return Ks._create("limit",r,"F")}class Ws extends Ar{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Ws(t,e,n)}_apply(t){const e=ld(t,this.type,this._docOrFields,this._inclusive);return new qt(t.firestore,t.converter,function(i,o){return new le(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,o,i.endAt)}(t._query,e))}}function Pd(...r){return Ws._create("startAfter",r,!1)}function ld(r,t,e,n){if(e[0]=Rt(e[0]),e[0]instanceof zs)return function(o,u,c,h,f){if(!h)throw new b(P.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const m=[];for(const A of Te(o))if(A.field.isKeyField())m.push(Xn(u,h.key));else{const w=h.data.field(A.field);if(ar(w))throw new b(P.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+A.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const C=A.field.canonicalString();throw new b(P.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${C}' (used as the orderBy) does not exist.`)}m.push(w)}return new Re(m,f)}(r._query,r.firestore._databaseId,t,e[0]._document,n);{const i=_n(r.firestore);return function(u,c,h,f,m,A){const w=u.explicitOrderBy;if(m.length>w.length)throw new b(P.INVALID_ARGUMENT,`Too many arguments provided to ${f}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const C=[];for(let k=0;k<m.length;k++){const x=m[k];if(w[k].field.isKeyField()){if(typeof x!="string")throw new b(P.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${f}(), but got a ${typeof x}`);if(!Es(u)&&x.indexOf("/")!==-1)throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${f}() must be a plain document ID, but '${x}' contains a slash.`);const D=u.path.child(W.fromString(x));if(!L.isDocumentKey(D))throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${f}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const j=new L(D);C.push(Xn(c,j))}else{const D=ru(h,f,x);C.push(D)}}return new Re(C,A)}(r._query,r.firestore._databaseId,i,t,e,n)}}function Oo(r,t,e){if(typeof(e=Rt(e))=="string"){if(e==="")throw new b(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Es(t)&&e.indexOf("/")!==-1)throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(W.fromString(e));if(!L.isDocumentKey(n))throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Xn(r,new L(n))}if(e instanceof At)return Xn(r,e._key);throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yr(e)}.`)}function Fo(r,t){if(!Array.isArray(r)||r.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function au(r,t){const e=function(i,o){for(const u of i)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new b(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new b(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class cd{convertValue(t,e="none"){switch(Yt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Zt(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>J(u.doubleValue));return new Us(o)}convertGeoPoint(t){return new Fs(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ur(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(sn(t));default:return null}}convertTimestamp(t){const e=Ht(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=W.fromString(t);G(Ra(n));const i=new on(n.get(1),n.get(3)),o=new L(n.popFirst(5));return i.isEqual(e)||Ft(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function uu(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}function hd(){return new ed("count")}/**
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
 */class Ze{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class lu extends zs{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Wn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ir("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Wn extends lu{data(t={}){return super.data(t)}}class dd{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Ze(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Wn(this._firestore,this._userDataWriter,n.key,n,new Ze(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const h=new Wn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Ze(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Wn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Ze(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,m=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),m=u.indexOf(c.doc.key)),{type:fd(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function fd(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}/**
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
 */function Vd(r){r=Ct(r,At);const t=Ct(r.firestore,ee);return Kh(pn(t),r._key).then(e=>md(t,r,e))}class Hs extends cd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ce(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new At(this.firestore,null,e)}}function Cd(r){r=Ct(r,qt);const t=Ct(r.firestore,ee),e=pn(t),n=new Hs(t);return ud(r._query),Wh(e,r._query).then(i=>new dd(t,n,r,i))}function Sd(r,t,e,...n){r=Ct(r,At);const i=Ct(r.firestore,ee),o=_n(i);let u;return u=typeof(t=Rt(t))=="string"||t instanceof gn?nu(o,"updateDoc",r._key,t,e,n):eu(o,"updateDoc",r._key,t),wr(i,[u.toMutation(r._key,It.exists(!0))])}function Dd(r){return wr(Ct(r.firestore,ee),[new fr(r._key,It.none())])}function bd(r,t){const e=Ct(r.firestore,ee),n=Jh(r),i=uu(r.converter,t);return wr(e,[tu(_n(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,It.exists(!1))]).then(()=>n)}function wr(r,t){return function(n,i){const o=new St;return n.asyncQueue.enqueueAndForget(async()=>xh(await $h(n),i,o)),o.promise}(pn(r),t)}function md(r,t,e){const n=e.docs.get(t._key),i=new Hs(r);return new lu(r,i,t._key,n,new Ze(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */function kd(r){return pd(r,{count:hd()})}function pd(r,t){const e=Ct(r.firestore,ee),n=pn(e),i=Al(t,(o,u)=>new nc(u,o.aggregateType,o._internalFieldPath));return Hh(n,r._query,i).then(o=>function(c,h,f){const m=new Hs(c);return new nd(h,m,f)}(e,r,o))}/**
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
 */class gd{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=_n(t)}set(t,e,n){this._verifyNotCommitted();const i=Zr(t,this._firestore),o=uu(i.converter,e,n),u=tu(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,n);return this._mutations.push(u.toMutation(i._key,It.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const o=Zr(t,this._firestore);let u;return u=typeof(e=Rt(e))=="string"||e instanceof gn?nu(this._dataReader,"WriteBatch.update",o._key,e,n,i):eu(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(u.toMutation(o._key,It.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Zr(t,this._firestore);return this._mutations=this._mutations.concat(new fr(e._key,It.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new b(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Zr(r,t){if((r=Rt(r)).firestore!==t)throw new b(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function Nd(r){return pn(r=Ct(r,ee)),new gd(r,t=>wr(r,t))}(function(t,e=!0){(function(i){Se=i})(Hu),Qu(new Ku("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new ee(new ol(n.getProvider("auth-internal")),new cl(n.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new b(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(f.options.projectId,m)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Xi(Ji,"4.7.5",t),Xi(Ji,"4.7.5","esm2017")})();const xd=nl("firestore",()=>{const{firebaseApp:r}=rl();return{db:Zh(r)}});export{et as T,kd as a,Cd as b,Id as c,Jh as d,bd as e,Sd as f,Vd as g,Dd as h,Nd as i,Rd as l,wd as o,Ad as q,Pd as s,xd as u,vd as w};
