webpackHotUpdate_N_E("pages/parametros-gerais",{

/***/ "./src/pages/parametros-gerais/index.tsx":
/*!***********************************************!*\
  !*** ./src/pages/parametros-gerais/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParametrosGerais; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_SearchClienteInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SearchClienteInput */ "./src/components/SearchClienteInput/index.tsx");
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");
/* harmony import */ var _components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/SemPermissao */ "./src/components/SemPermissao/index.tsx");
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/toast */ "./src/services/toast.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/parametros-gerais/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _contexts_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../contexts/api */ "./src/contexts/api.tsx");






var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\pages\\parametros-gerais\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var showToast = new _services_toast__WEBPACK_IMPORTED_MODULE_12__["ShowToast"]();
var api;
function ParametrosGerais() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      nfseParams = _useState[0],
      setNfseParms = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    ALIQICMS: 0
  }),
      aliqIcms = _useState2[0],
      setAliqIcms = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      changeRps = _useState3[0],
      setChangeRps = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      changeNfs = _useState4[0],
      setChangeNfs = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      changeAliqIcms = _useState5[0],
      setChangeAliqIcms = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isChangingClienteOS = _useState6[0],
      setIsChangingClienteOS = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      numeroOsTrocaCliente = _useState7[0],
      setNnumeroOsTrocaCliente = _useState7[1];

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_10__["useAuth"])(),
      user = _useAuth.user;

  var _useApi = Object(_contexts_api__WEBPACK_IMPORTED_MODULE_14__["useApi"])(),
      getApi = _useApi.getApi;

  var clienteRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var isAuthorized = (user === null || user === void 0 ? void 0 : user.permissions.parametrosGerais) !== "SOMENTE_CONSULTA";
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    getApi.then(function (response) {
      api = response;
      api.get("/parametros/nfse").then(function (response) {
        setNfseParms(response.data.paramsNFSe[0]);
      });
    });
  }, []);

  var handleSubmitNFSE = /*#__PURE__*/function () {
    var _ref = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var dataObj, response;
      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dataObj = {
                loteNFSE: nfseParams.LOTENFSE,
                loteRPS: nfseParams.LOTERPS
              };
              _context.next = 3;
              return api.post("/parametros/nfse", dataObj);

            case 3:
              response = _context.sent;

              if (response.data.status === "ok") {
                showToast.notify("Alteração enviada ao sistema", "success");
              } else {
                showToast.notify("Algo deu errado", "error");
              }

              setChangeRps(false);
              setChangeNfs(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmitNFSE() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSubmitAliqIcms = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var response;
      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.post("/parametros/atualiza-aliq", aliqIcms);

            case 2:
              response = _context2.sent;

              if (response.data.status === "ok") {
                showToast.notify("Alíquota alterada com sucesso", "success");
              } else {
                showToast.notify("Algo deu errado", "error");
              }

              setChangeAliqIcms(false);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmitAliqIcms() {
      return _ref2.apply(this, arguments);
    };
  }();

  var changeClienteOs = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      var _clienteRef$current;

      var _clienteRef$current2, response;

      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!numeroOsTrocaCliente || numeroOsTrocaCliente <= 0 || !((_clienteRef$current = clienteRef.current) !== null && _clienteRef$current !== void 0 && _clienteRef$current.getMyState()))) {
                _context3.next = 3;
                break;
              }

              showToast.notify("Preencha corretamente o número da O.S. e o novo cliente", "warning");
              return _context3.abrupt("return");

            case 3:
              _context3.prev = 3;
              _context3.next = 6;
              return api.post("/parametros/atualiza-cliente-os", {
                os: numeroOsTrocaCliente,
                cliente: (_clienteRef$current2 = clienteRef.current) === null || _clienteRef$current2 === void 0 ? void 0 : _clienteRef$current2.getMyState().CODCLIENTE
              });

            case 6:
              response = _context3.sent;

              if (response.data.status === "ok") {
                showToast.notify("Cliente alterado com sucesso", "success");
              } else {
                showToast.notify("Algo deu errado", "error");
              }

              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](3);
              showToast.notify(_context3.t0.response.data.message, "error");

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 10]]);
    }));

    return function changeClienteOs() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.wrapper,
    children: (user === null || user === void 0 ? void 0 : user.permissions.parametrosGerais) !== "SEM_ACESSO" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Par\xE2metros Gerais"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.paramSession,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Fiscal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
              title: "000",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Atualizar Al\xEDquota ICMS: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
              label: "Aliq. ICMS",
              type: "number",
              variant: "outlined",
              disabled: !changeAliqIcms,
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.inputForm,
              value: aliqIcms.ALIQICMS,
              onChange: function onChange(event) {
                return setAliqIcms({
                  ALIQICMS: Number(event.target.value)
                });
              },
              InputProps: {
                endAdornment: changeAliqIcms ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiCheck"], {
                  size: 30,
                  color: "#28aa0f",
                  onClick: handleSubmitAliqIcms,
                  style: {
                    cursor: "pointer"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 23
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiEdit"], {
                  size: 30,
                  color: "#e9bb1f",
                  onClick: function onClick() {
                    if (isAuthorized) {
                      setChangeAliqIcms(true);
                    } else {
                      return;
                    }
                  },
                  style: {
                    cursor: "pointer"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 23
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.paramSession,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "NFS-e / O.S."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, this), nfseParams && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formParm,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Alterar cliente da O.S.:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
              type: "number",
              variant: "outlined",
              label: "N\xFAmero da O.S.",
              value: numeroOsTrocaCliente,
              disabled: !isAuthorized || !isChangingClienteOS,
              InputLabelProps: {
                shrink: true
              },
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.numeroOs,
              onChange: function onChange(e) {
                return setNnumeroOsTrocaCliente(+e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchClienteInput__WEBPACK_IMPORTED_MODULE_9__["SearchClientInput"], {
              disabled: !isAuthorized || !isChangingClienteOS,
              ref: clienteRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 19
            }, this), !isChangingClienteOS ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiEdit"], {
              onClick: function onClick() {
                return setIsChangingClienteOS(true);
              },
              size: 25,
              style: {
                marginLeft: "8px"
              },
              color: "#e9bb1f"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 21
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiCheck"], {
              onClick: changeClienteOs,
              style: {
                marginLeft: "8px"
              },
              size: 25,
              color: "#28aa0f"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Lote RPS: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
              label: "Lote RPS",
              type: "number",
              variant: "outlined",
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.inputForm,
              disabled: !changeRps,
              value: nfseParams.LOTERPS,
              onChange: function onChange(event) {
                return setNfseParms(_objectSpread(_objectSpread({}, nfseParams), {}, {
                  LOTERPS: Number(event.target.value)
                }));
              },
              InputProps: {
                endAdornment: changeRps ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiCheck"], {
                  size: 30,
                  color: "#28aa0f",
                  onClick: handleSubmitNFSE
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 25
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiEdit"], {
                  size: 30,
                  color: "#e9bb1f",
                  onClick: function onClick() {
                    if (isAuthorized) {
                      setChangeRps(true);
                    }
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 25
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Lote NFS-e: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
              label: "Lote NFS-e",
              type: "number",
              variant: "outlined",
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.inputForm,
              disabled: !changeNfs,
              value: nfseParams.LOTENFSE,
              onChange: function onChange(event) {
                return setNfseParms(_objectSpread(_objectSpread({}, nfseParams), {}, {
                  LOTENFSE: Number(event.target.value)
                }));
              },
              InputProps: {
                endAdornment: changeNfs ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiCheck"], {
                  size: 30,
                  color: "#28aa0f",
                  onClick: handleSubmitNFSE
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 25
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiEdit"], {
                  size: 30,
                  color: "#e9bb1f",
                  onClick: function onClick() {
                    if (isAuthorized) {
                      setChangeNfs(true);
                    }
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 25
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 5
  }, this);
}

_s(ParametrosGerais, "GacSJFlAQsySOlEONgxeqVtXGuE=", false, function () {
  return [_contexts_auth__WEBPACK_IMPORTED_MODULE_10__["useAuth"], _contexts_api__WEBPACK_IMPORTED_MODULE_14__["useApi"]];
});

_c = ParametrosGerais;

var _c;

$RefreshReg$(_c, "ParametrosGerais");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJhcGkiLCJQYXJhbWV0cm9zR2VyYWlzIiwidXNlU3RhdGUiLCJuZnNlUGFyYW1zIiwic2V0TmZzZVBhcm1zIiwiQUxJUUlDTVMiLCJhbGlxSWNtcyIsInNldEFsaXFJY21zIiwiY2hhbmdlUnBzIiwic2V0Q2hhbmdlUnBzIiwiY2hhbmdlTmZzIiwic2V0Q2hhbmdlTmZzIiwiY2hhbmdlQWxpcUljbXMiLCJzZXRDaGFuZ2VBbGlxSWNtcyIsImlzQ2hhbmdpbmdDbGllbnRlT1MiLCJzZXRJc0NoYW5naW5nQ2xpZW50ZU9TIiwibnVtZXJvT3NUcm9jYUNsaWVudGUiLCJzZXRObnVtZXJvT3NUcm9jYUNsaWVudGUiLCJ1c2VBdXRoIiwidXNlciIsInVzZUFwaSIsImdldEFwaSIsImNsaWVudGVSZWYiLCJ1c2VSZWYiLCJpc0F1dGhvcml6ZWQiLCJwZXJtaXNzaW9ucyIsInBhcmFtZXRyb3NHZXJhaXMiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwicGFyYW1zTkZTZSIsImhhbmRsZVN1Ym1pdE5GU0UiLCJkYXRhT2JqIiwibG90ZU5GU0UiLCJMT1RFTkZTRSIsImxvdGVSUFMiLCJMT1RFUlBTIiwicG9zdCIsInN0YXR1cyIsIm5vdGlmeSIsImhhbmRsZVN1Ym1pdEFsaXFJY21zIiwiY2hhbmdlQ2xpZW50ZU9zIiwiY3VycmVudCIsImdldE15U3RhdGUiLCJvcyIsImNsaWVudGUiLCJDT0RDTElFTlRFIiwibWVzc2FnZSIsInN0eWxlcyIsIndyYXBwZXIiLCJwYXJhbVNlc3Npb24iLCJmb3JtRGl2IiwiaW5wdXRGb3JtIiwiZXZlbnQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVuZEFkb3JubWVudCIsImN1cnNvciIsImZvcm1QYXJtIiwic2hyaW5rIiwibnVt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QUFBO0FBQUE7QUFBQTtBQUFBO0FBcEtKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlLRDs7R0FsUXVCVixnQjtVQVlMaUIsdUQsRUFDRUUscUQ7OztLQWJHbkIsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFyYW1ldHJvcy1nZXJhaXMuYTJkZmRiZDMyZTdjZjZjMDgyMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWVsZCwgVG9vbHRpcCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmlDaGVjaywgRmlFZGl0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCB7IFNlYXJjaENsaWVudElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQ2xpZW50ZUlucHV0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXV0aFwiO1xyXG5cclxuaW1wb3J0IFNlbVBlcm1pc3NhbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW1QZXJtaXNzYW9cIjtcclxuaW1wb3J0IHsgU2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RvYXN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGdldEFjdGl2ZVRyYW5zYWN0aW9uIH0gZnJvbSBcIkBzZW50cnkvcmVhY3QvZGlzdC9wcm9maWxlclwiO1xyXG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXBpXCI7XHJcblxyXG5pbnRlcmZhY2UgSU5GU0Uge1xyXG4gIExPVEVORlNFOiBudW1iZXI7XHJcbiAgTE9URVJQUzogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUFsaXFJY21zIHtcclxuICBBTElRSUNNUzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBzaG93VG9hc3QgPSBuZXcgU2hvd1RvYXN0KCk7XHJcbmxldCBhcGk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbWV0cm9zR2VyYWlzKCkge1xyXG4gIGNvbnN0IFtuZnNlUGFyYW1zLCBzZXROZnNlUGFybXNdID0gdXNlU3RhdGU8SU5GU0U+KCk7XHJcbiAgY29uc3QgW2FsaXFJY21zLCBzZXRBbGlxSWNtc10gPSB1c2VTdGF0ZTxJQWxpcUljbXM+KHsgQUxJUUlDTVM6IDAgfSk7XHJcblxyXG4gIGNvbnN0IFtjaGFuZ2VScHMsIHNldENoYW5nZVJwc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2NoYW5nZU5mcywgc2V0Q2hhbmdlTmZzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbY2hhbmdlQWxpcUljbXMsIHNldENoYW5nZUFsaXFJY21zXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbaXNDaGFuZ2luZ0NsaWVudGVPUywgc2V0SXNDaGFuZ2luZ0NsaWVudGVPU10gPVxyXG4gICAgdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBbbnVtZXJvT3NUcm9jYUNsaWVudGUsIHNldE5udW1lcm9Pc1Ryb2NhQ2xpZW50ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGdldEFwaSB9ID0gdXNlQXBpKCk7XHJcblxyXG4gIGNvbnN0IGNsaWVudGVSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGlzQXV0aG9yaXplZCA9XHJcbiAgICB1c2VyPy5wZXJtaXNzaW9ucy5wYXJhbWV0cm9zR2VyYWlzICE9PSBcIlNPTUVOVEVfQ09OU1VMVEFcIjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFwaS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBhcGkgPSByZXNwb25zZTtcclxuXHJcbiAgICAgIGFwaS5nZXQoXCIvcGFyYW1ldHJvcy9uZnNlXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0TmZzZVBhcm1zKHJlc3BvbnNlLmRhdGEucGFyYW1zTkZTZVswXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRORlNFID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YU9iaiA9IHtcclxuICAgICAgbG90ZU5GU0U6IG5mc2VQYXJhbXMuTE9URU5GU0UsXHJcbiAgICAgIGxvdGVSUFM6IG5mc2VQYXJhbXMuTE9URVJQUyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9wYXJhbWV0cm9zL25mc2VcIiwgZGF0YU9iaik7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsdGVyYcOnw6NvIGVudmlhZGEgYW8gc2lzdGVtYVwiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWxnbyBkZXUgZXJyYWRvXCIsIFwiZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hhbmdlUnBzKGZhbHNlKTtcclxuICAgIHNldENoYW5nZU5mcyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0QWxpcUljbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL3BhcmFtZXRyb3MvYXR1YWxpemEtYWxpcVwiLCBhbGlxSWNtcyk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsw61xdW90YSBhbHRlcmFkYSBjb20gc3VjZXNzb1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWxnbyBkZXUgZXJyYWRvXCIsIFwiZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hhbmdlQWxpcUljbXMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNsaWVudGVPcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgIW51bWVyb09zVHJvY2FDbGllbnRlIHx8XHJcbiAgICAgIG51bWVyb09zVHJvY2FDbGllbnRlIDw9IDAgfHxcclxuICAgICAgIWNsaWVudGVSZWYuY3VycmVudD8uZ2V0TXlTdGF0ZSgpXHJcbiAgICApIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcclxuICAgICAgICBcIlByZWVuY2hhIGNvcnJldGFtZW50ZSBvIG7Dum1lcm8gZGEgTy5TLiBlIG8gbm92byBjbGllbnRlXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvcGFyYW1ldHJvcy9hdHVhbGl6YS1jbGllbnRlLW9zXCIsIHtcclxuICAgICAgICBvczogbnVtZXJvT3NUcm9jYUNsaWVudGUsXHJcbiAgICAgICAgY2xpZW50ZTogY2xpZW50ZVJlZi5jdXJyZW50Py5nZXRNeVN0YXRlKCkuQ09EQ0xJRU5URSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJDbGllbnRlIGFsdGVyYWRvIGNvbSBzdWNlc3NvXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWxnbyBkZXUgZXJyYWRvXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIFwiZXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5wYXJhbWV0cm9zR2VyYWlzICE9PSBcIlNFTV9BQ0VTU09cIiA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgyPlBhcsOibWV0cm9zIEdlcmFpczwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmFtU2Vzc2lvbn0+XHJcbiAgICAgICAgICAgIDxoMj5GaXNjYWw8L2gyPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCIwMDBcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+QXR1YWxpemFyIEFsw61xdW90YSBJQ01TOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWxpcS4gSUNNU1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNoYW5nZUFsaXFJY21zfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthbGlxSWNtcy5BTElRSUNNU31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGlxSWNtcyh7IEFMSVFJQ01TOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZUFsaXFJY21zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzI4YWEwZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdEFsaXFJY21zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlQWxpcUljbXModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhbVNlc3Npb259PlxyXG4gICAgICAgICAgICA8aDI+TkZTLWUgLyBPLlMuPC9oMj5cclxuICAgICAgICAgICAge25mc2VQYXJhbXMgJiYgKFxyXG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1QYXJtfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkFsdGVyYXIgY2xpZW50ZSBkYSBPLlMuOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOw7ptZXJvIGRhIE8uUy5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtudW1lcm9Pc1Ryb2NhQ2xpZW50ZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZCB8fCAhaXNDaGFuZ2luZ0NsaWVudGVPU31cclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyb09zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm51bWVyb09zVHJvY2FDbGllbnRlKCtlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWFyY2hDbGllbnRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkIHx8ICFpc0NoYW5naW5nQ2xpZW50ZU9TfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17Y2xpZW50ZVJlZn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgeyFpc0NoYW5naW5nQ2xpZW50ZU9TID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGaUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ2hhbmdpbmdDbGllbnRlT1ModHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U5YmIxZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlQ2xpZW50ZU9zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI4cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkxvdGUgUlBTOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxvdGUgUlBTXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNoYW5nZVJwc31cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmZzZVBhcmFtcy5MT1RFUlBTfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXROZnNlUGFybXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5uZnNlUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMT1RFUlBTOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogY2hhbmdlUnBzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzI4YWEwZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0TkZTRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlUnBzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkxvdGUgTkZTLWU6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTG90ZSBORlMtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjaGFuZ2VOZnN9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25mc2VQYXJhbXMuTE9URU5GU0V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIHNldE5mc2VQYXJtcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5mc2VQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExPVEVORlNFOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogY2hhbmdlTmZzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzI4YWEwZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0TkZTRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlTmZzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxTZW1QZXJtaXNzYW8gLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==