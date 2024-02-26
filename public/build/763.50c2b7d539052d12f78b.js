"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[763],{3406:(X,A,s)=>{s.d(A,{A2:()=>ee,bw:()=>a});var u=s(76932),v=s(69781),t=s(31733),D=s(54126),b=s(20298),M=s(23498),C=s(40137),g=s(76067),R=s(37739),W=s(51343),B=s(1537),x=s(41354),L=s(95612),Q=s(8335),K=s(45886),H=s(10230),J=s(37850),N=s(26894),U=s(58126),w=s(67483),z=s(96477),j=s(40040),k=s(48859),te=s(19218),se=s(73899);const ne=e=>{const c=e.fields[0];return c?.config?.displayNameFromDS??e.name??c?.labels?.__name__},V=e=>{const c=e.fields[0]?.values[0];return Number.isFinite(c)?(0,se.O)(c,5):c},q=e=>e.fields[0]?.labels??{},_=e=>Object.entries(e).map(([c,l])=>c+"="+l).join(", "),re=e=>e.every(l=>l.fields.every(f=>f.values.every(E=>E==null))),ee=({queries:e=[],query:c,data:l,error:f,warning:E,isAlertCondition:S,onSetCondition:y,onUpdateRefId:h,onRemoveExpression:$,onUpdateExpressionType:P,onChangeQuery:O})=>{const T=(0,g.wW)(m),F=c?.type,{setError:G,clearErrors:Y}=(0,D.Gc)(),Z=(0,t.useCallback)(I=>{I?G("queries",{type:"custom",message:I}):Y("queries")},[G,Y]),de=l&&Object.values(l).some(I=>!!I&&I.state===b.Gu.Loading),ue=Array.isArray(l?.series)&&!de,le=l?.series??[],ie=S??!1,{seriesCount:me,groupedByState:ce}=d(le),pe=(0,t.useCallback)(I=>{const oe=e.filter(ae=>I.refId!==ae.refId).map(ae=>({value:ae.refId,label:ae.refId}));switch(I.type){case N.Us.math:return t.createElement(Q.Z,{onChange:O,query:I,labelWidth:"auto",onRunQuery:()=>{}});case N.Us.reduce:return t.createElement(K.v,{onChange:O,refIds:oe,labelWidth:"auto",query:I});case N.Us.resample:return t.createElement(H.p,{onChange:O,query:I,labelWidth:"auto",refIds:oe});case N.Us.classic:return t.createElement(L.I,{onChange:O,query:I,refIds:oe});case N.Us.threshold:return t.createElement(J.M,{onChange:O,query:I,labelWidth:"auto",refIds:oe,onError:Z,useHysteresis:!0});default:return t.createElement(t.Fragment,null,"Expression not supported: ",I.type)}},[O,e,Z]),fe=N.EJ.find(I=>I.value===F)?.description??"";return t.createElement("div",{className:(0,u.cx)(T.expression.wrapper,ie&&T.expression.alertCondition,F===N.Us.classic&&T.expression.classic,F!==N.Us.classic&&T.expression.nonClassic)},t.createElement("div",{className:T.expression.stack},t.createElement(o,{refId:c.refId,queryType:F,onRemoveExpression:()=>$(c.refId),onUpdateRefId:I=>h(c.refId,I),onUpdateExpressionType:I=>P(c.refId,I),onSetCondition:y,warning:E,error:f,query:c,alertCondition:ie}),t.createElement("div",{className:T.expression.body},t.createElement("div",{className:T.expression.description},fe),pe(c)),ue&&t.createElement(t.Fragment,null,t.createElement(a,{series:le,isAlertCondition:S}),t.createElement("div",{className:T.footer},t.createElement(R.K,{direction:"row",alignItems:"center"},t.createElement(j.L,null),t.createElement(p,{isCondition:!!S,firing:ce[U.x_.Firing].length,normal:ce[U.x_.Inactive].length,seriesCount:me}))))))},i=20,a=({series:e,isAlertCondition:c})=>{const{pageItems:l,previousPage:f,nextPage:E,numberOfPages:S,pageStart:y,pageEnd:h}=(0,w.h)(e,1,i),$=(0,g.wW)(m),P=re(e),O=!P&&(0,M.xI)(e),T=S>1;return t.createElement("div",{className:$.expression.results},!P&&O&&t.createElement("div",null,l.map((F,G)=>t.createElement(r,{key:(0,v.uniqueId)(),frame:F,index:y+G,isAlertCondition:c}))),!P&&!O&&l.map((F,G)=>t.createElement(n,{key:(0,v.uniqueId)(),frame:F,index:y+G,isAlertCondition:c})),P&&t.createElement("div",{className:(0,u.cx)($.expression.noData,$.mutedText)},"No data"),T&&t.createElement("div",{className:$.pagination.wrapper,"data-testid":"paginate-expression"},t.createElement(R.K,null,t.createElement(W.zx,{variant:"secondary",fill:"outline",onClick:f,icon:"angle-left",size:"sm","aria-label":"previous-page"}),t.createElement(j.L,null),t.createElement("span",{className:$.mutedText},y," - ",h," of ",e.length),t.createElement(j.L,null),t.createElement(W.zx,{variant:"secondary",fill:"outline",onClick:E,icon:"angle-right",size:"sm","aria-label":"next-page"}))))},p=({firing:e,normal:c,isCondition:l,seriesCount:f})=>{const{mutedText:E}=(0,g.wW)(m);return f===0?t.createElement("span",{className:E},"No series"):l?t.createElement("span",{className:E},`${f} series: ${e} firing, ${c} normal`):t.createElement("span",{className:E},`${f} series`)};function d(e){const c=e.filter(E=>V(E)===void 0).length,l={[U.x_.Firing]:e.filter(E=>V(E)!==void 0&&V(E)!==0),[U.x_.Inactive]:e.filter(E=>V(E)===0)},f=e.length-c;return{groupedByState:l,seriesCount:f}}const o=({refId:e,queryType:c,onUpdateRefId:l,onRemoveExpression:f,warning:E,onSetCondition:S,alertCondition:y,query:h,error:$})=>{const P=(0,g.wW)(m),O=(0,g.wW)(W.gN),[T,F]=(0,t.useState)(!1),Y=T!==!1&&T==="refId";return t.createElement("header",{className:P.header.wrapper},t.createElement(R.K,{direction:"row",gap:.5,alignItems:"center"},t.createElement(R.K,{direction:"row",gap:1,alignItems:"center"},!Y&&t.createElement("button",{type:"button",className:(0,u.cx)(O,P.editable),onClick:()=>F("refId")},t.createElement("div",{className:P.expression.refId},e)),Y&&t.createElement(B.H,{autoFocus:!0,defaultValue:e,minWidth:5,onChange:Z=>{l(Z.currentTarget.value),F(!1)},onFocus:Z=>Z.target.select(),onBlur:Z=>{l(Z.currentTarget.value),F(!1)}}),t.createElement("div",null,(0,N.hF)(c))),t.createElement(j.L,null),t.createElement(te.H,{error:$,warning:E,onSetCondition:()=>S(h.refId),isCondition:y}),t.createElement(x.h,{name:"trash-alt",variant:"secondary",className:P.mutedIcon,onClick:f,tooltip:"Remove expression"})))},n=({frame:e,index:c,isAlertCondition:l})=>{const f=(0,g.wW)(m),E=ne(e)||"Series "+c,S=V(e),y=q(e),h=Object.entries(y),$=h.length>0,P=l&&S!==0,O=l&&S===0,T=`${$?"":E}${$?`{${_(y)}}`:""}`;return t.createElement("div",{className:f.expression.resultsRow},t.createElement(R.K,{direction:"row",gap:1,alignItems:"center"},t.createElement("div",{className:f.expression.resultLabel,title:T},t.createElement("span",null,$?"":E),$&&t.createElement(t.Fragment,null,t.createElement("span",null,"{"),h.map(([F,G],Y)=>t.createElement("span",{key:(0,v.uniqueId)()},t.createElement("span",{className:f.expression.labelKey},F),t.createElement("span",null,"="),t.createElement("span",null,'"'),t.createElement("span",{className:f.expression.labelValue},G),t.createElement("span",null,'"'),Y<h.length-1&&t.createElement("span",null,", "))),t.createElement("span",null,"}"))),t.createElement("div",{className:f.expression.resultValue},S),P&&t.createElement(k.l,{state:U.x_.Firing,size:"sm"}),O&&t.createElement(k.l,{state:U.x_.Inactive,size:"sm"})))},r=({frame:e,index:c})=>{const l=(0,g.wW)(m),f=e.fields[1],E=f.labels,y=f.config?.displayNameFromDS??(E?_(f.labels??{}):"Series "+c),h=e.fields[0].values,$=O=>e.fields[0].values[O],P=O=>e.fields[1].values[O];return t.createElement("div",{className:l.expression.resultsRow},t.createElement(R.K,{direction:"row",alignItems:"center"},t.createElement("span",{className:(0,u.cx)(l.mutedText,l.expression.resultLabel),title:y},y),t.createElement("div",{className:l.expression.resultValue},t.createElement(z.z,{placement:"right",wrapperClassName:l.timeseriesTableWrapper,content:t.createElement("table",{className:l.timeseriesTable},t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"Timestamp"),t.createElement("th",null,"Value"))),t.createElement("tbody",null,h.map((O,T)=>t.createElement("tr",{key:T},t.createElement("td",{className:l.mutedText},(0,C.dq)($(T))),t.createElement("td",{className:l.expression.resultValue},P(T))))))},t.createElement("span",null,"Time series data")))))},m=e=>({expression:{wrapper:(0,u.css)`
      display: flex;
      border: solid 1px ${e.colors.border.medium};
      flex: 1;
      flex-basis: 400px;
      border-radius: ${e.shape.radius.default};
    `,stack:(0,u.css)`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 0;
      width: 100%;
      min-width: 0; // this one is important to prevent text overflow
    `,classic:(0,u.css)`
      max-width: 100%;
    `,nonClassic:(0,u.css)`
      max-width: 640px;
    `,alertCondition:(0,u.css)``,body:(0,u.css)`
      padding: ${e.spacing(1)};
      flex: 1;
    `,description:(0,u.css)`
      margin-bottom: ${e.spacing(1)};
      font-size: ${e.typography.size.xs};
      color: ${e.colors.text.secondary};
    `,refId:(0,u.css)`
      font-weight: ${e.typography.fontWeightBold};
      color: ${e.colors.primary.text};
    `,results:(0,u.css)`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;

      border-top: solid 1px ${e.colors.border.medium};
    `,noResults:(0,u.css)`
      display: flex;
      align-items: center;
      justify-content: center;
    `,resultsRow:(0,u.css)`
      padding: ${e.spacing(.75)} ${e.spacing(1)};

      &:nth-child(odd) {
        background-color: ${e.colors.background.secondary};
      }

      &:hover {
        background-color: ${e.colors.background.canvas};
      }
    `,labelKey:(0,u.css)`
      color: ${e.isDark?"#73bf69":"#56a64b"};
    `,labelValue:(0,u.css)`
      color: ${e.isDark?"#ce9178":"#a31515"};
    `,resultValue:(0,u.css)`
      text-align: right;
    `,resultLabel:(0,u.css)`
      flex: 1;
      overflow-x: auto;

      display: inline-block;
      white-space: nowrap;
    `,noData:(0,u.css)`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${e.spacing()};
    `},mutedText:(0,u.css)`
    color: ${e.colors.text.secondary};
    font-size: 0.9em;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,header:{wrapper:(0,u.css)`
      background: ${e.colors.background.secondary};
      padding: ${e.spacing(.5)} ${e.spacing(1)};
      border-bottom: solid 1px ${e.colors.border.weak};
    `},footer:(0,u.css)`
    background: ${e.colors.background.secondary};
    padding: ${e.spacing(1)};
    border-top: solid 1px ${e.colors.border.weak};
  `,draggableIcon:(0,u.css)`
    cursor: grab;
  `,mutedIcon:(0,u.css)`
    color: ${e.colors.text.secondary};
  `,editable:(0,u.css)`
    padding: ${e.spacing(.5)} ${e.spacing(1)};
    border: solid 1px ${e.colors.border.weak};
    border-radius: ${e.shape.radius.default};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${e.spacing(1)};

    cursor: pointer;
  `,timeseriesTableWrapper:(0,u.css)`
    max-height: 500px;

    overflow-y: scroll;
  `,timeseriesTable:(0,u.css)`
    table-layout: auto;

    width: 100%;
    height: 100%;

    td,
    th {
      padding: ${e.spacing(1)};
    }

    td {
      background: ${e.colors.background.primary};
    }

    th {
      background: ${e.colors.background.secondary};
    }

    tr {
      border-bottom: 1px solid ${e.colors.border.medium};

      &:last-of-type {
        border-bottom: none;
      }
    }
  `,pagination:{wrapper:(0,u.css)`
      border-top: 1px solid ${e.colors.border.medium};
      padding: ${e.spacing()};
    `}})},19218:(X,A,s)=>{s.d(A,{H:()=>M});var u=s(76932),v=s(31733),t=s(76067),D=s(50248),b=s(51343);const M=({error:g,warning:R,isCondition:W,onSetCondition:B})=>{const x=(0,t.wW)(C),L=[];return g&&W?v.createElement(D.C,{color:"red",icon:"exclamation-circle",text:"Alert condition",tooltip:g.message}):(g&&L.push(v.createElement(D.C,{key:"error",color:"red",icon:"exclamation-circle",text:"Error",tooltip:g.message})),R&&W?v.createElement(D.C,{color:"orange",icon:"exclamation-triangle",text:"Alert condition",tooltip:R.message}):(R&&L.push(v.createElement(D.C,{key:"warning",color:"orange",icon:"exclamation-triangle",text:"Warning",tooltip:R.message})),W?L.unshift(v.createElement(D.C,{key:"condition",color:"green",icon:"check",text:"Alert condition"})):L.unshift(v.createElement("button",{key:"make-condition",type:"button",className:x.actionLink,onClick:()=>B&&B()},"Set as alert condition")),v.createElement(v.Fragment,null,L)))},C=g=>{const R=(0,b.gN)(g);return{actionLink:(0,u.css)`
      ${R};
      color: ${g.colors.text.link};
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    `}}},71713:(X,A,s)=>{s.d(A,{l:()=>W});var u=s(76932),v=s(31733),t=s(43741),D=s(23498),b=s(76067),M=s(83599),C=s(10937),g=s(3406),R=s(539);const W=({data:x,thresholds:L,thresholdsType:Q})=>{const K=(0,b.wW)(B),H=(0,D.xI)(x.series),J=(0,R._4)(x),N=Q?{mode:Q}:void 0,U={from:x.timeRange.from.valueOf(),to:x.timeRange.to.valueOf()};return v.createElement("div",{className:K.wrapper},v.createElement(t.Z,{disableHeight:!0},({width:w})=>v.createElement("div",{style:{width:w}},H?v.createElement(C.F,{statusMessage:J,data:x.series,eventBus:M.Z,height:300,width:w,absoluteRange:U,timeZone:"browser",onChangeTime:()=>{},splitOpenFn:()=>{},loadingState:x.state,thresholdsConfig:L,thresholdsStyle:N}):v.createElement("div",{className:K.instantVectorResultWrapper},v.createElement("header",{className:K.title},"Table"),v.createElement(g.bw,{series:x.series})))))},B=x=>({wrapper:(0,u.css)`
    width: 100%;
    position: relative;
  `,instantVectorResultWrapper:(0,u.css)`
    border: solid 1px ${x.colors.border.medium};
    border-radius: ${x.shape.radius.default};
    padding: 0;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  `,title:(0,u.css)({label:"panel-title",padding:x.spacing(),textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontSize:x.typography.h6.fontSize,fontWeight:x.typography.h6.fontWeight})})},539:(X,A,s)=>{s.d(A,{p0:()=>k,Ps:()=>te,_m:()=>se,eW:()=>ee,_4:()=>_,Fu:()=>V,Ry:()=>w,Dr:()=>j,KP:()=>re,Yq:()=>ne});var u=s(69781),v=s(23498),t=s(47423),D=s(20298),b=s(71199),M=s(83811),C=s(74201),g=s(13461),R=s(26894),W=s(93797),B=s(90093),x=s(23901);const L=(0,B.Z)(Q,(i,a)=>U(i[0])===U(a[0]));function Q(i){const a=new x.kJ,p=i.map(d=>d.refId);return a.createNodes(p),i.forEach(d=>{const o=d.refId;((0,g.j)(d.model)&&d.model.type==="math"?K(d.model.expression??""):[d.model.expression]).forEach(m=>{o&&m&&!(o===m)&&a.link(m,o)})}),a}function K(i){const a=new RegExp(/\$\{(?<var>[a-zA-Z0-9_ ]+?)\}/gm),p=new RegExp(/\$(?<var>[a-zA-Z0-9_]+)/gm),d=Array.from(i.matchAll(a)).map(n=>n.groups?.var),o=Array.from(i.matchAll(p)).map(n=>n.groups?.var);return(0,u.compact)((0,u.uniq)([...d,...o]))}const H=(0,u.memoize)(J,(i,a)=>i+N(a));function J(i,a){const p=a.getNode(i);let d=[];function o(n){const r=n.inputEdges;r.length>0?r.forEach(m=>{m.inputNode&&o(m.inputNode)}):d?.push(n)}return o(p),d.map(n=>n.name)}function N(i){return Object.keys(i.nodes).map(a=>{const p=i.nodes[a];let d=p.outputEdges.map(n=>n.outputNode?.name).join(", "),o=p.inputEdges.map(n=>n.inputNode?.name).join(", ");return`${p.name}:${d}:${o}`}).join(" ")}function U(i){return i.map(a=>{const p=(0,g.j)(a.model)?a.model.type:a.queryType;return a.refId+(a.model.expression??"")+p}).join()}function w(i,a,p){return i.map(d=>{if(a===p||!(0,g.j)(d.model))return d;const o=d.model.type==="math",n=d.model.type==="reduce",r=d.model.type==="resample",m=d.model.type==="classic_conditions",e=d.model.type==="threshold";if(o)return{...d,model:{...d.model,expression:z(d.model.expression??"",a,p)}};if(r||n||e){const c=d.model.expression===a;return{...d,model:{...d.model,expression:c?p:d.model.expression}}}if(m){const c=d.model.conditions?.map(l=>({...l,query:{...l.query,params:l.query.params.map(f=>f===a?p:f)}}));return{...d,model:{...d.model,conditions:c}}}return d})}function z(i,a,p){const d=new RegExp("(\\$"+a+"\\b)|(\\${"+a+"})","gm"),o="${"+p+"}";return i.replace(d,o)}function j(i,a){return i.find(p=>p.refId===a)!==void 0}function k(i){return i.includes("/")||i.includes("\\")?'Cannot contain "/" or "\\" characters':!0}function te(i){if(i.series.length===0)return;const a=(0,v.xI)(i.series);let p;return a&&(p=new Error("You cannot use time series data as an alert condition, consider adding a reduce expression.")),p}function se(i){if(i.errors?.length)return new Error(i.errors[0].message)}function ne(i){const p=(i[0]?.meta?.notices??[]).find(d=>d.severity==="warning")?.text;return p?new Error(p):void 0}function V(i){const a={},p=[R.Us.threshold,R.Us.classic];for(const n of i){if(!(0,g.j)(n.model)||!p.includes(n.model.type)||!Array.isArray(n.model.conditions))continue;const r=n.model.conditions.some(q);n.model.conditions.forEach(m=>{const e=m.evaluator.params,c=m.query?.params[0]??n.model.expression;if(!c)return;const l=q(m);try{const f=L(i),E=H(c,f);i.filter(y=>E.includes(y.refId)).forEach(y=>{const h=y.refId,P=!!(!(0,g.j)(y?.model)&&h);h&&!a[h]&&(a[h]={config:{mode:t.H.Absolute,steps:[]},mode:b.i3.Line}),h&&P&&!l&&!r?d(h,e[0]):h&&P&&l&&(o(h,e,m.evaluator.type),a[h].mode=b.i3.LineAndArea)})}catch(f){console.error("Failed to parse thresholds",f);return}})}function d(n,r){a[n].config.steps.push({value:-1/0,color:"transparent"},{value:r,color:M.config.theme2.colors.error.main})}function o(n,r,m){m===C.$.IsWithinRange&&a[n].config.steps.push({value:-1/0,color:"transparent"},{value:r[0],color:M.config.theme2.colors.error.main},{value:r[1],color:M.config.theme2.colors.error.main},{value:r[1],color:"transparent"}),m===C.$.IsOutsideRange&&a[n].config.steps.push({value:-1/0,color:M.config.theme2.colors.error.main},{value:r[0],color:M.config.theme2.colors.error.main},{value:r[0],color:"transparent"},{value:r[1],color:M.config.theme2.colors.error.main}),a[n].config.steps.sort((e,c)=>e.value-c.value),a[n].config.steps=a[n].config.steps.filter(e=>e.value!==void 0)}return a}function q(i){return i.evaluator.type===C.$.IsWithinRange||i.evaluator.type===C.$.IsOutsideRange}function _(i){const a="Failed to fetch data";if(i.state!==D.Gu.Error)return;const p=i.errors;return p?.length?p.map(d=>d.message??a).join(", "):i.error?.message??a}function re(i=""){return i==="recording"?W.$.cloudRecording:W.$.grafana}function ee(i,a){const p=a.filter(r=>!(0,g.j)(r.model)).map(r=>r.refId),d=i.filter(r=>!(0,g.j)(r.model)).map(r=>r.refId),[o,n]=(0,u.xor)(d,p);return[o,n]}},83629:(X,A,s)=>{s.d(A,{S:()=>D});var u=s(31733),v=s(66261),t=s(65821);function D(b){return{allDataSourcesAvailable:(0,u.useMemo)(()=>b.filter(C=>!(0,t.Pr)(C.datasourceUid)).every(C=>!!(0,v.F)().getInstanceSettings(C.datasourceUid)),[b])}}},40565:(X,A,s)=>{s.d(A,{v:()=>_});var u=s(69781),v=s(37153),t=s(86457),D=s(56183),b=s(57423),M=s(4558),C=s(79117),g=s(20298),R=s(98147),W=s(83095),B=s(17201),x=s(5333),L=s(20498),Q=s(66261),K=s(65821),H=s(54291),J=s(41327),N=s(13461),U=s(96299),w=s(83019),z=s(26894);const j={from:21600,to:0},k=(o,n)=>{const r=te(o,n);if(!r)return j;const{from:m,to:e}=ne(r,n);return!m.length&&!e.length?j:{from:Math.max(...m),to:Math.min(...e)}},te=(o,n)=>{switch(o.type){case z.Us.classic:return se(o);case z.Us.math:return V(o,n);case z.Us.resample:case z.Us.reduce:case z.Us.threshold:return q(o)}},se=o=>o.conditions?.map(n=>n.query.params[0]),ne=(o,n)=>{let r=[],m=[j.to];for(const e of o){const c=n.find(l=>l.refId===e);!c||!c.relativeTimeRange||(r.push(c.relativeTimeRange.from),m.push(c.relativeTimeRange.to))}return{from:r,to:m}},V=(o,n)=>n.filter(r=>r.queryType==="query"&&o.expression?.includes(r.refId)).map(r=>r.refId),q=o=>o.expression?[o.expression]:void 0;class _{constructor(n=(0,J.i)(),r=(0,Q.F)()){this.backendSrv=n,this.dataSourceSrv=r,this.subject=new v.t(1),this.lastResult={}}get(){return this.subject.asObservable()}async run(n,r){const m=ee(n,g.Gu.Done),e=[];for(const l of n){const f=l.model.refId;if((0,N.j)(l.model))continue;const E=await this.dataSourceSrv.get(l.datasourceUid);E instanceof K.CK&&E.filterQuery&&!E.filterQuery(l.model)&&e.push(f)}const c=(0,u.reject)(n,l=>e.includes(l.model.refId));if(c.length===0)return this.subject.next(m);this.subscription=re(this.backendSrv,c,r).subscribe({next:l=>{const f=d(l,(E,S)=>{const y=this.lastResult[E],h=(0,R.zR)(S,y);return(0,w.C)(h,y)});this.lastResult=f,this.subject.next(this.lastResult)},error:l=>{this.lastResult=p(this.lastResult,l),this.subject.next(this.lastResult)}})}cancel(){if(!this.subscription)return;this.subscription.unsubscribe();let n=!1;const r=d(this.lastResult,(m,e)=>(e.state===g.Gu.Loading&&(n=!0),{...e,state:g.Gu.Done}));n&&this.subject.next(r)}destroy(){this.subject&&this.subject.complete(),this.cancel()}}const re=(o,n,r)=>{const m=ee(n,g.Gu.Loading),e={data:{data:n,condition:r},url:"/api/v1/eval",method:"POST",requestId:(0,C.Z)()};return(0,W.x)({whileLoading:m,source:o.fetch(e).pipe(a(m),(0,D.K)(c=>(0,t.of)(p(m,c))),(0,U.V)(o,e.requestId),(0,b.B)())})},ee=(o,n)=>o.reduce((r,m)=>(r[m.refId]={state:n,series:[],timeRange:i(m,o)},r),{}),i=(o,n)=>{if((0,N.j)(o.model)){const r=k(o.model,n);return B.relativeToTimeRange(r)}return o.relativeTimeRange?B.relativeToTimeRange(o.relativeTimeRange):(console.warn(`Query with refId: ${o.refId} did not have any relative time range, using default.`),(0,x.JK)())},a=o=>(0,M.U)(n=>{const{data:r}=n,m={};for(const[e,c]of Object.entries(r.results)){const{error:l,status:f,frames:E=[]}=c,S=l?[{message:l,refId:e,status:f}]:[];m[e]={errors:S,timeRange:o[e].timeRange,state:g.Gu.Done,series:E.map(L.vP)}}return m}),p=(o,n)=>{const r=(0,H.P)(n);return d(o,(m,e)=>({...e,state:g.Gu.Error,error:r}))},d=(o,n)=>{const r={};for(const[m,e]of Object.entries(o))r[m]=n(m,e);return r}},13461:(X,A,s)=>{s.d(A,{j:()=>t});var u=s(65821),v=s(26894);const t=D=>{if(!D)return!1;if((0,u.Pr)(D.datasource))return!0;const b=D;return typeof b.type!="string"?!1:Object.values(v.Us).includes(b.type)}}}]);

//# sourceMappingURL=763.50c2b7d539052d12f78b.js.map