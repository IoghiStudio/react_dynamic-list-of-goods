(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,o){"use strict";o.r(n);var e=o(3),c=o.n(e),r=o(4),u=o(1),i=(o(9),o(0)),a=function(t){var n=t.goods;return Object(i.jsx)("ul",{children:n.map((function(t){var n=t.id,o=t.color,e=t.name;return Object(i.jsx)("li",{"data-cy":"good",style:{color:"".concat(o)},children:e},n)}))})};function s(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(){return s().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)}))})).then((function(t){return t.slice(0,5)}))},l=function(){return s().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},f=function(){var t=Object(u.useState)([]),n=Object(r.a)(t,2),o=n[0],e=n[1],c=function(t){return t().then((function(t){return e(t)}))};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Dynamic list of Goods"}),Object(i.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return c(s)},children:"Load all goods"}),Object(i.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return c(d)},children:"Load 5 first goods"}),Object(i.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return c(l)},children:"Load red goods"}),Object(i.jsx)(a,{goods:o})]})};c.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))},9:function(t,n,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.ced718be.chunk.js.map