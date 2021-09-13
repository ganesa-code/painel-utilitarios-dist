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
      changeClienteOS = _useState6[0],
      setChangeClienteOS = _useState6[1];

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
        lineNumber: 120,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.paramSession,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Fiscal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Atualizar Al\xEDquota ICMS: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
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
                  onClick: handleSubmitAliqIcms
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
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
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 23
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.paramSession,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "NFS-e / O.S."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }, this), nfseParams && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formParm,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Alterar cliente da O.S.:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
              type: "number",
              variant: "outlined",
              label: "N\xFAmero da O.S.",
              value: numeroOsTrocaCliente,
              disabled: !isAuthorized,
              InputLabelProps: {
                shrink: true
              },
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.numeroOs,
              onChange: function onChange(e) {
                return setNnumeroOsTrocaCliente(+e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchClienteInput__WEBPACK_IMPORTED_MODULE_9__["SearchClientInput"], {
              disabled: !isAuthorized,
              ref: clienteRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 19
            }, this), set]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Lote RPS: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
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
                  lineNumber: 204,
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
                  lineNumber: 210,
                  columnNumber: 25
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Lote NFS-e: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
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
                  lineNumber: 240,
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
                  lineNumber: 246,
                  columnNumber: 25
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, this);
}

_s(ParametrosGerais, "ijH30BUd2gGdTeX8F4Sg6saieMc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJhcGkiLCJQYXJhbWV0cm9zR2VyYWlzIiwidXNlU3RhdGUiLCJuZnNlUGFyYW1zIiwic2V0TmZzZVBhcm1zIiwiQUxJUUlDTVMiLCJhbGlxSWNtcyIsInNldEFsaXFJY21zIiwiY2hhbmdlUnBzIiwic2V0Q2hhbmdlUnBzIiwiY2hhbmdlTmZzIiwic2V0Q2hhbmdlTmZzIiwiY2hhbmdlQWxpcUljbXMiLCJzZXRDaGFuZ2VBbGlxSWNtcyIsImNoYW5nZUNsaWVudGVPUyIsInNldENoYW5nZUNsaWVudGVPUyIsIm51bWVyb09zVHJvY2FDbGllbnRlIiwic2V0Tm51bWVyb09zVHJvY2FDbGllbnRlIiwidXNlQXV0aCIsInVzZXIiLCJ1c2VBcGkiLCJnZXRBcGkiLCJjbGllbnRlUmVmIiwidXNlUmVmIiwiaXNBdXRob3JpemVkIiwicGVybWlzc2lvbnMiLCJwYXJhbWV0cm9zR2VyYWlzIiwidXNlRWZmZWN0IiwidGhlbiIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsInBhcmFtc05GU2UiLCJoYW5kbGVTdWJtaXRORlNFIiwiZGF0YU9iaiIsImxvdGVORlNFIiwiTE9URU5GU0UiLCJsb3RlUlBTIiwiTE9URVJQUyIsInBvc3QiLCJzdGF0dXMiLCJub3RpZnkiLCJoYW5kbGVTdWJtaXRBbGlxSWNtcyIsImNoYW5nZUNsaWVudGVPcyIsImN1cnJlbnQiLCJnZXRNeVN0YXRlIiwib3MiLCJjbGllbnRlIiwiQ09EQ0xJRU5URSIsIm1lc3NhZ2UiLCJzdHlsZXMiLCJ3cmFwcGVyIiwicGFyYW1TZXNzaW9uIiwiZm9ybURpdiIsImlucHV0Rm9ybSIsImV2ZW50IiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJlbmRBZG9ybm1lbnQiLCJmb3JtUGFybSIsInNocmluayIsIm51bWVyb09zIiwiZSIsInNldCJd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LHVCQUFLLEVBQUMsU0FGUjtBQUdFLHlCQUFPLEVBQUUsbUJBQU07QUFDYix3QkFBSVQsWUFBSixFQUFrQjtBQUNoQmIsa0NBQVksQ0FBQyxJQUFELENBQVo7QUFDRDtBQUNGO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJRO0FBYmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBM0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQ0YsZUErSUUscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9JRjtBQUFBLG9CQURELGdCQW1KQyxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcEpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlKRDs7R0FqUHVCVixnQjtVQVdMaUIsdUQsRUFDRUUscUQ7OztLQVpHbkIsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFyYW1ldHJvcy1nZXJhaXMuYWZmYWY3MDllYzM0N2YyNmM3YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmlDaGVjaywgRmlFZGl0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCB7IFNlYXJjaENsaWVudElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQ2xpZW50ZUlucHV0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXV0aFwiO1xyXG5cclxuaW1wb3J0IFNlbVBlcm1pc3NhbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW1QZXJtaXNzYW9cIjtcclxuaW1wb3J0IHsgU2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RvYXN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGdldEFjdGl2ZVRyYW5zYWN0aW9uIH0gZnJvbSBcIkBzZW50cnkvcmVhY3QvZGlzdC9wcm9maWxlclwiO1xyXG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXBpXCI7XHJcblxyXG5pbnRlcmZhY2UgSU5GU0Uge1xyXG4gIExPVEVORlNFOiBudW1iZXI7XHJcbiAgTE9URVJQUzogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUFsaXFJY21zIHtcclxuICBBTElRSUNNUzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBzaG93VG9hc3QgPSBuZXcgU2hvd1RvYXN0KCk7XHJcbmxldCBhcGk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbWV0cm9zR2VyYWlzKCkge1xyXG4gIGNvbnN0IFtuZnNlUGFyYW1zLCBzZXROZnNlUGFybXNdID0gdXNlU3RhdGU8SU5GU0U+KCk7XHJcbiAgY29uc3QgW2FsaXFJY21zLCBzZXRBbGlxSWNtc10gPSB1c2VTdGF0ZTxJQWxpcUljbXM+KHsgQUxJUUlDTVM6IDAgfSk7XHJcblxyXG4gIGNvbnN0IFtjaGFuZ2VScHMsIHNldENoYW5nZVJwc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2NoYW5nZU5mcywgc2V0Q2hhbmdlTmZzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbY2hhbmdlQWxpcUljbXMsIHNldENoYW5nZUFsaXFJY21zXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbY2hhbmdlQ2xpZW50ZU9TLCBzZXRDaGFuZ2VDbGllbnRlT1NdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBbbnVtZXJvT3NUcm9jYUNsaWVudGUsIHNldE5udW1lcm9Pc1Ryb2NhQ2xpZW50ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGdldEFwaSB9ID0gdXNlQXBpKCk7XHJcblxyXG4gIGNvbnN0IGNsaWVudGVSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGlzQXV0aG9yaXplZCA9XHJcbiAgICB1c2VyPy5wZXJtaXNzaW9ucy5wYXJhbWV0cm9zR2VyYWlzICE9PSBcIlNPTUVOVEVfQ09OU1VMVEFcIjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFwaS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBhcGkgPSByZXNwb25zZTtcclxuXHJcbiAgICAgIGFwaS5nZXQoXCIvcGFyYW1ldHJvcy9uZnNlXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0TmZzZVBhcm1zKHJlc3BvbnNlLmRhdGEucGFyYW1zTkZTZVswXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRORlNFID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YU9iaiA9IHtcclxuICAgICAgbG90ZU5GU0U6IG5mc2VQYXJhbXMuTE9URU5GU0UsXHJcbiAgICAgIGxvdGVSUFM6IG5mc2VQYXJhbXMuTE9URVJQUyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9wYXJhbWV0cm9zL25mc2VcIiwgZGF0YU9iaik7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsdGVyYcOnw6NvIGVudmlhZGEgYW8gc2lzdGVtYVwiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWxnbyBkZXUgZXJyYWRvXCIsIFwiZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hhbmdlUnBzKGZhbHNlKTtcclxuICAgIHNldENoYW5nZU5mcyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0QWxpcUljbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL3BhcmFtZXRyb3MvYXR1YWxpemEtYWxpcVwiLCBhbGlxSWNtcyk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsw61xdW90YSBhbHRlcmFkYSBjb20gc3VjZXNzb1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWxnbyBkZXUgZXJyYWRvXCIsIFwiZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hhbmdlQWxpcUljbXMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNsaWVudGVPcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgIW51bWVyb09zVHJvY2FDbGllbnRlIHx8XHJcbiAgICAgIG51bWVyb09zVHJvY2FDbGllbnRlIDw9IDAgfHxcclxuICAgICAgIWNsaWVudGVSZWYuY3VycmVudD8uZ2V0TXlTdGF0ZSgpXHJcbiAgICApIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcclxuICAgICAgICBcIlByZWVuY2hhIGNvcnJldGFtZW50ZSBvIG7Dum1lcm8gZGEgTy5TLiBlIG8gbm92byBjbGllbnRlXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvcGFyYW1ldHJvcy9hdHVhbGl6YS1jbGllbnRlLW9zXCIsIHtcclxuICAgICAgICBvczogbnVtZXJvT3NUcm9jYUNsaWVudGUsXHJcbiAgICAgICAgY2xpZW50ZTogY2xpZW50ZVJlZi5jdXJyZW50Py5nZXRNeVN0YXRlKCkuQ09EQ0xJRU5URSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJDbGllbnRlIGFsdGVyYWRvIGNvbSBzdWNlc3NvXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWxnbyBkZXUgZXJyYWRvXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIFwiZXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5wYXJhbWV0cm9zR2VyYWlzICE9PSBcIlNFTV9BQ0VTU09cIiA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgyPlBhcsOibWV0cm9zIEdlcmFpczwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmFtU2Vzc2lvbn0+XHJcbiAgICAgICAgICAgIDxoMj5GaXNjYWw8L2gyPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QXR1YWxpemFyIEFsw61xdW90YSBJQ01TOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWxpcS4gSUNNU1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNoYW5nZUFsaXFJY21zfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthbGlxSWNtcy5BTElRSUNNU31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGlxSWNtcyh7IEFMSVFJQ01TOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZUFsaXFJY21zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzI4YWEwZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdEFsaXFJY21zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTliYjFmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZUFsaXFJY21zKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmFtU2Vzc2lvbn0+XHJcbiAgICAgICAgICAgIDxoMj5ORlMtZSAvIE8uUy48L2gyPlxyXG4gICAgICAgICAgICB7bmZzZVBhcmFtcyAmJiAoXHJcbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybVBhcm19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+QWx0ZXJhciBjbGllbnRlIGRhIE8uUy46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk7Dum1lcm8gZGEgTy5TLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWVyb09zVHJvY2FDbGllbnRlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkfVxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJvT3N9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRObnVtZXJvT3NUcm9jYUNsaWVudGUoK2UudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFNlYXJjaENsaWVudElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtjbGllbnRlUmVmfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+TG90ZSBSUFM6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTG90ZSBSUFNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2hhbmdlUnBzfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZnNlUGFyYW1zLkxPVEVSUFN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIHNldE5mc2VQYXJtcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5mc2VQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExPVEVSUFM6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiBjaGFuZ2VScHMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaUNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMjhhYTBmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXRORlNFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U5YmIxZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGFuZ2VScHModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+TG90ZSBORlMtZTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMb3RlIE5GUy1lXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNoYW5nZU5mc31cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmZzZVBhcmFtcy5MT1RFTkZTRX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0TmZzZVBhcm1zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmZzZVBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTE9URU5GU0U6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiBjaGFuZ2VOZnMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaUNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMjhhYTBmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXRORlNFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U5YmIxZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGFuZ2VOZnModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFNlbVBlcm1pc3NhbyAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9