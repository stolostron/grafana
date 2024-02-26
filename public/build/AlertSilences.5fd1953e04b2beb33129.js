"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1783],{76244:(w,M,t)=>{t.d(M,{x:()=>D});var e=t(31733),p=t(42342),d=t(92089);function D(S){const P=(0,p.useDispatch)(),b=(0,e.useRef)(S);b.current=S,(0,e.useEffect)(()=>()=>{P((0,d.e)({cleanupAction:b.current}))},[P])}},78615:(w,M,t)=>{t.r(M),t.d(M,{default:()=>xt});var e=t(31733),p=t(97890),d=t(25111),D=t(8310),S=t(42342),P=t(22500),b=t(97923),N=t(98771),s=t(76932),R=t(69781),f=t(54126),C=t(24789),E=t(16528),$=t(5333),U=t(74011),j=t(85498),I=t(76067),se=t(97216),K=t(85765),Z=t(64516),le=t(28718),Q=t(51343),ce=t(76244),z=t(43764),oe=t(87768),H=t(68144),G=t(84415),W=t(10322),ie=t(2691),F=t(66172),y=t(39138),O=t(32901),T=t(38834),Y=t(41354);const J=({className:a})=>{const n=(0,I.wW)(V),r=(0,f.Gc)(),{control:o,register:l,formState:{errors:u}}=r,{fields:c=[],append:v,remove:i}=(0,f.Dq)({name:"matchers"});return e.createElement("div",{className:(0,s.cx)(a,n.wrapper)},e.createElement(K.g,{label:"Matching labels",required:!0},e.createElement("div",null,e.createElement("div",{className:n.matchers},c.map((h,m)=>e.createElement("div",{className:n.row,key:`${h.id}`,"data-testid":"matcher"},e.createElement(K.g,{label:"Label",invalid:!!u?.matchers?.[m]?.name,error:u?.matchers?.[m]?.name?.message},e.createElement(Z.I,{...l(`matchers.${m}.name`,{required:{value:!0,message:"Required."}}),defaultValue:h.name,placeholder:"label"})),e.createElement(K.g,{label:"Operator"},e.createElement(O.g,{control:o,render:({field:{onChange:A,ref:g,...x}})=>e.createElement(T.Ph,{...x,onChange:X=>A(X.value),className:n.matcherOptions,options:W.tA,"aria-label":"operator"}),defaultValue:h.operator||W.tA[0].value,name:`matchers.${m}.operator`,rules:{required:{value:!0,message:"Required."}}})),e.createElement(K.g,{label:"Value",invalid:!!u?.matchers?.[m]?.value,error:u?.matchers?.[m]?.value?.message},e.createElement(Z.I,{...l(`matchers.${m}.value`,{required:{value:!0,message:"Required."}}),defaultValue:h.value,placeholder:"value"})),c.length>1&&e.createElement(Y.h,{className:n.removeButton,tooltip:"Remove matcher",name:"trash-alt",onClick:()=>i(m)},"Remove")))),e.createElement(Q.zx,{type:"button",icon:"plus",variant:"secondary",onClick:()=>{const h={name:"",value:"",operator:z._M.equal};v(h)}},"Add matcher"))))},V=a=>({wrapper:(0,s.css)`
      margin-top: ${a.spacing(2)};
    `,row:(0,s.css)`
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      background-color: ${a.colors.background.secondary};
      padding: ${a.spacing(1)} ${a.spacing(1)} 0 ${a.spacing(1)};
      & > * + * {
        margin-left: ${a.spacing(2)};
      }
    `,removeButton:(0,s.css)`
      margin-left: ${a.spacing(1)};
      margin-top: ${a.spacing(2.5)};
    `,matcherOptions:(0,s.css)`
      min-width: 140px;
    `,matchers:(0,s.css)`
      max-width: ${a.breakpoints.values.sm}px;
      margin: ${a.spacing(1)} 0;
      padding-top: ${a.spacing(.5)};
    `}),B=J;var me=t(30791);const de=()=>{const{control:a,getValues:n}=(0,f.Gc)(),{field:{onChange:r,value:o},fieldState:{invalid:l}}=(0,f.bc)({name:"startsAt",control:a,rules:{validate:x=>n().endsAt>x}}),{field:{onChange:u,value:c},fieldState:{invalid:v}}=(0,f.bc)({name:"endsAt",control:a,rules:{validate:x=>n().startsAt<x}}),{field:{onChange:i,value:h}}=(0,f.bc)({name:"timeZone",control:a}),m=l||v,A=(0,U.CQ)(o),g=(0,U.CQ)(c);return e.createElement(K.g,{className:ue.timeRange,label:"Silence start and end",error:m?"To is before or the same as from":"",invalid:m},e.createElement(me.K,{value:{from:A,to:g,raw:{from:A,to:g}},timeZone:h,onChange:x=>{r((0,U.CQ)(x.from)),u((0,U.CQ)(x.to))},onChangeTimeZone:x=>i(x),hideTimeZone:!1,hideQuickRanges:!0,placeholder:"Select time range"}))},ue={timeRange:(0,s.css)`
    width: 400px;
  `};var ee=t(50248),te=t(61375),Ne=t(42460),Be=t(90233),he=t(71355),Ae=t(25899),pe=t(15881);const $e=({amSourceName:a,matchers:n})=>{const{useGetAlertmanagerAlertsQuery:r}=Ne.alertmanagerApi,o=(0,I.wW)(ye),l=We(),u=n.some(m=>m.value&&m.name),{currentData:c=[],isFetching:v,isError:i}=r({amSourceName:a,filter:{matchers:n}},{skip:!u,refetchOnMountOrArgChange:!0}),h=c.map(m=>({id:m.fingerprint,data:m}));return e.createElement("div",null,e.createElement("h4",{className:o.title},"Affected alert instances",h.length>0?e.createElement(ee.C,{className:o.badge,color:"blue",text:h.length}):null),!u&&e.createElement("span",null,"Add a valid matcher to see affected alerts"),i&&e.createElement(d.b,{title:"Preview not available",severity:"error"},"Error occured when generating affected alerts preview. Are you matchers valid?"),v&&e.createElement(te.u,{text:"Loading..."}),!v&&!i&&u&&e.createElement("div",{className:o.table},h.length>0?e.createElement(Ae.t,{items:h,isExpandable:!1,cols:l,pagination:{itemsPerPage:10}}):e.createElement("span",null,"No matching alert instances found")))};function We(){const a=(0,I.wW)(ye);return[{id:"state",label:"State",renderCell:function({data:r}){return e.createElement(pe.G,{state:r.status.state})},size:"120px",className:a.stateColumn},{id:"labels",label:"Labels",renderCell:function({data:r}){return e.createElement(he.s,{labels:r.labels,size:"sm"})},size:"auto"},{id:"created",label:"Created",renderCell:function({data:r}){return e.createElement(e.Fragment,null,(0,Be.gV)(r.startsAt)?"-":(0,U.CQ)(r.startsAt).format("YYYY-MM-DD HH:mm:ss"))},size:"180px"}]}const ye=a=>({table:(0,s.css)`
    max-width: ${a.breakpoints.values.lg}px;
  `,moreMatches:(0,s.css)`
    margin-top: ${a.spacing(1)};
  `,title:(0,s.css)`
    display: flex;
    align-items: center;
  `,badge:(0,s.css)`
    margin-left: ${a.spacing(1)};
  `,stateColumn:(0,s.css)`
    display: flex;
    align-items: center;
  `}),Le=a=>{const n={},r=a.get("comment"),o=a.getAll("matcher"),l=(0,ie.RT)(o);return l.length&&(n.matchers=l.map(W.cm)),r&&(n.comment=r),n},Ue=(a,n)=>{const r=new Date;if(n){const l=Date.parse(n.endsAt)<Date.now()?{start:r,end:(0,E.Ks)(r,{hours:2})}:{start:new Date(n.startsAt),end:new Date(n.endsAt)};return{id:n.id,startsAt:l.start.toISOString(),endsAt:l.end.toISOString(),comment:n.comment,createdBy:n.createdBy,duration:(0,E.vT)(l),isRegex:!1,matchers:n.matchers?.map(W.cm)||[],matcherName:"",matcherValue:"",timeZone:$.Ys}}else{const o=(0,E.Ks)(r,{hours:2});return{id:"",startsAt:r.toISOString(),endsAt:o.toISOString(),comment:`created ${(0,U.CQ)().format("YYYY-MM-DD HH:mm")}`,createdBy:j.config.bootData.user.name,duration:"2h",isRegex:!1,matchers:[{name:"",value:"",operator:z._M.equal}],matcherName:"",matcherValue:"",timeZone:$.Ys,...Le(a)}}},Ke=({silence:a,alertManagerSourceName:n})=>{const[r]=(0,oe.j)(),o=(0,e.useMemo)(()=>Ue(r,a),[a,r]),l=(0,f.cI)({defaultValues:o}),u=(0,S.useDispatch)(),c=(0,I.wW)(ze),[v,i]=(0,e.useState)(o.matchers.map(W._J)),{loading:h}=(0,H._)(L=>L.updateSilence);(0,ce.x)(L=>L.unifiedAlerting.updateSilence=y.oq);const{register:m,handleSubmit:A,formState:g,watch:x,setValue:X,clearErrors:Ct}=l,Dt=L=>{const{id:_,startsAt:re,endsAt:Mt,comment:Tt,createdBy:It,matchers:Ot}=L,bt=Ot.map(W._J),Re=(0,R.pickBy)({id:_,startsAt:re,endsAt:Mt,comment:Tt,createdBy:It,matchers:bt},Rt=>!!Rt);u((0,G.QY)({alertManagerSourceName:n,payload:Re,exitOnSave:!0,successMessage:`Silence ${Re.id?"updated":"created"}`}))},k=x("duration"),q=x("startsAt"),ne=x("endsAt"),Ie=x("matchers"),[Oe,be]=(0,e.useState)(k);(0,C.Z)(()=>{if((0,E.qb)(q)&&(0,E.qb)(ne))if(k!==Oe)X("endsAt",(0,U.CQ)((0,E.Ks)(new Date(q),(0,E.RA)(k))).toISOString()),be(k);else{const L=new Date(q).valueOf();if(new Date(ne).valueOf()>L){const re=(0,E.vT)({start:new Date(q),end:new Date(ne)});X("duration",re),be(re)}}},700,[Ct,k,ne,Oe,X,q]),(0,C.Z)(()=>{const L=Ie.filter(_=>_.name&&_.value).map(W._J);(0,R.isEqual)(v,L)||i(L)},700,[Ie]);const Pt=!!(j.config.bootData.user.isSignedIn&&j.config.bootData.user.name);return e.createElement(f.RV,{...l},e.createElement("form",{onSubmit:A(Dt)},e.createElement(se.C,{label:`${a?"Recreate silence":"Create silence"}`},e.createElement("div",{className:(0,s.cx)(c.flexRow,c.silencePeriod)},e.createElement(de,null),e.createElement(K.g,{label:"Duration",invalid:!!g.errors.duration,error:g.errors.duration&&(g.errors.duration.type==="required"?"Required field":g.errors.duration.message)},e.createElement(Z.I,{className:c.createdBy,...m("duration",{validate:L=>Object.keys((0,E.RA)(L)).length===0?"Invalid duration. Valid example: 1d 4h (Available units: y, M, w, d, h, m, s)":void 0}),id:"duration"}))),e.createElement(B,null),e.createElement(K.g,{className:(0,s.cx)(c.field,c.textArea),label:"Comment",required:!0,error:g.errors.comment?.message,invalid:!!g.errors.comment},e.createElement(le.K,{...m("comment",{required:{value:!0,message:"Required."}}),rows:5,placeholder:"Details about the silence"})),!Pt&&e.createElement(K.g,{className:(0,s.cx)(c.field,c.createdBy),label:"Created By",required:!0,error:g.errors.createdBy?.message,invalid:!!g.errors.createdBy},e.createElement(Z.I,{...m("createdBy",{required:{value:!0,message:"Required."}}),placeholder:"Who's creating the silence"})),e.createElement($e,{amSourceName:n,matchers:v})),e.createElement("div",{className:c.flexRow},h&&e.createElement(Q.zx,{disabled:!0,icon:"spinner",variant:"primary"},"Saving..."),!h&&e.createElement(Q.zx,{type:"submit"},"Save silence"),e.createElement(Q.Qj,{href:(0,F.eQ)("alerting/silences",n),variant:"secondary"},"Cancel"))))},ze=a=>({field:(0,s.css)`
    margin: ${a.spacing(1,0)};
  `,textArea:(0,s.css)`
    max-width: ${a.breakpoints.values.sm}px;
  `,createdBy:(0,s.css)`
    width: 200px;
  `,flexRow:(0,s.css)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * {
      margin-right: ${a.spacing(1)};
    }
  `,silencePeriod:(0,s.css)`
    max-width: ${a.breakpoints.values.sm}px;
  `}),Se=Ke;var ae=t(89026),ge=t(37739),Fe=t(5284),Ee=t(49311),Qe=t(34037),ve=t(297),fe=t(77398),we=t(76085);const xe=({className:a,...n})=>{const r=(0,I.wW)(Ye);return e.createElement(Q.zx,{variant:"secondary",size:"xs",className:(0,s.cx)(r.wrapper,a),...n})},Ye=a=>({wrapper:(0,s.css)`
    height: 24px;
    font-size: ${a.typography.bodySmall.fontSize};
  `});var Ze=t(74086),Ge=t(60196);const Ve=({matchers:a})=>{const n=(0,I.wW)(je);return e.createElement("div",null,e.createElement(Ge.P,{className:n.tags,tags:a.map(r=>`${r.name}${(0,W.zy)(r)}${r.value}`)}))},je=()=>({tags:(0,s.css)`
    justify-content: flex-start;
  `});var He=t(53567),Je=t(88511),Xe=t(56811),ke=t(81347);const qe=({alertManagerSourceName:a})=>{const n=(0,ke.QX)(a);return Xe.contextSrv.hasPermission(n.create)?e.createElement(Je.Z,{title:"You haven't created any silences yet",buttonIcon:"bell-slash",buttonLink:(0,F.eQ)("alerting/silence/new",a),buttonTitle:"Create silence"}):e.createElement(He._,{callToActionElement:e.createElement("div",null),message:"No silences found."})};var _e=t(37365),et=t(93820);const tt=({alert:a,className:n})=>{const[r,o]=(0,e.useState)(!0),l=(0,E.vT)({start:new Date(a.startsAt),end:new Date(a.endsAt)}),u=Object.entries(a.labels).reduce((c,[v,i])=>((v==="alertname"||v==="__alert_rule_title__")&&(c=i),c),"");return e.createElement(e.Fragment,null,e.createElement("tr",{className:n},e.createElement("td",null,e.createElement(et.U,{isCollapsed:r,onToggle:c=>o(c)})),e.createElement("td",null,e.createElement(pe.G,{state:a.status.state})),e.createElement("td",null,"for ",l," seconds"),e.createElement("td",null,u)),!r&&e.createElement("tr",{className:n},e.createElement("td",null),e.createElement("td",{colSpan:5},e.createElement(he.s,{labels:a.labels,size:"sm"}))))},at=({silencedAlerts:a})=>{const n=(0,I.wW)(_e.D),r=(0,I.wW)(nt);return a.length?e.createElement("table",{className:(0,s.cx)(n.table,r.tableMargin)},e.createElement("colgroup",null,e.createElement("col",{className:n.colExpand}),e.createElement("col",{className:r.colState}),e.createElement("col",null),e.createElement("col",{className:r.colName})),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,"State"),e.createElement("th",null),e.createElement("th",null,"Alert name"))),e.createElement("tbody",null,a.map((o,l)=>e.createElement(tt,{key:o.fingerprint,alert:o,className:l%2===0?n.evenRow:""})))):null},nt=a=>({tableMargin:(0,s.css)`
    margin-bottom: ${a.spacing(1)};
  `,colState:(0,s.css)`
    width: 110px;
  `,colName:(0,s.css)`
    width: 65%;
  `}),rt=at,st=({silence:a})=>{const{startsAt:n,endsAt:r,comment:o,createdBy:l,silencedAlerts:u}=a,c=(0,I.wW)(lt),v="YYYY-MM-DD HH:mm",i=ae.parse(n),h=ae.parse(r),m=(0,E.vT)({start:new Date(n),end:new Date(r)});return e.createElement("div",{className:c.container},e.createElement("div",{className:c.title},"Comment"),e.createElement("div",null,o),e.createElement("div",{className:c.title},"Schedule"),e.createElement("div",null,`${i?.format(v)} - ${h?.format(v)}`),e.createElement("div",{className:c.title},"Duration"),e.createElement("div",null," ",m),e.createElement("div",{className:c.title},"Created by"),e.createElement("div",null," ",l),e.createElement("div",{className:c.title},"Affected alerts"),e.createElement(rt,{silencedAlerts:u}))},lt=a=>({container:(0,s.css)`
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-row-gap: 1rem;
  `,title:(0,s.css)`
    color: ${a.colors.text.primary};
  `,row:(0,s.css)`
    margin: ${a.spacing(1,0)};
  `});var ct=t(68411);const ot={[z.As.Active]:"good",[z.As.Expired]:"neutral",[z.As.Pending]:"neutral"},it=({state:a})=>e.createElement(ct.i,{state:ot[a]},a);var mt=t(36667),dt=t(58037);const Ce=()=>(0,R.uniqueId)("query-string-"),ut=()=>{const[a,n]=(0,e.useState)(Ce()),[r,o]=(0,ve.K)(),{queryString:l}=(0,F.pF)(r),u=(0,I.wW)(gt),c=(0,R.debounce)(h=>{const m=h.target;o({queryString:m.value||null})},400),v=()=>{o({queryString:null,silenceState:null}),setTimeout(()=>n(Ce()))},i=l&&l.length>3?(0,W.Zh)(l).length===0:!1;return e.createElement("div",{className:u.flexRow},e.createElement(K.g,{className:u.rowChild,label:e.createElement(mt._,null,e.createElement(ge.K,{gap:.5},e.createElement("span",null,"Search by matchers"),e.createElement(dt.u,{content:e.createElement("div",null,"Filter silences by matchers using a comma separated list of matchers, ie:",e.createElement("pre",null,"severity=critical, instance=~cluster-us-.+"))},e.createElement(Ee.J,{name:"info-circle",size:"sm"})))),invalid:i,error:i?"Query must use valid matcher syntax":null},e.createElement(Z.I,{key:a,className:u.searchInput,prefix:e.createElement(Ee.J,{name:"search"}),onChange:c,defaultValue:l??"",placeholder:"Search","data-testid":"search-query-input"})),l&&e.createElement("div",{className:u.rowChild},e.createElement(Q.zx,{variant:"secondary",icon:"times",onClick:v},"Clear filters")))},gt=a=>({searchInput:(0,s.css)`
    width: 360px;
  `,flexRow:(0,s.css)`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: ${a.spacing(3)};
    border-bottom: 1px solid ${a.colors.border.medium};
  `,rowChild:(0,s.css)`
    margin-right: ${a.spacing(1)};
    margin-bottom: 0;
    max-height: 52px;
  `,fieldLabel:(0,s.css)`
    font-size: 12px;
    font-weight: 500;
  `}),Et=({silences:a,alertManagerAlerts:n,alertManagerSourceName:r})=>{const o=(0,I.wW)(Me),[l]=(0,ve.K)(),u=Pe(a,!1),c=Pe(a,!0),{silenceState:v}=(0,F.pF)(l),i=v===z.As.Expired,h=(0,e.useMemo)(()=>{const A=g=>n.filter(x=>x.status.silencedBy.includes(g));return u.map(g=>{const x=A(g.id);return{id:g.id,data:{...g,silencedAlerts:x}}})},[u,n]),m=(0,e.useMemo)(()=>{const A=g=>n.filter(x=>x.status.silencedBy.includes(g));return c.map(g=>{const x=A(g.id);return{id:g.id,data:{...g,silencedAlerts:x}}})},[c,n]);return e.createElement("div",{"data-testid":"silences-table"},!!a.length&&e.createElement(ge.K,{direction:"column"},e.createElement(ut,null),e.createElement(we.q,{actions:[fe.oI.CreateSilence]},e.createElement("div",{className:o.topButtonContainer},e.createElement(Q.Qj,{href:(0,F.eQ)("/alerting/silence/new",r),icon:"plus"},"Add Silence"))),e.createElement(De,{items:h,alertManagerSourceName:r,dataTestId:"not-expired-table"}),m.length>0&&e.createElement(Fe.s,{label:`Expired silences (${m.length})`,isOpen:i},e.createElement("div",{className:o.callout},e.createElement(Ee.J,{className:o.calloutIcon,name:"info-circle"}),e.createElement("span",null,"Expired silences are automatically deleted after 5 days.")),e.createElement(De,{items:m,alertManagerSourceName:r,dataTestId:"expired-table"}))),!a.length&&e.createElement(qe,{alertManagerSourceName:r}))};function De({items:a,alertManagerSourceName:n,dataTestId:r}){const o=vt(n);return a.length?e.createElement(Ae.t,{pagination:{itemsPerPage:25},items:a,cols:o,isExpandable:!0,dataTestId:r,renderExpandedContent:({data:l})=>e.createElement(st,{silence:l})}):e.createElement(e.Fragment,null,"No matching silences found")}const Pe=(a,n=!1)=>{const[r]=(0,ve.K)();return(0,e.useMemo)(()=>{const{queryString:o}=(0,F.pF)(r),l=r?.silenceIds;return a.filter(u=>typeof l=="string"&&!l.split(",").includes(u.id)||o&&!(0,W.Zh)(o).every(i=>u.matchers?.some(({name:h,value:m,isEqual:A,isRegex:g})=>i.name===h&&i.value===m&&i.isEqual===A&&i.isRegex===g))?!1:n?u.status.state===z.As.Expired:u.status.state!==z.As.Expired)},[r,a,n])},Me=a=>({topButtonContainer:(0,s.css)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `,addNewSilence:(0,s.css)`
    margin: ${a.spacing(2,0)};
  `,callout:(0,s.css)`
    background-color: ${a.colors.background.secondary};
    border-top: 3px solid ${a.colors.info.border};
    border-radius: ${a.shape.radius.default};
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * {
      margin-left: ${a.spacing(1)};
    }
  `,calloutIcon:(0,s.css)`
    color: ${a.colors.info.text};
  `,editButton:(0,s.css)`
    margin-left: ${a.spacing(.5)};
  `});function vt(a){const n=(0,S.useDispatch)(),r=(0,I.wW)(Me),[o,l]=(0,fe.RA)(fe.oI.UpdateSilence);return(0,e.useMemo)(()=>{const u=v=>{n((0,G.yO)(a,v))},c=[{id:"state",label:"State",renderCell:function({data:{status:i}}){return e.createElement(it,{state:i.state})},size:4},{id:"matchers",label:"Matching labels",renderCell:function({data:{matchers:i}}){return e.createElement(Ve,{matchers:i||[]})},size:10},{id:"alerts",label:"Alerts",renderCell:function({data:{silencedAlerts:i}}){return e.createElement("span",{"data-testid":"alerts"},i.length)},size:4},{id:"schedule",label:"Schedule",renderCell:function({data:{startsAt:i,endsAt:h}}){const m=ae.parse(i),A=ae.parse(h),g="YYYY-MM-DD HH:mm";return e.createElement(e.Fragment,null," ",m?.format(g)," ","-",A?.format(g))},size:7}];return o&&l&&c.push({id:"actions",label:"Actions",renderCell:function({data:i}){return e.createElement(ge.K,{gap:.5},i.status.state==="expired"?e.createElement(Qe.r,{href:(0,F.eQ)(`/alerting/silence/${i.id}/edit`,a)},e.createElement(xe,{icon:"sync"},"Recreate")):e.createElement(xe,{icon:"bell",onClick:()=>u(i.id)},"Unsilence"),i.status.state!=="expired"&&e.createElement(Ze.A,{className:r.editButton,to:(0,F.eQ)(`/alerting/silence/${i.id}/edit`,a),icon:"pen",tooltip:"edit"}))},size:5}),c},[a,n,r.editButton,l,o])}const ft=Et,Te={icon:"bell-slash"};function ht(){const{isExact:a,path:n}=(0,p.$B)(),[r,o]=(0,e.useState)();return(0,e.useEffect)(()=>{n==="/alerting/silence/new"?o({...Te,id:"silence-new",text:"Add silence"}):n==="/alerting/silence/:id/edit"&&o({...Te,id:"silence-edit",text:"Edit silence"})},[n,a]),r}var At=t(1203),pt=t(98319);const yt=()=>{const{selectedAlertmanager:a}=(0,At.ZA)(),n=(0,S.useDispatch)(),r=(0,H._)(A=>A.silences),o=(0,H._)(A=>A.amAlerts),l=a?o[a]||y.oq:void 0,{currentData:u}=P.T.useDiscoverAmFeaturesQuery({amSourceName:a??""},{skip:!a});(0,e.useEffect)(()=>{function A(){a&&(n((0,G.je)(a)),n((0,G.dB)(a)))}A();const g=setInterval(()=>A,pt.cm);return()=>{clearInterval(g)}},[a,n]);const{result:c,loading:v,error:i}=a&&r[a]||y.oq,h=(0,e.useCallback)(A=>c&&c.find(g=>g.id===A),[c]),m=i?.message?.includes("the Alertmanager is not configured")&&u?.lazyConfigInit;return a?e.createElement(e.Fragment,null,e.createElement(N.u,{currentAlertmanager:a}),m&&e.createElement(d.b,{title:"The selected Alertmanager has no configuration",severity:"warning"},"Create a new contact point to create a configuration using the default values or contact your administrator to set up the Alertmanager."),i&&!v&&!m&&e.createElement(d.b,{severity:"error",title:"Error loading silences"},i.message||"Unknown error."),l?.error&&!l?.loading&&!m&&e.createElement(d.b,{severity:"error",title:"Error loading Alertmanager alerts"},l.error?.message||"Unknown error."),c&&!i&&e.createElement(p.rs,null,e.createElement(p.AW,{exact:!0,path:"/alerting/silences"},e.createElement(ft,{silences:c,alertManagerAlerts:l?.result??[],alertManagerSourceName:a})),e.createElement(p.AW,{exact:!0,path:"/alerting/silence/new"},e.createElement(Se,{alertManagerSourceName:a})),e.createElement(p.AW,{exact:!0,path:"/alerting/silence/:id/edit"},({match:A})=>A?.params.id&&e.createElement(Se,{silence:h(A.params.id),alertManagerSourceName:a})))):null};function St(){const a=ht();return e.createElement(b.O,{navId:"silences",pageNav:a,accessType:"instance"},e.createElement(yt,null))}const xt=(0,D.Pf)(St,{style:"page"})},97923:(w,M,t)=>{t.d(M,{J:()=>G,O:()=>W});var e=t(31733),p=t(56423),d=t(50186),D=t(85498),S=t(94746),P=t(76932),b=t(50370),N=t(76067),s=t(79106),R=t(58037),f=t(51343),C=t(25111);const E=({localStoreKey:y,startClosed:O=!1,severity:T="error",collapseText:Y,collapseTooltip:J,collapseJustify:V="flex-end",alertTitle:B,children:me})=>{const de=(0,N.l4)(),ue=$(de,T),[ee,te]=(0,b.Z)(y,O);return e.createElement(e.Fragment,null,ee&&e.createElement(s.Lh,{justify:V},e.createElement(R.u,{content:J,placement:"bottom"},e.createElement(f.zx,{fill:"text",variant:"secondary",icon:(0,C.j)(T),className:ue.warningButton,onClick:()=>te(!1)},Y))),!ee&&e.createElement(C.b,{severity:T,title:B,onRemove:()=>te(!0)},me))},$=(y,O)=>{const T=y.colors[O];return{warningButton:(0,P.css)({color:T.text,"&:hover":{background:T.transparent}})}},U="grafana.unifiedalerting.upgrade.previewNotice",j=()=>D.config.unifiedAlertingEnabled||!D.config.featureToggles.alertingPreviewUpgrade?null:e.createElement(E,{localStoreKey:U,alertTitle:"This is a preview of the upgraded Grafana Alerting",collapseText:"Grafana Alerting Preview",collapseTooltip:"Show preview warning",severity:"warning"},e.createElement("p",null,"No rules are being evaluated and legacy alerting is still running.",e.createElement("br",null),"Please contact your administrator to upgrade permanently."),e.createElement(S.h,{external:!0,href:"https://grafana.com/docs/grafana/latest/alerting/set-up/migrating-alerts/"},"Read about upgrading"));var I=t(1203),se=t(41164),K=t(38834),Z=t(67451);function le(y){return y.name===Z.GC?"Grafana":y.name.slice(0,37)}const Q=({disabled:y=!1})=>{const O=(0,N.wW)(ce),{selectedAlertmanager:T,availableAlertManagers:Y,setSelectedAlertmanager:J}=(0,I.ZA)(),V=(0,e.useMemo)(()=>Y.map(B=>({label:le(B),value:B.name,imgUrl:B.imgUrl,meta:B.meta})),[Y]);return e.createElement(se._,{className:O.field,label:y?"Alertmanager":"Choose Alertmanager",disabled:y||V.length===1,"data-testid":"alertmanager-picker"},e.createElement(K.Ph,{"aria-label":y?"Alertmanager":"Choose Alertmanager",width:29,className:"ds-picker select-container",backspaceRemovesValue:!1,onChange:B=>{B?.value&&J(B.value)},options:V,maxMenuHeight:500,noOptionsMessage:"No datasources found",value:T,getOptionLabel:B=>B.label}))},ce=y=>({field:(0,P.css)`
    margin: 0;
  `}),z=()=>e.createElement(C.b,{title:"No Alertmanager found",severity:"warning"},"We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."),oe=()=>e.createElement(C.b,{title:"Selected Alertmanager not found.",severity:"warning"},"The selected Alertmanager no longer exists or you may not have permission to access it. You can select a different Alertmanager from the dropdown."),H=({availableAlertManagers:y})=>{const O=y.length>0;return e.createElement("div",null,O?e.createElement(oe,null):e.createElement(z,null))},G=({children:y,isLoading:O,...T})=>e.createElement(d.T,{...T},e.createElement(d.T.Contents,{isLoading:O},e.createElement("div",null,e.createElement(j,null),y))),W=({children:y,accessType:O,...T})=>{const Y=ie();return e.createElement(I.h5,{accessType:O},e.createElement(G,{...T,actions:e.createElement(Q,{disabled:Y})},e.createElement(F,null,y)))};function ie(){const y=(0,p.Z)();return["/edit","/new"].some(T=>y?.pathname?.includes(T))}const F=({children:y})=>{const{availableAlertManagers:O,selectedAlertmanager:T}=(0,I.ZA)();return T?e.createElement(e.Fragment,null,y):e.createElement(H,{availableAlertManagers:O})}},76085:(w,M,t)=>{t.d(M,{q:()=>S});var e=t(69781),p=t.n(e),d=t(31733),D=t(77398);const S=({actions:f,children:C})=>{const E=(0,e.filter)(f,s),$=(0,e.filter)(f,R);return E.length?d.createElement(P,{actions:E},C):$.length?d.createElement(b,{actions:$},C):null},P=({actions:f,children:C})=>{const E=(0,D.Mz)();return N(E,f)?d.createElement(d.Fragment,null,C):null},b=({actions:f,children:C})=>{const E=(0,D.K_)();return N(E,f)?d.createElement(d.Fragment,null,C):null};function N(f,C){return(0,e.chain)(f).pick(C).values().value().some(([E,$])=>$===!0)}function s(f){return Object.values(D.oI).includes(f)}function R(f){return Object.values(D.jU).includes(f)}},98771:(w,M,t)=>{t.d(M,{u:()=>N});var e=t(76932),p=t(31733),d=t(76067),D=t(25111),S=t(43764),P=t(42460),b=t(67451);function N({currentAlertmanager:R}){const f=(0,d.wW)(s),C=R===b.GC,{currentData:E}=P.alertmanagerApi.endpoints.getAlertmanagerChoiceStatus.useQuery(void 0,{skip:!C});if(!(E?.alertmanagersChoice&&[S.TE.External,S.TE.All].includes(E?.alertmanagersChoice))||!C)return null;const U=E.numExternalAlertmanagers>0;return E.alertmanagersChoice===S.TE.External?p.createElement(D.b,{title:"Grafana alerts are not delivered to Grafana Alertmanager"},"Grafana is configured to send alerts to external Alertmanagers only. Changing Grafana Alertmanager configuration will not affect delivery of your alerts.",p.createElement("div",{className:f.adminHint},"To change your Alertmanager setup, go to the Alerting Admin page. If you do not have access, contact your Administrator.")):E.alertmanagersChoice===S.TE.All&&U?p.createElement(D.b,{title:"You have additional Alertmanagers to configure",severity:"warning"},"Ensure you make configuration changes in the correct Alertmanagers; both internal and external. Changing one will not affect the others.",p.createElement("div",{className:f.adminHint},"To change your Alertmanager setup, go to the Alerting Admin page. If you do not have access, contact your Administrator.")):null}const s=R=>({adminHint:(0,e.css)`
    font-size: ${R.typography.bodySmall.fontSize};
    font-weight: ${R.typography.bodySmall.fontWeight};
  `})},74086:(w,M,t)=>{t.d(M,{A:()=>D});var e=t(31733),p=t(58037),d=t(51343);const D=({tooltip:S,icon:P,to:b,target:N,onClick:s,className:R,tooltipPlacement:f="top",...C})=>{const E=typeof S=="string"?S:void 0;return e.createElement(p.u,{content:S,placement:f},b?e.createElement(d.Qj,{variant:"secondary",fill:"text",icon:P,href:b,size:"sm",target:N,...C,"aria-label":E}):e.createElement(d.zx,{className:R,variant:"secondary",fill:"text",size:"sm",icon:P,type:"button",onClick:s,...C,"aria-label":E}))}},15881:(w,M,t)=>{t.d(M,{G:()=>S});var e=t(31733),p=t(43764),d=t(68411);const D={[p.Z9.Active]:"bad",[p.Z9.Unprocessed]:"neutral",[p.Z9.Suppressed]:"info"},S=({state:P})=>e.createElement(d.i,{state:D[P]},P)},87768:(w,M,t)=>{t.d(M,{j:()=>D});var e=t(31733),p=t(97890),d=t(19690);function D(){const{search:S}=(0,p.TH)(),P=(0,e.useMemo)(()=>new URLSearchParams(S),[S]),b=(0,e.useCallback)((N,s)=>{d.E1.partial(N,s)},[]);return[P,b]}},37365:(w,M,t)=>{t.d(M,{D:()=>p});var e=t(76932);const p=d=>({table:(0,e.css)`
    width: 100%;
    border-radius: ${d.shape.radius.default};
    border: solid 1px ${d.colors.border.weak};
    background-color: ${d.colors.background.secondary};

    th {
      padding: ${d.spacing(1)};
    }

    td {
      padding: 0 ${d.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,evenRow:(0,e.css)`
    background-color: ${d.colors.background.primary};
  `,colExpand:(0,e.css)`
    width: 36px;
  `,nameCell:(0,e.css)`
    gap: ${d.spacing(1)};
  `,actionsCell:(0,e.css)`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${d.spacing(.5)};
    }
  `})}}]);

//# sourceMappingURL=AlertSilences.5fd1953e04b2beb33129.js.map