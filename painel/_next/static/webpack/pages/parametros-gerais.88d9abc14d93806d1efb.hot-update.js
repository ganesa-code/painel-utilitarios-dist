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
                  onClick: handleSubmitAliqIcms
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
                  lineNumber: 145,
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
          lineNumber: 163,
          columnNumber: 13
        }, this), nfseParams && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formParm,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Alterar cliente da O.S.:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
              type: "number",
              variant: "outlined",
              label: "N\xFAmero da O.S.",
              value: numeroOsTrocaCliente,
              disabled: !isAuthorized || isChangingClienteOS,
              InputLabelProps: {
                shrink: true
              },
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.numeroOs,
              onChange: function onChange(e) {
                return setNnumeroOsTrocaCliente(+e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchClienteInput__WEBPACK_IMPORTED_MODULE_9__["SearchClientInput"], {
              disabled: !isAuthorized || isChangingClienteOS,
              ref: clienteRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 19
            }, this), isChangingClienteOS ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiEdit"], {
              onClick: function onClick() {
                return setIsChangingClienteOS(true);
              },
              size: 30,
              style: {
                marginLeft: "8px"
              },
              color: "#e9bb1f"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 21
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiCheck"], {
              onClick: changeClienteOs,
              style: {
                marginLeft: "8px"
              },
              size: 30,
              color: "#28aa0f"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Lote RPS: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
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
                  lineNumber: 217,
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
                  lineNumber: 223,
                  columnNumber: 25
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Lote NFS-e: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
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
                  lineNumber: 253,
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
                  lineNumber: 259,
                  columnNumber: 25
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 278,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJhcGkiLCJQYXJhbWV0cm9zR2VyYWlzIiwidXNlU3RhdGUiLCJuZnNlUGFyYW1zIiwic2V0TmZzZVBhcm1zIiwiQUxJUUlDTVMiLCJhbGlxSWNtcyIsInNldEFsaXFJY21zIiwiY2hhbmdlUnBzIiwic2V0Q2hhbmdlUnBzIiwiY2hhbmdlTmZzIiwic2V0Q2hhbmdlTmZzIiwiY2hhbmdlQWxpcUljbXMiLCJzZXRDaGFuZ2VBbGlxSWNtcyIsImlzQ2hhbmdpbmdDbGllbnRlT1MiLCJzZXRJc0NoYW5naW5nQ2xpZW50ZU9TIiwibnVtZXJvT3NUcm9jYUNsaWVudGUiLCJzZXRObnVtZXJvT3NUcm9jYUNsaWVudGUiLCJ1c2VBdXRoIiwidXNlciIsInVzZUFwaSIsImdldEFwaSIsImNsaWVudGVSZWYiLCJ1c2VSZWYiLCJpc0F1dGhvcml6ZWQiLCJwZXJtaXNzaW9ucyIsInBhcmFtZXRyb3NHZXJhaXMiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwicGFyYW1zTkZTZSIsImhhbmRsZVN1Ym1pdE5GU0UiLCJkYXRhT2JqIiwibG90ZU5GU0UiLCJMT1RFTkZTRSIsImxvdGVSUFMiLCJMT1RFUlBTIiwicG9zdCIsInN0YXR1cyIsIm5vdGlmeSIsImhhbmRsZVN1Ym1pdEFsaXFJY21zIiwiY2hhbmdlQ2xpZW50ZU9zIiwiY3VycmVudCIsImdldE15U3RhdGUiLCJvcyIsImNsaWVudGUiLCJDT0RDTElFTlRFIiwibWVzc2FnZSIsInN0eWxlcyIsIndyYXBwZXIiLCJwYXJhbVNlc3Npb24iLCJmb3JtRGl2IiwiaW5wdXRGb3JtIiwiZXZlbnQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVuZEFkb3JubWVudCIsImZvcm1QYXJtIiwic2hyaW5rIiwibnVtZXJvT3MiLCJl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LHNCQUFRLEVBQUUsQ0FBQzVDLFNBTGI7QUFNRSxtQkFBSyxFQUFFUCxVQUFVLENBQUNpQyxRQU5wQjtBQU9FLHNCQUFRLEVBQUUsa0JBQUNtQixLQUFEO0FBQUEsdUJBQ1JuRCxZQUFZLGlDQUNQRCxVQURPO0FBRVZpQywwQkFBUSxFQUFFb0IsTUFBTSxDQUFDRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBZDtBQUZOLG1CQURKO0FBQUEsZUFQWjtBQWFFLHdCQUFVLEVBQUU7QUFDVkMsNEJBQVksRUFBRWpELFNBQVMsZ0JBQ3JCLHFFQUFDLHNEQUFEO0FBQ0Usc0JBQUksRUFBRSxFQURSO0FBRUUsdUJBQUssRUFBQyxTQUZSO0FBR0UseUJBQU8sRUFBRXVCO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEcUIsZ0JBT3JCLHFFQUFDLHFEQUFEO0FBQ0Usc0JBQUksRUFBRSxFQURSO0FBRUUsdUJBQUssRUFBQyxTQUZSO0FBR0UseUJBQU8sRUFBRSxtQkFBTTtBQUNiLHdCQUFJVCxZQUFKLEVBQWtCO0FBQ2hCYixrQ0FBWSxDQUFDLElBQUQsQ0FBWjtBQUNEO0FBQ0Y7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUlE7QUFiZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF2RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFDRixlQTJKRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0pGO0FBQUEsb0JBREQsZ0JBK0pDLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFoS0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUtEOztHQTlQdUJWLGdCO1VBWUxpQix1RCxFQUNFRSxxRDs7O0tBYkduQixnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXJhbWV0cm9zLWdlcmFpcy44OGQ5YWJjMTRkOTM4MDZkMWVmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGaUNoZWNrLCBGaUVkaXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IHsgU2VhcmNoQ2xpZW50SW5wdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZWFyY2hDbGllbnRlSW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hdXRoXCI7XHJcblxyXG5pbXBvcnQgU2VtUGVybWlzc2FvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlbVBlcm1pc3Nhb1wiO1xyXG5pbXBvcnQgeyBTaG93VG9hc3QgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdG9hc3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgZ2V0QWN0aXZlVHJhbnNhY3Rpb24gfSBmcm9tIFwiQHNlbnRyeS9yZWFjdC9kaXN0L3Byb2ZpbGVyXCI7XHJcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hcGlcIjtcclxuXHJcbmludGVyZmFjZSBJTkZTRSB7XHJcbiAgTE9URU5GU0U6IG51bWJlcjtcclxuICBMT1RFUlBTOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJQWxpcUljbXMge1xyXG4gIEFMSVFJQ01TOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IHNob3dUb2FzdCA9IG5ldyBTaG93VG9hc3QoKTtcclxubGV0IGFwaTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcmFtZXRyb3NHZXJhaXMoKSB7XHJcbiAgY29uc3QgW25mc2VQYXJhbXMsIHNldE5mc2VQYXJtc10gPSB1c2VTdGF0ZTxJTkZTRT4oKTtcclxuICBjb25zdCBbYWxpcUljbXMsIHNldEFsaXFJY21zXSA9IHVzZVN0YXRlPElBbGlxSWNtcz4oeyBBTElRSUNNUzogMCB9KTtcclxuXHJcbiAgY29uc3QgW2NoYW5nZVJwcywgc2V0Q2hhbmdlUnBzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbY2hhbmdlTmZzLCBzZXRDaGFuZ2VOZnNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFuZ2VBbGlxSWNtcywgc2V0Q2hhbmdlQWxpcUljbXNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0NoYW5naW5nQ2xpZW50ZU9TLCBzZXRJc0NoYW5naW5nQ2xpZW50ZU9TXSA9XHJcbiAgICB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtudW1lcm9Pc1Ryb2NhQ2xpZW50ZSwgc2V0Tm51bWVyb09zVHJvY2FDbGllbnRlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZ2V0QXBpIH0gPSB1c2VBcGkoKTtcclxuXHJcbiAgY29uc3QgY2xpZW50ZVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgaXNBdXRob3JpemVkID1cclxuICAgIHVzZXI/LnBlcm1pc3Npb25zLnBhcmFtZXRyb3NHZXJhaXMgIT09IFwiU09NRU5URV9DT05TVUxUQVwiO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXBpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGFwaSA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgYXBpLmdldChcIi9wYXJhbWV0cm9zL25mc2VcIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXROZnNlUGFybXMocmVzcG9uc2UuZGF0YS5wYXJhbXNORlNlWzBdKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdE5GU0UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhT2JqID0ge1xyXG4gICAgICBsb3RlTkZTRTogbmZzZVBhcmFtcy5MT1RFTkZTRSxcclxuICAgICAgbG90ZVJQUzogbmZzZVBhcmFtcy5MT1RFUlBTLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL3BhcmFtZXRyb3MvbmZzZVwiLCBkYXRhT2JqKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWx0ZXJhw6fDo28gZW52aWFkYSBhbyBzaXN0ZW1hXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbGdvIGRldSBlcnJhZG9cIiwgXCJlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaGFuZ2VScHMoZmFsc2UpO1xyXG4gICAgc2V0Q2hhbmdlTmZzKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRBbGlxSWNtcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvcGFyYW1ldHJvcy9hdHVhbGl6YS1hbGlxXCIsIGFsaXFJY21zKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWzDrXF1b3RhIGFsdGVyYWRhIGNvbSBzdWNlc3NvXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbGdvIGRldSBlcnJhZG9cIiwgXCJlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaGFuZ2VBbGlxSWNtcyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ2xpZW50ZU9zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhbnVtZXJvT3NUcm9jYUNsaWVudGUgfHxcclxuICAgICAgbnVtZXJvT3NUcm9jYUNsaWVudGUgPD0gMCB8fFxyXG4gICAgICAhY2xpZW50ZVJlZi5jdXJyZW50Py5nZXRNeVN0YXRlKClcclxuICAgICkge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFxyXG4gICAgICAgIFwiUHJlZW5jaGEgY29ycmV0YW1lbnRlIG8gbsO6bWVybyBkYSBPLlMuIGUgbyBub3ZvIGNsaWVudGVcIixcclxuICAgICAgICBcIndhcm5pbmdcIlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9wYXJhbWV0cm9zL2F0dWFsaXphLWNsaWVudGUtb3NcIiwge1xyXG4gICAgICAgIG9zOiBudW1lcm9Pc1Ryb2NhQ2xpZW50ZSxcclxuICAgICAgICBjbGllbnRlOiBjbGllbnRlUmVmLmN1cnJlbnQ/LmdldE15U3RhdGUoKS5DT0RDTElFTlRFLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkNsaWVudGUgYWx0ZXJhZG8gY29tIHN1Y2Vzc29cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbGdvIGRldSBlcnJhZG9cIiwgXCJlcnJvclwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgXCJlcnJvclwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAge3VzZXI/LnBlcm1pc3Npb25zLnBhcmFtZXRyb3NHZXJhaXMgIT09IFwiU0VNX0FDRVNTT1wiID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDI+UGFyw6JtZXRyb3MgR2VyYWlzPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyYW1TZXNzaW9ufT5cclxuICAgICAgICAgICAgPGgyPkZpc2NhbDwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5BdHVhbGl6YXIgQWzDrXF1b3RhIElDTVM6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbGlxLiBJQ01TXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2hhbmdlQWxpcUljbXN9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsaXFJY21zLkFMSVFJQ01TfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNldEFsaXFJY21zKHsgQUxJUUlDTVM6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogY2hhbmdlQWxpcUljbXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMjhhYTBmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0QWxpcUljbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlQWxpcUljbXModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyYW1TZXNzaW9ufT5cclxuICAgICAgICAgICAgPGgyPk5GUy1lIC8gTy5TLjwvaDI+XHJcbiAgICAgICAgICAgIHtuZnNlUGFyYW1zICYmIChcclxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtUGFybX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5BbHRlcmFyIGNsaWVudGUgZGEgTy5TLjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVybyBkYSBPLlMuXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVtZXJvT3NUcm9jYUNsaWVudGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWQgfHwgaXNDaGFuZ2luZ0NsaWVudGVPU31cclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyb09zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm51bWVyb09zVHJvY2FDbGllbnRlKCtlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWFyY2hDbGllbnRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkIHx8IGlzQ2hhbmdpbmdDbGllbnRlT1N9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtjbGllbnRlUmVmfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7aXNDaGFuZ2luZ0NsaWVudGVPUyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0NoYW5naW5nQ2xpZW50ZU9TKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjhweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NoYW5nZUNsaWVudGVPc31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMjhhYTBmXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Mb3RlIFJQUzogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMb3RlIFJQU1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjaGFuZ2VScHN9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25mc2VQYXJhbXMuTE9URVJQU31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0TmZzZVBhcm1zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmZzZVBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTE9URVJQUzogTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZVJwcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdE5GU0V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTliYjFmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZVJwcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Mb3RlIE5GUy1lOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxvdGUgTkZTLWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2hhbmdlTmZzfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZnNlUGFyYW1zLkxPVEVORlNFfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXROZnNlUGFybXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5uZnNlUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMT1RFTkZTRTogTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZU5mcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdE5GU0V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTliYjFmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZU5mcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U2VtUGVybWlzc2FvIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=