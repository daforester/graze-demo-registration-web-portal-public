import{p as N,r as v,s as I,c as p,a as ue,w as B,o as ie,b as ce,d as A,u as de,e as W,t as U,f as t,m as F,h as Q,i as Y,j as X,k as q,l as G,n as f,q as k,v as i,x as Z,y as E,z as me,A as R,E as ee,B as ae,C as ve,D as H,F as x,G as fe,H as ge,I as pe,J as he,K as ye,T as Ve,S as _e}from"./index-BYkgOSXE.js";import{G as ke,R as z,a as Se}from"./userData-BTEneTeK.js";import{u as Te}from"./useAvatar-BZS3c-z0.js";import{C as be}from"./canEditOrganisation-1Bj8HWh9.js";import{C as D,G as M}from"./canDo-huczRrIG.js";import{C as we}from"./canViewOperations-B4zRQvP5.js";import{u as Ce}from"./useAdvancedMode-BZrqpvr5.js";import{m as Ie,V as j,a as Pe}from"./VToolbar-DpGOV0oM.js";import{V as Re}from"./VSpacer-COVF6zGL.js";import{V as Le}from"./VTextField-2b2A9kf_.js";import{u as O,m as Ne,V as Be,a as te,b as Ee,c as Ue,d as le,e as xe,f as De,g as Me,h as Ae,i as Oe,j as He,k as ze,l as Ge,n as $e}from"./VGrid-CBSbidIE.js";import{m as oe,u as ne,a as Fe,c as Ye}from"./scopeId-ZLL7V9SL.js";import{u as qe,V as J,a as T,b as je}from"./VList-G13-LXCF.js";import{V as $,a as Je}from"./forwardRefs-BOiD6W-4.js";import{V as Ke}from"./VDivider-CmYuDGpK.js";import{V as We,a as se}from"./VNavigationDrawer-C6pS3mmm.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as Qe}from"./index-CndaLrdX.js";import{V as K}from"./VContainer-gFImxAXb.js";import{V as Xe}from"./VApp-B5QdDeSL.js";import"./useStoreAPI-arGbW3zf.js";import"./createSimpleFunctional-CHPZap2d.js";import"./form-OTuRYFZJ.js";const Ze=(e,u=void 0)=>e===void 0?!1:u===void 0?D(e,M.GROUP_TYPE_CONVENTION).ManageUsers:D(e,M.GROUP_TYPE_CONVENTION,u.ConventionUUID,u).ManageUsers,ea=(e,u=void 0)=>{let l;return e===void 0?!1:(u===void 0?l=D(e,M.GROUP_TYPE_CONVENTION):l=D(e,M.GROUP_TYPE_CONVENTION,u.ConventionUUID,u),l.EditConvention||l.ManageViews||l.ViewRegistration||l.EditRegistration)},aa=N({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ta(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:l}=u;let c=0,o=0;const a=v(null),r=I(0),d=I(0),m=I(0),h=I(!1),s=I(!1),V=p(()=>Number(e.scrollThreshold)),w=p(()=>ue((V.value-r.value)/V.value||0)),y=()=>{const g=a.value;if(!g||l&&!l.value)return;c=r.value,r.value="window"in g?g.pageYOffset:g.scrollTop;const S=g instanceof Window?document.documentElement.scrollHeight:g.scrollHeight;if(o!==S){o=S;return}s.value=r.value<c,m.value=Math.abs(r.value-V.value)};return B(s,()=>{d.value=d.value||r.value}),B(h,()=>{d.value=0}),ie(()=>{B(()=>e.scrollTarget,g=>{var C;const S=g?document.querySelector(g):window;S&&S!==a.value&&((C=a.value)==null||C.removeEventListener("scroll",y),a.value=S,a.value.addEventListener("scroll",y,{passive:!0}))},{immediate:!0})}),ce(()=>{var g;(g=a.value)==null||g.removeEventListener("scroll",y)}),l&&B(l,y,{immediate:!0}),{scrollThreshold:V,currentScroll:r,currentThreshold:m,isScrollActive:h,scrollRatio:w,isScrollingUp:s,savedScroll:d}}const la=N({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ie(),...oe(),...aa(),height:{type:[Number,String],default:64}},"VAppBar"),oa=A()({name:"VAppBar",props:la(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:l}=u;const c=v(),o=de(e,"modelValue"),a=p(()=>{var _;const n=new Set(((_=e.scrollBehavior)==null?void 0:_.split(" "))??[]);return{hide:n.has("hide"),fullyHide:n.has("fully-hide"),inverted:n.has("inverted"),collapse:n.has("collapse"),elevate:n.has("elevate"),fadeImage:n.has("fade-image")}}),r=p(()=>{const n=a.value;return n.hide||n.fullyHide||n.inverted||n.collapse||n.elevate||n.fadeImage||!o.value}),{currentScroll:d,scrollThreshold:m,isScrollingUp:h,scrollRatio:s}=ta(e,{canScroll:r}),V=p(()=>a.value.hide||a.value.fullyHide),w=p(()=>e.collapse||a.value.collapse&&(a.value.inverted?s.value>0:s.value===0)),y=p(()=>e.flat||a.value.fullyHide&&!o.value||a.value.elevate&&(a.value.inverted?d.value>0:d.value===0)),g=p(()=>a.value.fadeImage?a.value.inverted?1-s.value:s.value:void 0),S=p(()=>{var L,b;if(a.value.hide&&a.value.inverted)return 0;const n=((L=c.value)==null?void 0:L.contentHeight)??0,_=((b=c.value)==null?void 0:b.extensionHeight)??0;return V.value?d.value<m.value||a.value.fullyHide?n+_:n:n+_});W(p(()=>!!e.scrollBehavior),()=>{Q(()=>{V.value?a.value.inverted?o.value=d.value>m.value:o.value=h.value||d.value<m.value:o.value=!0})});const{ssrBootStyles:C}=qe(),{layoutItemStyles:P}=ne({id:e.name,order:p(()=>parseInt(e.order,10)),position:U(e,"location"),layoutSize:S,elementSize:I(void 0),active:o,absolute:U(e,"absolute")});return O(()=>{const n=j.filterProps(e);return t(j,F({ref:c,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...P.value,"--v-toolbar-image-opacity":g.value,height:void 0,...C.value},e.style]},n,{collapse:w.value,flat:y.value}),l)}),{}}}),na=N({...Ne({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),sa=A()({name:"VAppBarNavIcon",props:na(),setup(e,u){let{slots:l}=u;return O(()=>t(Be,F(e,{class:["v-app-bar-nav-icon"]}),l)),{}}}),ra=N({...te(),...Ee(),...Fe()},"VLayout"),ua=A()({name:"VLayout",props:ra(),setup(e,u){let{slots:l}=u;const{layoutClasses:c,layoutStyles:o,getLayoutItem:a,items:r,layoutRef:d}=Ye(e),{dimensionStyles:m}=Ue(e);return O(()=>{var h;return t("div",{ref:d,class:[c.value,e.class],style:[m.value,o.value,e.style]},[(h=l.default)==null?void 0:h.call(l)])}),{getLayoutItem:a,items:r}}}),ia=Y({__name:"DashboardLayout",props:{user:{}},setup(e){const u=Te(),l=X(),c=v(!1),o=v("Default Title"),a=v(""),r=v(q(e.user)),d=v(u(r.value.UserUUID)),m=ee.getInstance();Ce(),m.on("user.profile.saved",P=>{r.value=q(P)});const h=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",s=v(localStorage.getItem("theme")||h());l.global.name.value=s.value;const V=()=>{s.value=="light"?s.value="dark":s.value="light",l.global.name.value=s.value,localStorage.setItem("theme",s.value)},w=async P=>{o.value=P;const n=await ae();document.title=`${n!=null&&n.Name?`${n.Name} - `:""} ${o.value}`},y=v(ea(e.user)),g=v(we(e.user)),S=v(be(e.user)),C=v(Ze(e.user));return(P,n)=>{const _=G("RouterLink"),L=G("RouterView");return f(),k(ua,{class:"h-100"},{default:i(()=>[t(oa,{color:"blue-darken-3"},{default:i(()=>[t(Pe,null,{default:i(()=>[Z(E(o.value),1)]),_:1}),t(Re),t(Le,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=b=>a.value=b),"prepend-inner-icon":"mdi:mdi-magnify",label:"Search",variant:"underlined","hide-details":"",clearable:!0,class:"d-none"},null,8,["modelValue"]),t(sa,{variant:"text",onClick:n[1]||(n[1]=me(b=>c.value=!c.value,["stop"]))})]),_:1}),t(We,{modelValue:c.value,"onUpdate:modelValue":n[2]||(n[2]=b=>c.value=b),location:"right",temporary:!0},{default:i(()=>[t(J,null,{default:i(()=>[t(_,{to:{name:"Profile"}},{default:i(()=>[t(T,{title:r.value.DisplayName},{prepend:i(()=>[d.value?(f(),k($,{key:0,src:d.value,class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])):(f(),k(le,{key:1,icon:"mdi:mdi-account-circle",size:"x-large"}))]),_:1},8,["title"])]),_:1})]),_:1}),t(Ke),t(L,{name:"navigation"},{default:i(()=>[t(J,null,{default:i(()=>[t(_,{to:"/"},{default:i(()=>[t(T,{"prepend-icon":"mdi:mdi-view-dashboard-outline",title:"Home",value:"home"})]),_:1}),y.value||S.value||C.value?(f(),k(je,{key:0,value:"Admin"},{activator:i(({props:b})=>[t(T,F(b,{"prepend-icon":"mdi:mdi-security",title:"Admin"}),null,16)]),default:i(()=>[y.value||g.value?(f(),k(_,{key:0,to:"/admin/conventions"},{default:i(()=>[t(T,{"prepend-icon":"mdi:mdi-domain",title:"Conventions",value:"Conventions"})]),_:1})):R("",!0),S.value||y.value?(f(),k(_,{key:1,to:"/admin/email/templates"},{default:i(()=>[t(T,{"prepend-icon":"mdi:mdi-email-edit-outline",title:"Email Templates",value:"Email Templates"})]),_:1})):R("",!0),S.value?(f(),k(_,{key:2,to:"/admin/organisations"},{default:i(()=>[t(T,{"prepend-icon":"mdi:mdi-store",title:"Organisations",value:"Organisations"})]),_:1})):R("",!0),C.value?(f(),k(_,{key:3,to:"/admin/groups"},{default:i(()=>[t(T,{"prepend-icon":"mdi:mdi-key-chain-variant",title:"Permissions",value:"Permissions"})]),_:1})):R("",!0)]),_:1})):R("",!0),t(_,{to:{name:"Profile"}},{default:i(()=>[t(T,{"prepend-icon":"mdi:mdi-account-circle",title:"Manage Account"})]),_:1}),t(T,{"prepend-icon":"mdi:mdi-theme-light-dark",onClick:V,title:`${s.value=="light"?"Dark":"Light"} Mode`},null,8,["title"]),t(_,{to:"/logout"},{default:i(()=>[t(T,{"prepend-icon":"mdi:mdi-logout",title:"Logout",value:"Logout"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(se,null,{default:i(()=>[t(L,{onPageTitle:w,"logged-in":!0})]),_:1})]),_:1})}}}),ca=re(ia,[["__scopeId","data-v-142cf0ca"]]),da="/assets/graze-logo-CM-MvGxq.svg",ma={key:2},va={key:3},fa=Y({__name:"LoginLayout",async setup(e){let u,l;const c=X(),o=v();o.value=([u,l]=ve(()=>ae()),u=await u,l(),u),document.title=`${o.value?`${o.value.Name} - `:"Convention"} Registration System`;const a=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",r=v(localStorage.getItem("theme")||a());return c.global.name.value=r.value,(d,m)=>{const h=G("RouterView");return f(),H(ge,null,[t(K,{class:"logo-container text-center"},{default:i(()=>{var s;return[o.value&&o.value.Logo?(f(),k($,{key:0,src:o.value.Logo,class:"graze-logo ma-auto"},null,8,["src"])):(f(),k($,{key:1,src:x(da),class:"graze-logo ma-auto"},null,8,["src"])),o.value&&o.value.RegTitle?(f(),H("h1",ma,E(o.value.RegTitle),1)):(f(),H("h1",va,E(((s=o.value)==null?void 0:s.Name)||"Graze")+" Registration System",1))]}),_:1}),t(K,{class:"login-container text-center mb-0 rounded rounded-lg mb-md-10"},{default:i(()=>[t(Je,null,{default:i(()=>[t(le,{class:"ma-2 pa-5 bg-indigo rounded-circle",color:"white",icon:"mdi:mdi-lock-outline"})]),_:1}),fe("h2",null,E(x(Qe).headingSignIn),1),t(h,{"logged-in":!1})]),_:1})],64)}}}),ga=re(fa,[["__scopeId","data-v-9ce1b973"]]),pa=N({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...xe(),...te(),...De(),...oe(),...Me(),...Ae({tag:"footer"}),...pe()},"VFooter"),ha=A()({name:"VFooter",props:pa(),setup(e,u){let{slots:l}=u;const c=v(),{themeClasses:o}=he(e),{backgroundColorClasses:a,backgroundColorStyles:r}=Oe(U(e,"color")),{borderClasses:d}=He(e),{elevationClasses:m}=ze(e),{roundedClasses:h}=Ge(e),s=I(32),{resizeRef:V}=$e(y=>{y.length&&(s.value=y[0].target.clientHeight)}),w=p(()=>e.height==="auto"?s.value:parseInt(e.height,10));return W(()=>e.app,()=>{const y=ne({id:e.name,order:p(()=>parseInt(e.order,10)),position:p(()=>"bottom"),layoutSize:w,elementSize:p(()=>e.height==="auto"?void 0:w.value),active:p(()=>e.app),absolute:U(e,"absolute")});Q(()=>{c.value=y.layoutItemStyles.value})}),O(()=>t(e.tag,{ref:V,class:["v-footer",o.value,a.value,d.value,m.value,h.value,e.class],style:[r.value,e.app?c.value:{height:ye(e.height)},e.style]},l)),{}}}),za=Y({__name:"Default",emits:["pageTitle"],setup(e,{emit:u}){let l=ke();const c=Ve.getInstance(),o=c.getTokenByService("GrazeAPI"),a=v(!1),r=v(!1),d=u,m=ee.getInstance();m.on("login",s=>{l=s,a.value=!0}),m.on("logout",()=>{l=void 0,a.value=!1}),m.on("tokenManager.tokenUpdated",()=>{a.value=!0,r.value=!0}),m.on("tokenManager.sessionExpired",()=>{a.value=!1,r.value=!1,z(),location.reload()}),o?l?o.AccessExpires<=Date.now()&&o.RefreshExpires>Date.now()?c.refreshToken(o):o.AccessExpires>Date.now()?(z(),a.value=!1,r.value=!0):(a.value=!0,r.value=!0):Se().then(s=>{l=s,a.value=!0,r.value=!0}).catch(()=>{a.value=!1,r.value=!0}):(z(),a.value=!1,r.value=!0);const h=s=>{d("pageTitle",s)};return(s,V)=>(f(),k(_e,null,{default:i(()=>[t(Xe,{class:"bg-image"},{default:i(()=>[r.value?(f(),k(se,{key:0},{default:i(()=>[a.value&&x(l)?(f(),k(ca,{key:0,user:x(l),onPageTitle:h},null,8,["user"])):(f(),k(ga,{key:1}))]),_:1})):R("",!0),t(ha,null,{default:i(()=>V[0]||(V[0]=[Z(" Powered by Graze ")])),_:1})]),_:1})]),_:1}))}});export{za as default};
