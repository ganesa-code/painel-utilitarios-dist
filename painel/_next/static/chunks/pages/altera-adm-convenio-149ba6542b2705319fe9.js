_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"0ssY":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/altera-adm-convenio",function(){return a("E0bq")}])},DbXy:function(e,t,a){e.exports={invisible:"styles_invisible__2eb-b",visible:"styles_visible__2b1oV",totais:"styles_totais__1vmZn",produtoInput:"styles_produtoInput__27fS-",clienteInput:"styles_clienteInput__2WKkT",searchResult:"styles_searchResult__26Gln"}},E0bq:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var n=a("nKUr"),r=a("cpVT"),i=a("vJKn"),s=a.n(i),o=a("rg98"),c=a("q1tI"),l=a("r9w1"),d=a("Z3vd"),u=a("YMtY");function O(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function p(e){O(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function b(e,t){O(2,arguments);var a=p(e),n=p(t),r=a.getTime()-n.getTime();return r<0?-1:r>0?1:r}var f=a("FGyW"),m=a("Ry4D"),h=a("UN6+"),v=a("tRs7"),j=(a("jDDT"),a("ZeHp")),g=a.n(j),C=a("r9V7"),A=a.n(C),N=a("bFzY"),D=a("ddHN");function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w,T=new v.a,_=Object.freeze({DATAINICIAL:"",DATAFINAL:""}),E=[{field:"id",headerName:"Documento",width:150,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"TIPODOCTO",headerName:"Tipo",width:100,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"CODEMPRESA",headerName:"Empresa",width:150,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"DT_EMISSAO",headerName:"Emiss\xe3o",width:175,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"DT_VENCIMENTO",headerName:"Vencimento",width:175,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"VALOR",headerName:"Valor",width:150,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"CODAUTORIZACAO",headerName:"NSU",width:175,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"},{field:"NUMDOCORIG",headerName:"Doc. Origem",width:175,headerClassName:"header-data-grid",cellClassName:"cell-data-grid"}];function S(){var e=Object(c.useState)(!1),t=(e[0],e[1]),a=Object(c.useState)(_),r=a[0],i=a[1],O=Object(c.useState)(!1),p=O[0],v=O[1],j=Object(c.useState)(!1),C=j[0],I=j[1],S=Object(c.useState)(!1),x=S[0],L=S[1],M=Object(c.useState)([]),R=M[0],k=M[1],P=Object(c.useState)([]),F=P[0],B=P[1],U=Object(c.useState)(E),V=U[0],K=(U[1],Object(c.useRef)(null)),Y=Object(c.useRef)(null),Z=Object(N.c)().user,q=Object(D.b)().getApi,H=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q.then(function(){var e=Object(o.a)(s.a.mark((function e(t){var a,n,i,o,c,l,d,u,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w=t,null!==(a=K.current)&&void 0!==a&&a.getMyState()&&void 0!==(null===(n=K.current)||void 0===n?void 0:n.getMyState().CODCLIENTE)&&""!==r.DATAINICIAL&&""!==r.DATAFINAL){e.next=4;break}return T.notify("Preencha todos os campos","warning"),e.abrupt("return");case 4:if(o=r.DATAINICIAL.split("-"),c=r.DATAFINAL.split("-"),l=new Date(+o[0],+o[1],+o[2]),d=new Date(+c[0],+c[1],+c[2]),1!==b(l,d)){e.next=11;break}return T.notify("Data inicial \xe9 posterior a data final","warning"),e.abrupt("return");case 11:return I(!0),v(!0),e.next=15,w.post("/adm-conv/get-documents",{CODCLIENTE:null===(i=K.current)||void 0===i?void 0:i.getMyState().CODCLIENTE,DATAINICIO:r.DATAINICIAL.split("-").reverse().join("."),DATAFIM:r.DATAFINAL.split("-").reverse().join(".")});case 15:"ok"===(u=e.sent).data.status&&(O=u.data.documentos.map((function(e){return{id:e.CODDOCTO,TIPODOCTO:e.TIPODOCTO,CODEMPRESA:e.CODEMPRESA,DT_EMISSAO:z(e.DT_EMISSAO),DT_VENCIMENTO:z(e.DT_VENCIMENTO),VALOR:G(e.VALORDOCTO),CODAUTORIZACAO:e.CODAUTORIZACAO,NUMDOCORIG:e.NUMDOCORIG}})),B(O),v(!1));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(e){return null===e?"":new Date(e).toLocaleString().split(" ")[0]},G=function(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})},X=function(){var e=Object(o.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(R.length<1)){e.next=3;break}return T.notify("Selecione ao menos um documento","warning"),e.abrupt("return");case 3:if(null!==(t=Y.current)&&void 0!==t&&t.getMyState()&&void 0!==(null===(a=Y.current)||void 0===a?void 0:a.getMyState().CODCLIENTE)){e.next=6;break}return T.notify("Preencha a nova administradora de cart\xe3o","warning"),e.abrupt("return");case 6:return L(!0),n=R.filter((function(e,t,a){return a.findIndex((function(t){return t.id===e.id}))===t})),e.prev=8,e.next=11,w.patch("/adm-conv/update-adm",{CODCLIENTE:null===(r=Y.current)||void 0===r?void 0:r.getMyState().CODCLIENTE,documentos:n});case 11:"ok"===e.sent.data.status?(k([]),T.notify("Administradora alterada com sucesso","success")):T.notify("Algo deu errado","error"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),T.notify("Algo deu errado","error");case 18:L(!1);case 19:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:x?g.a.loading:g.a.hidden,children:Object(n.jsx)(A.a,{type:"Bars",color:"#B23237",height:80,width:80})}),Object(n.jsx)("section",{className:g.a.wrapper,children:"SEM_ACESSO"!==(null===Z||void 0===Z?void 0:Z.permissions.alteraAdmConvenio)?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f.a,{}),Object(n.jsx)("h2",{children:"Alterar Administradora de Cart\xe3o"}),Object(n.jsxs)("div",{className:g.a.searchAdmDiv,children:[Object(n.jsx)(m.a,{handleIsSelected:function(){t((function(e){return!e}))},ref:K,admConv:!0}),Object(n.jsxs)("div",{className:g.a.buttonsDiv,children:[Object(n.jsx)(l.a,{type:"date",name:"DATAINICIAL",label:"Data Inicial",value:r.DATAINICIAL,onChange:function(e){return i(y(y({},r),{},{DATAINICIAL:e.target.value}))},InputLabelProps:{shrink:!0},style:{marginRight:"38px"}}),Object(n.jsx)(l.a,{type:"date",name:"DATAFINAL",label:"Data Final",value:r.DATAFINAL,onChange:function(e){return i(y(y({},r),{},{DATAFINAL:e.target.value}))},InputLabelProps:{shrink:!0}})]})]}),Object(n.jsx)(d.a,{variant:"contained",color:"primary",style:{backgroundColor:"#B23237",width:"150px",marginTop:"1rem",marginBottom:"2rem"},onClick:H,children:"Buscar"}),C&&p&&Object(n.jsx)("div",{className:g.a.loadingDiv,children:Object(n.jsx)(A.a,{type:"Bars",color:"#B23237",height:80,width:80})}),C&&!p&&F&&V&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(u.a,{autoHeight:!0,rows:F,columns:V,pageSize:15,checkboxSelection:!0,disableSelectionOnClick:!0,rowsPerPageOptions:[25,50,100],onSelectionModelChange:function(e){if("ACESSO_TOTAL"===(null===Z||void 0===Z?void 0:Z.permissions.alteraAdmConvenio)){var t=new Set(e.selectionModel);k(F.filter((function(e){return t.has(e.id)})))}}}),Object(n.jsxs)("div",{className:g.a.updateDiv,children:[Object(n.jsx)(m.a,{disabled:"ACESSO_TOTAL"!==(null===Z||void 0===Z?void 0:Z.permissions.alteraAdmConvenio),ref:Y,admConv:!0}),Object(n.jsx)(d.a,{variant:"contained",color:"primary",disabled:"ACESSO_TOTAL"!==(null===Z||void 0===Z?void 0:Z.permissions.alteraAdmConvenio),style:{backgroundColor:"#B23237",width:"300px",marginTop:"1rem",marginBottom:"2rem",color:"#f4f4f4"},onClick:X,children:"Alterar Administradora"})]})]})]}):Object(n.jsx)(h.a,{})})]})}},Ry4D:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("nKUr"),r=a("r9w1"),i=a("q1tI"),s=a.n(i),o=a("ddHN"),c=a("DbXy"),l=a.n(c),d=s.a.forwardRef((function(e,t){var a=e.disabled,s=e.admConv,c=void 0!==s&&s,d=e.handleIsSelected,u=Object(i.useState)(),O=u[0],p=u[1],b=Object(i.useState)(),f=b[0],m=b[1],h=Object(i.useState)(),v=h[0],j=h[1],g=Object(i.useState)(!1),C=g[0],A=g[1],N=Object(i.useRef)(null),D=Object(o.b)().getApi;Object(i.useImperativeHandle)(t,(function(){return{getMyState:function(){return v}}}),[v]),Object(i.useEffect)((function(){window.addEventListener("mousedown",I)}),[]);var I=function(e){var t;N&&"NOMECLIENTE"===e.target.name?A(!0):!N||null!==(t=N.current)&&void 0!==t&&t.contains(e.target)||A(!1)};return Object(n.jsxs)("div",{className:l.a.clienteInput,children:[Object(n.jsx)(r.a,{label:c?"Administradora de Cart\xe3o":"Cliente",name:"NOMECLIENTE",autoComplete:"off",variant:"outlined",disabled:a||!1,value:O,color:"primary",onChange:function(e){return function(e){if(A(!0),p(e.target.value),e.target.value.length>0){var t=c?"/adm-conv":"/clientes";D.then((function(a){a.post(t,{search:e.target.value}).then((function(e){m(c?e.data.administradoras:e.data.parsedClientes)}))}))}else A(!1),m([])}(e)}}),f&&Object(n.jsx)("div",{ref:N,className:"".concat(l.a.searchResult," ").concat(C?l.a.visible:l.a.invisible),children:f.map((function(e){return Object(n.jsx)("span",{onClick:function(){p(e.CODCLIENTE+" - "+e.NOME),j(e),A(!1),c&&d&&d()},children:e.CODCLIENTE+" - "+e.NOME},e.CODCLIENTE)}))})]})}))},"UN6+":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("nKUr"),r=a("33Fu"),i=a("YhpK"),s=a.n(i);function o(){return Object(n.jsxs)("div",{className:s.a.wrapper,children:[Object(n.jsx)(r.c,{size:50,color:"#b23237"}),Object(n.jsx)("h1",{children:"Acesso Bloqueado"})]})}},YhpK:function(e,t,a){e.exports={wrapper:"style_wrapper__22fyg"}},ZeHp:function(e,t,a){e.exports={wrapper:"styles_wrapper__l3uFS",searchAdmDiv:"styles_searchAdmDiv__d6zYx",buttonsDiv:"styles_buttonsDiv__1K4VM",loadingDiv:"styles_loadingDiv__2Ohrt",updateDiv:"styles_updateDiv__3j82l",loading:"styles_loading__262iK",hidden:"styles_hidden__3-8cX"}}},[["0ssY",0,1,4,7,11,2,3,5,6,8,10,12]]]);