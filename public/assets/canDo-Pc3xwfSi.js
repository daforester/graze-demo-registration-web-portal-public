import{U as f}from"./index-BRKc9zXj.js";var s=(n=>(n.GROUP_TYPE_ADMIN="GROUP_TYPE_ADMIN",n.GROUP_TYPE_SYSTEM="GROUP_TYPE_SYSTEM",n.GROUP_TYPE_ORGANISATION="GROUP_TYPE_ORGANISATION",n.GROUP_TYPE_CONVENTION="GROUP_TYPE_CONVENTION",n))(s||{}),N=(n=>(n.OWNER_TYPE_ADMIN="",n.OWNER_TYPE_CONVENTION="conventions",n.OWNER_TYPE_ORGANISATION="organisations",n.OWNER_TYPE_SYSTEM="",n))(N||{});const O=(n,E)=>{n.CheckIn=n.CheckIn||E.CheckIn,n.EditConvention=n.EditConvention||E.EditConvention,n.EditOrganisation=n.EditOrganisation||E.EditOrganisation,n.EditPaymentTransactions=n.EditPaymentTransactions||E.EditPaymentTransactions,n.EditRegistration=n.EditRegistration||E.EditRegistration,n.ManageUsers=n.ManageUsers||E.ManageUsers,n.ManageViews=n.ManageViews||E.ManageViews,n.ViewPaymentTransactions=n.ViewPaymentTransactions||E.ViewPaymentTransactions,n.ViewRegistration=n.ViewRegistration||E.ViewRegistration,n.ConfigureLostAndFound=n.ConfigureLostAndFound||E.ConfigureLostAndFound,n.ConfigureProps=n.ConfigureProps||E.ConfigureProps,n.EditLostAndFound=n.EditLostAndFound||E.EditLostAndFound,n.EditProps=n.EditProps||E.EditProps,n.ViewLostAndFound=n.ViewLostAndFound||E.ViewLostAndFound,n.ViewProps=n.ViewProps||E.ViewProps},w=(n,E,i="",a=void 0)=>{const l=n.Groups;i==""&&(i=f);const d={ID:0,PermissionUUID:f,GroupID:0,GroupUUID:f,CheckIn:!1,EditConvention:!1,EditRegistration:!1,EditOrganisation:!1,EditPaymentTransactions:!1,ManageUsers:!1,ManageViews:!1,ViewPaymentTransactions:!1,ViewRegistration:!1,ConfigureProps:!1,EditProps:!1,ViewProps:!1,ConfigureLostAndFound:!1,EditLostAndFound:!1,ViewLostAndFound:!1},_=N.OWNER_TYPE_CONVENTION,t=N.OWNER_TYPE_ORGANISATION;return l&&l.length>0&&l.forEach(P=>{P.Permission!==null&&(P.OwnerType==_&&(P.Permission.EditOrganisation=!1),E==null?O(d,P.Permission):E==s.GROUP_TYPE_SYSTEM||E==s.GROUP_TYPE_ADMIN?P.OwnerType==null&&O(d,P.Permission):E==s.GROUP_TYPE_ORGANISATION?(P.OwnerType==null||P.OwnerType==t&&P.OwnerUUID!=null&&P.OwnerUUID==i)&&O(d,P.Permission):E==s.GROUP_TYPE_CONVENTION&&(P.OwnerType==null||P.OwnerType==t&&P.OwnerUUID!=null&&(P.OwnerUUID==(a==null?void 0:a.OrganisationUUID)||a===void 0&&i===f)||P.OwnerType==_&&P.OwnerUUID!=null&&(P.OwnerUUID==i||a===void 0&&i===f))&&O(d,P.Permission))}),d};export{w as C,s as G,N as O};
