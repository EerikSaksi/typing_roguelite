(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7,11],{100:function(t,e,i){t.exports=i.p+"static/media/home.34034ca8.png"},107:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(93),a=i(91),r=i(3),o=i.n(r),d=i(123),m=i(103),c=i.n(m),u=i(108);function s(t){var e=t.children,i=t.title,m=t.imgOverlay,s=t.linkText,x=t.linkHref,l=t.style,y=Object(r.useState)(0),f=Object(a.a)(y,2),g=f[0],b=f[1],v=Object(u.a)({threshold:.5}),h=Object(a.a)(v,2),p=h[0],O=h[1];Object(r.useEffect)((function(){O&&b(1)}),[O]);var w=c()(),j=w.innerWidth,E=w.innerHeight;return o.a.createElement(d.a,{ref:p,className:"shadow-lg",style:Object(n.a)({width:"".concat(.8*j),position:"relative",left:"50%",transform:"translate(-50%, 0px)",opacity:g,transition:"opacity 500ms",marginBottom:20,marginTop:20,height:E-100},l),border:"primary"},o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a.Title,{style:{fontSize:40,textAlign:"center"}},i),o.a.createElement(d.a.Link,{style:{fontSize:20,textAlign:"center",zIndex:1e3},href:x},s),o.a.createElement(d.a.ImgOverlay,null,m),e))}},108:function(t,e,i){"use strict";i.d(e,"a",(function(){return m}));var n=i(91),a=i(122),r=i(3),o=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(i[n[a]]=t[n[a]])}return i},d=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=Object(r.useRef)(null),d=Object(r.useCallback)(e,[t].concat(Object(a.a)(n)));return Object(r.useEffect)((function(){if(t){o.current&&o.current.unobserve(t),o.current=new IntersectionObserver(d,i);var e=o.current;return e.observe(t),function(){return e.unobserve(t)}}}),[t].concat(Object(a.a)(n))),o.current},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=o(t,[]),a=i.root,m=void 0===a?null:a,c=i.rootMargin,u=void 0===c?"0px 0px 0px 0px":c,s=i.threshold,x=void 0===s?0:s,l=i.target,y=i.onEnter,f=i.onLeave,g=i.unobserveOnEnter,b=Object(r.useState)(null),v=Object(n.a)(b,2),h=v[0],p=v[1],O=Object(r.useState)({inView:!1,entry:null}),w=Object(n.a)(O,2),j=w[0],E=w[1],k=function(t,e){var i=Object(n.a)(t,1)[0];if(h&&i&&e){var a=i.isIntersecting,r=i.intersectionRatio;if(r>=0){var o=e.thresholds.some((function(t){return r>=t}))&&a;E({inView:o,entry:i}),o?(y&&y(i,e),g&&e.unobserve(h)):f&&f(i,e)}}};Object(r.useEffect)((function(){l&&p(l.current)}),[l]);var N=d(h,k,{root:m,rootMargin:u,threshold:x},e);return[p,j.inView,j.entry,N]}},111:function(t,e,i){"use strict";i.d(e,"a",(function(){return f}));var n=i(93),a=i(105),r=i.n(a),o=i(106),d=i(91),m=i(3),c=i.n(m),u=i(104),s=i(50),x=i(92),l=i(10);function y(t){var e=t.text,i=t.style;return c.a.createElement("div",{style:Object(n.a)({position:"absolute",height:30,opacity:.8,width:"100%",display:"flex",alignItems:"center",backgroundColor:"white",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},i)},c.a.createElement("p",{style:{width:"100%",whiteSpace:"no-wrap",color:"black",fontSize:20,margin:0}},e))}function f(t){var e=t.forwardingUrl,i=t.imgUrl,a=t.bottomText,f=t.centerText,g=t.topText,b=t.fadeInMillis,v=t.style,h=Object(l.f)(),p=Object(m.useState)(!1),O=Object(d.a)(p,2),w=O[0],j=O[1],E=Object(m.useState)(0),k=Object(d.a)(E,2),N=k[0],I=k[1];return Object(m.useEffect)((function(){function t(){return(t=Object(o.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,e)}));case 2:I(1);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(b)}),[b]),c.a.createElement(u.a,{xs:12,style:Object(n.a)({transition:"opacity 0.5s",opacity:N,margin:10,padding:0,maxHeight:347.5,maxWidth:347.5,minHeight:"100%"},v),onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)}},c.a.createElement(x.a,{style:{width:"100%",height:"100%",padding:0,border:0},onClick:function(){return h.push(e)}},c.a.createElement(s.a,{className:w?"shadow-lg":"",style:{maxHeight:347.5,height:"100%",width:"auto",maxWidth:"100%",transition:"all 200ms"},rounded:!0,src:i}),c.a.createElement(y,{style:{top:0},text:g}),c.a.createElement(y,{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto"},text:f}),c.a.createElement(y,{style:{bottom:0},text:a})))}},123:function(t,e,i){"use strict";var n=i(9),a=i(22),r=i(41),o=i.n(r),d=i(3),m=i.n(d),c=i(47),u=i(112),s=i(124),x=i(128),l=m.a.forwardRef((function(t,e){var i=t.bsPrefix,r=t.className,d=t.variant,u=t.as,s=void 0===u?"img":u,x=Object(a.a)(t,["bsPrefix","className","variant","as"]),l=Object(c.a)(i,"card-img");return m.a.createElement(s,Object(n.a)({ref:e,className:o()(d?l+"-"+d:l,r)},x))}));l.displayName="CardImg",l.defaultProps={variant:null};var y=l,f=Object(s.a)("h5"),g=Object(s.a)("h6"),b=Object(u.a)("card-body"),v=Object(u.a)("card-title",{Component:f}),h=Object(u.a)("card-subtitle",{Component:g}),p=Object(u.a)("card-link",{Component:"a"}),O=Object(u.a)("card-text",{Component:"p"}),w=Object(u.a)("card-header"),j=Object(u.a)("card-footer"),E=Object(u.a)("card-img-overlay"),k=m.a.forwardRef((function(t,e){var i=t.bsPrefix,r=t.className,u=t.bg,s=t.text,l=t.border,y=t.body,f=t.children,g=t.as,v=void 0===g?"div":g,h=Object(a.a)(t,["bsPrefix","className","bg","text","border","body","children","as"]),p=Object(c.a)(i,"card"),O=Object(d.useMemo)((function(){return{cardHeaderBsPrefix:p+"-header"}}),[p]);return m.a.createElement(x.a.Provider,{value:O},m.a.createElement(v,Object(n.a)({ref:e},h,{className:o()(r,p,u&&"bg-"+u,s&&"text-"+s,l&&"border-"+l)}),y?m.a.createElement(b,null,f):f))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=y,k.Title=v,k.Subtitle=h,k.Body=b,k.Link=p,k.Text=O,k.Header=w,k.Footer=j,k.ImgOverlay=E;e.a=k},137:function(t,e,i){"use strict";var n=[[{id:0,text:"We're",time:18.865500074386595},{id:1,text:"no",time:19.0694510705719},{id:2,text:"strangers",time:19.33752295803833},{id:3,text:"to",time:19.83154191607666},{id:4,text:"love",time:20.079399822616576}],[{id:5,text:"You",time:22.89024893133545},{id:6,text:"know",time:23.01046205531311},{id:7,text:"the",time:23.333660009536743},{id:8,text:"rules",time:23.62902201335144},{id:9,text:"and",time:24.40752689128113},{id:10,text:"so",time:24.656322963760378},{id:11,text:"do",time:25.115023074386595},{id:12,text:"I",time:25.631277106811524}],[{id:13,text:"A",time:27.10653101144409},{id:14,text:"full",time:27.342221072479248},{id:15,text:"commitment's",time:27.587972885559083},{id:16,text:"what",time:27.951973967575075},{id:17,text:"I'm",time:28.260292055313112},{id:18,text:"thinking",time:28.488150980926513},{id:19,text:"of",time:29.173126923706054}],[{id:20,text:"You",time:31.39694090081787},{id:21,text:"wouldn't",time:31.59195207247925},{id:22,text:"get",time:32.034140984741214},{id:23,text:"this",time:32.5379169332428},{id:24,text:"from",time:33.190226122070314},{id:25,text:"any",time:33.465889144958496},{id:26,text:"other",time:33.95638891607666},{id:27,text:"guy",time:34.27793094277954}],[{id:28,text:"I",time:35.29965008964538},{id:29,text:"just",time:36.36182205340576},{id:30,text:"wanna",time:36.63690591035461},{id:31,text:"tell",time:36.93483300762939},{id:32,text:"you",time:37.2950831411438},{id:33,text:"how",time:37.589933979019165},{id:34,text:"I'm",time:37.88268496185303},{id:35,text:"feeling",time:38.19875118501282}],[{id:36,text:"Gotta",time:40.548666851226805},{id:37,text:"make",time:40.81074800762939},{id:38,text:"you",time:41.088736051498415},{id:39,text:"understand",time:41.733512032424926}],[{id:40,text:"Never",time:43.14544504577637},{id:41,text:"gonna",time:43.380403868392946},{id:42,text:"give",time:43.738801908447265},{id:43,text:"you",time:44.209841102996826},{id:44,text:"up",time:44.601810062942505}],[{id:45,text:"Never",time:45.272744066757205},{id:46,text:"gonna",time:45.492698856948856},{id:47,text:"let",time:45.74804197138977},{id:48,text:"you",time:46.2197288550415},{id:49,text:"down",time:46.651724015258786}],[{id:50,text:"Never",time:47.341679072479245},{id:51,text:"gonna",time:47.51660702479553},{id:52,text:"run",time:47.732688866485596},{id:53,text:"around",time:48.08882705149841},{id:54,text:"and",time:48.87836701335144},{id:55,text:"desert",time:49.83147584359741},{id:56,text:"you",time:50.47638106294251}],[{id:57,text:"Never",time:51.67623987220764},{id:58,text:"gonna",time:51.900202849319456},{id:59,text:"make",time:52.25826912779236},{id:60,text:"you",time:52.70044904005432},{id:61,text:"cry",time:53.18846495613098}],[{id:62,text:"Never",time:53.80653998664856},{id:63,text:"gonna",time:54.090538144958494},{id:64,text:"say",time:54.73456495994568},{id:65,text:"goodbye",time:55.05749698664856}],[{id:66,text:"Never",time:55.87442206484985},{id:67,text:"gonna",time:56.09440807247925},{id:68,text:"tell",time:56.43219291416931},{id:69,text:"a",time:57.082387009536745},{id:70,text:"lie",time:57.42626487220764},{id:71,text:"and",time:57.90050808773804},{id:72,text:"hurt",time:58.58226200953674},{id:73,text:"you",time:59.084115864578244}],[{id:74,text:"We've",time:61.012214076293944},{id:75,text:"known",time:61.28109089128113},{id:76,text:"each",time:61.629031940872196},{id:77,text:"other",time:61.896987828338624},{id:78,text:"for",time:62.96911085504151},{id:79,text:"so",time:63.20411098855591},{id:80,text:"long",time:63.528000870300296}],[{id:81,text:"Your",time:65.12614091989136},{id:82,text:"heart's",time:65.15414103623962},{id:83,text:"been",time:65.57999891607666},{id:84,text:"aching",time:66.16706604768372},{id:85,text:"but",time:66.47501389700318},{id:86,text:"you're",time:67.23394695994568},{id:87,text:"too",time:67.4760470629425},{id:88,text:"shy",time:67.77302199427795},{id:89,text:"to",time:68.21294905149841},{id:90,text:"say",time:68.5088830553131},{id:91,text:"it",time:68.77091790081788}],[{id:92,text:"Inside",time:69.58143500953675},{id:93,text:"we",time:69.87139095040894},{id:94,text:"both",time:70.1708439961853},{id:95,text:"know",time:70.40401603623963},{id:96,text:"what's",time:70.71384797901916},{id:97,text:"been",time:71.15891191226196},{id:98,text:"going",time:71.67180692370606},{id:99,text:"on",time:72.01783087983704}],[{id:100,text:"We",time:73.62607584741211},{id:101,text:"know",time:73.94385199809265},{id:102,text:"the",time:74.20573884359742},{id:103,text:"game",time:74.50469710681152},{id:104,text:"and",time:74.89478097329712},{id:105,text:"we're",time:75.48654698092652},{id:106,text:"gonna",time:75.79349690272522},{id:107,text:"play",time:76.22540982452392},{id:108,text:"it",time:76.72929408392334}],[{id:109,text:"And",time:77.50814388937378},{id:110,text:"if",time:78.78156505722046},{id:111,text:"you",time:79.0322759847412},{id:112,text:"ask",time:79.34643087602234},{id:113,text:"me",time:79.8745999923706},{id:114,text:"how",time:80.12940210681153},{id:115,text:"I'm",time:80.39542690081787},{id:116,text:"feeling",time:80.77059290081787}],[{id:117,text:"Don't",time:82.84463702098084},{id:118,text:"tell",time:83.07195701907348},{id:119,text:"me",time:83.32915415449524},{id:120,text:"you're",time:83.65599105722046},{id:121,text:"too",time:84.11025981498719},{id:122,text:"blind",time:84.46138712397766},{id:123,text:"to",time:84.70183589509583},{id:124,text:"see",time:84.98453788746643}],[{id:125,text:"Never",time:85.5015278474121},{id:126,text:"gonna",time:85.74363695040894},{id:127,text:"give",time:86.00347294087219},{id:128,text:"you",time:86.4112849332428},{id:129,text:"up",time:86.77680103623962}],[{id:130,text:"Never",time:87.54263597520446},{id:131,text:"gonna",time:87.75452386839295},{id:132,text:"let",time:88.02855403623963},{id:133,text:"you",time:88.46058995803833},{id:134,text:"down",time:88.89142795231628}],[{id:135,text:"Never",time:89.6260828474121},{id:136,text:"gonna",time:89.8724921373291},{id:137,text:"run",time:90.14699599427796},{id:138,text:"around",time:90.73573205340575},{id:139,text:"and",time:91.52924796376037},{id:140,text:"desert",time:92.12812394087219},{id:141,text:"you",time:92.56116379019166}],[{id:142,text:"Never",time:93.82698706103515},{id:143,text:"gonna",time:94.08574988555908},{id:144,text:"make",time:94.36378200190735},{id:145,text:"you",time:94.78912795422363},{id:146,text:"cry",time:95.21307997901917}],[{id:147,text:"Never",time:96.0510987997284},{id:148,text:"gonna",time:96.40503189128113},{id:149,text:"say",time:96.6700319961853},{id:150,text:"goodbye",time:97.10689479400635}],[{id:151,text:"Never",time:98.0771001335144},{id:152,text:"gonna",time:98.29461299618531},{id:153,text:"tell",time:98.57000785313416},{id:154,text:"a",time:99.15239879782105},{id:155,text:"lie",time:99.41992199618531},{id:156,text:"and",time:100.02597708773804},{id:157,text:"hurt",time:100.66312702670288},{id:158,text:"you",time:101.20668893705749}],[{id:159,text:"Never",time:102.31772499809266},{id:160,text:"gonna",time:102.59640904196166},{id:161,text:"give",time:102.93975697711181},{id:162,text:"you",time:103.32465996757507},{id:163,text:"up",time:103.75276794087219}],[{id:164,text:"Never",time:104.46771885504151},{id:165,text:"gonna",time:104.70476684359741},{id:166,text:"let",time:104.9937588779297},{id:167,text:"you",time:105.37175889891053},{id:168,text:"down",time:105.77767279782104}],[{id:169,text:"Never",time:106.52961189128112},{id:170,text:"gonna",time:106.81261988365173},{id:171,text:"run",time:107.10165515640259},{id:172,text:"around",time:107.62573684741211},{id:173,text:"and",time:107.97760784550476},{id:174,text:"desert",time:108.42879982070923},{id:175,text:"you",time:109.00172877493286}],[{id:176,text:"Never",time:110.72034387602234},{id:177,text:"gonna",time:111.04296290272522},{id:178,text:"make",time:111.34742596948242},{id:179,text:"you",time:111.83739997901917},{id:180,text:"cry",time:112.21848902098084}],[{id:181,text:"Never",time:112.93929297711182},{id:182,text:"gonna",time:113.20726386457825},{id:183,text:"say",time:113.49125802288819},{id:184,text:"goodbye",time:113.94111183215333}],[{id:185,text:"Never",time:114.9972241373291},{id:186,text:"gonna",time:115.24529197138978},{id:187,text:"tell",time:115.56426697711181},{id:188,text:"a",time:116.11836187792969},{id:189,text:"lie",time:116.43928097711182},{id:190,text:"and",time:117.36038998092651},{id:191,text:"hurt",time:117.65433289128113},{id:192,text:"you",time:118.1382088588562}],[{id:193,text:"Ooh",time:119.81034602861023},{id:194,text:"give",time:121.89597899427795},{id:195,text:"you",time:122.25081377493287},{id:196,text:"up",time:122.71586992752076}],[{id:197,text:"Ooh",time:123.96911194850159},{id:198,text:"give",time:126.05770593515015},{id:199,text:"you",time:126.45660586457825},{id:200,text:"up",time:126.89273897329711}],[{id:201,text:"Ooh",time:128.20295891607665},{id:202,text:"Never",time:128.73996285694886},{id:203,text:"gonna",time:128.90727591226195},{id:204,text:"give",time:129.0972759694824},{id:205,text:"never",time:129.38676993133544},{id:206,text:"gonna",time:129.5657960705719},{id:207,text:"give",time:129.58879607247925},{id:208,text:"Give",time:129.85462710490418},{id:209,text:"you",time:130.36671995040894},{id:210,text:"up",time:131.01559687983703}],[{id:211,text:"Ooh",time:132.43756581117248},{id:212,text:"Never",time:132.96237690653993},{id:213,text:"gonna",time:133.1283767959137},{id:214,text:"give",time:133.39946294277954},{id:215,text:"never",time:133.43646288365173},{id:216,text:"gonna",time:133.89739884931944},{id:217,text:"give",time:133.9423989256134},{id:218,text:"Give",time:133.96139897901915},{id:219,text:"you",time:134.54235583024598},{id:220,text:"up",time:135.1922450705719}],[{id:221,text:"We've",time:136.94934789509583},{id:222,text:"known",time:137.19759604005432},{id:223,text:"each",time:137.45243091607665},{id:224,text:"other",time:137.69857496757507},{id:225,text:"for",time:138.95857995803834},{id:226,text:"so",time:139.19154599809266},{id:227,text:"long",time:139.50649181689454}],[{id:228,text:"Your",time:141.12935096185302},{id:229,text:"heart's",time:141.37645801335145},{id:230,text:"been",time:141.6572268397827},{id:231,text:"aching",time:141.9551189370575},{id:232,text:"but",time:142.3171829256134},{id:233,text:"you're",time:143.21125497901917},{id:234,text:"too",time:143.4512699885559},{id:235,text:"shy",time:143.91205495422363},{id:236,text:"to",time:144.29772987220764},{id:237,text:"say",time:144.61647706484985},{id:238,text:"it",time:144.86106000190736}],[{id:239,text:"Inside",time:145.51917899427795},{id:240,text:"we",time:145.79152283024598},{id:241,text:"both",time:146.0739971335144},{id:242,text:"know",time:146.36204900190734},{id:243,text:"what's",time:146.6551139847412},{id:244,text:"been",time:146.95208291607665},{id:245,text:"going",time:147.55517684169007},{id:246,text:"on",time:147.7949788512268}],[{id:247,text:"We",time:149.39905794277954},{id:248,text:"know",time:149.65406481880188},{id:249,text:"the",time:149.9500628226166},{id:250,text:"game",time:150.2341009809265},{id:251,text:"and",time:150.51720097329712},{id:252,text:"we're",time:150.81924901907348},{id:253,text:"gonna",time:151.49423897138976},{id:254,text:"play",time:151.91701206866455},{id:255,text:"it",time:152.64281790081787}],[{id:256,text:"I",time:153.4833039809265},{id:257,text:"just",time:154.8038749141693},{id:258,text:"wanna",time:154.85287493896485},{id:259,text:"tell",time:155.2419648779297},{id:260,text:"you",time:155.66657606866454},{id:261,text:"how",time:155.96788094850157},{id:262,text:"I'm",time:156.23190388746644},{id:263,text:"feeling",time:156.5667929256134}],[{id:264,text:"Gotta",time:158.74469289891053},{id:265,text:"make",time:158.99165287792968},{id:266,text:"you",time:159.34673089700317},{id:267,text:"understand",time:160.10522195994568}],[{id:268,text:"Never",time:161.3715369923706},{id:269,text:"gonna",time:161.5976260629425},{id:270,text:"give",time:161.93142793515014},{id:271,text:"you",time:162.36147300190734},{id:272,text:"up",time:162.80249298664856}],[{id:273,text:"Never",time:163.54337992370606},{id:274,text:"gonna",time:163.7808428397827},{id:275,text:"let",time:164.07239496757506},{id:276,text:"you",time:164.52536579782105},{id:277,text:"down",time:164.93537888365174}],[{id:278,text:"Never",time:165.7153398550415},{id:279,text:"gonna",time:165.96436392752076},{id:280,text:"run",time:166.27532179782105},{id:281,text:"around",time:166.81534699809265},{id:282,text:"and",time:167.4652688550415},{id:283,text:"desert",time:168.1583599332428},{id:284,text:"you",time:168.71431792752074}],[{id:285,text:"Never",time:169.79572101716613},{id:286,text:"gonna",time:170.03609695422364},{id:287,text:"make",time:170.34300511444093},{id:288,text:"you",time:170.76506604577636},{id:289,text:"cry",time:171.20303200953674}],[{id:290,text:"Never",time:171.99910277493285},{id:291,text:"gonna",time:172.26412387983703},{id:292,text:"say",time:172.5350697882843},{id:293,text:"goodbye",time:173.0642220705719}],[{id:294,text:"Never",time:174.13926487983704},{id:295,text:"gonna",time:174.3878479523163},{id:296,text:"tell",time:174.67698598664856},{id:297,text:"a",time:175.1599677882843},{id:298,text:"lie",time:176.51009593133546},{id:299,text:"and",time:176.75912076539612},{id:300,text:"hurt",time:177.26305395231628},{id:301,text:"you",time:177.6780359141693}],[{id:302,text:"Never",time:178.41999177874757},{id:303,text:"gonna",time:178.6429430667572},{id:304,text:"give",time:178.9358348111725},{id:305,text:"you",time:179.28195300572204},{id:306,text:"up",time:179.7438788989105}],[{id:307,text:"Never",time:180.55170998664855},{id:308,text:"gonna",time:180.8727398474121},{id:309,text:"let",time:181.35171093896486},{id:310,text:"you",time:181.73772209536745},{id:311,text:"down",time:181.97669093896485}],[{id:312,text:"Never",time:182.5946419694824},{id:313,text:"gonna",time:182.8339550514984},{id:314,text:"run",time:183.13255783787537},{id:315,text:"around",time:183.6668149961853},{id:316,text:"and",time:184.33660507247924},{id:317,text:"desert",time:185.04068206866455},{id:318,text:"you",time:185.59919784550476}],[{id:319,text:"Never",time:186.73272198092653},{id:320,text:"gonna",time:186.94472911253357},{id:321,text:"make",time:187.3986688703003},{id:322,text:"you",time:187.72066989700318},{id:323,text:"cry",time:188.12659003433228}],[{id:324,text:"Never",time:188.90952302670289},{id:325,text:"gonna",time:189.194554874115},{id:326,text:"say",time:189.4494709885559},{id:327,text:"goodbye",time:189.9493709885559}],[{id:328,text:"Never",time:190.9162409961853},{id:329,text:"gonna",time:191.16026595422363},{id:330,text:"tell",time:191.44924898855592},{id:331,text:"a",time:192.00511798283387},{id:332,text:"lie",time:192.3152169256134},{id:333,text:"and",time:193.38122891035462},{id:334,text:"hurt",time:193.61731397138976},{id:335,text:"you",time:194.14540884931947}],[{id:336,text:"Never",time:195.24445106484984},{id:337,text:"gonna",time:195.5432358512268},{id:338,text:"give",time:195.80693979019165},{id:339,text:"you",time:196.22535377302552},{id:340,text:"up",time:196.65224481880188}],[{id:341,text:"Never",time:197.37317301335145},{id:342,text:"gonna",time:197.62615703433227},{id:343,text:"let",time:197.88409193133546},{id:344,text:"you",time:198.2651239732971},{id:345,text:"down",time:198.70597695803832}],[{id:346,text:"Never",time:199.5059059103546},{id:347,text:"gonna",time:199.76291387983704},{id:348,text:"run",time:200.1569659332428},{id:349,text:"around",time:201.02499996376037},{id:350,text:"and",time:201.38376893133545},{id:351,text:"desert",time:201.89202406675722},{id:352,text:"you",time:202.43852199809265}],[{id:353,text:"Never",time:203.6857049771118},{id:354,text:"gonna",time:203.97543908392333},{id:355,text:"make",time:204.46478578256225},{id:356,text:"you",time:204.8880421182556},{id:357,text:"cry",time:205.43179479019165}],[{id:358,text:"Never",time:206.0388189027252},{id:359,text:"gonna",time:206.32891886457824},{id:360,text:"say",time:206.86468187792968},{id:361,text:"goodbye",time:207.23270990844728}],[{id:362,text:"Never",time:208.08292305149843},{id:363,text:"gonna",time:208.35085893896485},{id:364,text:"tell",time:208.65385491226198},{id:365,text:"a",time:209.16681892370605},{id:366,text:"lie",time:209.47382684550476},{id:367,text:"and",time:209.99990110681154},{id:368,text:"hurt",time:210.36921206484985},{id:369,text:"you",time:210.83059395803832}]].flat();e.a=n},138:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return u}));var n=i(3),a=i.n(n),r=i(27),o=i(101),d=i(102),m=i(97),c=i(111);function u(t){var e=t.results,i=t.input,n=t.setInput,u=t.loading,s=t.style;return a.a.createElement(o.a,{fluid:!0,style:{zIndex:1e3}},a.a.createElement(m.a,{className:"justify-content-center"},a.a.createElement(d.a,{onChange:function(t){return n(t.target.value)},onSubmit:function(t){t.preventDefault()}},a.a.createElement(d.a.Control,{value:i,placeholder:"Search",autoFocus:!0}))),a.a.createElement(m.a,{style:{justifyContent:"center",marginTop:5}},""===i?null:!u&&e?e.map((function(t,e){return a.a.createElement(c.a,Object.assign({key:e},t,{fadeInMillis:100*(e+1),style:s}))})):a.a.createElement(r.a,{centered:!1})))}},206:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return I}));var n=i(93),a=i(91),r=i(95),o=i(3),d=i.n(o),m=(i(27),i(138)),c=i(49),u=i(98),s=i(107),x=i(101),l=i(92),y=i(97),f=i(50),g=i(100),b=i.n(g),v=i(139),h=i(137),p=i(119),O=i.n(p),w=i(108);function j(t){var e,i=t.setAstleyVideoDuration,n=t.videosInView,r=t.setInViewByKey,m=Object(o.useState)(0),c=Object(a.a)(m,2),u=c[0],x=c[1],y=Object(o.useState)(""),f=Object(a.a)(y,2),g=f[0],b=f[1],p=Object(o.useRef)(),j=Object(w.a)({threshold:.5}),E=Object(a.a)(j,2),k=E[0],N=E[1],I=Object(o.useState)(!0),S=Object(a.a)(I,2),T=S[0],C=S[1];return Object(o.useEffect)((function(){r("musicVideo",!!N);var t=setInterval((function(){if(p.current){var t=p.current.getCurrentTime();t>h.a[u].time&&(b(h.a[u].text),x((function(t){return t+1}))),t<16&&p.current.seekTo(17.5),i(t)}}),10);return function(){return clearInterval(t)}}),[N,u]),d.a.createElement(s.a,{inView:N},d.a.createElement("p",{style:{position:"absolute",left:"50%",transform:"translate(-50%, 0)",fontSize:40,textAlign:"center",color:"white",zIndex:1e3}},"First, we take a video with synchronized lyrics"),d.a.createElement("div",{ref:k,style:{position:"relative",paddingTop:"56.25%"}},d.a.createElement(O.a,(e={controls:!1,ref:p,playing:T&&Object.keys(n).some((function(t){return n[t]})),url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",style:{minWidth:"100%",minHeight:"100%",position:"absolute",left:0,top:0}},Object(v.a)(e,"controls",!1),Object(v.a)(e,"onUnstarted",(function(){console.log("unStarted"),C(!1)})),e))),T?d.a.createElement("p",{style:{fontSize:120,position:"absolute",color:"white",textAlign:"center",bottom:"50%",left:"50%",transform:"translate(-50%, 50%)"}},g):d.a.createElement(l.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},onClick:function(){return C(!0)}},"Can we autoplay this video?"))}function E(t){var e=t.astleyVideoDuration,i=t.url,n=t.topText,r=t.setInViewByKey,m=t.videoKey,c=t.syncOffset,u=Object(o.useRef)(),x=Object(o.useState)(!0),l=Object(a.a)(x,2),y=l[0],f=l[1],g=Object(o.useState)(!1),b=Object(a.a)(g,2),v=b[0],h=b[1],p=Object(w.a)({threshold:.5}),j=Object(a.a)(p,2),E=j[0],k=j[1];return Object(o.useEffect)((function(){k?(f(!0),r(m,!0)):r(m,!1)}),[k]),d.a.createElement(s.a,{inView:k},d.a.createElement("p",{style:{position:"absolute",left:"50%",transform:"translate(-50%, 0)",fontSize:40,textAlign:"center",color:"white",zIndex:1e3,width:"100%"}},n),d.a.createElement("div",{ref:E,style:{position:"relative",paddingTop:"56.25%"}},d.a.createElement(O.a,{ref:u,playing:y||k,url:i,style:{minWidth:"100%",minHeight:"100%",position:"absolute",left:0,top:0},controls:!1,muted:!0,onBufferEnd:function(){v?y&&(f(!1),u.current.seekTo(e-c-.5)):(h(!0),f(!1),u.current.seekTo(e-c))}})))}function k(){var t=Object(r.a)(["\n  query geniussearchresults($query: String) {\n    geniusSearchResults(query: $query) {\n      imgUrl\n      bottomText\n      topText\n      forwardingUrl\n    }\n  }\n"]);return k=function(){return t},t}var N=Object(c.gql)(k());function I(){var t=Object(o.useState)(""),e=Object(a.a)(t,2),i=e[0],r=e[1],g=Object(o.useRef)(),v=Object(o.useState)(16),h=Object(a.a)(v,2),p=h[0],O=h[1],w=Object(o.useState)({musicVideo:!1,lyricsSyncCreator:!1,preview:!1,play:!1}),k=Object(a.a)(w,2),I=k[0],S=k[1],T=Object(o.useCallback)((function(t,e){var i=Object(n.a)({},I);i[t]=e,S(i)}),[I]),C=Object(c.useQuery)(N,{variables:{query:i},skip:""===i}),V=C.data,z=C.loading;return d.a.createElement(d.a.Fragment,null,d.a.createElement(u.a,null),d.a.createElement(x.a,null,d.a.createElement(s.a,{title:"Type your tunes!",style:{height:"30%"}},d.a.createElement(f.a,{src:b.a,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:1373/3,height:382/3,zIndex:1e3}}),d.a.createElement(l.a,{style:{position:"absolute",left:"50%",bottom:"10%",transform:"translate(-50%, 0)"},onClick:function(){return window.scrollTo(0,g.current.offsetTop)}},"How does this site work?")),d.a.createElement(s.a,{title:"Search For An Artist/Song/Album",style:{minHeight:"calc(70% - 120px)",height:"auto",overflow:"hidden"}},d.a.createElement(y.a,{style:{justifyContent:"center",marginBottom:12}}),d.a.createElement(m.default,{results:V?V.geniusSearchResults:void 0,input:i,setInput:r,formText:"Search For An Artist/Song/Album",loading:z})),d.a.createElement("div",{ref:g},d.a.createElement(j,{astleyVideoDuration:p,setAstleyVideoDuration:O,videosInView:I,setInViewByKey:T})),d.a.createElement(E,{url:"https://www.youtube.com/watch?v=F1AHuW7ptIo",astleyVideoDuration:p,topText:"Then you can practice your typing to that song!",setInViewByKey:T,videoKey:"play",syncOffset:12.2}),d.a.createElement(E,{url:"https://www.youtube.com/watch?v=DL7IHppr2wE",astleyVideoDuration:p,topText:"If no synchronization exists, you can create one",setInViewByKey:T,videoKey:"lyricsSyncCreator",syncOffset:15.6}),d.a.createElement(E,{url:"https://www.youtube.com/watch?v=QWY3E-i_A3o",astleyVideoDuration:p,topText:"Then preview your new synchronization",setInViewByKey:T,videoKey:"preview",syncOffset:8.5})))}},98:function(t,e,i){"use strict";i.d(e,"a",(function(){return S}));var n=i(91),a=i(95),r=i(3),o=i.n(r),d=i(114),m=i(110),c=i(109),u=i(92),s=i(118),x=i(115),l=i(102),y=i(10),f=i(120),g=i(99),b=i.n(g),v="359548864121-f3blhpvvgm17oqoun8tvh2708a8loujm.apps.googleusercontent.com",h=i(49),p=i(103),O=i.n(p);function w(){var t=Object(a.a)(["\n  mutation createuser($tokenId: String, $userName: String) {\n    createUser(tokenId: $tokenId, userName: $userName)\n  }\n"]);return w=function(){return t},t}function j(){var t=Object(a.a)(["\n  query usernametaken($userName: String!) {\n    userNameTaken(userName: $userName)\n  }\n"]);return j=function(){return t},t}function E(){var t=Object(a.a)(["\n  query userdata($tokenId: String) {\n    userData(tokenId: $tokenId) {\n      userName\n      existsInDB\n    }\n  }\n"]);return E=function(){return t},t}var k=Object(h.gql)(E()),N=Object(h.gql)(j()),I=Object(h.gql)(w());function S(t){var e=t.centerContent,a=t.customContent,p=t.setParentTokenId,w=t.setParentUserName,j=Object(y.f)(),E=O()(),S=E.innerWidth,T=E.innerHeight,C=Object(r.useState)(""),V=Object(n.a)(C,2),z=V[0],A=V[1],B=Object(h.useLazyQuery)(k,{variables:{tokenId:z},onCompleted:function(){W.existsInDB?w&&w(W.userName):Q(!0)},fetchPolicy:"network-only"}),D=Object(n.a)(B,2),H=D[0],P=D[1].data,W=(P=void 0===P?{}:P).userData,q=Object(r.useState)(""),F=Object(n.a)(q,2),R=F[0],L=F[1],K=Object(h.useQuery)(N,{variables:{userName:R},skip:!W||W.existsInDB||""===R}).data,$=(K=void 0===K?{}:K).userNameTaken,M=Object(r.useState)(!1),U=Object(n.a)(M,2),G=U[0],Q=U[1],Y=Object(h.useMutation)(I,{variables:{userName:R,tokenId:z},onCompleted:function(){H({variables:{tokenId:z}}),Q(!1)}}),_=Object(n.a)(Y,1)[0];return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{className:"shadow-lg",style:{position:"absolute",left:.5*S,top:.5*T,transform:"translate(-50%, -50%)",zIndex:1e3},show:G,onClose:function(){return Q(!1)},variant:$?"danger":"primary"},o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a.Heading,null,$?"This username is taken":"Create a username for your account"),o.a.createElement(l.a,{onSubmit:function(t){t.preventDefault(),$||_()},onChange:function(t){return L(t.target.value)}},o.a.createElement(l.a.Control,{style:{marginTop:"em"},placeholder:"Enter username for your new account",autoFocus:!0}),o.a.createElement(u.a,{style:{position:"relative",marginTop:"1em",left:"50%",transform:"translate(-50%, 0px)"},disabled:$,onClick:function(){return _()}},"Create account")))),o.a.createElement(d.a,{style:{height:60},sticky:"top",bg:"secondary",variant:"dark"},o.a.createElement(d.a.Brand,{onClick:function(){return j.push("/")}},o.a.createElement(u.a,{variant:"outline-primary",style:{justifyContent:"left",width:142,height:44},size:"sm"},o.a.createElement("img",{alt:"Home",src:i(100),style:{top:0,height:"100%",width:"100%"}}))),a,o.a.createElement(d.a.Collapse,{style:{position:"absolute",transform:"translate(-50%, 0%)",left:"50%"}},e),o.a.createElement(c.a,{className:"ml-auto"},o.a.createElement("div",{style:{marginRight:10,marginTop:20,marginBottom:20}},o.a.createElement(f.a,{href:"https://github.com/EerikSaksi/type_to_lyrics","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star EerikSaksi/type_to_lyrics on GitHub"},"Star")),W&&W.existsInDB?o.a.createElement(s.a,{title:"Signed in as ".concat(W.userName),style:{alignSelf:"center"}},o.a.createElement(x.a.Item,{style:{paddingLeft:4,paddingRight:4}},o.a.createElement(u.a,{style:{width:"100%"},onClick:function(){return j.push("/user/".concat(W.userName))}},"View your profile")),o.a.createElement(x.a.Item,{style:{paddingLeft:4,paddingRight:4}},o.a.createElement(g.GoogleLogout,{clientId:v,onLogoutSuccess:function(){A(""),H()}}))):G?o.a.createElement("p",{style:{fontSize:20,marginTop:16}}," Logging in... "):o.a.createElement("div",{style:{height:"100%",alignSelf:"center"}},o.a.createElement(b.a,{clientId:v,onSuccess:function(t){A(t.tokenId),H(),p&&p(t.tokenId)},onFailure:function(t){},isSignedIn:!0})))))}}}]);
//# sourceMappingURL=7.483b8adc.chunk.js.map