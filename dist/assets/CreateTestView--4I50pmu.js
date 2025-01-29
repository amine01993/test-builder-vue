import{d as E,q as V,r as a,c as N,i as S,P as O,j as D,_ as U,l as q,w as A,o,b as i,a as n,F as _,m as B,t as d,e as c,x as y,y as g,n as k,z as h}from"./index-DgVFOuIu.js";import{u as j}from"./testService-B9g0yUeR.js";import{A as P}from"./AppContainer-B7WmBWY1.js";import"./firestore-CKAN35Ge.js";import"./Question-DJVAB3JS.js";import"./Breadcrumb-0WoaLxXW.js";const z=E({__name:"CreateTestView",setup(w,{expose:t}){t();const u=V(),{addTest:e}=j(),m=a(""),v=a(""),s=a(0),b=a(!1),l=a(!1),f=a([]),T=N(()=>{const r={};return b.value&&(m.value===""&&(r.name="Name required"),typeof s.value=="string"?r.timeLimit="The time limit must be a number":s.value<0&&(r.timeLimit="The time limit can't be a negatif number")),r}),p=[];S(()=>{document.querySelectorAll(".app-main .label-info").forEach(L=>{p.push(new O(L,{container:"body",placement:"right",html:!0,trigger:"click"}))})}),D(()=>{p.forEach(r=>r.dispose())});async function x(){if(!l.value){if(l.value=!0,b.value=!0,Object.keys(T.value).length>0){l.value=!1;return}try{await e({name:m.value,description:v.value,max_points:0,time_limit:Number(s.value)}),f.value=[],u.push({name:"tests"})}catch(r){f.value=["Server Error: "+r.code]}finally{l.value=!1}}}const C={router:u,addTest:e,name:m,description:v,timeLimit:s,submitted:b,submitting:l,serverErrors:f,errors:T,popOvers:p,createTest:x,AppContainer:P};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}}),F={class:"app-main"},M={class:"test-form"},I={key:0,class:"alert alert-danger",role:"alert"},R={class:"mb-3"},G=["disabled"],H={key:0,class:"invalid-feedback is-invalid"},J={class:"mb-3"},K=["disabled"],Q={key:0,class:"invalid-feedback is-invalid"},W={class:"mb-3"},X=["disabled"],Y={key:0,class:"invalid-feedback is-invalid"},Z=["disabled"];function $(w,t,u,e,m,v){return o(),q(e.AppContainer,null,{default:A(()=>[i("div",F,[i("div",M,[t[7]||(t[7]=i("div",{class:"test-form-title mb-4"},"Create New Test",-1)),e.serverErrors.length?(o(),n("div",I,[i("ul",null,[(o(!0),n(_,null,B(e.serverErrors,s=>(o(),n("li",{key:s},d(s),1))),128))])])):c("",!0),i("div",R,[t[3]||(t[3]=i("label",{for:"test-input-name",class:"form-label"},"Name",-1)),y(i("input",{type:"text",class:k(["form-control",{"is-invalid":e.errors.name}]),id:"test-input-name","onUpdate:modelValue":t[0]||(t[0]=s=>e.name=s),disabled:e.submitting},null,10,G),[[g,e.name]]),e.errors.name?(o(),n("div",H,d(e.errors.name),1)):c("",!0)]),i("div",J,[t[4]||(t[4]=i("label",{for:"test-input-description",class:"form-label"},"Description",-1)),y(i("textarea",{class:k(["form-control",{"is-invalid":e.errors.description}]),id:"test-input-description","onUpdate:modelValue":t[1]||(t[1]=s=>e.description=s),rows:"3",disabled:e.submitting},null,10,K),[[g,e.description]]),e.errors.description?(o(),n("div",Q,d(e.errors.description),1)):c("",!0)]),i("div",W,[t[5]||(t[5]=i("label",{for:"test-input-timelimit",class:"form-label"},"Time limit",-1)),t[6]||(t[6]=i("span",{class:"label-info","data-bs-content":"The test Time Limit is in seconds.<br>0 = no Time Limit"},[i("i",{class:"bi bi-question-circle-fill"})],-1)),y(i("input",{type:"number",class:k(["form-control",{"is-invalid":e.errors.timeLimit}]),id:"test-input-timelimit","onUpdate:modelValue":t[2]||(t[2]=s=>e.timeLimit=s),disabled:e.submitting},null,10,X),[[g,e.timeLimit]]),e.errors.timeLimit?(o(),n("div",Y,d(e.errors.timeLimit),1)):c("",!0)]),i("button",{type:"button",class:"btn btn-primary",onClick:e.createTest,disabled:e.submitting},[e.submitting?(o(),n(_,{key:1},[h("Creating ...")],64)):(o(),n(_,{key:0},[h("Create")],64))],8,Z)])])]),_:1})}const ne=U(z,[["render",$],["__scopeId","data-v-39099d43"],["__file","C:/Users/erram/OneDrive/Documents/test-builder-vue/src/views/CreateTestView.vue"]]);export{ne as default};
