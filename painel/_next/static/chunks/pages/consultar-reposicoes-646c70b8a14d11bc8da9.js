_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"UN6+":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),a=n("33Fu"),s=n("YhpK"),i=n.n(s);function o(){return Object(r.jsxs)("div",{className:i.a.wrapper,children:[Object(r.jsx)(a.c,{size:50,color:"#b23237"}),Object(r.jsx)("h1",{children:"Acesso Bloqueado"})]})}},YhpK:function(e,t,n){e.exports={wrapper:"style_wrapper__22fyg"}},"aM2/":function(e,t,n){e.exports={container:"styles_container__17BEo",reposicoesTable:"styles_reposicoesTable__3HQWZ",reposicaoForm:"styles_reposicaoForm__vwaJy",reposicaoInput:"styles_reposicaoInput__2U6g-",turnPhoneImage:"styles_turnPhoneImage__25pKz"}},cLvt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/consultar-reposicoes",function(){return n("l+/E")}])},"l+/E":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r,a=n("nKUr"),s=n("vJKn"),i=n.n(s),o=n("rg98"),c=n("q1tI"),u=n("Tgqd"),d=n("9rZX"),l=n.n(d),p=n("r9w1"),j=n("Z3vd"),O=n("FGyW"),b=n("tRs7"),f=n("aM2/"),h=n.n(f),x=(n("jDDT"),n("bFzY")),v=n("UN6+"),E=n("ddHN"),m=new b.a;function A(){var e=Object(c.useState)([]),t=e[0],n=e[1],s=Object(c.useState)(),d=s[0],b=s[1],f=Object(c.useState)(!1),A=f[0],D=f[1],_=Object(c.useState)(""),I=_[0],T=_[1],S=Object(c.useState)(""),w=S[0],N=S[1],y=Object(c.useState)(window.innerWidth),g=y[0],C=y[1],P=Object(E.b)().getApi;Object(c.useEffect)((function(){P.then((function(e){(r=e).get("/reposicao").then((function(e){n(e.data.data)})).catch((function(e){throw e}))}))}),[]);var R=function(){C(window.innerWidth)};Object(c.useEffect)((function(){window.addEventListener("resize",R)}),[]);var U=Object(x.c)().user,Q=function(){var e=Object(o.a)(i.a.mark((function e(a){var s,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.filter((function(e){return e._id!==a._id})),o={QUANTIDADEREPO:a.QUANTIDADEREPO,QUANTIDADEDISPLAY:a.QUANTIDADEDISPLAY,status:"completed",COMPLETEDBY:"605a4c9add38ff0f00a905d4",filial:"00"},e.next=4,r.put("/reposicao/".concat(a._id),o);case 4:c=e.sent,n(s),c.data.data?m.notify("Reposi\xe7\xe3o conclu\xedda","success"):m.notify("Algo deu errado","error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(i.a.mark((function e(){var n,a,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(parseInt(I)<0||Number(I)>d.ESTOQUE)){e.next=6;break}return T("0"),m.notify("Informar uma quantidade v\xe1lida de reposi\xe7\xe3o","warning"),e.abrupt("return");case 6:if(!(parseInt(I)>d.ESTOQUE)){e.next=10;break}return T("0"),m.notify("O produto n\xe3o possui estoque suficiente para quantidade demandada","warning"),e.abrupt("return");case 10:return n=t.map((function(e){return e})),a=t.findIndex((function(e){return d._id===e._id})),n[a].QUANTIDADEREPO=I,n[a].QUANTIDADEDISPLAY=w,s={QUANTIDADEREPO:I,QUANTIDADEDISPLAY:w},e.next=17,r.put("/reposicao/".concat(d._id),s);case 17:o=e.sent,D(!1),o.data.data?m.notify("Reposi\xe7\xe3o alterada","success"):m.notify("Algo deu errado","error");case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(i.a.mark((function e(a){var s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.filter((function(e){return a!==e._id})),e.next=3,r.delete("/reposicao/".concat(a));case 3:o=e.sent,n(s),"ok"===o.data.status?m.notify("Reposi\xe7\xe3o exclu\xedda","success"):m.notify("Algo deu errado","error");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:h.a.container,children:"SEM_ACESSO"!==(null===U||void 0===U?void 0:U.permissions.visualizarReposicoes)?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Consultar Reposi\xe7\xf5es"}),g>600?Object(a.jsxs)("table",{className:h.a.reposicoesTable,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"C\xf3digo"}),Object(a.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(a.jsx)("th",{children:"Estoque"}),Object(a.jsx)("th",{children:"Repor"}),Object(a.jsx)("th",{children:"Em Display"}),Object(a.jsx)("th",{children:"Usu\xe1rio"}),Object(a.jsx)("th",{children:"A\xe7\xe3o"})]})}),Object(a.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.CODPROD}),Object(a.jsx)("td",{children:e.DESCRICAO}),Object(a.jsx)("td",{children:e.ESTOQUE}),Object(a.jsx)("td",{children:e.QUANTIDADEREPO}),Object(a.jsx)("td",{children:e.QUANTIDADEDISPLAY}),Object(a.jsx)("td",{children:e.REQUESTEDBY}),Object(a.jsx)("td",{children:"ACESSO_TOTAL"===(null===U||void 0===U?void 0:U.permissions.visualizarReposicoes)?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.b,{size:25,color:"#00b10f",onClick:function(){return Q(e)}}),Object(a.jsx)(u.g,{size:22,color:"#f4c800",onClick:function(){N(e.QUANTIDADEDISPLAY.toString()),T(e.QUANTIDADEREPO.toString()),b(e),D(!0)}}),Object(a.jsx)(u.r,{size:25,color:"#f00",onClick:function(){return L(e._id)}})]}):Object(a.jsx)("span",{children:"Usu\xe1rio sem Permiss\xe3o"})})]},e._id)}))})]}):Object(a.jsx)("img",{className:h.a.turnPhoneImage,src:"/images/turn-phone.png",alt:"Deixar telefone na horizontal"}),Object(a.jsx)(O.a,{}),Object(a.jsx)(l.a,{isOpen:A,onRequestClose:function(){D(!1)},overlayClassName:"react-modal-overlay",className:"react-modal-content",children:d&&Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(a.jsxs)("h3",{children:[d.CODPROD," - ",d.DESCRICAO]}),Object(a.jsxs)("form",{noValidate:!0,autoComplete:"off",className:h.a.reposicaoForm,children:[Object(a.jsx)(p.a,{label:"Estoque",variant:"outlined",disabled:"ACESSO_TOTAL"!==(null===U||void 0===U?void 0:U.permissions.visualizarReposicoes),className:h.a.reposicaoInput,value:d.ESTOQUE}),Object(a.jsx)(p.a,{label:"Quantidade Demandada",type:"number",disabled:"ACESSO_TOTAL"!==(null===U||void 0===U?void 0:U.permissions.visualizarReposicoes),variant:"outlined",value:I,InputProps:{inputProps:{min:0}},className:h.a.reposicaoInput,onChange:function(e){return T(e.target.value)}}),Object(a.jsx)(p.a,{label:"Quantidade em Display",type:"number",InputProps:{inputProps:{min:0}},variant:"outlined",disabled:"ACESSO_TOTAL"!==(null===U||void 0===U?void 0:U.permissions.visualizarReposicoes),value:w,className:h.a.reposicaoInput,onChange:function(e){return N(e.target.value)}})]}),Object(a.jsx)(j.a,{className:h.a.atualizarButton,variant:"contained",disabled:"ACESSO_TOTAL"!==(null===U||void 0===U?void 0:U.permissions.visualizarReposicoes),style:{backgroundColor:"#B23237",color:"#f4f4f4",width:"fit-content",margin:"2rem auto 0 auto"},onClick:z,children:"Alterar Reposi\xe7\xe3o"})]})})]}):Object(a.jsx)(v.a,{})})}}},[["cLvt",0,1,4,7,2,3,5,6,9]]]);