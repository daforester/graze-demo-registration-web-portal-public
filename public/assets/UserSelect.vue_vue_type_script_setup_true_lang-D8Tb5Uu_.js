import{i as f,L as d,M as c,r as m,c as u,n as R,q as p,O as U,U as h}from"./index-BRKc9zXj.js";import{V as g}from"./VAutocomplete-CdKWDRZ3.js";const y=f({__name:"UserSelect",props:d({clearable:{type:Boolean,default:!1},convention:{},hideDetails:{type:[Boolean,String]},hideNull:{type:Boolean,default:!1},hint:{default:""},label:{default:""},nullLabel:{default:"- Select Owner -"},persistentHint:{type:Boolean,default:!1},variant:{default:"filled"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const r=U(),i=c(a,"modelValue"),s=m([]);let l="";typeof a.convention=="object"?l=a.convention.ConventionUUID:l=a.convention,r.searchConventionUsers(l).then(n=>{n&&(s.value=n.Users)});const o=u(()=>{const n=s.value.map(e=>{const t=e.Generated&&e.Generated.badge_name?e.Generated.badge_name:e.DisplayName;return{DisplayName:`${e.Registrations&&e.Registrations.length>0&&e.Registrations[0].Reference?`#${e.Registrations[0].Reference}`:""} ${t}`,Reference:e.Registrations&&e.Registrations.length>0&&e.Registrations[0].Reference?e.Registrations[0].Reference:"",UserUUID:e.UserUUID}}).sort((e,t)=>!e.Reference&&t.Reference?1:e.Reference&&!t.Reference||e.Reference.length<t.Reference.length?-1:e.Reference.length>t.Reference.length||e.DisplayName>t.DisplayName?1:e.DisplayName==t.DisplayName?0:-1);return a.hideNull||n.unshift({DisplayName:a.nullLabel,Reference:"",UserUUID:h}),n});return(n,e)=>(R(),p(g,{label:n.label,items:o.value,"item-title":"DisplayName","item-value":"UserUUID",variant:n.variant,"hide-details":n.hideDetails,"persistent-hint":n.persistentHint,modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t),hint:n.hint,clearable:n.clearable},null,8,["label","items","variant","hide-details","persistent-hint","modelValue","hint","clearable"]))}});export{y as _};
