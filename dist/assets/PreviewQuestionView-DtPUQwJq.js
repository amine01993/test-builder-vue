import{d as l,u as p,g as f,r as v,h as m,j as h,_ as w,l as S,w as g,o as q,b as y,p as C}from"./index-CGS4B7OT.js";import{a as Q,b as A}from"./testService-DeBIOd3R.js";import{A as D}from"./AppContainer-BbQHt-u2.js";import{D as b}from"./DisplayQuestion-Bh6xTWWx.js";import"./firestore-B39V3hTY.js";import"./Question-DJVAB3JS.js";const x=l({__name:"PreviewQuestionView",props:{test_id:{type:String,required:!0},question_id:{type:String,required:!0}},setup(t,{expose:a}){a();const{auth:i}=p(),{startLoading:e,endLoading:r,showMessage:s}=f(),{getQuestion:n}=Q(),{choices:u,loadChoices:c}=A(),o=v(),d=m(i,async()=>{e();try{if(o.value=await n(t.test_id,t.question_id),!o.value){s("failure","Question Not Found.");return}u.value=void 0,await c(t.test_id,o.value)}catch{s("failure","Error loading question data.")}finally{r()}});h(()=>{d()});const _={auth:i,startLoading:e,endLoading:r,showMessage:s,getQuestion:n,choices:u,loadChoices:c,question:o,onAuthEventDispose:d,AppContainer:D,DisplayQuestion:b};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),V={class:"app-main"};function P(t,a,i,e,r,s){return q(),S(e.AppContainer,{test_id:i.test_id},{default:g(()=>[y("div",V,[C(e.DisplayQuestion,{question:e.question,choices:e.choices,preview:!0},null,8,["question","choices"])])]),_:1},8,["test_id"])}const O=w(x,[["render",P],["__scopeId","data-v-a7586f7c"],["__file","C:/Users/erram/OneDrive/Documents/test-builder-vue/src/views/PreviewQuestionView.vue"]]);export{O as default};
