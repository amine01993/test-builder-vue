import{J as k,a as z,r,O as G,x as o,Q as N,S as H,K as b}from"./index-Cr91u6jy.js";import{u as q,T as D,g as L,d as V,c as h,q as I,w as R,a as W,l as M,o as C,b as P,s as X}from"./firestore-CQCayiu2.js";const $=k("userTestService",()=>{const{db:y}=q(),{user:a}=z();let g;const v=r(),d=r();let l=new Map;const Q=r(!0),m=r(180),T=r(""),w=r(""),_=r(),c=r();let p=null;const U=25;G(a,()=>{_.value=void 0,p=null,c.value=void 0});async function x(){a.value&&await N(a.value,{displayName:T.value.trim()})}async function F(){a.value&&await Promise.all([N(a.value,{displayName:T.value}),H(a.value,w.value)])}async function A(s){const{get:n}=b(),e=await n("/test",{testId:s,displayName:T.value.trim(),email:w.value.trim()});if(d.value=e.test,g=e.userTestId,d.value&&(m.value=d.value.time_limit,m.value>0)){let t=setInterval(()=>{m.value--,m.value===0&&(clearInterval(t),t=void 0)},1e3);return t}}async function B(s){var u,i;const{post:n}=b();l=new Map,g&&l.set("user_test_id",[g]),(u=d.value)!=null&&u.id&&l.set("test_id",[d.value.id]);for(const[f,S]of s)S.toString()!==""&&(l.has(f)?(i=l.get(f))==null||i.push(S.toString()):l.set(f,[S.toString()]));const e=Object.fromEntries(l),t=await n("/finish-test",e);return t.started_at=D.fromMillis(t.started_at._seconds*1e3),t.ended_in=D.fromMillis(t.ended_in._seconds*1e3),t}function E(s){v.value=s}async function O(s){const{db:n}=q();if(!v.value){const e=await L(V(n,"user_tests",s));e.exists()&&(v.value=e.data(),v.value.id=e.id)}}async function j(){var t;if(!((t=a.value)!=null&&t.uid)||_.value!==void 0)return;const s=h(y,"user_tests"),n=I(s,R("test.user_id","==",a.value.uid)),e=await W(n);_.value=e.data().count}async function J(){var t;if(!((t=a.value)!=null&&t.uid)||c.value)return;const s=h(y,"user_tests"),n=I(s,R("test.user_id","==",a.value.uid),C("started_at","desc"),M(U)),e=await P(n);c.value=e.docs.map(u=>{const i=u.data();return i.id=u.id,i}),p=e.docs.length===0?null:e.docs[e.docs.length-1]}async function K(){var u;if(!((u=a.value)!=null&&u.uid)||!c.value||!p)return;const s=h(y,"user_tests"),n=I(s,R("test.user_id","==",a.value.uid),C("started_at","desc"),X(p),M(U)),e=await P(n),t=e.docs.map(i=>{const f=i.data();return f.id=i.id,f});p=e.docs.length===0?null:e.docs[e.docs.length-1],c.value=c.value.concat(t)}return{requestUserInfo:o(()=>Q),displayName:o(()=>T),email:o(()=>w),test:o(()=>d),time_limit:o(()=>m),testReport:o(()=>v),userTestCount:o(()=>_),userTests:o(()=>c),updateUserInfo:F,updateDisplayName:x,initTest:A,sendReport:B,setTestReport:E,initTestReport:O,loadUserTestCount:j,loadUserTests:J,loadMoreUserTests:K}});export{$ as u};
