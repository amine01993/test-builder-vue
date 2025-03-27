import{d as O,u as P,b as L,a as j,v as z,r as d,x as I,o as R,c as $,P as G,e as H,f as J,w as K,y as W,g as r,h as e,t as i,i as a,j as u,F as x,k as X,p as _,A as y,af as Y,m as q,B as V,ag as Z,C as M,s as ee}from"./index-D9eu1wvy.js";import{a as te,b as se}from"./testService-z9XHGfAc.js";import{Q as N}from"./Question-DJVAB3JS.js";import{_ as oe}from"./AppContainer.vue_vue_type_script_setup_true_lang-Ci2WOSVt.js";import"./firestore-CkCHjU9t.js";const ie={class:"app-main"},ae={class:"choice-form"},ne={class:"choice-form-title mb-4"},le={key:0,class:"alert alert-danger",role:"alert"},ce={class:"mb-3 question-text"},re={class:"mb-3"},ue={for:"choice-input-text",class:"form-label"},de=["type","disabled"],ve={key:0,class:"invalid-feedback is-invalid"},pe={class:"mb-3"},he={for:"choice-input-pts",class:"form-label"},me=["disabled"],fe={key:0,class:"invalid-feedback is-invalid"},be={class:"mb-3"},_e={class:"form-check"},ye={class:"form-check-label",for:"choice-input-correctness"},Ce={class:"mb-3"},ke={for:"choice-input-position",class:"form-label"},xe=["data-bs-content"],qe=["disabled"],ge={key:0,class:"invalid-feedback is-invalid"},Se=["disabled"],we=O({__name:"CreateChoiceView",props:{test_id:{},question_id:{}},setup(v){const T=W(),{t}=P(),{showMessage:C}=L(),{auth:A}=j(),{spaceLabel:B}=z(),{question:p,loadQuestion:Q}=te(),{addChoice:U}=se(),h=d(""),m=d(0),k=d(!1),f=d(0),g=d(!1),c=d(!1),b=d([]),n=I(()=>{const s={};return g.value&&(h.value===""&&(s.text=t("Choice required")),typeof m.value=="string"&&(s.points=t("Max points must be a number")),typeof f.value=="string"&&(s.position=t("The position must be a number"))),s}),D=R(A,async()=>{try{if(await Q(v.test_id,v.question_id),!p.value){C("failure",t("Question Not Found."));return}}catch{C("failure",t("Error loading question."))}finally{}}),S=[];$(()=>{document.querySelectorAll(".app-main .label-info").forEach(o=>{S.push(new G(o,{container:"body",placement:"right",html:!0,trigger:"click"}))})}),H(()=>{S.forEach(s=>s.dispose()),D()});async function F(){var s;if(!c.value){if(c.value=!0,g.value=!0,Object.keys(n.value).length>0){c.value=!1;return}try{await U(v.test_id,v.question_id,{text:h.value,points:Number(m.value),is_correct:k.value,position:Number(f.value),question:{type:((s=p.value)==null?void 0:s.type)??N.Text}}),b.value=[],C("success",t("Choice created with success.")),T.push({name:"edit-question",params:{test_id:v.test_id,question_id:v.question_id},query:{sF:0}})}catch(o){b.value=[t("Server Error")+B.value+": "+o.code]}finally{c.value=!1}}}return(s,o)=>(r(),J(oe,{test_id:s.test_id,question_id:s.question_id},{default:K(()=>{var w,E;return[e("div",ie,[e("div",ae,[e("div",ne,i(a(t)("Create Choice")),1),b.value.length?(r(),u("div",le,[e("ul",null,[(r(!0),u(x,null,X(b.value,l=>(r(),u("li",{key:l},i(l),1))),128))])])):_("",!0),e("div",ce,i((w=a(p))==null?void 0:w.text),1),e("div",re,[e("label",ue,i(a(t)("Choice")),1),y(e("input",{type:((E=a(p))==null?void 0:E.type)===a(N).Number?"number":"text",class:q(["form-control",{"is-invalid":n.value.text}]),id:"choice-input-text","onUpdate:modelValue":o[0]||(o[0]=l=>h.value=l),disabled:c.value,"aria-required":""},null,10,de),[[Y,h.value]]),n.value.text?(r(),u("div",ve,i(n.value.text),1)):_("",!0)]),e("div",pe,[e("label",he,i(a(t)("Points")),1),y(e("input",{type:"number",class:q(["form-control",{"is-invalid":n.value.points}]),id:"choice-input-pts","onUpdate:modelValue":o[1]||(o[1]=l=>m.value=l),disabled:c.value},null,10,me),[[V,m.value]]),n.value.points?(r(),u("div",fe,i(n.value.points),1)):_("",!0)]),e("div",be,[e("div",_e,[y(e("input",{class:"form-check-input",type:"checkbox",id:"choice-input-correctness","onUpdate:modelValue":o[2]||(o[2]=l=>k.value=l)},null,512),[[Z,k.value]]),e("label",ye,i(a(t)("Correct Choice")),1)])]),e("div",Ce,[e("label",ke,i(a(t)("Position")),1),e("span",{class:"label-info","data-bs-content":a(t)("The position of the choice in the question.")},o[4]||(o[4]=[e("i",{class:"bi bi-question-circle-fill"},null,-1)]),8,xe),y(e("input",{type:"number",class:q(["form-control",{"is-invalid":n.value.position}]),id:"choice-input-position","onUpdate:modelValue":o[3]||(o[3]=l=>f.value=l),disabled:c.value},null,10,qe),[[V,f.value]]),n.value.position?(r(),u("div",ge,i(n.value.position),1)):_("",!0)]),e("button",{type:"button",class:"btn btn-primary",onClick:F,disabled:c.value},[c.value?(r(),u(x,{key:1},[M(i(a(t)("Creating"))+" ...",1)],64)):(r(),u(x,{key:0},[M(i(a(t)("Create")),1)],64))],8,Se)])])]}),_:1},8,["test_id","question_id"]))}}),Ae=ee(we,[["__scopeId","data-v-db39441f"]]);export{Ae as default};
