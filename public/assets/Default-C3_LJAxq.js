import{p as N,r as v,s as I,c as g,a as ue,w as B,o as ie,b as ce,d as A,u as de,e as W,t as E,f as t,m as $,h as Q,i as F,j as X,k as Y,l as H,n as y,q as _,v as i,x as Z,y as z,z as me,A as R,E as ee,B as ae,C as ve,D as fe,F as U,G as j,H as ge,I as pe,J as he,K as ye,T as Ve,S as ke}from"./index-BRKc9zXj.js";import{G as _e,R as O,a as be}from"./userData-iE6URVf6.js";import{u as Se}from"./useAvatar-Cfc6OKdL.js";import{C as Te}from"./canEditOrganisation-BhgxjahE.js";import{C as x,G as D}from"./canDo-Pc3xwfSi.js";import{C as we}from"./canViewOperations-D-M2k786.js";import{u as Ce}from"./useAdvancedMode-cFEWrL-n.js";import{m as Ie,V as q,a as Pe}from"./VToolbar-DWh0nsJq.js";import{V as Re}from"./VSpacer-Bl60txMS.js";import{V as Le}from"./VTextField-JToEiHa0.js";import{u as M,m as Ne,V as Be,a as te,b as Ee,c as Ue,d as le,e as xe,f as De,g as Ae,h as Me,i as Oe,j as He,k as ze,l as Ge,n as $e}from"./VGrid-Cv1zLrEw.js";import{m as oe,u as ne,a as Fe,c as Ye}from"./scopeId-BtbYt4a0.js";import{u as je,V as J,a as S,b as qe}from"./VList-S8qLpSz_.js";import{V as G,a as Je}from"./forwardRefs-alsDaBjW.js";import{V as Ke}from"./VDivider-D6R6d41K.js";import{V as We,a as se}from"./VNavigationDrawer-f_nlNhtR.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as Qe}from"./index-fwfMqYug.js";import{V as K}from"./VContainer-BDhY8liJ.js";import{V as Xe}from"./VApp-DYvR2fnI.js";import"./useStoreAPI-Chw5en3F.js";import"./createSimpleFunctional-D11AQa6T.js";import"./form-BJF21hIe.js";const Ze=(e,u=void 0)=>e===void 0?!1:u===void 0?x(e,D.GROUP_TYPE_CONVENTION).ManageUsers:x(e,D.GROUP_TYPE_CONVENTION,u.ConventionUUID,u).ManageUsers,ea=(e,u=void 0)=>{let l;return e===void 0?!1:(u===void 0?l=x(e,D.GROUP_TYPE_CONVENTION):l=x(e,D.GROUP_TYPE_CONVENTION,u.ConventionUUID,u),l.EditConvention||l.ManageViews||l.ViewRegistration||l.EditRegistration)},aa=N({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ta(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:l}=u;let c=0,o=0;const a=v(null),r=I(0),d=I(0),m=I(0),p=I(!1),s=I(!1),V=g(()=>Number(e.scrollThreshold)),w=g(()=>ue((V.value-r.value)/V.value||0)),h=()=>{const f=a.value;if(!f||l&&!l.value)return;c=r.value,r.value="window"in f?f.pageYOffset:f.scrollTop;const b=f instanceof Window?document.documentElement.scrollHeight:f.scrollHeight;if(o!==b){o=b;return}s.value=r.value<c,m.value=Math.abs(r.value-V.value)};return B(s,()=>{d.value=d.value||r.value}),B(p,()=>{d.value=0}),ie(()=>{B(()=>e.scrollTarget,f=>{var C;const b=f?document.querySelector(f):window;b&&b!==a.value&&((C=a.value)==null||C.removeEventListener("scroll",h),a.value=b,a.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),ce(()=>{var f;(f=a.value)==null||f.removeEventListener("scroll",h)}),l&&B(l,h,{immediate:!0}),{scrollThreshold:V,currentScroll:r,currentThreshold:m,isScrollActive:p,scrollRatio:w,isScrollingUp:s,savedScroll:d}}const la=N({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ie(),...oe(),...aa(),height:{type:[Number,String],default:64}},"VAppBar"),oa=A()({name:"VAppBar",props:la(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:l}=u;const c=v(),o=de(e,"modelValue"),a=g(()=>{var k;const n=new Set(((k=e.scrollBehavior)==null?void 0:k.split(" "))??[]);return{hide:n.has("hide"),fullyHide:n.has("fully-hide"),inverted:n.has("inverted"),collapse:n.has("collapse"),elevate:n.has("elevate"),fadeImage:n.has("fade-image")}}),r=g(()=>{const n=a.value;return n.hide||n.fullyHide||n.inverted||n.collapse||n.elevate||n.fadeImage||!o.value}),{currentScroll:d,scrollThreshold:m,isScrollingUp:p,scrollRatio:s}=ta(e,{canScroll:r}),V=g(()=>a.value.hide||a.value.fullyHide),w=g(()=>e.collapse||a.value.collapse&&(a.value.inverted?s.value>0:s.value===0)),h=g(()=>e.flat||a.value.fullyHide&&!o.value||a.value.elevate&&(a.value.inverted?d.value>0:d.value===0)),f=g(()=>a.value.fadeImage?a.value.inverted?1-s.value:s.value:void 0),b=g(()=>{var L,T;if(a.value.hide&&a.value.inverted)return 0;const n=((L=c.value)==null?void 0:L.contentHeight)??0,k=((T=c.value)==null?void 0:T.extensionHeight)??0;return V.value?d.value<m.value||a.value.fullyHide?n+k:n:n+k});W(g(()=>!!e.scrollBehavior),()=>{Q(()=>{V.value?a.value.inverted?o.value=d.value>m.value:o.value=p.value||d.value<m.value:o.value=!0})});const{ssrBootStyles:C}=je(),{layoutItemStyles:P}=ne({id:e.name,order:g(()=>parseInt(e.order,10)),position:E(e,"location"),layoutSize:b,elementSize:I(void 0),active:o,absolute:E(e,"absolute")});return M(()=>{const n=q.filterProps(e);return t(q,$({ref:c,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...P.value,"--v-toolbar-image-opacity":f.value,height:void 0,...C.value},e.style]},n,{collapse:w.value,flat:h.value}),l)}),{}}}),na=N({...Ne({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),sa=A()({name:"VAppBarNavIcon",props:na(),setup(e,u){let{slots:l}=u;return M(()=>t(Be,$(e,{class:["v-app-bar-nav-icon"]}),l)),{}}}),ra=N({...te(),...Ee(),...Fe()},"VLayout"),ua=A()({name:"VLayout",props:ra(),setup(e,u){let{slots:l}=u;const{layoutClasses:c,layoutStyles:o,getLayoutItem:a,items:r,layoutRef:d}=Ye(e),{dimensionStyles:m}=Ue(e);return M(()=>{var p;return t("div",{ref:d,class:[c.value,e.class],style:[m.value,o.value,e.style]},[(p=l.default)==null?void 0:p.call(l)])}),{getLayoutItem:a,items:r}}}),ia=F({__name:"DashboardLayout",props:{user:{}},setup(e){const u=Se(),l=X(),c=v(!1),o=v("Default Title"),a=v(""),r=v(Y(e.user)),d=v(u(r.value.UserUUID)),m=ee.getInstance();Ce(),m.on("user.profile.saved",P=>{r.value=Y(P)});const p=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",s=v(localStorage.getItem("theme")||p());l.global.name.value=s.value;const V=()=>{s.value=="light"?s.value="dark":s.value="light",l.global.name.value=s.value,localStorage.setItem("theme",s.value)},w=async P=>{o.value=P;const n=await ae();document.title=`${n!=null&&n.Name?`${n.Name} - `:""} ${o.value}`},h=v(ea(e.user)),f=v(we(e.user)),b=v(Te(e.user)),C=v(Ze(e.user));return(P,n)=>{const k=H("RouterLink"),L=H("RouterView");return y(),_(ua,{class:"h-100"},{default:i(()=>[t(oa,{color:"blue-darken-3"},{default:i(()=>[t(Pe,null,{default:i(()=>[Z(z(o.value),1)]),_:1}),t(Re),t(Le,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=T=>a.value=T),"prepend-inner-icon":"mdi:mdi-magnify",label:"Search",variant:"underlined","hide-details":"",clearable:!0,class:"d-none"},null,8,["modelValue"]),t(sa,{variant:"text",onClick:n[1]||(n[1]=me(T=>c.value=!c.value,["stop"]))})]),_:1}),t(We,{modelValue:c.value,"onUpdate:modelValue":n[2]||(n[2]=T=>c.value=T),location:"right",temporary:!0},{default:i(()=>[t(J,null,{default:i(()=>[t(k,{to:{name:"Profile"}},{default:i(()=>[t(S,{title:r.value.DisplayName},{prepend:i(()=>[d.value?(y(),_(G,{key:0,src:d.value,class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])):(y(),_(le,{key:1,icon:"mdi:mdi-account-circle",size:"x-large"}))]),_:1},8,["title"])]),_:1})]),_:1}),t(Ke),t(L,{name:"navigation"},{default:i(()=>[t(J,null,{default:i(()=>[t(k,{to:"/"},{default:i(()=>[t(S,{"prepend-icon":"mdi:mdi-view-dashboard-outline",title:"Home",value:"home"})]),_:1}),h.value||b.value||C.value?(y(),_(qe,{key:0,value:"Admin"},{activator:i(({props:T})=>[t(S,$(T,{"prepend-icon":"mdi:mdi-security",title:"Admin"}),null,16)]),default:i(()=>[h.value||f.value?(y(),_(k,{key:0,to:"/admin/conventions"},{default:i(()=>[t(S,{"prepend-icon":"mdi:mdi-domain",title:"Conventions",value:"Conventions"})]),_:1})):R("",!0),b.value||h.value?(y(),_(k,{key:1,to:"/admin/email/templates"},{default:i(()=>[t(S,{"prepend-icon":"mdi:mdi-email-edit-outline",title:"Email Templates",value:"Email Templates"})]),_:1})):R("",!0),b.value?(y(),_(k,{key:2,to:"/admin/organisations"},{default:i(()=>[t(S,{"prepend-icon":"mdi:mdi-store",title:"Organisations",value:"Organisations"})]),_:1})):R("",!0),C.value?(y(),_(k,{key:3,to:"/admin/groups"},{default:i(()=>[t(S,{"prepend-icon":"mdi:mdi-key-chain-variant",title:"Permissions",value:"Permissions"})]),_:1})):R("",!0)]),_:1})):R("",!0),t(k,{to:{name:"Profile"}},{default:i(()=>[t(S,{"prepend-icon":"mdi:mdi-account-circle",title:"Manage Account"})]),_:1}),t(S,{"prepend-icon":"mdi:mdi-theme-light-dark",onClick:V,title:`${s.value=="light"?"Dark":"Light"} Mode`},null,8,["title"]),t(k,{to:"/logout"},{default:i(()=>[t(S,{"prepend-icon":"mdi:mdi-logout",title:"Logout",value:"Logout"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(se,null,{default:i(()=>[t(L,{onPageTitle:w,"logged-in":!0})]),_:1})]),_:1})}}}),ca=re(ia,[["__scopeId","data-v-46a45b2e"]]),da="/assets/graze-logo-R84bxePu.svg",ma=F({__name:"LoginLayout",async setup(e){let u,l;const c=X(),o=v();o.value=([u,l]=ve(()=>ae()),u=await u,l(),u),document.title=`${o.value?`${o.value.Name} - `:"Convention"} Registration System`;const a=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",r=v(localStorage.getItem("theme")||a());return c.global.name.value=r.value,(d,m)=>{const p=H("RouterView");return y(),fe(ge,null,[t(K,{class:"logo-container text-center"},{default:i(()=>{var s;return[o.value&&o.value.Logo?(y(),_(G,{key:0,src:o.value.Logo,class:"graze-logo ma-auto"},null,8,["src"])):(y(),_(G,{key:1,src:U(da),class:"graze-logo ma-auto"},null,8,["src"])),j("h1",null,z(((s=o.value)==null?void 0:s.Name)||"Graze")+" Registration System",1)]}),_:1}),t(K,{class:"login-container text-center mb-0 rounded rounded-lg mb-md-10"},{default:i(()=>[t(Je,null,{default:i(()=>[t(le,{class:"ma-2 pa-5 bg-indigo rounded-circle",color:"white",icon:"mdi:mdi-lock-outline"})]),_:1}),j("h2",null,z(U(Qe).headingSignIn),1),t(p,{"logged-in":!1})]),_:1})],64)}}}),va=re(ma,[["__scopeId","data-v-7a044b9b"]]),fa=N({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...xe(),...te(),...De(),...oe(),...Ae(),...Me({tag:"footer"}),...pe()},"VFooter"),ga=A()({name:"VFooter",props:fa(),setup(e,u){let{slots:l}=u;const c=v(),{themeClasses:o}=he(e),{backgroundColorClasses:a,backgroundColorStyles:r}=Oe(E(e,"color")),{borderClasses:d}=He(e),{elevationClasses:m}=ze(e),{roundedClasses:p}=Ge(e),s=I(32),{resizeRef:V}=$e(h=>{h.length&&(s.value=h[0].target.clientHeight)}),w=g(()=>e.height==="auto"?s.value:parseInt(e.height,10));return W(()=>e.app,()=>{const h=ne({id:e.name,order:g(()=>parseInt(e.order,10)),position:g(()=>"bottom"),layoutSize:w,elementSize:g(()=>e.height==="auto"?void 0:w.value),active:g(()=>e.app),absolute:E(e,"absolute")});Q(()=>{c.value=h.layoutItemStyles.value})}),M(()=>t(e.tag,{ref:V,class:["v-footer",o.value,a.value,d.value,m.value,p.value,e.class],style:[r.value,e.app?c.value:{height:ye(e.height)},e.style]},l)),{}}}),Oa=F({__name:"Default",emits:["pageTitle"],setup(e,{emit:u}){let l=_e();const c=Ve.getInstance(),o=c.getTokenByService("GrazeAPI"),a=v(!1),r=v(!1),d=u,m=ee.getInstance();m.on("login",s=>{l=s,a.value=!0}),m.on("logout",()=>{l=void 0,a.value=!1}),m.on("tokenManager.tokenUpdated",()=>{a.value=!0,r.value=!0}),m.on("tokenManager.sessionExpired",()=>{a.value=!1,r.value=!1,O(),location.reload()}),o?l?o.AccessExpires<=Date.now()&&o.RefreshExpires>Date.now()?c.refreshToken(o):o.AccessExpires>Date.now()?(O(),a.value=!1,r.value=!0):(a.value=!0,r.value=!0):be().then(s=>{l=s,a.value=!0,r.value=!0}).catch(()=>{a.value=!1,r.value=!0}):(O(),a.value=!1,r.value=!0);const p=s=>{d("pageTitle",s)};return(s,V)=>(y(),_(ke,null,{default:i(()=>[t(Xe,{class:"bg-image"},{default:i(()=>[r.value?(y(),_(se,{key:0},{default:i(()=>[a.value&&U(l)?(y(),_(ca,{key:0,user:U(l),onPageTitle:p},null,8,["user"])):(y(),_(va,{key:1}))]),_:1})):R("",!0),t(ga,null,{default:i(()=>V[0]||(V[0]=[Z(" Powered by Graze ")])),_:1})]),_:1})]),_:1}))}});export{Oa as default};
