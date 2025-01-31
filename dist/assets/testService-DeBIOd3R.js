import{G as L,r as C,c as g,u as B}from"./index-CGS4B7OT.js";import{u as k,d as x,g as G,c as w,q,o as R,b as y,e as j,T as D,f as A,h as z,i as V,w as F,a as W,l as N,s as X}from"./firestore-B39V3hTY.js";import{Q as Y}from"./Question-DJVAB3JS.js";const O=L("choiceService",()=>{const{db:d}=k(),m=C(),h=C(),r=C(),i=C();async function f(v,l,a){var t;if(m.value===v&&h.value===l){const s=(t=i.value)==null?void 0:t.find(e=>e.id===a);if(s)return s}const o=x(d,"tests",v,"questions",l,"choices",a),u=await G(o);if(u.exists()){const s=u.data();return s.id=u.id,s}}async function P(v,l){const a=w(d,"tests",v,"questions",l,"choices"),o=q(a,R("position"));return(await y(o)).docs.map(t=>{const s=t.data();return s.id=t.id,s})}async function Q(v,l){if(!l.id||m.value===v&&h.value===l.id)return;m.value=v,h.value=l.id,r.value=l.choiceCount;const a=w(d,"tests",v,"questions",l.id,"choices"),o=q(a,R("position")),u=await y(o);i.value=u.docs.map(t=>{const s=t.data();return s.id=t.id,s})}async function T(v,l,a){var n;const{user:o}=B(),{updateMaxPoints:u}=E(),{updateChoiceCount:t,updateMaxPoints:s}=b();a.user_id=(n=o.value)==null?void 0:n.uid;const e=await j(w(d,"tests",v,"questions",l,"choices"),a);if(a.id=e.id,a.updated_at=D.fromDate(new Date),i.value){i.value.unshift(a);let c=0;for(;c+1<i.value.length;){if(i.value[c].position>i.value[c+1].position){const p=i.value[c];i.value[c]=i.value[c+1],i.value[c+1]=p}c++}}else i.value=[a];return r.value?r.value++:r.value=1,t(l,r.value),a.points&&a.points>0&&(s(l),u(v)),e}async function M(v,l,a,o){const{updateMaxPoints:u}=E(),{updateMaxPoints:t}=b();if(await A(x(d,"tests",v,"questions",l,"choices",a),{text:o.text,is_correct:o.is_correct,points:o.points,position:o.position}),i.value){const s=i.value.findIndex(e=>e.id===a);if(s>-1){const e=i.value[s];if(e.text=o.text,e.is_correct=o.is_correct,e.updated_at=D.fromDate(new Date),o.position>e.position){let n=s;for(;n+1<i.value.length;){if(o.position>i.value[n+1].position){const c=i.value[n];i.value[n]=i.value[n+1],i.value[n+1]=c}n++}}else if(o.position<e.position){let n=s;for(;n-1>=0;){if(o.position<i.value[n-1].position){const c=i.value[n];i.value[n]=i.value[n-1],i.value[n-1]=c}n--}}e.position=o.position,e.points!==o.points&&(e.points=o.points,t(l),u(v))}}}async function S(v,l){if(i.value){const a=i.value.map(u=>u.position);let o=0;for(;o+1<a.length;){if(a[o]>a[o+1]){const u=a[o];a[o]=a[o+1],a[o+1]=u}o++}for(const[u,t]of i.value.entries())if(t.position!==a[u]&&t.id){const s=x(d,"tests",v,"questions",l,"choices",t.id);await A(s,{position:a[u]}),t.position=a[u]}}}async function I(v,l,a){const{updateMaxPoints:o}=E(),{updateChoiceCount:u,updateMaxPoints:t}=b(),s=x(d,"tests",v,"questions",l,"choices",a);if(await z(s),i.value){const e=i.value.findIndex(n=>a===n.id);e>-1&&i.value.splice(e,1)}r.value?r.value--:r.value=0,u(l,r.value),t(l),o(v)}return{choiceCount:g(()=>r),choices:g(()=>i),getChoice:f,getChoices:P,loadChoices:Q,addChoice:T,updateChoice:M,updateChoicesPositions:S,deleteChoice:I}}),b=L("questionService",()=>{const{db:d}=k(),{getChoices:m}=O(),h=C(),r=C(),i=C();function f(a,o){var t;const u=(t=i.value)==null?void 0:t.find(s=>s.id===a);u&&(u.choiceCount=o)}function P(a){if(!i.value)return;const o=i.value.find(s=>s.id===a);if(!o)return;const{choices:u}=O();if(!u.value)return;let t=0;o.type===Y.MultipleChoice?t=u.value.reduce((s,e)=>{const n=e.points??0;return n>0?s+n:s},0):t=u.value.reduce((s,e)=>Math.max(s,e.points??0),0),o.max_points=t}async function Q(a,o){var s;if(h.value===a){const e=(s=i.value)==null?void 0:s.find(n=>n.id===o);if(e)return e}const u=x(d,"tests",a,"questions",o),t=await G(u);if(t.exists()){const e=t.data();return e.id=t.id,e}}async function T(a){const o=w(d,"tests",a,"questions"),u=q(o,R("position")),t=[];return(await y(u).then(e=>{const n=[];return e.forEach(c=>{if(c.exists()){const p=c.data();p.id=c.id,t.push(p),n.push(m(a,c.id))}}),Promise.all(n)})).forEach((e,n)=>{t[n].choices=e}),t}async function M(a){if(!a.id||h.value===a.id)return;h.value=a.id,r.value=a.questionCount;const o=w(d,"tests",a.id,"questions"),u=q(o,R("position")),t=await y(u);i.value=t.docs.map(s=>{const e=s.data();return e.id=s.id,e})}async function S(a,o){var e;const{user:u}=B(),{updateQuestionCount:t}=E();o.user_id=(e=u.value)==null?void 0:e.uid;const s=await j(w(d,"tests",a,"questions"),o);if(o.id=s.id,o.updated_at=D.fromDate(new Date),i.value){i.value.unshift(o);let n=0;for(;n+1<i.value.length;){if(i.value[n].position>i.value[n+1].position){const c=i.value[n];i.value[n]=i.value[n+1],i.value[n+1]=c}n++}}else i.value=[o];return r.value?r.value++:r.value=1,t(a,r.value),s}async function I(a,o,u){if(await A(x(d,"tests",a,"questions",o),{text:u.text,type:u.type,position:u.position}),i.value){const t=i.value.findIndex(s=>s.id===o);if(t>-1){const s=i.value[t];if(s.text=u.text,s.type=u.type,s.updated_at=D.fromDate(new Date),u.position>s.position){let e=t;for(;e+1<i.value.length;){if(u.position>i.value[e+1].position){const n=i.value[e];i.value[e]=i.value[e+1],i.value[e+1]=n}e++}}else if(u.position<s.position){let e=t;for(;e-1>=0;){if(u.position<i.value[e-1].position){const n=i.value[e];i.value[e]=i.value[e-1],i.value[e-1]=n}e--}}s.position=u.position}}}async function v(a){if(i.value){const o=i.value.map(t=>t.position);let u=0;for(;u+1<o.length;){let t=u;for(;t>-1&&o[t]>o[t+1];){const s=o[t];o[t]=o[t+1],o[t+1]=s,t--}u++}for(const[t,s]of i.value.entries())if(s.position!==o[t]&&s.id){const e=x(d,"tests",a,"questions",s.id);await A(e,{position:o[t]}),s.position=o[t]}}}async function l(a,o){const{updateQuestionCount:u}=E(),t=x(d,"tests",a,"questions",o);if(await z(t),i.value){const c=i.value.findIndex(p=>o===p.id);c>-1&&i.value.splice(c,1)}r.value?r.value--:r.value=0,u(a,r.value);const s=V(d),e=w(d,"tests",a,"questions",o,"choices");(await y(e)).forEach(c=>{s.delete(c.ref)}),await s.commit()}return{questionCount:g(()=>r),questions:g(()=>i),getQuestion:Q,getQuestions:T,loadQuestions:M,addQuestion:S,updateQuestion:I,updateQuestionsPositions:v,updateChoiceCount:f,updateMaxPoints:P,deleteQuestion:l}}),E=L("testService",()=>{const{db:d}=k(),m=C(),h=C(),r=25;let i=null;const f=C(null),{deleteQuestion:P,getQuestions:Q}=b();function T(t,s){var n;const e=(n=f.value)==null?void 0:n.find(c=>c.id===t);e&&(e.questionCount=s)}function M(t){if(!f.value)return;const s=f.value.find(n=>n.id===t);if(!s)return;const{questions:e}=b();e.value&&(s.max_points=e.value.reduce((n,c)=>n+(c.max_points??0),0))}async function S(t,s=!1){var H,J;const{user:e}=B();if(!m.value&&((H=e.value)==null?void 0:H.uid)===m.value){const K=(J=f.value)==null?void 0:J.find(U=>U.id===t);if(K)return K}const n=x(d,"tests",t),c=await G(n);if(!c.exists())return;const p=c.data();return p.id=c.id,s&&(p.questions=await Q(c.id)),p}async function I(t){if(m.value===t&&h.value===void 0)return;m.value=t;const s=w(d,"tests"),e=q(s,F("user_id","==",t)),n=await W(e);h.value=n.data().count}async function v(t){if(m.value===t&&f.value===void 0)return;const s=w(d,"tests"),e=q(s,F("user_id","==",t),R("updated_at","desc"),N(r)),n=await y(e);f.value=n.docs.map(c=>{const p=c.data();return p.id=c.id,p}),i=n.docs.length===0?null:n.docs[n.docs.length-1]}async function l(){if(!f.value||!i)return;const t=w(d,"tests"),s=q(t,F("user_id","==",m.value),R("updated_at","desc"),X(i),N(r)),e=await y(s),n=e.docs.map(c=>{const p=c.data();return p.id=c.id,p});i=e.docs.length===0?null:e.docs[e.docs.length-1],f.value=f.value.concat(n)}async function a(t){var n;const{user:s}=B();t.user_id=(n=s.value)==null?void 0:n.uid;const e=await j(w(d,"tests"),t);return t.id=e.id,t.updated_at=D.fromDate(new Date),f.value?f.value.unshift(t):f.value=[t],h.value?h.value++:h.value=1,e}async function o(t,s){if(await A(x(d,"tests",t),{name:s.name,description:s.description,time_limit:s.time_limit}),f.value){const e=f.value.findIndex(n=>n.id===t);if(e>-1){const n=f.value[e];n.name=s.name,n.description=s.description,n.time_limit=s.time_limit,n.updated_at=D.fromDate(new Date),e!=0&&(f.value.splice(e,1),f.value.unshift(n))}}}async function u(t){const s=x(d,"tests",t);if(await z(s),f.value){const n=f.value.findIndex(c=>c.id===t);n>-1&&f.value.splice(n,1)}h.value?h.value--:h.value=0;const e=w(d,"tests",t,"questions");await y(e).then(n=>{const c=[];return n.forEach(p=>{c.push(P(t,p.id))}),Promise.all(c)})}return{getTest:S,testCount:g(()=>h),tests:g(()=>f),loadTestCount:I,loadTests:v,loadMoreTests:l,addTest:a,updateTest:o,updateQuestionCount:T,updateMaxPoints:M,deleteTest:u}});export{b as a,O as b,E as u};
