(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{112:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),r=t.n(n),l=t(105),s=t(107),c=t(56),i=t.n(c);function m(e){let{sidebar:a}=e;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((e=>r.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},r.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))))))}},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(110),s=t(107),c=t(112);a.default=function(e){const{tags:a,sidebar:t}=e,n={};Object.keys(a).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e);n[a]=n[a]||[],n[a].push(e)}));const i=Object.entries(n).sort(((e,a)=>{let[t]=e,[n]=a;return t===n?0:t>n?1:-1})).map((e=>{let[t,n]=e;return r.a.createElement("div",{key:t},r.a.createElement("h3",null,t),n.map((e=>r.a.createElement(s.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")"))),r.a.createElement("hr",null))})).filter((e=>null!=e));return r.a.createElement(l.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(c.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},i)))))}}}]);