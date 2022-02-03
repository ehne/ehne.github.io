(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{194:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(5893),i=t(7294),s=t(6411);var a=t(5152),c=function(e){var r=e.children;return(0,n.jsx)(n.Fragment,{children:r})},o=((0,a.default)((function(){return Promise.resolve(c)}),{ssr:!1}),function(){var e=(0,i.useState)("linear-gradient(90deg, #ffc53f 0%,#ffc53f 100%)"),r=e[0],t=e[1];return(0,i.useEffect)((function(){t(function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"gradient",t="#ffc53f",n="linear-gradient(".concat(e,", #ffc53f 0%,#ffc53f 100%)"),i="linear-gradient(".concat(e,", rgb(243, 115, 97) 0%, \n        rgb(243, 115, 97) 16.6%, \n        rgb(248, 155, 60) 16.6%, \n        rgb(248, 155, 60) 33.2%,\n        #ffc53f 33.2%, \n        #ffc53f 49.36%, \n        rgb(163, 187, 74) 49.36%, \n        rgb(163, 187, 74) 65.96%, \n        rgb(91, 199, 190) 65.96%, \n        rgb(91, 199, 190) 82.56%, \n        rgb(106, 80, 149) 82.56%, \n        rgb(106, 80, 149) 100%)"),s=(new Date).getDate(),a=(new Date).getMonth()+1;switch([s,a].toString()){case"17,5":n=i;break;case"27,8":n="linear-gradient(".concat(e,", rgb(106, 80, 149) 0%,rgb(106, 80, 149) 100%)");break;case"20,9":n="linear-gradient(".concat(e,", rgb(163, 187, 74) 0%, rgb(163, 187, 74) 100%)"),t="rgb(163, 187, 74)"}switch(r){case"gradient":return n;case"color":return t}}("90deg"))}),[]),(0,n.jsx)(s.xu,{sx:{width:"100%",height:"0.2em",backgroundImage:r}})})},4915:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return j},default:function(){return x}});var n=t(5893),i=(t(7294),t(6411)),s=t(5723),a=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))},c=function(){return(0,s.ZP)("https://issue-card.vercel.app/api/status/ehne",a)},o=t(194),u=function(e){var r=e.content,t=e.url,s=e.title;return(0,n.jsxs)(i.xu,{marginBottom:"1em",as:"p",children:[(0,n.jsxs)("b",{children:[s,": "]})," ",r," ",(0,n.jsx)("a",{href:t,children:t})]})},l=t(6156),f=t(7122),d=t(3326),h=t(2673);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){(0,l.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p=function(e){var r=e.short,t=e.full,s=(0,f.K)({placement:"bottom-start"});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.v,b(b({},s),{},{as:"span",className:"abbrev",children:[r," ",(0,n.jsx)(i.xu,{as:"span",fontSize:"0.8em",children:"(?)"})]})),(0,n.jsx)(h.u,b(b({},s),{},{className:"tooltip",children:t}))]})},m=function(){var e=c(),r=e.data;return e.error||!r?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)("li",{children:["I am currently ",r.message,"."]})},j=!0,x=function(e){var r=e.posts,t=e.year,s=r.map((function(e){return(0,n.jsx)(u,{title:e.title,content:e.description,url:e.href},e.title)}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.xu,{as:"header",children:["Hi! I'm",(0,n.jsx)("br",{}),(0,n.jsx)("h1",{style:{fontSize:"2em",fontStyle:"italic",fontWeight:"700",display:"inline"},children:" Darcy"}),".",(0,n.jsx)("br",{}),"An award-winning web designer and developer from Melbourne, Australia."]}),(0,n.jsxs)(i.xu,{paddingY:"1em",as:"ul",children:[(0,n.jsxs)("li",{children:["GitHub: ",(0,n.jsx)("a",{href:"https://github.com/ehne",children:"https://github.com/ehne"})]}),(0,n.jsxs)("li",{children:["Email: darcy ","(at)"," darcylf.me \u2014 ",(0,n.jsx)(p,{short:"Don't send me .zip files.",full:"Emails that contain a .bat, .btm, .cmd, .com, .cpl, .dll, .docm, .exe, .gz, .js, .lnk, .msi, .pif, .prf, .rar, .reg, .scr, .tar, .tar.gz, .tgz, .url, .vbs, .xlsm or .zip attachment are automatically blocked by the spam filter. If you do need to send such files, please consider using a file transfer service such as WeTransfer"})]}),(0,n.jsx)(m,{})]}),(0,n.jsx)(o.Z,{}),(0,n.jsxs)(i.xu,{paddingY:"1em",as:"section",children:[(0,n.jsxs)(i.xu,{as:"p",mb:"1em",children:["Here are some of the things that I've made in the past. More work-in-progress projects can be found on my ",(0,n.jsx)("a",{href:"https://github.com/ehne?tab=repositories",children:"GitHub"}),"."]}),s]}),(0,n.jsxs)(i.xu,{paddingY:"1em",fontSize:"0.9em",opacity:"0.8",fontStyle:"italic",as:"footer",children:["\xa9 darcy ",t," \u2014 ",(0,n.jsx)("a",{href:"#",children:"Go to top."})]})]})}},3685:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4915)}])}},function(e){e.O(0,[774,289,888,179],(function(){return r=3685,e(e.s=r);var r}));var r=e.O();_N_E=r}]);