(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{itbR:function(e,t,n){"use strict";n.r(t);var a=n("HIqE"),i=n("q1tI"),l=n.n(i),r=n("Bl7J"),o=n("vrFN"),c=n("EDJg"),m=n("9eSz"),d=n.n(m),p=function(e){var t=e.marginLeft,n=e.amount;return l.a.createElement("div",{id:"inputField",style:{height:"25px",width:"25px",display:"inline-block",paddingLeft:"0.5px",paddingTop:"0.5px",position:"absolute",textAlign:"center",marginLeft:t}},n)},u=function(e){var t=e.children,n=(e.color,e.marginLeft),a=e.onClick;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{style:{height:"25px",width:"25px",backgroundColor:"#DDD",display:"inline-block",borderRadius:"50%",paddingLeft:"0.5px",paddingTop:"0.5px",position:"absolute",marginLeft:n,boxShadow:"0px 0px 0px transparent",border:"0px solid transparent",textShadow:"0px 0px 0px transparent"},onClick:a,onKeyDown:a},t))},s=function(e){var t=e.title,n=e.price,a=e.addItem,r=e.removeItem,o=e.picture,m=Object(i.useState)(0),s=m[0],g=m[1],f=l.a.createElement(u,{onClick:function(){g(s-1),r()}},l.a.createElement(c.Icon,null,"remove")),E=l.a.createElement(p,{amount:s}),x=l.a.createElement(u,{onClick:function(){g(s+1),a()}},l.a.createElement(c.Icon,null,"add"));return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.Card,{title:t,actions:[s>0?f:l.a.createElement(l.a.Fragment,null),s>0?E:l.a.createElement(l.a.Fragment,null),x],header:l.a.createElement(d.a,{fluid:o},"test")},"$ ",n))},g=function(e){var t=e.numTotalItems,n=e.onClick;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"fixed",display:"inline-block",marginTop:"12vh",marginLeft:"5vw"},onClick:n,onKeyDown:function(){}},l.a.createElement(c.Icon,{medium:!0},"local_dining"),l.a.createElement("div",{style:{height:"25px",width:"25px",backgroundColor:"#DDD",display:"inline-block",borderRadius:"50%",marginLeft:"-8px",marginTop:"-15px",paddingTop:"3px",position:"absolute",textAlign:"center"}},t)))};t.default=function(){var e=a.data,t=Object(i.useState)(0),n=t[0],m=t[1],d=function(){m(n+1)},p=function(){m(n-1)};return l.a.createElement(r.a,null,l.a.createElement(o.a,{title:"Online Ordering"}),l.a.createElement("div",{style:{marginTop:"4%",marginLeft:"10%",width:"80%"}},l.a.createElement(c.Row,null,l.a.createElement(c.Col,{s:4},l.a.createElement(s,{key:"1",title:"Ramen #1",price:9.95,addItem:d,removeItem:p,picture:e.front_menu_image.childImageSharp.fluid})),l.a.createElement(c.Col,{s:4},l.a.createElement(s,{key:"2",title:"Ramen #2",price:9.95,addItem:d,removeItem:p,picture:e.front_menu_image.childImageSharp.fluid})),l.a.createElement(c.Col,{s:4},l.a.createElement(s,{key:"3",title:"Ramen #3",price:9.95,addItem:d,removeItem:p,picture:e.front_menu_image.childImageSharp.fluid})))),l.a.createElement(g,{numTotalItems:n,addItem:d,removeItem:p,onClick:function(){console.log("test")}}))}}}]);
//# sourceMappingURL=component---src-pages-menu-js-1e7b83bc1cd802ea9bc8.js.map