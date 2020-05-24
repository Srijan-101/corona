(this.webpackJsonpreactcorona=this.webpackJsonpreactcorona||[]).push([[0],{11:function(e,t,a){e.exports={container:"Cards_container__3bjn6",box:"Cards_box__2SJMX",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq",corona:"Cards_corona__2FF2H",update:"Cards_update__3cXIJ"}},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(74),o=a.n(c),s=a(6),u=a.n(s),l=a(10),i=a(16),d=a(223),m=a(227),p=a(224),f=a(225),v=a(32),b=a.n(v),h=a(33),E=a.n(h),_=a(11),x=a.n(_),y=a(75),g=a.n(y),C=a(76),j=a.n(C),O=a(34),w=a.n(O),N="https://covid19.mathdro.id/api",D=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n,r,c,o,s,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,w.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,l=r.lastUpdate,i={confirmed:c,recovered:o,deaths:s,lastUpdate:l},e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),F=function(e){var t=e.data.data,a=e.handlecountryChange;return t?r.a.createElement("div",{className:x.a.container},r.a.createElement("div",{className:x.a.box},r.a.createElement("img",{src:j.a,className:x.a.update}),r.a.createElement("img",{src:g.a,className:x.a.corona})),r.a.createElement(d.a,{container:!0,justify:"center"},r.a.createElement(H,{handlecountryChange:a})),r.a.createElement(d.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(d.a,{item:!0,component:m.a,xs:12,md:3,className:E()(x.a.card,x.a.infected)},r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(f.a,{varient:"h5"}," ",r.a.createElement(b.a,{start:0,end:t.confirmed.value,duration:2.5,separator:","})),r.a.createElement(f.a,{color:"textSecondary"},new Date(t.lastUpdate).toDateString()),r.a.createElement(f.a,{varient:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(d.a,{item:!0,component:m.a,xs:12,md:3,className:E()(x.a.card,x.a.recovered)},r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(f.a,{varient:"h5"},r.a.createElement(b.a,{start:0,end:t.recovered.value,duration:2.5,separator:","})),r.a.createElement(f.a,{color:"textSecondary"},new Date(t.lastUpdate).toDateString()),r.a.createElement(f.a,{varient:"body2"},"Number of recoveries cases from COVID-19"))),r.a.createElement(d.a,{item:!0,component:m.a,xs:12,md:3,className:E()(x.a.card,x.a.deaths)},r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(f.a,{varient:"h5"},r.a.createElement(b.a,{start:0,end:t.deaths.value,duration:2.5,separator:","})),r.a.createElement(f.a,{color:"textSecondary"},new Date(t.lastUpdate).toDateString()),r.a.createElement(f.a,{varient:"body2"},"No of deaths caused by COVID-19"))))):"....loading"},I=a(46),B=a(47),U=a.n(B),J=function(e){var t=e.data.data,a=e.country,c=Object(n.useState)({}),o=Object(i.a)(c,2),s=o[0],d=o[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=s[0]?r.a.createElement(I.b,{data:{labels:s.map((function(e){return e.date})),datasets:[{data:s.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:s.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,p=t?r.a.createElement(I.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["#4B7BF5","#10BC10","#DF362D"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null;return r.a.createElement("div",{className:U.a.container},a?p:m,r.a.createElement("div",{className:U.a.box}))},Z=a(228),V=a(226),z=a(82),G=a.n(z),H=function(e){var t=e.handlecountryChange,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,k();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement(Z.a,{className:G.a.formControl},r.a.createElement(V.a,{default:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},M=a(35),P=a.n(M),Q=a(83),R=a.n(Q),X=function(){return r.a.createElement("div",{className:P.a.container},r.a.createElement("div",{className:P.a.box},r.a.createElement("h5",null,"Site developed by: Srijan kc"),r.a.createElement("img",{src:R.a,className:P.a.foot}),r.a.createElement("br",null)))},q=a(84),A=a.n(q),T=function(){var e=Object(n.useState)({country:""}),t=Object(i.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,c({data:t});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var o=function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:a=e.sent,c({data:a,country:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:A.a.container},r.a.createElement(F,{data:a,handlecountryChange:o}),r.a.createElement(J,{data:a,country:a.country}),r.a.createElement(X,null))};o.a.render(r.a.createElement(T,null),document.getElementById("root"))},35:function(e,t,a){e.exports={container:"Footer_container__st7Zp",box:"Footer_box__lalu4",foot:"Footer_foot__2TOfF"}},47:function(e,t,a){e.exports={container:"Chart_container__yjZZH"}},75:function(e,t,a){e.exports=a.p+"static/media/corona.60771ccd.png"},76:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},82:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},83:function(e,t,a){e.exports=a.p+"static/media/person.ab7a04bb.png"},84:function(e,t,a){e.exports={container:"App_container__1MQN3"}},86:function(e,t,a){e.exports=a(206)}},[[86,1,2]]]);
//# sourceMappingURL=main.e2322424.chunk.js.map