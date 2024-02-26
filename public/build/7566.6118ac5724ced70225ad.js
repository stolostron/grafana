"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7566],{4714:(_,U,t)=>{t.d(U,{j:()=>E});var l=t(76932),e=t(31733),s=t(85498),x=t(76067),D=t(51343),T=t(38834),A=t(49311),d=t(95471);const E=({onChange:u,maxMenuHeight:h,isWidget:f=!1})=>{const p=()=>s.config.featureToggles.vizAndWidgetSplit?f?(0,d.Ry)():(0,d.hK)():(0,d.xW)(),P=(0,e.useMemo)(p,[f]),K=(0,e.useMemo)(()=>P.map(r=>({label:r.name,imgUrl:r.info.logos.small,value:r})).sort((r,y)=>r.label?.localeCompare(y.label)),[P]),[O,R]=(0,e.useState)([]),i=(0,e.useCallback)(r=>{const y=r.filter(M=>M.value).map(M=>M.value);u(y),R(r)},[u]),W=(0,x.wW)(m),F={defaultOptions:!0,getOptionLabel:r=>r.label,getOptionValue:r=>r.value,noOptionsMessage:"No Panel types found",placeholder:"Filter by type",maxMenuHeight:h,options:K,value:O,onChange:i};return e.createElement("div",{className:W.container},O.length>0&&e.createElement(D.zx,{size:"xs",icon:"trash-alt",fill:"text",className:W.clear,onClick:()=>i([]),"aria-label":"Clear types"},"Clear types"),e.createElement(T.NU,{...F,prefix:e.createElement(A.J,{name:"filter"}),"aria-label":"Panel Type filter"}))};function m(u){return{container:(0,l.css)`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:(0,l.css)`
      label: clear;
      font-size: ${u.spacing(1.5)};
      position: absolute;
      top: -${u.spacing(4.5)};
      right: 0;
    `}}},89962:(_,U,t)=>{t.d(U,{P:()=>d});var l=t(31733),e=t(59326),s=t(38834),x=t(49311),D=t(86434),T=t(4502);const A=()=>(0,T.getGrafanaSearcher)().getSortOptions();function d({onChange:E,value:m,placeholder:u,filter:h,getSortOptions:f,isClearable:p}){const P=(0,e.Z)(async()=>{const O=await(f??A)();return h?O.filter(R=>h.includes(R.value)):O},[f,h]);if(P.loading)return null;const K=!!(m?.includes("desc")||m?.startsWith("-"));return l.createElement(s.Ph,{key:m,width:28,onChange:E,value:P.value?.find(O=>O.value===m)??null,options:P.value,"aria-label":"Sort",placeholder:u??`Sort (Default ${D.yw.label})`,prefix:l.createElement(x.J,{name:K?"sort-amount-down":"sort-amount-up"}),isClearable:p})}},18504:(_,U,t)=>{t.d(U,{p:()=>g});var l=t(76932),e=t(31733),s=t(49876),x=t(85498),D=t(76067),T=t(49311),A=t(34037),d=t(95885),E=t(103),m=t(73213),u=t(20298),h=t(5572),f=t(51343),p=t(64213),P=t(3630),K=t(39501),O=t(4579);const R={loadingState:u.Gu.Loading,dashboardTitles:[]},i=(0,O.PH)("libraryPanels/delete/searchCompleted"),W=(a=R,o)=>i.match(o)?{...a,dashboardTitles:o.payload.dashboards.map(c=>c.title),loadingState:u.Gu.Done}:a;function F(a){return async function(o){const c=await(0,K.E8)(a.uid);o(i({dashboards:c}))}}const r=({libraryPanel:a,onDismiss:o,onConfirm:c})=>{const S=(0,D.wW)(p.J),[{dashboardTitles:b,loadingState:I},B]=(0,e.useReducer)(W,R),z=(0,e.useMemo)(()=>(0,P.tb)(B),[B]);(0,e.useEffect)(()=>{z(F(a))},[z,a]);const N=!!b.length,j=I===u.Gu.Done;return e.createElement(h.u,{className:S.modal,title:"Delete library panel",icon:"trash-alt",onDismiss:o,isOpen:!0},j?null:e.createElement(y,null),j?e.createElement("div",null,N?e.createElement(L,{dashboardTitles:b}):null,N?null:e.createElement(M,null),e.createElement(h.u.ButtonRow,null,e.createElement(f.zx,{variant:"secondary",onClick:o,fill:"outline"},"Cancel"),e.createElement(f.zx,{variant:"destructive",onClick:c,disabled:N},"Delete"))):null)},y=()=>e.createElement("span",null,"Loading library panel..."),M=()=>{const a=(0,D.wW)(p.J);return e.createElement("div",{className:a.modalText},"Do you want to delete this panel?")},L=({dashboardTitles:a})=>{const o=(0,D.wW)(p.J),c=a.length===1?"dashboard.":"dashboards.",S=`${a.length} ${c}`;return a.length===0?null:e.createElement("div",null,e.createElement("p",{className:o.textInfo},"This library panel can not be deleted because it is connected to ",e.createElement("strong",null,S)," Remove the library panel from the dashboards listed below and retry."),e.createElement("table",{className:o.myTable},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Dashboard name"))),e.createElement("tbody",null,a.map((b,I)=>e.createElement("tr",{key:`dash-title-${I}`},e.createElement("td",null,b))))))},$=({libraryPanel:a,onClick:o,onDelete:c,showSecondaryActions:S})=>{const[b,I]=(0,e.useState)(!1),B=()=>{c?.(a),I(!1)},z=x.config.panels[a.model.type]??(0,E.X)(a.model.type).meta;return e.createElement(e.Fragment,null,e.createElement(m.X,{isCurrent:!1,title:a.name,description:a.description,plugin:z,onClick:()=>o?.(a),onDelete:S?()=>I(!0):void 0},e.createElement(v,{libraryPanel:a})),b&&e.createElement(r,{libraryPanel:a,onConfirm:B,onDismiss:()=>I(!1)}))},n=({showSecondaryActions:a,rootProps:o})=>{const c=(0,D.wW)(C);return e.createElement(m.X.Skeleton,{hasDelete:a,...o},e.createElement(s.Z,{containerClassName:c.metaContainer,width:80}))},g=(0,d.y)($,n);function v({libraryPanel:a}){const o=(0,D.wW)(C);return!a.meta?.folderUid&&!a.meta?.folderName?null:a.meta.folderUid?e.createElement("span",{className:o.metaContainer},e.createElement(A.r,{href:`/dashboards/f/${a.meta.folderUid}`},e.createElement(T.J,{name:"folder-upload",size:"sm"}),e.createElement("span",null,a.meta.folderName))):e.createElement("span",{className:o.metaContainer},e.createElement(T.J,{name:"folder",size:"sm"}),e.createElement("span",null,a.meta.folderName))}function C(a){return{metaContainer:(0,l.css)({display:"flex",alignItems:"center",color:a.colors.text.secondary,fontSize:a.typography.bodySmall.fontSize,paddingTop:a.spacing(.5),svg:{marginRight:a.spacing(.5),marginBottom:3}})}}},77566:(_,U,t)=>{t.d(U,{N:()=>y,e:()=>r});var l=t(76932),e=t(31733),s=t(24789),x=t(76067),D=t(79106),T=t(76804),A=t(8806),d=t.n(A),E=t(51343),m=t(38834),u=t(49311),h=t(41327),f=t(40884),p=t(42342);function P({onChange:n,maxMenuHeight:g}){const v=(0,x.wW)(O),[C,a]=(0,e.useState)(!1),o=(0,e.useCallback)(B=>K(B,a),[]),c=(0,e.useMemo)(()=>d()(o,300),[o]),[S,b]=(0,e.useState)([]),I=(0,e.useCallback)(B=>{const z=B.filter(N=>!!N.value).map(N=>N.value);n(z),b(B)},[n]);return e.createElement("div",{className:v.container},S.length>0&&e.createElement(E.zx,{size:"xs",icon:"trash-alt",fill:"text",className:v.clear,onClick:()=>n([]),"aria-label":"Clear folders"},"Clear folders"),e.createElement(m.M8,{value:S,onChange:I,isLoading:C,loadOptions:c,maxMenuHeight:g,placeholder:"Filter by folder",noOptionsMessage:"No folders found",prefix:e.createElement(u.J,{name:"filter"}),"aria-label":"Folder filter",defaultOptions:!0}))}async function K(n,g){g(!0);const v={query:n,type:f.o.DashFolder,permission:p.PermissionLevelString.View},a=(await(0,h.i)().search(v)).map(o=>({label:o.title,value:{uid:o.uid,title:o.title}}));return(!n||"general".includes(n.toLowerCase()))&&a.unshift({label:"General",value:{uid:"general",title:"General"}}),g(!1),a}function O(n){return{container:(0,l.css)({label:"container",position:"relative",minWidth:"180px",flexGrow:1}),clear:(0,l.css)({label:"clear",fontSize:n.spacing(1.5),position:"absolute",top:-n.spacing(4.5),right:0})}}var R=t(4714),i=t(89962),W=t(21279),F=t(21435),r=(n=>(n.Tight="tight",n.Spacious="spacious",n))(r||{});const y=({onClick:n,variant:g="spacious",currentPanelId:v,currentFolderUID:C,perPage:a=W.gN,showPanelFilter:o=!1,showFolderFilter:c=!1,showSort:S=!1,showSecondaryActions:b=!1})=>{const I=(0,x.wW)(M,g),[B,z]=(0,e.useState)(""),[N,j]=(0,e.useState)("");(0,s.Z)(()=>j(B),200,[B]);const[G,V]=(0,e.useState)({}),[H,J]=(0,e.useState)(C?[C]:[]),[Q,X]=(0,e.useState)([]),Z=S||o||c,Y=g==="tight"?"lg":"xs";return e.createElement("div",{className:I.container},e.createElement(D.wc,{spacing:Y},e.createElement("div",{className:I.gridContainer},e.createElement("div",{className:I.filterInputWrapper},e.createElement(T.H,{value:B,onChange:z,placeholder:"Search by name or description",width:0,escapeRegex:!1})),Z&&e.createElement(L,{showSort:S,showPanelFilter:o,showFolderFilter:c,onSortChange:V,onFolderFilterChange:J,onPanelFilterChange:X,sortDirection:G.value,variant:g})),e.createElement("div",{className:I.libraryPanelsView},e.createElement(F.u,{onClickCard:n,searchString:N,sortDirection:G.value,panelFilter:Q,folderFilter:H,currentPanelId:v,showSecondaryActions:b,perPage:a}))))};function M(n,g){const v=(0,l.css)`
    flex-direction: row;
    row-gap: ${n.spacing(1)};
  `;return{filterInputWrapper:(0,l.css)`
      flex-grow: ${g==="tight"?1:"initial"};
    `,container:(0,l.css)`
      width: 100%;
      overflow-y: auto;
      padding: ${n.spacing(1)};
    `,libraryPanelsView:(0,l.css)`
      width: 100%;
    `,gridContainer:(0,l.css)`
      ${g==="tight"?v:""};
      display: flex;
      flex-direction: column;
      width: 100%;
      column-gap: ${n.spacing(1)};
      row-gap: ${n.spacing(1)};
      padding-bottom: ${n.spacing(2)};
    `}}const L=e.memo(({variant:n="spacious",showSort:g,showPanelFilter:v,showFolderFilter:C,sortDirection:a,onSortChange:o,onFolderFilterChange:c,onPanelFilterChange:S})=>{const b=(0,x.wW)($,n),I=(0,e.useCallback)(z=>S(z.map(N=>N.id)),[S]),B=(0,e.useCallback)(z=>c(z.map(N=>N.uid??"")),[c]);return e.createElement("div",{className:b.container},g&&e.createElement(i.P,{value:a,onChange:o,filter:["alpha-asc","alpha-desc"]}),(C||v)&&e.createElement("div",{className:b.filterContainer},C&&e.createElement(P,{onChange:B}),v&&e.createElement(R.j,{onChange:I})))});L.displayName="SearchControls";function $(n,g="spacious"){const v=(0,l.css)`
    display: flex;
    gap: ${n.spacing(1)};
    flex-grow: 1;
    flex-direction: row;
    justify-content: end;
  `,C=(0,l.css)`
    ${v};
    flex-grow: initial;
    flex-direction: column;
    justify-content: normal;
  `,a=(0,l.css)`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    gap: 4px;
  `,o=(0,l.css)`
    ${a};
    flex-direction: column;
    margin-left: initial;
  `;switch(g){case"spacious":return{container:v,filterContainer:a};case"tight":return{container:C,filterContainer:o}}}},21435:(_,U,t)=>{t.d(U,{u:()=>u});var l=t(76932),e=t(31733),s=t(24789),x=t(20298),D=t(76067),T=t(37739),A=t(47808),d=t(18504),E=t(3630),m=t(69757);const u=({onClickCard:f,searchString:p,sortDirection:P,panelFilter:K,folderFilter:O,showSecondaryActions:R,currentPanelId:i,perPage:W=40,isWidget:F})=>{const r=(0,D.wW)(h),[{libraryPanels:y,page:M,perPage:L,numberOfPages:$,loadingState:n,currentPanelId:g},v]=(0,e.useReducer)(m._p,{...m.p$,currentPanelId:i,perPage:W}),C=(0,e.useMemo)(()=>(0,E.tb)(v),[v]);(0,s.Z)(()=>C((0,E.Xu)({searchString:p,sortDirection:P,panelFilter:K,folderFilterUIDs:O,page:M,perPage:L,currentPanelId:g,isWidget:F})),300,[p,P,K,O,M,C]);const a=({uid:c})=>C((0,E.UO)(c,{searchString:p,sortDirection:P,panelFilter:K,folderFilterUIDs:O,page:M,perPage:L})),o=c=>C((0,m.oO)({page:c}));return e.createElement(T.K,{direction:"column",wrap:"nowrap"},n===x.Gu.Loading?e.createElement(e.Fragment,null,e.createElement(d.p.Skeleton,{showSecondaryActions:R}),e.createElement(d.p.Skeleton,{showSecondaryActions:R}),e.createElement(d.p.Skeleton,{showSecondaryActions:R})):y.length<1?e.createElement("p",{className:r.noPanelsFound},"No library panels found."):y?.map((c,S)=>e.createElement(d.p,{key:`library-panel=${S}`,libraryPanel:c,onDelete:a,onClick:f,showSecondaryActions:R})),y.length?e.createElement("div",{className:r.pagination},e.createElement(A.t,{currentPage:M,numberOfPages:$,onNavigate:o,hideWhenSinglePage:!0})):null)},h=f=>({pagination:(0,l.css)({alignSelf:"center",marginTop:f.spacing(1)}),noPanelsFound:(0,l.css)({label:"noPanelsFound",minHeight:200})})},3630:(_,U,t)=>{t.d(U,{UO:()=>O,Xu:()=>K,tb:()=>R});var l=t(40510),e=t(57298),s=t(86457),x=t(26722),D=t(96506),T=t(89582),A=t(56183),d=t(30914),E=t(57423),m=t(79163),u=t(50014),h=t(85498),f=t(95471),p=t(39501),P=t(69757);function K(i){const W=(r,y)=>r.id===y.type,F=(r,y)=>{const M=(0,f.xW)();return r.filter(L=>{const $=M.find(n=>W(n,L));return y?!!$?.skipDataQuery:!$?.skipDataQuery})};return function(r){const y=new l.w0,M=(0,e.D)((0,p.Pq)({searchString:i.searchString,perPage:i.perPage,page:i.page,excludeUid:i.currentPanelId,sortDirection:i.sortDirection,typeFilter:i.panelFilter,folderFilterUIDs:i.folderFilterUIDs})).pipe((0,T.z)(L=>{const{elements:$}=L;if(h.config.featureToggles.vizAndWidgetSplit&&i.isWidget!==void 0){const n=F($,i.isWidget);return(0,s.of)({...L,elements:n})}return(0,s.of)({...L,elements:$})}),(0,T.z)(({perPage:L,elements:$,page:n,totalCount:g})=>(0,s.of)((0,P.zK)({libraryPanels:$,page:n,perPage:L,totalCount:g}))),(0,A.K)(L=>(console.error(L),(0,s.of)((0,P.zK)({...P.p$,page:i.page,perPage:i.perPage})))),(0,d.x)(()=>y.unsubscribe()),(0,E.B)());y.add((0,x.T)((0,D.H)(50).pipe((0,m.h)((0,P.xU)()),(0,u.R)(M)),M).subscribe(r))}}function O(i,W){return async function(F){try{await(0,p.UO)(i),K(W)(F)}catch(r){console.error(r)}}}function R(i){return function(W){return W instanceof Function?W(i):i(W)}}},69757:(_,U,t)=>{t.d(U,{_p:()=>A,oO:()=>T,p$:()=>s,xU:()=>x,zK:()=>D});var l=t(4579),e=t(20298);const s={loadingState:e.Gu.Loading,libraryPanels:[],totalCount:0,perPage:40,page:1,numberOfPages:0,currentPanelId:void 0},x=(0,l.PH)("libraryPanels/view/initSearch"),D=(0,l.PH)("libraryPanels/view/searchCompleted"),T=(0,l.PH)("libraryPanels/view/changePage"),A=(d,E)=>{if(x.match(E))return{...d,loadingState:e.Gu.Loading};if(D.match(E)){const{libraryPanels:m,page:u,perPage:h,totalCount:f}=E.payload,p=Math.ceil(f/h);return{...d,libraryPanels:m,perPage:h,totalCount:f,loadingState:e.Gu.Done,numberOfPages:p,page:u>p?u-1:u}}return T.match(E)?{...d,page:E.payload.page}:d}},64213:(_,U,t)=>{t.d(U,{J:()=>e});var l=t(76932);function e(s){return{myTable:(0,l.css)`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${s.shape.radius.default};
      border: 1px solid ${s.colors.action.hover};
      background: ${s.colors.background.primary};
      color: ${s.colors.text.secondary};
      font-size: ${s.typography.h6.fontSize};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${s.typography.bodySmall.fontSize};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${s.spacing(4)};
      }

      tbody > tr:nth-child(odd) {
        background: ${s.colors.background.secondary};
      }
    `,noteTextbox:(0,l.css)`
      margin-bottom: ${s.spacing(4)};
    `,textInfo:(0,l.css)`
      color: ${s.colors.text.secondary};
      font-size: ${s.typography.size.sm};
    `,dashboardSearch:(0,l.css)`
      margin-top: ${s.spacing(2)};
    `,modal:(0,l.css)`
      width: 500px;
    `,modalText:(0,l.css)`
      font-size: ${s.typography.h4.fontSize};
      color: ${s.colors.text.primary};
      margin-bottom: ${s.spacing(4)};
      padding-top: ${s.spacing(2)};
    `}}}}]);

//# sourceMappingURL=7566.6118ac5724ced70225ad.js.map