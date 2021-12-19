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
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_15__);






var _jsxFileName = "C:\\Users\\Bruno Jagmin\\Desktop\\Ganesa\\utilitarios-resulth\\frontend\\src\\pages\\parametros-gerais\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













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
      isUpdating = _useState3[0],
      setIsUpdating = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      changeRps = _useState4[0],
      setChangeRps = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      changeNfs = _useState5[0],
      setChangeNfs = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      changeAliqIcms = _useState6[0],
      setChangeAliqIcms = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isChangingClienteOS = _useState7[0],
      setIsChangingClienteOS = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      numeroOsTrocaCliente = _useState8[0],
      setNnumeroOsTrocaCliente = _useState8[1];

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
    var _ref = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var dataObj, response;
      return C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
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
    var _ref2 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var response;
      return C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsUpdating(true);
              _context2.next = 3;
              return api.post("/parametros/atualiza-aliq", aliqIcms);

            case 3:
              response = _context2.sent;

              if (response.data.status === "ok") {
                showToast.notify("Alíquota alterada com sucesso", "success");
              } else {
                showToast.notify("Algo deu errado", "error");
              }

              setIsUpdating(false);
              setChangeAliqIcms(false);

            case 7:
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
    var _ref3 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      var _clienteRef$current;

      var _clienteRef$current2, response;

      return C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_15___default.a, {
        type: "Bars",
        color: "#B23237",
        height: 80,
        width: 80
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.wrapper,
      children: (user === null || user === void 0 ? void 0 : user.permissions.parametrosGerais) !== "SEM_ACESSO" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Par\xE2metros Gerais"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.paramSession,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Produtos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              children: "Carac"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.paramSession,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "NFS-e / O.S."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 15
          }, this), nfseParams && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formParm,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Alterar cliente da O.S.:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
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
                lineNumber: 193,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchClienteInput__WEBPACK_IMPORTED_MODULE_9__["SearchClientInput"], {
                disabled: !isAuthorized || !isChangingClienteOS,
                ref: clienteRef
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
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
                lineNumber: 212,
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
                lineNumber: 219,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Lote RPS: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
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
                    lineNumber: 244,
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
                    lineNumber: 250,
                    columnNumber: 27
                  }, this)
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Lote NFS-e: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
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
                    lineNumber: 280,
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
                    lineNumber: 286,
                    columnNumber: 27
                  }, this)
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 13
        }, this)]
      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(ParametrosGerais, "f4eiNmcc06VvKY38/W2RVBt2EGM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJhcGkiLCJQYXJhbWV0cm9zR2VyYWlzIiwidXNlU3RhdGUiLCJuZnNlUGFyYW1zIiwic2V0TmZzZVBhcm1zIiwiQUxJUUlDTVMiLCJhbGlxSWNtcyIsInNldEFsaXFJY21zIiwiaXNVcGRhdGluZyIsInNldElzVXBkYXRpbmciLCJjaGFuZ2VScHMiLCJzZXRDaGFuZ2VScHMiLCJjaGFuZ2VOZnMiLCJzZXRDaGFuZ2VOZnMiLCJjaGFuZ2VBbGlxSWNtcyIsInNldENoYW5nZUFsaXFJY21zIiwiaXNDaGFuZ2luZ0NsaWVudGVPUyIsInNldElzQ2hhbmdpbmdDbGllbnRlT1MiLCJudW1lcm9Pc1Ryb2NhQ2xpZW50ZSIsInNldE5udW1lcm9Pc1Ryb2NhQ2xpZW50ZSIsInVzZUF1dGgiLCJ1c2VyIiwidXNlQXBpIiwiZ2V0QXBpIiwiY2xpZW50ZVJlZiIsInVzZVJlZiIsImlzQXV0aG9yaXplZCIsInBlcm1pc3Npb25zIiwicGFyYW1ldHJvc0dlcmFpcyIsInVzZUVmZmVjdCIsInRoZW4iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJwYXJhbXNORlNlIiwiaGFuZGxlU3VibWl0TkZTRSIsImRhdGFPYmoiLCJsb3RlTkZTRSIsIkxPVEVORlNFIiwibG90ZVJQUyIsIkxPVEVSUFMiLCJwb3N0Iiwic3RhdHVzIiwibm90aWZ5IiwiaGFuZGxlU3VibWl0QWxpcUljbXMiLCJjaGFuZ2VDbGllbnRlT3MiLCJjdXJyZW50IiwiZ2V0TXlTdGF0ZSIsIm9zIiwiY2xpZW50ZSIsIkNPRENMSUVOVEUiLCJtZXNzYWdlIiwic3R5bGVzIiwibG9hZGluZyIsImhpZGRlbiIsIndyYXBwZXIiLCJwYXJhbVNlc3Npb24iLCJmb3JtUGFybSIsImZvcm1EaXYiLCJzaHJpbmsiLCJudW1lcm9PcyIsImUiLCJ0YXJnZXQiLCJ2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QUFHRSwyQkFBTyxFQUFFdUI7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURxQixnQkFPckIscUVBQUMscURBQUQ7QUFDRSx3QkFBSSxFQUFFLEVBRFI7QUFFRSx5QkFBSyxFQUFDLFNBRlI7QUFHRSwyQkFBTyxFQUFFLG1CQUFNO0FBQ2IsMEJBQUlULFlBQUosRUFBa0I7QUFDaEJiLG9DQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFDRjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSUTtBQWJkO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFERixlQTZLRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdLRjtBQUFBLHNCQURELGdCQWlMQyxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbExKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBLGtCQURGO0FBNExEOztHQXhSdUJaLGdCO1VBYUxtQix1RCxFQUNFRSxxRDs7O0tBZEdyQixnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXJhbWV0cm9zLWdlcmFpcy40NTNkM2Q0YjFlMTljODA2Nzc2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFRleHRGaWVsZCwgVG9vbHRpcCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmlDaGVjaywgRmlFZGl0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCB7IFNlYXJjaENsaWVudElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQ2xpZW50ZUlucHV0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXV0aFwiO1xyXG5cclxuaW1wb3J0IFNlbVBlcm1pc3NhbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW1QZXJtaXNzYW9cIjtcclxuaW1wb3J0IHsgU2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RvYXN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGdldEFjdGl2ZVRyYW5zYWN0aW9uIH0gZnJvbSBcIkBzZW50cnkvcmVhY3QvZGlzdC9wcm9maWxlclwiO1xyXG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXBpXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XHJcblxyXG5pbnRlcmZhY2UgSU5GU0Uge1xyXG4gIExPVEVORlNFOiBudW1iZXI7XHJcbiAgTE9URVJQUzogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUFsaXFJY21zIHtcclxuICBBTElRSUNNUzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBzaG93VG9hc3QgPSBuZXcgU2hvd1RvYXN0KCk7XHJcbmxldCBhcGk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbWV0cm9zR2VyYWlzKCkge1xyXG4gIGNvbnN0IFtuZnNlUGFyYW1zLCBzZXROZnNlUGFybXNdID0gdXNlU3RhdGU8SU5GU0U+KCk7XHJcbiAgY29uc3QgW2FsaXFJY21zLCBzZXRBbGlxSWNtc10gPSB1c2VTdGF0ZTxJQWxpcUljbXM+KHsgQUxJUUlDTVM6IDAgfSk7XHJcbiAgY29uc3QgW2lzVXBkYXRpbmcsIHNldElzVXBkYXRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBbY2hhbmdlUnBzLCBzZXRDaGFuZ2VScHNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFuZ2VOZnMsIHNldENoYW5nZU5mc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2NoYW5nZUFsaXFJY21zLCBzZXRDaGFuZ2VBbGlxSWNtc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzQ2hhbmdpbmdDbGllbnRlT1MsIHNldElzQ2hhbmdpbmdDbGllbnRlT1NdID1cclxuICAgIHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW251bWVyb09zVHJvY2FDbGllbnRlLCBzZXRObnVtZXJvT3NUcm9jYUNsaWVudGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBnZXRBcGkgfSA9IHVzZUFwaSgpO1xyXG5cclxuICBjb25zdCBjbGllbnRlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBpc0F1dGhvcml6ZWQgPVxyXG4gICAgdXNlcj8ucGVybWlzc2lvbnMucGFyYW1ldHJvc0dlcmFpcyAhPT0gXCJTT01FTlRFX0NPTlNVTFRBXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcGkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgYXBpID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICBhcGkuZ2V0KFwiL3BhcmFtZXRyb3MvbmZzZVwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldE5mc2VQYXJtcyhyZXNwb25zZS5kYXRhLnBhcmFtc05GU2VbMF0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0TkZTRSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGFPYmogPSB7XHJcbiAgICAgIGxvdGVORlNFOiBuZnNlUGFyYW1zLkxPVEVORlNFLFxyXG4gICAgICBsb3RlUlBTOiBuZnNlUGFyYW1zLkxPVEVSUFMsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvcGFyYW1ldHJvcy9uZnNlXCIsIGRhdGFPYmopO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbHRlcmHDp8OjbyBlbnZpYWRhIGFvIHNpc3RlbWFcIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoYW5nZVJwcyhmYWxzZSk7XHJcbiAgICBzZXRDaGFuZ2VOZnMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEFsaXFJY21zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNVcGRhdGluZyh0cnVlKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvcGFyYW1ldHJvcy9hdHVhbGl6YS1hbGlxXCIsIGFsaXFJY21zKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWzDrXF1b3RhIGFsdGVyYWRhIGNvbSBzdWNlc3NvXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbGdvIGRldSBlcnJhZG9cIiwgXCJlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc1VwZGF0aW5nKGZhbHNlKTtcclxuICAgIHNldENoYW5nZUFsaXFJY21zKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDbGllbnRlT3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFudW1lcm9Pc1Ryb2NhQ2xpZW50ZSB8fFxyXG4gICAgICBudW1lcm9Pc1Ryb2NhQ2xpZW50ZSA8PSAwIHx8XHJcbiAgICAgICFjbGllbnRlUmVmLmN1cnJlbnQ/LmdldE15U3RhdGUoKVxyXG4gICAgKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXHJcbiAgICAgICAgXCJQcmVlbmNoYSBjb3JyZXRhbWVudGUgbyBuw7ptZXJvIGRhIE8uUy4gZSBvIG5vdm8gY2xpZW50ZVwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL3BhcmFtZXRyb3MvYXR1YWxpemEtY2xpZW50ZS1vc1wiLCB7XHJcbiAgICAgICAgb3M6IG51bWVyb09zVHJvY2FDbGllbnRlLFxyXG4gICAgICAgIGNsaWVudGU6IGNsaWVudGVSZWYuY3VycmVudD8uZ2V0TXlTdGF0ZSgpLkNPRENMSUVOVEUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQ2xpZW50ZSBhbHRlcmFkbyBjb20gc3VjZXNzb1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNVcGRhdGluZyA/IHN0eWxlcy5sb2FkaW5nIDogc3R5bGVzLmhpZGRlbn0+XHJcbiAgICAgICAgPExvYWRlciB0eXBlPVwiQmFyc1wiIGNvbG9yPVwiI0IyMzIzN1wiIGhlaWdodD17ODB9IHdpZHRoPXs4MH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLnBhcmFtZXRyb3NHZXJhaXMgIT09IFwiU0VNX0FDRVNTT1wiID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyPlBhcsOibWV0cm9zIEdlcmFpczwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyYW1TZXNzaW9ufT5cclxuICAgICAgICAgICAgICA8aDI+UHJvZHV0b3M8L2gyPlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsPkNhcmFjPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhbVNlc3Npb259PlxyXG4gICAgICAgICAgICAgIDxoMj5GaXNjYWw8L2gyPlxyXG4gICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJBdHVhbGl6YSBhIGFsw61xdW90YSBkZSBJQ01TIGRlIHRvZG9zIG9zIHByb2R1dG9zIHF1ZSBwb3NzdWVtIENTVCAwMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIEF0dWFsaXphciBBbMOtcXVvdGEgSUNNU3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjZweFwiLCBjb2xvcjogXCIjYjIzMjM3XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgIFwifTpcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWxpcS4gSUNNU1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNoYW5nZUFsaXFJY21zfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWxpcUljbXMuQUxJUUlDTVN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIHNldEFsaXFJY21zKHsgQUxJUUlDTVM6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogY2hhbmdlQWxpcUljbXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaUNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMjhhYTBmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXRBbGlxSWNtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTliYjFmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZUFsaXFJY21zKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyYW1TZXNzaW9ufT5cclxuICAgICAgICAgICAgICA8aDI+TkZTLWUgLyBPLlMuPC9oMj5cclxuICAgICAgICAgICAgICB7bmZzZVBhcmFtcyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtUGFybX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWx0ZXJhciBjbGllbnRlIGRhIE8uUy46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVybyBkYSBPLlMuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtudW1lcm9Pc1Ryb2NhQ2xpZW50ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkIHx8ICFpc0NoYW5naW5nQ2xpZW50ZU9TfVxyXG4gICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5udW1lcm9Pc31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Tm51bWVyb09zVHJvY2FDbGllbnRlKCtlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hDbGllbnRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0F1dGhvcml6ZWQgfHwgIWlzQ2hhbmdpbmdDbGllbnRlT1N9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWY9e2NsaWVudGVSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7IWlzQ2hhbmdpbmdDbGllbnRlT1MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmlFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ2hhbmdpbmdDbGllbnRlT1ModHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezI1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjhweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U5YmIxZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGFuZ2VDbGllbnRlT3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzI4YWEwZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkxvdGUgUlBTOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMb3RlIFJQU1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNoYW5nZVJwc31cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZnNlUGFyYW1zLkxPVEVSUFN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZnNlUGFybXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5mc2VQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTE9URVJQUzogTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogY2hhbmdlUnBzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaUNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzI4YWEwZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXRORlNFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlUnBzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkxvdGUgTkZTLWU6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxvdGUgTkZTLWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjaGFuZ2VOZnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmZzZVBhcmFtcy5MT1RFTkZTRX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5mc2VQYXJtcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmZzZVBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMT1RFTkZTRTogTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogY2hhbmdlTmZzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaUNoZWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzI4YWEwZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXRORlNFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbmdlTmZzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8U2VtUGVybWlzc2FvIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=