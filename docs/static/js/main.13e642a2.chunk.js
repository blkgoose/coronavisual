(this.webpackJsonpvisualizer=this.webpackJsonpvisualizer||[]).push([[0],{167:function(e,t,n){e.exports=n(350)},350:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(46),o=n.n(i),l=n(125),u=n(126),c=n(137),s=n(136),m=n(12),d=n(135),p=n.n(d);Array.prototype.distinct=function(){return Array.from(new Set(this))};var f=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={data:null},a.regione=null,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.parse("dati/regioni.csv",{download:!0,header:!0,complete:function(t){return e.setState(t)}})}},{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{onChange:function(e){return t.regione=e}},this.state.data?this.state.data.map((function(e){return e.denominazione_regione})).distinct().map((function(e){return r.a.createElement("option",{key:e,value:e},e)})):null),r.a.createElement(m.d,{width:1e3,height:500,data:(e=this.state.regione,t.state.data&&t.state.data.filter((function(t){return t.denominazione_regione===e})).filter((function(e){return e.data>="2020-05-01"}))),margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(m.f,{dataKey:"data"}),r.a.createElement(m.g,{type:"number",domain:[0,250]}),r.a.createElement(m.a,null),r.a.createElement(m.b,null),r.a.createElement(m.e,null),r.a.createElement(m.c,{type:"monotone",dataKey:"nuovi_risolti",stroke:"#8884d8",strokeWidth:2}),r.a.createElement(m.c,{type:"monotone",dataKey:"nuovi_positivi",stroke:"#82ca9d",strokeWidth:2})))}}]),n}(a.Component),h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null))};n(349);o.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.13e642a2.chunk.js.map