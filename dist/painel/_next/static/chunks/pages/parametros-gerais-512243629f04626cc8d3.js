_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{DbXy:function(e,t,n){e.exports={invisible:"styles_invisible__2eb-b",visible:"styles_visible__2b1oV",totais:"styles_totais__1vmZn",produtoInput:"styles_produtoInput__27fS-",clienteInput:"styles_clienteInput__2WKkT",searchResult:"styles_searchResult__26Gln"}},EDS1:function(e,t,n){e.exports={wrapper:"styles_wrapper__3td6h",formParm:"styles_formParm__3ZCy6",formDiv:"styles_formDiv__2zR71",paramSession:"styles_paramSession__dRmgE",inputForm:"styles_inputForm__2iPK9",numeroOs:"styles_numeroOs__1td34",inputWide:"styles_inputWide__3appR",resultsDiv:"styles_resultsDiv__1t8Xo",visible:"styles_visible__1g-fD",invisible:"styles_invisible__2qCfu",fornecedores:"styles_fornecedores__PUnE9",searchResults:"styles_searchResults__2XL8m",loading:"styles_loading__X4dgq",hidden:"styles_hidden__257nJ"}},Ry4D:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("nKUr"),a=n("r9w1"),s=n("q1tI"),c=n.n(s),i=n("ddHN"),o=n("DbXy"),u=n.n(o),l=c.a.forwardRef((function(e,t){var n=e.disabled,c=e.admConv,o=void 0!==c&&c,l=e.handleIsSelected,d=Object(s.useState)(),b=d[0],f=d[1],j=Object(s.useState)(),p=j[0],O=j[1],v=Object(s.useState)(),m=v[0],h=v[1],_=Object(s.useState)(!1),g=_[0],x=_[1],y=Object(s.useRef)(null),S=Object(i.b)().getApi;Object(s.useImperativeHandle)(t,(function(){return{getMyState:function(){return m}}}),[m]),Object(s.useEffect)((function(){window.addEventListener("mousedown",N)}),[]);var N=function(e){var t;y&&"NOMECLIENTE"===e.target.name?x(!0):!y||null!==(t=y.current)&&void 0!==t&&t.contains(e.target)||x(!1)};return Object(r.jsxs)("div",{className:u.a.clienteInput,children:[Object(r.jsx)(a.a,{label:o?"Administradora de Cart\xe3o":"Cliente",name:"NOMECLIENTE",autoComplete:"off",variant:"outlined",disabled:n||!1,value:b,color:"primary",onChange:function(e){return function(e){if(x(!0),f(e.target.value),e.target.value.length>0){var t=o?"/adm-conv":"/clientes";S.then((function(n){n.post(t,{search:e.target.value}).then((function(e){O(o?e.data.administradoras:e.data.parsedClientes)}))}))}else x(!1),O([])}(e)}}),p&&Object(r.jsx)("div",{ref:y,className:"".concat(u.a.searchResult," ").concat(g?u.a.visible:u.a.invisible),children:p.map((function(e){return Object(r.jsx)("span",{onClick:function(){f(e.CODCLIENTE+" - "+e.NOME),h(e),x(!1),o&&l&&l()},children:e.CODCLIENTE+" - "+e.NOME},e.CODCLIENTE)}))})]})}))},Sbtq:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n("nKUr"),a=n("vJKn"),s=n.n(a),c=n("rg98"),i=n("q1tI"),o=n("tRs7"),u=(n("jDDT"),n("ddHN")),l=Object(i.createContext)({}),d=new o.a,b=function(e){var t,n=e.children,a=Object(i.useState)(),o=a[0],b=a[1],f=Object(i.useState)(),j=f[0],p=f[1],O=Object(u.b)().getApi;Object(i.useEffect)((function(){O.then((function(e){(t=e).get("/config/gerais").then((function(e){b(e.data.config)})),t.get("/config/filiais").then((function(e){p(e.data.filiaisParsed)}))}))}),[]);var v=function(){var e=Object(c.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.then(function(){var e=Object(c.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r,b(n),e.next=4,t.post("/config/gerais",n);case 4:"ok"===e.sent.data.status&&d.notify("Configura\xe7\xf5es alteradas","success");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(l.Provider,{value:{config:o,filiais:j,changeConfig:v},children:n})},f=function(){return Object(i.useContext)(l)}},"UN6+":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("nKUr"),a=n("33Fu"),s=n("YhpK"),c=n.n(s);function i(){return Object(r.jsxs)("div",{className:c.a.wrapper,children:[Object(r.jsx)(a.c,{size:50,color:"#b23237"}),Object(r.jsx)("h1",{children:"Acesso Bloqueado"})]})}},YhpK:function(e,t,n){e.exports={wrapper:"style_wrapper__22fyg"}},wqa0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/parametros-gerais",function(){return n("wvbT")}])},wvbT:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var r=n("nKUr"),a=n("cpVT"),s=n("vJKn"),c=n.n(s),i=n("rg98"),o=n("csfp"),u=n("cVXz"),l=n("jjAL"),d=n("r9w1"),b=n("q1tI"),f=n("Tgqd"),j=n("FGyW"),p=(n("jDDT"),n("Ry4D")),O=n("bFzY"),v=n("UN6+"),m=n("tRs7"),h=n("EDS1"),_=n.n(h),g=n("ddHN"),x=n("33Fu"),y=n("r9V7"),S=n.n(y),N=n("Sbtq");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w,P=new m.a;function D(){var e=Object(b.useState)(),t=e[0],n=e[1],a=Object(b.useState)({ALIQICMS:0}),s=(a[0],a[1],Object(b.useState)(!1)),m=s[0],h=(s[1],Object(b.useState)(!1)),y=h[0],C=h[1],D=Object(b.useState)(!1),L=D[0],T=D[1],k=Object(b.useState)(!1),I=(k[0],k[1],Object(b.useState)(13)),R=I[0],F=I[1],A=Object(b.useState)(!1),q=A[0],z=A[1],K=Object(b.useState)(0),M=K[0],G=K[1],U=Object(O.c)().user,X=Object(g.b)().getApi,B=Object(N.b)(),J=B.config,H=B.changeConfig,V=Object(b.useRef)(null),W="SOMENTE_CONSULTA"!==(null===U||void 0===U?void 0:U.permissions.parametrosGerais);Object(b.useEffect)((function(){X.then((function(e){(w=e).get("/parametros/nfse").then((function(e){n(e.data.paramsNFSe[0])}))}))}),[]),Object(b.useEffect)((function(){J&&F(J.generalConfig.caracteresCodBarraGrade)}),[J,R]);var Y=function(){var e=Object(i.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={loteNFSE:t.LOTENFSE,loteRPS:t.LOTERPS},e.next=3,w.post("/parametros/nfse",n);case 3:"ok"===e.sent.data.status?P.notify("Altera\xe7\xe3o enviada ao sistema","success"):P.notify("Algo deu errado","error"),C(!1),T(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(i.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M&&!(M<=0)&&null!==(t=V.current)&&void 0!==t&&t.getMyState()){e.next=3;break}return P.notify("Preencha corretamente o n\xfamero da O.S. e o novo cliente","warning"),e.abrupt("return");case 3:return e.prev=3,e.next=6,w.post("/parametros/atualiza-cliente-os",{os:M,cliente:null===(n=V.current)||void 0===n?void 0:n.getMyState().CODCLIENTE});case 6:"ok"===e.sent.data.status?P.notify("Cliente alterado com sucesso","success"):P.notify("Algo deu errado","error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),P.notify(e.t0.response.data.message,"error");case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:m?_.a.loading:_.a.hidden,children:Object(r.jsx)(S.a,{type:"Bars",color:"#B23237",height:80,width:80})}),Object(r.jsx)("div",{className:_.a.wrapper,children:"SEM_ACESSO"!==(null===U||void 0===U?void 0:U.permissions.parametrosGerais)?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Par\xe2metros Gerais"}),Object(r.jsxs)("div",{className:_.a.paramSession,children:[Object(r.jsx)("h2",{children:"Produtos"}),Object(r.jsxs)("div",{className:_.a.formDiv,children:[Object(r.jsx)(o.a,{title:"Define a quantidade de caracteres que ser\xe3o gerados para o c\xf3digo de barras dos produtos com grade atrav\xe9s da rotina 'Gerar C\xf3digo de Barras'",children:Object(r.jsxs)("span",{children:["Qtd. Caracteres C\xf3d. Barras - Grade"," ",Object(r.jsx)(x.b,{style:{marginLeft:"6px",color:"#b23237"}}),"  ",":"]})}),Object(r.jsxs)(u.a,{onChange:function(e){H(E(E({},J),{},{generalConfig:E(E({},J.generalConfig),{},{caracteresCodBarraGrade:e.target.value})}))},value:R,className:_.a.inputForm,children:[Object(r.jsx)(l.a,{value:12,children:"12 Caracteres"}),Object(r.jsx)(l.a,{value:13,children:"13 Caracteres"})]})]})]}),Object(r.jsxs)("div",{className:_.a.paramSession,children:[Object(r.jsx)("h2",{children:"NFS-e / O.S."}),t&&Object(r.jsxs)("form",{className:_.a.formParm,children:[Object(r.jsxs)("div",{className:_.a.formDiv,children:[Object(r.jsx)("span",{children:"Alterar cliente da O.S.:"}),Object(r.jsx)(d.a,{type:"number",variant:"outlined",label:"N\xfamero da O.S.",value:M,disabled:!W||!q,InputLabelProps:{shrink:!0},className:_.a.numeroOs,onChange:function(e){return G(+e.target.value)}}),Object(r.jsx)(p.a,{disabled:!W||!q,ref:V}),q?Object(r.jsx)(f.b,{onClick:Q,style:{marginLeft:"8px"},size:25,color:"#28aa0f"}):Object(r.jsx)(f.h,{onClick:function(){return z(!0)},size:25,style:{marginLeft:"8px"},color:"#e9bb1f"})]}),Object(r.jsxs)("div",{className:_.a.formDiv,children:[Object(r.jsx)("span",{children:"Lote RPS: "}),Object(r.jsx)(d.a,{label:"Lote RPS",type:"number",variant:"outlined",className:_.a.inputForm,disabled:!y,value:t.LOTERPS,onChange:function(e){return n(E(E({},t),{},{LOTERPS:Number(e.target.value)}))},InputProps:{endAdornment:y?Object(r.jsx)(f.b,{size:30,color:"#28aa0f",onClick:Y}):Object(r.jsx)(f.h,{size:30,color:"#e9bb1f",onClick:function(){W&&C(!0)}})}})]}),Object(r.jsxs)("div",{className:_.a.formDiv,children:[Object(r.jsx)("span",{children:"Lote NFS-e: "}),Object(r.jsx)(d.a,{label:"Lote NFS-e",type:"number",variant:"outlined",className:_.a.inputForm,disabled:!L,value:t.LOTENFSE,onChange:function(e){return n(E(E({},t),{},{LOTENFSE:Number(e.target.value)}))},InputProps:{endAdornment:L?Object(r.jsx)(f.b,{size:30,color:"#28aa0f",onClick:Y}):Object(r.jsx)(f.h,{size:30,color:"#e9bb1f",onClick:function(){W&&T(!0)}})}})]})]})]}),Object(r.jsx)(j.a,{})]}):Object(r.jsx)(v.a,{})})]})}}},[["wqa0",0,1,5,8,3,2,4,6,7,9]]]);