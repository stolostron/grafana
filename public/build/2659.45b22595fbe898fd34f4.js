"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2659],{2659:(I,g,t)=>{t.r(g),t.d(g,{RuleViewer:()=>K,default:()=>q});var l=t(76932),e=t(31733),m=t(83870),f=t(69391),u=t(76067),d=t(25111),v=t(61375),r=t(37739),p=t(49311),o=t(36717),i=t(79106),E=t(51343),P=t(27218),M=t(41354),h=t(21279),C=t(17415),s=t(26073),$=t(67451),R=t(97503),W=t(96198),w=t(71355),y=t(24507),S=t(79695),O=t(90644),Q=t(51320),H=t(23113),J=t(55993),j=t(18940);const G=({group:a})=>{const c=a.source_tenants??[];return e.createElement(y.C,{label:"Tenant sources"},e.createElement(e.Fragment,null,c.map(D=>e.createElement("div",{key:D},D))))};var X=t(85816),Z=t(67477),Y=t(47918),b=t(72385);const U="Could not find data source for rule",B="Could not view rule",x="View rule";function K({match:a}){const c=(0,u.wW)(N),[D,_]=(0,m.Z)(!1),A=(0,e.useMemo)(()=>{const V=R.s4(a.params);if(!V)throw new Error("Rule ID is required");return R.Qc(V,!0)},[a.params]),{loading:ee,error:L,result:n}=(0,C.HO)({ruleIdentifier:A}),z=(0,s.$9)(n?.annotations||{});if(!A?.ruleSourceName)return e.createElement(O.$,{title:x},e.createElement(d.b,{title:B},e.createElement("details",{className:c.errorMessage},U)));const T=(0,$.o_)(A.ruleSourceName);if(ee)return e.createElement(O.$,{title:x},e.createElement(v.u,{text:"Loading rule..."}));if(L||!T)return e.createElement(d.b,{title:B},e.createElement("details",{className:c.errorMessage},(0,f.kW)(L)?L.message:U,e.createElement("br",null)));if(!n)return e.createElement(O.$,{title:x},e.createElement("span",null,"Rule could not be found."));const F=(0,W.Jq)(n.group),te=(0,W.Pc)(n.rulerRule)&&!!n.rulerRule.grafana_alert.provenance;return e.createElement(O.$,{wrapInContent:!1,title:x,renderTitle:()=>e.createElement(r.K,{direction:"row",alignItems:"flex-start",gap:1},e.createElement(p.J,{name:"bell",size:"xl"}),e.createElement(o.x,{variant:"h3"},n.name),e.createElement(Y.p,{rule:n,isCreating:!1,isDeleting:!1}))},F&&e.createElement(d.b,{severity:"info",title:"This rule is part of a federated rule group."},e.createElement(i.wc,null,"Federated rule groups are currently an experimental feature.",e.createElement(E.zx,{fill:"text",icon:"book"},e.createElement("a",{href:"https://grafana.com/docs/metrics-enterprise/latest/tenant-management/tenant-federation/#cross-tenant-alerting-and-recording-rule-federation"},"Read documentation")))),te&&e.createElement(S.Xq,{resource:S.Uv.AlertRule}),e.createElement(e.Fragment,null,e.createElement(Q.f,{rule:n,rulesSource:T,isViewMode:!0}),e.createElement("div",{className:c.details},e.createElement("div",{className:c.leftSide},n.promRule&&e.createElement(y.C,{label:"Health",horizontal:!0},e.createElement(Z.V,{rule:n.promRule})),!!n.labels&&!!Object.keys(n.labels).length&&e.createElement(y.C,{label:"Labels",horizontal:!0},e.createElement(w.s,{labels:n.labels})),e.createElement(j.C,{rulesSource:T,rule:n,annotations:z}),e.createElement(H.J,{annotations:z})),e.createElement("div",{className:c.rightSide},e.createElement(J.C,{rule:n,rulesSource:T}),F&&e.createElement(G,{group:n.group}),e.createElement(y.C,{label:"Namespace / Group",className:c.rightSideDetails},n.namespace.name," / ",n.group.name),(0,W.Pc)(n.rulerRule)&&e.createElement(k,{rule:n.rulerRule.grafana_alert}))),e.createElement("div",null,e.createElement(y.C,{label:"Matching instances",horizontal:!0},e.createElement(X.M,{rule:n,pagination:{itemsPerPage:h.gN},enableFiltering:!0})))),e.createElement(P.U,{label:"Query & Results",isOpen:D,onToggle:_,collapsible:!0,className:c.collapse},D&&e.createElement(b.a,{rule:n})))}function k({rule:a}){const c=(0,u.wW)(N),D=()=>navigator.clipboard&&navigator.clipboard.writeText(a.uid);return e.createElement(y.C,{label:"Rule UID",childrenWrapperClassName:c.ruleUid},a.uid," ",e.createElement(M.h,{name:"copy",onClick:D,tooltip:"Copy rule UID"}))}const N=a=>({errorMessage:(0,l.css)`
      white-space: pre-wrap;
    `,queries:(0,l.css)`
      height: 100%;
      width: 100%;
    `,collapse:(0,l.css)`
      margin-top: ${a.spacing(2)};
      border-color: ${a.colors.border.weak};
      border-radius: ${a.shape.radius.default};
    `,queriesTitle:(0,l.css)`
      padding: ${a.spacing(2,.5)};
      font-size: ${a.typography.h5.fontSize};
      font-weight: ${a.typography.fontWeightBold};
      font-family: ${a.typography.h5.fontFamily};
    `,query:(0,l.css)`
      border-bottom: 1px solid ${a.colors.border.medium};
      padding: ${a.spacing(2)};
    `,queryWarning:(0,l.css)`
      margin: ${a.spacing(4,0)};
    `,title:(0,l.css)`
      font-size: ${a.typography.h4.fontSize};
      font-weight: ${a.typography.fontWeightBold};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `,details:(0,l.css)`
      display: flex;
      flex-direction: row;
      gap: ${a.spacing(4)};
    `,leftSide:(0,l.css)`
      flex: 1;
      overflow: hidden;
    `,rightSide:(0,l.css)`
      padding-right: ${a.spacing(3)};

      max-width: 360px;
      word-break: break-all;
      overflow: hidden;
    `,rightSideDetails:(0,l.css)`
      & > div:first-child {
        width: auto;
      }
    `,labels:(0,l.css)`
      justify-content: flex-start;
    `,ruleUid:(0,l.css)`
      display: flex;
      align-items: center;
      gap: ${a.spacing(1)};
    `}),q=K},90644:(I,g,t)=>{t.d(g,{$:()=>d});var l=t(76932),e=t(31733),m=t(76067),f=t(50186);const u={icon:"bell",id:"alert-rule-view"};function d(o){const{wrapInContent:i=!0,children:E,title:P,renderTitle:M}=o,h=(0,m.wW)(r);return e.createElement(f.T,{pageNav:{...u,text:P},renderTitle:M,navId:"alert-list"},e.createElement(f.T.Contents,null,e.createElement("div",{className:h.content},i?e.createElement(v,{...o}):E)))}function v({children:o,padding:i=2}){const E=(0,m.wW)(p(i));return e.createElement("div",{className:E.wrapper},o)}const r=o=>({content:(0,l.css)`
      max-width: ${o.breakpoints.values.xxl}px;
    `}),p=o=>i=>({wrapper:(0,l.css)`
      background: ${i.colors.background.primary};
      border: 1px solid ${i.colors.border.weak};
      border-radius: ${i.shape.radius.default};
      padding: ${i.spacing(o)};
    `})},67477:(I,g,t)=>{t.d(g,{V:()=>d});var l=t(76932),e=t(31733),m=t(76067),f=t(58037),u=t(49311);const d=({rule:r})=>{const p=(0,m.wW)(v);return r.health==="err"||r.health==="error"?e.createElement(f.u,{theme:"error",content:r.lastError||"No error message provided."},e.createElement("div",{className:p.warn},e.createElement(u.J,{name:"exclamation-triangle"}),e.createElement("span",null,"error"))):e.createElement(e.Fragment,null,r.health)},v=r=>({warn:(0,l.css)`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: ${r.spacing(1)};

    color: ${r.colors.warning.text};
  `})},47918:(I,g,t)=>{t.d(g,{p:()=>o});var l=t(76932),e=t(31733),m=t(16528),f=t(76067),u=t(37739),d=t(89719),v=t(58126),r=t(96198),p=t(48859);const o=({rule:E,isDeleting:P,isCreating:M,isPaused:h})=>{const C=(0,f.wW)(i),{promRule:s}=E,$=(0,e.useMemo)(()=>{if(s&&(0,r.x_)(s)&&s.alerts?.length&&s.state!==v.x_.Inactive){const R=s.activeAt?new Date(s.activeAt):(0,r.ub)(s);if(R)return e.createElement("span",{title:String(R),className:C.for},"for"," ",(0,m.vT)({start:R,end:new Date},!1))}return null},[s,C]);return P?e.createElement(u.K,{gap:1},e.createElement(d.$,null),"Deleting"):M?e.createElement(u.K,{gap:1},e.createElement(d.$,null),"Creating"):s&&(0,r.x_)(s)?e.createElement(u.K,{gap:1},e.createElement(p.l,{state:s.state,isPaused:h}),$):s&&(0,r.OP)(s)?e.createElement(e.Fragment,null,"Recording rule"):e.createElement(e.Fragment,null,"n/a")},i=E=>({for:(0,l.css)`
    font-size: ${E.typography.bodySmall.fontSize};
    color: ${E.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})}}]);

//# sourceMappingURL=2659.45b22595fbe898fd34f4.js.map