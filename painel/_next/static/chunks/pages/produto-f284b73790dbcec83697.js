_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"20a2":function(e,t,a){e.exports=a("nOHt")},"6FTQ":function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},"8rE2":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("6FTQ");function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},KJax:function(e,t,a){"use strict";var r=a("wx14"),n=a("Ff2n"),o=a("q1tI"),c=(a("17x9"),a("iuhU")),i=a("H2TA"),s=o.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.row,d=void 0!==s&&s,l=Object(n.a)(e,["classes","className","row"]);return o.createElement("div",Object(r.a)({className:Object(c.a)(a.root,i,d&&a.row),ref:t},l))}));t.a=Object(i.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(s)},Wgz9:function(e,t,a){e.exports={produtoContainer:"styles_produtoContainer__3o5Q0",produtoWrapper:"styles_produtoWrapper__21Efm",produtoBody:"styles_produtoBody__2GtCC",atualizarButton:"styles_atualizarButton__1g5mS",produtoInfo:"styles_produtoInfo__GR9Sg",grid:"styles_grid__YNJ6Y",relacionamento:"styles_relacionamento__ndjY6",formParm:"styles_formParm__3WfbO",formDiv:"styles_formDiv__1FUmq",fornecedores:"styles_fornecedores__1t_XF",referencia:"styles_referencia__2TLsM","header-data-grid":"styles_header-data-grid__1Lkhm","cell-data-grid":"styles_cell-data-grid__1IL2z",confirmationModal:"styles_confirmationModal__FAob0",confirmButtonsDiv:"styles_confirmButtonsDiv__3Hjf7"}},dVnI:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/produto",function(){return a("tss0")}])},tss0:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var r=a("nKUr"),n=a("vJKn"),o=a.n(n),c=a("rg98"),i=a("z7pX"),s=a("cpVT"),d=a("20a2"),l=a("q1tI"),u=a("R/WZ"),O=a("Z3vd"),j=a("KJax"),b=a("ZGBi"),f=a("UhlP"),p=a("ADg1"),m=a("1AYd"),h=a("cVXz"),E=a("pdwK"),D=a("jjAL"),x=a("r9w1"),g=a("csfp"),A=a("YMtY"),C=a("FGyW"),v=a("9rZX"),R=a.n(v),N=a("Tgqd"),S=a("Wgz9"),y=a.n(S),P=(a("jDDT"),a("tRs7")),I=a("bFzY"),_=a("33Fu"),w=a("ddHN");function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M,U=Object(u.a)((function(e){return{chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}})),B={PaperProps:{style:{maxHeight:224,width:250}}},L=new P.a;function k(){var e=Object(d.useRouter)(),t=(U(),Object(l.useState)(!0)),a=t[0],n=t[1],u=Object(l.useState)(),v=u[0],S=u[1],P=Object(l.useState)(),T=P[0],k=P[1],G=Object(l.useState)(),z=G[0],V=G[1],W=Object(l.useState)(""),q=W[0],X=W[1],H=Object(l.useState)(""),Q=H[0],Y=H[1],J=Object(l.useState)(""),K=J[0],Z=J[1],$=Object(l.useState)(""),ee=$[0],te=$[1],ae=Object(l.useState)(1),re=ae[0],ne=ae[1],oe=Object(l.useState)("M"),ce=oe[0],ie=oe[1],se=Object(l.useState)(1),de=se[0],le=se[1],ue=Object(l.useState)(""),Oe=ue[0],je=ue[1],be=Object(l.useState)([]),fe=be[0],pe=be[1],me=Object(l.useState)([]),he=me[0],Ee=me[1],De=Object(l.useState)([]),xe=De[0],ge=De[1],Ae=Object(l.useState)([]),Ce=Ae[0],ve=Ae[1],Re=Object(l.useState)([]),Ne=Re[0],Se=Re[1],ye=Object(l.useState)(!1),Pe=ye[0],Ie=ye[1],_e=Object(I.c)().user,we=Object(w.b)().getApi;Object(l.useEffect)((function(){var t=e.query.id;k(String(t))}),[e.query]),Object(l.useEffect)((function(){we.then((function(e){M=e,T&&(M.get("/produtos/".concat(T)).then((function(e){if(!(e.data.parsedProduto.length<1)){S(e.data.parsedProduto[0]),X(e.data.parsedProduto[0].UNIDADEENT),Y(e.data.parsedProduto[0].UNIDADESAIDA),te(e.data.parsedProduto[0].ATIVO),Z(e.data.parsedProduto[0].FRACIONADO),ne(e.data.parsedProduto[0].FATORCONVERSAO),ie(e.data.parsedProduto[0].MULTDIVIDE),le(e.data.parsedProduto[0].MULTIPLO),je(e.data.parsedProduto[0].EMBALAGEM);var t={},a=0;e.data.parsedProduto.forEach((function(e){a+=e.ESTOQUE,t=F(F({},t),{},Object(s.a)({},e.CODEMPRESA,t[e.CODEMPRESA]?t[e.CODEMPRESA]+e.ESTOQUE:e.ESTOQUE))})),Ee([F(F({id:e.data.parsedProduto[0].CODPROD},t),{},{TOTAL:a})]);var r=e.data.grades.map((function(e){return{id:e.CODGRADE,DESCGRADE:e.DESCGRADE,CODBARRA:e.CODBARRA}}));ge(r),ve([{field:"id",headerName:"C\xf3d. Grade",width:150,headerClassName:"header-data-grid",cellClassName:"cell-data-grid",align:"center",headerAlign:"center"},{field:"DESCGRADE",headerName:"Grade",width:300,headerClassName:"header-data-grid",cellClassName:"cell-data-grid",align:"center",headerAlign:"center"},{field:"CODBARRA",headerName:"C\xf3d. Barra",width:150,headerClassName:"header-data-grid",cellClassName:"cell-data-grid",align:"center",headerAlign:"center"}])}})),M.get("/produtos/unidades-medida").then((function(e){V(e.data.data)})),M.get("/config/filiais").then((function(e){var t=e.data.filiaisParsed.map((function(e){return{field:e.CODEMPRESA,headerName:e.NOMEEMPRESA.split(" ")[0],width:130}}));pe([].concat(Object(i.a)(t),[{field:"TOTAL",headerName:"TOTAL",width:130}]))})),M.get("/parametros/produtos-rel-fornecedor/".concat(T)).then((function(e){Se(e.data.produtoEFornecedores)})))}))}),[T]);var Te=function(){var e=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={ATIVO:ee,FRACIONADO:K,UNIDADESAIDA:Q,UNIDADEENT:q,MULTDIVIDE:ce,MULTIPLO:de,FATORCONVERSAO:re,EMBALAGEM:Oe},e.next=3,M.post("/produtos/".concat(T),t);case 3:e.sent.data.updatedProduto?(S(F(F({},v),{},{ATIVO:ee,FRACIONADO:K,UNIDADESAIDA:Q,UNIDADEENT:q,MULTDIVIDE:ce,MULTIPLO:de,FATORCONVERSAO:re,EMBALAGEM:Oe})),L.notify("Produto Atualizado","success")):L.notify("Algo deu errado","success");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(c.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.delete("/parametros/produtos-rel-fornecedor/".concat(t,"/").concat(a));case 2:Se(Ne.filter((function(e){return e.CODFORNEC!==a}))),L.notify("Relacionamento exclu\xeddo","success");case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Me=function(){var e=Object(c.a)(o.a.mark((function e(){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={CODPROD:v.CODPROD,REFERENCIA:"",grades:[]},""===v.REFERENCIA.trim()&&(a="7"+v.CODPROD.padStart(11,"0")+String(Math.floor(10*Math.random())),t=F(F({},t),{},{REFERENCIA:a})),-1!==(r=xe.findIndex((function(e){return""===e.CODBARRA})))||""===v.REFERENCIA){e.next=6;break}return L.notify("Este produto e suas grades j\xe1 possuem refer\xeancias","warning"),e.abrupt("return");case 6:return-1!==r&&xe.forEach((function(e){""===e.CODBARRA.trim()&&(t=F(F({},t),{},{grades:[].concat(Object(i.a)(t.grades),[{id:e.id,DESCGRADE:e.DESCGRADE,CODBARRA:"799"+e.id+v.CODPROD}])}))})),e.next=9,M.post("/produtos/updateReferencia",t);case 9:"ok"===e.sent.data.status&&(L.notify("Refer\xeancias geradas com sucesso","success"),S(F(F({},v),{},{REFERENCIA:a||v.REFERENCIA})),ge(t.grades));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ue=function(){Ie(!1)};return Object(r.jsx)("main",{className:y.a.produtoContainer,children:v&&"SEM_ACESSO"!==_e.permissions.consultarProdutos&&Object(r.jsxs)("div",{className:y.a.produtoWrapper,children:[Object(r.jsxs)(O.a,{variant:"contained",style:{backgroundColor:"#B23237",width:"fit-content",color:"#f4f4f4",marginBottom:"2rem"},onClick:function(){window.location.href="/consultar-produto"},children:[Object(r.jsx)(N.c,{style:{marginRight:"10px"},size:25,color:"#f4f4f4"}),"Voltar"]}),Object(r.jsx)("h2",{children:"".concat(v.CODPROD," - ").concat(v.PRODUTODESCRICAO)}),Object(r.jsxs)("div",{className:y.a.produtoBody,children:[a?Object(r.jsx)(O.a,{className:y.a.atualizarButton,variant:"contained",disabled:"SOMENTE_CONSULTA"===_e.permissions.consultarProdutos,onClick:function(){return n(!1)},style:{backgroundColor:"#B23237",color:"#f4f4f4",width:"fit-content",alignSelf:"center",marginTop:"3rem"},children:"Atualizar produto"}):Object(r.jsx)(O.a,{className:y.a.atualizarButton,variant:"contained",onClick:function(){n(!0),Te()},style:{backgroundColor:"#B23237",color:"#f4f4f4",width:"fit-content",alignSelf:"center",marginTop:"3rem"},children:"Confirmar atualiza\xe7\xe3o"}),Object(r.jsx)(j.a,{className:y.a.switch,children:Object(r.jsx)(b.a,{control:Object(r.jsx)(f.a,{size:"medium",checked:"S"===ee,disabled:a,color:"primary"}),label:"Ativo",onChange:function(){return te("S"===ee?"N":"S")}})}),Object(r.jsx)(j.a,{children:Object(r.jsx)(b.a,{control:Object(r.jsx)(f.a,{size:"medium",checked:"S"===K,disabled:a,color:"primary"}),label:"Fracionado",onChange:function(){return Z("S"===K?"N":"S")}})}),Object(r.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(r.jsxs)(p.a,{disabled:a,children:[Object(r.jsx)(m.a,{id:"unidade-entrada",children:"Unidade de Entrada"}),Object(r.jsx)(h.a,{labelId:"unidade-de-entrada",id:"unidade-de-entrada-select",defaultValue:v.UNIDADEENT?v.UNIDADEENT:"",value:q||"",input:Object(r.jsx)(E.a,{}),MenuProps:B,onChange:function(e){return X(e.target.value.toString())},children:null===z||void 0===z?void 0:z.map((function(e){return Object(r.jsx)(D.a,{value:e.UNIDADE,onSelect:function(){return X(e.UNIDADE)},children:e.UNIDADE},e.UNIDADE)}))})]}),Object(r.jsxs)(p.a,{disabled:a,children:[Object(r.jsx)(m.a,{id:"unidade-saida",children:"Unidade de Sa\xedda"}),Object(r.jsx)(h.a,{labelId:"unidade-de-saida",id:"unidade-de-saida-select",defaultValue:"",value:Q||"",input:Object(r.jsx)(E.a,{}),MenuProps:B,onChange:function(e){return Y(e.target.value.toString())},children:null===z||void 0===z?void 0:z.map((function(e){return Object(r.jsx)(D.a,{value:e.UNIDADE,onSelect:function(){return Y(e.UNIDADE)},children:e.UNIDADE},e.UNIDADE)}))})]}),Object(r.jsxs)(p.a,{disabled:a||q===Q,children:[Object(r.jsx)(m.a,{id:"multdivide",children:"Multiplica/Divide"}),Object(r.jsxs)(h.a,{labelId:"multdivide",id:"multdivide-select",defaultValue:"",value:ce||"",input:Object(r.jsx)(E.a,{}),MenuProps:B,onChange:function(e){return ie(e.target.value.toString())},children:[Object(r.jsx)(D.a,{value:"M",onSelect:function(){return ie("M")},children:"M"}),Object(r.jsx)(D.a,{value:"D",onSelect:function(){return ie("D")},children:"D"})]})]}),Object(r.jsx)(p.a,{children:Object(r.jsx)(x.a,{type:"number",variant:"outlined",disabled:a||q===Q,label:"Fator de Convers\xe3o",value:re,InputLabelProps:{shrink:!0},onChange:function(e){return ne(+e.target.value)}})}),Object(r.jsx)(p.a,{disabled:a,children:Object(r.jsx)(x.a,{type:"text",variant:"outlined",label:"Embalagem",value:Oe,disabled:a,InputLabelProps:{shrink:!0},onChange:function(e){return je(e.target.value)}})}),Object(r.jsx)(p.a,{disabled:a,children:Object(r.jsx)(x.a,{type:"number",variant:"outlined",label:"M\xfaltiplo",value:de,disabled:a,InputLabelProps:{shrink:!0},onChange:function(e){return le(+e.target.value)}})}),Object(r.jsx)(x.a,{disabled:!0,label:"Fornecedor",variant:"outlined",value:v.NOMEFORNECEDOR?v.NOMEFORNECEDOR:""}),Object(r.jsx)(x.a,{disabled:!0,label:"Grupo",variant:"outlined",value:v.GRUPODESCRICAO?v.GRUPODESCRICAO:""}),Object(r.jsx)(x.a,{disabled:!0,label:"Subgrupo",variant:"outlined",value:v.SUBGRUPODESCRICAO?v.SUBGRUPODESCRICAO:""}),Object(r.jsx)(x.a,{disabled:!0,label:"Pre\xe7o de Custo",variant:"outlined",value:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(v.PRECOCUSTO)}),Object(r.jsx)(x.a,{disabled:!0,label:"Pre\xe7o de Venda",variant:"outlined",value:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(v.PRECO)})]}),Object(r.jsxs)("div",{className:y.a.grid,children:[Object(r.jsx)("h2",{children:"Estoque"}),Object(r.jsx)(A.a,{autoHeight:!0,disableExtendRowFullWidth:!0,hideFooterPagination:!0,hideFooter:!0,className:y.a.grid,rows:he,columns:fe})]}),Object(r.jsxs)("div",{className:y.a.relacionamento,children:[Object(r.jsx)("h2",{children:"Relacionamento Produto X Fornecedor"}),Object(r.jsx)("form",{className:y.a.formParam,children:Object(r.jsx)("div",{className:y.a.formDiv,children:Object(r.jsx)(g.a,{title:"Exclui o relacionamento de um produto com o fornecedor,\r a fim de que o relacionamento autom\xe1tico na entrada da nota n\xe3o ocorra. Caso\r o produto n\xe3o possua nenhum relacionamento com fornecedores, nenhuma op\xe7\xe3o de exclus\xe3o\r ser\xe1 mostrada",children:Object(r.jsxs)("span",{children:["Excluir relacionamento Produto / Fornecedor",Object(r.jsx)(_.b,{style:{marginLeft:"6px",color:"#b23237"}})," ",":"]})})})}),Ne.length>0?Object(r.jsxs)("div",{className:y.a.fornecedores,children:[Object(r.jsxs)("h3",{children:["Fornecedores Relacionados ao Produto ",T,":"]}),Object(r.jsx)("ul",{children:Ne.map((function(e){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:"".concat(e.CODFORNEC," - ").concat(e.NOME)}),Object(r.jsx)(N.s,{onClick:function(){"ACESSO_TOTAL"===_e.permissions.consultarProdutos&&Ie(!0)},size:25,color:"#b23237"}),Object(r.jsx)(R.a,{isOpen:Pe,onRequestClose:Ue,overlayClassName:"react-modal-overlay",className:"react-modal-content react-modal-content-check",children:Object(r.jsxs)("div",{className:y.a.confirmationModal,children:[Object(r.jsxs)("p",{children:["Voc\xea tem certeza que deseja excluir a rela\xe7\xe3o entre o produto"," ",Object(r.jsxs)("span",{children:[e.CODPROD," - ",v.PRODUTODESCRICAO]})," ","e o fornecedor ",Object(r.jsx)("span",{children:e.NOME}),"?"]}),Object(r.jsxs)("div",{className:y.a.confirmButtonsDiv,children:[Object(r.jsxs)(O.a,{style:{backgroundColor:"#B23237",marginRight:"16px",display:"flex",alignItems:"center"},variant:"contained",color:"primary",onClick:function(){return Fe(e.CODPROD,e.CODFORNEC)},children:[Object(r.jsx)(N.b,{size:20}),Object(r.jsx)("span",{children:"Sim"})]}),Object(r.jsxs)(O.a,{style:{backgroundColor:"#B23237",display:"flex",alignItems:"center"},variant:"contained",color:"primary",onClick:function(){Ue()},children:[Object(r.jsx)(N.s,{size:20}),Object(r.jsx)("span",{children:"N\xe3o"})]})]})]})})]},e.CODFORNEC)}))})]}):Object(r.jsx)("h3",{children:"Produto n\xe3o possui relacionamento com nenhum fornecedor"})]}),Object(r.jsxs)("div",{className:y.a.referencia,children:[Object(r.jsx)("h2",{children:"Refer\xeancia de Produto/Grades"}),Object(r.jsx)(x.a,{disabled:!0,label:"Refer\xeacia do Produto",variant:"outlined",style:{width:"300px",marginBottom:"16px"},value:v.REFERENCIA}),Ce&&xe.length>0&&Object(r.jsx)(A.a,{rows:xe,columns:Ce,autoHeight:!0,disableExtendRowFullWidth:!0,hideFooterPagination:!0,hideFooter:!0,className:y.a.grid}),Object(r.jsx)(O.a,{variant:"contained",style:{backgroundColor:"#B23237",color:"#f4f4f4",width:"fit-content",alignSelf:"center",marginTop:"2rem"},disabled:"ACESSO_TOTAL"!==_e.permissions.consultarProdutos,onClick:Me,children:"Gerar Refer\xeancias"})]})]}),Object(r.jsx)(C.a,{})]})})}},z7pX:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("6FTQ");var n=a("8rE2");function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["dVnI",0,1,5,8,12,3,2,4,6,7,9,11,10,13,14]]]);