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
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Atualizar Al\xEDquota ICMS: "
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
                    cursor: pointer
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
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
                  lineNumber: 146,
                  columnNumber: 23
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
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
          lineNumber: 164,
          columnNumber: 13
        }, this), nfseParams && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formParm,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Alterar cliente da O.S.:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
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
              lineNumber: 169,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchClienteInput__WEBPACK_IMPORTED_MODULE_9__["SearchClientInput"], {
              disabled: !isAuthorized || !isChangingClienteOS,
              ref: clienteRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
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
              lineNumber: 186,
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
              lineNumber: 193,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Lote RPS: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
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
                  lineNumber: 218,
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
                  lineNumber: 224,
                  columnNumber: 25
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Lote NFS-e: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
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
                  lineNumber: 254,
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
                  lineNumber: 260,
                  columnNumber: 25
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJhcGkiLCJQYXJhbWV0cm9zR2VyYWlzIiwidXNlU3RhdGUiLCJuZnNlUGFyYW1zIiwic2V0TmZzZVBhcm1zIiwiQUxJUUlDTVMiLCJhbGlxSWNtcyIsInNldEFsaXFJY21zIiwiY2hhbmdlUnBzIiwic2V0Q2hhbmdlUnBzIiwiY2hhbmdlTmZzIiwic2V0Q2hhbmdlTmZzIiwiY2hhbmdlQWxpcUljbXMiLCJzZXRDaGFuZ2VBbGlxSWNtcyIsImlzQ2hhbmdpbmdDbGllbnRlT1MiLCJzZXRJc0NoYW5naW5nQ2xpZW50ZU9TIiwibnVtZXJvT3NUcm9jYUNsaWVudGUiLCJzZXRObnVtZXJvT3NUcm9jYUNsaWVudGUiLCJ1c2VBdXRoIiwidXNlciIsInVzZUFwaSIsImdldEFwaSIsImNsaWVudGVSZWYiLCJ1c2VSZWYiLCJpc0F1dGhvcml6ZWQiLCJwZXJtaXNzaW9ucyIsInBhcmFtZXRyb3NHZXJhaXMiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwicGFyYW1zTkZTZSIsImhhbmRsZVN1Ym1pdE5GU0UiLCJkYXRhT2JqIiwibG90ZU5GU0UiLCJMT1RFTkZTRSIsImxvdGVSUFMiLCJMT1RFUlBTIiwicG9zdCIsInN0YXR1cyIsIm5vdGlmeSIsImhhbmRsZVN1Ym1pdEFsaXFJY21zIiwiY2hhbmdlQ2xpZW50ZU9zIiwiY3VycmVudCIsImdldE15U3RhdGUiLCJvcyIsImNsaWVudGUiLCJDT0RDTElFTlRFIiwibWVzc2FnZSIsInN0eWxlcyIsIndyYXBwZXIiLCJwYXJhbVNlc3Npb24iLCJmb3JtRGl2IiwiaW5wdXRGb3JtIiwiZXZlbnQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVuZEFkb3JubWVudCIsImN1cnNvciIsInBvaW50ZXIiLCJmb3JtUGFybSIsInNo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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzLjQ3MTA3ODgzNDcxYzA4YTE1YzQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZpQ2hlY2ssIEZpRWRpdCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hDbGllbnRJbnB1dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlYXJjaENsaWVudGVJbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGhcIjtcclxuXHJcbmltcG9ydCBTZW1QZXJtaXNzYW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VtUGVybWlzc2FvXCI7XHJcbmltcG9ydCB7IFNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90b2FzdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBnZXRBY3RpdmVUcmFuc2FjdGlvbiB9IGZyb20gXCJAc2VudHJ5L3JlYWN0L2Rpc3QvcHJvZmlsZXJcIjtcclxuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2FwaVwiO1xyXG5cclxuaW50ZXJmYWNlIElORlNFIHtcclxuICBMT1RFTkZTRTogbnVtYmVyO1xyXG4gIExPVEVSUFM6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElBbGlxSWNtcyB7XHJcbiAgQUxJUUlDTVM6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3Qgc2hvd1RvYXN0ID0gbmV3IFNob3dUb2FzdCgpO1xyXG5sZXQgYXBpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFyYW1ldHJvc0dlcmFpcygpIHtcclxuICBjb25zdCBbbmZzZVBhcmFtcywgc2V0TmZzZVBhcm1zXSA9IHVzZVN0YXRlPElORlNFPigpO1xyXG4gIGNvbnN0IFthbGlxSWNtcywgc2V0QWxpcUljbXNdID0gdXNlU3RhdGU8SUFsaXFJY21zPih7IEFMSVFJQ01TOiAwIH0pO1xyXG5cclxuICBjb25zdCBbY2hhbmdlUnBzLCBzZXRDaGFuZ2VScHNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFuZ2VOZnMsIHNldENoYW5nZU5mc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2NoYW5nZUFsaXFJY21zLCBzZXRDaGFuZ2VBbGlxSWNtc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzQ2hhbmdpbmdDbGllbnRlT1MsIHNldElzQ2hhbmdpbmdDbGllbnRlT1NdID1cclxuICAgIHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW251bWVyb09zVHJvY2FDbGllbnRlLCBzZXRObnVtZXJvT3NUcm9jYUNsaWVudGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBnZXRBcGkgfSA9IHVzZUFwaSgpO1xyXG5cclxuICBjb25zdCBjbGllbnRlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBpc0F1dGhvcml6ZWQgPVxyXG4gICAgdXNlcj8ucGVybWlzc2lvbnMucGFyYW1ldHJvc0dlcmFpcyAhPT0gXCJTT01FTlRFX0NPTlNVTFRBXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcGkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgYXBpID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICBhcGkuZ2V0KFwiL3BhcmFtZXRyb3MvbmZzZVwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldE5mc2VQYXJtcyhyZXNwb25zZS5kYXRhLnBhcmFtc05GU2VbMF0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0TkZTRSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGFPYmogPSB7XHJcbiAgICAgIGxvdGVORlNFOiBuZnNlUGFyYW1zLkxPVEVORlNFLFxyXG4gICAgICBsb3RlUlBTOiBuZnNlUGFyYW1zLkxPVEVSUFMsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvcGFyYW1ldHJvcy9uZnNlXCIsIGRhdGFPYmopO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbHRlcmHDp8OjbyBlbnZpYWRhIGFvIHNpc3RlbWFcIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoYW5nZVJwcyhmYWxzZSk7XHJcbiAgICBzZXRDaGFuZ2VOZnMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEFsaXFJY21zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9wYXJhbWV0cm9zL2F0dWFsaXphLWFsaXFcIiwgYWxpcUljbXMpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbMOtcXVvdGEgYWx0ZXJhZGEgY29tIHN1Y2Vzc29cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoYW5nZUFsaXFJY21zKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDbGllbnRlT3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFudW1lcm9Pc1Ryb2NhQ2xpZW50ZSB8fFxyXG4gICAgICBudW1lcm9Pc1Ryb2NhQ2xpZW50ZSA8PSAwIHx8XHJcbiAgICAgICFjbGllbnRlUmVmLmN1cnJlbnQ/LmdldE15U3RhdGUoKVxyXG4gICAgKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXHJcbiAgICAgICAgXCJQcmVlbmNoYSBjb3JyZXRhbWVudGUgbyBuw7ptZXJvIGRhIE8uUy4gZSBvIG5vdm8gY2xpZW50ZVwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL3BhcmFtZXRyb3MvYXR1YWxpemEtY2xpZW50ZS1vc1wiLCB7XHJcbiAgICAgICAgb3M6IG51bWVyb09zVHJvY2FDbGllbnRlLFxyXG4gICAgICAgIGNsaWVudGU6IGNsaWVudGVSZWYuY3VycmVudD8uZ2V0TXlTdGF0ZSgpLkNPRENMSUVOVEUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQ2xpZW50ZSBhbHRlcmFkbyBjb20gc3VjZXNzb1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICB7dXNlcj8ucGVybWlzc2lvbnMucGFyYW1ldHJvc0dlcmFpcyAhPT0gXCJTRU1fQUNFU1NPXCIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMj5QYXLDom1ldHJvcyBHZXJhaXM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhbVNlc3Npb259PlxyXG4gICAgICAgICAgICA8aDI+RmlzY2FsPC9oMj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkF0dWFsaXphciBBbMOtcXVvdGEgSUNNUzogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkFsaXEuIElDTVNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjaGFuZ2VBbGlxSWNtc31cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YWxpcUljbXMuQUxJUUlDTVN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWxpcUljbXMoeyBBTElRSUNNUzogTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiBjaGFuZ2VBbGlxSWNtcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxGaUNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXRBbGlxSWNtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBwb2ludGVyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlQWxpcUljbXModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyYW1TZXNzaW9ufT5cclxuICAgICAgICAgICAgPGgyPk5GUy1lIC8gTy5TLjwvaDI+XHJcbiAgICAgICAgICAgIHtuZnNlUGFyYW1zICYmIChcclxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtUGFybX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5BbHRlcmFyIGNsaWVudGUgZGEgTy5TLjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVybyBkYSBPLlMuXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVtZXJvT3NUcm9jYUNsaWVudGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWQgfHwgIWlzQ2hhbmdpbmdDbGllbnRlT1N9XHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5udW1lcm9Pc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5udW1lcm9Pc1Ryb2NhQ2xpZW50ZSgrZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8U2VhcmNoQ2xpZW50SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZCB8fCAhaXNDaGFuZ2luZ0NsaWVudGVPU31cclxuICAgICAgICAgICAgICAgICAgICByZWY9e2NsaWVudGVSZWZ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHshaXNDaGFuZ2luZ0NsaWVudGVPUyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0NoYW5naW5nQ2xpZW50ZU9TKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjhweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NoYW5nZUNsaWVudGVPc31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezI1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMjhhYTBmXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Mb3RlIFJQUzogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMb3RlIFJQU1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjaGFuZ2VScHN9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25mc2VQYXJhbXMuTE9URVJQU31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0TmZzZVBhcm1zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmZzZVBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTE9URVJQUzogTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZVJwcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdE5GU0V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTliYjFmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZVJwcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Mb3RlIE5GUy1lOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxvdGUgTkZTLWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2hhbmdlTmZzfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZnNlUGFyYW1zLkxPVEVORlNFfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXROZnNlUGFybXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5uZnNlUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMT1RFTkZTRTogTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZU5mcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdE5GU0V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTliYjFmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZU5mcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U2VtUGVybWlzc2FvIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=