(this.webpackJsonpredux_cart=this.webpackJsonpredux_cart||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(16),i=c.n(r),s=c(11),o=c(3),l=c(4),d=c(10),u=(c(23),c(1)),m=Object(l.b)((function(e){return{cart:e.shop.cart}}))((function(e){var t=e.cart,c=Object(a.useState)(0),n=Object(d.a)(c,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){var e=0;t.forEach((function(t){e+=t.qty})),i(e)}),[t,r]),Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("nav",{className:"navbar   navbar-expand-lg navbar-light bg-light",children:[Object(u.jsx)(s.b,{className:"navbar-brand",to:"/",children:"S-Mart"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(u.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(u.jsx)("li",{className:"nav-item active",children:Object(u.jsxs)(s.b,{className:"nav-link",to:"/",children:["Redux-cart ",Object(u.jsx)("span",{className:"sr-only",children:"(current)"})]})})}),Object(u.jsxs)("form",{className:"form-inline  my-2 my-lg-0 d-flex",children:[Object(u.jsx)("div",{className:"cart_link",children:Object(u.jsxs)(s.b,{className:"mx-2 cart_btn btn",to:"/cart",style:{color:"#6a35ff"},children:["cart (",r,")"]})}),Object(u.jsx)("button",{className:"btn login_link btn-outline-success my-2 my-sm-0",type:"submit",children:"Login"})]})]})]})})})),b=c(19),j="ADD_TO_CART",p="ADJUST_ITEM_QTY",h="REMOVE_FROM_CART",g="LOAD_CURRENT_ITEM",f=function(e){return{type:j,payload:{id:e}}},O=Object(l.b)(null,(function(e){return{addToCart:function(t){return e(f(t))},loadCurrentItem:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))((function(e){var t=e.product,c=e.addToCart,a=e.loadCurrentItem;return Object(u.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center",children:Object(u.jsxs)("div",{class:"card justify-content-center align-items-center ",style:{width:"285px"},children:[Object(u.jsx)("img",{class:"img-fluid",src:t.image,alt:"Card image cap",style:{width:"200px",height:"200px",objectFit:"contain"}}),Object(u.jsxs)("div",{class:"card-body",children:[Object(u.jsx)("h5",{class:"card-title text-center",children:t.title}),Object(u.jsx)("p",{class:"card-text",children:t.description.length>70?t.description.slice(0,70)+"...":t.description}),Object(u.jsxs)("p",{className:"text-center price m-0",children:["$",t.price]}),Object(u.jsx)("p",{className:"text-center ",children:t.rating}),Object(u.jsxs)("div",{className:"row d-flex col-lg-12 m-0 p-0",children:[Object(u.jsx)("button",{onClick:function(){return c(t.id)},class:"btn   addTocart col-lg-6",children:"Add To cart"}),Object(u.jsx)(s.b,{to:"/product/".concat(t.id),class:"btn btn-secondary ViewItem col-lg-6",onClick:function(){return a(t)},children:"View Item"})]})]})]})})})),x=function(e){var t=e.filterMenu,c=e.catItems;return Object(u.jsx)("div",{className:"row d-flex container-fluid mx-auto col-lg-12 justify-content-center align-items-center mb-3",style:{backgroundColor:"grey"},children:Object(u.jsx)("div",{className:"filter row d-flex col-lg-6 ",children:c.map((function(e,c){return Object(u.jsx)("button",{className:"col-lg-3 filter_btn btn btn-outline-secondary",onClick:function(){return t(e)},children:e},c)}))})})},y=Object(l.b)((function(e){return{products:e.shop.products}}))((function(e){var t=e.products,c=[].concat(Object(b.a)(new Set(t.map((function(e){return e.category})))),["all"]),n=Object(a.useState)(t),r=Object(d.a)(n,2),i=r[0],s=r[1],o=Object(a.useState)(c),l=Object(d.a)(o,2),m=l[0];l[1];return Object(u.jsxs)("div",{className:"container-fluid mt-3",children:[Object(u.jsx)(x,{filterMenu:function(e){if("all"===e)return s(t);var c=t.filter((function(t){return t.category===e}));s(c)},catItems:m}),Object(u.jsx)("div",{className:"row Product_table d-flex col-lg-12 m-0  justify-content-center align-items-center",children:i.map((function(e){return Object(u.jsx)(O,{product:e},e.id)}))})]})})),v=Object(l.b)(null,(function(e){return{adjustQty:function(t,c){return e({type:p,payload:{id:t,qty:c}})},removeFromCart:function(t){return e({type:h,payload:{id:t}})}}}))((function(e){var t=e.item,c=e.adjustQty,n=e.removeFromCart,r=Object(a.useState)(t.qty),i=Object(d.a)(r,2),s=i[0],o=i[1];return Object(u.jsxs)("div",{className:"row cart_item single_item d-flex col-lg-12 m-0",children:[Object(u.jsx)("div",{className:"img_div col-lg-5",children:Object(u.jsx)("img",{class:"card-img-top",src:t.image,alt:"Card image cap",style:{width:"100%",padding:"6px"}})}),Object(u.jsxs)("div",{className:"card-body col-lg-4 d-flex justify-content-center flex-column",children:[Object(u.jsx)("p",{children:t.title}),Object(u.jsx)("p",{children:t.description}),Object(u.jsxs)("p",{children:["$",t.price]}),Object(u.jsx)("p",{children:t.rating})]}),Object(u.jsxs)("div",{className:"card_action col-lg-3 d-flex flex-column gap-5 justify-content-center align-items-center",children:[Object(u.jsxs)("div",{className:"item_qty d-flex justify-content-center align-content-center",children:[Object(u.jsx)("label",{htmlFor:"qty",style:{alignSelf:"center",margin:"0"},children:"Adjust Qty"}),Object(u.jsx)("input",{min:"1",type:"number",id:"qty",name:"qty",value:s,onChange:function(e){o(e.target.value),c(t.id,e.target.value)}})]}),Object(u.jsx)("button",{className:"btn btn-outline-warning",onClick:function(){return n(t.id)},children:"remove from cart"})]})]})})),N=Object(l.b)((function(e){return{cart:e.shop.cart}}))((function(e){var t=e.cart,c=Object(a.useState)(0),n=Object(d.a)(c,2),r=n[0],i=n[1],s=Object(a.useState)(0),o=Object(d.a)(s,2),l=o[0],m=o[1];return Object(a.useEffect)((function(){var e=0,c=0;t.forEach((function(t){e+=t.qty,c+=t.qty*t.price})),m(e),i(c)}),[t,r,l,i,m]),Object(u.jsxs)("div",{className:"container-fluid row d-flex mx-auto mt-5 cart",children:[Object(u.jsx)("div",{className:"cart_items col-lg-8 d-flex flex-column gap-3",children:t.map((function(e){return Object(u.jsx)(v,{item:e},e.id)}))}),Object(u.jsx)("div",{className:"proceed_checkout col-lg-4 checkout",style:{height:"250px"},children:Object(u.jsxs)("div",{className:"row d-flex flex-column gap-5 container m-0",children:[Object(u.jsx)("h2",{className:"mt-3",children:"Cart Summary "}),Object(u.jsxs)("div",{className:"d-flex justify-content-between  align-items-center",children:[" ",Object(u.jsxs)("p",{children:["Totatl Items : ",l," "]})," ",Object(u.jsxs)("h2",{children:["$",r]})," "]}),Object(u.jsx)("button",{className:"btn btn-outline-success",children:"proceed to checkout"})]})})]})})),w=Object(l.b)((function(e){return{current:e.shop.currentItem}}),(function(e){return{addToCart:function(t){return e(f(t))}}}))((function(e){var t=e.current,c=e.addToCart;return Object(u.jsx)("div",{className:"container mt-5",children:Object(u.jsxs)("div",{className:"row single_item cart_item d-flex col-lg-12 m-0",children:[Object(u.jsx)("div",{className:"img_div col-lg-5",children:Object(u.jsx)("img",{class:"card-img-top",src:t.image,alt:"Card image cap",style:{width:"100%"}})}),Object(u.jsxs)("div",{className:"card-body col-lg-4 d-flex justify-content-center flex-column",children:[Object(u.jsx)("p",{className:"h4",children:t.title}),Object(u.jsx)("p",{className:"text-muted",children:t.description}),Object(u.jsxs)("p",{children:["$",t.price]}),Object(u.jsx)("p",{children:t.rating})]}),Object(u.jsx)("div",{className:"card_action col-lg-3 d-flex flex-column gap-5 justify-content-center align-items-center",children:Object(u.jsx)("button",{onClick:function(){return c(t.id)},class:"btn   addTocart col-lg-6",children:"Add To cart"})})]})})}));var T=Object(l.b)((function(e){return{current:e.shop.currentItem}}))((function(e){var t=e.current;return Object(u.jsx)(s.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{}),Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",component:y}),Object(u.jsx)(o.b,{exact:!0,path:"/cart",component:N}),t?Object(u.jsx)(o.b,{exact:!0,path:"/product/:id",component:w}):Object(u.jsx)(o.a,{to:"/"})]})]})})})),k=(c(36),c(13)),S=c(25),C=c(5),_={products:[{id:1,title:"Red T-shirt",description:"Red T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Tradit from undergarments used in the 19th century",price:15,rating:"\u2b50\u2b50\u2b50\u2b50",category:"men",image:c.p+"static/media/buy-1.ea07c17d.jpg"},{id:2,title:"black T-shirt",description:"black T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Tradit from undergarments used in the 19th century ",price:20,rating:"\u2b50\u2b50\u2b50\u2b50\u2b50",category:"men",image:c.p+"static/media/p1.83944a19.png"},{id:3,title:"spark shoes",description:"SPARX is a product of RELAXO FOOTWEAR COMPANY LTD. It is the second most populated brand in India the footwear of SPARX is of very premium",price:150,rating:"\u2b50\u2b50\u2b50\u2b50",category:"men",image:c.p+"static/media/product-2.7e62a954.jpg"},{id:4,title:"PUMA white shoes",description:"PUMA's self-lacing Fit Intelligence Training Shoe responds to athletes and their environment by adapting to the wearer's needs. The shoe automatically adapts to the foot and knows how loose or tight it can lace",price:150,rating:"\u2b50\u2b50\u2b50",category:"men",image:c.p+"static/media/product-5.afcb7f8f.jpg"},{id:5,title:"Orange shirt",description:"Ace weekend dressing in this orange stripe Polo Neck T-shirt from Allen Solly by Allen Solly. Product Features. Brand : Allen Solly Subbrand : Allen Solly Fit.",price:150,rating:"\u2b50\u2b50",category:"child",image:c.p+"static/media/c1.8836a21e.png"},{id:6,title:"Smart watch",description:"Most of them offer fitness and wellness services such as running health applications, tracking steps, tracking heart rate, sleep monitoring and any other sensor-related features. Some provide different mobile functions such scheduling events, app availability, sending messages and answering calls.",price:150,rating:"\u2b50\u2b50\u2b50\u2b50\u2b50",category:"child",image:c.p+"static/media/c2.a2195f21.png"},{id:7,title:"Drag racer",description:"The toy car comprises a circuit testing board, a power source device and a toy-car body with a driving mechanism. The circuit testing board and the power source device are detachably mounted onto the toy car body.",price:150,rating:"\u2b50\u2b50\u2b50",category:"child",image:c.p+"static/media/c3.64113f70.png"},{id:8,title:"Toy car",description:"The toy car comprises a circuit testing board, a power source device and a toy-car body with a driving mechanism. The circuit testing board and the power source device are detachably mounted onto the toy car body.",price:150,rating:"\u2b50\u2b50\u2b50\u2b50",category:"child",image:c.p+"static/media/c4.4eabafb3.png"},{id:9,title:"gucci purse",description:"They are small or medium-sized, made of leather, canvas, and suede, and feature zippered compartments and metal locks or magnetic snap closures. Some have adjustable straps, usually made of leather.",price:150,rating:"\u2b50\u2b50\u2b50\u2b50",category:"women",image:c.p+"static/media/w1.bdb545c2.png"},{id:10,title:"Gucci handbag",description:"Gucci handbags come in a range of sizes and styles. They are small or medium-sized, made of leather, canvas, and suede, and feature zippered compartments",price:150,rating:"\u2b50\u2b50\u2b50\u2b50",category:"women",image:c.p+"static/media/w2.0bcd88d0.png"},{id:11,title:"Women Perfume",description:"Women Perfume - Buy Women Perfume at India's Best Online Shopping Store. ... from the comfort of your home and get your wishlist delivered to your doorstep!",price:150,rating:"\u2b50\u2b50\u2b50",category:"women",image:c.p+"static/media/w3.2661a513.png"},{id:12,title:"makeup kit",description:"A makeup kit box is an answer to your prayers if you struggle to pick out various make-up products like a primer, foundation, mascara, lip colour, sealer",price:150,rating:"\u2b50\u2b50\u2b50",category:"women",image:c.p+"static/media/w4.2911f10d.png"}],cart:[],currentItem:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var c=e.products.find((function(e){return e.id===t.payload.id})),a=e.cart.find((function(e){return e.id===t.payload.id}));return Object(C.a)(Object(C.a)({},e),{},{cart:a?e.cart.map((function(e){return e.id===t.payload.id?Object(C.a)(Object(C.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(b.a)(e.cart),[Object(C.a)(Object(C.a)({},c),{},{qty:1})])});case h:return Object(C.a)(Object(C.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case p:return Object(C.a)(Object(C.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(C.a)(Object(C.a)({},e),{},{qty:+t.payload.qty}):e}))});case g:return Object(C.a)(Object(C.a)({},e),{},{currentItem:t.payload});default:return e}},I=Object(k.combineReducers)({shop:A}),q=Object(k.createStore)(I,Object(S.composeWithDevTools)());i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(l.a,{store:q,children:Object(u.jsx)(T,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b5f5719b.chunk.js.map