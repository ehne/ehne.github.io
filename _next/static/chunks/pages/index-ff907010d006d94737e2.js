(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7530:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),s=r(6411),i=r(5595),c=r(5152),a=r(5893),o=function(e){var t=e.children;return(0,a.jsx)(a.Fragment,{children:t})},l=((0,c.default)((function(){return Promise.resolve(o)}),{ssr:!1}),function(){var e=(0,n.useState)("linear-gradient(90deg, #ffc53f 0%,#ffc53f 100%)"),t=e[0],r=e[1];return(0,n.useEffect)((function(){r((0,i.$)("90deg"))}),[]),(0,a.jsx)(s.xu,{sx:{width:"100%",height:"0.2em",backgroundImage:t}})})},5595:function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"gradient",r="#ffc53f",n="linear-gradient(".concat(e,", #ffc53f 0%,#ffc53f 100%)"),s="linear-gradient(".concat(e,", rgb(243, 115, 97) 0%, \n        rgb(243, 115, 97) 16.6%, \n        rgb(248, 155, 60) 16.6%, \n        rgb(248, 155, 60) 33.2%,\n        #ffc53f 33.2%, \n        #ffc53f 49.36%, \n        rgb(163, 187, 74) 49.36%, \n        rgb(163, 187, 74) 65.96%, \n        rgb(91, 199, 190) 65.96%, \n        rgb(91, 199, 190) 82.56%, \n        rgb(106, 80, 149) 82.56%, \n        rgb(106, 80, 149) 100%)"),i=(new Date).getDate(),c=(new Date).getMonth()+1;switch([i,c].toString()){case"17,5":n=s;break;case"27,8":n="linear-gradient(".concat(e,", rgb(106, 80, 149) 0%,rgb(106, 80, 149) 100%)"),r="rgb(106, 80, 149)";break;case"20,9":n="linear-gradient(".concat(e,", rgb(163, 187, 74) 0%, rgb(163, 187, 74) 100%)"),r="rgb(163, 187, 74)"}switch(t){case"gradient":return n;case"color":return r}}r.d(t,{$:function(){return n}})},9853:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return v},default:function(){return y}});r(7294);var n=r(6411),s=r(1664),i=r(8575),c=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))},a=function(){return(0,i.ZP)("https://issue-card.vercel.app/api/status/ehne",c)},o=r(7530),l=r(5893),u=function(e){var t=e.content,r=e.url,s=e.title;return(0,l.jsxs)(n.xu,{marginBottom:"1em",as:"p",children:[(0,l.jsxs)("b",{children:[s,": "]})," ",t," ",(0,l.jsx)("a",{href:r,children:r})]})},f=r(4942),d=r(7122),h=r(3326),g=r(2673);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){var t=e.short,r=e.full,s=(0,d.K)({placement:"bottom-start"});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(h.v,p(p({},s),{},{as:"span",className:"abbrev",children:[t," ",(0,l.jsx)(n.xu,{as:"span",fontSize:"0.8em",children:"(?)"})]})),(0,l.jsx)(g.u,p(p({},s),{},{className:"tooltip",children:r}))]})},j=function(e){var t=e.leadIn,r=e.title,i=e.slug;return(0,l.jsxs)(n.xu,{marginBottom:"1em",as:"p",children:[(0,l.jsxs)("b",{children:[r,": "]})," ",t," ",(0,l.jsx)(s.default,{scroll:!1,href:"/work/".concat(i),children:(0,l.jsx)("a",{children:"Read More \u2192"})})]})},x=function(){var e=a(),t=e.data;return e.error||!t?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)("li",{children:["I am currently ",t.message,"."]})},v=!0,y=function(e){var t=e.posts,r=e.year,s=e.works,i=t.map((function(e){return(0,l.jsx)(u,{title:e.title,content:e.description,url:e.href},e.title)})),c=s.map((function(e){return(0,l.jsx)(j,{title:e.title,leadIn:e.leadIn,slug:e.slug})}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.xu,{as:"header",children:["Hi! I'm",(0,l.jsx)("br",{}),(0,l.jsx)("h1",{style:{fontSize:"2em",fontStyle:"italic",fontWeight:"700",display:"inline"},children:" Darcy"}),".",(0,l.jsx)("br",{}),"An award-winning web designer and developer from Melbourne, Australia."]}),(0,l.jsxs)(n.xu,{paddingY:"1em",as:"ul",children:[(0,l.jsxs)("li",{children:["GitHub: ",(0,l.jsx)("a",{href:"https://github.com/ehne",children:"https://github.com/ehne"})]}),(0,l.jsxs)("li",{children:["Email: darcy ","(at)"," darcylf.me \u2014 ",(0,l.jsx)(m,{short:"Don't send me .zip files.",full:"Emails that contain a .bat, .btm, .cmd, .com, .cpl, .dll, .docm, .exe, .gz, .js, .lnk, .msi, .pif, .prf, .rar, .reg, .scr, .tar, .tar.gz, .tgz, .url, .vbs, .xlsm or .zip attachment are automatically blocked by the spam filter. If you do need to send such files, please consider using a file transfer service such as WeTransfer"})]}),(0,l.jsx)(x,{})]}),(0,l.jsx)(o.Z,{}),(0,l.jsxs)(n.xu,{paddingY:"1em",as:"section",children:[(0,l.jsxs)(n.xu,{as:"p",mb:"1em",children:["Here are some of the things that I've made in the past. More completed projects can be found on the ",(0,l.jsx)("a",{href:"https://collective-fullstack.github.io",children:"Collective Fullstack website"}),". And work-in-progress projects can be found on my ",(0,l.jsx)("a",{href:"https://github.com/ehne?tab=repositories",children:"GitHub"}),"."]}),c,i]}),(0,l.jsxs)(n.xu,{paddingY:"1em",fontSize:"0.9em",opacity:"0.8",fontStyle:"italic",as:"footer",children:["\xa9 darcy ",r," \u2014 ",(0,l.jsx)("a",{href:"#",children:"Go to top."})]})]})}},3685:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9853)}])}},function(e){e.O(0,[774,142,336,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);