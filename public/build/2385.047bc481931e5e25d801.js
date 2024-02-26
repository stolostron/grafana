"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2385],{72385:(xe,V,c)=>{c.d(V,{a:()=>ve});var j=c(16826),a=c(31733),A=c(38605),k=c(20298),C=c(85498),D=c(25111),d=c(76932),U=c(94028),N=c(69781),E=c(76067),R=c(37739),M=c(50248),O=c(28197),b=c(13461),y=c(26894),$=c(74201),P=c(3406),z=c(539),T=c(74011),H=c(91977),L=c(35557),Z=c(51343),K=c(75923),G=c(71713);const J=4;function Y({data:e,model:t,thresholds:r,dsSettings:n,relativeTimeRange:s,onTimeRangeChange:l,className:m}){const o=(0,E.wW)(q),i=(0,b.j)(t),f=(0,a.useCallback)(u=>{const v=(0,T.CQ)().unix()-u.unix();if(s){const x=s.from-s.to;l({from:v+x,to:v})}},[l,s]),p=(0,a.useCallback)(u=>u===0?(0,T.CQ)():(0,T.CQ)().subtract(u,"seconds"),[]);if(!e)return null;const g=K.Vt.hasAccessToExplore();return a.createElement("div",{className:m},a.createElement("div",{className:o.header},a.createElement("div",{className:o.actions},!i&&s?a.createElement(L.x,{date:p(s.to),onChange:f,maxDate:new Date}):null,g&&!i&&a.createElement(Z.Qj,{size:"md",variant:"secondary",icon:"compass",target:"_blank",href:X(n,t)},"View in Explore"))),a.createElement(G.l,{data:e,thresholds:r?.config,thresholdsType:r?.mode}))}function X(e,t){const{uid:r,type:n}=e,{refId:s,...l}=t;return H.Cj.renderUrl(`${C.config.appSubUrl}/explore`,{left:JSON.stringify({datasource:e.uid,queries:[{refId:"A",...l,datasource:{type:n,uid:r}}],range:{from:"now-1h",to:"now"}})})}const q=e=>({header:(0,d.css)`
      height: ${e.spacing(J)};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      white-space: nowrap;
      margin-bottom: ${e.spacing(2)};
    `,refId:(0,d.css)`
      font-weight: ${e.typography.fontWeightMedium};
      color: ${e.colors.text.link};
      overflow: hidden;
    `,dataSource:(0,d.css)`
      margin-left: ${e.spacing(1)};
      font-style: italic;
      color: ${e.colors.text.secondary};
    `,actions:(0,d.css)`
      display: flex;
      align-items: center;
    `,errorMessage:(0,d.css)`
      white-space: pre-wrap;
    `});function _({queries:e,condition:t,evalDataByQuery:r={},evalTimeRanges:n={},onTimeRangeChange:s}){const l=(0,N.keyBy)(Object.values(C.config.datasources),p=>p.uid),m=e.filter(p=>!(0,b.j)(p.model)),o=e.filter(p=>(0,b.j)(p.model)),i=(0,E.wW)(S),f=(0,z.Fu)(e);return a.createElement(R.K,{gap:2,direction:"column"},a.createElement("div",{className:i.maxWidthContainer},a.createElement(R.K,{gap:2,wrap:"wrap","data-testid":"queries-container"},m.map(({model:p,relativeTimeRange:g,refId:u,datasourceUid:v},x)=>{const ye=l[v];return a.createElement(I,{key:x,refId:u,isAlertCondition:t===u,model:p,relativeTimeRange:g,evalTimeRange:n[u],dataSource:ye,thresholds:f[u],queryData:r[u],onEvalTimeRangeChange:Ee=>s(u,Ee)})}))),a.createElement("div",{className:i.maxWidthContainer},a.createElement(R.K,{gap:1,wrap:"wrap","data-testid":"expressions-container"},o.map(({model:p,refId:g,datasourceUid:u},v)=>{const x=l[u];return(0,b.j)(p)&&a.createElement(ae,{key:v,refId:g,isAlertCondition:t===g,model:p,dataSource:x,evalData:r[g]})}))))}function I({refId:e,relativeTimeRange:t,thresholds:r,model:n,dataSource:s,queryData:l,evalTimeRange:m,onEvalTimeRangeChange:o}){const i=(0,E.wW)(ee),f=[s?.name??"[[Data source not found]]"];return t&&f.push((0,O.C_)(t).display),a.createElement(F,{refId:e,headerItems:f,className:i.contentBox},a.createElement("pre",{className:i.code},a.createElement("code",null,(0,U.$w)(n))),s&&a.createElement(Y,{refId:e,dsSettings:s,model:n,data:l,thresholds:r,relativeTimeRange:m,onTimeRangeChange:o,className:i.visualization}))}const ee=e=>({code:(0,d.css)`
    margin: ${e.spacing(1)};
  `,contentBox:(0,d.css)`
    flex: 1 0 100%;
  `,visualization:(0,d.css)`
    padding: ${e.spacing(1)};
  `});function ae({refId:e,model:t,evalData:r,isAlertCondition:n}){function s(){switch(t.type){case y.Us.math:return a.createElement(de,{model:t});case y.Us.reduce:return a.createElement(re,{model:t});case y.Us.resample:return a.createElement(ce,{model:t});case y.Us.classic:return a.createElement(ne,{model:t});case y.Us.threshold:return a.createElement(ie,{model:t});default:return a.createElement(a.Fragment,null,"Expression not supported: ",t.type)}}return a.createElement(F,{refId:e,headerItems:[(0,N.startCase)(t.type)],isAlertCondition:n},s(),r&&a.createElement(P.bw,{series:r.series,isAlertCondition:n}))}function F({refId:e,headerItems:t=[],children:r,isAlertCondition:n,className:s}){const l=(0,E.wW)(te);return a.createElement("div",{className:(0,d.cx)(l.container,s)},a.createElement("header",{className:l.header},a.createElement("span",{className:l.refId},e),t.map((m,o)=>a.createElement("span",{key:o,className:l.textBlock},m)),n&&a.createElement("div",{className:l.conditionIndicator},a.createElement(M.C,{color:"green",icon:"check",text:"Alert condition"}))),r)}const te=e=>({container:(0,d.css)`
    flex: 1 0 25%;
    border: 1px solid ${e.colors.border.strong};
    max-width: 100%;
  `,header:(0,d.css)`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1)};
    padding: ${e.spacing(1)};
    background-color: ${e.colors.background.secondary};
  `,textBlock:(0,d.css)`
    border: 1px solid ${e.colors.border.weak};
    padding: ${e.spacing(.5,1)};
    background-color: ${e.colors.background.primary};
  `,refId:(0,d.css)`
    color: ${e.colors.text.link};
    padding: ${e.spacing(.5,1)};
    border: 1px solid ${e.colors.border.weak};
  `,conditionIndicator:(0,d.css)`
    margin-left: auto;
  `});function ne({model:e}){const t=(0,E.wW)(se),r=(0,N.keyBy)($.Z.reducerTypes,l=>l.value),n=(0,N.keyBy)($.Z.evalOperators,l=>l.value),s=(0,N.keyBy)($.Z.evalFunctions,l=>l.value);return a.createElement("div",{className:t.container},e.conditions?.map(({query:l,operator:m,reducer:o,evaluator:i},f)=>{const p=Q(i);return a.createElement(a.Fragment,{key:f},a.createElement("div",{className:t.blue},f===0?"WHEN":!!m?.type&&n[m?.type]?.text),a.createElement("div",{className:t.bold},o?.type&&r[o.type]?.text),a.createElement("div",{className:t.blue},"OF"),a.createElement("div",{className:t.bold},l.params[0]),a.createElement("div",{className:t.blue},s[i.type].text),a.createElement("div",{className:t.bold},p?`(${i.params[0]}; ${i.params[1]})`:i.params[0]))}))}const se=e=>({container:(0,d.css)`
    padding: ${e.spacing(1)};
    display: grid;
    grid-template-columns: max-content max-content max-content max-content max-content max-content;
    gap: ${e.spacing(0,1)};
  `,...w(e)});function re({model:e}){const t=(0,E.wW)(le),{reducer:r,expression:n,settings:s}=e,l=y.SQ.find(i=>i.value===r),m=s?.mode??y.kN.Strict,o=y.YM.find(i=>i.value===m);return a.createElement("div",{className:t.container},a.createElement("div",{className:t.label},"Function"),a.createElement("div",{className:t.value},l?.label),a.createElement("div",{className:t.label},"Input"),a.createElement("div",{className:t.value},n),a.createElement("div",{className:t.label},"Mode"),a.createElement("div",{className:t.value},o?.label))}const le=e=>({container:(0,d.css)`
    padding: ${e.spacing(1)};
    display: grid;
    gap: ${e.spacing(1)};
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    > :nth-child(6) {
      grid-column: span 3;
    }
  `,...w(e)});function ce({model:e}){const t=(0,E.wW)(oe),{expression:r,window:n,downsampler:s,upsampler:l}=e,m=y.Fr.find(i=>i.value===s),o=y.r8.find(i=>i.value===l);return a.createElement("div",{className:t.container},a.createElement("div",{className:t.label},"Input"),a.createElement("div",{className:t.value},r),a.createElement("div",{className:t.label},"Resample to"),a.createElement("div",{className:t.value},n),a.createElement("div",{className:t.label},"Downsample"),a.createElement("div",{className:t.value},m?.label),a.createElement("div",{className:t.label},"Upsample"),a.createElement("div",{className:t.value},o?.label))}const oe=e=>({container:(0,d.css)`
    padding: ${e.spacing(1)};
    display: grid;
    gap: ${e.spacing(1)};
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  `,...w(e)});function ie({model:e}){const t=(0,E.wW)(S),{expression:r,conditions:n}=e,s=n&&n[0]?.evaluator,l=y.Mi.find(p=>p.value===s?.type),m=s?Q(s):!1,o=n&&n[0]?.unloadEvaluator,i=y.Mi.find(p=>p.value===o?.type),f=o?Q(o):!1;return a.createElement(a.Fragment,null,a.createElement("div",{className:t.container},a.createElement("div",{className:t.label},"Input"),a.createElement("div",{className:t.value},r),s&&a.createElement(a.Fragment,null,a.createElement("div",{className:t.blue},l?.label),a.createElement("div",{className:t.bold},m?`(${s.params[0]}; ${s.params[1]})`:s.params[0]))),a.createElement("div",{className:t.container},o&&a.createElement(a.Fragment,null,a.createElement("div",{className:t.label},"Stop alerting when "),a.createElement("div",{className:t.value},r),a.createElement(a.Fragment,null,a.createElement("div",{className:t.blue},i?.label),a.createElement("div",{className:t.bold},f?`(${o.params[0]}; ${o.params[1]})`:o.params[0])))))}const S=e=>{const{blue:t,bold:r,...n}=w(e);return{...n,maxWidthContainer:(0,d.css)`
      max-width: 100%;
    `,container:(0,d.css)`
      padding: ${e.spacing(1)};
      display: flex;
      gap: ${e.spacing(1)};
    `,blue:(0,d.css)`
      ${t};
      margin: auto 0;
    `,bold:(0,d.css)`
      ${r};
      margin: auto 0;
    `}};function de({model:e}){const t=(0,E.wW)(S),{expression:r}=e;return a.createElement("div",{className:t.container},a.createElement("div",{className:t.label},"Input"),a.createElement("div",{className:t.value},r))}const w=e=>({blue:(0,d.css)`
    color: ${e.colors.text.link};
  `,bold:(0,d.css)`
    font-weight: ${e.typography.fontWeightBold};
  `,label:(0,d.css)`
    display: flex;
    align-items: center;
    padding: ${e.spacing(.5,1)};
    background-color: ${e.colors.background.secondary};
    font-size: ${e.typography.bodySmall.fontSize};
    line-height: ${e.typography.bodySmall.lineHeight};
    font-weight: ${e.typography.fontWeightBold};
  `,value:(0,d.css)`
    padding: ${e.spacing(.5,1)};
    border: 1px solid ${e.colors.border.weak};
  `});function Q(e){return e.type===$.$.IsWithinRange||e.type===$.$.IsOutsideRange}var ue=c(83629),me=c(40565),W=c(67451),h=c(96198);function B(e){if(!e)return[];const{namespace:t,rulerRule:r}=e,{rulesSource:n}=t;if((0,W.HY)(n)&&(0,h.Pc)(r))return r.grafana_alert.data;if((0,W.jq)(n)){const s=ge(n,e);return[pe(s,n.uid)]}return[]}function pe(e,t){return{refId:e.refId,datasourceUid:t,queryType:"",model:e,relativeTimeRange:{from:360,to:0}}}function ge(e,t){const r="A";switch(e.type){case"prometheus":return{refId:r,expr:t.query};case"loki":return{refId:r,expr:t.query};default:throw new Error(`Query for datasource type ${e.type} is currently not supported by cloud alert rules.`)}}const ve=({rule:e})=>{const[t,r]=(0,a.useState)({}),n=(0,a.useMemo)(()=>new me.v,[]),s=(0,A.Z)(n.get()),l=fe(s),m=(0,a.useMemo)(()=>B(e),[e]),{allDataSourcesAvailable:o}=(0,ue.S)(m),i=(0,a.useCallback)(()=>{if(m.length>0&&o){const g=m.map(v=>({...v,relativeTimeRange:t[v.refId]??v.relativeTimeRange}));let u;e&&(0,h.Pc)(e.rulerRule)&&(u=e.rulerRule.grafana_alert.condition),n.run(g,u??"A")}},[m,o,e,n,t]);(0,a.useEffect)(()=>{const g=B(e),u=Object.fromEntries(g.map(v=>[v.refId,v.relativeTimeRange??{from:0,to:0}]));r(u)},[e]),(0,a.useEffect)(()=>{o&&i()},[o,i]),(0,a.useEffect)(()=>()=>n.destroy(),[n]);const f=(0,a.useCallback)((g,u)=>{const v=(0,j.Uy)(t,x=>{x[g]=u});r(v)},[t,r]),p=(0,h.Jq)(e.group);return a.createElement(a.Fragment,null,l?"Loading...":a.createElement(a.Fragment,null,(0,h.Pc)(e.rulerRule)&&!p&&a.createElement(_,{condition:e.rulerRule.grafana_alert.condition,queries:m,evalDataByQuery:s,evalTimeRanges:t,onTimeRangeChange:f}),!(0,h.Pc)(e.rulerRule)&&!p&&s&&Object.keys(s).length>0&&a.createElement("div",null,m.map(g=>a.createElement(I,{key:g.refId,refId:g.refId,model:g.model,dataSource:Object.values(C.config.datasources).find(u=>u.uid===g.datasourceUid),queryData:s[g.refId],relativeTimeRange:g.relativeTimeRange,evalTimeRange:t[g.refId],onEvalTimeRangeChange:u=>f(g.refId,u),isAlertCondition:!1}))),!p&&!o&&a.createElement(D.b,{title:"Query not available",severity:"warning"},"Cannot display the query preview. Some of the data sources used in the queries are not available.")))};function fe(e){return e?!!Object.values(e).find(t=>t.state===k.Gu.Loading):!0}}}]);

//# sourceMappingURL=2385.047bc481931e5e25d801.js.map