(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],{228:function(e,t,a){e.exports=a(465)},465:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(9),l=a.n(r),o=a(51),u=a(186),c=a.n(u),d=a(123),m=a(11),s=function(e){return i.a.createElement(m.f,{width:e.width,height:e.height,data:e.data},i.a.createElement(m.h,{dataKey:e.xField}),i.a.createElement(m.i,{type:"number",domain:[0,function(){var t=e.data,a=e.lines.map((function(e){return e.field}));return Math.max.apply(Math,Object(d.a)(a.map((function(e){return Math.max.apply(Math,Object(d.a)(t.map((function(t){return t[e]}))))}))))}()]}),i.a.createElement(m.c,null),i.a.createElement(m.d,null),i.a.createElement(m.g,null),e.lines.map((function(e){return i.a.createElement(m.e,{key:e.field,type:e.type,dataKey:e.field,stroke:e.color,strokeWidth:e.strokeWidth})})))},f=function(e){return i.a.createElement(m.b,{width:e.width,height:e.height,data:e.data,barSize:20},i.a.createElement(m.h,{dataKey:"name",scale:"point",padding:{left:10,right:10}}),i.a.createElement(m.i,null),i.a.createElement(m.g,null),i.a.createElement(m.c,{strokeDasharray:"3 3"}),i.a.createElement(m.a,{dataKey:"value",barSize:5,fill:"#82ca9d",background:{fill:"#eee"}}))},h=a(195),v=a.n(h),p=a(200),E=a(201),g=(a(463),function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),i=a[0],r=a[1];return 0===i.length&&v.a.parse(e,{download:!0,header:!0,complete:function(e){var t=e.data.map((function(e){return e.data=e.data.substring(0,10),e})).filter((function(e){return""!==e.data}));r(t)}}),i}),b=function(){var e=Object(n.useState)("Lazio"),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(30),u=Object(o.a)(l,2),d=u[0],m=u[1],h=function(){var e=Object(n.useState)([0,0]),t=Object(o.a)(e,2),a=t[0],i=t[1];return Object(n.useLayoutEffect)((function(){var e=function(){return i([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}(),v=Object(o.a)(h,2),b=v[0],w=(v[1],b-30),y=function(e){var t=new Date;return t.setDate(t.getDate()-e),t.toISOString().split("T")[0]};return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,i.a.createElement("b",null,"Coronavisual")),i.a.createElement("hr",null),i.a.createElement("h3",null,"Soluzione: ",function(){var e=g("dati/nazione.csv"),t=e.map((function(e){return e.data})).sort().reverse()[0],a=e.filter((function(e){return e.data===t}))[0];return a?100*(1-a.totale_positivi/a.totale_casi):0}().toFixed(2),"%"),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement(p.a,{min:1,max:365,value:d,onChange:m}),i.a.createElement("h4",null,"Dati: ultimi ",d," giorni")),i.a.createElement("h3",null,"Italia: distribuzione nuovi casi ad oggi"),i.a.createElement(f,{width:w,height:w/2,data:function(e){var t=g(e),a=t.map((function(e){return e.data})).sort().reverse()[0],n=t.filter((function(e){return e.data===a}));return n||[]}("dati/regioni.csv").map((function(e){return{name:e.denominazione_regione,value:parseInt(e.nuovi_positivi)}})).sort((function(e,t){return t.value-e.value}))}),i.a.createElement("h3",null,"Italia: delta"),i.a.createElement(s,{width:w,height:w/2,data:g("dati/nazione.csv").filter((function(e){return e.data>=y(d)})),xField:"data",lines:[{field:"nuovi_risolti",color:"#8884d8",strokeWidth:2,type:"monotone"},{field:"nuovi_positivi",color:"#82ca9d",strokeWidth:2,type:"monotone"}]}),i.a.createElement("h3",null,"Italia: attivi"),i.a.createElement(s,{width:w,height:w/2,data:g("dati/nazione.csv").filter((function(e){return e.data>=y(d)})),xField:"data",lines:[{field:"totale_positivi",color:"#ff84d8",strokeWidth:2,type:"monotone"}]}),i.a.createElement("h3",null,"Italia: regioni"),i.a.createElement(E.a,{options:c()(g("dati/regioni.csv").map((function(e){return e.denominazione_regione}))).map((function(e){return{value:e,label:e}})),onChange:function(e){return r(e.value)},value:{label:a,value:a}}),i.a.createElement(s,{width:w,height:w/2,data:g("dati/regioni.csv").filter((function(e){return e.data>=y(d)})).filter((function(e){return e.denominazione_regione===a})),xField:"data",lines:[{field:"nuovi_risolti",color:"#8884d8",strokeWidth:2,type:"monotone"},{field:"nuovi_positivi",color:"#82ca9d",strokeWidth:2,type:"monotone"}]}))};a(464);l.a.render(i.a.createElement(b,null),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.df160101.chunk.js.map