(this["webpackJsonptedx-2021"]=this["webpackJsonptedx-2021"]||[]).push([[3],{24:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var a=n(10),c=n(21),o=n(0),r=n(13),s=n(2),i=n(9),l=n.n(i),d=n(5),u=(n(47),n(1)),b=function(){var e=d.a.HOME;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{id:"notfound",children:Object(u.jsxs)("div",{className:"notfound",children:[Object(u.jsx)("div",{className:"notfound-404",children:Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{children:"4"}),Object(u.jsx)("span",{children:"0"}),Object(u.jsx)("span",{children:"4"})]})}),Object(u.jsx)("h1",{children:"Oops!!!"}),Object(u.jsx)("h2",{children:" Page not found"}),Object(u.jsx)("h3",{children:"Click Here To Go Back"}),Object(u.jsx)(r.b,{to:e,children:Object(u.jsx)("button",{type:"button",children:"HOME"})})]})})})},O=n(14),j=n.n(O),p=n(18),h=(n(55),n(26)),g=n.n(h),x=n.p+"static/media/logo.11aacf2d.svg",m=n(35).a.REGISTER_USER,f=function(){var e=Object(o.useContext)(A),t=e.state,n=e.dispatch,a=function(){var e=Object(p.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={code:t},e.next=4,g.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/").concat(m),n);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)(Object(p.a)(j.a.mark((function e(){var t,c,o,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.location.search,c=new URLSearchParams(t),!(o=c.get("code"))){e.next=10;break}return e.next=6,a(o);case 6:r=e.sent,n({type:"LOGIN",payload:{user:r.user,token:r.token,isLoggedIn:!0}}),e.next=11;break;case 10:n({type:"LOGOUT"});case 11:case"end":return e.stop()}}),e)}))),[]),t.isLoggedIn?Object(u.jsx)(s.a,{to:"/test"}):Object(u.jsxs)("div",{className:"callback-page-wrapper",children:[Object(u.jsx)("img",{className:"callback-image",src:x,alt:"TEDx JNEC kintsugi logo"}),Object(u.jsx)("code",{children:"Loading Your info..."}),Object(u.jsx)("code",{children:t.isLoggedIn})]})},I=n.p+"static/media/loader.c7b1b140.webm",S=(n(73),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"show-loader",children:Object(u.jsx)("video",{className:"loading-video",muted:!0,loop:!0,width:"200",height:"500",kind:"captions",autoPlay:!0,children:Object(u.jsx)("source",{src:I,type:"video/webm"})})})})}),E={isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn"))||!1,user:JSON.parse(localStorage.getItem("user"))||null,token:JSON.parse(localStorage.getItem("token"))||null},L=function(e,t){switch(t.type){case"LOGIN":return localStorage.setItem("isLoggedIn",JSON.stringify(t.payload.isLoggedIn)),localStorage.setItem("user",JSON.stringify(t.payload.user)),localStorage.setItem("token",JSON.stringify(t.payload.token)),Object(a.a)(Object(a.a)({},e),{},{isLoggedIn:t.payload.isLoggedIn,user:t.payload.user,token:t.payload.user});case"LOGOUT":return localStorage.clear(),Object(a.a)(Object(a.a)({},e),{},{isLoggedIn:!1,user:null,token:null});default:return e}},A=Object(o.createContext)(),N=l()({loader:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,310))},loading:S}),T=l()({loader:function(){return Promise.all([n.e(1),n.e(0),n.e(16)]).then(n.bind(null,314))},loading:S}),v=l()({loader:function(){return n.e(14).then(n.bind(null,313))},loading:S}),_=l()({loader:function(){return Promise.all([n.e(1),n.e(2),n.e(0),n.e(11)]).then(n.bind(null,311))},loading:S}),R=l()({loader:function(){return Promise.all([n.e(1),n.e(2),n.e(0),n.e(10)]).then(n.bind(null,309))},loading:S}),G=l()({loader:function(){return Promise.all([n.e(1),n.e(0),n.e(8)]).then(n.bind(null,316))},loading:S}),k=l()({loader:function(){return Promise.all([n.e(1),n.e(5),n.e(0),n.e(12)]).then(n.bind(null,312))},loading:S}),y=l()({loader:function(){return Promise.all([n.e(1),n.e(0),n.e(7)]).then(n.bind(null,317))},loading:S}),H=l()({loader:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,318))},loading:S}),P=l()({loader:function(){return n.e(13).then(n.bind(null,315))},loading:S}),w=l()({loader:function(){return n.e(17).then(n.bind(null,308))},loading:S});t.b=function(){var e=Object(o.useReducer)(L,E),t=Object(c.a)(e,2),n=t[0],i=t[1],l=d.a.HOME,O=d.a.ABOUT,j=d.a.TEAM,p=d.a.DASHBOARD,h=d.a.HIGHLIGHT,g=d.a.REGISTRATION,x=d.a.GOOGLE_AUTH_CALLBACK_USER,m=d.a.LOGIN,I=d.a.ADMIN_LOGIN,S=d.a.AMBASSADOR_LOGIN;return Object(u.jsx)(A.Provider,{value:{state:n,dispatch:i},children:Object(u.jsx)(r.a,{children:Object(u.jsxs)(s.d,{children:[Object(u.jsx)(s.b,{exact:!0,path:l,component:N}),Object(u.jsx)(s.b,{exact:!0,path:O,component:T}),Object(u.jsx)(s.b,{exact:!0,path:p,component:v}),Object(u.jsx)(s.b,{exact:!0,path:j,component:_}),Object(u.jsx)(s.b,{exact:!0,path:h,component:G}),Object(u.jsx)(s.b,{exact:!0,path:m,component:y}),Object(u.jsx)(s.b,{exact:!0,path:I,component:H}),Object(u.jsx)(s.b,{exact:!0,path:S,component:P}),Object(u.jsx)(s.b,{exact:!0,path:x,component:f}),Object(u.jsx)(s.b,{exact:!0,path:"".concat(j,"/:committee"),render:function(e){return Object(u.jsx)(R,Object(a.a)({},e))}}),Object(u.jsx)(s.b,{exact:!0,path:g,component:k}),Object(u.jsx)(s.b,{exact:!0,path:"/test",component:w}),Object(u.jsx)(s.b,{component:b})]})})})}},35:function(e,t,n){"use strict";t.a={REGISTER_USER:"api/users/",GET_USER_INFO:"api/users/me"}},37:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(36),r=n.n(o),s=(n(37),n(24)),i=n(1);r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(s.b,{})}),document.getElementById("root"))},47:function(e,t,n){},5:function(e,t,n){"use strict";t.a={HOME:"/",ABOUT:"/about",TEAM:"/team",REGISTRATION:"/registration",DASHBOARD:"/admin/dashboard",HIGHLIGHT:"/highlight",GOOGLE_AUTH_CALLBACK_USER:"/callback/google",ADMIN_LOGIN:"/admin/login",AMBASSADOR_LOGIN:"/ambassador/login",LOGIN:"/login"}},55:function(e,t,n){},73:function(e,t,n){}},[[40,4,6]]]);
//# sourceMappingURL=main.af8edab6.chunk.js.map