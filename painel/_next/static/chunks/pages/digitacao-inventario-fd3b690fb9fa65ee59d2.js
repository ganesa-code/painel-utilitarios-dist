_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{Sbtq:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a("nKUr"),r=a("vJKn"),c=a.n(r),o=a("rg98"),i=a("q1tI"),s=a("tRs7"),u=(a("jDDT"),a("ddHN")),l=Object(i.createContext)({}),d=new s.a,p=function(e){var t,a=e.children,r=Object(i.useState)(),s=r[0],p=r[1],O=Object(i.useState)(),f=O[0],j=O[1],b=Object(u.b)().getApi;Object(i.useEffect)((function(){b.then((function(e){(t=e).get("/config/gerais").then((function(e){p(e.data.config)})),t.get("/config/filiais").then((function(e){j(e.data.filiaisParsed)}))}))}),[]);var g=function(){var e=Object(o.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.then(function(){var e=Object(o.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n,p(a),e.next=4,t.post("/config/gerais",a);case 4:"ok"===e.sent.data.status&&d.notify("Configura\xe7\xf5es alteradas","success");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(l.Provider,{value:{config:s,filiais:f,changeConfig:g},children:a})},O=function(){return Object(i.useContext)(l)}},U61B:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return T}));var n=a("nKUr"),r=a("cpVT"),c=a("vJKn"),o=a.n(c),i=a("rg98"),s=a("R/WZ"),u=a("ADg1"),l=a("r9w1"),d=a("1AYd"),p=a("cVXz"),O=a("pdwK"),f=a("jjAL"),j=a("Z3vd"),b=a("q1tI"),g=a("9rZX"),m=a.n(g),h=a("ZA7E"),v=a("FGyW"),x=a("tRs7"),C=(a("jDDT"),a("ddne")),D=a.n(C),y=a("bFzY"),A=a("Sbtq"),S=a("Tgqd"),P=a("UN6+"),I=a("ddHN");function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N,_=Object(s.a)((function(e){return{formControl:{margin:e.spacing(1),marginLeft:"auto",marginRight:"auto"},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}})),R={PaperProps:{style:{maxHeight:224,width:250}}},k=new x.a;function T(){var e=Object(b.useState)(),t=e[0],a=e[1],r=Object(b.useState)("000"),c=r[0],s=r[1],g=Object(b.useState)(""),x=g[0],C=g[1],E=Object(b.useState)([]),T=E[0],U=E[1],M=Object(b.useState)(),B=M[0],q=M[1],z=Object(b.useState)(!1),V=z[0],L=z[1],F=Object(b.useState)((new Date).toISOString().split("T")[0]),W=F[0],H=F[1],K=Object(b.useState)(!1),Z=K[0],J=K[1],Q=Object(b.useState)(0),X=Q[0],G=Q[1],Y=Object(b.useState)(),$=Y[0],ee=Y[1],te=Object(b.useState)(!1),ae=te[0],ne=te[1],re=Object(b.useState)(!1),ce=re[0],oe=re[1],ie=Object(b.useState)(),se=ie[0],ue=ie[1],le=Object(b.useState)(0),de=le[0],pe=le[1],Oe=_(),fe=Object(y.c)(),je=fe.user,be=fe.filialPrincipal,ge=Object(A.b)(),me=ge.config,he=ge.filiais,ve=Object(I.b)().getApi;Object(b.useEffect)((function(){ve.then((function(e){(N=e).get("/produtos/causas-inventario").then((function(e){a(e.data.data),s(e.data.data[0].CODCAUSA)}))}))}),[]),Object(b.useEffect)((function(){x.length>0&&N.post("/produtos",{search:x,filial:"01"}).then((function(e){U(e.data.parsedProdutos)})),0===x.length&&U([])}),[x]);var xe=function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/produtos/".concat(t.CODPROD));case 2:a=e.sent,q(a.data.parsedProduto[0]),ee(a.data.parsedProduto[0].PRECOCUSTO),Ce(a.data.parsedProduto[0].CODPROD);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=W.toString().split("-").reverse().join().replace(/,/g,"."),e.next=3,N.post("/produtos/checkIfDigitado",{CODEMPRESA:be.CODEMPRESA,DATAINV:a,CODPROD:t});case 3:if("ok"!==(n=e.sent).data.status){e.next=7;break}return J(!0),e.abrupt("return");case 7:"dig"===n.data.status&&(ue(n.data.digitacao),ne(!0)),"error"===n.data.status&&k.notify(n.data.message,"error");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=W.toString().split("-").reverse().join().replace(/,/g,"."),a={CODEMPRESA:be.CODEMPRESA,DATAINV:t,CODPROD:B.CODPROD,DOCUMENTO:t.replace(/\./g,"")+"A",DATAHORA:t.replace(/\./g,""),USUARIO:je.USUARIO,QUANTIDADE:Number(X),CODCAUSA:c,PRECOCUSTO:$},e.next=4,N.post("/produtos/digitacao-inventario",a);case 4:n=e.sent,me.generalConfig.zeraEstoqueFilialDigitacao&&he.map((function(e){if(e.CODEMPRESA!==be.CODEMPRESA)return w(w({},a),{},{CODEMPRESA:e.CODEMPRESA,QUANTIDADE:0,DOCUMENTO:t.replace(/\./g,"")+"B"})})).forEach(function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return e.next=3,N.post("/produtos/digitacao-inventario",t);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),"ok"===n.data.status?k.notify("Invent\xe1rio Realizado","success"):k.notify(n.data.message,"error"),J(!1),G(0),C("");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.put("/produtos/digitacao-inventario",{QUANTIDADE:de,DATAINV:se.DATAINV,CODEMPRESA:se.CODEMPRESA,CODPROD:se.CODPROD});case 3:"ok"===e.sent.data.status&&(k.notify("Digita\xe7\xe3o atualizada com sucesso","success"),pe(0),ne(!1),oe(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),k.notify(e.t0.response.data.message,"error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:D.a.digitacaoWrapper,children:["SEM_ACESSO"!==je.permissions.digitacaoInventario?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"Digita\xe7\xe3o de Invent\xe1rio"}),Object(n.jsx)(u.a,{className:"".concat(Oe.formControl," ").concat(D.a.test),onChange:function(e){return H(e.target.value)},children:Object(n.jsx)(l.a,{id:"data-inventario",label:"Data do Invent\xe1rio",type:"date",inputProps:{max:(new Date).toLocaleString("pt-BR").split(" ")[0].split("/").reverse().join("-")},defaultValue:W||"",InputLabelProps:{shrink:!0}})}),Object(n.jsxs)(u.a,{className:"".concat(Oe.formControl," ").concat(D.a.test),children:[Object(n.jsx)(d.a,{id:"unidade-entrada",children:"Causa de Invent\xe1rio"}),Object(n.jsx)(p.a,{labelId:"causa-inventario",id:"causa-inventario-select",defaultValue:c||"",value:c||"",input:Object(n.jsx)(O.a,{}),MenuProps:R,onChange:function(e){s(String(e.target.value))},children:null===t||void 0===t?void 0:t.map((function(e){return Object(n.jsx)(f.a,{value:e.CODCAUSA,children:e.DESCRICAO},e.CODCAUSA)}))})]}),Object(n.jsx)(h.a,{handleChangeCameraModal:function(e){L(e)},isCameraModalOpen:V,handleSearchChange:function(e){C(e)},search:x,disabled:"ACESSO_TOTAL"!==je.permissions.digitacaoInventario,produtos:T,handleSelectProduto:xe})]}):Object(n.jsx)(P.a,{}),Object(n.jsxs)(m.a,{isOpen:ae,onRequestClose:function(){ne(!1),oe(!1)},overlayClassName:"react-modal-overlay",className:"react-modal-content react-modal-content-check",children:[se&&!ce&&Object(n.jsxs)("div",{className:D.a.confirmIncluded,children:[Object(n.jsxs)("p",{children:["O produto"," ",Object(n.jsxs)("span",{children:["".concat(se.CODPROD," - ").concat(se.DESCRICAO)," "]}),"j\xe1 encontra-se digitado para a data informada,"," ",Object(n.jsx)("span",{children:se.DATAINV.toLocaleString().split("T")[0].split("-").reverse().join("/")}),", na quantidade de ",Object(n.jsx)("span",{children:se.QUANTIDADE}),".",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Voc\xea deseja alterar a quantidade?"]}),Object(n.jsxs)("div",{className:D.a.confirmButtonsDiv,children:[Object(n.jsxs)(j.a,{style:{backgroundColor:"#B23237",marginRight:"16px",display:"flex",alignItems:"center"},variant:"contained",color:"primary",onClick:function(){return oe(!0)},children:[Object(n.jsx)(S.b,{size:20}),Object(n.jsx)("span",{children:"Sim"})]}),Object(n.jsxs)(j.a,{style:{backgroundColor:"#B23237",display:"flex",alignItems:"center"},variant:"contained",color:"primary",onClick:function(){ne(!1)},children:[Object(n.jsx)(S.r,{size:20}),Object(n.jsx)("span",{children:"N\xe3o"})]})]})]}),se&&ce&&Object(n.jsxs)("div",{children:[Object(n.jsx)(l.a,{label:"Quantidade",type:"number",variant:"outlined",className:D.a.reposicaoInput,InputProps:{inputProps:{min:0}},value:de,onChange:function(e){return pe(+e.target.value)}}),Object(n.jsx)(j.a,{style:{backgroundColor:"#B23237",display:"flex",alignItems:"center",margin:"12px auto 0 auto"},variant:"contained",color:"primary",onClick:ye,children:"Atualizar Digita\xe7\xe3o"})]})]}),Object(n.jsx)(m.a,{isOpen:Z,onRequestClose:function(){J(!1)},overlayClassName:"react-modal-overlay",className:"react-modal-content react-modal-content-inv",children:B&&Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(n.jsxs)("h3",{children:[B.CODPROD," - ",B.PRODUTODESCRICAO]}),Object(n.jsxs)("form",{noValidate:!0,autoComplete:"off",className:D.a.reposicaoForm,children:[Object(n.jsx)(l.a,{label:"Quantidade",type:"number",variant:"outlined",className:D.a.reposicaoInput,InputProps:{inputProps:{min:0}},value:X,onChange:function(e){return G(Number(e.target.value))}}),Object(n.jsx)(l.a,{label:"Pre\xe7o de Custo",type:"number",className:"".concat(D.a.currencyInput," ").concat(D.a.reposicaoInput),prefix:"R$",InputProps:{inputProps:{min:0}},variant:"outlined",value:$,onChange:function(e){ee(Number(e.target.value))}})]}),me.generalConfig.zeraEstoqueFilialDigitacao&&Object(n.jsx)("span",{className:D.a.paramWarning,children:"O par\xe2metro de zerar a digita\xe7\xe3o nas demais filiais est\xe1 ativo"}),Object(n.jsx)(j.a,{className:D.a.atualizarButton,variant:"contained",style:{backgroundColor:"#B23237",color:"#f4f4f4",width:"fit-content",margin:"2rem auto 0 auto"},onClick:De,children:"Incluir Invent\xe1rio"})]})}),Object(n.jsx)(v.a,{})]})}},"UN6+":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("nKUr"),r=a("33Fu"),c=a("YhpK"),o=a.n(c);function i(){return Object(n.jsxs)("div",{className:o.a.wrapper,children:[Object(n.jsx)(r.c,{size:50,color:"#b23237"}),Object(n.jsx)("h1",{children:"Acesso Bloqueado"})]})}},YhpK:function(e,t,a){e.exports={wrapper:"style_wrapper__22fyg"}},ddne:function(e,t,a){e.exports={digitacaoWrapper:"styles_digitacaoWrapper__1c9N0",test:"styles_test__30Lx9",reposicaoForm:"styles_reposicaoForm__mgoAN",reposicaoInput:"styles_reposicaoInput__1EeX-",currencyInput:"styles_currencyInput__ZOJRv",confirmButtonsDiv:"styles_confirmButtonsDiv__1P6JP",confirmIncluded:"styles_confirmIncluded__2xfMi",paramWarning:"styles_paramWarning__1CpOM"}},jjAL:function(e,t,a){"use strict";var n=a("Ff2n"),r=a("rePB"),c=a("wx14"),o=a("q1tI"),i=(a("17x9"),a("iuhU")),s=a("H2TA"),u=a("tVbE"),l=o.forwardRef((function(e,t){var a,r=e.classes,s=e.className,l=e.component,d=void 0===l?"li":l,p=e.disableGutters,O=void 0!==p&&p,f=e.ListItemClasses,j=e.role,b=void 0===j?"menuitem":j,g=e.selected,m=e.tabIndex,h=Object(n.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==m?m:-1),o.createElement(u.a,Object(c.a)({button:!0,role:b,tabIndex:a,component:d,selected:g,disableGutters:O,classes:Object(c.a)({dense:r.dense},f),className:Object(i.a)(r.root,s,g&&r.selected,!O&&r.gutters),ref:t},h))}));t.a=Object(s.a)((function(e){return{root:Object(c.a)({},e.typography.body1,Object(r.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(c.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(l)},owpZ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/digitacao-inventario",function(){return a("U61B")}])}},[["owpZ",0,1,4,7,2,3,5,6,9,14]]]);