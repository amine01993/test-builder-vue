import{d as B,g as z,B as ee,c as Y,i as G,M as te,j as H,_ as J,v as K,o as a,a as r,b as t,t as u,p as S,w as E,f as ie,C as oe,q as se,u as ne,r as f,h as le,P as ae,l as I,n as p,F as C,m as U,e as q,x as L,y as R,I as ce,z as x}from"./index-DgVFOuIu.js";import{d as re}from"./vuedraggable.umd-D4hbS-nB.js";import{b as W,a as de}from"./testService-B9g0yUeR.js";import{Q as j}from"./Question-DJVAB3JS.js";import{A as ue}from"./AppContainer-B7WmBWY1.js";import"./firestore-CKAN35Ge.js";import"./Breadcrumb-0WoaLxXW.js";const me=B({__name:"ChoiceItem",props:{test_id:{type:String,required:!1},question_id:{type:String,required:!1},choice:{type:Object,required:!1}},setup(l,{expose:i}){i();const{showMessage:o,startLoading:e,endLoading:h}=z(),{deleteChoice:v}=W(),c=ee("confirm-deletion-modal"),s=new Date;let d=null;const w=Y(()=>{const m=l.choice.updated_at.toDate();return new Intl.DateTimeFormat("en-US",{day:"numeric",month:"short",year:s.getFullYear()===m.getFullYear()?void 0:"numeric",hour:"numeric",minute:"numeric"}).format(m)});G(()=>{c.value&&(d=new te(c.value))}),H(()=>{d&&d.dispose()});function Q(){d&&d.show()}async function D(){var m;if(d&&d.hide(),l.test_id&&l.question_id&&((m=l.choice)!=null&&m.id))try{e(),await v(l.test_id,l.question_id,l.choice.id),o("success","Choice deleted with success.")}catch{o("failure","Choice can not be deleted.")}finally{h()}}const _={showMessage:o,startLoading:e,endLoading:h,deleteChoice:v,choiceConfirmDeletionModalEl:c,currentDate:s,get choiceConfirmDeletionModal(){return d},set choiceConfirmDeletionModal(m){d=m},updatedAt:w,confirmChoicedeletion:Q,deleteDChoice:D};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}}),he={key:0,class:"choice-item-container"},ve={class:"choice-item-content"},fe={class:"choice-item-title"},be={class:"choice-item-info"},_e={class:"choice-property"},ye={class:"choice-property"},ge={class:"choice-property"},pe={class:"choice-last-update"},Ce={class:"choice-item-actions"},qe={class:"modal",tabindex:"-1",ref:"confirm-deletion-modal"},we={class:"modal-dialog modal-dialog-centered"},ke={class:"modal-content"},xe={class:"modal-body"},Se={key:1,class:"choice-item-container placeholder-wave"};function Ee(l,i,o,e,h,v){const c=K("RouterLink");return o.choice?(a(),r("div",he,[i[6]||(i[6]=t("div",{class:"choice-item-sort-handler"},[t("i",{class:"bi bi-arrow-down-up"})],-1)),t("div",ve,[t("div",fe,u(o.choice.text),1),i[2]||(i[2]=t("hr",{class:"choice-item-divider"},null,-1)),t("div",be,[t("div",_e,"Points: "+u(o.choice.points),1),t("div",ye,"Correctness: "+u(o.choice.is_correct),1),t("div",ge,"Position: "+u(o.choice.position),1),t("div",pe,"Last updated at: "+u(e.updatedAt),1)]),i[3]||(i[3]=t("hr",{class:"choice-item-divider"},null,-1)),t("div",Ce,[S(c,{to:{name:"edit-choice",params:{test_id:o.test_id,question_id:o.question_id,choice_id:o.choice.id}},class:"btn btn-success"},{default:E(()=>i[0]||(i[0]=[t("i",{class:"bi bi-pencil-fill"},null,-1)])),_:1},8,["to"]),t("button",{type:"button",class:"btn btn-danger",onClick:e.confirmChoicedeletion},i[1]||(i[1]=[t("i",{class:"bi bi-trash3-fill"},null,-1)]))])]),t("div",qe,[t("div",we,[t("div",ke,[i[5]||(i[5]=t("div",{class:"modal-header"},[t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),t("div",xe,[t("p",null,'Are you sure you want to delete this choice: "'+u(o.choice.text)+'"?',1)]),t("div",{class:"modal-footer"},[i[4]||(i[4]=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Cancel",-1)),t("button",{type:"button",class:"btn btn-danger",onClick:e.deleteDChoice},"Delete")])])])],512)])):(a(),r("div",Se,i[7]||(i[7]=[ie('<div class="choice-item-content"><div class="choice-item-title placeholder col-6 offset-3 placeholder-lg bg-secondary"></div><hr class="choice-item-divider"><div class="choice-item-info"><div class="placeholder col-12 bg-secondary" style="min-height:4em;"></div><div class="placeholder col-8 offset-4 placeholder-sm bg-secondary"></div></div><hr class="choice-item-divider"><div class="choice-item-actions placeholder col-9 offset-3 placeholder-lg bg-secondary"></div></div>',1)])))}const Qe=J(me,[["render",Ee],["__file","C:/Users/erram/OneDrive/Documents/test-builder-vue/src/components/items/ChoiceItem.vue"]]),De=B({__name:"EditQuestionView",props:{test_id:{type:String,required:!0},question_id:{type:String,required:!0}},setup(l,{expose:i}){i();const o=oe(),e=se(),{startLoading:h,endLoading:v,showMessage:c}=z(),{auth:s}=ne(),{getQuestion:d,updateQuestion:w}=de(),{choiceCount:Q,choices:D,loadChoices:_,updateChoicesPositions:m}=W(),y=f(""),T=f(j.Text),k=f(0),b=f(o.query.sF!="0"),F=f(!1),g=f(!1),M=f([]),N=Y(()=>{const n={};return F.value&&(y.value===""&&(n.text="Question required"),typeof k.value=="string"&&(n.position="The position must be a number")),n}),P=le(s,async()=>{b.value&&h();let n;try{if(n=await d(l.test_id,l.question_id),!n){c("failure","Question Not Found.");return}y.value=n.text,T.value=n.type,k.value=n.position}catch{c("failure","Error loading question data.")}finally{b.value&&v()}try{n&&await _(l.test_id,n)}catch{c("failure","Error loading choices.")}}),V=[];G(()=>{document.querySelectorAll(".app-main .label-info").forEach(A=>{V.push(new ae(A,{container:"body",placement:"right",html:!0,trigger:"click"}))})}),H(()=>{V.forEach(n=>n.dispose()),P()});async function X(){if(!g.value){if(g.value=!0,F.value=!0,Object.keys(N.value).length>0){g.value=!1;return}try{await w(l.test_id,l.question_id,{text:y.value,type:T.value,position:Number(k.value)}),M.value=[],c("success","Question edited with success.")}catch(n){M.value=["Server Error: "+n.code]}finally{g.value=!1}}}function Z(){b.value=!b.value,e.push({query:{sF:b.value?1:0}})}function $(){m(l.test_id,l.question_id).then(()=>{c("success","Positions updated with success.")}).catch(n=>{c("failure","Sorry! Positions can not be updated.")})}const O={route:o,router:e,startLoading:h,endLoading:v,showMessage:c,auth:s,getQuestion:d,updateQuestion:w,choiceCount:Q,choices:D,loadChoices:_,updateChoicesPositions:m,text:y,type:T,position:k,showForm:b,submitted:F,submitting:g,serverErrors:M,errors:N,onAuthEventDispose:P,popOvers:V,editQuestion:X,toggleShowForm:Z,onDragEnd:$,get draggable(){return re},get QuestionType(){return j},ChoiceItem:Qe,AppContainer:ue};return Object.defineProperty(O,"__isScriptSetup",{enumerable:!1,value:!0}),O}}),Te={class:"app-main"},Fe={key:0,class:"alert alert-danger",role:"alert"},Me={class:"mb-3"},Ve=["disabled"],Ae={key:0,class:"invalid-feedback is-invalid"},Le={class:"mb-3"},Ne=["disabled"],Pe=["value"],Oe=["value"],Ie=["value"],Ue=["value"],Re={key:0,class:"invalid-feedback is-invalid"},je={class:"mb-3"},Be=["disabled"],ze={key:0,class:"invalid-feedback is-invalid"},Ye=["disabled"],Ge={class:"choice-actions"},He={key:0,class:"choice-info"},Je={key:1,class:"placeholder-wave"},Ke={key:2,class:"choice-list"};function We(l,i,o,e,h,v){const c=K("RouterLink");return a(),I(e.AppContainer,{test_id:o.test_id},{default:E(()=>[t("div",Te,[t("div",{class:p(["question-form",{"hide-form":!e.showForm}])},[i[8]||(i[8]=t("div",{class:"question-form-title mb-4"},"Edit Question",-1)),t("button",{class:"btn toggle-form-btn",onClick:e.toggleShowForm},[t("i",{class:p(["bi",{"bi-chevron-down":!e.showForm,"bi-chevron-up":e.showForm}])},null,2)]),e.serverErrors.length?(a(),r("div",Fe,[t("ul",null,[(a(!0),r(C,null,U(e.serverErrors,s=>(a(),r("li",{key:s},u(s),1))),128))])])):q("",!0),t("div",Me,[i[4]||(i[4]=t("label",{for:"question-input-text",class:"form-label"},"Question",-1)),L(t("input",{type:"text",class:p(["form-control",{"is-invalid":e.errors.text}]),id:"question-input-text","onUpdate:modelValue":i[0]||(i[0]=s=>e.text=s),disabled:e.submitting},null,10,Ve),[[R,e.text]]),e.errors.text?(a(),r("div",Ae,u(e.errors.text),1)):q("",!0)]),t("div",Le,[i[5]||(i[5]=t("label",{for:"question-input-type",class:"form-label"},"Question Type",-1)),L(t("select",{class:p(["form-select",{"is-invalid":e.errors.type}]),id:"question-input-type","onUpdate:modelValue":i[1]||(i[1]=s=>e.type=s),disabled:e.submitting},[t("option",{value:e.QuestionType.Text},"Text",8,Pe),t("option",{value:e.QuestionType.MultipleChoice},"Multiple Choice",8,Oe),t("option",{value:e.QuestionType.Number},"Number",8,Ie),t("option",{value:e.QuestionType.SingleChoice},"Single Choice",8,Ue)],10,Ne),[[ce,e.type]]),e.errors.type?(a(),r("div",Re,u(e.errors.type),1)):q("",!0)]),t("div",je,[i[6]||(i[6]=t("label",{for:"question-input-position",class:"form-label"},"Position",-1)),i[7]||(i[7]=t("span",{class:"label-info","data-bs-content":"The position of the question in the test."},[t("i",{class:"bi bi-question-circle-fill"})],-1)),L(t("input",{type:"number",class:p(["form-control",{"is-invalid":e.errors.position}]),id:"question-input-position","onUpdate:modelValue":i[2]||(i[2]=s=>e.position=s),disabled:e.submitting},null,10,Be),[[R,e.position]]),e.errors.position?(a(),r("div",ze,u(e.errors.position),1)):q("",!0)]),t("button",{type:"button",class:"btn btn-primary",onClick:e.editQuestion,disabled:e.submitting},[e.submitting?(a(),r(C,{key:1},[x("Editing ...")],64)):(a(),r(C,{key:0},[x("Edit")],64))],8,Ye)],2)]),t("div",Ge,[S(c,{to:{name:"create-choice",params:{test_id:o.test_id,question_id:o.question_id}},class:"btn btn-warning"},{default:E(()=>i[9]||(i[9]=[x("Create New Choice")])),_:1},8,["to"])]),e.choiceCount!==0?(a(),r("div",He,[e.choiceCount?(a(),r(C,{key:0},[i[10]||(i[10]=t("span",{class:"choice-info-label"},"Total number of choices:",-1)),x(" "+u(e.choiceCount),1)],64)):(a(),r("div",Je,i[11]||(i[11]=[t("div",{class:"placeholder placeholder-lg col-8 bg-secondary"},null,-1)])))])):q("",!0),e.choices?(a(),I(e.draggable,{key:1,modelValue:e.choices,"onUpdate:modelValue":i[3]||(i[3]=s=>e.choices=s),"item-key":"id",tag:"div","component-data":{class:"choice-list"},handle:".choice-item-sort-handler",onEnd:e.onDragEnd},{item:E(({element:s})=>[S(e.ChoiceItem,{test_id:o.test_id,question_id:o.question_id,choice:s},null,8,["test_id","question_id","choice"])]),_:1},8,["modelValue"])):(a(),r("div",Ke,[(a(),r(C,null,U([0,1,2],s=>S(e.ChoiceItem,{key:"choice-placeholder-"+s})),64))]))]),_:1},8,["test_id"])}const st=J(De,[["render",We],["__scopeId","data-v-2d7f7ac0"],["__file","C:/Users/erram/OneDrive/Documents/test-builder-vue/src/views/EditQuestionView.vue"]]);export{st as default};
