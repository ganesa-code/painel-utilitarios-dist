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
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");






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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: isUpdating ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.loading : _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.hidden,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Loade, {
        type: "Bars",
        color: "#B23237",
        height: 80,
        width: 80
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.wrapper,
      children: (user === null || user === void 0 ? void 0 : user.permissions.parametrosGerais) !== "SEM_ACESSO" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Par\xE2metros Gerais"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.paramSession,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Fiscal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
                title: "Atualiza a al\xEDquota de ICMS de todos os produtos que possuem CST 000",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["Atualizar Al\xEDquota ICMS", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__["AiOutlineQuestionCircle"], {
                    style: {
                      marginLeft: "6px",
                      color: "#b23237"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 23
                  }, this), "  ", ":"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
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
                    lineNumber: 152,
                    columnNumber: 25
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
                    lineNumber: 159,
                    columnNumber: 25
                  }, this)
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.paramSession,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "NFS-e / O.S."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 15
          }, this), nfseParams && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formParm,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Alterar cliente da O.S.:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 21
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
                lineNumber: 183,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchClienteInput__WEBPACK_IMPORTED_MODULE_9__["SearchClientInput"], {
                disabled: !isAuthorized || !isChangingClienteOS,
                ref: clienteRef
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 21
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
                lineNumber: 202,
                columnNumber: 23
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiCheck"], {
                onClick: changeClienteOs,
                style: {
                  marginLeft: "8px"
                },
                size: 25,
                color: "#28aa0f"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Lote RPS: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 21
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
                    lineNumber: 234,
                    columnNumber: 27
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
                    lineNumber: 240,
                    columnNumber: 27
                  }, this)
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Lote NFS-e: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 21
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
                    lineNumber: 270,
                    columnNumber: 27
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
                    lineNumber: 276,
                    columnNumber: 27
                  }, this)
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 13
        }, this)]
      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJhcGkiLCJQYXJhbWV0cm9zR2VyYWlzIiwidXNlU3RhdGUiLCJuZnNlUGFyYW1zIiwic2V0TmZzZVBhcm1zIiwiQUxJUUlDTVMiLCJhbGlxSWNtcyIsInNldEFsaXFJY21zIiwiY2hhbmdlUnBzIiwic2V0Q2hhbmdlUnBzIiwiY2hhbmdlTmZzIiwic2V0Q2hhbmdlTmZzIiwiY2hhbmdlQWxpcUljbXMiLCJzZXRDaGFuZ2VBbGlxSWNtcyIsImlzQ2hhbmdpbmdDbGllbnRlT1MiLCJzZXRJc0NoYW5naW5nQ2xpZW50ZU9TIiwibnVtZXJvT3NUcm9jYUNsaWVudGUiLCJzZXRObnVtZXJvT3NUcm9jYUNsaWVudGUiLCJ1c2VBdXRoIiwidXNlciIsInVzZUFwaSIsImdldEFwaSIsImNsaWVudGVSZWYiLCJ1c2VSZWYiLCJpc0F1dGhvcml6ZWQiLCJwZXJtaXNzaW9ucyIsInBhcmFtZXRyb3NHZXJhaXMiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwicGFyYW1zTkZTZSIsImhhbmRsZVN1Ym1pdE5GU0UiLCJkYXRhT2JqIiwibG90ZU5GU0UiLCJMT1RFTkZTRSIsImxvdGVSUFMiLCJMT1RFUlBTIiwicG9zdCIsInN0YXR1cyIsIm5vdGlmeSIsImhhbmRsZVN1Ym1pdEFsaXFJY21zIiwiY2hhbmdlQ2xpZW50ZU9zIiwiY3VycmVudCIsImdldE15U3RhdGUiLCJvcyIsImNsaWVudGUiLCJDT0RDTElFTlRFIiwibWVzc2FnZSIsImlzVXBkYXRpbmciLCJzdHlsZXMiLCJsb2FkaW5nIiwiaGlkZGVuIiwid3JhcHBlciIsInBhcmFtU2Vzc2lvbiIsImZvcm1EaXYiLCJtYXJnaW5MZWZ0IiwiY29sb3IiLCJpbnB1dEZvcm0iLCJldmVudCIsIk51bWJlciIsInRhcmdldCIsInZh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LEVBQUMsU0FGUjtBQUdFLDJCQUFPLEVBQUV1QjtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRHFCLGdCQU9yQixxRUFBQyxxREFBRDtBQUNFLHdCQUFJLEVBQUUsRUFEUjtBQUVFLHlCQUFLLEVBQUMsU0FGUjtBQUdFLDJCQUFPLEVBQUUsbUJBQU07QUFDYiwwQkFBSVQsWUFBSixFQUFrQjtBQUNoQmIsb0NBQVksQ0FBQyxJQUFELENBQVo7QUFDRDtBQUNGO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJRO0FBYmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcERGLGVBdUtFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdktGO0FBQUEsc0JBREQsZ0JBMktDLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE1S0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUFzTEQ7O0dBL1F1QlYsZ0I7VUFZTGlCLHVELEVBQ0VFLHFEOzs7S0FiR25CLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzLmE5MGMzZjRhNjA0MTk5YTJjYzgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmllbGQsIFRvb2x0aXAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZpQ2hlY2ssIEZpRWRpdCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hDbGllbnRJbnB1dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlYXJjaENsaWVudGVJbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGhcIjtcclxuXHJcbmltcG9ydCBTZW1QZXJtaXNzYW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VtUGVybWlzc2FvXCI7XHJcbmltcG9ydCB7IFNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90b2FzdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBnZXRBY3RpdmVUcmFuc2FjdGlvbiB9IGZyb20gXCJAc2VudHJ5L3JlYWN0L2Rpc3QvcHJvZmlsZXJcIjtcclxuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2FwaVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVRdWVzdGlvbkNpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuaW50ZXJmYWNlIElORlNFIHtcclxuICBMT1RFTkZTRTogbnVtYmVyO1xyXG4gIExPVEVSUFM6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElBbGlxSWNtcyB7XHJcbiAgQUxJUUlDTVM6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3Qgc2hvd1RvYXN0ID0gbmV3IFNob3dUb2FzdCgpO1xyXG5sZXQgYXBpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFyYW1ldHJvc0dlcmFpcygpIHtcclxuICBjb25zdCBbbmZzZVBhcmFtcywgc2V0TmZzZVBhcm1zXSA9IHVzZVN0YXRlPElORlNFPigpO1xyXG4gIGNvbnN0IFthbGlxSWNtcywgc2V0QWxpcUljbXNdID0gdXNlU3RhdGU8SUFsaXFJY21zPih7IEFMSVFJQ01TOiAwIH0pO1xyXG5cclxuICBjb25zdCBbY2hhbmdlUnBzLCBzZXRDaGFuZ2VScHNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFuZ2VOZnMsIHNldENoYW5nZU5mc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2NoYW5nZUFsaXFJY21zLCBzZXRDaGFuZ2VBbGlxSWNtc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzQ2hhbmdpbmdDbGllbnRlT1MsIHNldElzQ2hhbmdpbmdDbGllbnRlT1NdID1cclxuICAgIHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW251bWVyb09zVHJvY2FDbGllbnRlLCBzZXRObnVtZXJvT3NUcm9jYUNsaWVudGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBnZXRBcGkgfSA9IHVzZUFwaSgpO1xyXG5cclxuICBjb25zdCBjbGllbnRlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBpc0F1dGhvcml6ZWQgPVxyXG4gICAgdXNlcj8ucGVybWlzc2lvbnMucGFyYW1ldHJvc0dlcmFpcyAhPT0gXCJTT01FTlRFX0NPTlNVTFRBXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcGkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgYXBpID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICBhcGkuZ2V0KFwiL3BhcmFtZXRyb3MvbmZzZVwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldE5mc2VQYXJtcyhyZXNwb25zZS5kYXRhLnBhcmFtc05GU2VbMF0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0TkZTRSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGFPYmogPSB7XHJcbiAgICAgIGxvdGVORlNFOiBuZnNlUGFyYW1zLkxPVEVORlNFLFxyXG4gICAgICBsb3RlUlBTOiBuZnNlUGFyYW1zLkxPVEVSUFMsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvcGFyYW1ldHJvcy9uZnNlXCIsIGRhdGFPYmopO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbHRlcmHDp8OjbyBlbnZpYWRhIGFvIHNpc3RlbWFcIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoYW5nZVJwcyhmYWxzZSk7XHJcbiAgICBzZXRDaGFuZ2VOZnMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEFsaXFJY21zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9wYXJhbWV0cm9zL2F0dWFsaXphLWFsaXFcIiwgYWxpcUljbXMpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbMOtcXVvdGEgYWx0ZXJhZGEgY29tIHN1Y2Vzc29cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoYW5nZUFsaXFJY21zKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDbGllbnRlT3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFudW1lcm9Pc1Ryb2NhQ2xpZW50ZSB8fFxyXG4gICAgICBudW1lcm9Pc1Ryb2NhQ2xpZW50ZSA8PSAwIHx8XHJcbiAgICAgICFjbGllbnRlUmVmLmN1cnJlbnQ/LmdldE15U3RhdGUoKVxyXG4gICAgKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXHJcbiAgICAgICAgXCJQcmVlbmNoYSBjb3JyZXRhbWVudGUgbyBuw7ptZXJvIGRhIE8uUy4gZSBvIG5vdm8gY2xpZW50ZVwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL3BhcmFtZXRyb3MvYXR1YWxpemEtY2xpZW50ZS1vc1wiLCB7XHJcbiAgICAgICAgb3M6IG51bWVyb09zVHJvY2FDbGllbnRlLFxyXG4gICAgICAgIGNsaWVudGU6IGNsaWVudGVSZWYuY3VycmVudD8uZ2V0TXlTdGF0ZSgpLkNPRENMSUVOVEUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQ2xpZW50ZSBhbHRlcmFkbyBjb20gc3VjZXNzb1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNVcGRhdGluZyA/IHN0eWxlcy5sb2FkaW5nIDogc3R5bGVzLmhpZGRlbn0+XHJcbiAgICAgICAgPExvYWRlIHR5cGU9XCJCYXJzXCIgY29sb3I9XCIjQjIzMjM3XCIgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMucGFyYW1ldHJvc0dlcmFpcyAhPT0gXCJTRU1fQUNFU1NPXCIgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDI+UGFyw6JtZXRyb3MgR2VyYWlzPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhbVNlc3Npb259PlxyXG4gICAgICAgICAgICAgIDxoMj5GaXNjYWw8L2gyPlxyXG4gICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJBdHVhbGl6YSBhIGFsw61xdW90YSBkZSBJQ01TIGRlIHRvZG9zIG9zIHByb2R1dG9zIHF1ZSBwb3NzdWVtIENTVCAwMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIEF0dWFsaXphciBBbMOtcXVvdGEgSUNNU3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjZweFwiLCBjb2xvcjogXCIjYjIzMjM3XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgIFwifTpcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWxpcS4gSUNNU1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNoYW5nZUFsaXFJY21zfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWxpcUljbXMuQUxJUUlDTVN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIHNldEFsaXFJY21zKHsgQUxJUUlDTVM6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogY2hhbmdlQWxpcUljbXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaUNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMjhhYTBmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXRBbGlxSWNtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTliYjFmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZUFsaXFJY21zKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhbVNlc3Npb259PlxyXG4gICAgICAgICAgICAgIDxoMj5ORlMtZSAvIE8uUy48L2gyPlxyXG4gICAgICAgICAgICAgIHtuZnNlUGFyYW1zICYmIChcclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1QYXJtfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BbHRlcmFyIGNsaWVudGUgZGEgTy5TLjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOw7ptZXJvIGRhIE8uUy5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWVyb09zVHJvY2FDbGllbnRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWQgfHwgIWlzQ2hhbmdpbmdDbGllbnRlT1N9XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm51bWVyb09zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRObnVtZXJvT3NUcm9jYUNsaWVudGUoK2UudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaENsaWVudElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZCB8fCAhaXNDaGFuZ2luZ0NsaWVudGVPU31cclxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17Y2xpZW50ZVJlZn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHshaXNDaGFuZ2luZ0NsaWVudGVPUyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxGaUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNDaGFuZ2luZ0NsaWVudGVPUyh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTliYjFmXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxGaUNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NoYW5nZUNsaWVudGVPc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI4cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMjhhYTBmXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG90ZSBSUFM6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxvdGUgUlBTXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2hhbmdlUnBzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25mc2VQYXJhbXMuTE9URVJQU31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5mc2VQYXJtcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmZzZVBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMT1RFUlBTOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiBjaGFuZ2VScHMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMjhhYTBmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdE5GU0V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U5YmIxZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGFuZ2VScHModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG90ZSBORlMtZTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTG90ZSBORlMtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNoYW5nZU5mc31cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZnNlUGFyYW1zLkxPVEVORlNFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmZzZVBhcm1zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZnNlUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExPVEVORlNFOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiBjaGFuZ2VOZnMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMjhhYTBmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdE5GU0V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U5YmIxZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGFuZ2VOZnModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxTZW1QZXJtaXNzYW8gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==