import{d as y,_ as h,o as s,a as i,b as n,t as o,F as c,m as l,z as u,e as r,n as m}from"./index-DgVFOuIu.js";import{Q as p}from"./Question-DJVAB3JS.js";const k=y({__name:"DisplayQuestion",props:{question:{type:Object,required:!1},choices:{type:Array,required:!1},nbr:{type:Number,required:!1},preview:{type:Boolean,required:!0}},setup(d,{expose:_}){_();const e={get QuestionType(){return p}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),b={class:"question-wrapper"},v={class:"question-text"},f={class:"question-pts"},q={class:"choices-wrapper"},x={class:"choice-input"},Q={class:"form-check"},T=["name","id","value"],g=["for"],w={key:0,class:"choice-pts"},C={key:0,class:"bi bi-check2"},D={key:1,class:"bi bi-x-lg"},N={class:"choice-input"},S={class:"form-check"},B=["name","id","value"],O=["for"],V={key:0,class:"choice-pts"},j={key:0,class:"bi bi-check2"},z={key:1,class:"bi bi-x-lg"},F={class:"choice-input"},M=["name"],A={key:0,class:"choice-pts-wrapper"},E={key:0,class:"bi bi-check2"},L={key:1,class:"bi bi-x-lg"},P={class:"choice-input"},U=["name"],G={key:0,class:"choice-pts-wrapper"},H={key:0,class:"bi bi-check2"},I={key:1,class:"bi bi-x-lg"};function J(d,_,e,a,K,R){return e.question?(s(),i("div",{key:0,class:m(["display-question",{"question-type-text":[a.QuestionType.Text,a.QuestionType.Number].includes(e.question.type),"question-type-choices":[a.QuestionType.SingleChoice,a.QuestionType.MultipleChoice].includes(e.question.type)}])},[n("div",b,[n("div",v,o(e.nbr??1)+". "+o(e.question.text),1),n("div",f,"("+o(e.question.max_points)+" pts)",1)]),n("div",q,[e.choices?(s(),i(c,{key:0},[e.question.type===a.QuestionType.MultipleChoice?(s(!0),i(c,{key:0},l(e.choices,t=>(s(),i(c,{key:t.id},[n("div",x,[n("div",Q,[n("input",{class:"form-check-input",type:"checkbox",name:e.question.id,id:"choice-"+t.id,value:t.text},null,8,T),n("label",{class:"form-check-label",for:"choice-"+t.id},o(t.text),9,g)])]),e.preview?(s(),i("div",w,[u(" ("+o(t.points)+" pts) ",1),t.is_correct?(s(),i("i",C)):(s(),i("i",D))])):r("",!0)],64))),128)):e.question.type===a.QuestionType.SingleChoice?(s(!0),i(c,{key:1},l(e.choices,t=>(s(),i(c,{key:t.id},[n("div",N,[n("div",S,[n("input",{class:"form-check-input",type:"radio",name:e.question.id,id:"choice-"+t.id,value:t.text},null,8,B),n("label",{class:"form-check-label",for:"choice-"+t.id},o(t.text),9,O)])]),e.preview?(s(),i("div",V,[u(" ("+o(t.points)+" pts) ",1),t.is_correct?(s(),i("i",j)):(s(),i("i",z))])):r("",!0)],64))),128)):e.question.type===a.QuestionType.Text?(s(),i(c,{key:2},[n("div",F,[n("input",{class:"form-control",type:"text",name:e.question.id},null,8,M)]),e.preview?(s(),i("div",A,[(s(!0),i(c,null,l(e.choices,t=>(s(),i("div",{key:t.id,class:"choice-pts"},[u(o(t.text)+" ("+o(t.points)+" pts) ",1),t.is_correct?(s(),i("i",E)):(s(),i("i",L))]))),128))])):r("",!0)],64)):e.question.type===a.QuestionType.Number?(s(),i(c,{key:3},[n("div",P,[n("input",{class:"form-control",type:"number",name:e.question.id},null,8,U)]),e.preview?(s(),i("div",G,[(s(!0),i(c,null,l(e.choices,t=>(s(),i("div",{key:t.id,class:"choice-pts"},[u(o(t.text)+" ("+o(t.points)+" pts) ",1),t.is_correct?(s(),i("i",H)):(s(),i("i",I))]))),128))])):r("",!0)],64)):r("",!0)],64)):r("",!0)])],2)):r("",!0)}const Y=h(k,[["render",J],["__file","C:/Users/erram/OneDrive/Documents/test-builder-vue/src/components/items/DisplayQuestion.vue"]]);export{Y as D};
