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
                children: ["Atualizar Al\xEDquota ICMS", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AiOutlineBarcode, {
                  style: {
                    marginLeft: "6px",
                    color: "#b23237"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 21
                }, this), ":", " "]
              }, void 0, true, {
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
                  lineNumber: 147,
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
                  lineNumber: 154,
                  columnNumber: 23
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
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
          lineNumber: 173,
          columnNumber: 13
        }, this), nfseParams && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formParm,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Alterar cliente da O.S.:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
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
              lineNumber: 178,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchClienteInput__WEBPACK_IMPORTED_MODULE_9__["SearchClientInput"], {
              disabled: !isAuthorized || !isChangingClienteOS,
              ref: clienteRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
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
              lineNumber: 195,
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
              lineNumber: 202,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Lote RPS: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
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
                  lineNumber: 227,
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
                  lineNumber: 233,
                  columnNumber: 25
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Lote NFS-e: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
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
                  lineNumber: 263,
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
                  lineNumber: 269,
                  columnNumber: 25
                }, this)
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 288,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJhcGkiLCJQYXJhbWV0cm9zR2VyYWlzIiwidXNlU3RhdGUiLCJuZnNlUGFyYW1zIiwic2V0TmZzZVBhcm1zIiwiQUxJUUlDTVMiLCJhbGlxSWNtcyIsInNldEFsaXFJY21zIiwiY2hhbmdlUnBzIiwic2V0Q2hhbmdlUnBzIiwiY2hhbmdlTmZzIiwic2V0Q2hhbmdlTmZzIiwiY2hhbmdlQWxpcUljbXMiLCJzZXRDaGFuZ2VBbGlxSWNtcyIsImlzQ2hhbmdpbmdDbGllbnRlT1MiLCJzZXRJc0NoYW5naW5nQ2xpZW50ZU9TIiwibnVtZXJvT3NUcm9jYUNsaWVudGUiLCJzZXRObnVtZXJvT3NUcm9jYUNsaWVudGUiLCJ1c2VBdXRoIiwidXNlciIsInVzZUFwaSIsImdldEFwaSIsImNsaWVudGVSZWYiLCJ1c2VSZWYiLCJpc0F1dGhvcml6ZWQiLCJwZXJtaXNzaW9ucyIsInBhcmFtZXRyb3NHZXJhaXMiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwicGFyYW1zTkZTZSIsImhhbmRsZVN1Ym1pdE5GU0UiLCJkYXRhT2JqIiwibG90ZU5GU0UiLCJMT1RFTkZTRSIsImxvdGVSUFMiLCJMT1RFUlBTIiwicG9zdCIsInN0YXR1cyIsIm5vdGlmeSIsImhhbmRsZVN1Ym1pdEFsaXFJY21zIiwiY2hhbmdlQ2xpZW50ZU9zIiwiY3VycmVudCIsImdldE15U3RhdGUiLCJvcyIsImNsaWVudGUiLCJDT0RDTElFTlRFIiwibWVzc2FnZSIsInN0eWxlcyIsIndyYXBwZXIiLCJwYXJhbVNlc3Npb24iLCJmb3JtRGl2IiwibWFyZ2luTGVmdCIsImNvbG9yIiwiaW5wdXRGb3JtIiwiZXZlbnQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVuZEFkb3JubWVudCIsImN1cnNvciIsImZv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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcERGLGVBcUtFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyS0Y7QUFBQSxvQkFERCxnQkF5S0MscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTFLSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErS0Q7O0dBeFF1QlYsZ0I7VUFZTGlCLHVELEVBQ0VFLHFEOzs7S0FiR25CLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzLjM1NjA5YjZlZDhiMTZiNzQ2ZGY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmllbGQsIFRvb2x0aXAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZpQ2hlY2ssIEZpRWRpdCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hDbGllbnRJbnB1dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlYXJjaENsaWVudGVJbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGhcIjtcclxuXHJcbmltcG9ydCBTZW1QZXJtaXNzYW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VtUGVybWlzc2FvXCI7XHJcbmltcG9ydCB7IFNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90b2FzdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBnZXRBY3RpdmVUcmFuc2FjdGlvbiB9IGZyb20gXCJAc2VudHJ5L3JlYWN0L2Rpc3QvcHJvZmlsZXJcIjtcclxuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2FwaVwiO1xyXG5cclxuaW50ZXJmYWNlIElORlNFIHtcclxuICBMT1RFTkZTRTogbnVtYmVyO1xyXG4gIExPVEVSUFM6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElBbGlxSWNtcyB7XHJcbiAgQUxJUUlDTVM6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3Qgc2hvd1RvYXN0ID0gbmV3IFNob3dUb2FzdCgpO1xyXG5sZXQgYXBpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFyYW1ldHJvc0dlcmFpcygpIHtcclxuICBjb25zdCBbbmZzZVBhcmFtcywgc2V0TmZzZVBhcm1zXSA9IHVzZVN0YXRlPElORlNFPigpO1xyXG4gIGNvbnN0IFthbGlxSWNtcywgc2V0QWxpcUljbXNdID0gdXNlU3RhdGU8SUFsaXFJY21zPih7IEFMSVFJQ01TOiAwIH0pO1xyXG5cclxuICBjb25zdCBbY2hhbmdlUnBzLCBzZXRDaGFuZ2VScHNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFuZ2VOZnMsIHNldENoYW5nZU5mc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2NoYW5nZUFsaXFJY21zLCBzZXRDaGFuZ2VBbGlxSWNtc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzQ2hhbmdpbmdDbGllbnRlT1MsIHNldElzQ2hhbmdpbmdDbGllbnRlT1NdID1cclxuICAgIHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW251bWVyb09zVHJvY2FDbGllbnRlLCBzZXRObnVtZXJvT3NUcm9jYUNsaWVudGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBnZXRBcGkgfSA9IHVzZUFwaSgpO1xyXG5cclxuICBjb25zdCBjbGllbnRlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBpc0F1dGhvcml6ZWQgPVxyXG4gICAgdXNlcj8ucGVybWlzc2lvbnMucGFyYW1ldHJvc0dlcmFpcyAhPT0gXCJTT01FTlRFX0NPTlNVTFRBXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcGkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgYXBpID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICBhcGkuZ2V0KFwiL3BhcmFtZXRyb3MvbmZzZVwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldE5mc2VQYXJtcyhyZXNwb25zZS5kYXRhLnBhcmFtc05GU2VbMF0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0TkZTRSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGFPYmogPSB7XHJcbiAgICAgIGxvdGVORlNFOiBuZnNlUGFyYW1zLkxPVEVORlNFLFxyXG4gICAgICBsb3RlUlBTOiBuZnNlUGFyYW1zLkxPVEVSUFMsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvcGFyYW1ldHJvcy9uZnNlXCIsIGRhdGFPYmopO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbHRlcmHDp8OjbyBlbnZpYWRhIGFvIHNpc3RlbWFcIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoYW5nZVJwcyhmYWxzZSk7XHJcbiAgICBzZXRDaGFuZ2VOZnMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEFsaXFJY21zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9wYXJhbWV0cm9zL2F0dWFsaXphLWFsaXFcIiwgYWxpcUljbXMpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbMOtcXVvdGEgYWx0ZXJhZGEgY29tIHN1Y2Vzc29cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoYW5nZUFsaXFJY21zKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDbGllbnRlT3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFudW1lcm9Pc1Ryb2NhQ2xpZW50ZSB8fFxyXG4gICAgICBudW1lcm9Pc1Ryb2NhQ2xpZW50ZSA8PSAwIHx8XHJcbiAgICAgICFjbGllbnRlUmVmLmN1cnJlbnQ/LmdldE15U3RhdGUoKVxyXG4gICAgKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXHJcbiAgICAgICAgXCJQcmVlbmNoYSBjb3JyZXRhbWVudGUgbyBuw7ptZXJvIGRhIE8uUy4gZSBvIG5vdm8gY2xpZW50ZVwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL3BhcmFtZXRyb3MvYXR1YWxpemEtY2xpZW50ZS1vc1wiLCB7XHJcbiAgICAgICAgb3M6IG51bWVyb09zVHJvY2FDbGllbnRlLFxyXG4gICAgICAgIGNsaWVudGU6IGNsaWVudGVSZWYuY3VycmVudD8uZ2V0TXlTdGF0ZSgpLkNPRENMSUVOVEUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQ2xpZW50ZSBhbHRlcmFkbyBjb20gc3VjZXNzb1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICB7dXNlcj8ucGVybWlzc2lvbnMucGFyYW1ldHJvc0dlcmFpcyAhPT0gXCJTRU1fQUNFU1NPXCIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMj5QYXLDom1ldHJvcyBHZXJhaXM8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhbVNlc3Npb259PlxyXG4gICAgICAgICAgICA8aDI+RmlzY2FsPC9oMj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiMDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIEF0dWFsaXphciBBbMOtcXVvdGEgSUNNU3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lQmFyY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI2cHhcIiwgY29sb3I6IFwiI2IyMzIzN1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWxpcS4gSUNNU1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNoYW5nZUFsaXFJY21zfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthbGlxSWNtcy5BTElRSUNNU31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZXRBbGlxSWNtcyh7IEFMSVFJQ01TOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZUFsaXFJY21zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzI4YWEwZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdEFsaXFJY21zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlQWxpcUljbXModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhbVNlc3Npb259PlxyXG4gICAgICAgICAgICA8aDI+TkZTLWUgLyBPLlMuPC9oMj5cclxuICAgICAgICAgICAge25mc2VQYXJhbXMgJiYgKFxyXG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1QYXJtfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkFsdGVyYXIgY2xpZW50ZSBkYSBPLlMuOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOw7ptZXJvIGRhIE8uUy5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtudW1lcm9Pc1Ryb2NhQ2xpZW50ZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZCB8fCAhaXNDaGFuZ2luZ0NsaWVudGVPU31cclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyb09zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm51bWVyb09zVHJvY2FDbGllbnRlKCtlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWFyY2hDbGllbnRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkIHx8ICFpc0NoYW5naW5nQ2xpZW50ZU9TfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17Y2xpZW50ZVJlZn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgeyFpc0NoYW5naW5nQ2xpZW50ZU9TID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGaUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ2hhbmdpbmdDbGllbnRlT1ModHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U5YmIxZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlQ2xpZW50ZU9zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI4cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkxvdGUgUlBTOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxvdGUgUlBTXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNoYW5nZVJwc31cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmZzZVBhcmFtcy5MT1RFUlBTfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXROZnNlUGFybXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5uZnNlUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMT1RFUlBTOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogY2hhbmdlUnBzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzI4YWEwZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0TkZTRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlUnBzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkxvdGUgTkZTLWU6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTG90ZSBORlMtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjaGFuZ2VOZnN9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25mc2VQYXJhbXMuTE9URU5GU0V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIHNldE5mc2VQYXJtcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5mc2VQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExPVEVORlNFOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogY2hhbmdlTmZzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzI4YWEwZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0TkZTRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlTmZzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxTZW1QZXJtaXNzYW8gLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==