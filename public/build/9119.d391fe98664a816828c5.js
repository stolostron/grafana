"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9119],{79695:(q,M,n)=>{n.d(M,{C0:()=>e,Uv:()=>C,Xq:()=>N});var a=n(31733),G=n(25111),B=n(50248),C=(p=>(p.ContactPoint="contact point",p.Template="template",p.MuteTiming="mute timing",p.AlertRule="alert rule",p.RootNotificationPolicy="root notification policy",p))(C||{});const N=({resource:p})=>a.createElement(G.b,{title:`This ${p} cannot be edited through the UI`,severity:"info"},"This ",p," has been provisioned, that means it was created by config. Please contact your server admin to update this ",p,"."),e=()=>a.createElement(B.C,{text:"Provisioned",color:"purple"})},33143:(q,M,n)=>{n.d(M,{u:()=>R});var a=n(31733),G=n(73642),B=n(69781),C=n(75720);function N(l){const c=l.languages.CompletionItemKind.Function;return[{label:C.AlertmanagerTemplateFunction.toUpper,detail:"function(s string)",kind:c},{label:C.AlertmanagerTemplateFunction.toLower,detail:"function(s string)",kind:c},{label:C.AlertmanagerTemplateFunction.title,documentation:"Capitalizes the first letter of each word",detail:"function(s string)",kind:c},{label:C.AlertmanagerTemplateFunction.join,documentation:{value:"Joins an array of strings using the separator provided."},detail:"function(separator string, s []string)",kind:c},{label:C.AlertmanagerTemplateFunction.match,detail:"function",kind:c},{label:C.AlertmanagerTemplateFunction.safeHtml,detail:"function(pattern, repl, text)",kind:c},{label:C.AlertmanagerTemplateFunction.reReplaceAll,detail:"function(pattern, repl, text)",kind:c},{label:C.AlertmanagerTemplateFunction.stringSlice,detail:"function(s ...string)",kind:c}]}var e=n(13121);function p(l){const c={triggerCharacters:["."],provideCompletionItems(d,b,y){const A=d.getWordUntilPosition(b),U={startLineNumber:b.lineNumber,endLineNumber:b.lineNumber,startColumn:A.startColumn,endColumn:A.endColumn},K=new V(l,U);if(!S(d,b))return K.getSnippetsSuggestions();if(y.triggerKind===l.languages.CompletionTriggerKind.Invoke&&!y.triggerCharacter)return K.getFunctionsSuggestions();const ie=d.getWordUntilPosition({lineNumber:b.lineNumber,column:b.column-1});return K.getTemplateDataSuggestions(ie.word)}};return l.languages.registerCompletionItemProvider("go-template",c)}function S(l,c){const d={startLineNumber:c.lineNumber,endLineNumber:c.lineNumber,startColumn:l.getLineMinColumn(c.lineNumber),endColumn:l.getLineMaxColumn(c.lineNumber)},b='\\{\\{[a-zA-Z0-9._() "]+\\}\\}';return l.findMatches(b,d,!0,!1,null,!0).some(A=>A.range.containsPosition(c))}class V{constructor(c,d){this.monaco=c,this.range=d,this.getSnippetsSuggestions=()=>this.getCompletionsFromDefinitions((0,e.Zn)(this.monaco)),this.getFunctionsSuggestions=()=>this.getCompletionsFromDefinitions(N(this.monaco)),this.getTemplateDataSuggestions=b=>{switch(b){case"":return this.getCompletionsFromDefinitions((0,e.y5)(this.monaco),(0,e.J_)(this.monaco));case"Alerts":return this.getCompletionsFromDefinitions((0,e.WA)(this.monaco));case"GroupLabels":case"CommonLabels":case"CommonAnnotations":case"Labels":case"Annotations":return this.getCompletionsFromDefinitions((0,e.wY)(this.monaco));default:return{suggestions:[]}}},this.getCompletionsFromDefinitions=(...b)=>({suggestions:(0,B.concat)(...b).map(A=>j(A,this.range))})}}function j({label:l,detail:c,documentation:d,kind:b,insertText:y},A){const U=typeof l=="string"?l:l.label,K=typeof l=="string"?{label:l,description:c}:{...l};return K.description??=c,{label:K,kind:b,insertText:y??U,range:A,documentation:d,detail:c}}const D="go-template",Z={id:D,extensions:[],aliases:[],mimetypes:[],loader:()=>Promise.resolve().then(n.bind(n,75720))},H=(l,c)=>{const{id:d,loader:b}=c;l.languages.getLanguages().find(A=>A.id===d)||(l.languages.register({id:d}),b().then(A=>{l.languages.setMonarchTokensProvider(d,A.language),l.languages.setLanguageConfiguration(d,A.conf)}))},R=l=>{const c=!!l.autoHeight,d=(0,a.useRef)(null),b=y=>{if(c){const A=y.getContentHeight();try{y.layout({height:A,width:NaN})}catch{}}};return(0,a.useEffect)(()=>()=>{d.current?.dispose()},[]),a.createElement(G.p,{showLineNumbers:!0,showMiniMap:!1,...l,onEditorDidMount:b,onBeforeEditorMount:y=>{H(y,Z),d.current=p(y)},language:D})}},39119:(q,M,n)=>{n.d(M,{OZ:()=>lt});var a=n(76932),G=n(72618),B=n(84195),C=n(21393);function N(t,s){(0,B.Z)(2,arguments);var m=(0,C.Z)(s);return(0,G.Z)(t,-m)}var e=n(31733),p=n(54126),S=n(97890),V=n(43741),j=n(69391),D=n(76067),_=n(25111),Z=n(97216),H=n(85765),R=n(64516),l=n(88062),c=n(4981),d=n(51343),b=n(5284),y=n(37739),A=n(89719),U=n(76244),K=n(42342),Q=n(68568);const ie="/api/alertmanager/grafana/config/api/v1/templates/test",Ae=Q.C.injectEndpoints({endpoints:t=>({previewTemplate:t.mutation({query:({template:s,alerts:m,name:o})=>({url:ie,data:{template:s,alerts:m,name:o},method:"POST"})})})}),{usePreviewTemplateMutation:xe}=Ae;var Te=n(68144),Ce=n(84415),me=n(67451),we=n(66172),Le=n(39138),Ne=n(36314),ue=n(79695),pe=n(58037),ge=n(49311),Re=n(73642),Oe=n(50248),fe=n(61231),De=n(14496),ae=n(5572),$e=n(76804),he=n(61375),Pe=n(42460),ee=n(59462),be=n(38149);function Ie({onSelect:t,isOpen:s,onClose:m}){const o=(0,D.wW)(We),[r,v]=(0,e.useState)(),[i,g]=(0,e.useState)(null),{useGetAlertmanagerAlertsQuery:I}=Pe.alertmanagerApi,{currentData:$=[],isFetching:w,isError:z}=I({amSourceName:me.GC,filter:{inhibited:!0,silenced:!0,active:!0}}),[W,F]=(0,e.useState)(""),x=(0,e.useMemo)(()=>{const f={};return!w&&$&&$.forEach(h=>{f[h.labels.alertname]||(f[h.labels.alertname]=[]),f[h.labels.alertname].push(h)}),f},[w,$]),O=(0,e.useCallback)(f=>{v(f),g(null)},[]),L=(0,e.useMemo)(()=>{const f=Object.keys(x).filter(u=>u.toLowerCase().includes(W.toLowerCase())),h={};return f.forEach(u=>{h[u]=x[u]}),h},[x,W]);if(z)return null;const E=Object.keys(L||[]),T=({index:f,style:h})=>{if(!L)return null;const u=E[f],P=u===r;return e.createElement("button",{type:"button",title:u,style:h,className:(0,a.cx)(o.rowButton,{[o.rowOdd]:f%2===1,[o.rowSelected]:P}),onClick:()=>O(u)},e.createElement("div",{className:(0,a.cx)(o.ruleTitle,o.rowButtonTitle)},u),e.createElement("div",{className:o.alertFolder},e.createElement(e.Fragment,null,e.createElement(ge.J,{name:"folder"})," ",L[u][0].labels.grafana_folder??"")))},te=(f,h)=>{const P=f.map(k=>k.labels).map(ee.cH),J=(0,be.z)(P),X=(0,be.r)((0,ee.cH)(h.labels),J);return X.length?(0,ee.P3)((0,ee.nW)(X)):(0,ee.P3)(h.labels)},ne=({index:f,style:h})=>{const u=(0,e.useMemo)(()=>r?x[r]:[],[]),P=u[f],J=i?.includes(P),X=(0,e.useMemo)(()=>te(u,P),[u,P]),re=()=>{if(J&&i){g(i.filter(k=>k!==P));return}g([...i||[],P])};return e.createElement("button",{type:"button",style:h,className:(0,a.cx)(o.rowButton,o.instanceButton,{[o.rowOdd]:f%2===1,[o.rowSelected]:J}),onClick:re},e.createElement("div",{className:o.rowButtonTitle,title:P.labels.alertname},e.createElement(pe.u,{placement:"bottom",content:e.createElement("pre",null,JSON.stringify(P,null,2)),theme:"info"},e.createElement("div",null,X.map((k,mt)=>e.createElement(De.V,{key:mt,name:k,className:o.tag}))))))},Y=()=>{const f=i?.map(h=>({annotations:h.annotations,labels:h.labels,startsAt:h.startsAt,endsAt:h.endsAt}))||[];t(f),le()},le=()=>{v(void 0),g(null),F(""),se("")},oe=()=>{le(),m()},se=f=>{F(f)};return e.createElement("div",null,e.createElement(ae.u,{title:"Select alert instances",className:o.modal,closeOnEscape:!0,isOpen:s,onDismiss:oe,contentClassName:o.modalContent},e.createElement("div",{className:o.container},e.createElement($e.H,{value:W,onChange:se,title:"Search alert rule",placeholder:"Search alert rule",autoFocus:!0}),e.createElement("div",null,r&&"Select one or more instances from the list below"||""),e.createElement("div",{className:o.column},w&&e.createElement(he.u,{text:"Loading rules...",className:o.loadingPlaceholder}),!w&&e.createElement(V.Z,null,({height:f,width:h})=>e.createElement(fe.t7,{itemSize:50,height:f,width:h,itemCount:E.length},T))),e.createElement("div",{className:o.column},!r&&!w&&e.createElement("div",{className:o.selectedRulePlaceholder},e.createElement("div",null,"Select an alert rule to get a list of available firing instances")),w&&e.createElement(he.u,{text:"Loading rule...",className:o.loadingPlaceholder}),r&&x[r].length&&!w&&e.createElement(V.Z,null,({width:f,height:h})=>e.createElement(fe.t7,{itemSize:32,height:h,width:f,itemCount:x[r].length||0},ne)))),e.createElement(ae.u.ButtonRow,null,e.createElement(d.zx,{type:"button",variant:"secondary",onClick:oe},"Cancel"),e.createElement(d.zx,{type:"button",variant:"primary",disabled:!(r&&i),onClick:()=>{r&&i&&Y()}},"Add alert data to payload"))))}const We=t=>{const s=(0,d.gN)(t);return{container:(0,a.css)`
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      grid-template-rows: min-content auto;
      gap: ${t.spacing(2)};
      flex: 1;
    `,tag:(0,a.css)`
      margin: 5px;
    `,column:(0,a.css)`
      flex: 1 1 auto;
    `,alertLabels:(0,a.css)`
      overflow-x: auto;
      height: 32px;
    `,ruleTitle:(0,a.css)`
      height: 22px;
      font-weight: ${t.typography.fontWeightBold};
    `,rowButton:(0,a.css)`
      ${s};
      padding: ${t.spacing(.5)};
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
      white-space: nowrap;
      cursor: pointer;
      border: 2px solid transparent;

      &:disabled {
        cursor: not-allowed;
        color: ${t.colors.text.disabled};
      }
    `,rowButtonTitle:(0,a.css)`
      overflow-x: auto;
    `,rowSelected:(0,a.css)`
      border-color: ${t.colors.primary.border};
    `,rowOdd:(0,a.css)`
      background-color: ${t.colors.background.secondary};
    `,instanceButton:(0,a.css)`
      display: flex;
      gap: ${t.spacing(1)};
      justify-content: space-between;
      align-items: center;
    `,loadingPlaceholder:(0,a.css)`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,selectedRulePlaceholder:(0,a.css)`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-weight: ${t.typography.fontWeightBold};
    `,modal:(0,a.css)`
      height: 100%;
    `,modalContent:(0,a.css)`
      flex: 1;
      display: flex;
      flex-direction: column;
    `,modalAlert:(0,a.css)`
      flex-grow: 0;
    `,warnIcon:(0,a.css)`
      fill: ${t.colors.warning.main};
    `,labels:(0,a.css)`
      justify-content: flex-start;
    `,alertFolder:(0,a.css)`
      height: 20px;
      font-size: ${t.typography.bodySmall.fontSize};
      color: ${t.colors.text.secondary};
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      column-gap: ${t.spacing(1)};
      align-items: center;
    `}},Fe=[{name:"Receiver",type:"string",notes:"Name of the contact point that the notification is being sent to."},{name:"Status",type:"string",notes:"firing if at least one alert is firing, otherwise resolved"},{name:"Alerts",type:"[]Alert",notes:"List of alert objects that are included in this notification."},{name:"Alerts.Firing",type:"[]Alert",notes:"List of firing alerts"},{name:"Alerts.Resolved",type:"[]Alert",notes:"List of resolved alerts"},{name:"GroupLabels",type:"KeyValue",notes:"Labels these alerts were grouped by."},{name:"CommonLabels",type:"KeyValue",notes:"Labels common to all the alerts included in this notification."},{name:"CommonAnnotations",type:"KeyValue",notes:"Annotations common to all the alerts included in this notification."},{name:"ExternalURL",type:"string",notes:"Back link to the Grafana that sent the notification."}],Ke=[{name:"Labels",type:"KeyValue",notes:"Set of labels attached to the alert."},{name:"Annotations",type:"KeyValue",notes:"Set of annotations attached to the alert."},{name:"StartsAt",type:"time.Time",notes:"Time the alert started firing."},{name:"EndsAt",type:"time.Time",notes:"Time the alert ends firing."}],Me=[{name:"Status",type:"string",notes:"firing or resolved."},{name:"Labels",type:"KeyValue",notes:"Set of labels attached to the alert."},{name:"Annotations",type:"KeyValue",notes:"Set of annotations attached to the alert."},{name:"Values",type:"KeyValue",notes:"The values of all instant queries, reduce and math expressions, and classic conditions for the alert. It does not contain time series data."},{name:"StartsAt",type:"time.Time",notes:"Time the alert started firing."},{name:"EndsAt",type:"time.Time",notes:"Only set if the end time of an alert is known. Otherwise set to a configurable timeout period from the time since the last alert was received."},{name:"GeneratorURL",type:"string",notes:"A back link to Grafana or external Alertmanager."},{name:"SilenceURL",type:"string",notes:"Link to Grafana silence for with labels for this alert pre-filled. Only for Grafana managed alerts."},{name:"DashboardURL",type:"string",notes:"Link to Grafana dashboard, if alert rule belongs to one. Only for Grafana managed alerts."},{name:"PanelURL",type:"string",notes:"Link to Grafana dashboard panel, if alert rule belongs to one. Only for Grafana managed alerts."},{name:"Fingerprint",type:"string",notes:"Fingerprint that can be used to identify the alert."},{name:"ValueString",type:"string",notes:"String that contains the labels and value of each reduced expression in the alert."}],Be=[{name:"SortedPairs",returns:"KeyValue",notes:"Returns sorted list of key & value string pairs"},{name:"Remove",args:"[]string",returns:"KeyValue",notes:"Returns a copy of the Key/Value map without the given keys."},{name:"Names",returns:"[]string",notes:"List of label names"},{name:"Values",returns:"[]string",notes:"List of label values"}],Ve=`{
  "summary": "alert summary",
  "description": "alert description"
}
`;var ye=n(96477);function Ge(){const t=(0,D.wW)(Ue),s=e.createElement(ce,{caption:e.createElement("h4",{className:t.header},"Alert template data ",e.createElement("span",null,"Available only when in the context of an Alert (e.g. inside .Alerts loop)")),dataItems:Me});return e.createElement(y.K,{gap:2},e.createElement(ce,{caption:e.createElement("h4",{className:t.header},"Template Data"),dataItems:Fe,typeRenderer:m=>m==="[]Alert"?e.createElement(ye.z,{content:s},e.createElement("div",{className:t.interactiveType},m)):m==="KeyValue"?e.createElement(ye.z,{content:e.createElement(ze,null)},e.createElement("div",{className:t.interactiveType},m)):m}))}const Ue=t=>({header:(0,a.css)`
    color: ${t.colors.text.primary};

    span {
      color: ${t.colors.text.secondary};
      font-size: ${t.typography.bodySmall.fontSize};
    }
  `,interactiveType:(0,a.css)`
    color: ${t.colors.text.link};
  `});function ce({dataItems:t,caption:s,typeRenderer:m}){const o=(0,D.wW)(ve);return e.createElement("table",{className:o.table},e.createElement("caption",null,s),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Name"),e.createElement("th",null,"Type"),e.createElement("th",null,"Notes"))),e.createElement("tbody",null,t.map(({name:r,type:v,notes:i},g)=>e.createElement("tr",{key:g},e.createElement("td",null,r),e.createElement("td",null,m?m(v):v),e.createElement("td",null,i)))))}function ze(){const t=(0,D.wW)(ve);return e.createElement("div",null,"KeyValue is a set of key/value string pairs that represent labels and annotations.",e.createElement("pre",null,e.createElement("code",null,Ve)),e.createElement("table",{className:t.table},e.createElement("caption",null,"Key-value methods"),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Name"),e.createElement("th",null,"Arguments"),e.createElement("th",null,"Returns"),e.createElement("th",null,"Notes"))),e.createElement("tbody",null,Be.map(({name:s,args:m,returns:o,notes:r})=>e.createElement("tr",{key:s},e.createElement("td",null,s),e.createElement("td",null,m),e.createElement("td",null,o),e.createElement("td",null,r))))))}const ve=t=>({table:(0,a.css)`
    border-collapse: collapse;
    width: 100%;

    caption {
      caption-side: top;
    }

    td,
    th {
      padding: ${t.spacing(1,1)};
    }

    thead {
      font-weight: ${t.typography.fontWeightBold};
    }

    tbody tr:nth-child(2n + 1) {
      background-color: ${t.colors.background.secondary};
    }

    tbody td:nth-child(1) {
      font-weight: ${t.typography.fontWeightBold};
    }

    tbody td:nth-child(2) {
      font-style: italic;
    }
  `});var je=n(96305),Je=n(96856),ke=n(84847),Ze=n(23566);const He={annotations:[{key:"",value:""}],labels:[{key:"",value:""}],status:"firing"},Qe=({isOpen:t,onDismiss:s,onAccept:m})=>{const o=(0,D.wW)(Ye),[r,v]=(0,e.useState)([]),i=(0,p.cI)({defaultValues:He,mode:"onBlur"}),g=i.watch("annotations"),I=i.watch("labels"),[$,w]=(0,e.useState)("firing"),z=()=>{const O={annotations:g.filter(({key:L,value:E})=>!!L&&!!E).reduce((L,{key:E,value:T})=>({...L,[E]:T}),{}),labels:I.filter(({key:L,value:E})=>!!L&&!!E).reduce((L,{key:E,value:T})=>({...L,[E]:T}),{}),startsAt:"2023-04-01T00:00:00Z",endsAt:$==="firing"?(0,G.Z)(new Date,1).toISOString():N(new Date,1).toISOString()};v(L=>[...L,O]),i.reset()},W=()=>{m(r),v([]),i.reset(),w("firing")},F=()=>{const O=I.some(E=>E.key!==""&&E.value!==""),L=g.some(E=>E.key!==""&&E.value!=="");return O||L},x=[{label:"Firing",value:"firing"},{label:"Resolved",value:"resolved"}];return e.createElement(ae.u,{onDismiss:s,isOpen:t,title:"Add custom alerts"},e.createElement(p.RV,{...i},e.createElement("form",{onSubmit:O=>{O.preventDefault(),O.stopPropagation(),i.reset(),w("firing")}},e.createElement(e.Fragment,null,e.createElement(je.Z,null,e.createElement(y.K,{direction:"column",gap:1},e.createElement("div",{className:o.section},e.createElement(ke.Z,null)),e.createElement("div",{className:o.section},e.createElement(Ze.Z,null)),e.createElement("div",{className:o.flexWrapper},e.createElement(Je.S,{value:$,options:x,onChange:O=>w(O)}),e.createElement(d.zx,{onClick:z,className:o.onAddButton,icon:"plus-circle",type:"button",variant:"secondary",disabled:!F()},"Add alert data"))))),e.createElement("div",{className:o.onSubmitWrapper}),r.length>0&&e.createElement(y.K,{direction:"column",gap:1},e.createElement("h5",null," Review alert data to add to the payload:"),e.createElement("pre",{className:o.result,"data-testid":"payloadJSON"},JSON.stringify(r,null,2))),e.createElement("div",{className:o.onSubmitWrapper},e.createElement(ae.u.ButtonRow,null,e.createElement(d.zx,{onClick:W,disabled:r.length===0,className:o.onSubmitButton},"Add alert data to payload"))))))},Ye=t=>({section:(0,a.css)`
    margin-bottom: ${t.spacing(2)};
  `,onAddButton:(0,a.css)`
    flex: none;
    width: fit-content;
    padding-right: ${t.spacing(1)};
    margin-left: auto;
  `,flexWrapper:(0,a.css)`
    display: flex;
    flex-direction: row,
    justify-content: space-between;
  `,onSubmitWrapper:(0,a.css)`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
  `,onSubmitButton:(0,a.css)`
    margin-left: ${t.spacing(2)};
  `,result:(0,a.css)`
    width: 570px;
    height: 363px;
  `}),Xe="Reset to default";function qe({payload:t,setPayload:s,defaultPayload:m,setPayloadFormatError:o,payloadFormatError:r,onPayloadError:v}){const i=(0,D.wW)(Ee),g=()=>{s(m)},[I,$]=(0,e.useState)(!1),w=()=>{$(!1)},z=r!==null,W=()=>{try{const T=JSON.parse(t);JSON.stringify([...T]),o(null)}catch(T){throw o(T instanceof Error?T.message:"Invalid JSON."),v(),T}},F=()=>{try{W(),$(!0)}catch{}},x=()=>{try{W(),E(!0)}catch{}},O=T=>{w(),E(!1),s(te=>{const ne=JSON.parse(te);return JSON.stringify([...ne,...T],void 0,2)})},[L,E]=(0,e.useState)(!1);return e.createElement("div",{className:i.wrapper},e.createElement("div",{className:i.editor},e.createElement("div",{className:i.title},"Payload data",e.createElement(pe.u,{placement:"top",content:e.createElement(_e,null),theme:"info"},e.createElement(ge.J,{name:"info-circle",className:i.tooltip,size:"xl"}))),e.createElement(V.Z,{disableHeight:!0},({width:T})=>e.createElement("div",{className:i.editorWrapper},e.createElement(Re.p,{width:T,height:362,language:"json",showLineNumbers:!0,showMiniMap:!1,value:t,readOnly:!1,onBlur:s}))),e.createElement("div",{className:i.buttonsWrapper},e.createElement(d.zx,{type:"button",variant:"secondary",className:i.button,icon:"bell",disabled:z,onClick:x},"Select alert instances"),e.createElement(d.zx,{onClick:F,className:i.button,icon:"plus-circle",type:"button",variant:"secondary",disabled:z},"Add custom alerts"),e.createElement(d.zx,{onClick:g,className:i.button,icon:"arrow-up",type:"button",variant:"destructive"},Xe),r!==null&&e.createElement(Oe.C,{color:"orange",icon:"exclamation-triangle",text:"JSON Error",tooltip:"Fix errors in payload, and click Refresh preview button"}))),e.createElement(Qe,{isOpen:I,onDismiss:w,onAccept:O}),e.createElement(Ie,{onSelect:O,isOpen:L,onClose:()=>E(!1)}))}const _e=()=>{const t=(0,D.wW)(Ee);return e.createElement(ce,{caption:e.createElement("h4",{className:t.templateDataDocsHeader},"Alert template data ",e.createElement("span",null,"This is the list of alert data fields used in the preview.")),dataItems:Ke})},Ee=t=>({jsonEditor:(0,a.css)`
    width: 100%;
    height: 100%;
  `,buttonsWrapper:(0,a.css)`
    margin-top: ${t.spacing(1)};
    display: flex;
    flex-wrap: wrap;
  `,button:(0,a.css)`
    flex: none;
    width: fit-content;
    padding-right: ${t.spacing(1)};
    margin-right: ${t.spacing(1)};
    margin-bottom: ${t.spacing(1)};
  `,title:(0,a.css)`
    font-weight: ${t.typography.fontWeightBold};
    heigth: 41px;
    padding-top: 10px;
    padding-left: ${t.spacing(2)};
    margin-top: 19px;
  `,wrapper:(0,a.css)`
    flex: 1;
    min-width: 450px;
  `,tooltip:(0,a.css)`
    padding-left: ${t.spacing(1)};
  `,editorWrapper:(0,a.css)`
    width: min-content;
    padding-top: 7px;
  `,editor:(0,a.css)`
    display: flex;
    flex-direction: column;
    margin-top: ${t.spacing(-1)};
  `,templateDataDocsHeader:(0,a.css)`
    color: ${t.colors.text.primary};

    span {
      color: ${t.colors.text.secondary};
      font-size: ${t.typography.bodySmall.fontSize};
    }
  `});var et=n(33143),tt=n(13121);const nt=Object.freeze({name:"",content:""}),at=t=>t.pathname.endsWith("/duplicate"),Se=`[
  {
    "annotations": {
      "summary": "Instance instance1 has been down for more than 5 minutes"
    },
    "labels": {
      "instance": "instance1"
    },
    "startsAt": "${N(new Date,1).toISOString()}"
  }]
`,lt=({existing:t,alertManagerSourceName:s,config:m,provenance:o})=>{const r=(0,D.wW)(de),v=(0,K.useDispatch)();(0,U.x)(u=>u.unifiedAlerting.saveAMConfig=Le.oq);const{loading:i,error:g}=(0,Te._)(u=>u.saveAMConfig),I=(0,S.TH)(),$=at(I),[w,z]=(0,e.useState)(Se),[W,F]=(0,e.useState)(null),[x,O]=(0,e.useState)("content"),L=()=>O("preview"),E=u=>{const P=(0,Ne.Z)(u.name,u.content),J={...m.template_files,[u.name]:P};t&&t.name!==u.name&&delete J[t.name];const X=[...(m.alertmanager_config.templates??[]).filter(k=>k!==t?.name),u.name],re={template_files:J,alertmanager_config:{...m.alertmanager_config,templates:X}};v((0,Ce.mM)({alertManagerSourceName:s,newConfig:re,oldConfig:m,successMessage:"Template saved.",redirectPath:"/alerting/notifications"}))},T=(0,p.cI)({mode:"onSubmit",defaultValues:t??nt}),{handleSubmit:te,register:ne,formState:{errors:Y},getValues:le,setValue:oe,watch:se}=T,f=u=>!m.template_files[u]||t?.name===u?!0:"Another template with this name already exists.",h=s===me.GC;return e.createElement(p.RV,{...T},e.createElement("form",{onSubmit:te(E)},e.createElement("h4",null,t&&!$?"Edit notification template":"Create notification template"),g&&e.createElement(_.b,{severity:"error",title:"Error saving template"},g.message||(0,j.kW)(g)&&g.data?.message||String(g)),o&&e.createElement(ue.Xq,{resource:ue.Uv.Template}),e.createElement(Z.C,{disabled:!!o},e.createElement(H.g,{label:"Template name",error:Y?.name?.message,invalid:!!Y.name?.message,required:!0},e.createElement(R.I,{...ne("name",{required:{value:!0,message:"Required."},validate:{nameIsUnique:f}}),placeholder:"Give your template a name",width:42,autoFocus:!0})),e.createElement(ot,null),e.createElement("div",{className:r.editorsWrapper},e.createElement("div",{className:r.contentContainer},e.createElement(l.J,null,e.createElement(c.O,{label:"Content",active:x==="content",onChangeTab:()=>O("content")}),h&&e.createElement(c.O,{label:"Preview",active:x==="preview",onChangeTab:()=>O("preview")})),e.createElement("div",{className:r.contentContainerEditor},e.createElement(V.Z,null,({width:u})=>e.createElement(e.Fragment,null,x==="content"?e.createElement("div",null,e.createElement(H.g,{error:Y?.content?.message,invalid:!!Y.content?.message,required:!0},e.createElement("div",{className:r.editWrapper},e.createElement(et.u,{value:le("content"),width:u,height:363,onBlur:P=>oe("content",P)}))),e.createElement("div",{className:r.buttons},i&&e.createElement(d.zx,{disabled:!0,icon:"spinner",variant:"primary"},"Saving..."),!i&&e.createElement(d.zx,{type:"submit",variant:"primary"},"Save template"),e.createElement(d.Qj,{disabled:i,href:(0,we.eQ)("alerting/notifications",s),variant:"secondary",type:"button"},"Cancel"))):e.createElement(dt,{width:u,payload:w,templateName:se("name"),setPayloadFormatError:F,payloadFormatError:W}))))),h&&e.createElement(qe,{payload:w,setPayload:z,defaultPayload:Se,setPayloadFormatError:F,payloadFormatError:W,onPayloadError:L}))),e.createElement(b.s,{label:"Data cheat sheet",isOpen:!1,className:r.collapsableSection},e.createElement(Ge,null))))};function ot(){const t=(0,D.wW)(de);return e.createElement(_.b,{title:"Templating guideline",severity:"info"},e.createElement(y.K,{direction:"row"},e.createElement("div",null,"Grafana uses Go templating language to create notification messages.",e.createElement("br",null),"To find out more about templating please visit our documentation."),e.createElement("div",null,e.createElement(d.Qj,{href:"https://grafana.com/docs/grafana/latest/alerting/manage-notifications/template-notifications/",target:"_blank",icon:"external-link-alt",variant:"secondary"},"Templating documentation"))),e.createElement("div",{className:t.snippets},"To make templating easier, we provide a few snippets in the content editor to help you speed up your workflow.",e.createElement("div",{className:t.code},Object.values(tt.hn).map(s=>s.label).join(", "))))}function st(t){const s=t.filter(r=>r.text.trim().length>0),m=s.length>1,o=r=>{const v=`Preview for ${r.name}:`,i="=".repeat(v.length).concat(">"),g="<".concat("=".repeat(v.length));return m?`${v}
${i}${r.text}${g}
`:`${i}${r.text}${g}
`};return s.map(r=>o(r)).join(`
`)}function rt(t){return t.map(s=>s.name?`ERROR in ${s.name}:
`.concat(`${s.kind}
${s.message}
`):`ERROR:
${s.kind}
${s.message}
`).join(`
`)}const it="Preview request failed. Check if the payload data has the correct structure.";function ct(t,s,m){const o=t?it:void 0,r=t||!!s,v=s||o,i=m?.results,g=m?.errors,I=i?st(i):"",$=g?rt(g):"";return r?v:`${I}
${$}`}function dt({payload:t,templateName:s,payloadFormatError:m,setPayloadFormatError:o,width:r}){const v=(0,D.wW)(de),{watch:i}=(0,p.Gc)(),g=i("content"),[I,{data:$,isError:w,isLoading:z}]=xe(),W=ct(w,m,$),F=(0,e.useCallback)(()=>{try{const x=JSON.parse(t);JSON.stringify([...x]),I({template:g,alerts:x,name:s}),o(null)}catch(x){o(x instanceof Error?x.message:"Invalid JSON.")}},[g,s,t,o,I]);return(0,e.useEffect)(()=>F(),[F]),e.createElement("div",{style:{width:`${r}px`},className:v.preview.wrapper},z&&e.createElement(e.Fragment,null,e.createElement(A.$,{inline:!0})," Loading preview..."),e.createElement("pre",{className:v.preview.result,"data-testid":"payloadJSON"},W),e.createElement(d.zx,{onClick:F,className:v.preview.button,icon:"arrow-up",type:"button",variant:"secondary"},"Refresh preview"))}const de=t=>({contentContainer:(0,a.css)`
    flex: 1;
    margin-bottom: ${t.spacing(6)};
  `,contentContainerEditor:(0,a.css)`
      flex:1;
      display: flex;
      padding-top: 10px;
      gap: ${t.spacing(2)};
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
      ${t.breakpoints.up("xxl")} {
        flex - wrap: nowrap;
    }
      min-width: 450px;
      height: 363px;
      `,snippets:(0,a.css)`
    margin-top: ${t.spacing(2)};
    font-size: ${t.typography.bodySmall.fontSize};
  `,code:(0,a.css)`
    color: ${t.colors.text.secondary};
    font-weight: ${t.typography.fontWeightBold};
  `,buttons:(0,a.css)`
    display: flex;
    & > * + * {
      margin-left: ${t.spacing(1)};
    }
    margin-top: -7px;
  `,textarea:(0,a.css)`
    max-width: 758px;
  `,editWrapper:(0,a.css)`
      display: flex;
      width: 100%
      heigth:100%;
      position: relative;
      `,toggle:(0,a.css)`
      color: theme.colors.text.secondary,
      marginRight: ${t.spacing(1)}`,preview:{wrapper:(0,a.css)`
      display: flex;
      width: 100%
      heigth:100%;
      position: relative;
      flex-direction: column;
      `,result:(0,a.css)`
      width: 100%;
      height: 363px;
    `,button:(0,a.css)`
      flex: none;
      width: fit-content;
      margin-top: -6px;
    `},collapsableSection:(0,a.css)`
    width: fit-content;
  `,editorsWrapper:(0,a.css)`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: ${t.spacing(1)};
  `})},13121:(q,M,n)=>{n.d(M,{J_:()=>j,WA:()=>D,y5:()=>V,wY:()=>_,Zn:()=>H,hn:()=>Z});const a=`
{{ range .Alerts }}
  Status: {{ .Status }}
  Starts at: {{ .StartsAt }}
{{ end }}
`,G=`
[{{.Status}}] {{ .Labels.alertname }}

Labels:
{{ range .Labels.SortedPairs }}
  {{ .Name }}: {{ .Value }}
{{ end }}

{{ if gt (len .Annotations) 0 }}
Annotations:
{{ range .Annotations.SortedPairs }}
  {{ .Name }}: {{ .Value }}
{{ end }}
{{ end }}

{{ if gt (len .SilenceURL ) 0 }}
  Silence alert: {{ .SilenceURL }}
{{ end }}
{{ if gt (len .DashboardURL ) 0 }}
  Go to dashboard: {{ .DashboardURL }}
{{ end }}
`,B=S("GroupLabels.SortedPairs"),C=S("CommonLabels.SortedPairs"),N=S("CommonAnnotations.SortedPairs"),e=S("Labels.SortedPairs"),p=S("Annotations.SortedPairs");function S(R){return`
{{ range .${R} }}
  {{ .Name }} = {{ .Value }}
{{ end }}`}function V(R){const l=R.languages.CompletionItemKind.Field;return[{label:"Alerts",kind:l,detail:"Alert[]",documentation:{value:"An Array containing all alerts"}},{label:"Receiver",kind:l,detail:"string"},{label:"Status",kind:l,detail:"string"},{label:"GroupLabels",kind:l,detail:"[]KeyValue"},{label:"CommonLabels",kind:l,detail:"[]KeyValue"},{label:"CommonAnnotations",kind:l,detail:"[]KeyValue"},{label:"ExternalURL",kind:l,detail:"string"}]}function j(R){const l=R.languages.CompletionItemKind.Field;return[{label:{label:"Status",detail:"(Alert)",description:"string"},kind:l,detail:"string",documentation:{value:"Status of the alert. It can be `firing` or `resolved`"}},{label:{label:"Labels",detail:"(Alert)"},kind:l,detail:"[]KeyValue",documentation:{value:"A set of labels attached to the alert."}},{label:{label:"Annotations",detail:"(Alert)"},kind:l,detail:"[]KeyValue",documentation:"A set of annotations attached to the alert."},{label:{label:"StartsAt",detail:"(Alert)"},kind:l,detail:"time.Time",documentation:"Time the alert started firing."},{label:{label:"EndsAt",detail:"(Alert)"},kind:l,detail:"time.Time",documentation:"Only set if the end time of an alert is known. Otherwise set to a configurable timeout period from the time since the last alert was received."},{label:{label:"GeneratorURL",detail:"(Alert)"},kind:l,detail:"string",documentation:"Back link to Grafana or external Alertmanager."},{label:{label:"SilenceURL",detail:"(Alert)"},kind:l,detail:"string",documentation:"Link to Grafana silence for with labels for this alert pre-filled. Only for Grafana managed alerts."},{label:{label:"DashboardURL",detail:"(Alert)"},kind:l,detail:"string",documentation:"Link to Grafana dashboard, if alert rule belongs to one. Only for Grafana managed alerts."},{label:{label:"PanelURL",detail:"(Alert)"},kind:l,detail:"string",documentation:"Link to Grafana dashboard panel, if alert rule belongs to one. Only for Grafana managed alerts."},{label:{label:"Fingerprint",detail:"(Alert)"},kind:l,detail:"string",documentation:"Fingerprint that can be used to identify the alert."},{label:{label:"ValueString",detail:"(Alert)"},kind:l,detail:"string",documentation:"String that contains labels and values of each reduced expression in the alert."}]}function D(R){const l=R.languages.CompletionItemKind.Field;return[{label:"Firing",kind:l,detail:"Alert[]"},{label:"Resolved",kind:l,detail:"Alert[]"}]}function _(R){const l=R.languages.CompletionItemKind.Field;return[{label:"SortedPairs",kind:l,detail:"[]KeyValue"},{label:"Names",kind:l,detail:"[]string"},{label:"Values",kind:l,detail:"[]string"},{label:"Remove",detail:"KeyValue[] function(keys []string)",kind:R.languages.CompletionItemKind.Method}]}const Z={alerts:{label:"alertsloop",description:"Renders a loop through alerts",snippet:a},alertDetails:{label:"alertdetails",description:"Renders all information available about the alert",snippet:G},groupLabels:{label:"grouplabelsloop",description:"Renders a loop through group labels",snippet:B},commonLabels:{label:"commonlabelsloop",description:"Renders a loop through common labels",snippet:C},commonAnnotations:{label:"commonannotationsloop",description:"Renders a loop through common annotations",snippet:N},labels:{label:"labelsloop",description:"Renders a loop through labels",snippet:e},annotations:{label:"annotationsloop",description:"Renders a loop through annotations",snippet:p}};function H(R){const l=R.languages.CompletionItemKind.Snippet,c=R.languages.CompletionItemInsertTextRule.InsertAsSnippet,{alerts:d,alertDetails:b,groupLabels:y,commonLabels:A,commonAnnotations:U,labels:K,annotations:Q}=Z;return[{label:d.label,documentation:d.description,kind:l,insertText:d.snippet,insertTextRules:c},{label:{label:b.label,detail:"(Alert)"},documentation:b.description,kind:l,insertText:b.snippet,insertTextRules:c},{label:y.label,documentation:y.description,kind:l,insertText:y.snippet,insertTextRules:c},{label:A.label,documentation:A.description,kind:l,insertText:A.snippet,insertTextRules:c},{label:U.label,documentation:U.description,kind:l,insertText:U.snippet,insertTextRules:c},{label:{label:K.label,detail:"(Alert)"},documentation:K.description,kind:l,insertText:K.snippet,insertTextRules:c},{label:{label:Q.label,detail:"(Alert)"},documentation:Q.description,kind:l,insertText:Q.snippet,insertTextRules:c}]}},38149:(q,M,n)=>{n.d(M,{r:()=>B,z:()=>C});var a=n(69781),G=n.n(a);function B(N,e){return N.filter(p=>!e.find(S=>JSON.stringify(S)===JSON.stringify(p)))}function C(N){const e=N.flatMap(S=>S);return(0,a.uniqBy)(e.filter(S=>e.filter(j=>(0,a.isEqual)(S,j)).length===Object.keys(N).length),S=>JSON.stringify(S))}},36314:(q,M,n)=>{n.d(M,{M:()=>C,Z:()=>B});var a=n(69781),G=n.n(a);function B(N,e){let p=e.trim();if(!p.match(/\{\{\s*define/)){const S=p.split(`
`).map(V=>"  "+V).join(`
`);p=`{{ define "${N}" }}
${S}
{{ end }}`}return p}function C(N){const e=(p,S)=>`{{ define "${S}_NEW_${(0,a.now)()}" }}`;return N.replace(/\{\{\s*define\s*\"(?<defineName>.*)\"\s*\}\}/g,e)}}}]);

//# sourceMappingURL=9119.d391fe98664a816828c5.js.map