"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[187],{86963:(T,w,a)=>{a.d(w,{g:()=>W});var o=a(76932),e=a(69781),x=a.n(e),g=a(31733),D=a(76067),L=a(37739),s=a(7225),A=a(96477);const W=({matchers:l})=>{const d=(0,D.wW)(v),p=5,y=(0,e.take)(l,p),h=(0,e.takeRight)(l,l.length-p),$=h.length>0;return g.createElement("span",{"data-testid":"label-matchers"},g.createElement(L.K,{direction:"row",gap:1,alignItems:"center",wrap:"wrap"},y.map(S=>g.createElement(B,{key:(0,e.uniqueId)(),matcher:S})),$&&g.createElement(A.z,{arrow:!0,placement:"top",content:g.createElement(g.Fragment,null,h.map(S=>g.createElement(B,{key:(0,e.uniqueId)(),matcher:S})))},g.createElement("span",null,g.createElement("div",{className:d.metadata},`and ${h.length} more`)))))},B=({matcher:[l,d,p]})=>{const y=(0,D.wW)(v);return g.createElement("div",{className:y.matcher(l).wrapper},g.createElement(L.K,{direction:"row",gap:0,alignItems:"baseline"},l," ",d," ",p))},v=l=>({matcher:d=>{const{color:p,borderColor:y}=(0,s.Bx)(d);return{wrapper:(0,o.css)`
        color: #fff;
        background: ${p};
        padding: ${l.spacing(.33)} ${l.spacing(.66)};
        font-size: ${l.typography.bodySmall.fontSize};

        border: solid 1px ${y};
        border-radius: ${l.shape.borderRadius(2)};
      `}},metadata:(0,o.css)`
    color: ${l.colors.text.secondary};

    font-size: ${l.typography.bodySmall.fontSize};
    font-weight: ${l.typography.bodySmall.fontWeight};
  `})},187:(T,w,a)=>{a.r(w),a.d(w,{default:()=>lt});var o=a(76932),e=a(31733),x=a(76067),g=a(25111),D=a(61375),L=a(8310),s=a(3645),A=a(69781),W=a(86504),B=a.n(W),v=a(83870),l=a(51343),d=a(7225),p=a(60196),y=a(93820),h=a(83010),$=a(40040),S=a(86963);function K(t){return t.path?.length===0}function j(t){const r=new Map;function i(c,m=[]){r.set(c.id,{...c,path:m}),c.routes?.forEach(n=>i(n,[...m,c.id]))}return i(t,[]),r}function O(t){return t.object_matchers?.length===0}function G({route:t}){const r=(0,x.wW)(H);return K(t)?e.createElement("div",{className:r.defaultPolicy},"Default policy"):O(t)?e.createElement("div",{className:r.textMuted},"No matchers"):e.createElement(S.g,{matchers:t.object_matchers??[]})}const H=t=>({defaultPolicy:(0,o.css)`
    padding: ${t.spacing(.5)};
    background: ${t.colors.background.secondary};
    width: fit-content;
  `,textMuted:(0,o.css)`
    color: ${t.colors.text.secondary};
  `});var F=a(5572),Y=a(49311),J=a(77398),Z=a(1203),Q=a(67451),X=a(66172),V=a(76085);function q({route:t,routesByIdMap:r}){const i=(0,x.wW)(U),c=t.path?.slice(1)??[],m=[...(0,A.compact)(c.map(n=>r.get(n))),t];return e.createElement("div",{className:i.policyPathWrapper},e.createElement("div",{className:i.defaultPolicy},"Default policy"),m.map((n,u)=>e.createElement("div",{key:n.id},e.createElement("div",{className:i.policyInPath(u,u===m.length-1)},O(n)?e.createElement("div",{className:i.textMuted},"No matchers"):e.createElement(S.g,{matchers:n.object_matchers??[]})))))}function _({onClose:t,route:r,receiver:i,routesByIdMap:c,alertManagerSourceName:m}){const n=(0,x.wW)(U),u=K(r);return e.createElement(Z.h5,{accessType:"notification",alertmanagerSourceName:Q.JY},e.createElement(F.u,{className:n.detailsModal,isOpen:!0,title:"Routing details",onDismiss:t,onClickBackdrop:t},e.createElement(s.K,{gap:0,direction:"column"},e.createElement("div",{className:(0,o.cx)(n.textMuted,n.marginBottom(2))},"Your alert instances are routed as follows."),e.createElement("div",null,"Notification policy path"),u&&e.createElement("div",{className:n.textMuted},"Default policy"),e.createElement("div",{className:n.separator(1)}),!u&&e.createElement(e.Fragment,null,e.createElement(q,{route:r,routesByIdMap:c})),e.createElement("div",{className:n.separator(4)}),e.createElement("div",{className:n.contactPoint},e.createElement(s.K,{gap:1,direction:"row",alignItems:"center"},"Contact point:",e.createElement("span",{className:n.textMuted},i.name)),e.createElement(V.q,{actions:[J.oI.UpdateContactPoint]},e.createElement(s.K,{gap:1,direction:"row",alignItems:"center"},e.createElement("a",{href:(0,X.eQ)(`/alerting/notifications/receivers/${encodeURIComponent(i.name)}/edit`,m),className:n.link,target:"_blank",rel:"noreferrer"},"See details ",e.createElement(Y.J,{name:"external-link-alt"}))))),e.createElement("div",{className:n.button},e.createElement(l.zx,{variant:"primary",type:"button",onClick:t},"Close")))))}const U=t=>({textMuted:(0,o.css)`
    color: ${t.colors.text.secondary};
  `,link:(0,o.css)`
    display: block;
    color: ${t.colors.text.link};
  `,button:(0,o.css)`
    justify-content: flex-end;
    display: flex;
  `,detailsModal:(0,o.css)`
    max-width: 560px;
  `,defaultPolicy:(0,o.css)`
    padding: ${t.spacing(.5)};
    background: ${t.colors.background.secondary};
    width: fit-content;
  `,contactPoint:(0,o.css)`
    display: flex;
    flex-direction: row;
    gap: ${t.spacing(1)};
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${t.spacing(1)};
  `,policyPathWrapper:(0,o.css)`
    display: flex;
    flex-direction: column;
    margin-top: ${t.spacing(1)};
  `,separator:r=>(0,o.css)`
    margin-top: ${t.spacing(r)};
  `,marginBottom:r=>(0,o.css)`
    margin-bottom: ${t.spacing(t.spacing(r))};
  `,policyInPath:(r=0,i=!1)=>(0,o.css)`
    margin-left: ${30+r*30}px;
    padding: ${t.spacing(1)};
    margin-top: ${t.spacing(1)};
    border: solid 1px ${t.colors.border.weak};
    background: ${t.colors.background.secondary};
    width: fit-content;
    position: relative;

    ${i&&(0,o.css)`
        border: solid 1px ${t.colors.info.border};
      `},
    &:before {
      content: '';
      position: absolute;
      height: calc(100% - 10px);
      width: ${t.spacing(1)};
      border-left: solid 1px ${t.colors.border.weak};
      border-bottom: solid 1px ${t.colors.border.weak};
      margin-top: ${t.spacing(-2)};
      margin-left: -17px;
    }
  }  `});function tt({route:t,receiver:r,routesByIdMap:i,instancesCount:c,alertManagerSourceName:m,expandRoute:n,onExpandRouteClick:u}){const E=(0,x.wW)(z),[I,R]=(0,e.useState)(!1),N=()=>{R(!0)};return e.createElement("div",{className:E.routeHeader},e.createElement(y.U,{isCollapsed:!n,onToggle:C=>u(!C),"aria-label":"Expand policy route"}),e.createElement(s.K,{flexGrow:1,gap:1},e.createElement("div",{onClick:()=>u(!n),className:E.expandable},e.createElement(s.K,{gap:1,direction:"row",alignItems:"center"},"Notification policy",e.createElement(G,{route:t}))),e.createElement($.L,null),e.createElement(s.K,{gap:2,direction:"row",alignItems:"center"},e.createElement(h.g,{icon:"layers-alt","data-testid":"matching-instances"},c??"-",e.createElement("span",null,B()("instance",c))),e.createElement(s.K,{gap:1,direction:"row",alignItems:"center"},e.createElement("div",null,e.createElement("span",{className:E.textMuted},"@ Delivered to")," ",r.name),e.createElement("div",{className:E.verticalBar}),e.createElement(l.zx,{type:"button",onClick:N,variant:"secondary",fill:"outline",size:"sm"},"See details")))),I&&e.createElement(_,{onClose:()=>R(!1),route:t,receiver:r,routesByIdMap:i,alertManagerSourceName:m}))}function et({route:t,instanceMatches:r,receiver:i,routesByIdMap:c,alertManagerSourceName:m}){const n=(0,x.wW)(z),[u,E]=(0,v.Z)(!1),I=9;return e.createElement("div",{"data-testid":"matching-policy-route"},e.createElement(tt,{route:t,receiver:i,routesByIdMap:c,instancesCount:r.length,alertManagerSourceName:m,expandRoute:u,onExpandRouteClick:E}),u&&e.createElement(s.K,{gap:1,direction:"column"},e.createElement("div",{className:n.routeInstances,"data-testid":"route-matching-instance"},r.map(R=>{const N=Array.from(R.labelsMatch);let C=N.map(([f,P])=>({label:`${f[0]}=${f[1]}`,match:P.match,colorIndex:P.match?(0,d.tu)(f[0]):I}));const M=C.filter(f=>f.match),b=C.filter(f=>!f.match);return e.createElement("div",{className:n.tagListCard,key:(0,A.uniqueId)()},N.length>0?e.createElement(e.Fragment,null,M.length>0?e.createElement(p.P,{tags:M.map(f=>f.label),className:n.labelList,getColorIndex:(f,P)=>M[P].colorIndex}):e.createElement("div",{className:(0,o.cx)(n.textMuted,n.textItalic)},"No matching labels"),e.createElement("div",{className:n.labelSeparator}),e.createElement(p.P,{tags:b.map(f=>f.label),className:n.labelList,getColorIndex:(f,P)=>b[P].colorIndex})):e.createElement("div",{className:n.textMuted},"No labels"))}))))}const z=t=>({textMuted:(0,o.css)`
    color: ${t.colors.text.secondary};
  `,textItalic:(0,o.css)`
    font-style: italic;
  `,expandable:(0,o.css)`
    cursor: pointer;
  `,routeHeader:(0,o.css)`
    display: flex;
    flex-direction: row;
    gap: ${t.spacing(1)};
    align-items: center;
    border-bottom: 1px solid ${t.colors.border.weak};
    &:hover {
      background-color: ${t.components.table.rowHoverBackground};
    }
    padding: ${t.spacing(.5,.5,.5,0)};
  `,labelList:(0,o.css)`
    flex: 0 1 auto;
    justify-content: flex-start;
  `,labelSeparator:(0,o.css)`
    width: 1px;
    background-color: ${t.colors.border.weak};
  `,tagListCard:(0,o.css)`
    display: flex;
    flex-direction: row;
    gap: ${t.spacing(2)};

    position: relative;
    background: ${t.colors.background.secondary};
    padding: ${t.spacing(1)};

    border-radius: ${t.shape.borderRadius(2)};
    border: solid 1px ${t.colors.border.weak};
  `,routeInstances:(0,o.css)`
    padding: ${t.spacing(1,0,1,4)};
    position: relative;

    display: flex;
    flex-direction: column;
    gap: ${t.spacing(1)};

    &:before {
      content: '';
      position: absolute;
      left: ${t.spacing(2)};
      height: calc(100% - ${t.spacing(2)});
      width: ${t.spacing(4)};
      border-left: solid 1px ${t.colors.border.weak};
    }
  `,verticalBar:(0,o.css)`
    width: 1px;
    height: 20px;
    background-color: ${t.colors.secondary.main};
    margin-left: ${t.spacing(1)};
    margin-right: ${t.spacing(1)};
  `});var at=a(59326),nt=a(3889),ot=a(10134),rt=a(45005),k=a(42420);const st=(t,r)=>{const{currentData:i,isLoading:c,error:m}=(0,nt.W)(t),n=i?.alertmanager_config,{matchInstancesToRoute:u}=(0,ot.N)(),{rootRoute:E,receivers:I}=(0,e.useMemo)(()=>n?{rootRoute:n.route?(0,k.w2)((0,rt.br)(n.route)):void 0,receivers:n.receivers??[]}:{receivers:[],rootRoute:void 0},[n]),R=E?j((0,k.tK)(E)):new Map,N=I.reduce((f,P)=>f.set(P.name,P),new Map)??new Map,{value:C=new Map,loading:M,error:b}=(0,at.Z)(async()=>{if(E)return await u(E,r)},[E,r]);return{routesByIdMap:R,receiversByName:N,matchingMap:C,loading:c||M,error:m??b}};function ct({alertManagerSource:t,potentialInstances:r,onlyOneAM:i}){const c=(0,x.wW)(it),{routesByIdMap:m,receiversByName:n,matchingMap:u,loading:E,error:I}=st(t.name,r);return I?e.createElement(g.b,{title:"Cannot load Alertmanager configuration",severity:"error"},I.message):E?e.createElement(D.u,{text:"Loading routing preview..."}):u.size>0?e.createElement("div",{className:c.alertManagerRow},!i&&e.createElement(s.K,{direction:"row",alignItems:"center"},e.createElement("div",{className:c.firstAlertManagerLine}),e.createElement("div",{className:c.alertManagerName}," ","Alert manager:",e.createElement("img",{src:t.imgUrl,alt:"",className:c.img}),t.name),e.createElement("div",{className:c.secondAlertManagerLine})),e.createElement(s.K,{gap:1,direction:"column"},Array.from(u.entries()).map(([N,C])=>{const M=m.get(N),b=M?.receiver&&n.get(M.receiver);if(!M)return null;if(!b)throw new Error("Receiver not found");return e.createElement(et,{instanceMatches:C,route:M,receiver:b,key:N,routesByIdMap:m,alertManagerSourceName:t.name})}))):null}const lt=(0,L.Pf)(ct),it=t=>({alertManagerRow:(0,o.css)`
    display: flex;
    flex-direction: column;
    gap: ${t.spacing(1)};
    width: 100%;
  `,firstAlertManagerLine:(0,o.css)`
    height: 1px;
    width: ${t.spacing(4)};
    background-color: ${t.colors.secondary.main};
  `,alertManagerName:(0,o.css)`
    width: fit-content;
  `,secondAlertManagerLine:(0,o.css)`
    height: 1px;
    width: 100%;
    flex: 1;
    background-color: ${t.colors.secondary.main};
  `,img:(0,o.css)`
    margin-left: ${t.spacing(2)};
    width: ${t.spacing(3)};
    height: ${t.spacing(3)};
    margin-right: ${t.spacing(1)};
  `})},10134:(T,w,a)=>{a.d(w,{N:()=>B});var o=a(18748),e=a(31733),x=a(70621),g=a(80127),D=a(67034);const L=()=>new D.q(new URL(a.p+a.u(1634),a.b));let s;function A(){let v;if(s===void 0)try{v=L(),s=o.Ud(v)}catch(d){d instanceof Error&&(0,x.H)(d)}return{disposeWorker:()=>{v&&s&&(s[o.Yy](),v.terminate(),s=void 0,v=void 0)}}}function W(v){if(!s)throw new Error("Route Matcher has not been initialized")}function B(){(0,e.useEffect)(()=>{const{disposeWorker:d}=A();return d},[]);const v=(0,e.useCallback)(async(d,p)=>{W(s);const y=performance.now(),h=await s.getRouteGroupsMap(d,p),$=performance.now()-y;return(0,g.PN)(`Route Groups Matched in  ${$} ms`,{matchingTime:$.toString(),alertGroupsCount:p.length.toString(),topLevelRoutesCount:d.routes?.length.toString()??"0"}),h},[]),l=(0,e.useCallback)(async(d,p)=>{W(s);const y=performance.now(),h=await s.matchInstancesToRoute(d,p),$=performance.now()-y;return(0,g.PN)(`Instances Matched in  ${$} ms`,{matchingTime:$.toString(),instancesToMatchCount:p.length.toString(),topLevelRoutesCount:d.routes?.length.toString()??"0"}),h},[]);return{getRouteGroupsMap:v,matchInstancesToRoute:l}}}}]);

//# sourceMappingURL=187.71a85c68550cadc6a7a5.js.map