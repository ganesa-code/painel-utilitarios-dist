_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"20a2":function(e,t,r){e.exports=r("nOHt")},"6FTQ":function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}r.d(t,"a",(function(){return a}))},"8rE2":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r("6FTQ");function n(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(a.a)(e,t):void 0}}},KJax:function(e,t,r){"use strict";var a=r("wx14"),n=r("Ff2n"),o=r("q1tI"),c=(r("17x9"),r("iuhU")),i=r("H2TA"),s=o.forwardRef((function(e,t){var r=e.classes,i=e.className,s=e.row,d=void 0!==s&&s,u=Object(n.a)(e,["classes","className","row"]);return o.createElement("div",Object(a.a)({className:Object(c.a)(r.root,i,d&&r.row),ref:t},u))}));t.a=Object(i.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(s)},Wgz9:function(e,t,r){e.exports={produtoContainer:"styles_produtoContainer__3o5Q0",produtoWrapper:"styles_produtoWrapper__21Efm",produtoBody:"styles_produtoBody__2GtCC",atualizarButton:"styles_atualizarButton__1g5mS",produtoInfo:"styles_produtoInfo__GR9Sg",grid:"styles_grid__YNJ6Y",relacionamento:"styles_relacionamento__ndjY6",formParm:"styles_formParm__3WfbO",formDiv:"styles_formDiv__1FUmq",fornecedores:"styles_fornecedores__1t_XF"}},dVnI:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/produto",function(){return r("tss0")}])},tss0:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return B}));var a=r("nKUr"),n=r("vJKn"),o=r.n(n),c=r("rg98"),i=r("z7pX"),s=r("cpVT"),d=r("20a2"),u=r("q1tI"),l=r("Dp36"),O=r("R/WZ"),f=r("Z3vd"),j=r("KJax"),b=r("ZGBi"),p=r("UhlP"),m=r("ADg1"),h=r("1AYd"),E=r("cVXz"),x=r("pdwK"),D=r("jjAL"),N=r("r9w1"),v=r("csfp"),y=r("YMtY"),A=r("FGyW"),g=r("Wgz9"),S=r.n(g),C=(r("jDDT"),r("tRs7")),P=r("bFzY"),w=r("UN6+"),_=r("33Fu"),I=r("Tgqd");function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=Object(O.a)((function(e){return{formControl:{margin:e.spacing(1),marginTop:"2rem",minWidth:300,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}})),F={PaperProps:{style:{maxHeight:224,width:250}}},z=new C.a;function B(){var e=Object(d.useRouter)(),t=T(),r=Object(u.useState)(!0),n=r[0],O=r[1],g=Object(u.useState)(),C=g[0],R=g[1],B=Object(u.useState)(),M=B[0],W=B[1],k=Object(u.useState)(),V=k[0],G=k[1],L=Object(u.useState)(""),q=L[0],X=L[1],Y=Object(u.useState)(""),J=Y[0],Q=Y[1],K=Object(u.useState)(""),H=K[0],Z=K[1],$=Object(u.useState)(""),ee=$[0],te=$[1],re=Object(u.useState)([]),ae=re[0],ne=re[1],oe=Object(u.useState)([]),ce=oe[0],ie=oe[1],se=Object(u.useState)([]),de=se[0],ue=se[1],le=Object(P.c)().user;Object(u.useEffect)((function(){var t=e.query.id;W(String(t))}),[e.query]),Object(u.useEffect)((function(){M&&(l.a.get("/produtos/".concat(M)).then((function(e){if(!(e.data.parsedProduto.length<1)){R(e.data.parsedProduto[0]),X(e.data.parsedProduto[0].UNIDADEENT),Q(e.data.parsedProduto[0].UNIDADESAIDA),te(e.data.parsedProduto[0].ATIVO),Z(e.data.parsedProduto[0].FRACIONADO);var t={},r=0;e.data.parsedProduto.forEach((function(e){r+=e.ESTOQUE,t=Object.assign(t,Object(s.a)({},e.CODEMPRESA,e.ESTOQUE))})),ie([U(U({id:e.data.parsedProduto[0].CODPROD},t),{},{TOTAL:r})])}})),l.a.get("/produtos/unidades-medida").then((function(e){G(e.data.data)})),l.a.get("/config/filiais").then((function(e){var t=e.data.filiaisParsed.map((function(e){return{field:e.CODEMPRESA,headerName:e.NOMEEMPRESA.split(" ")[0],width:130}}));ne([].concat(Object(i.a)(t),[{field:"TOTAL",headerName:"TOTAL",width:130}]))})),l.a.get("/parametros/produtos-rel-fornecedor/".concat(M)).then((function(e){ue(e.data.produtoEFornecedores)})))}),[M]);var Oe=function(){var e=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={ATIVO:ee,FRACIONADO:H,UNIDADESAIDA:J,UNIDADEENT:q},R(U(U({},C),{},{ATIVO:ee,FRACIONADO:H,UNIDADESAIDA:J,UNIDADEENT:q})),e.next=4,l.a.post("/produtos/".concat(M),t);case 4:e.sent.data.updatedProduto?z.notify("Produto Atualizado","success"):z.notify("Algo deu errado","success");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=Object(c.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.delete("/parametros/produtos-rel-fornecedor/".concat(t,"/").concat(r));case 2:ue(de.filter((function(e){return e.CODFORNEC!==r}))),z.notify("Relacionamento exclu\xeddo","success");case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(a.jsx)("main",{className:S.a.produtoContainer,children:C&&"SEM_ACESSO"!==le.permissions.consultarProdutos?Object(a.jsxs)("div",{className:S.a.produtoWrapper,children:[Object(a.jsx)("h2",{children:"".concat(C.CODPROD," - ").concat(C.PRODUTODESCRICAO)}),Object(a.jsxs)("div",{className:S.a.produtoBody,children:[n?Object(a.jsx)(f.a,{className:S.a.atualizarButton,variant:"contained",disabled:"SOMENTE_CONSULTA"===le.permissions.consultarProdutos,onClick:function(){return O(!1)},style:{backgroundColor:"#B23237",color:"#f4f4f4",width:"fit-content",alignSelf:"center",marginTop:"3rem"},children:"Atualizar produto"}):Object(a.jsx)(f.a,{className:S.a.atualizarButton,variant:"contained",onClick:function(){O(!0),Oe()},style:{backgroundColor:"#B23237",color:"#f4f4f4",width:"fit-content",alignSelf:"center",marginTop:"3rem"},children:"Confirmar atualiza\xe7\xe3o"}),Object(a.jsx)(j.a,{className:S.a.switch,children:Object(a.jsx)(b.a,{control:Object(a.jsx)(p.a,{size:"medium",checked:"S"===ee,disabled:n,color:"primary"}),label:"Ativo",onChange:function(){return te("S"===ee?"N":"S")}})}),Object(a.jsx)(j.a,{children:Object(a.jsx)(b.a,{control:Object(a.jsx)(p.a,{size:"medium",checked:"S"===H,disabled:n,color:"primary"}),label:"Fracionado",onChange:function(){return Z("S"===H?"N":"S")}})}),Object(a.jsxs)(m.a,{disabled:n,className:t.formControl,children:[Object(a.jsx)(h.a,{id:"unidade-entrada",children:"Unidade de Entrada"}),Object(a.jsx)(E.a,{labelId:"unidade-de-entrada",id:"unidade-de-entrada-select",defaultValue:C.UNIDADEENT?C.UNIDADEENT:"",value:q||"",input:Object(a.jsx)(x.a,{}),MenuProps:F,onChange:function(e){return X(e.target.value.toString())},children:null===V||void 0===V?void 0:V.map((function(e){return Object(a.jsx)(D.a,{value:e.UNIDADE,onSelect:function(){return X(e.UNIDADE)},children:e.UNIDADE},e.UNIDADE)}))})]}),Object(a.jsxs)(m.a,{disabled:n,className:t.formControl,children:[Object(a.jsx)(h.a,{id:"unidade-saida",children:"Unidade de Sa\xedda"}),Object(a.jsx)(E.a,{labelId:"unidade-de-saida",id:"unidade-de-saida-select",defaultValue:"",value:J||"",input:Object(a.jsx)(x.a,{}),MenuProps:F,onChange:function(e){return Q(e.target.value.toString())},children:null===V||void 0===V?void 0:V.map((function(e){return Object(a.jsx)(D.a,{value:e.UNIDADE,onSelect:function(){return Q(e.UNIDADE)},children:e.UNIDADE},e.UNIDADE)}))})]}),Object(a.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(a.jsx)(N.a,{disabled:!0,label:"Fornecedor",variant:"outlined",value:C.NOMEFORNECEDOR?C.NOMEFORNECEDOR:""}),Object(a.jsx)(N.a,{disabled:!0,label:"Grupo",variant:"outlined",value:C.GRUPODESCRICAO?C.GRUPODESCRICAO:""}),Object(a.jsx)(N.a,{disabled:!0,label:"Subgrupo",variant:"outlined",value:C.SUBGRUPODESCRICAO?C.SUBGRUPODESCRICAO:""}),Object(a.jsx)(N.a,{disabled:!0,label:"Pre\xe7o de Custo",variant:"outlined",value:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(C.PRECOCUSTO)}),Object(a.jsx)(N.a,{disabled:!0,label:"Pre\xe7o de Venda",variant:"outlined",value:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(C.PRECO)})]}),Object(a.jsxs)("div",{className:S.a.grid,children:[Object(a.jsx)("h2",{children:"Estoque"}),Object(a.jsx)(y.a,{autoHeight:!0,disableExtendRowFullWidth:!0,hideFooterPagination:!0,hideFooter:!0,className:S.a.grid,rows:ce,columns:ae})]}),Object(a.jsxs)("div",{className:S.a.relacionamento,children:[Object(a.jsx)("h2",{children:"Relacionamento Produto X Fornecedor"}),Object(a.jsx)("form",{className:S.a.formParam,children:Object(a.jsx)("div",{className:S.a.formDiv,children:Object(a.jsx)(v.a,{title:"Exclui o relacionamento de um produto com o fornecedor,\r a fim de que o relacionamento autom\xe1tico na entrada da nota n\xe3o ocorra. Caso\r o produto n\xe3o possua nenhum relacionamento com fornecedores, nenhuma op\xe7\xe3o de exclus\xe3o\r ser\xe1 mostrada",children:Object(a.jsxs)("span",{children:["Excluir relacionamento Produto / Fornecedor",Object(a.jsx)(_.a,{style:{marginLeft:"6px",color:"#b23237"}})," ",":"]})})})}),de.length>0?Object(a.jsxs)("div",{className:S.a.fornecedores,children:[Object(a.jsxs)("h3",{children:["Fornecedores Relacionados ao Produto ",M,":"]}),Object(a.jsx)("ul",{children:de.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"".concat(e.CODFORNEC," - ").concat(e.NOME)}),Object(a.jsx)(I.r,{onClick:function(){return fe(e.CODPROD,e.CODFORNEC)},size:25,color:"#b23237"})]},e.CODFORNEC)}))})]}):Object(a.jsx)("h3",{children:"Produto n\xe3o possui relacionamento com nenhum fornecedor"})]})]}),Object(a.jsx)(A.a,{})]}):Object(a.jsx)(w.a,{})})}},z7pX:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r("6FTQ");var n=r("8rE2");function o(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["dVnI",0,1,4,7,10,3,2,5,6,8,11,12]]]);