(this["webpackJsonptedx-2021"]=this["webpackJsonptedx-2021"]||[]).push([[6],{22:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(7),o=n(21),c=n(1),r=n(13),l=n(2),s=n(5),i=n.n(s),u=n(3),d=(n(48),n(0)),b=function(){var e=u.a.HOME;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{id:"notfound",children:Object(d.jsxs)("div",{className:"notfound",children:[Object(d.jsx)("div",{className:"notfound-404",children:Object(d.jsxs)("h1",{children:[Object(d.jsx)("span",{children:"4"}),Object(d.jsx)("span",{children:"0"}),Object(d.jsx)("span",{children:"4"})]})}),Object(d.jsx)("h1",{children:"Oops!!!"}),Object(d.jsx)("h2",{children:" Page not found"}),Object(d.jsx)("h3",{children:"Click Here To Go Back"}),Object(d.jsx)(r.b,{to:e,children:Object(d.jsx)("button",{type:"button",children:"HOME"})})]})})})},O=n(14),j=n.n(O),p=n(18),g=(n(56),n(24)),m=n.n(g),h=n.p+"static/media/logo.11aacf2d.svg",x=n(25).a.REGISTER_USER,S=u.a.REGISTRATION,I=function(){var e=Object(c.useContext)(y),t=e.state,n=e.dispatch,a=function(){var e=Object(p.a)(j.a.mark((function e(n){var a,o,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.type,o={code:n,type:a},e.next=5,m.a.post("".concat("https://api.tedxjnec.com","/").concat(x),o);case 5:return c=e.sent,r=c.data,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)(Object(p.a)(j.a.mark((function e(){var t,o,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.location.search,o=new URLSearchParams(t),!(c=o.get("code"))){e.next=16;break}return e.prev=4,e.next=7,a(c);case 7:(r=e.sent).token?n({type:"LOGIN",payload:{user:r.user,token:r.token,isLoggedIn:!0}}):n({type:"LOGOUT"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),n({type:"LOGOUT"});case 14:e.next=17;break;case 16:n({type:"LOGOUT"});case 17:case"end":return e.stop()}}),e,null,[[4,11]])}))),[]),t.token&&setTimeout((function(){return Object(d.jsx)(l.a,{to:"amb"===t.type?"/test":S})}),1200),Object(d.jsxs)("div",{className:"callback-page-wrapper",children:[Object(d.jsx)("img",{className:"callback-image",src:h,alt:"TEDx JNEC kintsugi logo"}),Object(d.jsx)("code",{children:"Loading Your info..."}),Object(d.jsx)("code",{children:t.token?Object(d.jsx)(l.a,{to:"amb"===t.type?"/test":S}):null})]})},f=n.p+"static/media/loader.c7b1b140.webm",A=(n(74),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"show-loader",children:Object(d.jsx)("video",{className:"loading-video",muted:!0,loop:!0,width:"200",height:"500",kind:"captions",autoPlay:!0,children:Object(d.jsx)("source",{src:f,type:"video/webm"})})})})}),E={isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn"))||!1,user:JSON.parse(localStorage.getItem("user"))||null,token:JSON.parse(localStorage.getItem("token"))||null,type:JSON.parse(localStorage.getItem("type"))||null,amb:JSON.parse(localStorage.getItem("amb"))||null},R=function(e,t){switch(t.type){case"LOGIN":return localStorage.setItem("isLoggedIn",JSON.stringify(t.payload.isLoggedIn)),localStorage.setItem("user",JSON.stringify(t.payload.user)),localStorage.setItem("token",JSON.stringify(t.payload.token)),Object(a.a)(Object(a.a)({},e),{},{isLoggedIn:t.payload.isLoggedIn,user:t.payload.user,token:t.payload.token});case"LOGOUT":var n=localStorage.getItem("amb");return localStorage.clear(),n&&localStorage.setItem("amb",n),Object(a.a)(Object(a.a)({},e),{},{isLoggedIn:!1,user:null,token:null,type:null});case"SETTYPE":return localStorage.setItem("type",JSON.stringify(t.payload.type)),Object(a.a)(Object(a.a)({},e),{},{type:t.payload.type});case"SETAMB":return localStorage.setItem("amb",JSON.stringify(t.payload.amb)),Object(a.a)(Object(a.a)({},e),{},{amb:t.payload.amb});default:return e}},y=Object(c.createContext)({isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn"))||!1,user:JSON.parse(localStorage.getItem("user"))||null,token:JSON.parse(localStorage.getItem("token"))||null}),N=i()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(13)]).then(n.bind(null,321))},loading:A}),T=i()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(20)]).then(n.bind(null,325))},loading:A}),L=i()({loader:function(){return n.e(17).then(n.bind(null,324))},loading:A}),G=i()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(5),n.e(1),n.e(15)]).then(n.bind(null,322))},loading:A}),k=i()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(5),n.e(1),n.e(14)]).then(n.bind(null,320))},loading:A}),v=i()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(11)]).then(n.bind(null,327))},loading:A}),_=i()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(12)]).then(n.bind(null,323))},loading:A}),P=i()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(1),n.e(9)]).then(n.bind(null,328))},loading:A}),B=i()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,329))},loading:A}),D=i()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(10)]).then(n.bind(null,326))},loading:A}),H=i()({loader:function(){return n.e(23).then(n.bind(null,317))},loading:A}),M=i()({loader:function(){return Promise.all([n.e(3),n.e(19)]).then(n.bind(null,330))},loading:A}),U=i()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(1),n.e(21)]).then(n.bind(null,318))},loading:A}),C=i()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(1),n.e(24)]).then(n.bind(null,319))},loading:A}),J=i()({loader:function(){return Promise.all([n.e(0),n.e(3),n.e(1),n.e(22)]).then(n.bind(null,331))},loading:A}),w=i()({loader:function(){return Promise.all([n.e(0),n.e(3),n.e(4),n.e(1),n.e(16)]).then(n.bind(null,332))},loading:A});t.b=function(){var e=Object(c.useReducer)(R,E),t=Object(o.a)(e,2),n=t[0],s=t[1],i=u.a.HOME,O=u.a.ABOUT,j=u.a.TEAM,p=u.a.DASHBOARD,g=u.a.HIGHLIGHT,m=u.a.REGISTRATION,h=u.a.REGISTER_SUCCESS,x=u.a.GOOGLE_AUTH_CALLBACK_USER,S=u.a.LOGIN,f=u.a.ADMIN_LOGIN,A=u.a.AMBASSADOR_LOGIN,F=u.a.AMBASSADOR_DASHBOARD,Y=u.a.POLICY,K=u.a.TOC,q=u.a.AMBASSADOR_REGISTRATION;return Object(d.jsx)(y.Provider,{value:{state:n,dispatch:s},children:Object(d.jsx)(r.a,{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:i,component:N}),Object(d.jsx)(l.b,{exact:!0,path:O,component:T}),Object(d.jsx)(l.b,{exact:!0,path:p,component:L}),Object(d.jsx)(l.b,{exact:!0,path:j,component:G}),Object(d.jsx)(l.b,{exact:!0,path:g,component:v}),Object(d.jsx)(l.b,{exact:!0,path:S,component:P}),Object(d.jsx)(l.b,{exact:!0,path:f,component:B}),Object(d.jsx)(l.b,{exact:!0,path:A,component:D}),Object(d.jsx)(l.b,{exact:!0,path:F,component:M}),Object(d.jsx)(l.b,{exact:!0,path:x,component:I}),Object(d.jsx)(l.b,{exact:!0,path:K,component:C}),Object(d.jsx)(l.b,{exact:!0,path:Y,component:U}),Object(d.jsx)(l.b,{exact:!0,path:"".concat(j,"/:committee"),render:function(e){return Object(d.jsx)(k,Object(a.a)({},e))}}),Object(d.jsx)(l.b,{exact:!0,path:h,component:J}),Object(d.jsx)(l.b,{exact:!0,path:m,render:function(e){return Object(d.jsx)(_,Object(a.a)(Object(a.a)({},e),{},{propState:n}))}}),Object(d.jsx)(l.b,{exact:!0,path:q,component:w}),Object(d.jsx)(l.b,{exact:!0,path:"/test",component:H}),Object(d.jsx)(l.b,{component:b})]})})})}},25:function(e,t,n){"use strict";t.a={REGISTER_USER:"api/users/",GET_USER_INFO:"api/users/me",REGISTER_USER_INFO:"api/users/register/",REGISTER_AMBASSADOR_INFO:"api/ambassador/register"}},3:function(e,t,n){"use strict";t.a={HOME:"/",ABOUT:"/about",TEAM:"/team",REGISTRATION:"/registration",REGISTER_SUCCESS:"/registration/success",DASHBOARD:"/admin/dashboard",HIGHLIGHT:"/highlight",GOOGLE_AUTH_CALLBACK_USER:"/callback/google",ADMIN_LOGIN:"/admin/login",AMBASSADOR_LOGIN:"/ambassador/login",LOGIN:"/login",TOC:"/tos",POLICY:"/policy",AMBASSADOR_DASHBOARD:"/ambassador/dashboard",AMBASSADOR_REGISTRATION:"/ambassador/registration"}},38:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(36),r=n.n(c),l=(n(38),n(22)),s=n(0);r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(l.b,{})}),document.getElementById("root"))},48:function(e,t,n){},56:function(e,t,n){},74:function(e,t,n){}},[[41,7,8]]]);
//# sourceMappingURL=main.c4a9e268.chunk.js.map