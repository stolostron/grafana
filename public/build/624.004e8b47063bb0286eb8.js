"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[624],{78770:(B,h,e)=>{e.d(h,{F:()=>d});var l=e(76932),a=e(31733),M=e(76067),R=e(25899);const d=({renderExpandedContent:m,...r})=>{const s=(0,M.wW)(t);return a.createElement(R.t,{renderExpandedContent:m?(x,y,P)=>a.createElement(a.Fragment,null,y!==P.length-1&&a.createElement("div",{className:(0,l.cx)(s.contentGuideline,s.guideline)}),m(x,y,P)):void 0,renderPrefixHeader:()=>a.createElement("div",{className:s.relative},a.createElement("div",{className:(0,l.cx)(s.headerGuideline,s.guideline)})),renderPrefixCell:(x,y,P)=>a.createElement("div",{className:s.relative},a.createElement("div",{className:(0,l.cx)(s.topGuideline,s.guideline)}),y!==P.length-1&&a.createElement("div",{className:(0,l.cx)(s.bottomGuideline,s.guideline)})),...r})},t=m=>({relative:(0,l.css)`
    position: relative;
    height: 100%;
  `,guideline:(0,l.css)`
    left: -19px;
    border-left: 1px solid ${m.colors.border.weak};
    position: absolute;

    ${m.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:(0,l.css)`
    width: 18px;
    border-bottom: 1px solid ${m.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:(0,l.css)`
    top: 50%;
    bottom: 0;
  `,contentGuideline:(0,l.css)`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:(0,l.css)`
    top: -17px;
    bottom: 0;
  `})},6302:(B,h,e)=>{e.d(h,{V:()=>M});var l=e(31733),a=e(49311);const M=({namespace:R,group:d})=>d?l.createElement(l.Fragment,null,R," ",l.createElement(a.J,{name:"angle-right"})," ",d):l.createElement(l.Fragment,null,R)},67477:(B,h,e)=>{e.d(h,{V:()=>t});var l=e(76932),a=e(31733),M=e(76067),R=e(58037),d=e(49311);const t=({rule:r})=>{const s=(0,M.wW)(m);return r.health==="err"||r.health==="error"?a.createElement(R.u,{theme:"error",content:r.lastError||"No error message provided."},a.createElement("div",{className:s.warn},a.createElement(d.J,{name:"exclamation-triangle"}),a.createElement("span",null,"error"))):a.createElement(a.Fragment,null,r.health)},m=r=>({warn:(0,l.css)`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: ${r.spacing(1)};

    color: ${r.colors.warning.text};
  `})},47918:(B,h,e)=>{e.d(h,{p:()=>x});var l=e(76932),a=e(31733),M=e(16528),R=e(76067),d=e(37739),t=e(89719),m=e(58126),r=e(96198),s=e(48859);const x=({rule:P,isDeleting:F,isCreating:H,isPaused:L})=>{const z=(0,R.wW)(y),{promRule:p}=P,Y=(0,a.useMemo)(()=>{if(p&&(0,r.x_)(p)&&p.alerts?.length&&p.state!==m.x_.Inactive){const W=p.activeAt?new Date(p.activeAt):(0,r.ub)(p);if(W)return a.createElement("span",{title:String(W),className:z.for},"for"," ",(0,M.vT)({start:W,end:new Date},!1))}return null},[p,z]);return F?a.createElement(d.K,{gap:1},a.createElement(t.$,null),"Deleting"):H?a.createElement(d.K,{gap:1},a.createElement(t.$,null),"Creating"):p&&(0,r.x_)(p)?a.createElement(d.K,{gap:1},a.createElement(s.l,{state:p.state,isPaused:L}),Y):p&&(0,r.OP)(p)?a.createElement(a.Fragment,null,"Recording rule"):a.createElement(a.Fragment,null,"n/a")},y=P=>({for:(0,l.css)`
    font-size: ${P.typography.bodySmall.fontSize};
    color: ${P.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},624:(B,h,e)=>{e.d(h,{i:()=>ve});var l=e(76932),a=e(83929),M=e(84195);function R(n,g){(0,M.Z)(2,arguments);var v=(0,a.Z)(n),f=(0,a.Z)(g);return v.getTime()<f.getTime()}var d=e(21059),t=e(31733),m=e(16528),r=e(74011),s=e(40137),x=e(76067),y=e(58037),P=e(21279),F=e(23213),H=e(98319),L=e(96198),z=e(25899),p=e(78770),Y=e(79695),W=e(6302),X=e(2482),w=e(69781),k=e(97890),Z=e(51343),q=e(5334),G=e(63424),_=e(37739),ee=e(67669),b=e(49311),te=e(90069),ne=e(42876),ae=e(42342),T=e(77398),le=e(84415),j=e(67451),J=e(66172),V=e(97503),Q=e(99825),oe=e(82854);const Ke=n=>window.matchMedia(`(max-width: ${n}px)`).matches,re=({rule:n,rulesSource:g})=>{const v=(0,ae.useDispatch)(),f=(0,k.TH)(),I=(0,ne.iG)(),A=(0,x.wW)(ie),[i,o]=(0,t.useState)(void 0),{namespace:c,group:E,rulerRule:C}=n,[u,D]=(0,t.useState)(),$=f.pathname+f.search,K=se(f.pathname),Re=(0,L.Pc)(n.rulerRule)&&!!n.rulerRule.grafana_alert.provenance,[he,Me]=(0,T.wp)(n,T.iY.Update),[ye,Pe]=(0,T.wp)(n,T.iY.Delete),[Ce,xe]=(0,T.wp)(n,T.iY.Duplicate),[Oe,Te]=(0,T.wp)(n,T.iY.ModifyExport),Ae=he&&Me,Ie=ye&&Pe,Le=Ce&&xe,We=Oe&&Te,S=[],U=[],$e=()=>{if(u&&u.rulerRule){const O=V.Zk((0,j.EG)(u.namespace.rulesSource),u.namespace.name,u.group.name,u.rulerRule);v((0,le.hS)(O,{navigateTo:K?"/alerting/list":void 0})),D(void 0)}},Ue=()=>(0,J.t6)(g,n),Be=(0,j.EG)(g);if(K||S.push(t.createElement(y.u,{placement:"top",content:"View"},t.createElement(Z.Qj,{className:A.button,title:"View",size:"sm",key:"view",variant:"secondary",icon:"eye",href:(0,J.V2)(g,n,$)}))),C){const O=V.Zk(Be,c.name,E.name,C);if(Ae){const N=(0,Q.u)(`/alerting/${encodeURIComponent(V.$V(O))}/edit`,{returnTo:$});S.push(t.createElement(y.u,{placement:"top",content:"Edit"},t.createElement(Z.Qj,{title:"Edit",className:A.button,size:"sm",key:"edit",variant:"secondary",icon:"pen",href:N})))}K&&S.push(t.createElement(q.m,{key:"copy",icon:"copy",onClipboardError:N=>{I.error("Error while copying URL",N)},className:A.button,size:"sm",getText:Ue},"Copy link to rule")),Le&&U.push(t.createElement(G.v.Item,{label:"Duplicate",icon:"copy",onClick:()=>o({identifier:O,isProvisioned:Re})})),We&&U.push(t.createElement(G.v.Item,{label:"Modify export",icon:"edit",url:(0,Q.u)(`/alerting/${encodeURIComponent(V.$V(O))}/modify-export`,{returnTo:f.pathname+f.search})})),Ie&&U.push(t.createElement(G.v.Item,{label:"Delete",icon:"trash-alt",onClick:()=>D(n)}))}return S.length||U.length?t.createElement(t.Fragment,null,t.createElement(_.K,{gap:1},S.map((O,N)=>t.createElement(t.Fragment,{key:N},O)),U.length>0&&t.createElement(ee.L,{overlay:t.createElement(G.v,null,U.map(O=>t.createElement(t.Fragment,{key:(0,w.uniqueId)("action_")},O)))},t.createElement(Z.zx,{variant:"secondary",size:"sm"},"More",t.createElement(b.J,{name:"angle-down"})))),!!u&&t.createElement(te.s,{isOpen:!0,title:"Delete rule",body:t.createElement("div",null,t.createElement("p",null,'Deleting "',t.createElement("strong",null,u.name),'" will permanently remove it from your alert rule list.'),t.createElement("p",null,"Are you sure you want to delete this rule?")),confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:$e,onDismiss:()=>D(void 0)}),i&&t.createElement(oe._,{identifier:i.identifier,isProvisioned:i.isProvisioned,onDismiss:()=>o(void 0)})):null};function se(n){return n.endsWith("/view")}const ie=n=>({button:(0,l.css)`
    padding: 0 ${n.spacing(2)};
  `});var ce=e(85498),de=e(79788);function ue({rule:n}){const g=(0,x.wW)(me),{exceedsLimit:v}=(0,t.useMemo)(()=>(0,de.f)(n.group.interval),[n.group.interval]);return v?t.createElement(y.u,{theme:"error",content:t.createElement("div",null,"A minimum evaluation interval of"," ",t.createElement("span",{className:g.globalLimitValue},ce.config.unifiedAlerting.minInterval)," has been configured in Grafana and will be used instead of the ",n.group.interval," interval configured for the Rule Group.")},t.createElement(b.J,{name:"stopwatch-slash",className:g.icon})):null}function me(n){return{globalLimitValue:(0,l.css)`
      font-weight: ${n.typography.fontWeightBold};
    `,icon:(0,l.css)`
      fill: ${n.colors.warning.text};
    `}}var Ee=e(425),pe=e(67477),ge=e(47918);const ve=({rules:n,className:g,showGuidelines:v=!1,emptyMessage:f="No rules found.",showGroupColumn:I=!1,showSummaryColumn:A=!1,showNextEvaluationColumn:i=!1})=>{const o=(0,x.wW)(fe),c=(0,l.cx)(o.wrapper,g,{[o.wrapperMargin]:v}),E=(0,t.useMemo)(()=>n.map((D,$)=>({id:`${D.namespace.name}-${D.group.name}-${D.name}-${$}`,data:D})),[n]),C=De(A,I,i);if(!n.length)return t.createElement("div",{className:(0,l.cx)(c,o.emptyMessage)},f);const u=v?p.F:z.t;return t.createElement("div",{className:c,"data-testid":"rules-table"},t.createElement(u,{cols:C,isExpandable:!0,items:E,renderExpandedContent:({data:D})=>t.createElement(Ee.Ii,{rule:D}),pagination:{itemsPerPage:P.gN},paginationStyles:o.pagination}))},fe=n=>({wrapperMargin:(0,l.css)`
    ${n.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:(0,l.css)`
    padding: ${n.spacing(1)};
  `,wrapper:(0,l.css)`
    width: auto;
    border-radius: ${n.shape.radius.default};
  `,pagination:(0,l.css)`
    display: flex;
    margin: 0;
    padding-top: ${n.spacing(1)};
    padding-bottom: ${n.spacing(.25)};
    justify-content: center;
    border-left: 1px solid ${n.colors.border.medium};
    border-right: 1px solid ${n.colors.border.medium};
    border-bottom: 1px solid ${n.colors.border.medium};
  `});function De(n,g,v){const{hasRuler:f,rulerRulesLoaded:I}=(0,F.h)(),A=(0,t.useCallback)(i=>{const o=i.promRule?.lastEvaluation&&(0,m.qb)(i.promRule.lastEvaluation),c=i.group.interval&&(0,m.jO)(i.group.interval);if(!o||!c||(0,L.E)(i))return;const E=(0,m.RA)(i.group.interval),C=Date.parse(i.promRule?.lastEvaluation||""),u=(0,m.Ks)(C,E);return R(u,new Date)?{humanized:`within ${(0,d.Z)(E)}`,fullDate:`within ${(0,d.Z)(E)}`}:{humanized:`in ${(0,r.CQ)(u).locale("en").fromNow(!0)}`,fullDate:(0,s.dq)(u,{format:"YYYY-MM-DD HH:mm:ss"})}},[]);return(0,t.useMemo)(()=>{const i=[{id:"state",label:"State",renderCell:({data:o})=>{const{namespace:c}=o,{rulesSource:E}=c,{promRule:C,rulerRule:u}=o,D=!!(f(E)&&I(E)&&C&&!u),$=!!(f(E)&&I(E)&&u&&!C),K=(0,L.E)(o);return t.createElement(ge.p,{rule:o,isDeleting:D,isCreating:$,isPaused:K})},size:"165px"},{id:"name",label:"Name",renderCell:({data:o})=>o.name,size:v?4:5},{id:"provisioned",label:"",renderCell:({data:o})=>{const c=o.rulerRule;return(0,L.Pc)(c)&&c.grafana_alert.provenance?t.createElement(Y.C0,null):null},size:"100px"},{id:"warnings",label:"",renderCell:({data:o})=>t.createElement(ue,{rule:o}),size:"45px"},{id:"health",label:"Health",renderCell:({data:{promRule:o,group:c}})=>o?t.createElement(pe.V,{rule:o}):null,size:"75px"}];return n&&i.push({id:"summary",label:"Summary",renderCell:({data:o})=>t.createElement(X.Z,{input:o.annotations[H.q6.summary]??""}),size:v?4:5}),v&&i.push({id:"nextEvaluation",label:"Next evaluation",renderCell:({data:o})=>{const c=A(o);return c&&t.createElement(y.u,{placement:"top",content:`${c?.fullDate}`,theme:"info"},t.createElement("span",null,c?.humanized))},size:2}),g&&i.push({id:"group",label:"Group",renderCell:({data:o})=>{const{namespace:c,group:E}=o;return E.name==="default"?t.createElement(W.V,{namespace:c.name}):t.createElement(W.V,{namespace:c.name,group:E.name})},size:5}),i.push({id:"actions",label:"Actions",renderCell:({data:o})=>t.createElement(re,{rule:o,rulesSource:o.namespace.rulesSource}),size:"200px"}),i},[n,g,v,f,I,A])}},23213:(B,h,e)=>{e.d(h,{h:()=>R});var l=e(31733),a=e(67451),M=e(68144);function R(){const d=(0,M._)(r=>r.rulerRules),t=(0,l.useCallback)(r=>{const s=typeof r=="string"?r:r.name;return s===a.GC||!!d[s]?.result},[d]),m=(0,l.useCallback)(r=>{const s=(0,a.EG)(r);return!!d[s]?.result},[d]);return{hasRuler:t,rulerRulesLoaded:m}}}}]);

//# sourceMappingURL=624.004e8b47063bb0286eb8.js.map