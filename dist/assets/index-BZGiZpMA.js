const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-C5F6VqYz.js","assets/AppMenu.vue_vue_type_script_setup_true_lang-B-iYmG8d.js","assets/LoginView-BsfKrGph.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/LoginView-Bkb78H1K.css","assets/RegisterView-Db0GKgPq.js","assets/RegisterView-BA8r58n6.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Us(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Z={},en=[],Ke=()=>{},ml=()=>!1,Rr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fs=t=>t.startsWith("onUpdate:"),he=Object.assign,Hs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_l=Object.prototype.hasOwnProperty,X=(t,e)=>_l.call(t,e),H=Array.isArray,tn=t=>Cr(t)==="[object Map]",Ko=t=>Cr(t)==="[object Set]",B=t=>typeof t=="function",le=t=>typeof t=="string",Ct=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",zo=t=>(oe(t)||B(t))&&B(t.then)&&B(t.catch),Go=Object.prototype.toString,Cr=t=>Go.call(t),yl=t=>Cr(t).slice(8,-1),qo=t=>Cr(t)==="[object Object]",$s=t=>le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,En=Us(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ar=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bl=/-(\w)/g,Ne=Ar(t=>t.replace(bl,(e,n)=>n?n.toUpperCase():"")),El=/\B([A-Z])/g,Kt=Ar(t=>t.replace(El,"-$1").toLowerCase()),Pr=Ar(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wr=Ar(t=>t?`on${Pr(t)}`:""),wt=(t,e)=>!Object.is(t,e),sr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Jo=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},hs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yi;const Or=()=>yi||(yi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bs(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=le(r)?Sl(r):Bs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(le(t)||oe(t))return t}const vl=/;(?![^(]*\))/g,wl=/:([^]+)/,Il=/\/\*[^]*?\*\//g;function Sl(t){const e={};return t.replace(Il,"").split(vl).forEach(n=>{if(n){const r=n.split(wl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function js(t){let e="";if(le(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=js(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rl=Us(Tl);function Yo(t){return!!t||t===""}const Xo=t=>!!(t&&t.__v_isRef===!0),Cl=t=>le(t)?t:t==null?"":H(t)||oe(t)&&(t.toString===Go||!B(t.toString))?Xo(t)?Cl(t.value):JSON.stringify(t,Qo,2):String(t),Qo=(t,e)=>Xo(e)?Qo(t,e.value):tn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Kr(r,i)+" =>"]=s,n),{})}:Ko(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Kr(n))}:Ct(e)?Kr(e):oe(e)&&!H(e)&&!qo(e)?String(e):e,Kr=(t,e="")=>{var n;return Ct(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let me;class Zo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=me,!e&&me&&(this.index=(me.scopes||(me.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=me;try{return me=this,e()}finally{me=n}}}on(){me=this}off(){me=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ea(t){return new Zo(t)}function ta(){return me}function Al(t,e=!1){me&&me.cleanups.push(t)}let re;const zr=new WeakSet;class na{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,me&&me.active&&me.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zr.has(this)&&(zr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bi(this),ia(this);const e=re,n=De;re=this,De=!0;try{return this.fn()}finally{oa(this),re=e,De=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ks(e);this.deps=this.depsTail=void 0,bi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ps(this)&&this.run()}get dirty(){return ps(this)}}let ra=0,vn,wn;function sa(t,e=!1){if(t.flags|=8,e){t.next=wn,wn=t;return}t.next=vn,vn=t}function Vs(){ra++}function Ws(){if(--ra>0)return;if(wn){let e=wn;for(wn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vn;){let e=vn;for(vn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ia(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function oa(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ks(r),Pl(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ps(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(aa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function aa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===kn))return;t.globalVersion=kn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ps(t)){t.flags&=-3;return}const n=re,r=De;re=t,De=!0;try{ia(t);const s=t.fn(t._value);(e.version===0||wt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{re=n,De=r,oa(t),t.flags&=-3}}function Ks(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ks(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let De=!0;const ca=[];function At(){ca.push(De),De=!1}function Pt(){const t=ca.pop();De=t===void 0?!0:t}function bi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let kn=0;class Ol{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!re||!De||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new Ol(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,la(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=r)}return n}trigger(e){this.version++,kn++,this.notify(e)}notify(e){Vs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ws()}}}function la(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)la(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const dr=new WeakMap,Ht=Symbol(""),gs=Symbol(""),Nn=Symbol("");function fe(t,e,n){if(De&&re){let r=dr.get(t);r||dr.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new zs),s.map=r,s.key=n),s.track()}}function tt(t,e,n,r,s,i){const o=dr.get(t);if(!o){kn++;return}const a=c=>{c&&c.trigger()};if(Vs(),e==="clear")o.forEach(a);else{const c=H(t),l=c&&$s(n);if(c&&n==="length"){const u=Number(r);o.forEach((d,p)=>{(p==="length"||p===Nn||!Ct(p)&&p>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Nn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Ht)),tn(t)&&a(o.get(gs)));break;case"delete":c||(a(o.get(Ht)),tn(t)&&a(o.get(gs)));break;case"set":tn(t)&&a(o.get(Ht));break}}Ws()}function kl(t,e){const n=dr.get(t);return n&&n.get(e)}function qt(t){const e=q(t);return e===t?e:(fe(e,"iterate",Nn),ke(t)?e:e.map(de))}function kr(t){return fe(t=q(t),"iterate",Nn),t}const Nl={__proto__:null,[Symbol.iterator](){return Gr(this,Symbol.iterator,de)},concat(...t){return qt(this).concat(...t.map(e=>H(e)?qt(e):e))},entries(){return Gr(this,"entries",t=>(t[1]=de(t[1]),t))},every(t,e){return Xe(this,"every",t,e,void 0,arguments)},filter(t,e){return Xe(this,"filter",t,e,n=>n.map(de),arguments)},find(t,e){return Xe(this,"find",t,e,de,arguments)},findIndex(t,e){return Xe(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xe(this,"findLast",t,e,de,arguments)},findLastIndex(t,e){return Xe(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xe(this,"forEach",t,e,void 0,arguments)},includes(...t){return qr(this,"includes",t)},indexOf(...t){return qr(this,"indexOf",t)},join(t){return qt(this).join(t)},lastIndexOf(...t){return qr(this,"lastIndexOf",t)},map(t,e){return Xe(this,"map",t,e,void 0,arguments)},pop(){return pn(this,"pop")},push(...t){return pn(this,"push",t)},reduce(t,...e){return Ei(this,"reduce",t,e)},reduceRight(t,...e){return Ei(this,"reduceRight",t,e)},shift(){return pn(this,"shift")},some(t,e){return Xe(this,"some",t,e,void 0,arguments)},splice(...t){return pn(this,"splice",t)},toReversed(){return qt(this).toReversed()},toSorted(t){return qt(this).toSorted(t)},toSpliced(...t){return qt(this).toSpliced(...t)},unshift(...t){return pn(this,"unshift",t)},values(){return Gr(this,"values",de)}};function Gr(t,e,n){const r=kr(t),s=r[e]();return r!==t&&!ke(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Dl=Array.prototype;function Xe(t,e,n,r,s,i){const o=kr(t),a=o!==t&&!ke(t),c=o[e];if(c!==Dl[e]){const d=c.apply(t,i);return a?de(d):d}let l=n;o!==t&&(a?l=function(d,p){return n.call(this,de(d),p,t)}:n.length>2&&(l=function(d,p){return n.call(this,d,p,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function Ei(t,e,n,r){const s=kr(t);let i=n;return s!==t&&(ke(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,de(a),c,t)}),s[e](i,...r)}function qr(t,e,n){const r=q(t);fe(r,"iterate",Nn);const s=r[e](...n);return(s===-1||s===!1)&&Js(n[0])?(n[0]=q(n[0]),r[e](...n)):s}function pn(t,e,n=[]){At(),Vs();const r=q(t)[e].apply(t,n);return Ws(),Pt(),r}const xl=Us("__proto__,__v_isRef,__isVue"),ua=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ct));function Ml(t){Ct(t)||(t=String(t));const e=q(this);return fe(e,"has",t),e.hasOwnProperty(t)}class fa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Kl:ga:i?pa:ha).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=H(e);if(!s){let c;if(o&&(c=Nl[n]))return c;if(n==="hasOwnProperty")return Ml}const a=Reflect.get(e,n,ce(e)?e:r);return(Ct(n)?ua.has(n):xl(n))||(s||fe(e,"get",n),i)?a:ce(a)?o&&$s(n)?a:a.value:oe(a)?s?_a(a):Vn(a):a}}class da extends fa{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=jt(i);if(!ke(r)&&!jt(r)&&(i=q(i),r=q(r)),!H(e)&&ce(i)&&!ce(r))return c?!1:(i.value=r,!0)}const o=H(e)&&$s(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,r,ce(e)?e:s);return e===q(s)&&(o?wt(r,i)&&tt(e,"set",n,r):tt(e,"add",n,r)),a}deleteProperty(e,n){const r=X(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&tt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ct(n)||!ua.has(n))&&fe(e,"has",n),r}ownKeys(e){return fe(e,"iterate",H(e)?"length":Ht),Reflect.ownKeys(e)}}class Ll extends fa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ul=new da,Fl=new Ll,Hl=new da(!0);const ms=t=>t,er=t=>Reflect.getPrototypeOf(t);function $l(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=tn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ms:e?_s:de;return!e&&fe(i,"iterate",c?gs:Ht),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function tr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bl(t,e){const n={get(s){const i=this.__v_raw,o=q(i),a=q(s);t||(wt(s,a)&&fe(o,"get",s),fe(o,"get",a));const{has:c}=er(o),l=e?ms:t?_s:de;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&fe(q(s),"iterate",Ht),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=q(i),a=q(s);return t||(wt(s,a)&&fe(o,"has",s),fe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=q(a),l=e?ms:t?_s:de;return!t&&fe(c,"iterate",Ht),a.forEach((u,d)=>s.call(i,l(u),l(d),o))}};return he(n,t?{add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear")}:{add(s){!e&&!ke(s)&&!jt(s)&&(s=q(s));const i=q(this);return er(i).has.call(i,s)||(i.add(s),tt(i,"add",s,s)),this},set(s,i){!e&&!ke(i)&&!jt(i)&&(i=q(i));const o=q(this),{has:a,get:c}=er(o);let l=a.call(o,s);l||(s=q(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?wt(i,u)&&tt(o,"set",s,i):tt(o,"add",s,i),this},delete(s){const i=q(this),{has:o,get:a}=er(i);let c=o.call(i,s);c||(s=q(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&tt(i,"delete",s,void 0),l},clear(){const s=q(this),i=s.size!==0,o=s.clear();return i&&tt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$l(s,t,e)}),n}function Gs(t,e){const n=Bl(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const jl={get:Gs(!1,!1)},Vl={get:Gs(!1,!0)},Wl={get:Gs(!0,!1)};const ha=new WeakMap,pa=new WeakMap,ga=new WeakMap,Kl=new WeakMap;function zl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gl(t){return t.__v_skip||!Object.isExtensible(t)?0:zl(yl(t))}function Vn(t){return jt(t)?t:qs(t,!1,Ul,jl,ha)}function ma(t){return qs(t,!1,Hl,Vl,pa)}function _a(t){return qs(t,!0,Fl,Wl,ga)}function qs(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Gl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function It(t){return jt(t)?It(t.__v_raw):!!(t&&t.__v_isReactive)}function jt(t){return!!(t&&t.__v_isReadonly)}function ke(t){return!!(t&&t.__v_isShallow)}function Js(t){return t?!!t.__v_raw:!1}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function Ys(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&Jo(t,"__v_skip",!0),t}const de=t=>oe(t)?Vn(t):t,_s=t=>oe(t)?_a(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function Nr(t){return ba(t,!1)}function ya(t){return ba(t,!0)}function ba(t,e){return ce(t)?t:new ql(t,e)}class ql{constructor(e,n){this.dep=new zs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:q(e),this._value=n?e:de(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ke(e)||jt(e);e=r?e:q(e),wt(e,n)&&(this._rawValue=e,this._value=r?e:de(e),this.dep.trigger())}}function $t(t){return ce(t)?t.value:t}const Jl={get:(t,e,n)=>e==="__v_raw"?t:$t(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ce(s)&&!ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ea(t){return It(t)?t:new Proxy(t,Jl)}function Yl(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=Ql(t,n);return e}class Xl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return kl(q(this._object),this._key)}}function Ql(t,e,n){const r=t[e];return ce(r)?r:new Xl(t,e,n)}class Zl{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new zs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return sa(this,!0),!0}get value(){const e=this.dep.track();return aa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function eu(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new Zl(r,s,n)}const nr={},hr=new WeakMap;let Ut;function tu(t,e=!1,n=Ut){if(n){let r=hr.get(n);r||hr.set(n,r=[]),r.push(t)}}function nu(t,e,n=Z){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>s?O:ke(O)||s===!1||s===0?nt(O,1):nt(O);let u,d,p,m,S=!1,A=!1;if(ce(t)?(d=()=>t.value,S=ke(t)):It(t)?(d=()=>l(t),S=!0):H(t)?(A=!0,S=t.some(O=>It(O)||ke(O)),d=()=>t.map(O=>{if(ce(O))return O.value;if(It(O))return l(O);if(B(O))return c?c(O,2):O()})):B(t)?e?d=c?()=>c(t,2):t:d=()=>{if(p){At();try{p()}finally{Pt()}}const O=Ut;Ut=u;try{return c?c(t,3,[m]):t(m)}finally{Ut=O}}:d=Ke,e&&s){const O=d,j=s===!0?1/0:s;d=()=>nt(O(),j)}const F=ta(),x=()=>{u.stop(),F&&F.active&&Hs(F.effects,u)};if(i&&e){const O=e;e=(...j)=>{O(...j),x()}}let k=A?new Array(t.length).fill(nr):nr;const N=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const j=u.run();if(s||S||(A?j.some((ae,G)=>wt(ae,k[G])):wt(j,k))){p&&p();const ae=Ut;Ut=u;try{const G=[j,k===nr?void 0:A&&k[0]===nr?[]:k,m];c?c(e,3,G):e(...G),k=j}finally{Ut=ae}}}else u.run()};return a&&a(N),u=new na(d),u.scheduler=o?()=>o(N,!1):N,m=O=>tu(O,!1,u),p=u.onStop=()=>{const O=hr.get(u);if(O){if(c)c(O,4);else for(const j of O)j();hr.delete(u)}},e?r?N(!0):k=u.run():o?o(N.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function nt(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))nt(t.value,e,n);else if(H(t))for(let r=0;r<t.length;r++)nt(t[r],e,n);else if(Ko(t)||tn(t))t.forEach(r=>{nt(r,e,n)});else if(qo(t)){for(const r in t)nt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&nt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wn(t,e,n,r){try{return r?t(...r):t()}catch(s){Dr(s,e,n)}}function qe(t,e,n,r){if(B(t)){const s=Wn(t,e,n,r);return s&&zo(s)&&s.catch(i=>{Dr(i,e,n)}),s}if(H(t)){const s=[];for(let i=0;i<t.length;i++)s.push(qe(t[i],e,n,r));return s}}function Dr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Z;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,l)===!1)return}a=a.parent}if(i){At(),Wn(i,null,10,[t,c,l]),Pt();return}}ru(t,n,s,r,o)}function ru(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _e=[];let je=-1;const nn=[];let gt=null,Yt=0;const va=Promise.resolve();let pr=null;function Xs(t){const e=pr||va;return t?e.then(this?t.bind(this):t):e}function su(t){let e=je+1,n=_e.length;for(;e<n;){const r=e+n>>>1,s=_e[r],i=Dn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Qs(t){if(!(t.flags&1)){const e=Dn(t),n=_e[_e.length-1];!n||!(t.flags&2)&&e>=Dn(n)?_e.push(t):_e.splice(su(e),0,t),t.flags|=1,wa()}}function wa(){pr||(pr=va.then(Sa))}function iu(t){H(t)?nn.push(...t):gt&&t.id===-1?gt.splice(Yt+1,0,t):t.flags&1||(nn.push(t),t.flags|=1),wa()}function vi(t,e,n=je+1){for(;n<_e.length;n++){const r=_e[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_e.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ia(t){if(nn.length){const e=[...new Set(nn)].sort((n,r)=>Dn(n)-Dn(r));if(nn.length=0,gt){gt.push(...e);return}for(gt=e,Yt=0;Yt<gt.length;Yt++){const n=gt[Yt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gt=null,Yt=0}}const Dn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sa(t){try{for(je=0;je<_e.length;je++){const e=_e[je];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;je<_e.length;je++){const e=_e[je];e&&(e.flags&=-2)}je=-1,_e.length=0,Ia(),pr=null,(_e.length||nn.length)&&Sa()}}let ye=null,Ta=null;function gr(t){const e=ye;return ye=t,Ta=t&&t.type.__scopeId||null,e}function ou(t,e=ye,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ki(-1);const i=gr(e);let o;try{o=t(...s)}finally{gr(i),r._d&&ki(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ym(t,e){if(ye===null)return t;const n=Ur(ye),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Z]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&nt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(At(),qe(c,n,8,[t.el,a,t,e]),Pt())}}const au=Symbol("_vte"),cu=t=>t.__isTeleport;function Zs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Zs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ei(t,e){return B(t)?he({name:t.name},e,{setup:t}):t}function Ra(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Xm(t){const e=cf(),n=ya(null);if(e){const s=e.refs===Z?e.refs={}:e.refs;Object.defineProperty(s,t,{enumerable:!0,get:()=>n.value,set:i=>n.value=i})}return n}function mr(t,e,n,r,s=!1){if(H(t)){t.forEach((S,A)=>mr(S,e&&(H(e)?e[A]:e),n,r,s));return}if(In(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&mr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ur(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Z?a.refs={}:a.refs,d=a.setupState,p=q(d),m=d===Z?()=>!1:S=>X(p,S);if(l!=null&&l!==c&&(le(l)?(u[l]=null,m(l)&&(d[l]=null)):ce(l)&&(l.value=null)),B(c))Wn(c,a,12,[o,u]);else{const S=le(c),A=ce(c);if(S||A){const F=()=>{if(t.f){const x=S?m(c)?d[c]:u[c]:c.value;s?H(x)&&Hs(x,i):H(x)?x.includes(i)||x.push(i):S?(u[c]=[i],m(c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else S?(u[c]=o,m(c)&&(d[c]=o)):A&&(c.value=o,t.k&&(u[t.k]=o))};o?(F.id=-1,Re(F,n)):F()}}}Or().requestIdleCallback;Or().cancelIdleCallback;const In=t=>!!t.type.__asyncLoader,Ca=t=>t.type.__isKeepAlive;function lu(t,e){Aa(t,"a",e)}function uu(t,e){Aa(t,"da",e)}function Aa(t,e,n=ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ca(s.parent.vnode)&&fu(r,e,n,s),s=s.parent}}function fu(t,e,n,r){const s=xr(e,t,r,!0);Pa(()=>{Hs(r[e],s)},n)}function xr(t,e,n=ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{At();const a=Kn(n),c=qe(e,n,t,o);return a(),Pt(),c});return r?s.unshift(i):s.push(i),i}}const lt=t=>(e,n=ue)=>{(!Mn||t==="sp")&&xr(t,(...r)=>e(...r),n)},du=lt("bm"),hu=lt("m"),pu=lt("bu"),gu=lt("u"),mu=lt("bum"),Pa=lt("um"),_u=lt("sp"),yu=lt("rtg"),bu=lt("rtc");function Eu(t,e=ue){xr("ec",t,e)}const vu="components";function Qm(t,e){return Iu(vu,t,!0,e)||t}const wu=Symbol.for("v-ndc");function Iu(t,e,n=!0,r=!1){const s=ye||ue;if(s){const i=s.type;{const a=hf(i,!1);if(a&&(a===e||a===Ne(e)||a===Pr(Ne(e))))return i}const o=wi(s[t]||i[t],e)||wi(s.appContext[t],e);return!o&&r?i:o}}function wi(t,e){return t&&(t[e]||t[Ne(e)]||t[Pr(Ne(e))])}function Zm(t,e,n,r){let s;const i=n,o=H(t);if(o||le(t)){const a=o&&It(t);let c=!1;a&&(c=!ke(t),t=kr(t)),s=new Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=e(c?de(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(oe(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}const ys=t=>t?Za(t)?Ur(t):ys(t.parent):null,Sn=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ys(t.parent),$root:t=>ys(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ka(t),$forceUpdate:t=>t.f||(t.f=()=>{Qs(t.update)}),$nextTick:t=>t.n||(t.n=Xs.bind(t.proxy)),$watch:t=>Ku.bind(t)}),Jr=(t,e)=>t!==Z&&!t.__isScriptSetup&&X(t,e),Su={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Jr(r,e))return o[e]=1,r[e];if(s!==Z&&X(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&X(l,e))return o[e]=3,i[e];if(n!==Z&&X(n,e))return o[e]=4,n[e];bs&&(o[e]=0)}}const u=Sn[e];let d,p;if(u)return e==="$attrs"&&fe(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Z&&X(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,X(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Jr(s,e)?(s[e]=n,!0):r!==Z&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Z&&X(t,o)||Jr(e,o)||(a=i[0])&&X(a,o)||X(r,o)||X(Sn,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ii(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let bs=!0;function Tu(t){const e=ka(t),n=t.proxy,r=t.ctx;bs=!1,e.beforeCreate&&Si(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:S,activated:A,deactivated:F,beforeDestroy:x,beforeUnmount:k,destroyed:N,unmounted:O,render:j,renderTracked:ae,renderTriggered:G,errorCaptured:K,serverPrefetch:W,expose:se,inheritAttrs:pe,components:Ie,directives:Ee,filters:xt}=e;if(l&&Ru(l,r,null),o)for(const V in o){const J=o[V];B(J)&&(r[V]=J.bind(n))}if(s){const V=s.call(n,n);oe(V)&&(t.data=Vn(V))}if(bs=!0,i)for(const V in i){const J=i[V],Ye=B(J)?J.bind(n,n):B(J.get)?J.get.bind(n,n):Ke,ft=!B(J)&&B(J.set)?J.set.bind(n):Ke,Ue=Ce({get:Ye,set:ft});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:ve=>Ue.value=ve})}if(a)for(const V in a)Oa(a[V],r,n,V);if(c){const V=B(c)?c.call(n):c;Reflect.ownKeys(V).forEach(J=>{ir(J,V[J])})}u&&Si(u,t,"c");function ie(V,J){H(J)?J.forEach(Ye=>V(Ye.bind(n))):J&&V(J.bind(n))}if(ie(du,d),ie(hu,p),ie(pu,m),ie(gu,S),ie(lu,A),ie(uu,F),ie(Eu,K),ie(bu,ae),ie(yu,G),ie(mu,k),ie(Pa,O),ie(_u,W),H(se))if(se.length){const V=t.exposed||(t.exposed={});se.forEach(J=>{Object.defineProperty(V,J,{get:()=>n[J],set:Ye=>n[J]=Ye})})}else t.exposed||(t.exposed={});j&&t.render===Ke&&(t.render=j),pe!=null&&(t.inheritAttrs=pe),Ie&&(t.components=Ie),Ee&&(t.directives=Ee),W&&Ra(t)}function Ru(t,e,n=Ke){H(t)&&(t=Es(t));for(const r in t){const s=t[r];let i;oe(s)?"default"in s?i=xe(s.from||r,s.default,!0):i=xe(s.from||r):i=xe(s),ce(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Si(t,e,n){qe(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Oa(t,e,n,r){let s=r.includes(".")?Ka(n,r):()=>n[r];if(le(t)){const i=e[t];B(i)&&Tn(s,i)}else if(B(t))Tn(s,t.bind(n));else if(oe(t))if(H(t))t.forEach(i=>Oa(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Tn(s,i,t)}}function ka(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>_r(c,l,o,!0)),_r(c,e,o)),oe(e)&&i.set(e,c),c}function _r(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&_r(t,i,n,!0),s&&s.forEach(o=>_r(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Cu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cu={data:Ti,props:Ri,emits:Ri,methods:_n,computed:_n,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:_n,directives:_n,watch:Pu,provide:Ti,inject:Au};function Ti(t,e){return e?t?function(){return he(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Au(t,e){return _n(Es(t),Es(e))}function Es(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function _n(t,e){return t?he(Object.create(null),t,e):e}function Ri(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:he(Object.create(null),Ii(t),Ii(e??{})):e}function Pu(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const r in e)n[r]=ge(t[r],e[r]);return n}function Na(){return{app:null,config:{isNativeTag:ml,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ou=0;function ku(t,e){return function(r,s=null){B(r)||(r=he({},r)),s!=null&&!oe(s)&&(s=null);const i=Na(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Ou++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:gf,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&B(u.install)?(o.add(u),u.install(l,...d)):B(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!c){const m=l._ceVNode||Pe(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(m,u,p),c=!0,l._container=u,u.__vue_app__=l,Ur(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(qe(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=Bt;Bt=l;try{return u()}finally{Bt=d}}};return l}}let Bt=null;function ir(t,e){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[t]=e}}function xe(t,e,n=!1){const r=ue||ye;if(r||Bt){const s=Bt?Bt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}function Nu(){return!!(ue||ye||Bt)}const Da={},xa=()=>Object.create(Da),Ma=t=>Object.getPrototypeOf(t)===Da;function Du(t,e,n,r=!1){const s={},i=xa();t.propsDefaults=Object.create(null),La(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ma(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function xu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=q(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Mr(t.emitsOptions,p))continue;const m=e[p];if(c)if(X(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const S=Ne(p);s[S]=vs(c,a,S,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{La(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!X(e,d)&&((u=Kt(d))===d||!X(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=vs(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!X(e,d))&&(delete i[d],l=!0)}l&&tt(t.attrs,"set","")}function La(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(En(c))continue;const l=e[c];let u;s&&X(s,u=Ne(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Mr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=q(n),l=a||Z;for(let u=0;u<i.length;u++){const d=i[u];n[d]=vs(s,c,d,l[d],t,!X(l,d))}}return o}function vs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&B(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Kn(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Kt(n))&&(r=!0))}return r}const Mu=new WeakMap;function Ua(t,e,n=!1){const r=n?Mu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const u=d=>{c=!0;const[p,m]=Ua(d,e,!0);he(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return oe(t)&&r.set(t,en),en;if(H(i))for(let u=0;u<i.length;u++){const d=Ne(i[u]);Ci(d)&&(o[d]=Z)}else if(i)for(const u in i){const d=Ne(u);if(Ci(d)){const p=i[u],m=o[d]=H(p)||B(p)?{type:p}:he({},p),S=m.type;let A=!1,F=!0;if(H(S))for(let x=0;x<S.length;++x){const k=S[x],N=B(k)&&k.name;if(N==="Boolean"){A=!0;break}else N==="String"&&(F=!1)}else A=B(S)&&S.name==="Boolean";m[0]=A,m[1]=F,(A||X(m,"default"))&&a.push(d)}}const l=[o,a];return oe(t)&&r.set(t,l),l}function Ci(t){return t[0]!=="$"&&!En(t)}const Fa=t=>t[0]==="_"||t==="$stable",ti=t=>H(t)?t.map(Ve):[Ve(t)],Lu=(t,e,n)=>{if(e._n)return e;const r=ou((...s)=>ti(e(...s)),n);return r._c=!1,r},Ha=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fa(s))continue;const i=t[s];if(B(i))e[s]=Lu(s,i,r);else if(i!=null){const o=ti(i);e[s]=()=>o}}},$a=(t,e)=>{const n=ti(e);t.slots.default=()=>n},Ba=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Uu=(t,e,n)=>{const r=t.slots=xa();if(t.vnode.shapeFlag&32){const s=e._;s?(Ba(r,e,n),n&&Jo(r,"_",s,!0)):Ha(e,r)}else e&&$a(t,e)},Fu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Ba(s,e,n):(i=!e.$stable,Ha(e,s)),o=e}else e&&($a(t,e),o={default:1});if(i)for(const a in s)!Fa(a)&&o[a]==null&&delete s[a]},Re=Qu;function Hu(t){return $u(t)}function $u(t,e){const n=Or();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=Ke,insertStaticContent:S}=t,A=(f,h,g,_=null,E=null,b=null,T=void 0,I=null,w=!!h.dynamicChildren)=>{if(f===h)return;f&&!gn(f,h)&&(_=y(f),ve(f,E,b,!0),f=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:v,ref:L,shapeFlag:C}=h;switch(v){case Lr:F(f,h,g,_);break;case Vt:x(f,h,g,_);break;case Xr:f==null&&k(h,g,_,T);break;case et:Ie(f,h,g,_,E,b,T,I,w);break;default:C&1?j(f,h,g,_,E,b,T,I,w):C&6?Ee(f,h,g,_,E,b,T,I,w):(C&64||C&128)&&v.process(f,h,g,_,E,b,T,I,w,D)}L!=null&&E&&mr(L,f&&f.ref,b,h||f,!h)},F=(f,h,g,_)=>{if(f==null)r(h.el=a(h.children),g,_);else{const E=h.el=f.el;h.children!==f.children&&l(E,h.children)}},x=(f,h,g,_)=>{f==null?r(h.el=c(h.children||""),g,_):h.el=f.el},k=(f,h,g,_)=>{[f.el,f.anchor]=S(f.children,h,g,_,f.el,f.anchor)},N=({el:f,anchor:h},g,_)=>{let E;for(;f&&f!==h;)E=p(f),r(f,g,_),f=E;r(h,g,_)},O=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),s(f),f=g;s(h)},j=(f,h,g,_,E,b,T,I,w)=>{h.type==="svg"?T="svg":h.type==="math"&&(T="mathml"),f==null?ae(h,g,_,E,b,T,I,w):W(f,h,E,b,T,I,w)},ae=(f,h,g,_,E,b,T,I)=>{let w,v;const{props:L,shapeFlag:C,transition:M,dirs:$}=f;if(w=f.el=o(f.type,b,L&&L.is,L),C&8?u(w,f.children):C&16&&K(f.children,w,null,_,E,Yr(f,b),T,I),$&&Mt(f,null,_,"created"),G(w,f,f.scopeId,T,_),L){for(const ne in L)ne!=="value"&&!En(ne)&&i(w,ne,null,L[ne],b,_);"value"in L&&i(w,"value",null,L.value,b),(v=L.onVnodeBeforeMount)&&Be(v,_,f)}$&&Mt(f,null,_,"beforeMount");const z=Bu(E,M);z&&M.beforeEnter(w),r(w,h,g),((v=L&&L.onVnodeMounted)||z||$)&&Re(()=>{v&&Be(v,_,f),z&&M.enter(w),$&&Mt(f,null,_,"mounted")},E)},G=(f,h,g,_,E)=>{if(g&&m(f,g),_)for(let b=0;b<_.length;b++)m(f,_[b]);if(E){let b=E.subTree;if(h===b||Ga(b.type)&&(b.ssContent===h||b.ssFallback===h)){const T=E.vnode;G(f,T,T.scopeId,T.slotScopeIds,E.parent)}}},K=(f,h,g,_,E,b,T,I,w=0)=>{for(let v=w;v<f.length;v++){const L=f[v]=I?mt(f[v]):Ve(f[v]);A(null,L,h,g,_,E,b,T,I)}},W=(f,h,g,_,E,b,T)=>{const I=h.el=f.el;let{patchFlag:w,dynamicChildren:v,dirs:L}=h;w|=f.patchFlag&16;const C=f.props||Z,M=h.props||Z;let $;if(g&&Lt(g,!1),($=M.onVnodeBeforeUpdate)&&Be($,g,h,f),L&&Mt(h,f,g,"beforeUpdate"),g&&Lt(g,!0),(C.innerHTML&&M.innerHTML==null||C.textContent&&M.textContent==null)&&u(I,""),v?se(f.dynamicChildren,v,I,g,_,Yr(h,E),b):T||J(f,h,I,null,g,_,Yr(h,E),b,!1),w>0){if(w&16)pe(I,C,M,g,E);else if(w&2&&C.class!==M.class&&i(I,"class",null,M.class,E),w&4&&i(I,"style",C.style,M.style,E),w&8){const z=h.dynamicProps;for(let ne=0;ne<z.length;ne++){const Q=z[ne],Se=C[Q],we=M[Q];(we!==Se||Q==="value")&&i(I,Q,Se,we,E,g)}}w&1&&f.children!==h.children&&u(I,h.children)}else!T&&v==null&&pe(I,C,M,g,E);(($=M.onVnodeUpdated)||L)&&Re(()=>{$&&Be($,g,h,f),L&&Mt(h,f,g,"updated")},_)},se=(f,h,g,_,E,b,T)=>{for(let I=0;I<h.length;I++){const w=f[I],v=h[I],L=w.el&&(w.type===et||!gn(w,v)||w.shapeFlag&70)?d(w.el):g;A(w,v,L,null,_,E,b,T,!0)}},pe=(f,h,g,_,E)=>{if(h!==g){if(h!==Z)for(const b in h)!En(b)&&!(b in g)&&i(f,b,h[b],null,E,_);for(const b in g){if(En(b))continue;const T=g[b],I=h[b];T!==I&&b!=="value"&&i(f,b,I,T,E,_)}"value"in g&&i(f,"value",h.value,g.value,E)}},Ie=(f,h,g,_,E,b,T,I,w)=>{const v=h.el=f?f.el:a(""),L=h.anchor=f?f.anchor:a("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:$}=h;$&&(I=I?I.concat($):$),f==null?(r(v,g,_),r(L,g,_),K(h.children||[],g,L,E,b,T,I,w)):C>0&&C&64&&M&&f.dynamicChildren?(se(f.dynamicChildren,M,g,E,b,T,I),(h.key!=null||E&&h===E.subTree)&&ja(f,h,!0)):J(f,h,g,L,E,b,T,I,w)},Ee=(f,h,g,_,E,b,T,I,w)=>{h.slotScopeIds=I,f==null?h.shapeFlag&512?E.ctx.activate(h,g,_,T,w):xt(h,g,_,E,b,T,w):ut(f,h,w)},xt=(f,h,g,_,E,b,T)=>{const I=f.component=af(f,_,E);if(Ca(f)&&(I.ctx.renderer=D),lf(I,!1,T),I.asyncDep){if(E&&E.registerDep(I,ie,T),!f.el){const w=I.subTree=Pe(Vt);x(null,w,h,g)}}else ie(I,f,h,g,E,b,T)},ut=(f,h,g)=>{const _=h.component=f.component;if(Yu(f,h,g))if(_.asyncDep&&!_.asyncResolved){V(_,h,g);return}else _.next=h,_.update();else h.el=f.el,_.vnode=h},ie=(f,h,g,_,E,b,T)=>{const I=()=>{if(f.isMounted){let{next:C,bu:M,u:$,parent:z,vnode:ne}=f;{const He=Va(f);if(He){C&&(C.el=ne.el,V(f,C,T)),He.asyncDep.then(()=>{f.isUnmounted||I()});return}}let Q=C,Se;Lt(f,!1),C?(C.el=ne.el,V(f,C,T)):C=ne,M&&sr(M),(Se=C.props&&C.props.onVnodeBeforeUpdate)&&Be(Se,z,C,ne),Lt(f,!0);const we=Pi(f),Fe=f.subTree;f.subTree=we,A(Fe,we,d(Fe.el),y(Fe),f,E,b),C.el=we.el,Q===null&&Xu(f,we.el),$&&Re($,E),(Se=C.props&&C.props.onVnodeUpdated)&&Re(()=>Be(Se,z,C,ne),E)}else{let C;const{el:M,props:$}=h,{bm:z,m:ne,parent:Q,root:Se,type:we}=f,Fe=In(h);Lt(f,!1),z&&sr(z),!Fe&&(C=$&&$.onVnodeBeforeMount)&&Be(C,Q,h),Lt(f,!0);{Se.ce&&Se.ce._injectChildStyle(we);const He=f.subTree=Pi(f);A(null,He,g,_,f,E,b),h.el=He.el}if(ne&&Re(ne,E),!Fe&&(C=$&&$.onVnodeMounted)){const He=h;Re(()=>Be(C,Q,He),E)}(h.shapeFlag&256||Q&&In(Q.vnode)&&Q.vnode.shapeFlag&256)&&f.a&&Re(f.a,E),f.isMounted=!0,h=g=_=null}};f.scope.on();const w=f.effect=new na(I);f.scope.off();const v=f.update=w.run.bind(w),L=f.job=w.runIfDirty.bind(w);L.i=f,L.id=f.uid,w.scheduler=()=>Qs(L),Lt(f,!0),v()},V=(f,h,g)=>{h.component=f;const _=f.vnode.props;f.vnode=h,f.next=null,xu(f,h.props,_,g),Fu(f,h.children,g),At(),vi(f),Pt()},J=(f,h,g,_,E,b,T,I,w=!1)=>{const v=f&&f.children,L=f?f.shapeFlag:0,C=h.children,{patchFlag:M,shapeFlag:$}=h;if(M>0){if(M&128){ft(v,C,g,_,E,b,T,I,w);return}else if(M&256){Ye(v,C,g,_,E,b,T,I,w);return}}$&8?(L&16&&Oe(v,E,b),C!==v&&u(g,C)):L&16?$&16?ft(v,C,g,_,E,b,T,I,w):Oe(v,E,b,!0):(L&8&&u(g,""),$&16&&K(C,g,_,E,b,T,I,w))},Ye=(f,h,g,_,E,b,T,I,w)=>{f=f||en,h=h||en;const v=f.length,L=h.length,C=Math.min(v,L);let M;for(M=0;M<C;M++){const $=h[M]=w?mt(h[M]):Ve(h[M]);A(f[M],$,g,null,E,b,T,I,w)}v>L?Oe(f,E,b,!0,!1,C):K(h,g,_,E,b,T,I,w,C)},ft=(f,h,g,_,E,b,T,I,w)=>{let v=0;const L=h.length;let C=f.length-1,M=L-1;for(;v<=C&&v<=M;){const $=f[v],z=h[v]=w?mt(h[v]):Ve(h[v]);if(gn($,z))A($,z,g,null,E,b,T,I,w);else break;v++}for(;v<=C&&v<=M;){const $=f[C],z=h[M]=w?mt(h[M]):Ve(h[M]);if(gn($,z))A($,z,g,null,E,b,T,I,w);else break;C--,M--}if(v>C){if(v<=M){const $=M+1,z=$<L?h[$].el:_;for(;v<=M;)A(null,h[v]=w?mt(h[v]):Ve(h[v]),g,z,E,b,T,I,w),v++}}else if(v>M)for(;v<=C;)ve(f[v],E,b,!0),v++;else{const $=v,z=v,ne=new Map;for(v=z;v<=M;v++){const Te=h[v]=w?mt(h[v]):Ve(h[v]);Te.key!=null&&ne.set(Te.key,v)}let Q,Se=0;const we=M-z+1;let Fe=!1,He=0;const hn=new Array(we);for(v=0;v<we;v++)hn[v]=0;for(v=$;v<=C;v++){const Te=f[v];if(Se>=we){ve(Te,E,b,!0);continue}let $e;if(Te.key!=null)$e=ne.get(Te.key);else for(Q=z;Q<=M;Q++)if(hn[Q-z]===0&&gn(Te,h[Q])){$e=Q;break}$e===void 0?ve(Te,E,b,!0):(hn[$e-z]=v+1,$e>=He?He=$e:Fe=!0,A(Te,h[$e],g,null,E,b,T,I,w),Se++)}const mi=Fe?ju(hn):en;for(Q=mi.length-1,v=we-1;v>=0;v--){const Te=z+v,$e=h[Te],_i=Te+1<L?h[Te+1].el:_;hn[v]===0?A(null,$e,g,_i,E,b,T,I,w):Fe&&(Q<0||v!==mi[Q]?Ue($e,g,_i,2):Q--)}}},Ue=(f,h,g,_,E=null)=>{const{el:b,type:T,transition:I,children:w,shapeFlag:v}=f;if(v&6){Ue(f.component.subTree,h,g,_);return}if(v&128){f.suspense.move(h,g,_);return}if(v&64){T.move(f,h,g,D);return}if(T===et){r(b,h,g);for(let C=0;C<w.length;C++)Ue(w[C],h,g,_);r(f.anchor,h,g);return}if(T===Xr){N(f,h,g);return}if(_!==2&&v&1&&I)if(_===0)I.beforeEnter(b),r(b,h,g),Re(()=>I.enter(b),E);else{const{leave:C,delayLeave:M,afterLeave:$}=I,z=()=>r(b,h,g),ne=()=>{C(b,()=>{z(),$&&$()})};M?M(b,z,ne):ne()}else r(b,h,g)},ve=(f,h,g,_=!1,E=!1)=>{const{type:b,props:T,ref:I,children:w,dynamicChildren:v,shapeFlag:L,patchFlag:C,dirs:M,cacheIndex:$}=f;if(C===-2&&(E=!1),I!=null&&mr(I,null,g,f,!0),$!=null&&(h.renderCache[$]=void 0),L&256){h.ctx.deactivate(f);return}const z=L&1&&M,ne=!In(f);let Q;if(ne&&(Q=T&&T.onVnodeBeforeUnmount)&&Be(Q,h,f),L&6)Zn(f.component,g,_);else{if(L&128){f.suspense.unmount(g,_);return}z&&Mt(f,null,h,"beforeUnmount"),L&64?f.type.remove(f,h,g,D,_):v&&!v.hasOnce&&(b!==et||C>0&&C&64)?Oe(v,h,g,!1,!0):(b===et&&C&384||!E&&L&16)&&Oe(w,h,g),_&&zt(f)}(ne&&(Q=T&&T.onVnodeUnmounted)||z)&&Re(()=>{Q&&Be(Q,h,f),z&&Mt(f,null,h,"unmounted")},g)},zt=f=>{const{type:h,el:g,anchor:_,transition:E}=f;if(h===et){Gt(g,_);return}if(h===Xr){O(f);return}const b=()=>{s(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:T,delayLeave:I}=E,w=()=>T(g,b);I?I(f.el,b,w):w()}else b()},Gt=(f,h)=>{let g;for(;f!==h;)g=p(f),s(f),f=g;s(h)},Zn=(f,h,g)=>{const{bum:_,scope:E,job:b,subTree:T,um:I,m:w,a:v}=f;Ai(w),Ai(v),_&&sr(_),E.stop(),b&&(b.flags|=8,ve(T,f,h,g)),I&&Re(I,h),Re(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Oe=(f,h,g,_=!1,E=!1,b=0)=>{for(let T=b;T<f.length;T++)ve(f[T],h,g,_,E)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),g=h&&h[au];return g?p(g):h};let P=!1;const R=(f,h,g)=>{f==null?h._vnode&&ve(h._vnode,null,null,!0):A(h._vnode||null,f,h,null,null,null,g),h._vnode=f,P||(P=!0,vi(),Ia(),P=!1)},D={p:A,um:ve,m:Ue,r:zt,mt:xt,mc:K,pc:J,pbc:se,n:y,o:t};return{render:R,hydrate:void 0,createApp:ku(R)}}function Yr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Lt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Bu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ja(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=mt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ja(o,a)),a.type===Lr&&(a.el=o.el)}}function ju(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Va(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Va(e)}function Ai(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Vu=Symbol.for("v-scx"),Wu=()=>xe(Vu);function Tn(t,e,n){return Wa(t,e,n)}function Wa(t,e,n=Z){const{immediate:r,deep:s,flush:i,once:o}=n,a=he({},n),c=e&&r||!e&&i!=="post";let l;if(Mn){if(i==="sync"){const m=Wu();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Ke,m.resume=Ke,m.pause=Ke,m}}const u=ue;a.call=(m,S,A)=>qe(m,u,S,A);let d=!1;i==="post"?a.scheduler=m=>{Re(m,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,S)=>{S?m():Qs(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=nu(t,e,a);return Mn&&(l?l.push(p):c&&p()),p}function Ku(t,e,n){const r=this.proxy,s=le(t)?t.includes(".")?Ka(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=Kn(this),a=Wa(s,i.bind(r),n);return o(),a}function Ka(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const zu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ne(e)}Modifiers`]||t[`${Kt(e)}Modifiers`];function Gu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&zu(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>le(u)?u.trim():u)),o.number&&(s=n.map(hs)));let a,c=r[a=Wr(e)]||r[a=Wr(Ne(e))];!c&&i&&(c=r[a=Wr(Kt(e))]),c&&qe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qe(l,t,6,s)}}function za(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const u=za(l,e,!0);u&&(a=!0,he(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(oe(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):he(o,i),oe(t)&&r.set(t,o),o)}function Mr(t,e){return!t||!Rr(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,Kt(e))||X(t,e))}function Pi(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:p,setupState:m,ctx:S,inheritAttrs:A}=t,F=gr(t);let x,k;try{if(n.shapeFlag&4){const O=s||r,j=O;x=Ve(l.call(j,O,u,d,m,p,S)),k=a}else{const O=e;x=Ve(O.length>1?O(d,{attrs:a,slots:o,emit:c}):O(d,null)),k=e.props?a:qu(a)}}catch(O){Rn.length=0,Dr(O,t,1),x=Pe(Vt)}let N=x;if(k&&A!==!1){const O=Object.keys(k),{shapeFlag:j}=N;O.length&&j&7&&(i&&O.some(Fs)&&(k=Ju(k,i)),N=cn(N,k,!1,!0))}return n.dirs&&(N=cn(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&Zs(N,n.transition),x=N,gr(F),x}const qu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Rr(n))&&((e||(e={}))[n]=t[n]);return e},Ju=(t,e)=>{const n={};for(const r in t)(!Fs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Yu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Oi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!Mr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Oi(r,o,l):!0:!!o;return!1}function Oi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Mr(n,i))return!0}return!1}function Xu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ga=t=>t.__isSuspense;function Qu(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):iu(t)}const et=Symbol.for("v-fgt"),Lr=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),Xr=Symbol.for("v-stc"),Rn=[];let Ae=null;function qa(t=!1){Rn.push(Ae=t?null:[])}function Zu(){Rn.pop(),Ae=Rn[Rn.length-1]||null}let xn=1;function ki(t,e=!1){xn+=t,t<0&&Ae&&e&&(Ae.hasOnce=!0)}function Ja(t){return t.dynamicChildren=xn>0?Ae||en:null,Zu(),xn>0&&Ae&&Ae.push(t),t}function e_(t,e,n,r,s,i){return Ja(Qa(t,e,n,r,s,i,!0))}function Ya(t,e,n,r,s){return Ja(Pe(t,e,n,r,s,!0))}function yr(t){return t?t.__v_isVNode===!0:!1}function gn(t,e){return t.type===e.type&&t.key===e.key}const Xa=({key:t})=>t??null,or=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?le(t)||ce(t)||B(t)?{i:ye,r:t,k:e,f:!!n}:t:null);function Qa(t,e=null,n=null,r=0,s=null,i=t===et?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xa(e),ref:e&&or(e),scopeId:Ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ye};return a?(ni(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=le(n)?8:16),xn>0&&!o&&Ae&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ae.push(c),c}const Pe=ef;function ef(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wu)&&(t=Vt),yr(t)){const a=cn(t,e,!0);return n&&ni(a,n),xn>0&&!i&&Ae&&(a.shapeFlag&6?Ae[Ae.indexOf(t)]=a:Ae.push(a)),a.patchFlag=-2,a}if(pf(t)&&(t=t.__vccOpts),e){e=tf(e);let{class:a,style:c}=e;a&&!le(a)&&(e.class=js(a)),oe(c)&&(Js(c)&&!H(c)&&(c=he({},c)),e.style=Bs(c))}const o=le(t)?1:Ga(t)?128:cu(t)?64:oe(t)?4:B(t)?2:0;return Qa(t,e,n,r,s,o,i,!0)}function tf(t){return t?Js(t)||Ma(t)?he({},t):t:null}function cn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?rf(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Xa(l),ref:e&&e.ref?n&&i?H(i)?i.concat(or(e)):[i,or(e)]:or(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cn(t.ssContent),ssFallback:t.ssFallback&&cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Zs(u,c.clone(u)),u}function nf(t=" ",e=0){return Pe(Lr,null,t,e)}function t_(t="",e=!1){return e?(qa(),Ya(Vt,null,t)):Pe(Vt,null,t)}function Ve(t){return t==null||typeof t=="boolean"?Pe(Vt):H(t)?Pe(et,null,t.slice()):yr(t)?mt(t):Pe(Lr,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cn(t)}function ni(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ni(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ma(e)?e._ctx=ye:s===3&&ye&&(ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:ye},n=32):(e=String(e),r&64?(n=16,e=[nf(e)]):n=8);t.children=e,t.shapeFlag|=n}function rf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=js([e.class,r.class]));else if(s==="style")e.style=Bs([e.style,r.style]);else if(Rr(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Be(t,e,n,r=null){qe(t,e,7,[n,r])}const sf=Na();let of=0;function af(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sf,i={uid:of++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ua(r,s),emitsOptions:za(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gu.bind(null,i),t.ce&&t.ce(i),i}let ue=null;const cf=()=>ue||ye;let br,ws;{const t=Or(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};br=e("__VUE_INSTANCE_SETTERS__",n=>ue=n),ws=e("__VUE_SSR_SETTERS__",n=>Mn=n)}const Kn=t=>{const e=ue;return br(t),t.scope.on(),()=>{t.scope.off(),br(e)}},Ni=()=>{ue&&ue.scope.off(),br(null)};function Za(t){return t.vnode.shapeFlag&4}let Mn=!1;function lf(t,e=!1,n=!1){e&&ws(e);const{props:r,children:s}=t.vnode,i=Za(t);Du(t,r,i,e),Uu(t,s,n);const o=i?uf(t,e):void 0;return e&&ws(!1),o}function uf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Su);const{setup:r}=n;if(r){At();const s=t.setupContext=r.length>1?df(t):null,i=Kn(t),o=Wn(r,t,0,[t.props,s]),a=zo(o);if(Pt(),i(),(a||t.sp)&&!In(t)&&Ra(t),a){if(o.then(Ni,Ni),e)return o.then(c=>{Di(t,c)}).catch(c=>{Dr(c,t,0)});t.asyncDep=o}else Di(t,o)}else ec(t)}function Di(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=Ea(e)),ec(t)}function ec(t,e,n){const r=t.type;t.render||(t.render=r.render||Ke);{const s=Kn(t);At();try{Tu(t)}finally{Pt(),s()}}}const ff={get(t,e){return fe(t,"get",""),t[e]}};function df(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ff),slots:t.slots,emit:t.emit,expose:e}}function Ur(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ea(Ys(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Sn)return Sn[n](t)},has(e,n){return n in e||n in Sn}})):t.proxy}function hf(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function pf(t){return B(t)&&"__vccOpts"in t}const Ce=(t,e)=>eu(t,e,Mn);function tc(t,e,n){const r=arguments.length;return r===2?oe(e)&&!H(e)?yr(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&yr(n)&&(n=[n]),Pe(t,e,n))}const gf="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Is;const xi=typeof window<"u"&&window.trustedTypes;if(xi)try{Is=xi.createPolicy("vue",{createHTML:t=>t})}catch{}const nc=Is?t=>Is.createHTML(t):t=>t,mf="http://www.w3.org/2000/svg",_f="http://www.w3.org/1998/Math/MathML",Ze=typeof document<"u"?document:null,Mi=Ze&&Ze.createElement("template"),yf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ze.createElementNS(mf,t):e==="mathml"?Ze.createElementNS(_f,t):n?Ze.createElement(t,{is:n}):Ze.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ze.createTextNode(t),createComment:t=>Ze.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ze.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Mi.innerHTML=nc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Mi.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bf=Symbol("_vtc");function Ef(t,e,n){const r=t[bf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Li=Symbol("_vod"),vf=Symbol("_vsh"),wf=Symbol(""),If=/(^|;)\s*display\s*:/;function Sf(t,e,n){const r=t.style,s=le(n);let i=!1;if(n&&!s){if(e)if(le(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ar(r,a,"")}else for(const o in e)n[o]==null&&ar(r,o,"");for(const o in n)o==="display"&&(i=!0),ar(r,o,n[o])}else if(s){if(e!==n){const o=r[wf];o&&(n+=";"+o),r.cssText=n,i=If.test(n)}}else e&&t.removeAttribute("style");Li in t&&(t[Li]=i?r.display:"",t[vf]&&(r.display="none"))}const Ui=/\s*!important$/;function ar(t,e,n){if(H(n))n.forEach(r=>ar(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Tf(t,e);Ui.test(n)?t.setProperty(Kt(r),n.replace(Ui,""),"important"):t[r]=n}}const Fi=["Webkit","Moz","ms"],Qr={};function Tf(t,e){const n=Qr[e];if(n)return n;let r=Ne(e);if(r!=="filter"&&r in t)return Qr[e]=r;r=Pr(r);for(let s=0;s<Fi.length;s++){const i=Fi[s]+r;if(i in t)return Qr[e]=i}return e}const Hi="http://www.w3.org/1999/xlink";function $i(t,e,n,r,s,i=Rl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hi,e.slice(6,e.length)):t.setAttributeNS(Hi,e,n):n==null||i&&!Yo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ct(n)?String(n):n)}function Bi(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?nc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Yo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Xt(t,e,n,r){t.addEventListener(e,n,r)}function Rf(t,e,n,r){t.removeEventListener(e,n,r)}const ji=Symbol("_vei");function Cf(t,e,n,r,s=null){const i=t[ji]||(t[ji]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Af(e);if(r){const l=i[e]=kf(r,s);Xt(t,a,l,c)}else o&&(Rf(t,a,o,c),i[e]=void 0)}}const Vi=/(?:Once|Passive|Capture)$/;function Af(t){let e;if(Vi.test(t)){e={};let r;for(;r=t.match(Vi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kt(t.slice(2)),e]}let Zr=0;const Pf=Promise.resolve(),Of=()=>Zr||(Pf.then(()=>Zr=0),Zr=Date.now());function kf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qe(Nf(r,n.value),e,5,[r])};return n.value=t,n.attached=Of(),n}function Nf(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Df=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Ef(t,r,o):e==="style"?Sf(t,n,r):Rr(e)?Fs(e)||Cf(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xf(t,e,r,o))?(Bi(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$i(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!le(r))?Bi(t,Ne(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$i(t,e,r,o))};function xf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wi(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wi(e)&&le(n)?!1:e in t}const Ki=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>sr(e,n):e};function Mf(t){t.target.composing=!0}function zi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const es=Symbol("_assign"),n_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[es]=Ki(s);const i=r||s.props&&s.props.type==="number";Xt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=hs(a)),t[es](a)}),n&&Xt(t,"change",()=>{t.value=t.value.trim()}),e||(Xt(t,"compositionstart",Mf),Xt(t,"compositionend",zi),Xt(t,"change",zi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[es]=Ki(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?hs(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Lf=["ctrl","shift","alt","meta"],Uf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Lf.some(n=>t[`${n}Key`]&&!e.includes(n))},r_=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Uf[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Ff=he({patchProp:Df},yf);let Gi;function Hf(){return Gi||(Gi=Hu(Ff))}const $f=(...t)=>{const e=Hf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=jf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Bf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Bf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function jf(t){return le(t)?document.querySelector(t):t}/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let rc;const Fr=t=>rc=t,sc=Symbol();function Ss(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Cn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Cn||(Cn={}));function Vf(){const t=ea(!0),e=t.run(()=>Nr({}));let n=[],r=[];const s=Ys({install(i){Fr(s),s._a=i,i.provide(sc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ic=()=>{};function qi(t,e,n,r=ic){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ta()&&Al(s),s}function Jt(t,...e){t.slice().forEach(n=>{n(...e)})}const Wf=t=>t(),Ji=Symbol(),ts=Symbol();function Ts(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ss(s)&&Ss(r)&&t.hasOwnProperty(n)&&!ce(r)&&!It(r)?t[n]=Ts(s,r):t[n]=r}return t}const Kf=Symbol();function zf(t){return!Ss(t)||!t.hasOwnProperty(Kf)}const{assign:pt}=Object;function Gf(t){return!!(ce(t)&&t.effect)}function qf(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Yl(n.state.value[t]);return pt(u,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Ys(Ce(()=>{Fr(n);const m=n._s.get(t);return o[p].call(m,m)})),d),{}))}return c=oc(t,l,e,n,r,!0),c}function oc(t,e,n={},r,s,i){let o;const a=pt({actions:{}},n),c={deep:!0};let l,u,d=[],p=[],m;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),Nr({});let A;function F(K){let W;l=u=!1,typeof K=="function"?(K(r.state.value[t]),W={type:Cn.patchFunction,storeId:t,events:m}):(Ts(r.state.value[t],K),W={type:Cn.patchObject,payload:K,storeId:t,events:m});const se=A=Symbol();Xs().then(()=>{A===se&&(l=!0)}),u=!0,Jt(d,W,r.state.value[t])}const x=i?function(){const{state:W}=n,se=W?W():{};this.$patch(pe=>{pt(pe,se)})}:ic;function k(){o.stop(),d=[],p=[],r._s.delete(t)}const N=(K,W="")=>{if(Ji in K)return K[ts]=W,K;const se=function(){Fr(r);const pe=Array.from(arguments),Ie=[],Ee=[];function xt(V){Ie.push(V)}function ut(V){Ee.push(V)}Jt(p,{args:pe,name:se[ts],store:j,after:xt,onError:ut});let ie;try{ie=K.apply(this&&this.$id===t?this:j,pe)}catch(V){throw Jt(Ee,V),V}return ie instanceof Promise?ie.then(V=>(Jt(Ie,V),V)).catch(V=>(Jt(Ee,V),Promise.reject(V))):(Jt(Ie,ie),ie)};return se[Ji]=!0,se[ts]=W,se},O={_p:r,$id:t,$onAction:qi.bind(null,p),$patch:F,$reset:x,$subscribe(K,W={}){const se=qi(d,K,W.detached,()=>pe()),pe=o.run(()=>Tn(()=>r.state.value[t],Ie=>{(W.flush==="sync"?u:l)&&K({storeId:t,type:Cn.direct,events:m},Ie)},pt({},c,W)));return se},$dispose:k},j=Vn(O);r._s.set(t,j);const G=(r._a&&r._a.runWithContext||Wf)(()=>r._e.run(()=>(o=ea()).run(()=>e({action:N}))));for(const K in G){const W=G[K];if(ce(W)&&!Gf(W)||It(W))i||(S&&zf(W)&&(ce(W)?W.value=S[K]:Ts(W,S[K])),r.state.value[t][K]=W);else if(typeof W=="function"){const se=N(W,K);G[K]=se,a.actions[K]=W}}return pt(j,G),pt(q(j),G),Object.defineProperty(j,"$state",{get:()=>r.state.value[t],set:K=>{F(W=>{pt(W,K)})}}),r._p.forEach(K=>{pt(j,o.run(()=>K({store:j,app:r._a,pinia:r,options:a})))}),S&&i&&n.hydrate&&n.hydrate(j.$state,S),l=!0,u=!0,j}/*! #__NO_SIDE_EFFECTS__ */function ac(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Nu();return a=a||(l?xe(sc,null):null),a&&Fr(a),a=rc,a._s.has(r)||(i?oc(r,e,s,a):qf(r,s,a)),a._s.get(r)}return o.$id=r,o}var Yi={};/**
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
 */const cc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new Yf;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const S=l<<6&192|d;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xf=function(t){const e=cc(t);return lc.encodeByteArray(e,!0)},uc=function(t){return Xf(t).replace(/\./g,"")},fc=function(t){try{return lc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zf=()=>Qf().__FIREBASE_DEFAULTS__,ed=()=>{if(typeof process>"u"||typeof Yi>"u")return;const t=Yi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},td=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fc(t[1]);return e&&JSON.parse(e)},ri=()=>{try{return Zf()||ed()||td()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nd=t=>{var e,n;return(n=(e=ri())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dc=()=>{var t;return(t=ri())===null||t===void 0?void 0:t.config},hc=t=>{var e;return(e=ri())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function id(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function od(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ad(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cd(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ld(){try{return typeof indexedDB=="object"}catch{return!1}}function ud(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const fd="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fd,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?dd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ot(s,a,r)}}function dd(t,e){return t.replace(hd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hd=/\{\$([^}]+)}/g;function pd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Er(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xi(i)&&Xi(o)){if(!Er(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xi(t){return t!==null&&typeof t=="object"}/**
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
 */function Gn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function bn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gd(t,e){const n=new md(t,e);return n.subscribe.bind(n)}class md{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_d(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ns),s.error===void 0&&(s.error=ns),s.complete===void 0&&(s.complete=ns);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _d(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ns(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ft="[DEFAULT]";/**
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
 */class yd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ed(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bd(t){return t===Ft?void 0:t}function Ed(t){return t.instantiationMode==="EAGER"}/**
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
 */class vd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const wd={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Id=te.INFO,Sd={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Td=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Sd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pc{constructor(e){this.name=e,this._logLevel=Id,this._logHandler=Td,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Rd=(t,e)=>e.some(n=>t instanceof n);let Qi,Zi;function Cd(){return Qi||(Qi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ad(){return Zi||(Zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gc=new WeakMap,Rs=new WeakMap,mc=new WeakMap,rs=new WeakMap,si=new WeakMap;function Pd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(St(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gc.set(n,t)}).catch(()=>{}),si.set(e,t),e}function Od(t){if(Rs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rs.set(t,e)}let Cs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kd(t){Cs=t(Cs)}function Nd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ss(this),e,...n);return mc.set(r,e.sort?e.sort():[e]),St(r)}:Ad().includes(t)?function(...e){return t.apply(ss(this),e),St(gc.get(this))}:function(...e){return St(t.apply(ss(this),e))}}function Dd(t){return typeof t=="function"?Nd(t):(t instanceof IDBTransaction&&Od(t),Rd(t,Cd())?new Proxy(t,Cs):t)}function St(t){if(t instanceof IDBRequest)return Pd(t);if(rs.has(t))return rs.get(t);const e=Dd(t);return e!==t&&(rs.set(t,e),si.set(e,t)),e}const ss=t=>si.get(t);function xd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=St(o);return r&&o.addEventListener("upgradeneeded",c=>{r(St(o.result),c.oldVersion,c.newVersion,St(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Md=["get","getKey","getAll","getAllKeys","count"],Ld=["put","add","delete","clear"],is=new Map;function eo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(is.get(e))return is.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ld.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Md.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return is.set(e,i),i}kd(t=>({...t,get:(e,n,r)=>eo(e,n)||t.get(e,n,r),has:(e,n)=>!!eo(e,n)||t.has(e,n)}));/**
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
 */class Ud{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const As="@firebase/app",to="0.10.17";/**
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
 */const at=new pc("@firebase/app"),Hd="@firebase/app-compat",$d="@firebase/analytics-compat",Bd="@firebase/analytics",jd="@firebase/app-check-compat",Vd="@firebase/app-check",Wd="@firebase/auth",Kd="@firebase/auth-compat",zd="@firebase/database",Gd="@firebase/data-connect",qd="@firebase/database-compat",Jd="@firebase/functions",Yd="@firebase/functions-compat",Xd="@firebase/installations",Qd="@firebase/installations-compat",Zd="@firebase/messaging",eh="@firebase/messaging-compat",th="@firebase/performance",nh="@firebase/performance-compat",rh="@firebase/remote-config",sh="@firebase/remote-config-compat",ih="@firebase/storage",oh="@firebase/storage-compat",ah="@firebase/firestore",ch="@firebase/vertexai",lh="@firebase/firestore-compat",uh="firebase",fh="11.1.0";/**
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
 */const Ps="[DEFAULT]",dh={[As]:"fire-core",[Hd]:"fire-core-compat",[Bd]:"fire-analytics",[$d]:"fire-analytics-compat",[Vd]:"fire-app-check",[jd]:"fire-app-check-compat",[Wd]:"fire-auth",[Kd]:"fire-auth-compat",[zd]:"fire-rtdb",[Gd]:"fire-data-connect",[qd]:"fire-rtdb-compat",[Jd]:"fire-fn",[Yd]:"fire-fn-compat",[Xd]:"fire-iid",[Qd]:"fire-iid-compat",[Zd]:"fire-fcm",[eh]:"fire-fcm-compat",[th]:"fire-perf",[nh]:"fire-perf-compat",[rh]:"fire-rc",[sh]:"fire-rc-compat",[ih]:"fire-gcs",[oh]:"fire-gcs-compat",[ah]:"fire-fst",[lh]:"fire-fst-compat",[ch]:"fire-vertex","fire-js":"fire-js",[uh]:"fire-js-all"};/**
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
 */const vr=new Map,hh=new Map,Os=new Map;function no(t,e){try{t.container.addComponent(e)}catch(n){at.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(Os.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;Os.set(e,t);for(const n of vr.values())no(n,t);for(const n of hh.values())no(n,t);return!0}function _c(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function We(t){return t.settings!==void 0}/**
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
 */const ph={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tt=new zn("app","Firebase",ph);/**
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
 */class gh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const qn=fh;function yc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ps,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tt.create("bad-app-name",{appName:String(s)});if(n||(n=dc()),!n)throw Tt.create("no-options");const i=vr.get(s);if(i){if(Er(n,i.options)&&Er(r,i.config))return i;throw Tt.create("duplicate-app",{appName:s})}const o=new vd(s);for(const c of Os.values())o.addComponent(c);const a=new gh(n,r,o);return vr.set(s,a),a}function mh(t=Ps){const e=vr.get(t);if(!e&&t===Ps&&dc())return yc();if(!e)throw Tt.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let s=(r=dh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(a.join(" "));return}Ln(new ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const _h="firebase-heartbeat-database",yh=1,Un="firebase-heartbeat-store";let os=null;function bc(){return os||(os=xd(_h,yh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Un)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tt.create("idb-open",{originalErrorMessage:t.message})})),os}async function bh(t){try{const n=(await bc()).transaction(Un),r=await n.objectStore(Un).get(Ec(t));return await n.done,r}catch(e){if(e instanceof Ot)at.warn(e.message);else{const n=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(n.message)}}}async function ro(t,e){try{const r=(await bc()).transaction(Un,"readwrite");await r.objectStore(Un).put(e,Ec(t)),await r.done}catch(n){if(n instanceof Ot)at.warn(n.message);else{const r=Tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});at.warn(r.message)}}}function Ec(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Eh=1024,vh=30*24*60*60*1e3;class wh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=so();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=vh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){at.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=so(),{heartbeatsToSend:r,unsentEntries:s}=Ih(this._heartbeatsCache.heartbeats),i=uc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return at.warn(n),""}}}function so(){return new Date().toISOString().substring(0,10)}function Ih(t,e=Eh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),io(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),io(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ld()?ud().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ro(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ro(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function io(t){return uc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Th(t){Ln(new ln("platform-logger",e=>new Ud(e),"PRIVATE")),Ln(new ln("heartbeat",e=>new wh(e),"PRIVATE")),rn(As,to,t),rn(As,to,"esm2017"),rn("fire-js","")}Th("");function ii(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rh=vc,wc=new zn("auth","Firebase",vc());/**
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
 */const wr=new pc("@firebase/auth");function Ch(t,...e){wr.logLevel<=te.WARN&&wr.warn(`Auth (${qn}): ${t}`,...e)}function cr(t,...e){wr.logLevel<=te.ERROR&&wr.error(`Auth (${qn}): ${t}`,...e)}/**
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
 */function Me(t,...e){throw oi(t,...e)}function ze(t,...e){return oi(t,...e)}function Ic(t,e,n){const r=Object.assign(Object.assign({},Rh()),{[e]:n});return new zn("auth","Firebase",r).create(e,{appName:t.name})}function ot(t){return Ic(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wc.create(t,...e)}function U(t,e,...n){if(!t)throw oi(e,...n)}function rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cr(e),new Error(e)}function ct(t,e){t||rt(e)}/**
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
 */function ks(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ah(){return oo()==="http:"||oo()==="https:"}function oo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ph(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ah()||od()||"connection"in navigator)?navigator.onLine:!0}function Oh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ct(n>e,"Short delay should be less than long delay!"),this.isMobile=sd()||ad()}get(){return Ph()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ai(t,e){ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Sc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Nh=new Jn(3e4,6e4);function kt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nt(t,e,n,r,s={}){return Tc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Gn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return id()||(l.referrerPolicy="no-referrer"),Sc.fetch()(Rc(t,t.config.apiHost,n,a),l)})}async function Tc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kh),e);try{const s=new xh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw rr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw rr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ic(t,u,l);Me(t,u)}}catch(s){if(s instanceof Ot)throw s;Me(t,"network-request-failed",{message:String(s)})}}async function Yn(t,e,n,r,s={}){const i=await Nt(t,e,n,r,s);return"mfaPendingCredential"in i&&Me(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ai(t.config,s):`${t.config.apiScheme}://${s}`}function Dh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),Nh.get())})}}function rr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ze(t,e,r);return s.customData._tokenResponse=n,s}function ao(t){return t!==void 0&&t.enterprise!==void 0}class Mh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Dh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Lh(t,e){return Nt(t,"GET","/v2/recaptchaConfig",kt(t,e))}/**
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
 */async function Uh(t,e){return Nt(t,"POST","/v1/accounts:delete",e)}async function Cc(t,e){return Nt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function An(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fh(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=ci(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:An(as(s.auth_time)),issuedAtTime:An(as(s.iat)),expirationTime:An(as(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function as(t){return Number(t)*1e3}function ci(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cr("JWT malformed, contained fewer than 3 sections"),null;try{const s=fc(n);return s?JSON.parse(s):(cr("Failed to decode base64 JWT payload"),null)}catch(s){return cr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function co(t){const e=ci(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ot&&Hh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $h{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ns{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=An(this.lastLoginAt),this.creationTime=An(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hn(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fn(t,Cc(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ac(i.providerUserInfo):[],a=jh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ns(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Bh(t){const e=Je(t);await Hn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ac(t){return t.map(e=>{var{providerId:n}=e,r=ii(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Vh(t,e){const n=await Tc(t,{},async()=>{const r=Gn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Rc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Wh(t,e){return Nt(t,"POST","/v2/accounts:revokeToken",kt(t,e))}/**
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
 */class sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):co(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=co(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Vh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new sn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sn,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
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
 */function dt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class st{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $h(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ns(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fh(this,e)}reload(){return Bh(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(ot(this.auth));const e=await this.getIdToken();return await Fn(this,Uh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:O,isAnonymous:j,providerData:ae,stsTokenManager:G}=n;U(N&&G,e,"internal-error");const K=sn.fromJSON(this.name,G);U(typeof N=="string",e,"internal-error"),dt(d,e.name),dt(p,e.name),U(typeof O=="boolean",e,"internal-error"),U(typeof j=="boolean",e,"internal-error"),dt(m,e.name),dt(S,e.name),dt(A,e.name),dt(F,e.name),dt(x,e.name),dt(k,e.name);const W=new st({uid:N,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:j,photoURL:S,phoneNumber:m,tenantId:A,stsTokenManager:K,createdAt:x,lastLoginAt:k});return ae&&Array.isArray(ae)&&(W.providerData=ae.map(se=>Object.assign({},se))),F&&(W._redirectEventId=F),W}static async _fromIdTokenResponse(e,n,r=!1){const s=new sn;s.updateFromServerResponse(n);const i=new st({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hn(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ac(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new sn;a.updateFromIdToken(r);const c=new st({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ns(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const lo=new Map;function it(t){ct(t instanceof Function,"Expected a class definition");let e=lo.get(t);return e?(ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lo.set(t,e),e)}/**
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
 */class Pc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pc.type="NONE";const uo=Pc;/**
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
 */function lr(t,e,n){return`firebase:${t}:${e}:${n}`}class on{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=lr(this.userKey,s.apiKey,i),this.fullPersistenceKey=lr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new on(it(uo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||it(uo);const o=lr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=st._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new on(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new on(i,e,r))}}/**
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
 */function fo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Oc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mc(e))return"Blackberry";if(Lc(e))return"Webos";if(kc(e))return"Safari";if((e.includes("chrome/")||Nc(e))&&!e.includes("edge/"))return"Chrome";if(xc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Oc(t=be()){return/firefox\//i.test(t)}function kc(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nc(t=be()){return/crios\//i.test(t)}function Dc(t=be()){return/iemobile/i.test(t)}function xc(t=be()){return/android/i.test(t)}function Mc(t=be()){return/blackberry/i.test(t)}function Lc(t=be()){return/webos/i.test(t)}function li(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kh(t=be()){var e;return li(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zh(){return cd()&&document.documentMode===10}function Uc(t=be()){return li(t)||xc(t)||Lc(t)||Mc(t)||/windows phone/i.test(t)||Dc(t)}/**
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
 */function Fc(t,e=[]){let n;switch(t){case"Browser":n=fo(be());break;case"Worker":n=`${fo(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qn}/${r}`}/**
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
 */class Gh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qh(t,e={}){return Nt(t,"GET","/v2/passwordPolicy",kt(t,e))}/**
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
 */const Jh=6;class Yh{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Jh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Xh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ho(this),this.idTokenSubscription=new ho(this),this.beforeStateQueue=new Gh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Cc(this,{idToken:e}),r=await st._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(We(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Oh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(ot(this));const n=e?Je(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qh(this),n=new Yh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Wh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&it(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ch(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dt(t){return Je(t)}class ho{constructor(e){this.auth=e,this.observer=null,this.addObserver=gd(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qh(t){Hr=t}function Hc(t){return Hr.loadJS(t)}function Zh(){return Hr.recaptchaEnterpriseScript}function ep(){return Hr.gapiScript}function tp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class np{constructor(){this.enterprise=new rp}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class rp{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const sp="recaptcha-enterprise",$c="NO_RECAPTCHA";class ip{constructor(e){this.type=sp,this.auth=Dt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Lh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Mh(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ao(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o($c)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new np().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ao(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Zh();c.length!==0&&(c+=a),Hc(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function po(t,e,n,r=!1,s=!1){const i=new ip(t);let o;if(s)o=$c;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function go(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await po(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await po(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function op(t,e){const n=_c(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Er(i,e??{}))return s;Me(s,"already-initialized")}return n.initialize({options:e})}function ap(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cp(t,e,n){const r=Dt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Bc(e),{host:o,port:a}=lp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),up()}function Bc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lp(t){const e=Bc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:mo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:mo(o)}}}function mo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function up(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ui{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,n){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}async function fp(t,e){return Nt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dp(t,e){return Yn(t,"POST","/v1/accounts:signInWithPassword",kt(t,e))}/**
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
 */async function hp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",kt(t,e))}async function pp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",kt(t,e))}/**
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
 */class $n extends ui{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $n(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $n(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return go(e,n,"signInWithPassword",dp);case"emailLink":return hp(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return go(e,r,"signUpPassword",fp);case"emailLink":return pp(e,{idToken:n,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function an(t,e){return Yn(t,"POST","/v1/accounts:signInWithIdp",kt(t,e))}/**
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
 */const gp="http://localhost";class Wt extends ui{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ii(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Wt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,an(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}buildRequest(){const e={requestUri:gp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gn(n)}return e}}/**
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
 */function mp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _p(t){const e=yn(bn(t)).link,n=e?yn(bn(e)).deep_link_id:null,r=yn(bn(t)).deep_link_id;return(r?yn(bn(r)).link:null)||r||n||e||t}class fi{constructor(e){var n,r,s,i,o,a;const c=yn(bn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=mp((s=c.mode)!==null&&s!==void 0?s:null);U(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_p(e);try{return new fi(n)}catch{return null}}}/**
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
 */class dn{constructor(){this.providerId=dn.PROVIDER_ID}static credential(e,n){return $n._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fi.parseLink(n);return U(r,"argument-error"),$n._fromEmailAndCode(e,r.code,r.tenantId)}}dn.PROVIDER_ID="password";dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xn extends jc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yt extends Xn{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
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
 */class bt extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
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
 */class Et extends Xn{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
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
 */class vt extends Xn{constructor(){super("twitter.com")}static credential(e,n){return Wt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
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
 */async function yp(t,e){return Yn(t,"POST","/v1/accounts:signUp",kt(t,e))}/**
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
 */class Rt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await st._fromIdTokenResponse(e,r,s),o=_o(r);return new Rt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_o(r);return new Rt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _o(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function bp(t){var e;if(We(t.app))return Promise.reject(ot(t));const n=Dt(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Rt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await yp(n,{returnSecureToken:!0}),s=await Rt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class Ir extends Ot{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ir.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ir(e,n,r,s)}}function Vc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ir._fromErrorAndOperation(t,i,e,r):i})}/**
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
 */function Ep(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}async function Wc(t,e,n=!1){const r=await Fn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rt._forOperation(t,"link",r)}async function vp(t,e,n){await Hn(e);const r=Ep(e.providerData);U(r.has(n)===t,e.auth,"provider-already-linked")}/**
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
 */async function wp(t,e,n=!1){const{auth:r}=t;if(We(r.app))return Promise.reject(ot(r));const s="reauthenticate";try{const i=await Fn(t,Vc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=ci(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Rt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),i}}/**
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
 */async function Kc(t,e,n=!1){if(We(t.app))return Promise.reject(ot(t));const r="signIn",s=await Vc(t,r,e),i=await Rt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ip(t,e){return Kc(Dt(t),e)}async function s_(t,e){const n=Je(t);return await vp(!1,n,e.providerId),Wc(n,e)}/**
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
 */async function Sp(t){const e=Dt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function i_(t,e,n){return We(t.app)?Promise.reject(ot(t)):Ip(Je(t),dn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sp(t),r})}async function o_(t,e){return Dt(t).validatePassword(e)}function Tp(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function Rp(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function Cp(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function a_(t){return Je(t).signOut()}const Sr="__sak";/**
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
 */class zc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sr,"1"),this.storage.removeItem(Sr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ap=1e3,Pp=10;class Gc extends zc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Pp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ap)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gc.type="LOCAL";const Op=Gc;/**
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
 */class qc extends zc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qc.type="SESSION";const Jc=qc;/**
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
 */function kp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $r{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $r(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await kp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$r.receivers=[];/**
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
 */function di(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Np{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=di("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function Dp(t){Ge().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Yc(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function xp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lp(){return Yc()?self:null}/**
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
 */const Xc="firebaseLocalStorageDb",Up=1,Tr="firebaseLocalStorage",Qc="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Br(t,e){return t.transaction([Tr],e?"readwrite":"readonly").objectStore(Tr)}function Fp(){const t=indexedDB.deleteDatabase(Xc);return new Qn(t).toPromise()}function Ds(){const t=indexedDB.open(Xc,Up);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tr,{keyPath:Qc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tr)?e(r):(r.close(),await Fp(),e(await Ds()))})})}async function yo(t,e,n){const r=Br(t,!0).put({[Qc]:e,value:n});return new Qn(r).toPromise()}async function Hp(t,e){const n=Br(t,!1).get(e),r=await new Qn(n).toPromise();return r===void 0?null:r.value}function bo(t,e){const n=Br(t,!0).delete(e);return new Qn(n).toPromise()}const $p=800,Bp=3;class Zc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ds(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Bp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$r._getInstance(Lp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xp(),!this.activeServiceWorker)return;this.sender=new Np(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ds();return await yo(e,Sr,"1"),await bo(e,Sr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Br(s,!1).getAll();return new Qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$p)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zc.type="LOCAL";const jp=Zc;new Jn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Vp(t,e){return e?it(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hi extends ui{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,n){return an(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wp(t){return Kc(t.auth,new hi(t),t.bypassAuthState)}function Kp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),wp(n,new hi(t),t.bypassAuthState)}async function zp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Wc(n,new hi(t),t.bypassAuthState)}/**
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
 */class el{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wp;case"linkViaPopup":case"linkViaRedirect":return zp;case"reauthViaPopup":case"reauthViaRedirect":return Kp;default:Me(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gp=new Jn(2e3,1e4);class Zt extends el{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gp.get())};e()}}Zt.currentPopupAction=null;/**
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
 */const qp="pendingRedirect",ur=new Map;class Jp extends el{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ur.get(this.auth._key());if(!e){try{const r=await Yp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ur.set(this.auth._key(),e)}return this.bypassAuthState||ur.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yp(t,e){const n=Zp(e),r=Qp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Xp(t,e){ur.set(t._key(),e)}function Qp(t){return it(t._redirectPersistence)}function Zp(t){return lr(qp,t.config.apiKey,t.name)}async function eg(t,e,n=!1){if(We(t.app))return Promise.reject(ot(t));const r=Dt(t),s=Vp(r,e),o=await new Jp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const tg=10*60*1e3;class ng{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eo(e))}saveEventToCache(e){this.cachedEventUids.add(Eo(e)),this.lastProcessedEventTime=Date.now()}}function Eo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tl(t);default:return!1}}/**
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
 */async function sg(t,e={}){return Nt(t,"GET","/v1/projects",e)}/**
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
 */const ig=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,og=/^https?/;async function ag(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sg(t);for(const n of e)try{if(cg(n))return}catch{}Me(t,"unauthorized-domain")}function cg(t){const e=ks(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!og.test(n))return!1;if(ig.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const lg=new Jn(3e4,6e4);function vo(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ug(t){return new Promise((e,n)=>{var r,s,i;function o(){vo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vo(),n(ze(t,"network-request-failed"))},timeout:lg.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const a=tp("iframefcb");return Ge()[a]=()=>{gapi.load?o():n(ze(t,"network-request-failed"))},Hc(`${ep()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw fr=null,e})}let fr=null;function fg(t){return fr=fr||ug(t),fr}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const dg=new Jn(5e3,15e3),hg="__/auth/iframe",pg="emulator/auth/iframe",gg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _g(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ai(e,pg):`https://${t.config.authDomain}/${hg}`,r={apiKey:e.apiKey,appName:t.name,v:qn},s=mg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Gn(r).slice(1)}`}async function yg(t){const e=await fg(t),n=Ge().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:_g(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ze(t,"network-request-failed"),a=Ge().setTimeout(()=>{i(o)},dg.get());function c(){Ge().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const bg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Eg=500,vg=600,wg="_blank",Ig="http://localhost";class wo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sg(t,e,n,r=Eg,s=vg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=be().toLowerCase();n&&(a=Nc(l)?wg:n),Oc(l)&&(e=e||Ig,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,S])=>`${p}${m}=${S},`,"");if(Kh(l)&&a!=="_self")return Tg(e||"",a),new wo(null);const d=window.open(e||"",a,u);U(d,t,"popup-blocked");try{d.focus()}catch{}return new wo(d)}function Tg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Rg="__/auth/handler",Cg="emulator/auth/handler",Ag=encodeURIComponent("fac");async function Io(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qn,eventId:s};if(e instanceof jc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Xn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Ag}=${encodeURIComponent(c)}`:"";return`${Pg(t)}?${Gn(a).slice(1)}${l}`}function Pg({config:t}){return t.emulator?ai(t,Cg):`https://${t.authDomain}/${Rg}`}/**
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
 */const cs="webStorageSupport";class Og{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jc,this._completeRedirectFn=eg,this._overrideRedirectResult=Xp}async _openPopup(e,n,r,s){var i;ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Io(e,n,r,ks(),s);return Sg(e,o,di())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Io(e,n,r,ks(),s);return Dp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yg(e),r=new ng(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cs,{type:cs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[cs];o!==void 0&&n(!!o),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ag(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uc()||kc()||li()}}const kg=Og;var So="@firebase/auth",To="1.8.1";/**
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
 */class Ng{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Dg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xg(t){Ln(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fc(t)},l=new Xh(r,s,i,c);return ap(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new ln("auth-internal",e=>{const n=Dt(e.getProvider("auth").getImmediate());return(r=>new Ng(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(So,To,Dg(t)),rn(So,To,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Mg=5*60,Lg=hc("authIdTokenMaxAge")||Mg;let Ro=null;const Ug=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Lg)return;const s=n==null?void 0:n.token;Ro!==s&&(Ro=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Fg(t=mh()){const e=_c(t,"auth");if(e.isInitialized())return e.getImmediate();const n=op(t,{popupRedirectResolver:kg,persistence:[jp,Op,Jc]}),r=hc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ug(i.toString());Rp(n,o,()=>o(n.currentUser)),Tp(n,a=>o(a))}}const s=nd("auth");return s&&cp(n,`http://${s}`),n}function Hg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Qh({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ze("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Hg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xg("Browser");/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qt=typeof document<"u";function nl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $g(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&nl(t.default)}const Y=Object.assign;function ls(t,e){const n={};for(const r in e){const s=e[r];n[r]=Le(s)?s.map(t):t(s)}return n}const Pn=()=>{},Le=Array.isArray,rl=/#/g,Bg=/&/g,jg=/\//g,Vg=/=/g,Wg=/\?/g,sl=/\+/g,Kg=/%5B/g,zg=/%5D/g,il=/%5E/g,Gg=/%60/g,ol=/%7B/g,qg=/%7C/g,al=/%7D/g,Jg=/%20/g;function pi(t){return encodeURI(""+t).replace(qg,"|").replace(Kg,"[").replace(zg,"]")}function Yg(t){return pi(t).replace(ol,"{").replace(al,"}").replace(il,"^")}function xs(t){return pi(t).replace(sl,"%2B").replace(Jg,"+").replace(rl,"%23").replace(Bg,"%26").replace(Gg,"`").replace(ol,"{").replace(al,"}").replace(il,"^")}function Xg(t){return xs(t).replace(Vg,"%3D")}function Qg(t){return pi(t).replace(rl,"%23").replace(Wg,"%3F")}function Zg(t){return t==null?"":Qg(t).replace(jg,"%2F")}function Bn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const em=/\/$/,tm=t=>t.replace(em,"");function us(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=im(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Bn(o)}}function nm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Co(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rm(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&un(e.matched[r],n.matched[s])&&cl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function un(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sm(t[n],e[n]))return!1;return!0}function sm(t,e){return Le(t)?Ao(t,e):Le(e)?Ao(e,t):t===e}function Ao(t,e){return Le(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function im(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var jn;(function(t){t.pop="pop",t.push="push"})(jn||(jn={}));var On;(function(t){t.back="back",t.forward="forward",t.unknown=""})(On||(On={}));function om(t){if(!t)if(Qt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tm(t)}const am=/^[^#]+#/;function cm(t,e){return t.replace(am,"#")+e}function lm(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const jr=()=>({left:window.scrollX,top:window.scrollY});function um(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=lm(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Po(t,e){return(history.state?history.state.position-e:-1)+t}const Ms=new Map;function fm(t,e){Ms.set(t,e)}function dm(t){const e=Ms.get(t);return Ms.delete(t),e}let hm=()=>location.protocol+"//"+location.host;function ll(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Co(c,"")}return Co(n,t)+r+s}function pm(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=ll(t,location),S=n.value,A=e.value;let F=0;if(p){if(n.value=m,e.value=p,o&&o===S){o=null;return}F=A?p.position-A.position:0}else r(m);s.forEach(x=>{x(n.value,S,{delta:F,type:jn.pop,direction:F?F>0?On.forward:On.back:On.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(Y({},p.state,{scroll:jr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function Oo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?jr():null}}function gm(t){const{history:e,location:n}=window,r={value:ll(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:hm()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=Y({},e.state,Oo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Y({},s.value,e.state,{forward:c,scroll:jr()});i(u.current,u,!0);const d=Y({},Oo(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function mm(t){t=om(t);const e=gm(t),n=pm(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Y({location:"",base:t,go:r,createHref:cm.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function _m(t){return typeof t=="string"||t&&typeof t=="object"}function ul(t){return typeof t=="string"||typeof t=="symbol"}const fl=Symbol("");var ko;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ko||(ko={}));function fn(t,e){return Y(new Error,{type:t,[fl]:!0},e)}function Qe(t,e){return t instanceof Error&&fl in t&&(e==null||!!(t.type&e))}const No="[^/]+?",ym={sensitive:!1,strict:!1,start:!0,end:!0},bm=/[.+*?^${}()[\]/\\]/g;function Em(t,e){const n=Y({},ym,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(bm,"\\$&"),m+=40;else if(p.type===1){const{value:S,repeatable:A,optional:F,regexp:x}=p;i.push({name:S,repeatable:A,optional:F});const k=x||No;if(k!==No){m+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${S}" (${k}): `+O.message)}}let N=A?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(N=F&&l.length<2?`(?:/${N})`:"/"+N),F&&(N+="?"),s+=N,m+=20,F&&(m+=-8),A&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",S=i[p-1];d[S.name]=m&&S.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:S,repeatable:A,optional:F}=m,x=S in l?l[S]:"";if(Le(x)&&!A)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const k=Le(x)?x.join("/"):x;if(!k)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${S}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function vm(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function dl(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vm(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Do(r))return 1;if(Do(s))return-1}return s.length-r.length}function Do(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wm={type:0,value:""},Im=/[a-zA-Z0-9_]/;function Sm(t){if(!t)return[[]];if(t==="/")return[[wm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Im.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Tm(t,e,n){const r=Em(Sm(t.path),n),s=Y(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Rm(t,e){const n=[],r=new Map;e=Uo({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,m){const S=!m,A=Mo(d);A.aliasOf=m&&m.record;const F=Uo(e,d),x=[A];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const j of O)x.push(Mo(Y({},A,{components:m?m.record.components:A.components,path:j,aliasOf:m?m.record:A})))}let k,N;for(const O of x){const{path:j}=O;if(p&&j[0]!=="/"){const ae=p.record.path,G=ae[ae.length-1]==="/"?"":"/";O.path=p.record.path+(j&&G+j)}if(k=Tm(O,p,F),m?m.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),S&&d.name&&!Lo(k)&&o(d.name)),hl(k)&&c(k),A.children){const ae=A.children;for(let G=0;G<ae.length;G++)i(ae[G],k,m&&m.children[G])}m=m||k}return N?()=>{o(N)}:Pn}function o(d){if(ul(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const p=Pm(d,n);n.splice(p,0,d),d.record.name&&!Lo(d)&&r.set(d.record.name,d)}function l(d,p){let m,S={},A,F;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw fn(1,{location:d});F=m.record.name,S=Y(xo(p.params,m.keys.filter(N=>!N.optional).concat(m.parent?m.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),d.params&&xo(d.params,m.keys.map(N=>N.name))),A=m.stringify(S)}else if(d.path!=null)A=d.path,m=n.find(N=>N.re.test(A)),m&&(S=m.parse(A),F=m.record.name);else{if(m=p.name?r.get(p.name):n.find(N=>N.re.test(p.path)),!m)throw fn(1,{location:d,currentLocation:p});F=m.record.name,S=Y({},p.params,d.params),A=m.stringify(S)}const x=[];let k=m;for(;k;)x.unshift(k.record),k=k.parent;return{name:F,path:A,params:S,matched:x,meta:Am(x)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function xo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Mo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Cm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Cm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Lo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Am(t){return t.reduce((e,n)=>Y(e,n.meta),{})}function Uo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Pm(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;dl(t,e[i])<0?r=i:n=i+1}const s=Om(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Om(t){let e=t;for(;e=e.parent;)if(hl(e)&&dl(t,e)===0)return e}function hl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function km(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(sl," "),o=i.indexOf("="),a=Bn(o<0?i:i.slice(0,o)),c=o<0?null:Bn(i.slice(o+1));if(a in e){let l=e[a];Le(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Fo(t){let e="";for(let n in t){const r=t[n];if(n=Xg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Le(r)?r.map(i=>i&&xs(i)):[r&&xs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Nm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Le(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Dm=Symbol(""),Ho=Symbol(""),Vr=Symbol(""),pl=Symbol(""),Ls=Symbol("");function mn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _t(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(fn(4,{from:n,to:e})):p instanceof Error?c(p):_m(p)?c(fn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(p=>c(p))})}function fs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(nl(c)){const u=(c.__vccOpts||c)[e];u&&i.push(_t(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=$g(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&_t(m,n,r,o,a,s)()}))}}return i}function $o(t){const e=xe(Vr),n=xe(pl),r=Ce(()=>{const c=$t(t.to);return e.resolve(c)}),s=Ce(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(un.bind(null,u));if(p>-1)return p;const m=Bo(c[l-2]);return l>1&&Bo(u)===m&&d[d.length-1].path!==m?d.findIndex(un.bind(null,c[l-2])):p}),i=Ce(()=>s.value>-1&&Fm(n.params,r.value.params)),o=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&cl(n.params,r.value.params));function a(c={}){if(Um(c)){const l=e[$t(t.replace)?"replace":"push"]($t(t.to)).catch(Pn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function xm(t){return t.length===1?t[0]:t}const Mm=ei({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$o,setup(t,{slots:e}){const n=Vn($o(t)),{options:r}=xe(Vr),s=Ce(()=>({[jo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&xm(e.default(n));return t.custom?i:tc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Lm=Mm;function Um(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Fm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Le(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jo=(t,e,n)=>t??e??n,Hm=ei({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=xe(Ls),s=Ce(()=>t.route||r.value),i=xe(Ho,0),o=Ce(()=>{let l=$t(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Ce(()=>s.value.matched[o.value]);ir(Ho,Ce(()=>o.value+1)),ir(Dm,a),ir(Ls,s);const c=Nr();return Tn(()=>[c.value,a.value,t.name],([l,u,d],[p,m,S])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!un(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=a.value,p=d&&d.components[u];if(!p)return Vo(n.default,{Component:p,route:l});const m=d.props[u],S=m?m===!0?l.params:typeof m=="function"?m(l):m:null,F=tc(p,Y({},S,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Vo(n.default,{Component:F,route:l})||F}}});function Vo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gl=Hm;function $m(t){const e=Rm(t.routes,t),n=t.parseQuery||km,r=t.stringifyQuery||Fo,s=t.history,i=mn(),o=mn(),a=mn(),c=ya(ht);let l=ht;Qt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ls.bind(null,y=>""+y),d=ls.bind(null,Zg),p=ls.bind(null,Bn);function m(y,P){let R,D;return ul(y)?(R=e.getRecordMatcher(y),D=P):D=y,e.addRoute(D,R)}function S(y){const P=e.getRecordMatcher(y);P&&e.removeRoute(P)}function A(){return e.getRoutes().map(y=>y.record)}function F(y){return!!e.getRecordMatcher(y)}function x(y,P){if(P=Y({},P||c.value),typeof y=="string"){const g=us(n,y,P.path),_=e.resolve({path:g.path},P),E=s.createHref(g.fullPath);return Y(g,_,{params:p(_.params),hash:Bn(g.hash),redirectedFrom:void 0,href:E})}let R;if(y.path!=null)R=Y({},y,{path:us(n,y.path,P.path).path});else{const g=Y({},y.params);for(const _ in g)g[_]==null&&delete g[_];R=Y({},y,{params:d(g)}),P.params=d(P.params)}const D=e.resolve(R,P),ee=y.hash||"";D.params=u(p(D.params));const f=nm(r,Y({},y,{hash:Yg(ee),path:D.path})),h=s.createHref(f);return Y({fullPath:f,hash:ee,query:r===Fo?Nm(y.query):y.query||{}},D,{redirectedFrom:void 0,href:h})}function k(y){return typeof y=="string"?us(n,y,c.value.path):Y({},y)}function N(y,P){if(l!==y)return fn(8,{from:P,to:y})}function O(y){return G(y)}function j(y){return O(Y(k(y),{replace:!0}))}function ae(y){const P=y.matched[y.matched.length-1];if(P&&P.redirect){const{redirect:R}=P;let D=typeof R=="function"?R(y):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),Y({query:y.query,hash:y.hash,params:D.path!=null?{}:y.params},D)}}function G(y,P){const R=l=x(y),D=c.value,ee=y.state,f=y.force,h=y.replace===!0,g=ae(R);if(g)return G(Y(k(g),{state:typeof g=="object"?Y({},ee,g.state):ee,force:f,replace:h}),P||R);const _=R;_.redirectedFrom=P;let E;return!f&&rm(r,D,R)&&(E=fn(16,{to:_,from:D}),Ue(D,D,!0,!1)),(E?Promise.resolve(E):se(_,D)).catch(b=>Qe(b)?Qe(b,2)?b:ft(b):J(b,_,D)).then(b=>{if(b){if(Qe(b,2))return G(Y({replace:h},k(b.to),{state:typeof b.to=="object"?Y({},ee,b.to.state):ee,force:f}),P||_)}else b=Ie(_,D,!0,h,ee);return pe(_,D,b),b})}function K(y,P){const R=N(y,P);return R?Promise.reject(R):Promise.resolve()}function W(y){const P=Gt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(y):y()}function se(y,P){let R;const[D,ee,f]=Bm(y,P);R=fs(D.reverse(),"beforeRouteLeave",y,P);for(const g of D)g.leaveGuards.forEach(_=>{R.push(_t(_,y,P))});const h=K.bind(null,y,P);return R.push(h),Oe(R).then(()=>{R=[];for(const g of i.list())R.push(_t(g,y,P));return R.push(h),Oe(R)}).then(()=>{R=fs(ee,"beforeRouteUpdate",y,P);for(const g of ee)g.updateGuards.forEach(_=>{R.push(_t(_,y,P))});return R.push(h),Oe(R)}).then(()=>{R=[];for(const g of f)if(g.beforeEnter)if(Le(g.beforeEnter))for(const _ of g.beforeEnter)R.push(_t(_,y,P));else R.push(_t(g.beforeEnter,y,P));return R.push(h),Oe(R)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),R=fs(f,"beforeRouteEnter",y,P,W),R.push(h),Oe(R))).then(()=>{R=[];for(const g of o.list())R.push(_t(g,y,P));return R.push(h),Oe(R)}).catch(g=>Qe(g,8)?g:Promise.reject(g))}function pe(y,P,R){a.list().forEach(D=>W(()=>D(y,P,R)))}function Ie(y,P,R,D,ee){const f=N(y,P);if(f)return f;const h=P===ht,g=Qt?history.state:{};R&&(D||h?s.replace(y.fullPath,Y({scroll:h&&g&&g.scroll},ee)):s.push(y.fullPath,ee)),c.value=y,Ue(y,P,R,h),ft()}let Ee;function xt(){Ee||(Ee=s.listen((y,P,R)=>{if(!Zn.listening)return;const D=x(y),ee=ae(D);if(ee){G(Y(ee,{replace:!0,force:!0}),D).catch(Pn);return}l=D;const f=c.value;Qt&&fm(Po(f.fullPath,R.delta),jr()),se(D,f).catch(h=>Qe(h,12)?h:Qe(h,2)?(G(Y(k(h.to),{force:!0}),D).then(g=>{Qe(g,20)&&!R.delta&&R.type===jn.pop&&s.go(-1,!1)}).catch(Pn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),J(h,D,f))).then(h=>{h=h||Ie(D,f,!1),h&&(R.delta&&!Qe(h,8)?s.go(-R.delta,!1):R.type===jn.pop&&Qe(h,20)&&s.go(-1,!1)),pe(D,f,h)}).catch(Pn)}))}let ut=mn(),ie=mn(),V;function J(y,P,R){ft(y);const D=ie.list();return D.length?D.forEach(ee=>ee(y,P,R)):console.error(y),Promise.reject(y)}function Ye(){return V&&c.value!==ht?Promise.resolve():new Promise((y,P)=>{ut.add([y,P])})}function ft(y){return V||(V=!y,xt(),ut.list().forEach(([P,R])=>y?R(y):P()),ut.reset()),y}function Ue(y,P,R,D){const{scrollBehavior:ee}=t;if(!Qt||!ee)return Promise.resolve();const f=!R&&dm(Po(y.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return Xs().then(()=>ee(y,P,f)).then(h=>h&&um(h)).catch(h=>J(h,y,P))}const ve=y=>s.go(y);let zt;const Gt=new Set,Zn={currentRoute:c,listening:!0,addRoute:m,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:A,resolve:x,options:t,push:O,replace:j,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ie.add,isReady:Ye,install(y){const P=this;y.component("RouterLink",Lm),y.component("RouterView",gl),y.config.globalProperties.$router=P,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>$t(c)}),Qt&&!zt&&c.value===ht&&(zt=!0,O(s.location).catch(ee=>{}));const R={};for(const ee in ht)Object.defineProperty(R,ee,{get:()=>c.value[ee],enumerable:!0});y.provide(Vr,P),y.provide(pl,ma(R)),y.provide(Ls,c);const D=y.unmount;Gt.add(y),y.unmount=function(){Gt.delete(y),Gt.size<1&&(l=ht,Ee&&Ee(),Ee=null,c.value=ht,zt=!1,V=!1),D()}}};function Oe(y){return y.reduce((P,R)=>P.then(()=>W(R)),Promise.resolve())}return Zn}function Bm(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>un(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>un(l,c))||s.push(c))}return[n,r,s]}function c_(){return xe(Vr)}var jm="firebase",Vm="11.1.0";/**
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
 */rn(jm,Vm,"app");const Wm=ac("firebase",()=>({firebaseApp:yc({apiKey:"AIzaSyCXwaDcMJoqTPcqGkurfRdx73jMIvu7kWk",authDomain:"test-builder-api.firebaseapp.com",projectId:"test-builder-api",storageBucket:"test-builder-api.firebasestorage.app",messagingSenderId:"846755975876",appId:"1:846755975876:web:c0dbc71f03867028f96f91",measurementId:"G-K08F9M7C57"})})),Km=ac("auth",()=>{const{firebaseApp:t}=Wm(),e=Fg(t),n=Nr(null);function r(i){n.value=i}function s(i){return i===null||i.isAnonymous}return{user:Ce(()=>n),setUser:r,auth:e,isAnonymous:s}}),zm=ei({__name:"App",setup(t){const{auth:e,setUser:n}=Km();return Cp(e,r=>{console.log("onAuthStateChanged",r),r===null&&bp(e).then(()=>{}).catch(s=>{console.log("signInAnonymously.error"),console.log(s.code,s.message)}),n(r)}),(r,s)=>(qa(),Ya($t(gl)))}}),Gm="modulepreload",qm=function(t){return"/"+t},Wo={},ds=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=qm(c),c in Wo)return;Wo[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":Gm,l||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),l)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},Jm=$m({history:mm("/"),routes:[{path:"/",name:"home",component:()=>ds(()=>import("./HomeView-C5F6VqYz.js"),__vite__mapDeps([0,1]))},{path:"/login",name:"login",component:()=>ds(()=>import("./LoginView-BsfKrGph.js"),__vite__mapDeps([2,1,3,4]))},{path:"/register",name:"register",component:()=>ds(()=>import("./RegisterView-Db0GKgPq.js"),__vite__mapDeps([5,1,3,6]))}]}),gi=$f(zm);gi.use(Vf());gi.use(Jm);gi.mount("#app");export{$t as A,r_ as B,a_ as C,dn as E,et as F,Lm as R,Pe as a,Ce as b,e_ as c,ei as d,Cp as e,Pa as f,Qa as g,Zm as h,t_ as i,nf as j,ou as k,c_ as l,Qm as m,js as n,qa as o,o_ as p,s_ as q,Nr as r,i_ as s,Cl as t,Km as u,n_ as v,Ym as w,ac as x,Xm as y,hu as z};
