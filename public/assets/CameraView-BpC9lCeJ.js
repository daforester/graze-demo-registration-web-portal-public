import{u as x}from"./useStoreAPI-Chw5en3F.js";import{i as R,r as u,$ as B,w as F,q as g,v as s,R as S,n as m,f as n,x as b,G as w,D as _,H as E,O as M}from"./index-BRKc9zXj.js";import{V as O}from"./VApp-DYvR2fnI.js";import{V as T,a as j}from"./VAlert-yVQb1cYs.js";import{a as N,V as P}from"./VRow-1Yh2A0gq.js";import{V as G}from"./VSelect-CDQw9ZDx.js";import{V as H}from"./VGrid-Cv1zLrEw.js";import"./scopeId-BtbYt4a0.js";import"./createSimpleFunctional-D11AQa6T.js";import"./VTextField-JToEiHa0.js";import"./forwardRefs-alsDaBjW.js";import"./form-BJF21hIe.js";import"./VList-S8qLpSz_.js";import"./VDivider-D6R6d41K.js";import"./VOverlay-8TD1fWCp.js";import"./VChip-Dr_QFk4E.js";const ne=R({__name:"CameraView",setup($){const y=M(),V=x(),h=S(),d=u(!1),t=B("videoDisplay"),i=u({facingMode:"environment"}),p=[{label:"Rear Camera",constraints:{facingMode:"environment"}},{label:"Front Camera",constraints:{facingMode:"user"}}],v=u(p),l=u(null),C=async()=>{const a=(await navigator.mediaDevices.enumerateDevices()).filter(({kind:o})=>o==="videoinput");v.value=[...p,...a.map(({deviceId:o,label:c})=>({label:`${c}`,constraints:{deviceId:o}}))]};navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(e=>{l.value=e,t.value&&(t.value.srcObject=e,t.value.play(),C())}).catch(e=>{console.error("Error accessing camera: ",e)});const D=()=>{if(!t.value)return;const e=document.createElement("canvas");e.width=t.value.videoWidth,e.height=t.value.videoHeight;const a=e.getContext("2d",{alpha:!1,jpegQuality:.8});a&&"drawImage"in a&&a.drawImage(t.value,0,0);const o=e.toDataURL("image/webp").replace(/^data:image\/(png|jpeg|webp);base64,/,"");I(o)},I=(e,a="capture.webp")=>{const o=atob(e),c=new Array(o.length);for(let r=0;r<o.length;r++)c[r]=o.charCodeAt(r);const A=new Uint8Array(c),U=new Blob([A],{type:"image/webp"}),f=new FormData;f.append("image",U,a),V.SaveFormFile(f).then(r=>{console.log("Success:",r),y.registerCameraTetherSession(h.params.session,r.FileUUID).then(k=>{k.FileUUID&&(console.log("Camera tether session registered"),d.value=!0)})}).catch(r=>{console.error("Error:",r)})};return F(i,()=>{l.value&&l.value.getTracks().forEach(e=>e.stop()),navigator.mediaDevices.getUserMedia({video:{deviceId:{exact:i.value.deviceId}}}).then(e=>{l.value=e,t.value&&(t.value.srcObject=e,t.value.play())}).catch(e=>{console.error("Error accessing camera:",e)})}),(e,a)=>(m(),g(O,null,{default:s(()=>[d.value?(m(),g(T,{key:0,color:"success"},{default:s(()=>[n(j,null,{default:s(()=>a[1]||(a[1]=[b("Photo Received")])),_:1}),a[2]||(a[2]=w("p",null," You may now close this window. ",-1))]),_:1})):(m(),_(E,{key:1},[n(P,null,{default:s(()=>[n(N,null,{default:s(()=>[n(G,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=o=>i.value=o),items:v.value,"item-title":"label","item-value":"constraints",label:"Select Camera","hide-details":"",clearable:""},null,8,["modelValue","items"])]),_:1})]),_:1}),w("video",{ref_key:"videoDisplay",ref:t},null,512),n(H,{color:"success",class:"rounded-0",onClick:D},{default:s(()=>a[3]||(a[3]=[b("Capture")])),_:1})],64))]),_:1}))}});export{ne as default};
