(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],{231:function(e,t,n){e.exports=n(468)},468:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(9),o=n.n(r),l=n(51),u=n(186),c=n.n(u),d=n(123),m=n(28),s=function(e){return i.a.createElement(m.d,{width:e.width,height:e.height,data:e.data},i.a.createElement(m.f,{dataKey:e.xField}),i.a.createElement(m.g,{type:"number",domain:[0,function(){var t=e.data,n=e.lines.map((function(e){return e.field}));return Math.max.apply(Math,Object(d.a)(n.map((function(e){return Math.max.apply(Math,Object(d.a)(t.map((function(t){return t[e]}))))}))))}()]}),i.a.createElement(m.a,null),i.a.createElement(m.b,null),i.a.createElement(m.e,null),e.lines.map((function(e){return i.a.createElement(m.c,{key:e.field,type:e.type,dataKey:e.field,stroke:e.color,strokeWidth:e.strokeWidth})})))},f=n(195),h=n.n(f),p=n(200),v=n(201),E=(n(466),function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),i=n[0],r=n[1];return 0===i.length&&h.a.parse(e,{download:!0,header:!0,complete:function(e){var t=e.data.map((function(e){return e.data=e.data.substring(0,10),e})).filter((function(e){return""!==e.data}));r(t)}}),i}),g=function(){var e=Object(a.useState)("Lazio"),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(30),u=Object(l.a)(o,2),d=u[0],m=u[1],f=function(){var e=Object(a.useState)([0,0]),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(a.useLayoutEffect)((function(){var e=function(){return i([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),h=Object(l.a)(f,2),g=h[0],b=(h[1],g-30),w=function(e){var t=new Date;return t.setDate(t.getDate()-e),t.toISOString().split("T")[0]};return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,i.a.createElement("b",null,"Coronavisual")),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement(p.a,{min:1,max:365,value:d,onChange:m}),i.a.createElement("h4",null,"Dati: ultimi ",d," giorni")),i.a.createElement("h3",null,"Italia: regioni"),i.a.createElement(v.a,{options:c()(E("dati/regioni.csv").map((function(e){return e.denominazione_regione}))).map((function(e){return{value:e,label:e}})),onChange:function(e){return r(e.value)},value:{label:n,value:n}}),i.a.createElement(s,{width:b,height:b/2,data:E("dati/regioni.csv").filter((function(e){return e.data>=w(d)})).filter((function(e){return e.denominazione_regione===n})),xField:"data",lines:[{field:"nuovi_risolti",color:"#8884d8",strokeWidth:2,type:"monotone"},{field:"nuovi_positivi",color:"#82ca9d",strokeWidth:2,type:"monotone"}]}),i.a.createElement("h3",null,"Italia: delta"),i.a.createElement(s,{width:b,height:b/2,data:E("dati/nazione.csv").filter((function(e){return e.data>=w(d)})),xField:"data",lines:[{field:"nuovi_risolti",color:"#8884d8",strokeWidth:2,type:"monotone"},{field:"nuovi_positivi",color:"#82ca9d",strokeWidth:2,type:"monotone"}]}),i.a.createElement("h3",null,"Italia: attivi"),i.a.createElement(s,{width:b,height:b/2,data:E("dati/nazione.csv").filter((function(e){return e.data>=w(d)})),xField:"data",lines:[{field:"totale_positivi",color:"#ff84d8",strokeWidth:2,type:"monotone"}]}))};n(467);o.a.render(i.a.createElement(g,null),document.getElementById("root"))}},[[231,1,2]]]);
//# sourceMappingURL=main.25bc56fb.chunk.js.map