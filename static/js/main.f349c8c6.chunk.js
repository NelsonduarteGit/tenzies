(this.webpackJsonptenzies=this.webpackJsonptenzies||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(5),a=n.n(r),s=n(4),l=n(2),u=n(0);function o(e){var t={backgroundColor:e.isHeld?"#D7136D":"white",color:e.isHeld?"#fff":"black"};return Object(u.jsx)("div",{className:"die-face",style:t,onClick:e.holdDice,children:Object(u.jsx)("h2",{className:"die-num",children:e.value})})}var d=n(7),j=n(6),b=n.n(j);function f(){var e=i.a.useState(p()),t=Object(l.a)(e,2),n=t[0],c=t[1],r=i.a.useState(!1),a=Object(l.a)(r,2),j=a[0],f=a[1],h=i.a.useState(0),v=Object(l.a)(h,2),O=v[0],m=v[1];function x(){return{value:Math.ceil(6*Math.random()),isHeld:!1,id:Object(d.a)()}}function p(){for(var e=[],t=0;t<10;t++)e.push(x());return e}i.a.useEffect((function(){var e=n.every((function(e){return e.isHeld})),t=n[0].value,c=n.every((function(e){return e.value===t}));e&&c&&f(!0)}),[n]);var H=n.map((function(e){return Object(u.jsx)(o,{value:e.value,isHeld:e.isHeld,holdDice:function(){return t=e.id,void c((function(e){return e.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{isHeld:!e.isHeld}):e}))}));var t}},e.id)}));return Object(u.jsxs)("main",{children:[j&&Object(u.jsx)(b.a,{}),Object(u.jsx)("h1",{className:"title",children:"Tenzies"}),Object(u.jsxs)("p",{className:"instructions",children:["Roll until all dice are the same. ",Object(u.jsx)("br",{}),"Click each die to freeze it at its current value between rolls."]}),Object(u.jsxs)("p",{children:["Score: ",O]}),Object(u.jsx)("div",{className:"dice-container",children:H}),Object(u.jsx)("button",{className:"roll-dice",onClick:function(){j?(f(!1),c(p())):c((function(e){return e.map((function(e){return e.isHeld?e:x()}))})),m(j?0:function(e){return e+1})},children:j?"New Game":"Roll"})]})}a.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f349c8c6.chunk.js.map