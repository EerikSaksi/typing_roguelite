(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{153:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var r=n(59),a=n(71),o=n(1),i=n.n(o),c=n(15),u=n(5),s=n(28),l=n(57),f=n(61),h=n(66),p=n(64),d=n(63),y=n(75);function m(){var t=Object(a.a)(["\nquery youtubevideodata($id: String){\n  youtubeVideoData(id: $id){\n    id\n    imgUrl\n    text \n    origin\n  }\n}\n"]);return m=function(){return t},t}function v(){var t=Object(a.a)(["\nquery displaylyrics($id: String){\n  displayLyrics(id: $id)\n}\n"]);return v=function(){return t},t}function g(){var t=Object(a.a)(["\n  query synchronizationdata($geniusID: String) \n  {\n    synchronizationData(geniusID: $geniusID) {\n      youtubeID\n    }\n  }\n"]);return g=function(){return t},t}var b=Object(s.b)(g()),E=Object(s.b)(v()),w=Object(s.b)(m());function x(){var t=Object(u.h)().geniusID,e=Object(u.f)(),n=Object(l.c)(b,{variables:{geniusID:t},onCompleted:function(t){x()}}),a=n.data,o=(a=void 0===a?{}:a).synchronizationData,s=n.loading,m=n.error,v=Object(l.a)(w,{variables:{id:m||s?null:o[0].youtubeID}}),g=Object(r.a)(v,2),x=g[0],j=g[1].data,O=(j=void 0===j?{}:j).youtubeVideoData;console.log(o&&o[0]?o[0].youtubeID:"");var L=Object(l.c)(E,{variables:{id:t}}),k=L.data,S=(k=void 0===k?{}:k).displayLyrics,N=L.loading,_=L.error,D=i.a.createElement(c.a,null);!_&&m?D=i.a.createElement(p.a,null,i.a.createElement(h.a,{className:"justify-content-md-center"},i.a.createElement("p",{style:{fontSize:30}},"No synchronizations exist.")),i.a.createElement(h.a,{className:"justify-content-md-center"},i.a.createElement(f.a,{onClick:function(){return e.push("/s/0/".concat(t))}},i.a.createElement("p",null,"Create synchronization for this song.")))):O&&(D=i.a.createElement(p.a,null,i.a.createElement(h.a,{style:{justifyContent:"center"}},i.a.createElement("p",{style:{textAlign:"center"}},"Synchronizations")),i.a.createElement(h.a,{style:{justifyContent:"center"}},i.a.createElement(y.a,Object.assign({},O,{fadeInMillis:100,customStyle:{paddingRight:0}})))));var I=i.a.createElement(c.a,null);return N||(I=S.map((function(t,e){return i.a.createElement(h.a,{className:"justify-content-md-center",style:{minWidth:"100%"},key:e},i.a.createElement("p",{style:{marginBottom:10,fontSize:"20px"}},t))}))),i.a.createElement(p.a,{fluid:!0,style:{paddingLeft:0,paddingRight:0}},i.a.createElement(d.a,null),i.a.createElement(h.a,{style:{marginBottom:"20px"},className:"justify-content-md-center"},D),i.a.createElement(h.a,{className:"justify-content-md-center"},I))}},63:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(1),a=n.n(r),o=n(74),i=n(81),c=n(61),u=n(5),s=n(80);function l(t){var e=t.centerContent,r=t.customContent,l=Object(u.f)();return a.a.createElement(o.a,{style:{height:60},sticky:"top",bg:"secondary",variant:"dark"},a.a.createElement(o.a.Brand,{onClick:function(){return l.push("/")}},a.a.createElement(c.a,{variant:"outline-primary",style:{justifyContent:"left",width:142,height:44},size:"sm"},a.a.createElement("img",{src:n(67),style:{top:0,height:"100%",width:"100%"}}))),r,a.a.createElement(o.a.Collapse,{style:{position:"absolute",transform:"translate(-50%, 0%)",left:"50%"}},e),a.a.createElement(i.a,{className:"ml-auto"},a.a.createElement(s.a,{href:"https://github.com/EerikSaksi/type_to_lyrics","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star EerikSaksi/type_to_lyrics on GitHub"},"Star")))}},67:function(t,e,n){t.exports=n.p+"static/media/home.34034ca8.png"},68:function(t,e,n){t.exports=n(76)},69:function(t,e,n){"use strict";function r(t,e,n,r,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,u,"next",t)}function u(t){r(i,a,o,c,u,"throw",t)}c(void 0)}))}}n.d(e,"a",(function(){return a}))},70:function(t,e,n){"use strict";var r=n(4),a=n(13),o=n(21),i=n.n(o),c=n(1),u=n.n(c),s=n(25),l=["xl","lg","md","sm","xs"],f=u.a.forwardRef((function(t,e){var n=t.bsPrefix,o=t.className,c=t.as,f=void 0===c?"div":c,h=Object(a.a)(t,["bsPrefix","className","as"]),p=Object(s.a)(n,"col"),d=[],y=[];return l.forEach((function(t){var e,n,r,a=h[t];if(delete h[t],"object"===typeof a&&null!=a){var o=a.span;e=void 0===o||o,n=a.offset,r=a.order}else e=a;var i="xs"!==t?"-"+t:"";e&&d.push(!0===e?""+p+i:""+p+i+"-"+e),null!=r&&y.push("order"+i+"-"+r),null!=n&&y.push("offset"+i+"-"+n)})),d.length||d.push(p),u.a.createElement(f,Object(r.a)({},h,{ref:e,className:i.a.apply(void 0,[o].concat(d,y))}))}));f.displayName="Col",e.a=f},75:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(65),a=n(68),o=n.n(a),i=n(69),c=n(59),u=n(1),s=n.n(u),l=n(70),f=n(27),h=n(61),p=n(5);function d(t){var e=t.id,n=t.imgUrl,a=t.text,d=t.origin,y=t.fadeInMillis,m=t.customStyle,v=Object(p.f)(),g=Object(p.g)(),b=Object(u.useState)(0),E=Object(c.a)(b,2),w=E[0],x=E[1];return Object(u.useEffect)((function(){function t(){return(t=Object(i.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,e)}));case 2:x(1);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(y)}),[]),s.a.createElement(l.a,{xs:3,style:Object(r.a)({transition:"opacity 0.5s",opacity:w,marginTop:10,marginRight:5,marginLeft:5,paddingLeft:"0px",paddingRight:"10px",minHeight:"100%"},m)},s.a.createElement(h.a,{style:{minWidth:"100%",minHeight:"100%"},onClick:function(){return function(){var t=g.pathname;if("/"===t){var n="";switch(d){case"youtube":n="/y/".concat(e);break;case"genius":n="/g/".concat(e);break;case"syncData":n="/p/".concat(e)}v.push(n)}else if("/s/"===t.substring(0,3)){var r=t.indexOf("/0/");v.push(t.substring(0,r)+"/".concat(e,"/")+t.substring(r+3))}else"/g/"===t.substring(0,3)&&v.push("/p/".concat(e,"/").concat(t.substring(3)))}()}},s.a.createElement(l.a,null,s.a.createElement(f.a,{src:n,style:{minWidth:"50%",minHeight:"50%",maxWidth:"50%",maxHeight:"50%"}})),s.a.createElement(l.a,null,s.a.createElement("p",{style:{fontSize:"20px"}},a))))}},76:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),o}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var l={};function f(){}function h(){}function p(){}var d={};d[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(O([])));m&&m!==e&&n.call(m,a)&&(d=m);var v=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(a,o){function i(){return new e((function(r,i){!function r(a,o,i,c){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=v.constructor=p,p.constructor=h,h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[o]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(v),c(v,i,"Generator"),v[a]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}}}]);
//# sourceMappingURL=7.acaca966.chunk.js.map