"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1344],{72067:(Q,E,e)=>{e.r(E),e.d(E,{ListPublicDashboardPage:()=>L,default:()=>J});var a=e(31733),c=e(76932),$=e(28447),C=e(21568),S=e(64704),p=e(76067),m=e(96305),T=e(58037),U=e(49311),N=e(76772),v=e(51343),P=e(89719),A=e(79106),I=e(47808),y=e(50186),M=e(56811),f=e(86561),x=e(35344),W=e(42342),B=e(58947),R=e(29852);const Z=({dashboard:t,publicDashboard:s,loader:l,children:n,onDismiss:o,...b})=>{const[i,{isLoading:r}]=(0,f.bS)(),d=(g,u)=>{i({dashboard:t,uid:g.uid,dashboardUid:g.dashboardUid}),u()};return a.createElement(B.JY,null,({showModal:g,hideModal:u})=>a.createElement(v.zx,{"aria-label":"Revoke public URL",title:"Revoke public URL",onClick:()=>g(R.N,{dashboardTitle:s.title,onConfirm:()=>d(s,u),onDismiss:()=>{o?o():u()}}),...b},r&&l?l:n))},z=({pd:t})=>{const s=(0,p.wW)(D),l=(0,p.l4)(),n=(0,$.Z)(`(max-width: ${l.breakpoints.values.sm}px)`),[o,{isLoading:b}]=(0,f.Mi)(),i=C.wl.pages.PublicDashboards,r=M.contextSrv.hasPermission(W.AccessControlAction.DashboardsPublicWrite),d=!t.dashboardUid,g=(h,O)=>{const k={dashboard:{uid:h.dashboardUid},payload:{uid:h.uid,isEnabled:!O}};o(k)},u=(0,a.useMemo)(()=>n?m.Z.Actions:m.Z.SecondaryActions,[n]);return a.createElement(m.Z,{className:s.card,href:d?void 0:`/d/${t.dashboardUid}`},a.createElement(m.Z.Heading,{className:s.heading},d?a.createElement(T.u,{content:"The linked dashboard has already been deleted",placement:"top"},a.createElement("div",{className:s.orphanedTitle},a.createElement("span",null,"Orphaned public dashboard"),a.createElement(U.J,{name:"info-circle"}))):a.createElement("span",null,t.title)),a.createElement(u,{className:s.actions},a.createElement("div",{className:s.pauseSwitch},a.createElement(N.r,{value:!t.isEnabled,label:"Pause sharing",disabled:b,onChange:h=>{(0,S.ff)("grafana_dashboards_public_enable_clicked",{action:h.currentTarget.checked?"disable":"enable"}),g(t,h.currentTarget.checked)},"data-testid":i.ListItem.pauseSwitch}),a.createElement("span",null,"Pause sharing")),a.createElement(v.Qj,{disabled:d,fill:"text",icon:"external-link-alt",variant:"secondary",target:"_blank",color:l.colors.warning.text,href:(0,x._M)(t.accessToken),key:"public-dashboard-url",tooltip:"View public dashboard","data-testid":i.ListItem.linkButton}),a.createElement(v.Qj,{disabled:d,fill:"text",icon:"cog",variant:"secondary",color:l.colors.warning.text,href:(0,x.Ez)(t.dashboardUid,t.slug),key:"public-dashboard-config-url",tooltip:"Configure public dashboard","data-testid":i.ListItem.configButton}),r&&a.createElement(Z,{fill:"text",icon:"trash-alt",variant:"secondary",publicDashboard:t,tooltip:"Revoke public dashboard url",loader:a.createElement(P.$,null),"data-testid":i.ListItem.trashcanButton})))},j=()=>{const[t,s]=(0,a.useState)(1),l=(0,p.wW)(D),{data:n,isLoading:o,isFetching:b,isError:i}=(0,f.WJ)(t);return a.createElement(y.T,{navId:"dashboards/public",actions:b&&a.createElement(P.$,null)},a.createElement(y.T.Contents,{isLoading:o},!o&&!i&&!!n&&a.createElement("div",null,a.createElement("ul",{className:l.list},n.publicDashboards.map(r=>a.createElement("li",{key:r.uid},a.createElement(z,{pd:r})))),a.createElement(A.Lh,{justify:"flex-end"},a.createElement(I.t,{onNavigate:s,currentPage:n.page,numberOfPages:n.totalPages,hideWhenSinglePage:!0})))))},D=t=>({list:(0,c.css)`
    list-style-type: none;
    margin-bottom: ${t.spacing(2)};
  `,card:(0,c.css)`
    ${t.breakpoints.up("sm")} {
      display: flex;
    }
  `,heading:(0,c.css)`
    display: flex;
    align-items: center;
    gap: ${t.spacing(1)};
    flex: 1;
  `,orphanedTitle:(0,c.css)`
    display: flex;
    align-items: center;
    gap: ${t.spacing(1)};
  `,actions:(0,c.css)`
    display: flex;
    align-items: center;
    position: relative;

    gap: ${t.spacing(.5)};
    ${t.breakpoints.up("sm")} {
      gap: ${t.spacing(1)};
    }
  `,pauseSwitch:(0,c.css)`
    display: flex;
    gap: ${t.spacing(1)};
    align-items: center;
    font-size: ${t.typography.bodySmall.fontSize};
    margin-bottom: 0;
    flex: 1;

    ${t.breakpoints.up("sm")} {
      padding-right: ${t.spacing(2)};
    }
  `}),L=({})=>a.createElement(j,null),J=L}}]);

//# sourceMappingURL=ListPublicDashboardPage.f120133188e06f465493.js.map