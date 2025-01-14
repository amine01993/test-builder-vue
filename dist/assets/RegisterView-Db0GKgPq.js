import{d as A,u as L,r as u,b as q,e as M,f as D,c as l,a as h,g as e,F as p,h as x,i as b,w as k,v as y,n as P,t as w,j as m,k as G,l as B,p as O,E as j,q as F,m as T,o}from"./index-BZGiZpMA.js";import{u as $,_ as z,a as W}from"./AppMenu.vue_vue_type_script_setup_true_lang-B-iYmG8d.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";const J={class:"app-main"},K={class:"sign-container"},Q={class:"login-form"},X={key:0,class:"alert alert-danger",role:"alert"},Y={class:"mb-3"},Z={class:"input-group"},ss=["disabled"],es={key:0,class:"invalid-feedback is-invalid"},as={class:"mb-3"},ts={class:"input-group"},is=["disabled"],ls={class:"mb-3"},os={class:"input-group"},ns=["disabled"],rs={key:0,class:"invalid-feedback is-invalid"},us=["disabled"],ds={class:"signup-link"},vs=A({__name:"RegisterView",setup(ps){const C=B(),{auth:S,user:R,isAnonymous:U}=L(),{validateEmail:V}=$(),v=u(""),d=u(""),_=u(""),n=u(!1);let r=u(null);const N=u(!1),c=u([]),i=q(()=>{const t={};if(!N.value)return t;if(v.value===""?t.email="Email required":V(v.value)||(t.email="Invalid email"),d.value==="")t.password=["Password required"];else if(r.value&&!r.value.isValid){console.log("validationStatus",r);const s=[];r.value.containsLowercaseLetter!==!0&&s.push("Require lowercase character"),r.value.containsNonAlphanumericCharacter!==!0&&s.push("Require special character"),r.value.containsNumericCharacter!==!0&&s.push("Require numeric character"),r.value.meetsMinPasswordLength!==!0&&s.push("Minimum password length is 7"),r.value.meetsMaxPasswordLength!==!0&&s.push("Password too long"),t.password=s}else d.value!==_.value&&(t.confirmPass="Password mismatch");return t}),E=M(S,t=>{console.log("Registerview onAuthStateChanged",t),U(t)||C.push({name:"home"})});D(()=>{E()});async function I(){var t,s,f;if(!n.value){if(n.value=!0,r.value=await O(S,d.value),N.value=!0,Object.keys(i.value).length>0){n.value=!1;return}try{const a=j.credential(v.value,d.value),g=await F(R.value,a);console.log("register.userCredential",g),c.value=[],C.push({name:"home"})}catch(a){console.log("register.error");let g=(f=(s=(t=a==null?void 0:a.customData)==null?void 0:t._tokenResponse)==null?void 0:s.error)==null?void 0:f.message;c.value=["Server Error"+(g?": "+g:"")]}finally{n.value=!1}}}return(t,s)=>{const f=T("RouterLink");return o(),l(p,null,[h(z),h(W),e("div",J,[e("div",K,[e("div",Q,[s[9]||(s[9]=e("div",{class:"login-form-title mb-4"},"Sign Up",-1)),c.value.length?(o(),l("div",X,[e("ul",null,[(o(!0),l(p,null,x(c.value,a=>(o(),l("li",{key:a},w(a),1))),128))])])):b("",!0),e("div",Y,[s[4]||(s[4]=e("label",{for:"login-input-email",class:"form-label"},"Email",-1)),e("div",Z,[s[3]||(s[3]=e("span",{class:"input-group-text"},[e("i",{class:"bi bi-at"})],-1)),k(e("input",{type:"email",class:P(["form-control",{"is-invalid":i.value.email}]),id:"login-input-email","onUpdate:modelValue":s[0]||(s[0]=a=>v.value=a),disabled:n.value},null,10,ss),[[y,v.value]]),i.value.email?(o(),l("div",es,w(i.value.email),1)):b("",!0)])]),e("div",as,[s[6]||(s[6]=e("label",{for:"login-input-password",class:"form-label"},"Password",-1)),e("div",ts,[s[5]||(s[5]=e("span",{class:"input-group-text"},[e("i",{class:"bi bi-lock-fill"})],-1)),k(e("input",{type:"password",class:P(["form-control",{"is-invalid":i.value.password}]),id:"login-input-password","onUpdate:modelValue":s[1]||(s[1]=a=>d.value=a),disabled:n.value},null,10,is),[[y,d.value]]),i.value.password?(o(!0),l(p,{key:0},x(i.value.password,a=>(o(),l("div",{class:"invalid-feedback is-invalid",key:a},w(a),1))),128)):b("",!0)])]),e("div",ls,[s[8]||(s[8]=e("label",{for:"login-input-password-confirm",class:"form-label"},"Confirm Password",-1)),e("div",os,[s[7]||(s[7]=e("span",{class:"input-group-text"},[e("i",{class:"bi bi-lock-fill"})],-1)),k(e("input",{type:"password",class:P(["form-control",{"is-invalid":i.value.confirmPass}]),id:"login-input-password-confirm","onUpdate:modelValue":s[2]||(s[2]=a=>_.value=a),disabled:n.value},null,10,ns),[[y,_.value]]),i.value.confirmPass?(o(),l("div",rs,w(i.value.confirmPass),1)):b("",!0)])]),e("button",{type:"button",class:"btn btn-primary",onClick:I,disabled:n.value},[n.value?(o(),l(p,{key:1},[m("SIGNING UP ...")],64)):(o(),l(p,{key:0},[m("SIGN UP")],64))],8,us)]),s[13]||(s[13]=e("div",{class:"signup-parties"},[m(" Or Sign Up Using "),e("br"),e("button",{type:"button",class:"btn btn-danger google-auth"},[e("i",{class:"bi bi-google"})])],-1)),e("div",ds,[s[11]||(s[11]=m(" Or Sign In Using ")),s[12]||(s[12]=e("br",null,null,-1)),h(f,{to:{name:"login"}},{default:G(()=>s[10]||(s[10]=[m("SIGN IN")])),_:1})])])])],64)}}}),gs=H(vs,[["__scopeId","data-v-7e659ac5"]]);export{gs as default};
