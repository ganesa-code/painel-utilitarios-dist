_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{ILE7:function(e,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return S}));var t,n=s("nKUr"),r=s("cpVT"),i=s("vJKn"),c=s.n(i),l=s("rg98"),o=s("R/WZ"),u=s("ADg1"),d=s("1AYd"),b=s("cVXz"),j=s("pdwK"),p=s("jjAL"),m=s("q1tI"),v=s("UN6+"),O=s("ddHN"),x=s("bFzY"),f=s("tRs7"),h=s("JtMt"),C=s.n(h),g=new f.a,k=Object(o.a)((function(e){return{formControl:{minWidth:300,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}})),w={PaperProps:{style:{maxHeight:224,width:250}}};!function(e){e.SemAcesso="SEM_ACESSO",e.SomenteConsulta="SOMENTE_CONSULTA",e.AcessoTotal="ACESSO_TOTAL"}(t||(t={}));var y,I=Object.freeze({SemAcesso:{title:"Sem acesso",value:"SEM_ACESSO"},SomenteConsulta:{title:"Somente Consulta",value:"SOMENTE_CONSULTA"},AcessoTotal:{title:"Acesso Total",value:"ACESSO_TOTAL"}});function S(){var e,a,s,t,i,o,f,h,S,_,N,A,P,E,M=Object(m.useState)([]),T=M[0],R=M[1],z=Object(m.useState)(),L=z[0],D=z[1],U=Object(m.useState)(!1),q=U[0],G=U[1],K=k(),B=Object(x.c)().user,H=Object(O.b)().getApi;Object(m.useEffect)((function(){B&&G("ACESSO_TOTAL"===B.permissions.permissoes)}),[B]),Object(m.useEffect)((function(){H.then((function(e){(y=e).get("/users/").then((function(e){R(e.data.users)}))}))}),[]);var J=function(){var e=Object(l.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/users/".concat(L._id));case 2:a=e.sent,D(a.data.user);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(l.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/users/");case 2:return a=e.sent,e.next=5,R(a.data.users);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(c.a.mark((function e(a,s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.patch("/users/update-permissions",{USUARIO:L.login,PERMISSAO:Object(r.a)({},a,s)});case 3:if("ok"!==e.sent.data.status){e.next=8;break}return e.next=7,J();case 7:g.notify("Permiss\xe3o atualizada","success");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),g.notify(e.t0.response.data.message,"error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a,s){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:C.a.wrapper,children:"SEM_ACESSO"!==(null===B||void 0===B?void 0:B.permissions.permissoes)?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"Permiss\xf5es"}),Object(n.jsxs)(u.a,{className:K.formControl,children:[Object(n.jsx)(d.a,{id:"usuario-label",children:"Selecione o Usu\xe1rio"}),Object(n.jsx)(b.a,{labelId:"usuario-label",id:"usuario-select",value:L?L.login:"",displayEmpty:!0,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:T.map((function(e){return Object(n.jsx)(p.a,{value:e.login,onClick:Object(l.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,X();case 2:D(e);case 3:case"end":return a.stop()}}),a)}))),children:e.login},e._id)}))})]}),L&&Object(n.jsx)("section",{className:C.a.sectionDiv,children:Object(n.jsxs)(u.a,{className:"".concat(K.formControl," ").concat(C.a.permissionsDiv),children:[Object(n.jsx)(d.a,{id:"consultar-produtos-label",children:"Consultar Produtos"}),Object(n.jsx)(b.a,{labelId:"consultar-produtos-label",id:"consultar-produtos-select",disabled:!q,value:null!==(e=L.permissions)&&void 0!==e&&e.consultarProdutos?L.permissions.consultarProdutos:"",input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("consultarProdutos",I[e].value)},children:I[e].title},e)}))}),Object(n.jsxs)(u.a,{className:K.formControl,children:[Object(n.jsx)(d.a,{id:"parametros-gerais-label",children:"Par\xe2metros Gerais"}),Object(n.jsx)(b.a,{labelId:"parametros-gerais-label",id:"parametros-gerais-select",disabled:!q,value:null===(a=L.permissions)||void 0===a?void 0:a.parametrosGerais,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("parametrosGerais",I[e].value)},children:I[e].title},e)}))})]}),Object(n.jsxs)(u.a,{className:K.formControl,children:[Object(n.jsx)(d.a,{id:"gerar-cod-barras-label",children:"Gerar C\xf3digo de Barras"}),Object(n.jsx)(b.a,{labelId:"gerar-cod-barras-label",id:"gerar-cod-barras-select",disabled:!q,value:null===(s=L.permissions)||void 0===s?void 0:s.gerarCodBarras,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("gerarCodBarras",I[e].value)},children:I[e].title},e)}))})]}),Object(n.jsxs)(u.a,{className:K.formControl,children:[Object(n.jsx)(d.a,{id:"contas-receber-label",children:"Contas a Receber"}),Object(n.jsx)(b.a,{labelId:"contas-receber-label",id:"contas-receber-select",disabled:!q,value:null===(t=L.permissions)||void 0===t?void 0:t.contasAReceber,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("contasAReceber",I[e].value)},children:I[e].title},e)}))})]}),Object(n.jsxs)(u.a,{className:K.formControl,children:[Object(n.jsx)(d.a,{id:"altera-adm-label",children:"Altera Adm. Conv\xeanio"}),Object(n.jsx)(b.a,{labelId:"altera-adm-label",id:"altera-adm-select",disabled:!q,value:null===(i=L.permissions)||void 0===i?void 0:i.alteraAdmConvenio,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("alteraAdmConvenio",I[e].value)},children:I[e].title},e)}))})]}),Object(n.jsxs)(u.a,{className:K.formControl,children:[" ",Object(n.jsx)(d.a,{id:"digitacao-inventario-label",children:"Digita\xe7\xe3o de Invent\xe1rio"}),Object(n.jsx)(b.a,{labelId:"digitacao-inventario-label",id:"digitacao-inventario-select",disabled:!q,value:null===(o=L.permissions)||void 0===o?void 0:o.digitacaoInventario,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("digitacaoInventario",I[e].value)},children:I[e].title},e)}))})]}),Object(n.jsxs)(u.a,{className:K.formControl,children:[" ",Object(n.jsx)(d.a,{id:"consulta-inventarios-label",children:"Consulta de Invent\xe1rios"}),Object(n.jsx)(b.a,{labelId:"consulta-inventarios-label",id:"consulta-inventarios-select",disabled:!q,value:null===(f=L.permissions)||void 0===f?void 0:f.consultarInventarios,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("consultarInventarios",I[e].value)},children:I[e].title},e)}))})]}),Object(n.jsxs)(u.a,{className:K.formControl,children:[" ",Object(n.jsx)(d.a,{id:"compras-requisitar-label",children:"Requisitar Compras"}),Object(n.jsx)(b.a,{labelId:"compras-requisitar-label",id:"compras-requisitar-select",disabled:!q,value:null===(h=L.permissions)||void 0===h?void 0:h.comprasRequisitar,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("comprasRequisitar",I[e].value)},children:I[e].title},e)}))})]}),Object(n.jsxs)(u.a,{className:K.formControl,children:[" ",Object(n.jsx)(d.a,{id:"compras-consultar-label",children:"Consultar Compras"}),Object(n.jsx)(b.a,{labelId:"compras-consultar-label",id:"compras-consultar-select",disabled:!q,value:null===(S=L.permissions)||void 0===S?void 0:S.comprasConsultar,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("comprasConsultar",I[e].value)},children:I[e].title},e)}))})]}),Object(n.jsxs)(u.a,{className:K.formControl,children:[" ",Object(n.jsx)(d.a,{id:"compras-painel-label",children:"Painel do Comprador"}),Object(n.jsx)(b.a,{labelId:"compras-painel-label",id:"compras-painel-select",disabled:!q,value:null===(_=L.permissions)||void 0===_?void 0:_.comprasPainelDoComprador,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("comprasPainelDoComprador",I[e].value)},children:I[e].title},e)}))})]}),Object(n.jsxs)(u.a,{className:K.formControl,children:[" ",Object(n.jsx)(d.a,{id:"demandar-reposicao-label",children:"Demandar Reposi\xe7\xe3o"}),Object(n.jsx)(b.a,{labelId:"demandar-reposicao-label",id:"demandar-reposicao-select",disabled:!q,value:null===(N=L.permissions)||void 0===N?void 0:N.demandarReposicao,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("demandarReposicao",I[e].value)},children:I[e].title},e)}))})]}),Object(n.jsxs)(u.a,{className:K.formControl,children:[" ",Object(n.jsx)(d.a,{id:"visualizar-reposicoes-label",children:"Visualizar Reposi\xe7\xf5es"}),Object(n.jsx)(b.a,{labelId:"visualizar-reposicoes-label",id:"visualizar-reposicoes-select",disabled:!q,value:null===(A=L.permissions)||void 0===A?void 0:A.visualizarReposicoes,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("visualizarReposicoes",I[e].value)},children:I[e].title},e)}))})]}),Object(n.jsxs)(u.a,{className:K.formControl,children:[" ",Object(n.jsx)(d.a,{id:"configuracoes-label",children:"Configura\xe7\xf5es"}),Object(n.jsx)(b.a,{labelId:"configuracoes-label",id:"configuracoes-select",disabled:!q,value:null===(P=L.permissions)||void 0===P?void 0:P.configuracoes,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("configuracoes",I[e].value)},children:I[e].title},e)}))})]}),Object(n.jsxs)(u.a,{className:K.formControl,children:[" ",Object(n.jsx)(d.a,{id:"permissoes-label",children:"Permiss\xf5es"}),Object(n.jsx)(b.a,{labelId:"permissoes-label",id:"permissoes-select",disabled:!q,value:null===(E=L.permissions)||void 0===E?void 0:E.permissoes,input:Object(n.jsx)(j.a,{}),MenuProps:w,children:Object.keys(I).map((function(e){return Object(n.jsx)(p.a,{value:I[e].value,onClick:function(){F("permissoes",I[e].value)},children:I[e].title},e)}))})]})]})})]}):Object(n.jsx)(v.a,{})})}},JtMt:function(e,a,s){e.exports={wrapper:"styles_wrapper__1RKej",sectionDiv:"styles_sectionDiv__2c-wA",permissionsDiv:"styles_permissionsDiv__17aEI"}},"UN6+":function(e,a,s){"use strict";s.d(a,"a",(function(){return c}));var t=s("nKUr"),n=s("33Fu"),r=s("YhpK"),i=s.n(r);function c(){return Object(t.jsxs)("div",{className:i.a.wrapper,children:[Object(t.jsx)(n.c,{size:50,color:"#b23237"}),Object(t.jsx)("h1",{children:"Acesso Bloqueado"})]})}},YhpK:function(e,a,s){e.exports={wrapper:"style_wrapper__22fyg"}},jjAL:function(e,a,s){"use strict";var t=s("Ff2n"),n=s("rePB"),r=s("wx14"),i=s("q1tI"),c=(s("17x9"),s("iuhU")),l=s("H2TA"),o=s("tVbE"),u=i.forwardRef((function(e,a){var s,n=e.classes,l=e.className,u=e.component,d=void 0===u?"li":u,b=e.disableGutters,j=void 0!==b&&b,p=e.ListItemClasses,m=e.role,v=void 0===m?"menuitem":m,O=e.selected,x=e.tabIndex,f=Object(t.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(s=void 0!==x?x:-1),i.createElement(o.a,Object(r.a)({button:!0,role:v,tabIndex:s,component:d,selected:O,disableGutters:j,classes:Object(r.a)({dense:n.dense},p),className:Object(c.a)(n.root,l,O&&n.selected,!j&&n.gutters),ref:a},f))}));a.a=Object(l.a)((function(e){return{root:Object(r.a)({},e.typography.body1,Object(n.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(r.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(u)},sMbX:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/permissoes",function(){return s("ILE7")}])}},[["sMbX",0,1,4,7,2,3,5,6]]]);