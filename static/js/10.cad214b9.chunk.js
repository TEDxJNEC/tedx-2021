(this["webpackJsonptedx-2021"]=this["webpackJsonptedx-2021"]||[]).push([[10],{116:function(t,r,e){var n=e(128);t.exports=function(t,r){if(t){if("string"===typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}},128:function(t,r){t.exports=function(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}},186:function(t,r,e){"use strict";var n=e(187),o=e(191),a=e(192),i=e(196),c=e(197),s=e(198),u=e(199);function l(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(t,r){return r.encode?r.strict?i(t):encodeURIComponent(t):t}function p(t,r){return r.decode?c(t):t}function d(t){return Array.isArray(t)?t.sort():"object"===typeof t?d(Object.keys(t)).sort((function(t,r){return Number(t)-Number(r)})).map((function(r){return t[r]})):t}function y(t){var r=t.indexOf("#");return-1!==r&&(t=t.slice(0,r)),t}function m(t){var r=(t=y(t)).indexOf("?");return-1===r?"":t.slice(r+1)}function g(t,r){return r.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!r.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function b(t,r){l((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var e=function(t){var r;switch(t.arrayFormat){case"index":return function(t,e,n){r=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),r?(void 0===n[t]&&(n[t]={}),n[t][r[1]]=e):n[t]=e};case"bracket":return function(t,e,n){r=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),r?void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=[e]:n[t]=e};case"comma":case"separator":return function(r,e,n){var o="string"===typeof e&&e.includes(t.arrayFormatSeparator),a="string"===typeof e&&!o&&p(e,t).includes(t.arrayFormatSeparator);e=a?p(e,t):e;var i=o||a?e.split(t.arrayFormatSeparator).map((function(r){return p(r,t)})):null===e?e:p(e,t);n[r]=i};default:return function(t,r,e){void 0!==e[t]?e[t]=[].concat(e[t],r):e[t]=r}}}(r),a=Object.create(null);if("string"!==typeof t)return a;if(!(t=t.trim().replace(/^[?#&]/,"")))return a;var i,c=o(t.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value;if(""!==u){var f=s(r.decode?u.replace(/\+/g," "):u,"="),y=n(f,2),m=y[0],b=y[1];b=void 0===b?null:["comma","separator"].includes(r.arrayFormat)?b:p(b,r),e(p(m,r),b,a)}}}catch(k){c.e(k)}finally{c.f()}for(var v=0,h=Object.keys(a);v<h.length;v++){var j=h[v],x=a[j];if("object"===typeof x&&null!==x)for(var O=0,w=Object.keys(x);O<w.length;O++){var S=w[O];x[S]=g(x[S],r)}else a[j]=g(x,r)}return!1===r.sort?a:(!0===r.sort?Object.keys(a).sort():Object.keys(a).sort(r.sort)).reduce((function(t,r){var e=a[r];return Boolean(e)&&"object"===typeof e&&!Array.isArray(e)?t[r]=d(e):t[r]=e,t}),Object.create(null))}r.extract=m,r.parse=b,r.stringify=function(t,r){if(!t)return"";l((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var e=function(e){return r.skipNull&&(null===(n=t[e])||void 0===n)||r.skipEmptyString&&""===t[e];var n},n=function(t){switch(t.arrayFormat){case"index":return function(r){return function(e,n){var o=e.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[f(r,t),"[",o,"]"].join("")]:[[f(r,t),"[",f(o,t),"]=",f(n,t)].join("")])}};case"bracket":return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[f(r,t),"[]"].join("")]:[[f(r,t),"[]=",f(n,t)].join("")])}};case"comma":case"separator":return function(r){return function(e,n){return null===n||void 0===n||0===n.length?e:0===e.length?[[f(r,t),"=",f(n,t)].join("")]:[[e,f(n,t)].join(t.arrayFormatSeparator)]}};default:return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[f(r,t)]:[[f(r,t),"=",f(n,t)].join("")])}}}}(r),o={},i=0,c=Object.keys(t);i<c.length;i++){var s=c[i];e(s)||(o[s]=t[s])}var u=Object.keys(o);return!1!==r.sort&&u.sort(r.sort),u.map((function(e){var o=t[e];return void 0===o?"":null===o?f(e,r):Array.isArray(o)?o.reduce(n(e),[]).join("&"):f(e,r)+"="+f(o,r)})).filter((function(t){return t.length>0})).join("&")},r.parseUrl=function(t,r){r=Object.assign({decode:!0},r);var e=s(t,"#"),o=n(e,2),a=o[0],i=o[1];return Object.assign({url:a.split("?")[0]||"",query:b(m(t),r)},r&&r.parseFragmentIdentifier&&i?{fragmentIdentifier:p(i,r)}:{})},r.stringifyUrl=function(t,e){e=Object.assign({encode:!0,strict:!0},e);var n=y(t.url).split("?")[0]||"",o=r.extract(t.url),a=r.parse(o,{sort:!1}),i=Object.assign(a,t.query),c=r.stringify(i,e);c&&(c="?".concat(c));var s=function(t){var r="",e=t.indexOf("#");return-1!==e&&(r=t.slice(e)),r}(t.url);return t.fragmentIdentifier&&(s="#".concat(f(t.fragmentIdentifier,e))),"".concat(n).concat(c).concat(s)},r.pick=function(t,e,n){n=Object.assign({parseFragmentIdentifier:!0},n);var o=r.parseUrl(t,n),a=o.url,i=o.query,c=o.fragmentIdentifier;return r.stringifyUrl({url:a,query:u(i,e),fragmentIdentifier:c},n)},r.exclude=function(t,e,n){var o=Array.isArray(e)?function(t){return!e.includes(t)}:function(t,r){return!e(t,r)};return r.pick(t,o,n)}},187:function(t,r,e){var n=e(188),o=e(189),a=e(116),i=e(190);t.exports=function(t,r){return n(t)||o(t,r)||a(t,r)||i()}},188:function(t,r){t.exports=function(t){if(Array.isArray(t))return t}},189:function(t,r){t.exports=function(t,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return e}}},190:function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},191:function(t,r,e){var n=e(116);t.exports=function(t,r){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=n(t))||r&&t&&"number"===typeof t.length){e&&(t=e);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==e.return||e.return()}finally{if(s)throw i}}}}},192:function(t,r,e){var n=e(193),o=e(194),a=e(116),i=e(195);t.exports=function(t){return n(t)||o(t)||a(t)||i()}},193:function(t,r,e){var n=e(128);t.exports=function(t){if(Array.isArray(t))return n(t)}},194:function(t,r){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},195:function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},196:function(t,r,e){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},197:function(t,r,e){"use strict";var n="%[a-f0-9]{2}",o=new RegExp(n,"gi"),a=new RegExp("("+n+")+","gi");function i(t,r){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;r=r||1;var e=t.slice(0,r),n=t.slice(r);return Array.prototype.concat.call([],i(e),i(n))}function c(t){try{return decodeURIComponent(t)}catch(n){for(var r=t.match(o),e=1;e<r.length;e++)r=(t=i(r,e).join("")).match(o);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(r){return function(t){for(var e={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=a.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(r){var o=c(n[0]);o!==n[0]&&(e[n[0]]=o)}n=a.exec(t)}e["%C2"]="\ufffd";for(var i=Object.keys(e),s=0;s<i.length;s++){var u=i[s];t=t.replace(new RegExp(u,"g"),e[u])}return t}(t)}}},198:function(t,r,e){"use strict";t.exports=function(t,r){if("string"!==typeof t||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[t];var e=t.indexOf(r);return-1===e?[t]:[t.slice(0,e),t.slice(e+r.length)]}},199:function(t,r,e){"use strict";t.exports=function(t,r){for(var e={},n=Object.keys(t),o=Array.isArray(r),a=0;a<n.length;a++){var i=n[a],c=t[i];(o?-1!==r.indexOf(i):r(i,c,t))&&(e[i]=c)}return e}},200:function(t,r,e){},327:function(t,r,e){"use strict";e.r(r);var n,o=e(1),a=e(83),i=e(22),c=e(74),s=e(75),u=e(186),l=e.p+"static/media/CollegeAmbassdor.250ef0b8.svg",f=e(95),p=e.p+"static/media/search.a4fa9b6f.svg",d=e(86),y=(e(200),e(0)),m=s.b.img(n||(n=Object(c.a)(["\n  width: 600px;\n"]))),g=function(){var t=u.stringify({client_id:"203563480075-9552otk7dgi2a5adn94bhpm3h3tgv8q0.apps.googleusercontent.com",redirect_uri:"https://tedxjnec.com/callback/google",scope:["https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile"].join(" "),response_type:"code",access_type:"offline",prompt:"consent"}),r="https://accounts.google.com/o/oauth2/v2/auth?".concat(t);return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("div",{className:"sperator",children:Object(y.jsx)(m,{src:l,alt:"illustration"})}),Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"login-card",children:[Object(y.jsx)("div",{className:"logo",children:Object(y.jsx)("img",{src:f.a,className:"logo_tedx",alt:"TEDxJNEC_logo"})}),Object(y.jsx)("h3",{children:"Log in With"}),Object(y.jsx)("div",{className:"google-logo",children:Object(y.jsx)("img",{src:p,alt:"TEDxJNEC_logo"})}),Object(y.jsx)("div",{className:"method",children:Object(y.jsx)("div",{className:"method-item",children:Object(y.jsxs)("a",{href:r,className:"btn-action",children:[Object(y.jsx)(d.d,{}),Object(y.jsx)("span",{children:Object(y.jsx)("b",{children:"Sign in with Google"})})]})})})]})})]})},b=e(76);r.default=function(){var t=Object(o.useContext)(i.a),r=(t.state,t.dispatch);return Object(o.useEffect)((function(){r({type:"LOGOUT"}),r({type:"SETTYPE",payload:{type:"amb"}})}),[]),Object(y.jsxs)(b.a,{children:[Object(y.jsxs)(a.a,{children:[Object(y.jsx)("title",{children:"Login - TEDx JNEC"}),Object(y.jsx)("meta",{name:"description",content:"TEDxJNEC is all about sparking conversations and making great ideas accessible. We believe passion is contagious, and wish to spread our speaker\u2019s commitment to innovation thus creating a unique space where we expand our Perceptions.\n"})]}),Object(y.jsx)(g,{})]})}}}]);
//# sourceMappingURL=10.cad214b9.chunk.js.map