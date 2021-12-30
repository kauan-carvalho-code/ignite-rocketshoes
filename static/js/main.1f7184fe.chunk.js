(this.webpackJsonpcriando_um_hook_de_carrinho_de_compras=this.webpackJsonpcriando_um_hook_de_carrinho_de_compras||[]).push([[0],{77:function(n,t,e){"use strict";e.r(t);var r,c=e(0),o=e.n(c),a=e(23),i=e.n(a),d=e(14),s=e(13),u=e(3),b=e(20),l=e(24),p=e(10),j=e(26),x=e(12),h=e.n(x),f=e(11),O=e(8),g=e(9),m=e(17),v=g.b.ul(r||(r=Object(O.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  list-style: none;\n\n  li {\n    display: flex;\n    flex-direction: column;\n    background: #fff;\n    border-radius: 4px;\n    padding: 20px;\n\n    img {\n      align-self: center;\n      max-width: 250px;\n    }\n\n    > strong {\n      font-size: 16px;\n      line-height: 20px;\n      color: #333;\n      margin-top: 5px;\n    }\n\n    > span {\n      font-size: 21px;\n      font-weight: bold;\n      margin: 5px 0 20px;\n    }\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      margin-top: auto;\n\n      display: flex;\n      align-items: center;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n\n      div {\n        display: flex;\n        align-items: center;\n        padding: 12px;\n        background: rgba(0, 0, 0, 0.1);\n\n        svg {\n          margin-right: 5px;\n        }\n      }\n\n      span {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n      }\n    }\n  }\n"])),Object(m.a)(.06,"#7159c1")),y=e(45),k=e.n(y).a.create({baseURL:"http://localhost:3333"}),w=function(n){return new Intl.NumberFormat("pt-br",{style:"currency",currency:"BRL"}).format(n)},S=e(31),F=e(1),I=Object(c.createContext)({});function z(n){var t=n.children,e=Object(c.useState)((function(){var n=localStorage.getItem("@RocketShoes:cart");return n?JSON.parse(n):[]})),r=Object(j.a)(e,2),o=r[0],a=r[1],i=function(){var n=Object(b.a)(h.a.mark((function n(t){var e,r,c,i,d,u,b;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=Object(S.a)(o),n.next=4,k.get("products/".concat(t)).then((function(n){return n.data}));case 4:return r=n.sent,c=e.find((function(n){return n.id===t})),i=c?c.amount:0,n.next=9,k.get("stock/".concat(t)).then((function(n){return n.data}));case 9:if(d=n.sent,u=d.amount,!(i+1>u)){n.next=14;break}return s.b.error("Quantidade solicitada fora de estoque"),n.abrupt("return");case 14:c?c.amount+=1:(b=Object(p.a)(Object(p.a)({},r),{},{amount:1}),e.push(b)),a(e),localStorage.setItem("@RocketShoes:cart",JSON.stringify(e)),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(0),s.b.error("Erro na adi\xe7\xe3o do produto");case 22:case"end":return n.stop()}}),n,null,[[0,19]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=Object(b.a)(h.a.mark((function n(t){var e,r,c,i,d;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.productId,r=t.amount,n.prev=1,!(r<=0)){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,k.get("stock/".concat(e)).then((function(n){return n.data}));case 6:if(c=n.sent,i=c.amount,!(r>i)){n.next=11;break}return s.b.error("Quantidade solicitada fora de estoque"),n.abrupt("return");case 11:d=o.map((function(n){return n.id===e?Object(p.a)(Object(p.a)({},n),{},{amount:r}):n})),a(d),localStorage.setItem("@RocketShoes:cart",JSON.stringify(d)),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(1),s.b.error("Erro na altera\xe7\xe3o de quantidade do produto");case 19:case"end":return n.stop()}}),n,null,[[1,16]])})));return function(t){return n.apply(this,arguments)}}();return Object(F.jsx)(I.Provider,{value:{cart:o,addProduct:i,removeProduct:function(n){try{var t=Object(S.a)(o),e=t.findIndex((function(t){return t.id===n}));if(!(e>=0))throw Error();t.splice(e,1),a(t),localStorage.setItem("@RocketShoes:cart",JSON.stringify(t))}catch(r){s.b.error("Erro na remo\xe7\xe3o do produto")}},updateProductAmount:d},children:t})}function C(){return Object(c.useContext)(I)}var R,_,P,T,A,N,E=function(){var n=Object(c.useState)([]),t=Object(j.a)(n,2),e=t[0],r=t[1],o=C(),a=o.addProduct,i=o.cart.reduce((function(n,t){return n=Object(p.a)(Object(p.a)({},n),{},Object(l.a)({},t.id,t.amount))}),{});return Object(c.useEffect)((function(){function n(){return(n=Object(b.a)(h.a.mark((function n(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:k.get("products").then((function(n){return r(n.data)}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(F.jsx)(v,{children:e.map((function(n){return Object(F.jsxs)("li",{children:[Object(F.jsx)("img",{src:n.image,alt:n.title}),Object(F.jsx)("strong",{children:n.title}),Object(F.jsx)("span",{children:w(n.price)}),Object(F.jsxs)("button",{type:"button","data-testid":"add-product-button",onClick:function(){return t=n.id,void a(t);var t},children:[Object(F.jsxs)("div",{"data-testid":"cart-product-quantity",children:[Object(F.jsx)(f.b,{size:16,color:"#FFF"}),i[n.id]||0]}),Object(F.jsx)("span",{children:"ADICIONAR AO CARRINHO"})]})]},n.id)}))})},J=g.b.div(R||(R=Object(O.a)(["\n  padding: 30px;\n  background: #fff;\n  border-radius: 4px;\n\n  footer {\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      padding: 12px 20px;\n      font-weight: bold;\n      text-transform: uppercase;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n"])),Object(m.a)(.06,"#7159c1")),L=g.b.table(_||(_=Object(O.a)(["\n  width: 100%;\n\n  thead th {\n    color: #999;\n    text-align: left;\n    padding: 12px;\n  }\n\n  tbody td {\n    padding: 12px;\n    border-bottom: 1px solid #eee;\n  }\n\n  img {\n    height: 100px;\n  }\n\n  strong {\n    color: #333;\n    display: block;\n  }\n\n  span {\n    display: block;\n    margin-top: 5px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n\n    input {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      color: #666;\n      padding: 6px;\n      width: 50px;\n    }\n  }\n\n  button {\n    background: none;\n    border: 0;\n    padding: 6px;\n\n    svg {\n      color: #7159c1;\n      transition: color 0.2s;\n    }\n\n    &:hover {\n      svg {\n        color: ",";\n      }\n    }\n\n    &:disabled {\n      svg {\n        color: ",";\n        cursor: not-allowed;\n      }\n    }\n  }\n"])),Object(m.a)(.06,"#7159c1"),Object(m.b)(.25,"#7159c1")),q=g.b.div(P||(P=Object(O.a)(["\n  display: flex;\n  align-items: baseline;\n\n  span {\n    color: #999;\n    font-weight: bold;\n  }\n\n  strong {\n    font-size: 28px;\n    margin-left: 5px;\n  }\n"]))),B=function(){var n=C(),t=n.cart,e=n.removeProduct,r=n.updateProductAmount,c=t.map((function(n){return Object(p.a)(Object(p.a)({},n),{},{priceFormatted:w(n.price),subTotal:w(n.price*n.amount)})})),o=t.reduce((function(n,t){return n+t.price*t.amount}),0);return Object(F.jsxs)(J,{children:[Object(F.jsxs)(L,{children:[Object(F.jsx)("thead",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{"aria-label":"product image"}),Object(F.jsx)("th",{children:"PRODUTO"}),Object(F.jsx)("th",{children:"QTD"}),Object(F.jsx)("th",{children:"SUBTOTAL"}),Object(F.jsx)("th",{"aria-label":"delete icon"})]})}),Object(F.jsx)("tbody",{children:c.map((function(n){return Object(F.jsxs)("tr",{"data-testid":"product",children:[Object(F.jsx)("td",{children:Object(F.jsx)("img",{src:n.image,alt:n.title})}),Object(F.jsxs)("td",{children:[Object(F.jsx)("strong",{children:n.title}),Object(F.jsx)("span",{children:n.priceFormatted})]}),Object(F.jsx)("td",{children:Object(F.jsxs)("div",{children:[Object(F.jsx)("button",{type:"button","data-testid":"decrement-product",disabled:n.amount<=1,onClick:function(){return function(n){var t={productId:n.id,amount:n.amount-1};r(t)}(n)},children:Object(F.jsx)(f.d,{size:20})}),Object(F.jsx)("input",{type:"text","data-testid":"product-amount",readOnly:!0,value:n.amount}),Object(F.jsx)("button",{type:"button","data-testid":"increment-product",onClick:function(){return function(n){console.log(n);var t={productId:n.id,amount:n.amount+1};r(t)}(n)},children:Object(F.jsx)(f.a,{size:20})})]})}),Object(F.jsx)("td",{children:Object(F.jsx)("strong",{children:n.subTotal})}),Object(F.jsx)("td",{children:Object(F.jsx)("button",{type:"button","data-testid":"remove-product",onClick:function(){return t=n.id,void e(t);var t},children:Object(F.jsx)(f.c,{size:20})})})]},n.id)}))})]}),Object(F.jsxs)("footer",{children:[Object(F.jsx)("button",{type:"button",children:"Finalizar pedido"}),Object(F.jsxs)(q,{children:[Object(F.jsx)("span",{children:"TOTAL"}),Object(F.jsx)("strong",{children:w(o)})]})]})]})},D=function(){return Object(F.jsxs)(u.c,{children:[Object(F.jsx)(u.a,{path:"/",exact:!0,component:E}),Object(F.jsx)(u.a,{path:"/cart",component:B})]})},Q=(e(76),e.p+"static/media/background.d1721c83.svg"),U=Object(g.a)(T||(T=Object(O.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #191920 url(",") no-repeat center top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 1020px;\n    margin: 0 auto;\n    padding: 0 20px 50px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"])),Q),M=e.p+"static/media/logo.eb50c339.svg",H=g.b.header(A||(A=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 50px 0;\n\n  a {\n    transition: opacity 0.2s;\n\n    &:hover {\n      opacity: 0.7;\n    }\n  }\n"]))),G=Object(g.b)(d.b)(N||(N=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #fff;\n    }\n\n    span {\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]))),K=function(){var n=C().cart.length;return Object(F.jsxs)(H,{children:[Object(F.jsx)(d.b,{to:"/",children:Object(F.jsx)("img",{src:M,alt:"Rocketshoes"})}),Object(F.jsxs)(G,{to:"/cart",children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("strong",{children:"Meu carrinho"}),Object(F.jsx)("span",{"data-testid":"cart-size",children:"".concat(n,1===n?" item":" itens")})]}),Object(F.jsx)(f.e,{size:36,color:"#FFF"})]})]})},V=function(){return Object(F.jsx)(d.a,{children:Object(F.jsxs)(z,{children:[Object(F.jsx)(U,{}),Object(F.jsx)(K,{}),Object(F.jsx)(D,{}),Object(F.jsx)(s.a,{autoClose:3e3})]})})},W=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,78)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;e(n),r(n),c(n),o(n),a(n)}))};i.a.render(Object(F.jsx)(o.a.StrictMode,{children:Object(F.jsx)(V,{})}),document.getElementById("root")),W()}},[[77,1,2]]]);
//# sourceMappingURL=main.1f7184fe.chunk.js.map