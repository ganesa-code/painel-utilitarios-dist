_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"2qu3":function(e,t,n){"use strict";var r=n("oI91"),a=n("/GRZ"),o=n("i2R6");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var l,d=(l=n("q1tI"))&&l.__esModule?l:{default:l},f=n("8L3h"),p=n("jwwS");var b=[],O=[],h=!1;function m(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function j(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var a=m(e[r]);a.loading?t.loading=!0:(t.loaded[r]=a.loaded,t.error=a.error),n.push(a.promise),a.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function v(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),r=null;function a(){if(!r){var t=new g(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!h&&"function"===typeof n.webpack){var o=n.webpack();O.push((function(e){var t,n=s(o);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return a()}}catch(i){n.e(i)}finally{n.f()}}))}var i=function(e,t){a();var o=d.default.useContext(p.LoadableContext),i=(0,f.useSubscription)(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?n.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return a()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var g=function(){function e(t,n){a(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return v(m,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}_.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(j,e)},_.preloadAll=function(){return new Promise((function(e,t){w(b).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return h=!0,t()};w(O,e).then(n,n)}))},window.__NEXT_PRELOADREADY=_.preloadReady;var E=_;t.default=E},Sbtq:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n("nKUr"),a=n("vJKn"),o=n.n(a),i=n("rg98"),u=n("q1tI"),s=n("tRs7"),c=(n("jDDT"),n("ddHN")),l=Object(u.createContext)({}),d=new s.a,f=function(e){var t,n=e.children,a=Object(u.useState)(),s=a[0],f=a[1],p=Object(u.useState)(),b=p[0],O=p[1],h=Object(c.b)().getApi;Object(u.useEffect)((function(){h.then((function(e){(t=e).get("/config/gerais").then((function(e){f(e.data.config)})),t.get("/config/filiais").then((function(e){O(e.data.filiaisParsed)}))}))}),[]);var m=function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.then(function(){var e=Object(i.a)(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r,f(n),e.next=4,t.post("/config/gerais",n);case 4:"ok"===e.sent.data.status&&d.notify("Configura\xe7\xf5es alteradas","success");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(l.Provider,{value:{config:s,filiais:b,changeConfig:m},children:n})},p=function(){return Object(u.useContext)(l)}},"UN6+":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("nKUr"),a=n("33Fu"),o=n("YhpK"),i=n.n(o);function u(){return Object(r.jsxs)("div",{className:i.a.wrapper,children:[Object(r.jsx)(a.c,{size:50,color:"#b23237"}),Object(r.jsx)("h1",{children:"Acesso Bloqueado"})]})}},Vvt1:function(e,t,n){e.exports=n("a6RD")},YhpK:function(e,t,n){e.exports={wrapper:"style_wrapper__22fyg"}},a6RD:function(e,t,n){"use strict";var r=n("oI91");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=s,t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o(o({},r),e));if(r=o(o({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=i.default.Map;var a={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?a[e]=t:a[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=a}r.loadableGenerated&&delete(r=o(o({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,s(n,r);delete r.ssr}return n(r)};u(n("q1tI"));var i=u(n("2qu3"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},agwT:function(e,t,n){e.exports={consultaWrapper:"styles_consultaWrapper__2odhk",consultaContainer:"styles_consultaContainer__11S_w",searchDiv:"styles_searchDiv__1pKdL",searchInput:"styles_searchInput__2nlfs",searchResult:"styles_searchResult__abNvw",reposicaoForm:"styles_reposicaoForm__YUKbU",reposicaoInput:"styles_reposicaoInput__2djkm"}},bUh6:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n("nKUr"),a=n("vJKn"),o=n.n(a),i=n("rg98"),u=n("cpVT"),s=n("q1tI"),c=n("Vvt1"),l=n.n(c),d=n("9rZX"),f=n.n(d),p=n("Tgqd"),b=n("r9w1"),O=n("Z3vd"),h=n("FGyW"),m=n("tRs7"),j=n("agwT"),y=n.n(j),v=(n("jDDT"),n("bFzY")),g=n("Sbtq"),_=n("UN6+"),w=n("ddHN");function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}f.a.setAppElement("#__next");var P,S=new m.a,x=l()((function(){return n.e(15).then(n.t.bind(null,"8YoS",7))}),{ssr:!1,loadableGenerated:{webpack:function(){return["8YoS"]},modules:["react-webcam-barcode-scanner"]}});function C(){var e=Object(s.useState)(""),t=e[0],n=e[1],a=Object(s.useState)([]),u=a[0],c=a[1],l=Object(s.useState)(),d=l[0],m=l[1],j=Object(s.useState)("0"),E=j[0],C=j[1],R=Object(s.useState)("0"),T=R[0],A=R[1],I=Object(s.useState)(!1),k=I[0],N=I[1],U=Object(s.useState)(!1),q=U[0],L=U[1],M=Object(v.c)(),Q=M.user,F=M.filialPrincipal,K=Object(g.b)(),Y=K.config,G=(K.changeConfig,Object(w.b)().getApi);Object(s.useEffect)((function(){G.then((function(e){P=e}))}),[]),Object(s.useEffect)((function(){t.length>0&&P.post("/produtos",{search:t,filial:"01"}).then((function(e){c(e.data.parsedProdutos)})),0===t.length&&c([])}),[t]);var V=function(){N(!1),C("0"),A("0")},B=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(parseInt(E)<=0||Number(E)>d.ESTOQUE)){e.next=6;break}return C("0"),S.notify("Informar uma quantidade v\xe1lida de reposi\xe7\xe3o","warning"),e.abrupt("return");case 6:if(!(parseInt(E)+parseInt(T)>d.ESTOQUE)){e.next=9;break}return S.notify("O produto n\xe3o possui estoque suficiente para quantidade demandada","warning"),e.abrupt("return");case 9:return t={CODPROD:d.CODPROD,DESCRICAO:d.PRODUTODESCRICAO,ESTOQUE:d.ESTOQUE,QUANTIDADEREPO:E,QUANTIDADEDISPLAY:T,REQUESTEDBY:Q.USUARIO,FILIAL:F.CODEMPRESA},e.next=12,P.post("/reposicao",t);case 12:"ok"===(n=e.sent).data.status?(C("0"),S.notify("Produto demandado com sucesso","success")):"error"===n.data.status?S.notify(n.data.message,"error"):S.notify("Algo deu errado","error"),V();case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:y.a.consultaWrapper,children:"SEM_ACESSO"!==(null===Q||void 0===Q?void 0:Q.permissions.demandarReposicao)?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h.a,{}),Object(r.jsxs)("div",{className:y.a.consultaContainer,children:[Object(r.jsx)("h2",{children:"Demandar Reposi\xe7\xe3o"}),Object(r.jsxs)("div",{className:y.a.searchDiv,children:[Object(r.jsxs)("div",{className:y.a.searchInput,children:[Object(r.jsx)(p.n,{size:30,color:"#B23237"}),Object(r.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}),Object(r.jsx)(p.a,{onClick:function(){return L(!0)},size:30,color:"#B23237"})]}),u.length>0&&Object(r.jsx)("div",{className:y.a.searchResult,children:Object(r.jsx)("ul",{children:u.map((function(e){return Object(r.jsx)("li",{onClick:function(){return function(e){G.then((function(t){(P=t).get("/produtos/".concat(e.CODPROD)).then((function(e){if(Y.generalConfig.somaSaldoEstoque){var t=0;e.data.parsedProduto.forEach((function(e){return t+=e.ESTOQUE})),m(D(D({},e.data.parsedProduto[0]),{},{ESTOQUE:t}))}else m(e.data.parsedProduto.filter((function(e){return F.CODEMPRESA===e.CODEMPRESA}))[0])}))})),N(!0)}(e)},children:Object(r.jsx)("p",{children:"".concat(e.CODPROD," - ").concat(e.DESCRICAO)})},e.CODPROD)}))})})]})]}),Object(r.jsx)(f.a,{isOpen:q,onRequestClose:function(){L(!1)},overlayClassName:"react-modal-overlay",className:"react-modal-content-camera",children:Object(r.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(r.jsx)(x,{width:500,height:380,onUpdate:function(e,t){t&&(n(t.getText()),L(!1))}})})}),Object(r.jsx)(f.a,{isOpen:k,onRequestClose:V,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:d&&Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsxs)("h3",{children:[d.CODPROD," - ",d.PRODUTODESCRICAO]}),Object(r.jsxs)("form",{noValidate:!0,autoComplete:"off",className:y.a.reposicaoForm,children:[Object(r.jsx)(b.a,{label:"Estoque",disabled:!0,variant:"outlined",className:y.a.reposicaoInput,value:d.ESTOQUE}),Object(r.jsx)(b.a,{label:"Quantidade Demandada",type:"number",variant:"outlined",disabled:"ACESSO_TOTAL"!==(null===Q||void 0===Q?void 0:Q.permissions.demandarReposicao),InputProps:{inputProps:{min:0}},value:E,className:y.a.reposicaoInput,onChange:function(e){return C(e.target.value)}}),Object(r.jsx)(b.a,{label:"Quantidade em Display",type:"number",InputProps:{inputProps:{min:0}},variant:"outlined",disabled:"ACESSO_TOTAL"!==(null===Q||void 0===Q?void 0:Q.permissions.demandarReposicao),value:T,className:y.a.reposicaoInput,onChange:function(e){return A(e.target.value)}})]}),Y.generalConfig.somaSaldoEstoque&&Object(r.jsx)("span",{className:"soma-estoque-warning",children:"O par\xe2metro de soma de estoque de todas filiais est\xe1 ativo."}),Object(r.jsx)(O.a,{className:y.a.atualizarButton,variant:"contained",style:{backgroundColor:"#B23237",color:"#f4f4f4",width:"fit-content",margin:"2rem auto 0 auto"},disabled:"ACESSO_TOTAL"!==(null===Q||void 0===Q?void 0:Q.permissions.demandarReposicao),onClick:B,children:"Demandar Reposi\xe7\xe3o"})]})})]}):Object(r.jsx)(_.a,{})})}},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},jDLh:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demandar-reposicao",function(){return n("bUh6")}])},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}},[["jDLh",0,1,4,7,2,3,5,6,9]]]);