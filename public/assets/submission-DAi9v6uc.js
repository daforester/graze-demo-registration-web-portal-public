var e=(S=>(S.SUBMISSION_STATUS_NULL="",S.SUBMISSION_STATUS_INCOMPLETE="SUBMISSION_STATUS_INCOMPLETE",S.SUBMISSION_STATUS_OPEN="SUBMISSION_STATUS_OPEN",S.SUBMISSION_STATUS_OPEN_2="SUBMISSION_STATUS_OPEN_2",S.SUBMISSION_STATUS_LOCKED="SUBMISSION_STATUS_LOCKED",S.SUBMISSION_STATUS_LOCKED_2="SUBMISSION_STATUS_LOCKED_2",S.SUBMISSION_STATUS_ACCEPTED="SUBMISSION_STATUS_ACCEPTED",S.SUBMISSION_STATUS_COMPLETED="SUBMISSION_STATUS_COMPLETED",S.SUBMISSION_STATUS_REJECTED="SUBMISSION_STATUS_REJECTED",S.SUBMISSION_STATUS_INVALID="SUBMISSION_STATUS_INVALID",S.SUBMISSION_STATUS_CANCELLED="SUBMISSION_STATUS_CANCELLED",S))(e||{});const I=[{title:"Open",value:"SUBMISSION_STATUS_OPEN",icon:"mdi:mdi-pencil"},{title:"Locked",value:"SUBMISSION_STATUS_LOCKED",icon:"mdi:mdi-pencil-lock"},{title:"On Hold & Open",value:"SUBMISSION_STATUS_OPEN_2",icon:"mdi:mdi-pencil"},{title:"On Hold & Locked",value:"SUBMISSION_STATUS_LOCKED_2",icon:"mdi:mdi-pencil-lock"},{title:"Accepted",value:"SUBMISSION_STATUS_ACCEPTED",icon:"mdi:mdi-check"},{title:"Cancelled",value:"SUBMISSION_STATUS_CANCELLED",icon:"mdi:mdi-window-close"},{title:"Completed",value:"SUBMISSION_STATUS_COMPLETED",icon:"mdi:mdi-email-check"},{title:"Rejected",value:"SUBMISSION_STATUS_REJECTED",icon:"mdi:mdi-close-box"},{title:"Incomplete",value:"SUBMISSION_STATUS_INCOMPLETE",icon:"mdi:mdi-format-indent-increase"},{title:"Invalid",value:"SUBMISSION_STATUS_INVALID",icon:"mdi:mdi-alert-circle"}],_=(S,T=void 0)=>{switch(S){case"SUBMISSION_STATUS_ACCEPTED":return"Processing";case"SUBMISSION_STATUS_CANCELLED":return"Cancelled";case"SUBMISSION_STATUS_COMPLETED":return"Completed";case"SUBMISSION_STATUS_INCOMPLETE":return"Incomplete";case"SUBMISSION_STATUS_INVALID":return"Invalid";case"SUBMISSION_STATUS_LOCKED":return"Processing";case"SUBMISSION_STATUS_OPEN_2":return"Received";case"SUBMISSION_STATUS_LOCKED_2":return"Processing";case"":return"Unknown";case"SUBMISSION_STATUS_OPEN":return"Received";case"SUBMISSION_STATUS_REJECTED":return"Unsuccessful"}},U=S=>{switch(S){case"SUBMISSION_STATUS_ACCEPTED":return"Accepted";case"SUBMISSION_STATUS_CANCELLED":return"Cancelled";case"SUBMISSION_STATUS_COMPLETED":return"Completed";case"SUBMISSION_STATUS_INCOMPLETE":return"Incomplete";case"SUBMISSION_STATUS_INVALID":return"Invalid";case"SUBMISSION_STATUS_LOCKED":return"Locked";case"SUBMISSION_STATUS_OPEN_2":return"On Hold & Open";case"SUBMISSION_STATUS_LOCKED_2":return"On Hold & Locked";case"":return"Unknown";case"SUBMISSION_STATUS_OPEN":return"Open";case"SUBMISSION_STATUS_REJECTED":return"Rejected"}},O=S=>{switch(S){case"SUBMISSION_STATUS_ACCEPTED":return"text-orange-lighten-1";case"SUBMISSION_STATUS_CANCELLED":return"";case"SUBMISSION_STATUS_COMPLETED":return"text-green";case"SUBMISSION_STATUS_INCOMPLETE":return"text-purple";case"SUBMISSION_STATUS_INVALID":return"text-purple";case"SUBMISSION_STATUS_LOCKED":return"text-orange-darken-2";case"SUBMISSION_STATUS_LOCKED_2":return"text-orange-darken-2";case"":return"text-red";case"SUBMISSION_STATUS_OPEN":return"text-blue";case"SUBMISSION_STATUS_OPEN_2":return"text-blue";case"SUBMISSION_STATUS_REJECTED":return"text-red"}};export{e as S,_ as a,O as b,U as c,I as d};
