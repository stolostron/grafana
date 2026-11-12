(globalThis.rspackChunkgrafana||=[]).push([[61483],{77454(e,t,a){function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}(0,a(86827).K)(i,"populateCommonDb"),a.d(t,{S:()=>i})},76806(e,t,a){var i=a(77454),l=a(5637),r=a(24768),n=a(48355),s=a(31293),o=a(86827),c=a(78731),d=a(2302),p=n.UI.pie,h={sections:new Map,showData:!1,config:p},g=h.sections,u=h.showData,f=structuredClone(p),m=(0,o.K)(()=>structuredClone(f),"getConfig"),$=(0,o.K)(()=>{g=new Map,u=h.showData,(0,n.IU)()},"clear"),x=(0,o.K)(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);g.has(e)||(g.set(e,t),s.R.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),S=(0,o.K)(()=>g,"getSections"),w=(0,o.K)(e=>{u=e},"setShowData"),y=(0,o.K)(()=>u,"getShowData"),T={getConfig:m,clear:$,setDiagramTitle:n.ke,getDiagramTitle:n.ab,setAccTitle:n.SV,getAccTitle:n.iN,setAccDescription:n.EI,getAccDescription:n.m7,addSection:x,getSections:S,setShowData:w,getShowData:y},D=(0,o.K)((e,t)=>{(0,i.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),b={parse:(0,o.K)(async e=>{let t=await (0,c.qg)("pie",e);s.R.debug(t),D(t,T)},"parse")},C=(0,o.K)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),v=(0,o.K)(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),a=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return(0,d.pie)().value(e=>e.value).sort(null)(a)},"createPieArcs"),k={parser:b,db:T,renderer:{draw:(0,o.K)((e,t,a,i)=>{s.R.debug("rendering pie chart\n"+e);let o=i.db,c=(0,n.D7)(),p=(0,r.$t)(o.getConfig(),c.pie),h=(0,l.D)(t),g=h.append("g");g.attr("transform","translate(225,225)");let{themeVariables:u}=c,[f]=(0,r.I5)(u.pieOuterStrokeWidth);f??=2;let m=p.legendPosition,$=p.textPosition,x=p.donutHole>0&&p.donutHole<=.9?p.donutHole:0,S=(0,d.arc)().innerRadius(185*x).outerRadius(185),w=(0,d.arc)().innerRadius(185*$).outerRadius(185*$),y=g.append("g");y.append("circle").attr("cx",0).attr("cy",0).attr("r",185+f/2).attr("class","pieOuterCircle");let T=o.getSections(),D=v(T),b=[u.pie1,u.pie2,u.pie3,u.pie4,u.pie5,u.pie6,u.pie7,u.pie8,u.pie9,u.pie10,u.pie11,u.pie12],C=0;T.forEach(e=>{C+=e});let k=D.filter(e=>"0"!==(e.data.value/C*100).toFixed(0)),A=(0,d.scaleOrdinal)(b).domain([...T.keys()]);y.selectAll("mySlices").data(k).enter().append("path").attr("d",S).attr("fill",e=>A(e.data.label)).attr("class",e=>{let t="pieCircle";return"hover"===p.highlightSlice?t+=" highlightedOnHover":p.highlightSlice===e.data.label&&(t+=" highlighted"),t}),y.selectAll("mySlices").data(k).enter().append("text").text(e=>(e.data.value/C*100).toFixed(0)+"%").attr("transform",e=>"translate("+w.centroid(e)+")").style("text-anchor","middle").attr("class","slice");let K=g.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText"),O=[...T.entries()].map(([e,t])=>({label:e,value:t})),R=g.selectAll(".legend").data(O).enter().append("g").attr("class","legend");R.append("rect").attr("width",18).attr("height",18).style("fill",e=>A(e.label)).style("stroke",e=>A(e.label)),R.append("text").attr("x",22).attr("y",14).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);let z=Math.max(...R.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),M=450,F=490,H=22*O.length;switch(m){case"center":R.attr("transform",(e,t)=>"translate("+(-z/2-22)+","+(22*t-22*O.length/2)+")");break;case"top":M+=H,R.attr("transform",(e,t)=>`translate(${-z/2-22}, ${22*t-185})`),y.attr("transform",()=>`translate(0, ${H+22})`);break;case"bottom":M+=H,R.attr("transform",(e,t)=>"translate("+(-z/2-22)+","+(22*t- -207)+")");break;case"left":F+=22+z,R.attr("transform",(e,t)=>"translate(-207,"+(22*t-22*O.length/2)+")"),y.attr("transform",()=>`translate(${z+18+4}, 0)`);break;default:F+=22+z,R.attr("transform",(e,t)=>"translate(216,"+(22*t-22*O.length/2)+")")}let I=K.node()?.getBoundingClientRect().width??0,W=Math.min(0,225-I/2),B=Math.max(F,225+I/2)-W;h.attr("viewBox",`${W} 0 ${B} ${M}`),(0,n.a$)(h,M,B,p.useMaxWidth)},"draw")},styles:C};a.d(t,{diagram:()=>k})}}]);
//# sourceMappingURL=61483.84d7880e209611cb.js.map