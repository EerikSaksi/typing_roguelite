(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[15],{75:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(65),c=n(68),r=n.n(c),i=n(69),s=n(59),u=n(1),l=n.n(u),o=n(70),f=n(27),m=n(61),p=n(5);function g(e){var t=e.id,n=e.imgUrl,c=e.text,g=e.origin,d=e.fadeInMillis,h=e.customStyle,b=Object(p.f)(),y=Object(p.g)(),E=Object(u.useState)(0),x=Object(s.a)(E,2),j=x[0],v=x[1];return Object(u.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:v(1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(d)}),[]),l.a.createElement(o.a,{xs:3,style:Object(a.a)({transition:"opacity 0.5s",opacity:j,marginTop:10,marginRight:5,marginLeft:5,paddingLeft:"0px",paddingRight:"10px",minHeight:"100%"},h)},l.a.createElement(m.a,{style:{minWidth:"100%",minHeight:"100%"},onClick:function(){return function(){var e=y.pathname;if("/"===e){var n="";switch(g){case"youtube":n="/y/".concat(t);break;case"genius":n="/g/".concat(t);break;case"syncData":n="/p/".concat(t)}b.push(n)}else if("/s/"===e.substring(0,3)){var a=e.indexOf("/0/");b.push(e.substring(0,a)+"/".concat(t,"/")+e.substring(a+3))}else"/g/"===e.substring(0,3)&&b.push("/p/".concat(t,"/").concat(e.substring(3)))}()}},l.a.createElement(o.a,null,l.a.createElement(f.a,{src:n,style:{minWidth:"50%",minHeight:"50%",maxWidth:"50%",maxHeight:"50%"}})),l.a.createElement(o.a,null,l.a.createElement("p",{style:{fontSize:"20px"}},c))))}},89:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n(1),c=n.n(a),r=n(15),i=n(64),s=n(73),u=n(66),l=n(75);function o(e){var t=e.results,n=e.input,a=e.setInput,o=e.loading,f=e.defaultValue;return c.a.createElement(i.a,{fluid:!0,style:{zIndex:1e3}},c.a.createElement(u.a,{className:"justify-content-md-center"},c.a.createElement(s.a,{onChange:function(e){return a(e.target.value)}},c.a.createElement(s.a.Control,{defaultValue:f||"",placeholder:"Search",autoFocus:!0}))),c.a.createElement(u.a,{style:{justifyContent:"center",marginTop:5}},""===n?null:!o&&t&&t!==[]?t.map((function(e,t){return c.a.createElement(l.a,Object.assign({key:t},e,{fadeInMillis:100*(t+1)}))})):c.a.createElement(r.a,{centered:!1})))}}}]);
//# sourceMappingURL=15.e1473597.chunk.js.map