import{d as He,p as Le,a9 as We,t as B,c as U,s as fe,aa as Me,h as t,m as ee,ad as Qe,J as te,i as z,r as R,C as Oe,N as oe,Q as j,$ as qe,D as x,l as H,n as f,A as se,q as o,v as b,G as p,x as k,H as I,P as F,F as ye}from"./index-CSX4pdQJ.js";import{u as ne}from"./useConventionSlug-lbJrGyUU.js";import{V as le}from"./VContainer-DUcvn0Ea.js";import{V as q,a as P}from"./VRow-0D20f_Ou.js";import{u as ze,m as je,a as Je,V as Ve}from"./VSelect-B0HHRYpq.js";import{V as Ke}from"./VSpacer-3jskw9Mo.js";import{u as Xe,V as O,o as Ye}from"./VGrid-XaYJb-KU.js";import{e as re}from"./VCard-Dau56Uxy.js";import{c as Ze,b as et,e as tt,u as at,k as lt,p as ot,s as st,g as nt,h as rt,i as it,j as ut,m as ge,n as he,t as mt,q as dt,v as ct,V as Te}from"./VDataTable-BXUlm1Sn.js";import{u as pt,m as vt}from"./filter-DhLBiRjI.js";import{V as ke}from"./VTable-DaZ15b1H.js";import{_ as xe,C as ft,a as yt}from"./EmailControl.vue_vue_type_script_setup_true_lang-Ba3N7b1Q.js";import{V as gt}from"./forwardRefs-D9r7kQk8.js";import{V as Re}from"./VList-BkM8L_e-.js";import{V as ht}from"./VSheet-QErR6OLv.js";import{a as kt,b as ae,c as Vt,V as Tt}from"./VTabs-CwalYQQH.js";import{V as xt}from"./VToolbar-CztC9uAu.js";import"./VTextField-C2dD7YAF.js";import"./form-D3M6Vd75.js";import"./VOverlay-DkZ_JEIw.js";import"./scopeId-DMURPcLn.js";import"./VChip-0yAMh2xm.js";import"./createSimpleFunctional-CfHn2y9y.js";import"./VDivider-B6M-Ttx_.js";import"./EmailEditor.vue_vue_type_script_setup_true_lang-CX_dOPs9.js";import"./permission-Ba-8wP-4.js";import"./useConventionForms-BloYjXBn.js";import"./sorted-PYsDa1V2.js";import"./ModelDialog.vue_vue_type_script_setup_true_lang-CPbNGWCb.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-Cy4_syFk.js";import"./VDialog-BY8PcVk-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VAlert-BkCCNqvN.js";const Rt=Le({...Qe(dt(),["hideDefaultFooter"]),...mt(),...je(),...vt()},"VDataTableVirtual"),bt=He()({name:"VDataTableVirtual",props:Rt(),emits:{"update:modelValue":s=>!0,"update:sortBy":s=>!0,"update:options":s=>!0,"update:groupBy":s=>!0,"update:expanded":s=>!0},setup(s,N){let{attrs:S,slots:l}=N;const{groupBy:C}=Ze(s),{sortBy:y,multiSort:g,mustSort:m}=et(s),{disableSort:D}=We(s),{columns:V,headers:A,filterFunctions:w,sortFunctions:h,sortRawFunctions:d}=tt(s,{groupBy:C,showSelect:B(()=>s.showSelect),showExpand:B(()=>s.showExpand)}),{items:r}=at(s,V),i=B(()=>s.search),{filteredItems:v}=pt(s,r,i,{transform:_=>_.columns,customKeyFilter:w}),{toggleSort:L}=lt({sortBy:y,multiSort:g,mustSort:m}),{sortByWithGroups:J,opened:K,extractRows:X,isGroupOpen:n,toggleGroup:e}=ot({groupBy:C,sortBy:y,disableSort:D}),{sortedItems:a}=st(s,v,J,{transform:_=>({..._.raw,..._.columns}),sortFunctions:h,sortRawFunctions:d}),{flatItems:u}=nt(a,C,K),c=U(()=>X(u.value)),{isSelected:T,select:W,selectAll:M,toggleSelect:Q,someSelected:Y,allSelected:be}=rt(s,{allItems:c,currentPage:c}),{isExpanded:De,toggleExpand:we}=it(s),{containerRef:Ie,markerRef:Ue,paddingTop:Ce,paddingBottom:_e,computedItems:Ne,handleItemResize:Se,handleScroll:Ae,handleScrollend:$e,calculateVisibleItems:Ee,scrollToIndex:Be}=ze(s,u),Fe=U(()=>Ne.value.map(_=>_.raw));ut({sortBy:y,page:fe(1),itemsPerPage:fe(-1),groupBy:C,search:i}),Me({VDataTableRows:{hideNoData:B(()=>s.hideNoData),noDataText:B(()=>s.noDataText),loading:B(()=>s.loading),loadingText:B(()=>s.loadingText)}});const $=U(()=>({sortBy:y.value,toggleSort:L,someSelected:Y.value,allSelected:be.value,isSelected:T,select:W,selectAll:M,toggleSelect:Q,isExpanded:De,toggleExpand:we,isGroupOpen:n,toggleGroup:e,items:c.value.map(_=>_.raw),internalItems:c.value,groupedItems:u.value,columns:V.value,headers:A.value}));return Xe(()=>{const _=ge.filterProps(s),Pe=he.filterProps(s),Ge=ke.filterProps(s);return t(ke,ee({class:["v-data-table",{"v-data-table--loading":s.loading},s.class],style:s.style},Ge,{fixedHeader:s.fixedHeader||s.sticky}),{top:()=>{var E;return(E=l.top)==null?void 0:E.call(l,$.value)},wrapper:()=>{var E,ie,ue,me,de,ce;return t("div",{ref:Ie,onScrollPassive:Ae,onScrollend:$e,class:"v-table__wrapper",style:{height:te(s.height)}},[t("table",null,[(E=l.colgroup)==null?void 0:E.call(l,$.value),!s.hideDefaultHeader&&t("thead",{key:"thead"},[t(ge,_,l)]),(ie=l.thead)==null?void 0:ie.call(l,$.value),!s.hideDefaultBody&&t("tbody",{key:"tbody"},[t("tr",{ref:Ue,style:{height:te(Ce.value),border:0}},[t("td",{colspan:V.value.length,style:{height:0,border:0}},null)]),(ue=l["body.prepend"])==null?void 0:ue.call(l,$.value),t(he,ee(S,Pe,{items:Fe.value}),{...l,item:G=>t(Je,{key:G.internalItem.index,renderless:!0,"onUpdate:height":Z=>Se(G.internalItem.index,Z)},{default:Z=>{var ve;let{itemRef:pe}=Z;return((ve=l.item)==null?void 0:ve.call(l,{...G,itemRef:pe}))??t(ct,ee(G.props,{ref:pe,key:G.internalItem.index,index:G.internalItem.index}),l)}})}),(me=l["body.append"])==null?void 0:me.call(l,$.value),t("tr",{style:{height:te(_e.value),border:0}},[t("td",{colspan:V.value.length,style:{height:0,border:0}},null)])]),(de=l.tbody)==null?void 0:de.call(l,$.value),(ce=l.tfoot)==null?void 0:ce.call(l,$.value)])])},bottom:()=>{var E;return(E=l.bottom)==null?void 0:E.call(l,$.value)}})}),{calculateVisibleItems:Ee,scrollToIndex:Be}}}),Dt={class:"my-4"},wt={class:"d-flex ml-4"},It={class:"mx-4"},Ut={class:"my-4"},Ct={class:"d-flex ml-4"},_t={class:"mx-4"},Nt={class:"my-4"},St={class:"d-flex ml-4"},At={class:"mx-4"},$t=z({__name:"HotelReport",emits:["pageTitle"],async setup(s,{emit:N}){let S,l;N("pageTitle","Reports");const y=oe(),g=j(),m=R([]),D=R(),V=R([]);try{const n=([S,l]=Oe(()=>ne()),S=await S,l(),S);n&&(y.getHotelReport(n.ConventionUUID).then(e=>{m.value=e}),y.getConventionVenues(n.ConventionUUID).then(e=>{V.value=e}))}catch{g.push("/")}const A=U(()=>[{title:"First Name",align:"start",key:"FirstName"},{title:"Last Name",align:"start",key:"LastName"},{title:"Address",align:"start",key:"Address"},{title:"Room Partners",align:"start",key:"Guests"},{title:"Venue",align:"start",key:"Venue"},{title:"Room Type",align:"start",key:"RoomType"},{title:"Arrival",align:"start",key:"ArrivalDay"},{title:"Departure",align:"start",key:"DepartureDay"}]),w=U(()=>{const n=[];return m.value.forEach(e=>{D.value&&e.Venue!=D.value||e.Guests.forEach((a,u)=>{const c={FirstName:"",LastName:"",Guests:"",Address:"",Venue:"",Accommodation:"",RoomType:"",ArrivalDay:"",DepartureDay:""};c.FirstName=a.FirstName,c.LastName=a.LastName,c.Address=a.Address;const T=e.Guests.filter((Q,Y)=>Y!==u);let W="";T.forEach(Q=>{W+=Q.FirstName+" "+Q.LastName+","}),c.Guests=W.substring(0,W.length-1),c.Venue=e.Venue;const M=e.Accommodation.match(/\((.*?)\)/);M&&M.length>=1?c.Accommodation=M[1]:c.Accommodation=e.Accommodation,c.RoomType=e.RoomType,c.ArrivalDay=e.Days[0],c.DepartureDay=e.Days[e.Days.length-1],n.push(c)})}),n}),h=U(()=>{const n=new Map;return m.value.forEach(e=>{let a;const u=`${e.Days[0]} - ${e.Days[e.Days.length-1]}`;n.has(u)?a=n.get(u):a=new Map,a.has(e.Accommodation)?a.set(e.Accommodation,a.get(e.Accommodation)+1):a.set(e.Accommodation,1),n.set(u,a)}),n.forEach((e,a)=>{n.set(a,new Map([...e.entries()].sort()))}),n}),d=U(()=>{const n=new Map;return m.value.forEach(e=>{let a;const u=`${e.Days[0]} - ${e.Days[e.Days.length-1]}`;n.has(u)?a=n.get(u):a=new Map,a.has(e.RoomType)?a.set(e.RoomType,a.get(e.RoomType)+1):a.set(e.RoomType,1),n.set(u,a)}),n.forEach((e,a)=>{n.set(a,new Map([...e.entries()].sort()))}),n}),r=U(()=>{const n=new Map;return m.value.forEach(e=>{let a;const u=`${e.Days[0]} - ${e.Days[e.Days.length-1]}`;n.has(u)?a=n.get(u):a=new Map,a.has(`${e.Accommodation} (${e.RoomType})`)?a.set(`${e.Accommodation} (${e.RoomType})`,a.get(`${e.Accommodation} (${e.RoomType})`)+1):a.set(`${e.Accommodation} (${e.RoomType})`,1),n.set(u,a)}),n.forEach((e,a)=>{n.set(a,new Map([...e.entries()].sort()))}),n}),i=qe("reportTable"),v="data:application/vnd.ms-excel;base64,",L='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><?xml version="1.0" encoding="UTF-8" standalone="yes"?><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',J=function(n){return btoa(unescape(encodeURIComponent(n)))},K=function(n,e){return n.replace(/{(\w+)}/g,function(a,u){return e[u]})},X=n=>{var a;const e=(a=i.value)==null?void 0:a.getElementsByTagName("table")[0];if(e){const u={worksheet:n,table:e.innerHTML};window.location.href=v+J(K(L,u))}};return(n,e)=>m.value.length>0&&V.value.length>0?(f(),x(I,{key:0},[t(le,{fluid:""},{default:o(()=>[t(q,null,{default:o(()=>[t(P,{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"},{default:o(()=>[t(Ve,{modelValue:D.value,"onUpdate:modelValue":e[0]||(e[0]=a=>D.value=a),label:"Venue",items:V.value,"item-value":"Name","item-title":"Name",clearable:"",variant:"outlined","hide-details":""},null,8,["modelValue","items"])]),_:1}),t(Ke),t(P,{cols:"12",sm:"5",md:"3",lg:"2",xl:"2",class:"text-right"},{default:o(()=>[t(O,{onClick:e[1]||(e[1]=a=>X("Hotel Report")),color:"primary","prepend-icon":"mdi:mdi-table",class:"w-100 w-sm-auto"},{default:o(()=>e[2]||(e[2]=[b(" Download Excel ")])),_:1})]),_:1})]),_:1})]),_:1}),w.value?(f(),H(re,{key:0,class:"pa-2"},{default:o(()=>[p("div",{ref_key:"reportTable",ref:i},[t(bt,{headers:A.value,items:w.value,"items-length":w.value.length},{"item.RoomType":o(({item:a})=>[b(k(a.RoomType)+" ",1),e[3]||(e[3]=p("br",null,null,-1)),b(" ("+k(a.Accommodation)+") ",1)]),_:2},1032,["headers","items","items-length"])],512),t(q,null,{default:o(()=>[t(P,{cols:"12",md:"6",lg:"4"},{default:o(()=>[p("div",null,[e[4]||(e[4]=p("h2",{class:"my-4"},"Room Count Summary",-1)),p("dl",null,[(f(!0),x(I,null,F(h.value.entries(),([a,u])=>(f(),x(I,null,[p("dt",Dt,[p("strong",null,k(a),1)]),(f(!0),x(I,null,F(u.entries(),([c,T])=>(f(),x("dd",null,[p("dl",wt,[p("dt",It,k(c),1),p("dd",null,k(T),1)])]))),256)),b(" Total: "+k(u.entries().reduce((c,T)=>c+T[1],0)),1)],64))),256))])])]),_:1}),t(P,{cols:"12",md:"6",lg:"4"},{default:o(()=>[p("div",null,[e[5]||(e[5]=p("h2",{class:"my-4"},"Allocation Summary",-1)),p("dl",null,[(f(!0),x(I,null,F(d.value.entries(),([a,u])=>(f(),x(I,null,[p("dt",Ut,[p("strong",null,k(a),1)]),(f(!0),x(I,null,F(u.entries(),([c,T])=>(f(),x("dd",null,[p("dl",Ct,[p("dt",_t,k(c),1),p("dd",null,k(T),1)])]))),256)),b(" Total: "+k(u.entries().reduce((c,T)=>c+T[1],0)),1)],64))),256))])])]),_:1}),t(P,{cols:"12",md:"6",lg:"4"},{default:o(()=>[p("div",null,[e[6]||(e[6]=p("h2",{class:"my-4"},"Split Summary",-1)),p("dl",null,[(f(!0),x(I,null,F(r.value.entries(),([a,u])=>(f(),x(I,null,[p("dt",Nt,[p("strong",null,k(a),1)]),(f(!0),x(I,null,F(u.entries(),([c,T])=>(f(),x("dd",null,[p("dl",St,[p("dt",At,k(c),1),p("dd",null,k(T),1)])]))),256)),b(" Total: "+k(u.entries().reduce((c,T)=>c+T[1],0)),1)],64))),256))])])]),_:1})]),_:1})]),_:1})):se("",!0)],64)):(f(),H(le,{key:1},{default:o(()=>[t(q,null,{default:o(()=>[t(P,{class:"text-center"},{default:o(()=>[t(Ye,{indeterminate:"",color:"primary",size:"100",width:"10"},{default:o(()=>e[7]||(e[7]=[b(" Loading ")])),_:1})]),_:1})]),_:1})]),_:1}))}}),Et={class:"flex-grow-1"},Bt=z({__name:"TicketReport",emits:["pageTitle"],setup(s,{emit:N}){N("pageTitle","Reports");const l=oe(),C=j(),y=R(),g=R([]),m=R([]),D=R(!0),V=()=>{try{ne().then(h=>{h&&(y.value=h,l.getTicketReport(y.value.ConventionUUID).then(d=>{g.value=d,D.value=!1}))})}catch{C.push("/")}},A=U(()=>[{title:"Reference",align:"start",key:"Reference"},{title:"Name",align:"start",key:"Name"},{title:"Ticket",align:"start",key:"Ticket"},{title:"QR Code",align:"start",key:"QRCode"}]),w=U(()=>g.value?g.value.map(h=>({RegistrationUUID:h.RegistrationUUID,Reference:h.Reference,Name:h.Name,Ticket:h.Ticket.map(r=>r.Name),QRCode:h.QRCode})):[]);return V(),(h,d)=>y.value&&g.value?(f(),H(re,{key:0,class:"pa-2"},{default:o(()=>[t(Te,{modelValue:m.value,"onUpdate:modelValue":d[2]||(d[2]=r=>m.value=r),headers:A.value,items:w.value,"item-value":"RegistrationUUID","show-select":"",loading:D.value},{"item.Ticket":o(({item:r})=>[t(Re,{items:r.Ticket},null,8,["items"])]),"item.QRCode":o(({item:r})=>[t(gt,{src:r.QRCode,alt:r.Reference},null,8,["src","alt"])]),"footer.prepend":o(()=>[p("div",Et,[t(O,{variant:"text",color:"primary",onClick:d[0]||(d[0]=r=>m.value=w.value.map(i=>i.RegistrationUUID))},{default:o(()=>d[6]||(d[6]=[b(" (Select all on every page) ")])),_:1}),t(O,{variant:"text",color:"primary",onClick:d[1]||(d[1]=r=>m.value=[])},{default:o(()=>d[7]||(d[7]=[b(" (Unselect all on every page) ")])),_:1})])]),_:2},1032,["modelValue","headers","items","loading"]),t(xe,{modelValue:m.value,"onUpdate:modelValue":d[3]||(d[3]=r=>m.value=r),details:w.value,"onUpdate:details":d[4]||(d[4]=r=>w.value=r),"model-type":"registration",convention:y.value,"onUpdate:convention":d[5]||(d[5]=r=>y.value=r)},null,8,["modelValue","details","convention"])]),_:1})):se("",!0)}}),Ft={class:"flex-grow-1"},Pt=z({__name:"CheckInReport",emits:["pageTitle"],setup(s,{emit:N}){N("pageTitle","Reports");const l=oe(),C=j(),y=R(),g=R([]),m=R([]),D=R(!0),V=R(),A=R([{key:"Reference",order:"asc"}]),w=()=>{try{ne().then(r=>{var i;r&&(y.value=r,l.getCheckInReport((i=y.value)==null?void 0:i.ConventionUUID).then(v=>{g.value=v,D.value=!1}))})}catch{C.push("/")}},h=U(()=>[{title:"Reference",align:"start",key:"Reference"},{title:"Name",align:"start",key:"Name"},{title:"Ticket",align:"start",key:"Ticket"},{title:"Checked In",align:"start",key:"CheckedIn"}]),d=U(()=>g.value?g.value.filter(r=>V.value?r.CheckedIn===V.value:!0).map(r=>({RegistrationUUID:r.RegistrationUUID,Reference:r.Reference,Name:r.Name,Ticket:r.Ticket.map(v=>v.Name),CheckedIn:r.CheckedIn})):[]);return w(),(r,i)=>(f(),x(I,null,[t(le,{fluid:""},{default:o(()=>[t(q,null,{default:o(()=>[t(P,{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"},{default:o(()=>[t(Ve,{modelValue:V.value,"onUpdate:modelValue":i[0]||(i[0]=v=>V.value=v),label:"Status",items:ye(ft),"item-value":"value","item-title":"title",clearable:"",variant:"outlined","hide-details":""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),y.value&&g.value?(f(),H(re,{key:0,class:"pa-2"},{default:o(()=>[t(Te,{modelValue:m.value,"onUpdate:modelValue":i[3]||(i[3]=v=>m.value=v),headers:h.value,items:d.value,"item-value":"RegistrationUUID","show-select":"",loading:D.value,"sort-by":A.value,"onUpdate:sortBy":i[4]||(i[4]=v=>A.value=v)},{"item.CheckedIn":o(({item:v})=>[b(k(ye(yt)(v.CheckedIn)),1)]),"item.Ticket":o(({item:v})=>[t(Re,{items:v.Ticket},null,8,["items"])]),"footer.prepend":o(()=>[p("div",Ft,[t(O,{variant:"text",color:"primary",onClick:i[1]||(i[1]=v=>m.value=d.value.map(L=>L.RegistrationUUID))},{default:o(()=>i[8]||(i[8]=[b(" (Select all on every page) ")])),_:1}),t(O,{variant:"text",color:"primary",onClick:i[2]||(i[2]=v=>m.value=[])},{default:o(()=>i[9]||(i[9]=[b(" (Unselect all on every page) ")])),_:1})])]),_:2},1032,["modelValue","headers","items","loading","sort-by"]),t(xe,{modelValue:m.value,"onUpdate:modelValue":i[5]||(i[5]=v=>m.value=v),details:d.value,"onUpdate:details":i[6]||(i[6]=v=>d.value=v),"model-type":"registration",convention:y.value,"onUpdate:convention":i[7]||(i[7]=v=>y.value=v)},null,8,["modelValue","details","convention"])]),_:1})):se("",!0)],64))}}),ha=z({__name:"Reports",emits:["pageTitle"],setup(s,{emit:N}){N("pageTitle","Reports"),j();const l=R("Hotel"),C=R(["Hotel","Tickets","Check In"]);return(y,g)=>(f(),H(ht,null,{default:o(()=>[t(xt,{color:"blue-darken-4"},{default:o(()=>[t(kt,{modelValue:l.value,"onUpdate:modelValue":g[0]||(g[0]=m=>l.value=m),"show-arrows":""},{default:o(()=>[(f(!0),x(I,null,F(C.value,m=>(f(),H(Tt,null,{default:o(()=>[b(k(m),1)]),_:2},1024))),256))]),_:1},8,["modelValue"])]),_:1}),t(Vt,{modelValue:l.value,"onUpdate:modelValue":g[1]||(g[1]=m=>l.value=m)},{default:o(()=>[t(ae,{value:"Hotel"},{default:o(()=>[t($t)]),_:1}),t(ae,{value:"Tickets"},{default:o(()=>[t(Bt)]),_:1}),t(ae,{value:"Check In"},{default:o(()=>[t(Pt)]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{ha as default};
