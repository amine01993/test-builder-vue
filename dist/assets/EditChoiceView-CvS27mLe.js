import{d as j,u as z,b as I,a as R,v as $,r,x as G,o as H,c as J,P as K,e as W,f as X,w as Y,y as Z,g as d,h as e,t as o,i as u,j as v,F as C,k as ee,p as y,C as g,A as q,ag as te,m as E,B as V,ah as se,s as ie}from"./index-CYSG3gem.js";import{a as oe,b as ae}from"./testService-Cnbo4ErZ.js";import{Q as N}from"./Question-DJVAB3JS.js";import{_ as ne}from"./AppContainer.vue_vue_type_script_setup_true_lang-6SrFR88_.js";import"./firestore-PMUsJiSA.js";const le={class:"app-main"},ue={class:"choice-form"},ce={class:"choice-form-title mb-4"},re={key:0,class:"alert alert-danger",role:"alert"},de={class:"mb-3 question-text"},ve={class:"mb-3"},he={for:"choice-input-text",class:"form-label"},pe=["type","disabled"],me={key:0,class:"invalid-feedback is-invalid"},fe={class:"mb-3"},be={for:"choice-input-pts",class:"form-label"},_e=["disabled"],ye={key:0,class:"invalid-feedback is-invalid"},qe={class:"mb-3"},ke={class:"form-check"},xe={class:"form-check-label",for:"choice-input-correctness"},Ce={class:"mb-3"},ge={for:"question-input-position",class:"form-label"},Ee=["data-bs-content","aria-label"],we=["disabled"],Se={key:0,class:"invalid-feedback is-invalid"},Te=["disabled"],Ve=j({__name:"EditChoiceView",props:{test_id:{},question_id:{},choice_id:{}},setup(a){const M=Z(),{t:s}=z(),{startLoading:A,endLoading:B,showMessage:f}=I(),{auth:F}=R(),{spaceLabel:L}=$(),{question:k,loadQuestion:P}=oe(),{getChoice:Q,updateChoice:U}=ae(),w=r(""),x=r(N.Text),h=r(""),p=r(0),b=r(!1),m=r(0),S=r(!1),c=r(!1),_=r([]),n=G(()=>{const t={};return S.value&&(h.value===""&&(t.text=s("Choice required")),typeof p.value=="string"&&(t.points=s("Points must be a number")),typeof m.value=="string"&&(t.position=s("The position must be a number"))),t}),D=H(F,async()=>{A();try{if(await P(a.test_id,a.question_id),!k.value){f("failure",s("Question Not Found."));return}w.value=k.value.text,x.value=k.value.type;const t=await Q(a.test_id,a.question_id,a.choice_id);if(!t){f("failure",s("Choice Not Found."));return}h.value=t.text,b.value=t.is_correct,p.value=t.points,m.value=t.position}catch{f("failure",s("Error loading data."))}finally{B()}}),T=[];J(()=>{document.querySelectorAll(".app-main .label-info").forEach(i=>{T.push(new K(i,{container:"body",placement:"right",html:!0,trigger:"click"}))})}),W(()=>{T.forEach(t=>t.dispose()),D()});async function O(){if(!c.value){if(c.value=!0,S.value=!0,Object.keys(n.value).length>0){c.value=!1;return}try{await U(a.test_id,a.question_id,a.choice_id,{text:h.value,is_correct:b.value,points:Number(p.value),position:Number(m.value),question:{type:x.value}}),_.value=[],f("success",s("Choice edited with success.")),M.push({name:"edit-question",params:{test_id:a.test_id,question_id:a.question_id},query:{sF:0}})}catch(t){_.value=[s("Server Error")+L.value+": "+t.code]}finally{c.value=!1}}}return(t,i)=>(d(),X(ne,{test_id:t.test_id,question_id:t.question_id},{default:Y(()=>[e("div",le,[e("div",ue,[e("div",ce,o(u(s)("Edit Choice")),1),_.value.length?(d(),v("div",re,[e("ul",null,[(d(!0),v(C,null,ee(_.value,l=>(d(),v("li",{key:l},o(l),1))),128))])])):y("",!0),e("div",de,o(w.value),1),e("div",ve,[e("label",he,[g(o(u(s)("Choice")),1),i[4]||(i[4]=e("span",{class:"required"},"*",-1))]),q(e("input",{type:x.value===u(N).Number?"number":"text",class:E(["form-control",{"is-invalid":n.value.text}]),id:"choice-input-text","onUpdate:modelValue":i[0]||(i[0]=l=>h.value=l),disabled:c.value,"aria-required":""},null,10,pe),[[te,h.value]]),n.value.text?(d(),v("div",me,o(n.value.text),1)):y("",!0)]),e("div",fe,[e("label",be,o(u(s)("Points")),1),q(e("input",{type:"number",class:E(["form-control",{"is-invalid":n.value.points}]),id:"choice-input-pts","onUpdate:modelValue":i[1]||(i[1]=l=>p.value=l),disabled:c.value},null,10,_e),[[V,p.value]]),n.value.points?(d(),v("div",ye,o(n.value.points),1)):y("",!0)]),e("div",qe,[e("div",ke,[q(e("input",{class:"form-check-input",type:"checkbox",id:"choice-input-correctness","onUpdate:modelValue":i[2]||(i[2]=l=>b.value=l)},null,512),[[se,b.value]]),e("label",xe,o(u(s)("Correct Choice")),1)])]),e("div",Ce,[e("label",ge,o(u(s)("Position")),1),e("button",{class:"label-info","data-bs-content":u(s)("The position of the choice in the question."),"aria-label":u(s)("The position of the choice in the question.")},i[5]||(i[5]=[e("i",{class:"bi bi-question-circle-fill"},null,-1)]),8,Ee),q(e("input",{type:"number",class:E(["form-control",{"is-invalid":n.value.position}]),id:"question-input-position","onUpdate:modelValue":i[3]||(i[3]=l=>m.value=l),disabled:c.value},null,10,we),[[V,m.value]]),n.value.position?(d(),v("div",Se,o(n.value.position),1)):y("",!0)]),e("button",{type:"button",class:"btn btn-primary",onClick:O,disabled:c.value},[c.value?(d(),v(C,{key:1},[g(o(u(s)("Editing"))+" ...",1)],64)):(d(),v(C,{key:0},[g(o(u(s)("Edit")),1)],64))],8,Te)])])]),_:1},8,["test_id","question_id"]))}}),Le=ie(Ve,[["__scopeId","data-v-ca383d98"]]);export{Le as default};
