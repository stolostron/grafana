"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6905],{97281:(K,h,t)=>{t.d(h,{j:()=>f});var n=t(5819),e=t(76687),o=t(52901),E=t(29480),D=t(74740),u=t(23707),i=t(84921);const f=({onChange:P,maxMenuHeight:C})=>{const p=(0,e.useMemo)(()=>(0,i.x)(),[]),s=(0,e.useMemo)(()=>p.map(g=>({label:g.name,imgUrl:g.info.logos.small,value:g})).sort((g,T)=>g.label?.localeCompare(T.label)),[p]),[O,M]=(0,e.useState)([]),B=(0,e.useCallback)(g=>{const T=g.filter(x=>x.value).map(x=>x.value);P(T),M(g)},[P]),c=(0,o.wW)(m),b={defaultOptions:!0,getOptionLabel:g=>g.label,getOptionValue:g=>g.value,noOptionsMessage:"No Panel types found",placeholder:"Filter by type",maxMenuHeight:C,options:s,value:O,onChange:B};return e.createElement("div",{className:c.container},O.length>0&&e.createElement(E.zx,{size:"xs",icon:"trash-alt",fill:"text",className:c.clear,onClick:()=>B([]),"aria-label":"Clear types"},"Clear types"),e.createElement(D.NU,{...b,prefix:e.createElement(u.J,{name:"filter"}),"aria-label":"Panel Type filter"}))};function m(P){return{container:n.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:n.css`
      label: clear;
      font-size: ${P.spacing(1.5)};
      position: absolute;
      top: -${P.spacing(4.5)};
      right: 0;
    `}}},62005:(K,h,t)=>{t.d(h,{p:()=>U});var n=t(5819),e=t(76687),o=t(60379),E=t(52901),D=t(23707),u=t(47597),i=t(52577),f=t(31007),m=t(17479),P=t(88282),C=t(29480),p=t(90840),s=t(34478),O=t(45653),M=t(81810);const B={loadingState:m.Gu.Loading,dashboardTitles:[]},c=(0,M.PH)("libraryPanels/delete/searchCompleted"),b=(a=B,l)=>c.match(l)?{...a,dashboardTitles:l.payload.dashboards.map(r=>r.title),loadingState:m.Gu.Done}:a;function g(a){return async function(l){const r=await(0,O.E8)(a.uid);l(c({dashboards:r}))}}const T=({libraryPanel:a,onDismiss:l,onConfirm:r})=>{const L=(0,E.wW)(p.J),[{dashboardTitles:y,loadingState:d},W]=(0,e.useReducer)(b,B),$=(0,e.useMemo)(()=>(0,s.tb)(W),[W]);(0,e.useEffect)(()=>{$(g(a))},[$,a]);const S=Boolean(y.length),R=d===m.Gu.Done;return e.createElement(P.u,{className:L.modal,title:"Delete library panel",icon:"trash-alt",onDismiss:l,isOpen:!0},R?null:e.createElement(x,null),R?e.createElement("div",null,S?e.createElement(I,{dashboardTitles:y}):null,S?null:e.createElement(v,null),e.createElement(P.u.ButtonRow,null,e.createElement(C.zx,{variant:"secondary",onClick:l,fill:"outline"},"Cancel"),e.createElement(C.zx,{variant:"destructive",onClick:r,disabled:S},"Delete"))):null)},x=()=>e.createElement("span",null,"Loading library panel..."),v=()=>{const a=(0,E.wW)(p.J);return e.createElement("div",{className:a.modalText},"Do you want to delete this panel?")},I=({dashboardTitles:a})=>{const l=(0,E.wW)(p.J),r=a.length===1?"dashboard.":"dashboards.",L=`${a.length} ${r}`;return a.length===0?null:e.createElement("div",null,e.createElement("p",{className:l.textInfo},"This library panel can not be deleted because it is connected to ",e.createElement("strong",null,L)," Remove the library panel from the dashboards listed below and retry."),e.createElement("table",{className:l.myTable},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Dashboard name"))),e.createElement("tbody",null,a.map((y,d)=>e.createElement("tr",{key:`dash-title-${d}`},e.createElement("td",null,y))))))},U=({libraryPanel:a,onClick:l,onDelete:r,showSecondaryActions:L})=>{const[y,d]=(0,e.useState)(!1),W=()=>{r?.(a),d(!1)},$=o.v.panels[a.model.type]??(0,i.X)(a.model.type).meta;return e.createElement(e.Fragment,null,e.createElement(f.X,{isCurrent:!1,title:a.name,description:a.description,plugin:$,onClick:()=>l?.(a),onDelete:L?()=>d(!0):void 0},e.createElement(z,{libraryPanel:a})),y&&e.createElement(T,{libraryPanel:a,onConfirm:W,onDismiss:()=>d(!1)}))};function z({libraryPanel:a}){const l=(0,E.wW)(F);return!a.meta?.folderUid&&!a.meta?.folderName?null:a.meta.folderUid?e.createElement("span",{className:l.metaContainer},e.createElement(u.r,{href:`/dashboards/f/${a.meta.folderUid}`},e.createElement(D.J,{name:"folder-upload",size:"sm"}),e.createElement("span",null,a.meta.folderName))):e.createElement("span",{className:l.metaContainer},e.createElement(D.J,{name:"folder",size:"sm"}),e.createElement("span",null,a.meta.folderName))}function F(a){return{metaContainer:n.css`
      display: flex;
      align-items: center;
      color: ${a.colors.text.secondary};
      font-size: ${a.typography.bodySmall.fontSize};
      padding-top: ${a.spacing(.5)};

      svg {
        margin-right: ${a.spacing(.5)};
        margin-bottom: 3px;
      }
    `}}},63584:(K,h,t)=>{t.d(h,{N:()=>I,e:()=>v});var n=t(5819),e=t(76687),o=t(84493),E=t(52901),D=t(68127),u=t(30708),i=t(97368),f=t.n(i),m=t(29480),P=t(74740),C=t(23707),p=t(35072),s=t(65140),O=t(83076);function M({onChange:a,maxMenuHeight:l}){const r=(0,E.wW)(c),[L,y]=(0,e.useState)(!1),d=(0,e.useCallback)(_=>B(_,y),[]),W=(0,e.useMemo)(()=>f()(d,300),[d]),[$,S]=(0,e.useState)([]),R=(0,e.useCallback)(_=>{const A=_.filter(N=>Boolean(N.value)).map(N=>N.value);a(A),S(_)},[a]);return e.createElement("div",{className:r.container},$.length>0&&e.createElement(m.zx,{size:"xs",icon:"trash-alt",fill:"text",className:r.clear,onClick:()=>a([]),"aria-label":"Clear folders"},"Clear folders"),e.createElement(P.M8,{value:$,onChange:R,isLoading:L,loadOptions:W,maxMenuHeight:l,placeholder:"Filter by folder",noOptionsMessage:"No folders found",prefix:e.createElement(C.J,{name:"filter"}),"aria-label":"Folder filter",defaultOptions:!0}))}async function B(a,l){l(!0);const r={query:a,type:s.o.DashFolder,permission:O.PermissionLevelString.View},y=(await(0,p.i)().search(r)).map(d=>({label:d.title,value:{uid:d.uid,title:d.title}}));return(!a||"general".includes(a.toLowerCase()))&&y.unshift({label:"General",value:{uid:"general",title:"General"}}),l(!1),y}function c(a){return{container:n.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:n.css`
      label: clear;
      font-size: ${a.spacing(1.5)};
      position: absolute;
      top: -${a.spacing(4.5)};
      right: 0;
    `}}var b=t(97281),g=t(88022),T=t(70),x=t(18823),v=(a=>(a.Tight="tight",a.Spacious="spacious",a))(v||{});const I=({onClick:a,variant:l="spacious",currentPanelId:r,currentFolderUID:L,perPage:y=T.gN,showPanelFilter:d=!1,showFolderFilter:W=!1,showSort:$=!1,showSecondaryActions:S=!1})=>{const R=(0,E.wW)((0,e.useCallback)(Y=>U(Y,l),[l])),[_,A]=(0,e.useState)(""),[N,j]=(0,e.useState)("");(0,o.Z)(()=>j(_),200,[_]);const[V,G]=(0,e.useState)({}),[H,w]=(0,e.useState)(L?[L]:[]),[J,X]=(0,e.useState)([]),Q=$||d||W,Z=l==="tight"?"lg":"xs";return e.createElement("div",{className:R.container},e.createElement(D.wc,{spacing:Z},e.createElement("div",{className:R.gridContainer},e.createElement("div",{className:R.filterInputWrapper},e.createElement(u.H,{value:_,onChange:A,placeholder:"Search by name or description",width:0,escapeRegex:!1})),Q&&e.createElement(z,{showSort:$,showPanelFilter:d,showFolderFilter:W,onSortChange:G,onFolderFilterChange:w,onPanelFilterChange:X,sortDirection:V.value,variant:l})),e.createElement("div",{className:R.libraryPanelsView},e.createElement(x.u,{onClickCard:a,searchString:N,sortDirection:V.value,panelFilter:J,folderFilter:H,currentPanelId:r,showSecondaryActions:S,perPage:y}))))};function U(a,l){const r=n.css`
    flex-direction: row;
    row-gap: ${a.spacing(1)};
  `;return{filterInputWrapper:n.css`
      flex-grow: ${l==="tight"?1:"initial"};
    `,container:n.css`
      width: 100%;
      overflow-y: auto;
      padding: ${a.spacing(1)};
    `,libraryPanelsView:n.css`
      width: 100%;
    `,gridContainer:n.css`
      ${l==="tight"?r:""};
      display: flex;
      flex-direction: column;
      width: 100%;
      column-gap: ${a.spacing(1)};
      row-gap: ${a.spacing(1)};
      padding-bottom: ${a.spacing(2)};
    `}}const z=e.memo(({variant:a="spacious",showSort:l,showPanelFilter:r,showFolderFilter:L,sortDirection:y,onSortChange:d,onFolderFilterChange:W,onPanelFilterChange:$})=>{const S=(0,E.wW)((0,e.useCallback)(A=>F(A,a),[a])),R=(0,e.useCallback)(A=>$(A.map(N=>N.id)),[$]),_=(0,e.useCallback)(A=>W(A.map(N=>N.uid??"")),[W]);return e.createElement("div",{className:S.container},l&&e.createElement(g.P,{value:y,onChange:d,filter:["alpha-asc","alpha-desc"]}),(L||r)&&e.createElement("div",{className:S.filterContainer},L&&e.createElement(M,{onChange:_}),r&&e.createElement(b.j,{onChange:R})))});z.displayName="SearchControls";function F(a,l="spacious"){const r=n.css`
    display: flex;
    gap: ${a.spacing(1)};
    flex-grow: 1;
    flex-direction: row;
    justify-content: end;
  `,L=n.css`
    ${r};
    flex-grow: initial;
    flex-direction: column;
    justify-content: normal;
  `,y=n.css`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    gap: 4px;
  `,d=n.css`
    ${y};
    flex-direction: column;
    margin-left: initial;
  `;switch(l){case"spacious":return{container:r,filterContainer:y};case"tight":return{container:L,filterContainer:d}}}},18823:(K,h,t)=>{t.d(h,{u:()=>P});var n=t(5819),e=t(76687),o=t(84493),E=t(17479),D=t(52901),u=t(91285),i=t(62005),f=t(34478),m=t(24133);const P=({className:p,onClickCard:s,searchString:O,sortDirection:M,panelFilter:B,folderFilter:c,showSecondaryActions:b,currentPanelId:g,perPage:T=40})=>{const x=(0,D.wW)(C),[{libraryPanels:v,page:I,perPage:U,numberOfPages:z,loadingState:F,currentPanelId:a},l]=(0,e.useReducer)(m._p,{...m.p$,currentPanelId:g,perPage:T}),r=(0,e.useMemo)(()=>(0,f.tb)(l),[l]);(0,o.Z)(()=>r((0,f.Xu)({searchString:O,sortDirection:M,panelFilter:B,folderFilterUIDs:c,page:I,perPage:U,currentPanelId:a})),300,[O,M,B,c,I,r]);const L=({uid:d})=>r((0,f.UO)(d,{searchString:O,page:I,perPage:U})),y=d=>r((0,m.oO)({page:d}));return e.createElement("div",{className:(0,n.cx)(x.container,p)},e.createElement("div",{className:x.libraryPanelList},F===E.Gu.Loading?e.createElement("p",null,"Loading library panels..."):v.length<1?e.createElement("p",{className:x.noPanelsFound},"No library panels found."):v?.map((d,W)=>e.createElement(i.p,{key:`library-panel=${W}`,libraryPanel:d,onDelete:L,onClick:s,showSecondaryActions:b}))),v.length?e.createElement("div",{className:x.pagination},e.createElement(u.t,{currentPage:I,numberOfPages:z,onNavigate:y,hideWhenSinglePage:!0})):null)},C=p=>({container:n.css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `,libraryPanelList:n.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${p.spacing(1)};
    `,searchHeader:n.css`
      display: flex;
    `,newPanelButton:n.css`
      margin-top: 10px;
      align-self: flex-start;
    `,pagination:n.css`
      align-self: center;
      margin-top: ${p.spacing(1)};
    `,noPanelsFound:n.css`
      label: noPanelsFound;
      min-height: 200px;
    `})},34478:(K,h,t)=>{t.d(h,{UO:()=>M,Xu:()=>O,tb:()=>B});var n=t(82179),e=t(49914),o=t(39792),E=t(97725),D=t(10956),u=t(87379),i=t(36708),f=t(62922),m=t(37362),P=t(25687),C=t(76075),p=t(45653),s=t(24133);function O(c){return function(b){const g=new n.w0,T=(0,e.D)((0,p.Pq)({searchString:c.searchString,perPage:c.perPage,page:c.page,excludeUid:c.currentPanelId,sortDirection:c.sortDirection,typeFilter:c.panelFilter,folderFilterUIDs:c.folderFilterUIDs})).pipe((0,u.z)(({perPage:x,elements:v,page:I,totalCount:U})=>(0,o.of)((0,s.zK)({libraryPanels:v,page:I,perPage:x,totalCount:U}))),(0,i.K)(x=>(console.error(x),(0,o.of)((0,s.zK)({...s.p$,page:c.page,perPage:c.perPage})))),(0,f.x)(()=>g.unsubscribe()),(0,m.B)());g.add((0,E.T)((0,D.H)(50).pipe((0,P.h)((0,s.xU)()),(0,C.R)(T)),T).subscribe(b))}}function M(c,b){return async function(g){try{await(0,p.UO)(c),O(b)(g)}catch(T){console.error(T)}}}function B(c){return function(b){return b instanceof Function?b(c):c(b)}}},24133:(K,h,t)=>{t.d(h,{_p:()=>i,oO:()=>u,p$:()=>o,xU:()=>E,zK:()=>D});var n=t(81810),e=t(17479);const o={loadingState:e.Gu.Loading,libraryPanels:[],totalCount:0,perPage:40,page:1,numberOfPages:0,currentPanelId:void 0},E=(0,n.PH)("libraryPanels/view/initSearch"),D=(0,n.PH)("libraryPanels/view/searchCompleted"),u=(0,n.PH)("libraryPanels/view/changePage"),i=(f,m)=>{if(E.match(m))return{...f,loadingState:e.Gu.Loading};if(D.match(m)){const{libraryPanels:P,page:C,perPage:p,totalCount:s}=m.payload,O=Math.ceil(s/p);return{...f,libraryPanels:P,perPage:p,totalCount:s,loadingState:e.Gu.Done,numberOfPages:O,page:C>O?C-1:C}}return u.match(m)?{...f,page:m.payload.page}:f}},90840:(K,h,t)=>{t.d(h,{J:()=>e});var n=t(5819);function e(o){return{myTable:n.css`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${o.shape.borderRadius(1)};
      border: 1px solid ${o.colors.action.hover};
      background: ${o.colors.background.primary};
      color: ${o.colors.text.secondary};
      font-size: ${o.typography.h6.fontSize};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${o.typography.bodySmall.fontSize};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${o.spacing(4)};
      }

      tbody > tr:nth-child(odd) {
        background: ${o.colors.background.secondary};
      }
    `,noteTextbox:n.css`
      margin-bottom: ${o.spacing(4)};
    `,textInfo:n.css`
      color: ${o.colors.text.secondary};
      font-size: ${o.typography.size.sm};
    `,dashboardSearch:n.css`
      margin-top: ${o.spacing(2)};
    `,modal:n.css`
      width: 500px;
    `,modalText:n.css`
      font-size: ${o.typography.h4.fontSize};
      color: ${o.colors.text.primary};
      margin-bottom: ${o.spacing(4)};
      padding-top: ${o.spacing(2)};
    `}}},31007:(K,h,t)=>{t.d(h,{X:()=>P});var n=t(5819),e=t(76687),o=t(80946),E=t(93801),D=t(40522),u=t(52901),i=t(17061),f=t(32788),m=t(49989);const P=({isCurrent:s,title:O,plugin:M,onClick:B,onDelete:c,disabled:b,showBadge:g,description:T,children:x})=>{const v=(0,u.wW)(C),I=b||M.state===o.BV.deprecated,U=(0,n.cx)({[v.item]:!0,[v.itemDisabled]:I,[v.current]:s});return e.createElement("div",{className:U,"aria-label":D.wl.components.PluginVisualization.item(M.name),onClick:I?void 0:B,title:s?"Click again to close this section":M.name},e.createElement("img",{className:(0,n.cx)(v.img,{[v.disabled]:I}),src:M.info.logos.small,alt:""}),e.createElement("div",{className:(0,n.cx)(v.itemContent,{[v.disabled]:I})},e.createElement("div",{className:v.name},O),T?e.createElement("span",{className:v.description},T):null,x),g&&e.createElement("div",{className:(0,n.cx)(v.badge,{[v.disabled]:I})},e.createElement(p,{plugin:M})),c&&e.createElement(i.h,{name:"trash-alt",onClick:z=>{z.stopPropagation(),c()},className:v.deleteButton,"aria-label":"Delete button on panel type card"}))};P.displayName="PanelTypeCard";const C=s=>({item:n.css`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${s.colors.background.secondary};
      border-radius: ${s.shape.borderRadius()};
      box-shadow: ${s.shadows.z1};
      border: 1px solid ${s.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${s.transitions.create(["background"],{duration:s.transitions.duration.short})};

      &:hover {
        background: ${s.colors.emphasize(s.colors.background.secondary,.03)};
      }
    `,itemContent:n.css`
      overflow: hidden;
      position: relative;
      padding: ${s.spacing(0,1)};
    `,itemDisabled:n.css`
      cursor: default;

      &,
      &:hover {
        background: ${s.colors.action.disabledBackground};
      }
    `,current:n.css`
      label: currentVisualizationItem;
      border: 1px solid ${s.colors.primary.border};
      background: ${s.colors.action.selected};
    `,disabled:n.css`
      opacity: ${s.colors.action.disabledOpacity};
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,name:n.css`
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: ${s.typography.size.sm};
      font-weight: ${s.typography.fontWeightMedium};
      width: 100%;
    `,description:n.css`
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${s.colors.text.secondary};
      font-size: ${s.typography.bodySmall.fontSize};
      font-weight: ${s.typography.fontWeightLight};
      width: 100%;
      max-height: 4.5em;
    `,img:n.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,badge:n.css`
      background: ${s.colors.background.primary};
    `,deleteButton:n.css`
      cursor: pointer;
      margin-left: auto;
    `}),p=({plugin:s})=>(0,E.x)(s.signature)?e.createElement(f.o,{status:s.signature}):e.createElement(m.u,{state:s.state});p.displayName="PanelPluginBadge"},84921:(K,h,t)=>{t.d(h,{r:()=>D,x:()=>E});var n=t(80946),e=t(26435),o=t(93882);function E(){const u=o.vc.panels;return Object.keys(u).filter(i=>u[i].hideFromList===!1).map(i=>u[i]).sort((i,f)=>i.sort-f.sort)}function D(u,i,f){if(!i.length)return u.filter(s=>s.state===n.BV.deprecated?f.id===s.id:!0);const m=(0,e.x6)(i).toLowerCase(),P=[],C=[],p="graph".startsWith(m);for(const s of u){if(s.state===n.BV.deprecated&&f.id!==s.id)continue;const M=s.name.toLowerCase().indexOf(m);M===0?P.push(s):M>0?C.push(s):p&&s.id==="timeseries"&&P.push(s)}return P.concat(C)}},49989:(K,h,t)=>{t.d(h,{u:()=>E});var n=t(76687),e=t(80946),o=t(87191);const E=u=>{const i=D(u.state);return i?n.createElement(o.C,{color:i.color,title:i.tooltip,text:i.text,icon:i.icon}):null};function D(u){switch(u){case e.BV.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case e.BV.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case e.BV.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}}}]);

//# sourceMappingURL=6905.fd8e743df0011ca82584.js.map