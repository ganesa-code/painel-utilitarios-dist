_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{"1ssf":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/receber",function(){return t("IxYm")}])},IxYm:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var n,r=t("nKUr"),c=t("vJKn"),s=t.n(c),i=t("rg98"),l=t("r9w1"),o=t("Z3vd"),d=t("YMtY"),u=t("q1tI"),O=t("bFzY"),h=t("FGyW"),E=t("tRs7"),f=t("uc1H"),m=t.n(f),b=(t("jDDT"),t("UN6+")),j=t("ddHN"),N=t("r9V7"),C=t.n(N),p=new E.a;function g(){var e=Object(u.useState)(),a=e[0],t=e[1],c=Object(u.useState)(),E=c[0],f=c[1],N=Object(u.useState)(),g=N[0],A=N[1],S=Object(u.useState)(!0),v=S[0],T=S[1],_=Object(u.useState)(),w=_[0],x=_[1],D=Object(u.useState)(),M=D[0],R=D[1],I=Object(u.useState)([]),L=I[0],V=I[1],y=Object(u.useState)(0),P=y[0],k=y[1],B=Object(u.useState)(0),Y=B[0],K=B[1],F=Object(u.useState)(!1),H=F[0],U=F[1],G=Object(O.c)(),z=G.filialPrincipal,J=G.user,q=Object(u.useRef)(null),W=Object(j.b)().getApi;Object(u.useEffect)((function(){W.then((function(e){n=e}))}),[]),Object(u.useEffect)((function(){g&&n.get("/receber/".concat(z.CODEMPRESA,"/").concat(g.CODCLIENTE)).then((function(e){var a=e.data.receber.map((function(e){return{id:e.CODDOCTO.trim(),CODEMPRESA:"".concat(e.CODEMPRESA," - ").concat(e.NOMEEMPRESA.split(" ")[0]),NOME:"".concat(e.CODCLIENTE," - ").concat(e.NOME),EMAIL:e.EMAIL,DATAEMISSAO:Z(e.DT_EMISSAO),DATAVENCIMENTO:Z(e.DT_VENCIMENTO),VALORTOTAL:Q(e.VALORDOCTO-e.VALORDESC),VALORPAGO:Q(e.VALORPAGO),OBSERVACAO:e.OBSERVACAO.trim(),unparsedValorTotalSelecionado:e.VALORDOCTO-e.VALORDESC,unparsedValorPagoSelecionado:e.VALORPAGO,TIPODOCTO:e.TIPODOCTO}}));x([{field:"id",headerName:"Documento",width:150,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"TIPODOCTO",headerName:"Tipo",width:100,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"CODEMPRESA",headerName:"Empresa",width:150,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"NOME",headerName:"Cliente",width:300,headerClassName:"header-data-grid",cellClassName:"cell-data-grid",resizable:!0},{field:"DATAEMISSAO",headerName:"Data Emiss\xe3o",width:150,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"DATAVENCIMENTO",headerName:"Data Vencimento",width:180,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"VALORTOTAL",headerName:"Total",width:120,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"VALORPAGO",headerName:"Pago",width:120,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"OBSERVACAO",headerName:"Observa\xe7\xe3o",width:290,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"}]),R(a)}))}),[g]),Object(u.useEffect)((function(){window.addEventListener("mousedown",X)}),[]),Object(u.useEffect)((function(){if(M&&M.length>1){var e=M.reduce((function(e,a){return e+(+a.unparsedValorTotalSelecionado-+a.unparsedValorPagoSelecionado)}),0);K(e)}}),[M]),Object(u.useEffect)((function(){var e=L.reduce((function(e,a){return e+(+a.unparsedValorTotalSelecionado-+a.unparsedValorPagoSelecionado)}),0);k(e)}),[L]);var X=function(e){var a;q&&"NOMECLIENTE"===e.target.name?T(!0):!q||null!==(a=q.current)&&void 0!==a&&a.contains(e.target)||T(!1)},Z=function(e){return null===e?"":new Date(e).toLocaleString().split(" ")[0]},Q=function(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})},$=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(L.length<1)){e.next=3;break}return p.notify("Selecione ao menos um documento para enviar e-mail","warning"),e.abrupt("return");case 3:return e.prev=3,U(!0),a={EMAIL:g.EMAIL,NOME:g.NOME,valorTotalSelecionado:P,documentos:L},e.next=8,n.post("/receber/".concat(z.CODEMPRESA),a);case 8:e.sent,p.notify("E-mail enviado com sucesso!","success"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),p.notify(e.t0.res.data.message,"error");case 15:U(!1);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:H?m.a.loading:m.a.hidden,children:Object(r.jsx)(C.a,{type:"Bars",color:"#B23237",height:80,width:80})}),Object(r.jsx)("div",{className:"wrapper",children:"SEM_ACESSO"!==(null===J||void 0===J?void 0:J.permissions.contasAReceber)?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h.a,{}),Object(r.jsx)("h2",{children:"Contas a Receber"}),Object(r.jsxs)("div",{className:m.a.clienteInput,children:[Object(r.jsx)(l.a,{label:"Cliente",name:"NOMECLIENTE",autoComplete:"off",variant:"outlined",value:a,color:"primary",onChange:function(e){return a=e,T(!0),t(a.target.value),void(a.target.value.length>1?n.post("/clientes",{search:a.target.value}).then((function(e){f(e.data.parsedClientes)})):(T(!1),f([])));var a}}),E&&Object(r.jsx)("div",{ref:q,className:"".concat(m.a.searchResult," ").concat(v?m.a.visible:m.a.invisible),children:E.map((function(e){return Object(r.jsx)("span",{onClick:function(){t(e.CODCLIENTE+" - "+e.NOME),A(e),T(!1)},children:e.CODCLIENTE+" - "+e.NOME},e.CODCLIENTE)}))})]}),g&&w&&M&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{variant:"contained",color:"primary",disabled:"ACESSO_TOTAL"!==(null===J||void 0===J?void 0:J.permissions.contasAReceber)||L.length<1,style:{backgroundColor:"#B23237",color:"#f4f4f4",width:"fit-content",margin:"0rem auto 1rem 0"},onClick:$,children:"Enviar Notifica\xe7\xe3o ao Cliente"}),Object(r.jsx)(d.a,{autoHeight:!0,rows:M,columns:w,pageSize:15,checkboxSelection:!0,disableSelectionOnClick:!0,rowsPerPageOptions:[25,50,100],onSelectionModelChange:function(e){var a=new Set(e.selectionModel);V(M.filter((function(e){return a.has(e.id)})))}}),Object(r.jsxs)("span",{className:m.a.totais,children:[Object(r.jsx)("strong",{children:"Total dos documentos: "})," ",Q(Y)]}),Object(r.jsxs)("span",{className:m.a.totais,children:[Object(r.jsx)("strong",{children:"Total selecionado: "})," ",Q(P)]})]})]}):Object(r.jsx)(b.a,{})})]})}},"UN6+":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("nKUr"),r=t("33Fu"),c=t("YhpK"),s=t.n(c);function i(){return Object(n.jsxs)("div",{className:s.a.wrapper,children:[Object(n.jsx)(r.c,{size:50,color:"#b23237"}),Object(n.jsx)("h1",{children:"Acesso Bloqueado"})]})}},YhpK:function(e,a,t){e.exports={wrapper:"style_wrapper__22fyg"}},uc1H:function(e,a,t){e.exports={invisible:"styles_invisible__3BKms",visible:"styles_visible__2UgTb",totais:"styles_totais__HYkmE",produtoInput:"styles_produtoInput__2JZ9j",clienteInput:"styles_clienteInput__xlKYb",searchResult:"styles_searchResult__1E113",loading:"styles_loading__3mjcu",hidden:"styles_hidden__3WaUH"}}},[["1ssf",0,1,4,7,10,2,3,5,6,8,11]]]);