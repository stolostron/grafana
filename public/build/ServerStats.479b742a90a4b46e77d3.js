"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7641],{89951:(f,i,a)=>{a.r(i),a.d(i,{ServerStats:()=>y});var s=a(5819),e=a(76687),d=a(52901),r=a(29480),g=a(3855),m=a(83076),n=a(13747),E=a(27695),h=a(59356);const A=async()=>(0,h.i)().get("api/admin/stats").catch(t=>(console.error(t),null)),y=()=>{const[t,v]=(0,e.useState)(null),[c,o]=(0,e.useState)(!1),l=(0,d.wW)(S),C=n.Vt.hasAccess(m.AccessControlAction.DataSourcesRead,n.Vt.isGrafanaAdmin),x=n.Vt.hasAccess(m.AccessControlAction.UsersRead,n.Vt.isGrafanaAdmin);return(0,e.useEffect)(()=>{n.Vt.hasAccess(m.AccessControlAction.ActionServerStatsRead,n.Vt.isGrafanaAdmin)&&(o(!0),A().then(N=>{v(N),o(!1)}))},[]),n.Vt.hasAccess(m.AccessControlAction.ActionServerStatsRead,n.Vt.isGrafanaAdmin)?e.createElement(e.Fragment,null,e.createElement("h2",{className:l.title},"Instance statistics"),c?e.createElement("div",{className:l.loader},e.createElement(E.a,{text:"Loading instance stats..."})):t?e.createElement("div",{className:l.row},e.createElement(u,{content:[{name:"Dashboards (starred)",value:`${t.dashboards} (${t.stars})`},{name:"Tags",value:t.tags},{name:"Playlists",value:t.playlists},{name:"Snapshots",value:t.snapshots}],footer:e.createElement(r.Qj,{href:"/dashboards",variant:"secondary"},"Manage dashboards")}),e.createElement("div",{className:l.doubleRow},e.createElement(u,{content:[{name:"Data sources",value:t.datasources}],footer:C&&e.createElement(r.Qj,{href:"/datasources",variant:"secondary"},"Manage data sources")}),e.createElement(u,{content:[{name:"Alerts",value:t.alerts}],footer:e.createElement(r.Qj,{href:"/alerting/list",variant:"secondary"},"Alerts")})),e.createElement(u,{content:[{name:"Organisations",value:t.orgs},{name:"Users total",value:t.users},{name:"Active users in last 30 days",value:t.activeUsers},{name:"Active sessions",value:t.activeSessions}],footer:x&&e.createElement(r.Qj,{href:"/admin/users",variant:"secondary"},"Manage users")})):e.createElement("p",{className:l.notFound},"No stats found.")):null},S=t=>({title:s.css`
      margin-bottom: ${t.spacing(4)};
    `,row:s.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${t.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:s.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${t.spacing(2)};
      }
    `,loader:s.css`
      height: 290px;
    `,notFound:s.css`
      font-size: ${t.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),u=({content:t,footer:v})=>{const c=(0,d.wW)(p);return e.createElement(g._,{className:c.container,disableHover:!0},e.createElement("div",{className:c.inner},e.createElement("div",{className:c.content},t.map(o=>e.createElement("div",{key:o.name,className:c.row},e.createElement("span",null,o.name),e.createElement("span",null,o.value)))),v&&e.createElement("div",null,v)))},p=t=>({container:s.css`
      padding: ${t.spacing(2)};
    `,inner:s.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:s.css`
      flex: 1 0 auto;
    `,row:s.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${t.spacing(2)};
      align-items: center;
    `})},27695:(f,i,a)=>{a.d(i,{a:()=>d});var s=a(76687),e=a(84282);const d=({text:r="Loading..."})=>s.createElement("div",{className:"page-loader-wrapper"},s.createElement(e.u,{text:r}))}}]);

//# sourceMappingURL=ServerStats.479b742a90a4b46e77d3.js.map