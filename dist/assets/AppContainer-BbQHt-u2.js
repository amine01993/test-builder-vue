import{d as g,q as S,g as w,u as x,C as A,i as T,ad as O,j as H,R as D,ae as L,_ as v,o as r,a as l,b as n,p as d,w as c,z as C,F as _,t as h,af as R,v as M,n as f,G as E,D as B,m as F,l as U,ag as N}from"./index-CGS4B7OT.js";const P=g({__name:"AppHeader",setup(a,{expose:e}){e();const s=S(),{toggleMenu:t,showMessage:o}=w(),{user:m,auth:u,isAnonymous:i}=x(),b=A("user-dropdown");let p=null;T(()=>{b.value&&(p=new O(b.value))}),H(()=>{p&&(p.dispose(),p=null)});async function q(){try{await L(u),s.push({name:"home"})}catch{o("failure","Failed to Sign out.")}}const y={router:s,toggleMenu:t,showMessage:o,user:m,auth:u,isAnonymous:i,userDropdown:b,get dropdown(){return p},set dropdown(k){p=k},signOutUser:q,get RouterLink(){return D}};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),j="data:image/svg+xml,%3csvg%20width='154'%20height='77'%20viewBox='0%200%20154%2077'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='77'%20height='77'%20fill='%2314213D'/%3e%3crect%20x='77'%20width='77'%20height='77'%20fill='white'/%3e%3cpath%20d='M63.856%2020.056C55.0667%2019.6293%2046.6187%2020.312%2038.512%2022.104C30.4053%2023.896%2022.384%2026.328%2014.448%2029.4C12.4%2030.168%2010.8213%2030.0827%209.712%2029.144C8.688%2028.2053%208.176%2027.2667%208.176%2026.328C8.77333%2024.7067%209.84%2023.384%2011.376%2022.36C28.8693%2013.8267%2046.3627%2010.6693%2063.856%2012.888C64.7093%2013.144%2065.392%2013.784%2065.904%2014.808C66.5013%2015.7467%2066.7147%2016.5573%2066.544%2017.24C66.3733%2018.0933%2066.1173%2018.8187%2065.776%2019.416C65.4347%2019.928%2064.7947%2020.1413%2063.856%2020.056ZM45.68%2064.728C45.68%2065.6667%2045.3387%2066.52%2044.656%2067.288C44.0587%2067.9707%2043.2907%2068.3973%2042.352%2068.568C40.6453%2068.824%2039.536%2068.5253%2039.024%2067.672C38.512%2066.8187%2038.2133%2065.8373%2038.128%2064.728C38.0427%2058.7547%2037.9147%2052.824%2037.744%2046.936C37.6587%2040.9627%2037.4027%2034.9893%2036.976%2029.016C36.976%2028.6747%2036.9333%2028.2907%2036.848%2027.864C36.7627%2027.352%2036.7627%2026.8827%2036.848%2026.456C36.9333%2025.944%2037.104%2025.5173%2037.36%2025.176C37.7013%2024.8347%2038.2133%2024.5787%2038.896%2024.408C40.8587%2024.0667%2042.2667%2024.408%2043.12%2025.432C43.9733%2026.3707%2044.4%2027.3093%2044.4%2028.248C45.0827%2034.392%2045.5093%2040.4933%2045.68%2046.552C45.8507%2052.6107%2045.8507%2058.6693%2045.68%2064.728Z'%20fill='white'/%3e%3cpath%20d='M108.328%2072.28C107.475%2071.9387%20106.579%2071.2987%20105.64%2070.36C104.787%2069.4213%20104.275%2068.6107%20104.104%2067.928C103.677%2066.2213%20103.208%2064.1307%20102.696%2061.656C102.184%2059.1813%20101.672%2056.536%20101.16%2053.72C100.648%2050.904%20100.136%2048.0453%2099.624%2045.144C99.1973%2042.1573%2098.7707%2039.3413%2098.344%2036.696C97.9173%2033.9653%2097.576%2031.5333%2097.32%2029.4C97.064%2027.2667%2096.8933%2025.56%2096.808%2024.28C96.808%2022.9147%2097.2773%2022.1467%2098.216%2021.976C100.435%2021.72%20102.013%2022.5307%20102.952%2024.408C103.379%2025.944%20103.848%2027.6933%20104.36%2029.656C104.872%2031.6187%20105.384%2033.752%20105.896%2036.056C107.944%2035.288%20109.779%2034.3067%20111.4%2033.112C113.021%2031.9173%20114.344%2030.6373%20115.368%2029.272C116.477%2027.8213%20117.245%2026.3707%20117.672%2024.92C118.184%2023.384%20118.269%2021.8907%20117.928%2020.44C117.501%2018.8187%20116.307%2017.624%20114.344%2016.856C112.381%2016.088%20110.163%2015.704%20107.688%2015.704C104.275%2015.704%20101.203%2016.344%2098.472%2017.624C95.8267%2018.8187%2093.3947%2020.312%2091.176%2022.104C90.152%2022.872%2089.0427%2023.128%2087.848%2022.872C86.568%2022.5307%2085.7147%2021.72%2085.288%2020.44C85.288%2019.2453%2085.5013%2018.2213%2085.928%2017.368C86.3547%2016.5147%2086.9093%2015.7467%2087.592%2015.064C90.2373%2012.3333%2093.352%2010.4133%2096.936%209.30399C100.605%208.19466%20104.445%207.64%20108.456%207.64C111.699%207.64%20114.813%208.152%20117.8%209.17599C120.872%2010.2%20123.475%2012.0347%20125.608%2014.68C126.632%2016.3867%20127.144%2018.1787%20127.144%2020.056C127.229%2021.9333%20126.973%2023.768%20126.376%2025.56C125.779%2027.352%20124.925%2029.0587%20123.816%2030.68C122.792%2032.3013%20121.725%2033.7093%20120.616%2034.904C122.749%2034.7333%20124.925%2034.9467%20127.144%2035.544C129.363%2036.056%20131.325%2036.9947%20133.032%2038.36C134.824%2039.64%20136.275%2041.3467%20137.384%2043.48C138.493%2045.6133%20139.048%2048.1733%20139.048%2051.16C139.048%2054.5733%20138.28%2057.688%20136.744%2060.504C135.293%2063.32%20133.331%2065.7093%20130.856%2067.672C128.467%2069.6347%20125.693%2071.1707%20122.536%2072.28C119.464%2073.3893%20116.264%2073.944%20112.936%2073.944C111.485%2073.944%20110.333%2073.5173%20109.48%2072.664C109.053%2072.664%20108.669%2072.536%20108.328%2072.28ZM107.816%2045.4C108.499%2048.728%20109.139%2052.184%20109.736%2055.768C110.333%2059.352%20110.973%2062.936%20111.656%2066.52H112.168C114.045%2066.52%20116.093%2066.1787%20118.312%2065.496C120.616%2064.8133%20122.749%2063.832%20124.712%2062.552C126.675%2061.1867%20128.296%2059.5653%20129.576%2057.688C130.856%2055.7253%20131.453%2053.5493%20131.368%2051.16C130.941%2049.0267%20129.96%2047.4053%20128.424%2046.296C126.888%2045.1867%20125.011%2044.4613%20122.792%2044.12C120.659%2043.7787%20118.269%2043.7787%20115.624%2044.12C113.064%2044.376%20110.461%2044.8027%20107.816%2045.4Z'%20fill='%2314213D'/%3e%3c/svg%3e",$={class:"app-header"},Z={class:"left-side"},z={class:"logo"},V={class:"right-side"},I={class:"user dropdown",ref:"user-dropdown"},Q={class:"dropdown-menu"},G={key:0,class:"dropdown-item-text"},W={key:1,class:"dropdown-item-text"};function J(a,e,s,t,o,m){return r(),l("div",$,[n("div",Z,[n("div",{class:"menu-btn",onClick:e[0]||(e[0]=(...u)=>t.toggleMenu&&t.toggleMenu(...u))},e[1]||(e[1]=[n("i",{class:"bi bi-list"},null,-1)])),n("div",z,[d(t.RouterLink,{to:{name:"home"}},{default:c(()=>e[2]||(e[2]=[n("img",{alt:"Test Builder Logo",src:j},null,-1)])),_:1})])]),n("div",V,[e[9]||(e[9]=n("div",{class:"localization"},[n("i",{class:"bi bi-globe"}),C(" EN ")],-1)),n("div",I,[e[8]||(e[8]=n("button",{type:"button","data-bs-toggle":"dropdown"},[n("i",{class:"bi bi-person-circle"})],-1)),n("ul",Q,[t.isAnonymous(t.user)?(r(),l(_,{key:1},[e[6]||(e[6]=n("li",null,[n("span",{class:"dropdown-item-text"},"Anonymous")],-1)),e[7]||(e[7]=n("li",null,[n("hr",{class:"dropdown-divider"})],-1)),n("li",null,[d(t.RouterLink,{class:"dropdown-item di-icon",to:{name:"login"}},{default:c(()=>e[5]||(e[5]=[n("i",{class:"bi bi-box-arrow-in-right"},null,-1),n("span",null,"Sign In",-1)])),_:1})])],64)):(r(),l(_,{key:0},[n("li",null,[t.user.displayName?(r(),l("span",G,"Welcome "+h(t.user.displayName),1)):(r(),l("span",W,h(t.user.email),1))]),e[4]||(e[4]=n("li",null,[n("hr",{class:"dropdown-divider"})],-1)),n("li",null,[n("a",{class:"dropdown-item di-icon",href:"#",onClick:R(t.signOutUser,["prevent"])},e[3]||(e[3]=[n("i",{class:"bi bi-box-arrow-right"},null,-1),n("span",null,"Sign Out",-1)]))])],64))])],512)])])}const K=v(P,[["render",J],["__file","C:/Users/erram/OneDrive/Documents/test-builder-vue/src/components/AppHeader.vue"]]),X=g({__name:"AppMenu",setup(a,{expose:e}){e();const{isMenuOpen:s,closeMenu:t}=w(),o={isMenuOpen:s,closeMenu:t};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),Y={class:"menu-item"},e2={class:"menu-item"},t2={class:"menu-item"};function n2(a,e,s,t,o,m){const u=M("RouterLink");return r(),l(_,null,[n("div",{class:f(["app-menu-overlay",{open:t.isMenuOpen}]),onClick:e[0]||(e[0]=(...i)=>t.closeMenu&&t.closeMenu(...i))},null,2),n("div",{class:f(["app-menu",{open:t.isMenuOpen}])},[n("div",Y,[d(u,{exactActiveClass:"selected-item",to:{name:"home"},onClick:t.closeMenu},{default:c(()=>e[1]||(e[1]=[C(" Home ")])),_:1},8,["onClick"])]),n("div",e2,[d(u,{exactActiveClass:"selected-item",to:{name:"tests"},onClick:t.closeMenu},{default:c(()=>e[2]||(e[2]=[C(" Tests ")])),_:1},8,["onClick"])]),n("div",t2,[d(u,{exactActiveClass:"selected-item",to:{name:"settings"},onClick:t.closeMenu},{default:c(()=>e[3]||(e[3]=[C(" Settings ")])),_:1},8,["onClick"])])],2)],64)}const s2=v(X,[["render",n2],["__file","C:/Users/erram/OneDrive/Documents/test-builder-vue/src/components/AppMenu.vue"]]),a2=E("breadcrumb",()=>{function a(e,s,t){switch(e){case"home":return[{name:"Home",path:null}];case"login":return[{name:"Login",path:null}];case"register":return[{name:"Register",path:null}];case"settings":return[{name:"Settings",path:null}];case"tests":return[{name:"Home",path:{name:"home"}},{name:"Tests",path:null}];case"create-test":return[{name:"Home",path:{name:"home"}},{name:"Tests",path:{name:"tests"}},{name:"Create a test",path:null}];case"edit-test":return[{name:"Home",path:{name:"home"}},{name:"Tests",path:{name:"tests"}},{name:"Edit a test",path:null}];case"preview-test":return[{name:"Home",path:{name:"home"}},{name:"Tests",path:{name:"tests"}},{name:"Preview a test",path:null}];case"create-question":return[{name:"Home",path:{name:"home"}},{name:"Tests",path:{name:"tests"}},{name:"Edit a Test",path:{name:"edit-test",params:{test_id:s},query:{sF:0}}},{name:"Create a question",path:null}];case"preview-question":return[{name:"Home",path:{name:"home"}},{name:"Tests",path:{name:"tests"}},{name:"Edit a Test",path:{name:"edit-test",params:{test_id:s},query:{sF:0}}},{name:"Preview a question",path:null}];case"edit-question":return[{name:"Home",path:{name:"home"}},{name:"Tests",path:{name:"tests"}},{name:"Edit a Test",path:{name:"edit-test",params:{test_id:s},query:{sF:0}}},{name:"Edit a question",path:null}];case"create-choice":return[{name:"Home",path:{name:"home"}},{name:"Tests",path:{name:"tests"}},{name:"Edit a Test",path:{name:"edit-test",params:{test_id:s},query:{sF:0}}},{name:"Edit a Question",path:{name:"edit-question",params:{test_id:s,question_id:t},query:{sF:0}}},{name:"Create a choice",path:null}];case"edit-choice":return[{name:"Home",path:{name:"home"}},{name:"Tests",path:{name:"tests"}},{name:"Edit a Test",path:{name:"edit-test",params:{test_id:s},query:{sF:0}}},{name:"Edit a Question",path:{name:"edit-question",params:{test_id:s,question_id:t},query:{sF:0}}},{name:"Edit a choice",path:null}];default:return[]}}return{getList:a}}),r2=g({__name:"Breadcrumb",props:{test_id:{type:String,required:!1},question_id:{type:String,required:!1}},setup(a,{expose:e}){e();const s=B(),{getList:t}=a2(),o=s.name?t(s.name.toString(),a.test_id,a.question_id):[],m={route:s,getList:t,list:o};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}),o2={"aria-label":"breadcrumb",class:"app-breadcrumb"},i2={class:"breadcrumb"},l2=["aria-current"];function u2(a,e,s,t,o,m){const u=M("RouterLink");return r(),l("nav",o2,[n("ol",i2,[(r(!0),l(_,null,F(t.list,i=>(r(),l("li",{key:i.name,class:f(["breadcrumb-item",{active:!i.path}]),"aria-current":i.path?void 0:"page"},[i.path?(r(),U(u,{key:0,to:i.path},{default:c(()=>[C(h(i.name),1)]),_:2},1032,["to"])):(r(),l(_,{key:1},[C(h(i.name),1)],64))],10,l2))),128))])])}const m2=v(r2,[["render",u2],["__scopeId","data-v-9646fb72"],["__file","C:/Users/erram/OneDrive/Documents/test-builder-vue/src/components/items/Breadcrumb.vue"]]),d2=g({__name:"AppContainer",props:{test_id:{type:String,required:!1},question_id:{type:String,required:!1}},setup(a,{expose:e}){e();const{isMenuOpen:s}=w(),t={isMenuOpen:s,AppHeader:K,AppMenu:s2,Breadcrumb:m2};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}});function p2(a,e,s,t,o,m){return r(),l(_,null,[d(t.AppHeader),d(t.AppMenu),n("div",{class:f(["app-container",{open:t.isMenuOpen}])},[d(t.Breadcrumb,{test_id:s.test_id,question_id:s.question_id},null,8,["test_id","question_id"]),N(a.$slots,"default")],2)],64)}const C2=v(d2,[["render",p2],["__file","C:/Users/erram/OneDrive/Documents/test-builder-vue/src/components/AppContainer.vue"]]);export{C2 as A};
