import{d as A,u as N,r as u,b as I,e as G,f as O,c as n,a as v,g as e,F as _,h as P,i as m,w as y,v as k,n as C,t as g,j as c,k as B,l as D,s as R,m as W,o as i}from"./index-BVQELQFO.js";import{u as j,_ as q,a as F}from"./AppMenu.vue_vue_type_script_setup_true_lang-Dv5cL-QV.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T={class:"app-main"},$={class:"sign-container"},z={class:"login-form"},H={key:0,class:"alert alert-danger",role:"alert"},J={class:"mb-3"},K={class:"input-group"},Q={key:0,class:"invalid-feedback is-invalid"},X={class:"mb-3"},Y={class:"input-group"},Z={key:0,class:"invalid-feedback is-invalid"},ss={class:"signup-link"},es=A({__name:"LoginView",setup(ts){const f=D(),{auth:b,isAnonymous:S,signUpWithGoogle:U}=N(),{validateEmail:E}=j(),a=u(""),d=u(""),w=u(!1),p=u(!1),r=u([]),o=I(()=>{const t={};return w.value&&(a.value===""?t.email="Email required":E(a.value)||(t.email="Invalid email"),d.value===""&&(t.password="Password required")),t}),h=G(b,t=>{console.log("Loginview onAuthStateChanged",t),S(t)||f.push({name:"home"})});O(()=>{h()});async function x(){if(!p.value){if(p.value=!0,w.value=!0,Object.keys(o.value).length>0){p.value=!0;return}try{const t=await R(b,a.value,d.value);console.log("login.userCredential",t),r.value=[]}catch(t){console.log("login.error",t),r.value=["Server Error: "+t.code]}finally{p.value=!1}}}async function L(){try{await U(),f.push({name:"home"})}catch(t){console.log("register.error"),r.value=["Server Error: "+t.code]}}return(t,s)=>{const V=W("RouterLink");return i(),n(_,null,[v(q),v(F),e("div",T,[e("div",$,[e("div",z,[s[6]||(s[6]=e("div",{class:"login-form-title mb-4"},"Login",-1)),r.value.length?(i(),n("div",H,[e("ul",null,[(i(!0),n(_,null,P(r.value,l=>(i(),n("li",{key:l},g(l),1))),128))])])):m("",!0),e("div",J,[s[3]||(s[3]=e("label",{for:"login-input-email",class:"form-label"},"Email",-1)),e("div",K,[s[2]||(s[2]=e("span",{class:"input-group-text"},[e("i",{class:"bi bi-at"})],-1)),y(e("input",{type:"email",class:C(["form-control",{"is-invalid":o.value.email}]),id:"login-input-email","onUpdate:modelValue":s[0]||(s[0]=l=>a.value=l)},null,2),[[k,a.value]]),o.value.email?(i(),n("div",Q,g(o.value.email),1)):m("",!0)])]),e("div",X,[s[5]||(s[5]=e("label",{for:"login-input-password",class:"form-label"},"Password",-1)),e("div",Y,[s[4]||(s[4]=e("span",{class:"input-group-text"},[e("i",{class:"bi bi-lock-fill"})],-1)),y(e("input",{type:"password",class:C(["form-control",{"is-invalid":o.value.password}]),id:"login-input-password","onUpdate:modelValue":s[1]||(s[1]=l=>d.value=l)},null,2),[[k,d.value]]),o.value.password?(i(),n("div",Z,g(o.value.password),1)):m("",!0)])]),e("button",{type:"button",class:"btn btn-primary",onClick:x},"LOGIN")]),e("div",{class:"signup-parties"},[s[8]||(s[8]=c(" Or Sign Up Using ")),s[9]||(s[9]=e("br",null,null,-1)),e("button",{type:"button",class:"btn btn-danger google-auth",onClick:L},s[7]||(s[7]=[e("i",{class:"bi bi-google"},null,-1)]))]),e("div",ss,[s[11]||(s[11]=c(" Or Sign Up Using ")),s[12]||(s[12]=e("br",null,null,-1)),v(V,{to:{name:"register"}},{default:B(()=>s[10]||(s[10]=[c("SIGN UP")])),_:1})])])])],64)}}}),is=M(es,[["__scopeId","data-v-9f4be661"]]);export{is as default};
