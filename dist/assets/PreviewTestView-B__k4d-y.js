import{d as B,u as N,b as E,M as I,a as D,x as h,o as H,e as P,f as b,w as $,y as j,g as n,i as e,j as a,h as s,t as u,C as R,p as l,F as U,k as Y,s as q}from"./index-D9eu1wvy.js";import{u as z}from"./testService-z9XHGfAc.js";import{f as G}from"./utils-DltTuOhC.js";import{_ as J}from"./DisplayQuestion.vue_vue_type_script_setup_true_lang-DcZQRo33.js";import{_ as K}from"./AppContainer.vue_vue_type_script_setup_true_lang-Ci2WOSVt.js";import"./firestore-CkCHjU9t.js";import"./Question-DJVAB3JS.js";const O={key:0,class:"app-test-header"},Q={class:"test-name"},W={key:0,class:"test-limit"},X={key:1,class:"app-test-description"},Z=["innerHTML"],tt={class:"test-points"},et={key:2,class:"app-main"},st={class:"app-test-actions"},ot=["aria-label"],it=B({__name:"PreviewTestView",props:{test_id:{}},setup(v){const T=j(),{t:o}=N(),{startLoading:y,endLoading:w,showMessage:p}=E(),{confirm:g}=I(),{auth:k}=D(),{test:t,time_limit:m,loadTest:S}=z();let r;const x=h(()=>{const i=G(m.value);return i===""?o("Time out"):i}),C=h(()=>{var i;return(i=t.value)!=null&&i.description?t.value.description.replace(/\n/g,"<br />"):""}),L=H(k,async()=>{y();try{if(r=await S(v.test_id,!0),!t.value){p("failure",o("Test Not Found."));return}}catch{p("failure",o("Error loading test data."))}finally{w()}});P(()=>{L(),r!==void 0&&(clearInterval(r),r=void 0)});function M(){window.scrollTo(0,0)}function F(){g(o("Are you sure you want to submit the test?<br>You will not be able to continue the test once it is submitted."),o("Submit"),async()=>{V()})}function V(){T.push({name:"tests"})}return(i,c)=>(n(),b(K,null,{default:$(()=>{var f,_;return[e(t)?(n(),a("div",O,[s("div",Q,u(e(t).name),1),e(m)>0?(n(),a("div",W,[c[0]||(c[0]=s("i",{class:"bi bi-alarm"},null,-1)),R(" "+u(x.value),1)])):l("",!0)])):l("",!0),(f=e(t))!=null&&f.description?(n(),a("div",X,[s("div",{class:"test-description",innerHTML:C.value},null,8,Z),s("div",tt," ("+u(e(t).max_points)+" pts) ",1)])):l("",!0),e(t)?(n(),a("div",et,[(n(!0),a(U,null,Y((_=e(t))==null?void 0:_.questions,(d,A)=>(n(),b(J,{key:d.id,question:d,choices:d.choices,nbr:A+1,preview:!0},null,8,["question","choices","nbr"]))),128)),s("div",st,[s("button",{type:"button",class:"btn btn-outline-primary to-the-top",onClick:M,"aria-label":e(o)("go to the top of the page")},c[1]||(c[1]=[s("i",{class:"bi bi-arrow-up"},null,-1)]),8,ot),s("button",{type:"button",class:"btn btn-primary",onClick:F},u(e(o)("Finish The Test")),1)])])):l("",!0)]}),_:1}))}}),pt=q(it,[["__scopeId","data-v-953fd89a"]]);export{pt as default};
