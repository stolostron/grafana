"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5394,3889],{76244:(q,M,a)=>{a.d(M,{x:()=>I});var l=a(31733),n=a(42342),e=a(92089);function I(b){const S=(0,n.useDispatch)(),D=(0,l.useRef)(b);D.current=b,(0,l.useEffect)(()=>()=>{S((0,e.e)({cleanupAction:D.current}))},[S])}},84847:(q,M,a)=>{a.d(M,{Z:()=>w});var l=a(76932),n=a(16826),e=a(31733),I=a(54126),b=a(83870),S=a(76067),D=a(37739),A=a(36717),x=a(64516),O=a(28718),F=a(85765),R=a(51343),d=a(98319),k=a(32901);const De=({field:t})=>{const s=(0,S.wW)(xe);return e.createElement("div",null,e.createElement("span",{className:s.annotationTitle},"Custom annotation name and content"),e.createElement(x.I,{placeholder:"Enter custom annotation name...",width:18,...t,className:s.customAnnotationInput}))},xe=t=>({annotationTitle:(0,l.css)`
    color: ${t.colors.text.primary};
    margin-bottom: 3px;
  `,customAnnotationInput:(0,l.css)`
    margin-top: 5px;
    width: 100%;
  `}),Ce=De,Se=({annotationField:t,annotations:s,annotation:c,index:h})=>{const{control:p}=(0,I.Gc)();return e.createElement(D.K,{direction:"column",gap:0},e.createElement("label",null,e.createElement(k.g,{name:`annotations.${h}.key`,defaultValue:t.key,render:({field:{ref:i,...g}})=>{if(!d.vY[c])return e.createElement(Ce,{field:g});let W;switch(t.key){case d.q6.dashboardUID:W="Dashboard and panel";case d.q6.panelID:W="";default:W=d.vY[c]&&d.vY[c]+" (optional)"}return e.createElement("span",{"data-testid":`annotation-key-${h}`},e.createElement(A.x,{color:"primary",variant:"bodySmall"},W))},control:p,rules:{required:{value:!!s[h]?.value,message:"Required."}}})),e.createElement(A.x,{variant:"bodySmall",color:"secondary"},d._y[c]))};var U=a(49311),Ie=a(66172);const oe=({dashboard:t,panel:s,dashboardUid:c,panelId:h,onEditClick:p,onDeleteClick:i})=>{const g=(0,S.wW)(Pe),W=(0,Ie.RQ)(t?.uid||c),P=(0,Ie.yM)(t?.uid||c,s?.id?.toString()||h);return e.createElement("div",{className:g.container},t&&e.createElement("a",{href:W,className:g.link,target:"_blank",rel:"noreferrer","data-testid":"dashboard-annotation"},t.title," ",e.createElement(U.J,{name:"external-link-alt"})),!t&&e.createElement("span",{className:g.noLink},"Dashboard ",c," "),s&&e.createElement("a",{href:P,className:g.link,target:"_blank",rel:"noreferrer","data-testid":"panel-annotation"},s.title||"<No title>"," ",e.createElement(U.J,{name:"external-link-alt"})),!s&&e.createElement("span",{className:g.noLink}," - Panel ",h),(t||s)&&e.createElement(e.Fragment,null,e.createElement(U.J,{name:"pen",onClick:p,className:g.icon}),e.createElement(U.J,{name:"trash-alt",onClick:i,className:g.icon})))},Pe=t=>({container:(0,l.css)`
    margin-top: 5px;
  `,noLink:(0,l.css)`
    color: ${t.colors.text.secondary};
  `,link:(0,l.css)`
    color: ${t.colors.text.link};
    margin-right: ${t.spacing(1.5)};
  `,icon:(0,l.css)`
    margin-right: ${t.spacing(1)};
    cursor: pointer;
  `}),Ae=oe;var se=a(69781),re=a(24789),_=a(43741),ce=a(61231),ie=a(58037),de=a(5572),ee=a(25111),ue=a(76804),o=a(61375),r=a(68568);const C=r.C.injectEndpoints({endpoints:t=>({search:t.query({query:({query:s})=>{const c=new URLSearchParams({type:"dash-db",limit:"1000",page:"1",sort:"name_sort"});return s&&c.set("query",s),{url:`/api/search?${c.toString()}`}}}),dashboard:t.query({query:({uid:s})=>({url:`/api/dashboards/uid/${s}`})})})});var N=a(90093),y=a(25353);const E=(0,N.Z)(t=>{const{dashboard:s,meta:c}=structuredClone(t);return new y.f(s,c)});function T(t){return C.endpoints.dashboard.useQuery({uid:t??""},{skip:!t,selectFromResult:({currentData:c,data:h,...p})=>({dashboardModel:c?E(c):void 0,...p})})}function Y(t,s){return t.title&&s.title?t.title.localeCompare(s.title):t.title&&!s.title?1:!t.title&&s.title?-1:0}const B=({dashboardUid:t,panelId:s,isOpen:c,onChange:h,onDismiss:p})=>{const i=(0,S.wW)(H),[g,W]=(0,e.useState)(t),[P,pe]=(0,e.useState)(s),[te,Le]=(0,e.useState)(""),[X,J]=(0,e.useState)(""),[ae,fe]=(0,e.useState)(""),{useSearchQuery:Be}=C,{currentData:G=[],isFetching:Z}=Be({query:X}),{dashboardModel:z,isFetching:ne}=T(g),$e=(0,e.useCallback)(v=>{W(v),pe(void 0)},[]),ve=$(z),Ee=ve.filter(v=>v.title?.toLowerCase().includes(ae.toLowerCase())).sort(Y)??[],u=ve.find(v=>m(v)&&v.id?.toString()===P),f=(0,e.useMemo)(()=>G.map(v=>v.uid).indexOf(g??""),[G,g]),K=t&&t===g,j=f>=0,Q=(0,e.useCallback)(v=>{const V=f>=0;K&&V&&v?.scrollToItem(f,"smart")},[K,f]);(0,re.Z)(()=>{J(te)},500,[te]);const ye=({index:v,style:V})=>{const L=G[v],he=g===L.uid;return e.createElement("button",{type:"button",title:L.title,style:V,className:(0,l.cx)(i.rowButton,{[i.rowOdd]:v%2===1,[i.rowSelected]:he}),onClick:()=>$e(L.uid)},e.createElement("div",{className:(0,l.cx)(i.dashboardTitle,i.rowButtonTitle)},L.title),e.createElement("div",{className:i.dashboardFolder},e.createElement(U.J,{name:"folder"})," ",L.folderTitle??"General"))},le=({index:v,style:V})=>{const L=Ee[v],he=L.title||"<No title>",Oe=!!L.id&&P===L.id,Te=L.type==="graph"||L.type==="timeseries",be=!m(L);return e.createElement("button",{type:"button",style:V,disabled:be,className:(0,l.cx)(i.rowButton,i.panelButton,{[i.rowOdd]:v%2===1,[i.rowSelected]:Oe}),onClick:()=>be?se.noop:pe(L.id)},e.createElement("div",{className:i.rowButtonTitle,title:he},he),!Te&&!be&&e.createElement(ie.u,{content:"The alert tab and alert annotations are only supported on graph and timeseries panels."},e.createElement(U.J,{name:"exclamation-triangle",className:i.warnIcon,"data-testid":"warning-icon"})),be&&e.createElement(ie.u,{content:"This panel does not have a valid identifier."},e.createElement(U.J,{name:"info-circle","data-testid":"info-icon"})))};return e.createElement(de.u,{title:"Select dashboard and panel",closeOnEscape:!0,isOpen:c,onDismiss:p,className:i.modal,contentClassName:i.modalContent},!j&&t&&z&&e.createElement(ee.b,{title:"Current selection",severity:"info",topSpacing:0,bottomSpacing:1,className:i.modalAlert},e.createElement("div",null,"Dashboard: ",z.title," (",z.uid,") in folder"," ",z.meta?.folderTitle??"General"),u&&e.createElement("div",null,"Panel: ",u.title," (",u.id,")")),e.createElement("div",{className:i.container},e.createElement(ue.H,{value:te,onChange:Le,title:"Search dashboard",placeholder:"Search dashboard",autoFocus:!0}),e.createElement(ue.H,{value:ae,onChange:fe,title:"Search panel",placeholder:"Search panel"}),e.createElement("div",{className:i.column},Z&&e.createElement(o.u,{text:"Loading dashboards...",className:i.loadingPlaceholder}),!Z&&e.createElement(_.Z,null,({height:v,width:V})=>e.createElement(ce.t7,{ref:Q,itemSize:50,height:v,width:V,itemCount:G.length},ye))),e.createElement("div",{className:i.column},!g&&!ne&&e.createElement("div",{className:i.selectDashboardPlaceholder},e.createElement("div",null,"Select a dashboard to get a list of available panels")),ne&&e.createElement(o.u,{text:"Loading dashboard...",className:i.loadingPlaceholder}),g&&!ne&&e.createElement(_.Z,null,({width:v,height:V})=>e.createElement(ce.t7,{itemSize:32,height:V,width:v,itemCount:Ee.length},le)))),e.createElement(de.u.ButtonRow,null,e.createElement(R.zx,{type:"button",variant:"secondary",onClick:p,fill:"text"},"Cancel"),e.createElement(R.zx,{type:"button",variant:"primary",disabled:!(g&&P),onClick:()=>{g&&P&&h(g,P)}},"Confirm")))};function $(t){if(!t)return[];const s=t.panels.filter(p=>p.type!=="row"),c=t.panels.filter(p=>p.collapsed).flatMap(p=>p.panels??[]);return[...s,...c]}const m=t=>{const s=typeof t.id=="number",c=typeof t.type=="string",h="libraryPanel"in t;return s&&(c||h)},H=t=>{const s=(0,R.gN)(t);return{container:(0,l.css)`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: min-content auto;
      gap: ${t.spacing(2)};
      flex: 1;
    `,column:(0,l.css)`
      flex: 1 1 auto;
    `,dashboardTitle:(0,l.css)`
      height: 22px;
      font-weight: ${t.typography.fontWeightBold};
    `,dashboardFolder:(0,l.css)`
      height: 20px;
      font-size: ${t.typography.bodySmall.fontSize};
      color: ${t.colors.text.secondary};
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      column-gap: ${t.spacing(1)};
      align-items: center;
    `,rowButton:(0,l.css)`
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
    `,rowButtonTitle:(0,l.css)`
      text-overflow: ellipsis;
      overflow: hidden;
    `,rowSelected:(0,l.css)`
      border-color: ${t.colors.primary.border};
    `,rowOdd:(0,l.css)`
      background-color: ${t.colors.background.secondary};
    `,panelButton:(0,l.css)`
      display: flex;
      gap: ${t.spacing(1)};
      justify-content: space-between;
      align-items: center;
    `,loadingPlaceholder:(0,l.css)`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,selectDashboardPlaceholder:(0,l.css)`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-weight: ${t.typography.fontWeightBold};
    `,modal:(0,l.css)`
      height: 100%;
    `,modalContent:(0,l.css)`
      flex: 1;
      display: flex;
      flex-direction: column;
    `,modalAlert:(0,l.css)`
      flex-grow: 0;
    `,warnIcon:(0,l.css)`
      fill: ${t.colors.warning.main};
    `}};var me=a(2202),Re=a(66099);const ge=()=>{const t=(0,S.wW)(Ne),[s,c]=(0,b.Z)(!1),{control:h,register:p,watch:i,formState:{errors:g},setValue:W}=(0,I.Gc)(),P=i("annotations"),{fields:pe,append:te,remove:Le}=(0,I.Dq)({control:h,name:"annotations"}),X=P.find(u=>u.key===d.q6.dashboardUID)?.value,J=Number(P.find(u=>u.key===d.q6.panelID)?.value),[ae,fe]=(0,e.useState)(void 0),[Be,G]=(0,e.useState)(void 0),{dashboardModel:Z,isFetching:z}=T(X);(0,e.useEffect)(()=>{if(z||!Z)return;fe(Z);const f=$(Z).find(K=>K.id===J);G(f)},[J,Z,z]);const ne=(u,f)=>{const K=(0,n.Uy)(P,j=>{const Q=j.find(le=>le.key===d.q6.dashboardUID),ye=j.find(le=>le.key===d.q6.panelID);Q?Q.value=u:j.push({key:d.q6.dashboardUID,value:u}),ye?ye.value=f.toString():j.push({key:d.q6.panelID,value:f.toString()})});W("annotations",K),c(!1)},$e=()=>{const u=P.filter(f=>f.key!==d.q6.dashboardUID&&f.key!==d.q6.panelID);W("annotations",u),fe(void 0),G(void 0)},ve=()=>{c(!0)};function Ee(){const u="https://grafana.com/docs/grafana/latest/alerting/fundamentals/annotation-label/variables-label-annotation";return e.createElement(D.K,{direction:"row",gap:.5,alignItems:"baseline"},e.createElement(A.x,{variant:"bodySmall",color:"secondary"},"Add annotations to provide more context in your alert notifications."),e.createElement(me.h,{contentText:`Annotations add metadata to provide more information on the alert in your alert notifications.
          For example, add a Summary annotation to tell you which value caused the alert to fire or which server it happened on.
          Annotations can contain a combination of text and template code.`,externalLink:u,linkText:"Read about annotations",title:"Annotations"}))}return e.createElement(Re.z,{stepNo:4,title:"Add annotations",description:Ee(),fullWidth:!0},e.createElement(D.K,{direction:"column",gap:1},pe.map((u,f)=>{const K=P[f]?.key?.toLocaleLowerCase().endsWith("url"),j=K?x.I:O.K,Q=u.key;return e.createElement("div",{key:u.id,className:t.flexRow},e.createElement("div",null,e.createElement(Se,{annotationField:u,annotations:P,annotation:Q,index:f}),X&&J&&u.key===d.q6.dashboardUID&&e.createElement(Ae,{dashboard:ae,panel:Be,dashboardUid:X.toString(),panelId:J.toString(),onEditClick:ve,onDeleteClick:$e}),e.createElement("div",{className:t.annotationValueContainer},e.createElement(F.g,{hidden:u.key===d.q6.dashboardUID||u.key===d.q6.panelID,className:(0,l.cx)(t.flexRowItemMargin,t.field),invalid:!!g.annotations?.[f]?.value?.message,error:g.annotations?.[f]?.value?.message},e.createElement(j,{"data-testid":`annotation-value-${f}`,className:(0,l.cx)(t.annotationValueInput,{[t.textarea]:!K}),...p(`annotations.${f}.value`),placeholder:K?"https://":u.key&&`Enter a ${u.key}...`||"Enter custom annotation content...",defaultValue:u.value})),!d.vY[Q]&&e.createElement(R.zx,{type:"button",className:t.deleteAnnotationButton,"aria-label":"delete annotation",icon:"trash-alt",variant:"secondary",onClick:()=>Le(f)}))))}),e.createElement(D.K,{direction:"row",gap:1},e.createElement("div",{className:t.addAnnotationsButtonContainer},e.createElement(R.zx,{icon:"plus",type:"button",variant:"secondary",onClick:()=>{te({key:"",value:""})}},"Add custom annotation"),!ae&&e.createElement(R.zx,{type:"button",variant:"secondary",icon:"dashboard",onClick:()=>c(!0)},"Link dashboard and panel"))),s&&e.createElement(B,{isOpen:!0,dashboardUid:X,panelId:J,onChange:ne,onDismiss:()=>c(!1)})))},Ne=t=>({annotationValueInput:(0,l.css)`
    width: 394px;
  `,textarea:(0,l.css)`
    height: 76px;
  `,addAnnotationsButtonContainer:(0,l.css)`
    margin-top: ${t.spacing(1)};
    gap: ${t.spacing(1)};
    display: flex;
  `,field:(0,l.css)`
    margin-bottom: ${t.spacing(.5)};
  `,flexRow:(0,l.css)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,flexRowItemMargin:(0,l.css)`
    margin-top: ${t.spacing(1)};
  `,deleteAnnotationButton:(0,l.css)`
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
  `,annotationTitle:(0,l.css)`
    color: ${t.colors.text.primary};
    margin-bottom: 3px;
  `,annotationContainer:(0,l.css)`
    margin-top: 5px;
  `,annotationDescription:(0,l.css)`
    color: ${t.colors.text.secondary};
  `,annotationValueContainer:(0,l.css)`
    display: flex;
  `}),w=ge},23566:(q,M,a)=>{a.d(M,{Z:()=>ue});var l=a(76932),n=a(31733),e=a(54126),I=a(51343),b=a(76067),S=a(61375),D=a(37739),A=a(85765),x=a(32901),O=a(20888),F=a(64516),R=a(36717),d=a(42342),k=a(68144),De=a(84415),xe=a(64449),Ce=a(38834);const Me=(0,xe.c)({ignoreCase:!1});function Se(o,r){return Me({label:o.label??"",value:o.value??"",data:{}},r)}const U=(o,r,C)=>{const N=C.some(E=>E.label===o),y=o.trim().length;return!N&&!!y},oe=n.forwardRef(function({onChange:r,options:C,defaultValue:N,type:y,onOpenMenu:E=()=>{}},T){return n.createElement("div",{ref:T},n.createElement(A.g,{disabled:!1,"data-testid":`alertlabel-${y}-picker`},n.createElement(Ce.Ph,{placeholder:`Choose ${y}`,width:29,className:"ds-picker select-container",backspaceRemovesValue:!1,onChange:r,onOpenMenu:E,filterOption:Se,isValidNewOption:U,options:C,maxMenuHeight:500,noOptionsMessage:"No labels found",defaultValue:N,allowCustomValue:!0})))});var Pe=a(2202);const Ae=o=>{const r=(0,d.useDispatch)();(0,n.useEffect)(()=>{r((0,De.IA)(o))},[r,o]);const N=(0,k._)(E=>E.rulerRules)[o],y=(0,n.useMemo)(()=>{const E={},T=N?.result;return T&&Object.values(T).flatMap(B=>B).flatMap(B=>B.rules).forEach(B=>{B.labels&&Object.entries(B.labels).forEach(([$,m])=>{if(!m)return;const H=E[$];H?H.add(m):E[$]=new Set([m])})}),E},[N]);return{loading:N?.loading,labelsByKey:y}};function se(o=[]){return Array.from(o,r=>({label:r,value:r}))}const re=({remove:o,className:r,index:C})=>n.createElement(I.zx,{className:r,"aria-label":"delete label",icon:"trash-alt","data-testid":`delete-label-${C}`,variant:"secondary",onClick:()=>{o(C)}}),_=({append:o,className:r})=>n.createElement(I.zx,{className:r,icon:"plus-circle",type:"button",variant:"secondary",onClick:()=>{o({key:"",value:""})}},"Add label"),ce=({dataSourceName:o})=>{const r=(0,b.wW)(ee),{control:C,watch:N,formState:{errors:y}}=(0,e.Gc)(),E=N("labels"),{fields:T,remove:Y,append:B}=(0,e.Dq)({control:C,name:"labels"}),{loading:$,labelsByKey:m}=Ae(o),[H,me]=(0,n.useState)(""),Re=(0,n.useMemo)(()=>se(Object.keys(m)),[m]),ge=(0,n.useCallback)(w=>se(m[w]),[m]),Ne=(0,n.useMemo)(()=>ge(H),[H,ge]);return n.createElement(n.Fragment,null,$&&n.createElement(S.u,{text:"Loading"}),!$&&n.createElement(D.K,{direction:"column",gap:.5},T.map((w,t)=>n.createElement("div",{key:w.id},n.createElement("div",{className:(0,l.cx)(r.flexRow,r.centerAlignRow)},n.createElement(A.g,{className:r.labelInput,invalid:!!y.labels?.[t]?.key?.message,error:y.labels?.[t]?.key?.message,"data-testid":`label-key-${t}`},n.createElement(x.g,{name:`labels.${t}.key`,control:C,rules:{required:E[t]?.value?"Required.":!1},render:({field:{onChange:s,ref:c,...h}})=>n.createElement(oe,{...h,defaultValue:w.key?{label:w.key,value:w.key}:void 0,options:Re,onChange:p=>{s(p.value),me(p.value)},type:"key"})})),n.createElement(O.W,{className:r.equalSign},"="),n.createElement(A.g,{className:r.labelInput,invalid:!!y.labels?.[t]?.value?.message,error:y.labels?.[t]?.value?.message,"data-testid":`label-value-${t}`},n.createElement(x.g,{control:C,name:`labels.${t}.value`,rules:{required:E[t]?.value?"Required.":!1},render:({field:{onChange:s,ref:c,...h}})=>n.createElement(oe,{...h,defaultValue:w.value?{label:w.value,value:w.value}:void 0,options:Ne,onChange:p=>{s(p.value)},onOpenMenu:()=>{me(E[t].key)},type:"value"})})),n.createElement(re,{className:r.deleteLabelButton,index:t,remove:Y})))),n.createElement(_,{className:r.addLabelButton,append:B})))},ie=()=>{const o=(0,b.wW)(ee),{register:r,control:C,watch:N,formState:{errors:y}}=(0,e.Gc)(),E=N("labels"),{fields:T,remove:Y,append:B}=(0,e.Dq)({control:C,name:"labels"});return n.createElement(n.Fragment,null,T.map(($,m)=>n.createElement("div",{key:$.id},n.createElement("div",{className:(0,l.cx)(o.flexRow,o.centerAlignRow),"data-testid":"alertlabel-input-wrapper"},n.createElement(A.g,{className:o.labelInput,invalid:!!y.labels?.[m]?.key?.message,error:y.labels?.[m]?.key?.message},n.createElement(F.I,{...r(`labels.${m}.key`,{required:{value:!!E[m]?.value,message:"Required."}}),placeholder:"key","data-testid":`label-key-${m}`,defaultValue:$.key})),n.createElement(O.W,{className:o.equalSign},"="),n.createElement(A.g,{className:o.labelInput,invalid:!!y.labels?.[m]?.value?.message,error:y.labels?.[m]?.value?.message},n.createElement(F.I,{...r(`labels.${m}.value`,{required:{value:!!E[m]?.key,message:"Required."}}),placeholder:"value","data-testid":`label-value-${m}`,defaultValue:$.value})),n.createElement(re,{className:o.deleteLabelButton,index:m,remove:Y})))),n.createElement(_,{className:o.addLabelButton,append:B}))},de=({dataSourceName:o})=>{const r=(0,b.wW)(ee);return n.createElement("div",null,n.createElement(D.K,{direction:"column",gap:1},n.createElement(R.x,{element:"h5"},"Labels"),n.createElement(D.K,{direction:"row",gap:1},n.createElement(R.x,{variant:"bodySmall",color:"secondary"},"Add labels to your rule to annotate your rules, ease searching, or route to a notification policy."),n.createElement(Pe.h,{contentText:`The dropdown only displays labels that you have previously used for alerts.
            Select a label from the options below or type in a new one.`,title:"Labels"}))),n.createElement("div",{className:r.labelsContainer}),o?n.createElement(ce,{dataSourceName:o}):n.createElement(ie,null))},ee=o=>({icon:(0,l.css)({marginRight:o.spacing(.5)}),flexColumn:(0,l.css)({display:"flex",flexDirection:"column"}),flexRow:(0,l.css)({display:"flex",flexDirection:"row",justifyContent:"flex-start","& + button":{marginLeft:o.spacing(.5)}}),deleteLabelButton:(0,l.css)({marginLeft:o.spacing(.5),alignSelf:"flex-start"}),addLabelButton:(0,l.css)({flexGrow:0,alignSelf:"flex-start"}),centerAlignRow:(0,l.css)({alignItems:"baseline"}),equalSign:(0,l.css)({alignSelf:"flex-start",width:"28px",justifyContent:"center",marginLeft:o.spacing(.5)}),labelInput:(0,l.css)({width:"175px",marginBottom:`-${o.spacing(1)}`,"& + &":{marginLeft:o.spacing(1)}}),labelsContainer:(0,l.css)({marginBottom:o.spacing(3)})}),ue=de},2202:(q,M,a)=>{a.d(M,{h:()=>A});var l=a(76932),n=a(31733),e=a(76067),I=a(65930),b=a(37739),S=a(49311),D=a(36717);function A({contentText:O,externalLink:F,linkText:R,title:d}){const k=(0,e.wW)(x);return n.createElement(I.P,{content:n.createElement("div",{className:k.mutedText},O),title:n.createElement(b.K,{gap:1,direction:"row"},n.createElement(S.J,{name:"question-circle"}),d),footer:F?n.createElement("a",{href:F,target:"_blank",rel:"noreferrer"},n.createElement(b.K,{direction:"row",gap:.5,alignItems:"center"},n.createElement(D.x,{color:"link"},R," ",n.createElement(S.J,{size:"sm",name:"external-link-alt"})))):void 0,closeButton:!0,placement:"bottom-start"},n.createElement("div",{className:k.helpInfo},n.createElement(b.K,{direction:"row",alignItems:"center",gap:.5},n.createElement(S.J,{name:"question-circle",size:"sm"}),n.createElement(D.x,{variant:"bodySmall",color:"primary"},"Need help?"))))}const x=O=>({mutedText:(0,l.css)`
    color: ${O.colors.text.secondary};
    font-size: ${O.typography.size.sm};
  `,helpInfo:(0,l.css)`
    cursor: pointer;
    text-decoration: underline;
  `})},66099:(q,M,a)=>{a.d(M,{z:()=>D});var l=a(76932),n=a(31733),e=a(76067),I=a(97216),b=a(36717),S=a(37739);const D=({title:x,stepNo:O,children:F,fullWidth:R=!1,description:d})=>{const k=(0,e.wW)(A);return n.createElement("div",{className:k.parent},n.createElement(I.C,{className:(0,l.cx)(R&&k.fullWidth),label:n.createElement(b.x,{variant:"h3"},O,". ",x)},n.createElement(S.K,{direction:"column"},d&&n.createElement("div",{className:k.description},d),F)))},A=x=>({parent:(0,l.css)`
    display: flex;
    flex-direction: row;
    max-width: ${x.breakpoints.values.xl}px;
    border: solid 1px ${x.colors.border.weak};
    border-radius: ${x.shape.radius.default};
    padding: ${x.spacing(2)} ${x.spacing(3)};
  `,description:(0,l.css)`
    margin-top: -${x.spacing(2)};
  `,fullWidth:(0,l.css)`
    width: 100%;
  `})},3889:(q,M,a)=>{a.d(M,{W:()=>n});var l=a(42460);function n(e,I){const b=l.alertmanagerApi.endpoints.getAlertmanagerConfiguration.useQuery(e??"",{...I,skip:!e});return{...b,error:b.error}}}}]);

//# sourceMappingURL=5394.5725aacbba904c607896.js.map