import{p as Be,d as Fe,a9 as Pe,t as A,c as I,s as me,ab as Ge,f as e,K as J,m as X,i as M,Q as q,r as g,C as He,$ as $e,n as V,D as E,v as l,x as D,q as G,G as T,y as B,H as P,P as Z,A as ae,O as le,F as de}from"./index-BgD2WjuP.js";import{u as oe,_ as fe,C as Le,a as We}from"./EmailControl.vue_vue_type_script_setup_true_lang-Cb97lo-q.js";import{V as ee,a as O}from"./VRow-ErMw0eqW.js";import{m as Qe,u as Oe,a as Me,V as ge}from"./VSelect-Dse91o-O.js";import{V as qe}from"./VSpacer-ClF-QKAt.js";import{u as ze,V as Q,o as Ke}from"./VGrid-B_VCnsH1.js";import{V as te}from"./VContainer-BND4lFrx.js";import{b as je,s as Je,d as Xe,e as Ye,g as Ze,u as et,p as tt,h as at,t as lt,j as ot,k as st,l as nt,n as rt,q as ce,r as pe,v as it,V as ye}from"./VDataTable-BmEPsGYm.js";import{m as ut,u as mt}from"./filter-HSJV0fx0.js";import{V as ve}from"./VTable-DrrSnAk-.js";import{e as se}from"./VCard-CmdpbywP.js";import{V as ke}from"./VList-Whpv0gft.js";import{V as dt}from"./forwardRefs-CtkOrgsl.js";import{V as ct}from"./VSheet-ECGJSAdQ.js";import{a as pt,b as Y,c as vt,V as ft}from"./VTabs-DNoAp-7k.js";import{V as gt}from"./VToolbar-C3aTUIKm.js";import"./useEmailTemplates-B9oEciB-.js";import"./permission-Ba-8wP-4.js";import"./ModelDialog.vue_vue_type_script_setup_true_lang-F_N5_psd.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-O6HSe5O6.js";import"./VOverlay-Jd9F9uAb.js";import"./scopeId-bTuh24L9.js";import"./VDialog-eDdgaHCp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VAlert-DEZKOd92.js";import"./createSimpleFunctional-fpaQ8hAq.js";import"./VTextField-DrLsn_y8.js";import"./form-BY7Ry-xm.js";import"./VChip-DVFKeV0A.js";import"./VDivider-LRWh0p1i.js";const yt=Be({...je(),...Je(),...Qe(),...ut()},"VDataTableVirtual"),kt=Fe()({name:"VDataTableVirtual",props:yt(),emits:{"update:modelValue":a=>!0,"update:sortBy":a=>!0,"update:options":a=>!0,"update:groupBy":a=>!0,"update:expanded":a=>!0},setup(a,U){let{attrs:w,slots:o}=U;const{groupBy:b}=Xe(a),{sortBy:c,multiSort:p,mustSort:u}=Ye(a),{disableSort:h}=Pe(a),{columns:f,headers:C,filterFunctions:x,sortFunctions:v,sortRawFunctions:r}=Ze(a,{groupBy:b,showSelect:A(a,"showSelect"),showExpand:A(a,"showExpand")}),{items:s}=et(a,f),n=A(a,"search"),{filteredItems:m}=mt(a,s,n,{transform:R=>R.columns,customKeyFilter:x}),{toggleSort:H}=tt({sortBy:c,multiSort:p,mustSort:u}),{sortByWithGroups:z,opened:d,extractRows:t,isGroupOpen:i,toggleGroup:k}=at({groupBy:b,sortBy:c,disableSort:h}),{sortedItems:y}=lt(a,m,z,{transform:R=>({...R.raw,...R.columns}),sortFunctions:v,sortRawFunctions:r}),{flatItems:S}=ot(y,b,d),N=I(()=>t(S.value)),{isSelected:$,select:L,selectAll:K,toggleSelect:Ve,someSelected:he,allSelected:xe}=st(a,{allItems:N,currentPage:N}),{isExpanded:be,toggleExpand:Te}=nt(a),{containerRef:Re,markerRef:De,paddingTop:Ie,paddingBottom:Ue,computedItems:we,handleItemResize:Ce,handleScroll:Ne,handleScrollend:_e}=Oe(a,S),Se=I(()=>we.value.map(R=>R.raw));rt({sortBy:c,page:me(1),itemsPerPage:me(-1),groupBy:b,search:n}),Ge({VDataTableRows:{hideNoData:A(a,"hideNoData"),noDataText:A(a,"noDataText"),loading:A(a,"loading"),loadingText:A(a,"loadingText")}});const W=I(()=>({sortBy:c.value,toggleSort:H,someSelected:he.value,allSelected:xe.value,isSelected:$,select:L,selectAll:K,toggleSelect:Ve,isExpanded:be,toggleExpand:Te,isGroupOpen:i,toggleGroup:k,items:N.value.map(R=>R.raw),internalItems:N.value,groupedItems:S.value,columns:f.value,headers:C.value}));ze(()=>{const R=ce.filterProps(a),Ae=pe.filterProps(a),Ee=ve.filterProps(a);return e(ve,X({class:["v-data-table",{"v-data-table--loading":a.loading},a.class],style:a.style},Ee,{fixedHeader:a.fixedHeader||a.sticky}),{top:()=>{var _;return(_=o.top)==null?void 0:_.call(o,W.value)},wrapper:()=>{var _,ne,re;return e("div",{ref:Re,onScrollPassive:Ne,onScrollend:_e,class:"v-table__wrapper",style:{height:J(a.height)}},[e("table",null,[(_=o.colgroup)==null?void 0:_.call(o,W.value),!a.hideDefaultHeader&&e("thead",{key:"thead"},[e(ce,R,o)]),!a.hideDefaultBody&&e("tbody",null,[e("tr",{ref:De,style:{height:J(Ie.value),border:0}},[e("td",{colspan:f.value.length,style:{height:0,border:0}},null)]),(ne=o["body.prepend"])==null?void 0:ne.call(o,W.value),e(pe,X(w,Ae,{items:Se.value}),{...o,item:F=>e(Me,{key:F.internalItem.index,renderless:!0,"onUpdate:height":j=>Ce(F.internalItem.index,j)},{default:j=>{var ue;let{itemRef:ie}=j;return((ue=o.item)==null?void 0:ue.call(o,{...F,itemRef:ie}))??e(it,X(F.props,{ref:ie,key:F.internalItem.index,index:F.internalItem.index}),o)}})}),(re=o["body.append"])==null?void 0:re.call(o,W.value),e("tr",{style:{height:J(Ue.value),border:0}},[e("td",{colspan:f.value.length,style:{height:0,border:0}},null)])])])])},bottom:()=>{var _;return(_=o.bottom)==null?void 0:_.call(o,W.value)}})})}}),Vt={class:"my-4"},ht={class:"d-flex ml-4"},xt={class:"mx-4"},bt=M({__name:"HotelReport",emits:["pageTitle"],async setup(a,{emit:U}){let w,o;U("pageTitle","Reports");const c=le(),p=q(),u=g([]),h=g(),f=g([]);try{const d=([w,o]=He(()=>oe()),w=await w,o(),w);d&&(c.getHotelReport(d.ConventionUUID).then(t=>{u.value=t}),c.getConventionVenues(d.ConventionUUID).then(t=>{f.value=t}))}catch{p.push("/")}const C=I(()=>[{title:"First Name",align:"start",key:"FirstName"},{title:"Last Name",align:"start",key:"LastName"},{title:"Address",align:"start",key:"Address"},{title:"Room Partners",align:"start",key:"Guests"},{title:"Venue",align:"start",key:"Venue"},{title:"Room Type",align:"start",key:"RoomType"},{title:"Arrival",align:"start",key:"ArrivalDay"},{title:"Departure",align:"start",key:"DepartureDay"}]),x=I(()=>{const d=[];return u.value.forEach(t=>{h.value&&t.Venue!=h.value||t.Guests.forEach((i,k)=>{const y={FirstName:"",LastName:"",Guests:"",Address:"",Venue:"",Accommodation:"",RoomType:"",ArrivalDay:"",DepartureDay:""};y.FirstName=i.FirstName,y.LastName=i.LastName,y.Address=i.Address;const S=t.Guests.filter((L,K)=>K!==k);let N="";S.forEach(L=>{N+=L.FirstName+" "+L.LastName+","}),y.Guests=N.substring(0,N.length-1),y.Venue=t.Venue;const $=t.Accommodation.match(/\((.*?)\)/);$&&$.length>=1&&(y.Accommodation=$[1]),y.RoomType=t.RoomType,y.ArrivalDay=t.Days[0],y.DepartureDay=t.Days[t.Days.length-1],d.push(y)})}),d}),v=I(()=>{const d=new Map;return u.value.forEach(t=>{let i;const k=`${t.Days[0]} - ${t.Days[t.Days.length-1]}`;d.has(k)?i=d.get(k):i=new Map,i.has(t.Accommodation)?i.set(t.Accommodation,i.get(t.Accommodation)+1):i.set(t.Accommodation,1),d.set(k,i)}),d.forEach((t,i)=>{d.set(i,new Map([...t.entries()].sort()))}),d}),r=$e("reportTable"),s="data:application/vnd.ms-excel;base64,",n='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><?xml version="1.0" encoding="UTF-8" standalone="yes"?><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',m=function(d){return btoa(unescape(encodeURIComponent(d)))},H=function(d,t){return d.replace(/{(\w+)}/g,function(i,k){return t[k]})},z=d=>{var i;const t=(i=r.value)==null?void 0:i.getElementsByTagName("table")[0];if(t){const k={worksheet:d,table:t.innerHTML};window.location.href=s+m(H(n,k))}};return(d,t)=>u.value.length>0&&f.value.length>0?(V(),E(P,{key:0},[e(te,{fluid:""},{default:l(()=>[e(ee,null,{default:l(()=>[e(O,{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"},{default:l(()=>[e(ge,{modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=i=>h.value=i),label:"Venue",items:f.value,"item-value":"Name","item-title":"Name",clearable:"",variant:"outlined","hide-details":""},null,8,["modelValue","items"])]),_:1}),e(qe),e(O,{cols:"12",sm:"5",md:"3",lg:"2",xl:"2",class:"text-right"},{default:l(()=>[e(Q,{onClick:t[1]||(t[1]=i=>z("Hotel Report")),color:"primary","prepend-icon":"mdi:mdi-table",class:"w-100 w-sm-auto"},{default:l(()=>t[2]||(t[2]=[D(" Download Excel ")])),_:1})]),_:1})]),_:1})]),_:1}),x.value?(V(),G(se,{key:0,class:"pa-2"},{default:l(()=>[T("div",{ref_key:"reportTable",ref:r},[e(kt,{headers:C.value,items:x.value,"items-length":x.value.length},{"item.RoomType":l(({item:i})=>[D(B(i.RoomType)+" ",1),t[3]||(t[3]=T("br",null,null,-1)),D(" ("+B(i.Accommodation)+") ",1)]),_:2},1032,["headers","items","items-length"]),t[4]||(t[4]=T("h2",{class:"my-4"},"Room Count Summary",-1)),T("dl",null,[(V(!0),E(P,null,Z(v.value.entries(),([i,k])=>(V(),E(P,null,[T("dt",Vt,[T("strong",null,B(i),1)]),(V(!0),E(P,null,Z(k.entries(),([y,S])=>(V(),E("dd",null,[T("dl",ht,[T("dt",xt,B(y),1),T("dd",null,B(S),1)])]))),256))],64))),256))])],512)]),_:1})):ae("",!0)],64)):(V(),G(te,{key:1},{default:l(()=>[e(ee,null,{default:l(()=>[e(O,{class:"text-center"},{default:l(()=>[e(Ke,{indeterminate:"",color:"primary",size:"100",width:"10"},{default:l(()=>t[5]||(t[5]=[D(" Loading ")])),_:1})]),_:1})]),_:1})]),_:1}))}}),Tt={class:"flex-grow-1"},Rt=M({__name:"TicketReport",emits:["pageTitle"],setup(a,{emit:U}){U("pageTitle","Reports");const o=le(),b=q(),c=g(),p=g([]),u=g([]),h=g(!0),f=()=>{try{oe().then(v=>{v&&(c.value=v,o.getTicketReport(c.value.ConventionUUID).then(r=>{p.value=r,h.value=!1}))})}catch{b.push("/")}},C=I(()=>[{title:"",align:"start",key:"checkbox"},{title:"Reference",align:"start",key:"Reference"},{title:"Name",align:"start",key:"Name"},{title:"Ticket",align:"start",key:"Ticket"},{title:"QR Code",align:"start",key:"QRCode"}]),x=I(()=>p.value?p.value.map(v=>({RegistrationUUID:v.RegistrationUUID,Reference:v.Reference,Name:v.Name,Ticket:v.Ticket.map(s=>s.Name),QRCode:v.QRCode})):[]);return f(),(v,r)=>c.value&&p.value?(V(),G(se,{key:0,class:"pa-2"},{default:l(()=>[e(ye,{modelValue:u.value,"onUpdate:modelValue":r[2]||(r[2]=s=>u.value=s),headers:C.value,items:x.value,"item-value":"RegistrationUUID","show-select":"",loading:h.value},{"item.Ticket":l(({item:s})=>[e(ke,{items:s.Ticket},null,8,["items"])]),"item.QRCode":l(({item:s})=>[e(dt,{src:s.QRCode,alt:s.Reference},null,8,["src","alt"])]),"footer.prepend":l(()=>[T("div",Tt,[e(Q,{variant:"text",color:"primary",onClick:r[0]||(r[0]=s=>u.value=x.value.map(n=>n.RegistrationUUID))},{default:l(()=>r[6]||(r[6]=[D(" (Select all on every page) ")])),_:1}),e(Q,{variant:"text",color:"primary",onClick:r[1]||(r[1]=s=>u.value=[])},{default:l(()=>r[7]||(r[7]=[D(" (Unselect all on every page) ")])),_:1})])]),_:2},1032,["modelValue","headers","items","loading"]),e(fe,{modelValue:u.value,"onUpdate:modelValue":r[3]||(r[3]=s=>u.value=s),details:x.value,"onUpdate:details":r[4]||(r[4]=s=>x.value=s),"model-type":"registration",convention:c.value,"onUpdate:convention":r[5]||(r[5]=s=>c.value=s)},null,8,["modelValue","details","convention"])]),_:1})):ae("",!0)}}),Dt={class:"flex-grow-1"},It=M({__name:"CheckInReport",emits:["pageTitle"],setup(a,{emit:U}){U("pageTitle","Reports");const o=le(),b=q(),c=g(),p=g([]),u=g([]),h=g(!0),f=g(),C=g([{key:"Reference",order:"asc"}]),x=()=>{try{oe().then(s=>{var n;s&&(c.value=s,o.getCheckInReport((n=c.value)==null?void 0:n.ConventionUUID).then(m=>{p.value=m,h.value=!1}))})}catch{b.push("/")}},v=I(()=>[{title:"",align:"start",key:"checkbox"},{title:"Reference",align:"start",key:"Reference"},{title:"Name",align:"start",key:"Name"},{title:"Ticket",align:"start",key:"Ticket"},{title:"Checked In",align:"start",key:"CheckedIn"}]),r=I(()=>p.value?p.value.filter(s=>f.value?s.CheckedIn===f.value:!0).map(s=>({RegistrationUUID:s.RegistrationUUID,Reference:s.Reference,Name:s.Name,Ticket:s.Ticket.map(m=>m.Name),CheckedIn:s.CheckedIn})):[]);return x(),(s,n)=>(V(),E(P,null,[e(te,{fluid:""},{default:l(()=>[e(ee,null,{default:l(()=>[e(O,{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"},{default:l(()=>[e(ge,{modelValue:f.value,"onUpdate:modelValue":n[0]||(n[0]=m=>f.value=m),label:"Status",items:de(Le),"item-value":"value","item-title":"title",clearable:"",variant:"outlined","hide-details":""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),c.value&&p.value?(V(),G(se,{key:0,class:"pa-2"},{default:l(()=>[e(ye,{modelValue:u.value,"onUpdate:modelValue":n[3]||(n[3]=m=>u.value=m),headers:v.value,items:r.value,"item-value":"RegistrationUUID","show-select":"",loading:h.value,"sort-by":C.value,"onUpdate:sortBy":n[4]||(n[4]=m=>C.value=m)},{"item.CheckedIn":l(({item:m})=>[D(B(de(We)(m.CheckedIn)),1)]),"item.Ticket":l(({item:m})=>[e(ke,{items:m.Ticket},null,8,["items"])]),"footer.prepend":l(()=>[T("div",Dt,[e(Q,{variant:"text",color:"primary",onClick:n[1]||(n[1]=m=>u.value=r.value.map(H=>H.RegistrationUUID))},{default:l(()=>n[8]||(n[8]=[D(" (Select all on every page) ")])),_:1}),e(Q,{variant:"text",color:"primary",onClick:n[2]||(n[2]=m=>u.value=[])},{default:l(()=>n[9]||(n[9]=[D(" (Unselect all on every page) ")])),_:1})])]),_:2},1032,["modelValue","headers","items","loading","sort-by"]),e(fe,{modelValue:u.value,"onUpdate:modelValue":n[5]||(n[5]=m=>u.value=m),details:r.value,"onUpdate:details":n[6]||(n[6]=m=>r.value=m),"model-type":"registration",convention:c.value,"onUpdate:convention":n[7]||(n[7]=m=>c.value=m)},null,8,["modelValue","details","convention"])]),_:1})):ae("",!0)],64))}}),la=M({__name:"Reports",emits:["pageTitle"],setup(a,{emit:U}){U("pageTitle","Reports"),q();const o=g("Hotel"),b=g(["Hotel","Tickets","Check In"]);return(c,p)=>(V(),G(ct,null,{default:l(()=>[e(gt,{color:"blue-darken-4"},{default:l(()=>[e(pt,{modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=u=>o.value=u),"show-arrows":""},{default:l(()=>[(V(!0),E(P,null,Z(b.value,u=>(V(),G(ft,null,{default:l(()=>[D(B(u),1)]),_:2},1024))),256))]),_:1},8,["modelValue"])]),_:1}),e(vt,{modelValue:o.value,"onUpdate:modelValue":p[1]||(p[1]=u=>o.value=u)},{default:l(()=>[e(Y,{value:"Hotel"},{default:l(()=>[e(bt)]),_:1}),e(Y,{value:"Tickets"},{default:l(()=>[e(Rt)]),_:1}),e(Y,{value:"Check In"},{default:l(()=>[e(It)]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{la as default};
