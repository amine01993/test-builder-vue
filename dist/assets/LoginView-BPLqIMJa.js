import{d as V,u as G,b as N,e as I,r as a,f as O,g as D,h as P,s as M,_ as W,i as j,c as r,a as _,j as o,F as g,k as B,l as w,w as S,v as U,n as A,t as y,m as d,p as R,o as t}from"./index-D8XsmG4l.js";import{A as q,a as F}from"./AppMenu-BzvpNq4T.js";const H=V({__name:"LoginView",setup(E,{expose:s}){s();const u=G(),{auth:e,isAnonymous:v,signUpWithGoogle:c}=N(),{validateEmail:m}=I(),n=a(""),b=a(""),f=a(!1),l=a(!1),p=a([]),k=O(()=>{const i={};return f.value&&(n.value===""?i.email="Email required":m(n.value)||(i.email="Invalid email"),b.value===""&&(i.password="Password required")),i}),h=D(e,i=>{console.log("Loginview onAuthStateChanged",i),v(i)||u.push({name:"home"})});P(()=>{h()});async function L(){if(!l.value){if(l.value=!0,f.value=!0,Object.keys(k.value).length>0){l.value=!1;return}try{const i=await M(e,n.value,b.value);console.log("login.userCredential",i),p.value=[]}catch(i){console.log("login.error",i),p.value=["Server Error: "+i.code]}finally{l.value=!1}}}async function x(){try{await c(),u.push({name:"home"})}catch(i){console.log("register.error"),p.value=["Server Error: "+i.code]}}const C={router:u,auth:e,isAnonymous:v,signUpWithGoogle:c,validateEmail:m,email:n,password:b,submitted:f,submitting:l,serverErrors:p,errors:k,onAuthEventDispose:h,login:L,signUpWithG:x,AppHeader:q,AppMenu:F};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}}),T={class:"app-main"},z={class:"sign-container"},J={class:"login-form"},K={key:0,class:"alert alert-danger",role:"alert"},Q={class:"mb-3"},X={class:"input-group"},Y=["disabled"],Z={key:0,class:"invalid-feedback is-invalid"},$={class:"mb-3"},ss={class:"input-group"},es=["disabled"],os={key:0,class:"invalid-feedback is-invalid"},is=["disabled"],ns={class:"signup-link"};function rs(E,s,u,e,v,c){const m=j("RouterLink");return t(),r(g,null,[_(e.AppHeader),_(e.AppMenu),o("div",T,[o("div",z,[o("div",J,[s[6]||(s[6]=o("div",{class:"login-form-title mb-4"},"Login",-1)),e.serverErrors.length?(t(),r("div",K,[o("ul",null,[(t(!0),r(g,null,B(e.serverErrors,n=>(t(),r("li",{key:n},y(n),1))),128))])])):w("",!0),o("div",Q,[s[3]||(s[3]=o("label",{for:"login-input-email",class:"form-label"},"Email",-1)),o("div",X,[s[2]||(s[2]=o("span",{class:"input-group-text"},[o("i",{class:"bi bi-at"})],-1)),S(o("input",{type:"email",class:A(["form-control",{"is-invalid":e.errors.email}]),id:"login-input-email","onUpdate:modelValue":s[0]||(s[0]=n=>e.email=n),disabled:e.submitting},null,10,Y),[[U,e.email]]),e.errors.email?(t(),r("div",Z,y(e.errors.email),1)):w("",!0)])]),o("div",$,[s[5]||(s[5]=o("label",{for:"login-input-password",class:"form-label"},"Password",-1)),o("div",ss,[s[4]||(s[4]=o("span",{class:"input-group-text"},[o("i",{class:"bi bi-lock-fill"})],-1)),S(o("input",{type:"password",class:A(["form-control",{"is-invalid":e.errors.password}]),id:"login-input-password","onUpdate:modelValue":s[1]||(s[1]=n=>e.password=n),disabled:e.submitting},null,10,es),[[U,e.password]]),e.errors.password?(t(),r("div",os,y(e.errors.password),1)):w("",!0)])]),o("button",{type:"button",class:"btn btn-primary",onClick:e.login,disabled:e.submitting},[e.submitting?(t(),r(g,{key:1},[d("LOGGING IN ...")],64)):(t(),r(g,{key:0},[d("LOGIN")],64))],8,is)]),o("div",{class:"signup-parties"},[s[8]||(s[8]=d(" Or Sign Up Using ")),s[9]||(s[9]=o("br",null,null,-1)),o("button",{type:"button",class:"btn btn-danger google-auth",onClick:e.signUpWithG},s[7]||(s[7]=[o("i",{class:"bi bi-google"},null,-1)]))]),o("div",ns,[s[11]||(s[11]=d(" Or Sign Up Using ")),s[12]||(s[12]=o("br",null,null,-1)),_(m,{to:{name:"register"}},{default:R(()=>s[10]||(s[10]=[d("SIGN UP")])),_:1})])])])],64)}const as=W(H,[["render",rs],["__scopeId","data-v-45f5edd7"],["__file","C:/Users/erram/OneDrive/Documents/test-builder-vue/src/views/LoginView.vue"]]);export{as as default};
