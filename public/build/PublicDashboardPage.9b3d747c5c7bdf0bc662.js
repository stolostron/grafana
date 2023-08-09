"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2613],{49734:(Q,b,t)=>{t.r(b),t.d(b,{default:()=>Z});var s=t(5819),a=t(76687),E=t(94721),x=t(64331),v=t(40522),D=t(84770),c=t(52901),N=t(78426),T=t(27411),C=t(34626),m=t(83076),S=t(85979),F=t(13503),$=t(59100);const L=function(){const e=(0,c.wW)(B),n=p();return n.hide?null:a.createElement("div",{className:e.footer},a.createElement("a",{className:e.link,href:n.link,target:"_blank",rel:"noreferrer noopener"},n.text," ",a.createElement("img",{className:e.logoImg,alt:"",src:n.logo})))};function V(e){p=e}let p=()=>({hide:!1,text:"powered by Grafana",logo:"public/img/grafana_icon.svg",link:"https://grafana.com/"});const B=e=>({footer:s.css`
    display: flex;
    justify-content: end;
    height: 30px;
    padding: ${e.spacing(0,2,0,1)};
  `,link:s.css`
    display: flex;
    gap: 4px;
    justify-content: end;
    align-items: center;
  `,logoImg:s.css`
    height: 100%;
    padding: ${e.spacing(.25,0,.5,0)};
  `});var h=t(5592),z=t(61696);const u=v.wl.pages.PublicDashboard.NotAvailable,y=({paused:e})=>{const n=(0,c.wW)(A),i=(0,c.wW)(z.pJ),r=h.c.LoginBoxBackground();return a.createElement(h.c.LoginBackground,{className:n.container,"data-testid":u.container},a.createElement("div",{className:(0,s.cx)(n.box,r)},a.createElement(h.c.LoginLogo,{className:i.loginLogo}),a.createElement("p",{className:n.title,"data-testid":u.title},e?"This dashboard has been paused by the administrator":"The dashboard your are trying to access does not exist"),e&&a.createElement("p",{className:n.description,"data-testid":u.pausedDescription},"Try again later")))},A=e=>({container:s.css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    :before {
      opacity: 1;
    }
  `,box:s.css`
    width: 608px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${e.spacing(4)};
    z-index: 1;
    border-radius: ${e.shape.borderRadius(4)};
    padding: ${e.spacing(6,8)};
    opacity: 1;
  `,title:s.css`
    font-size: ${e.typography.h3.fontSize};
    text-align: center;
    margin: 0;
  `,description:s.css`
    font-size: ${e.typography.h5.fontSize};
    margin: 0;
  `});var R=t(41011),P=t(71808),U=t(16743);const W=v.wl.pages.PublicDashboard,j=({dashboard:e})=>{const n=(0,m.useDispatch)(),i=r=>{n((0,C.YT)(r))};return a.createElement(D.X,{title:e.title,buttonOverflowAlignment:"right"},!e.timepicker.hidden&&a.createElement(S.C,{dashboard:e,onChangeTimeZone:i}))},G=e=>{const{match:n,route:i,location:r}=e,I=(0,m.useDispatch)(),J=(0,T.p)(),f=(0,E.Z)(e),O=(0,c.wW)(M),d=(0,m.useSelector)(l=>l.dashboard),o=d.getModel();return(0,a.useEffect)(()=>{I((0,U.mV)({routeName:i.routeName,fixUrl:!1,accessToken:n.params.accessToken,keybindingSrv:J.keybindings}))},[]),(0,a.useEffect)(()=>{if(f?.location.search!==r.search){const l=f?.queryParams,g=e.queryParams;(g?.from!==l?.from||g?.to!==l?.to)&&!o?.timepicker.hidden&&(0,P.$t)().updateTimeRangeFromUrl(),!l?.refresh&&g?.refresh&&(0,P.$t)().setAutoRefresh(g.refresh)}},[f,r.search,e.queryParams,o?.timepicker.hidden]),o?o.meta.publicDashboardEnabled===!1?a.createElement(y,{paused:!0}):o.meta.dashboardNotFound?a.createElement(y,null):a.createElement(N.T,{pageNav:{text:o.title},layout:x.Qz.Custom,toolbar:a.createElement(j,{dashboard:o}),"data-testid":W.page},d.initError&&a.createElement(F.u,{initError:d.initError}),a.createElement("div",{className:O.gridContainer},a.createElement(R.Z,{dashboard:o,isEditable:!1,viewPanel:null,editPanel:null,hidePanelMenus:!0})),a.createElement(L,null)):a.createElement($.B,{initPhase:d.initPhase})},M=e=>({gridContainer:(0,s.css)({flex:1,padding:e.spacing(0,2,2,2),overflow:"auto"})}),Z=G}}]);

//# sourceMappingURL=PublicDashboardPage.9b3d747c5c7bdf0bc662.js.map