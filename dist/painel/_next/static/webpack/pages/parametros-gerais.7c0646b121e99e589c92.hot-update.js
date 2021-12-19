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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Produtos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.paramSession,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "NFS-e / O.S."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 15
          }, this), nfseParams && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formParm,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Alterar cliente da O.S.:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
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
                lineNumber: 190,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchClienteInput__WEBPACK_IMPORTED_MODULE_9__["SearchClientInput"], {
                disabled: !isAuthorized || !isChangingClienteOS,
                ref: clienteRef
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
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
                lineNumber: 209,
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
                lineNumber: 216,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Lote RPS: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
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
                    lineNumber: 241,
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
                    lineNumber: 247,
                    columnNumber: 27
                  }, this)
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Lote NFS-e: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
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
                    lineNumber: 277,
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
                    lineNumber: 283,
                    columnNumber: 27
                  }, this)
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 13
        }, this)]
      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJhcGkiLCJQYXJhbWV0cm9zR2VyYWlzIiwidXNlU3RhdGUiLCJuZnNlUGFyYW1zIiwic2V0TmZzZVBhcm1zIiwiQUxJUUlDTVMiLCJhbGlxSWNtcyIsInNldEFsaXFJY21zIiwiaXNVcGRhdGluZyIsInNldElzVXBkYXRpbmciLCJjaGFuZ2VScHMiLCJzZXRDaGFuZ2VScHMiLCJjaGFuZ2VOZnMiLCJzZXRDaGFuZ2VOZnMiLCJjaGFuZ2VBbGlxSWNtcyIsInNldENoYW5nZUFsaXFJY21zIiwiaXNDaGFuZ2luZ0NsaWVudGVPUyIsInNldElzQ2hhbmdpbmdDbGllbnRlT1MiLCJudW1lcm9Pc1Ryb2NhQ2xpZW50ZSIsInNldE5udW1lcm9Pc1Ryb2NhQ2xpZW50ZSIsInVzZUF1dGgiLCJ1c2VyIiwidXNlQXBpIiwiZ2V0QXBpIiwiY2xpZW50ZVJlZiIsInVzZVJlZiIsImlzQXV0aG9yaXplZCIsInBlcm1pc3Npb25zIiwicGFyYW1ldHJvc0dlcmFpcyIsInVzZUVmZmVjdCIsInRoZW4iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJwYXJhbXNORlNlIiwiaGFuZGxlU3VibWl0TkZTRSIsImRhdGFPYmoiLCJsb3RlTkZTRSIsIkxPVEVORlNFIiwibG90ZVJQUyIsIkxPVEVSUFMiLCJwb3N0Iiwic3RhdHVzIiwibm90aWZ5IiwiaGFuZGxlU3VibWl0QWxpcUljbXMiLCJjaGFuZ2VDbGllbnRlT3MiLCJjdXJyZW50IiwiZ2V0TXlTdGF0ZSIsIm9zIiwiY2xpZW50ZSIsIkNPRENMSUVOVEUiLCJtZXNzYWdlIiwic3R5bGVzIiwibG9hZGluZyIsImhpZGRlbiIsIndyYXBwZXIiLCJwYXJhbVNlc3Npb24iLCJmb3JtUGFybSIsImZvcm1EaXYiLCJzaHJpbmsiLCJudW1lcm9PcyIsImUiLCJ0YXJnZXQiLCJ2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QUZSO0FBR0UsMkJBQU8sRUFBRSxtQkFBTTtBQUNiLDBCQUFJVCxZQUFKLEVBQWtCO0FBQ2hCYixvQ0FBWSxDQUFDLElBQUQsQ0FBWjtBQUNEO0FBQ0Y7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUlE7QUFiZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF6RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2REYsZUEwS0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExS0Y7QUFBQSxzQkFERCxnQkE4S0MscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQS9LSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQXlMRDs7R0FyUnVCWixnQjtVQWFMbUIsdUQsRUFDRUUscUQ7OztLQWRHckIsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFyYW1ldHJvcy1nZXJhaXMuN2MwNjQ2YjEyMWU5OWU1ODljOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWVsZCwgVG9vbHRpcCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmlDaGVjaywgRmlFZGl0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCB7IFNlYXJjaENsaWVudElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQ2xpZW50ZUlucHV0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXV0aFwiO1xyXG5cclxuaW1wb3J0IFNlbVBlcm1pc3NhbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW1QZXJtaXNzYW9cIjtcclxuaW1wb3J0IHsgU2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RvYXN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGdldEFjdGl2ZVRyYW5zYWN0aW9uIH0gZnJvbSBcIkBzZW50cnkvcmVhY3QvZGlzdC9wcm9maWxlclwiO1xyXG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXBpXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XHJcblxyXG5pbnRlcmZhY2UgSU5GU0Uge1xyXG4gIExPVEVORlNFOiBudW1iZXI7XHJcbiAgTE9URVJQUzogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUFsaXFJY21zIHtcclxuICBBTElRSUNNUzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBzaG93VG9hc3QgPSBuZXcgU2hvd1RvYXN0KCk7XHJcbmxldCBhcGk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbWV0cm9zR2VyYWlzKCkge1xyXG4gIGNvbnN0IFtuZnNlUGFyYW1zLCBzZXROZnNlUGFybXNdID0gdXNlU3RhdGU8SU5GU0U+KCk7XHJcbiAgY29uc3QgW2FsaXFJY21zLCBzZXRBbGlxSWNtc10gPSB1c2VTdGF0ZTxJQWxpcUljbXM+KHsgQUxJUUlDTVM6IDAgfSk7XHJcbiAgY29uc3QgW2lzVXBkYXRpbmcsIHNldElzVXBkYXRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBbY2hhbmdlUnBzLCBzZXRDaGFuZ2VScHNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFuZ2VOZnMsIHNldENoYW5nZU5mc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2NoYW5nZUFsaXFJY21zLCBzZXRDaGFuZ2VBbGlxSWNtc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzQ2hhbmdpbmdDbGllbnRlT1MsIHNldElzQ2hhbmdpbmdDbGllbnRlT1NdID1cclxuICAgIHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW251bWVyb09zVHJvY2FDbGllbnRlLCBzZXRObnVtZXJvT3NUcm9jYUNsaWVudGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBnZXRBcGkgfSA9IHVzZUFwaSgpO1xyXG5cclxuICBjb25zdCBjbGllbnRlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBpc0F1dGhvcml6ZWQgPVxyXG4gICAgdXNlcj8ucGVybWlzc2lvbnMucGFyYW1ldHJvc0dlcmFpcyAhPT0gXCJTT01FTlRFX0NPTlNVTFRBXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcGkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgYXBpID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICBhcGkuZ2V0KFwiL3BhcmFtZXRyb3MvbmZzZVwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldE5mc2VQYXJtcyhyZXNwb25zZS5kYXRhLnBhcmFtc05GU2VbMF0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0TkZTRSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGFPYmogPSB7XHJcbiAgICAgIGxvdGVORlNFOiBuZnNlUGFyYW1zLkxPVEVORlNFLFxyXG4gICAgICBsb3RlUlBTOiBuZnNlUGFyYW1zLkxPVEVSUFMsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvcGFyYW1ldHJvcy9uZnNlXCIsIGRhdGFPYmopO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbHRlcmHDp8OjbyBlbnZpYWRhIGFvIHNpc3RlbWFcIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoYW5nZVJwcyhmYWxzZSk7XHJcbiAgICBzZXRDaGFuZ2VOZnMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdEFsaXFJY21zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNVcGRhdGluZyh0cnVlKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvcGFyYW1ldHJvcy9hdHVhbGl6YS1hbGlxXCIsIGFsaXFJY21zKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWzDrXF1b3RhIGFsdGVyYWRhIGNvbSBzdWNlc3NvXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbGdvIGRldSBlcnJhZG9cIiwgXCJlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc1VwZGF0aW5nKGZhbHNlKTtcclxuICAgIHNldENoYW5nZUFsaXFJY21zKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDbGllbnRlT3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICFudW1lcm9Pc1Ryb2NhQ2xpZW50ZSB8fFxyXG4gICAgICBudW1lcm9Pc1Ryb2NhQ2xpZW50ZSA8PSAwIHx8XHJcbiAgICAgICFjbGllbnRlUmVmLmN1cnJlbnQ/LmdldE15U3RhdGUoKVxyXG4gICAgKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXHJcbiAgICAgICAgXCJQcmVlbmNoYSBjb3JyZXRhbWVudGUgbyBuw7ptZXJvIGRhIE8uUy4gZSBvIG5vdm8gY2xpZW50ZVwiLFxyXG4gICAgICAgIFwid2FybmluZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL3BhcmFtZXRyb3MvYXR1YWxpemEtY2xpZW50ZS1vc1wiLCB7XHJcbiAgICAgICAgb3M6IG51bWVyb09zVHJvY2FDbGllbnRlLFxyXG4gICAgICAgIGNsaWVudGU6IGNsaWVudGVSZWYuY3VycmVudD8uZ2V0TXlTdGF0ZSgpLkNPRENMSUVOVEUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQ2xpZW50ZSBhbHRlcmFkbyBjb20gc3VjZXNzb1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aXNVcGRhdGluZyA/IHN0eWxlcy5sb2FkaW5nIDogc3R5bGVzLmhpZGRlbn0+XHJcbiAgICAgICAgPExvYWRlciB0eXBlPVwiQmFyc1wiIGNvbG9yPVwiI0IyMzIzN1wiIGhlaWdodD17ODB9IHdpZHRoPXs4MH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLnBhcmFtZXRyb3NHZXJhaXMgIT09IFwiU0VNX0FDRVNTT1wiID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyPlBhcsOibWV0cm9zIEdlcmFpczwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyYW1TZXNzaW9ufT5cclxuICAgICAgICAgICAgICA8aDI+UHJvZHV0b3M8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyYW1TZXNzaW9ufT5cclxuICAgICAgICAgICAgICA8aDI+RmlzY2FsPC9oMj5cclxuICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQXR1YWxpemEgYSBhbMOtcXVvdGEgZGUgSUNNUyBkZSB0b2RvcyBvcyBwcm9kdXRvcyBxdWUgcG9zc3VlbSBDU1QgMDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBdHVhbGl6YXIgQWzDrXF1b3RhIElDTVN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lUXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI2cHhcIiwgY29sb3I6IFwiI2IyMzIzN1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge1wiICBcIn06XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFsaXEuIElDTVNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjaGFuZ2VBbGlxSWNtc31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsaXFJY21zLkFMSVFJQ01TfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRBbGlxSWNtcyh7IEFMSVFJQ01TOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZUFsaXFJY21zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzI4YWEwZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0QWxpcUljbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U5YmIxZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGFuZ2VBbGlxSWNtcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmFtU2Vzc2lvbn0+XHJcbiAgICAgICAgICAgICAgPGgyPk5GUy1lIC8gTy5TLjwvaDI+XHJcbiAgICAgICAgICAgICAge25mc2VQYXJhbXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybVBhcm19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkFsdGVyYXIgY2xpZW50ZSBkYSBPLlMuOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk7Dum1lcm8gZGEgTy5TLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVtZXJvT3NUcm9jYUNsaWVudGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZCB8fCAhaXNDaGFuZ2luZ0NsaWVudGVPU31cclxuICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJvT3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5udW1lcm9Pc1Ryb2NhQ2xpZW50ZSgrZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQ2xpZW50SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkIHx8ICFpc0NoYW5naW5nQ2xpZW50ZU9TfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXtjbGllbnRlUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFpc0NoYW5naW5nQ2xpZW50ZU9TID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0NoYW5naW5nQ2xpZW50ZU9TKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI4cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlQ2xpZW50ZU9zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjhweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezI1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb3RlIFJQUzogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTG90ZSBSUFNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjaGFuZ2VScHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmZzZVBhcmFtcy5MT1RFUlBTfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmZzZVBhcm1zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZnNlUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExPVEVSUFM6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZVJwcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0TkZTRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTliYjFmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZVJwcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb3RlIE5GUy1lOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMb3RlIE5GUy1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2hhbmdlTmZzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25mc2VQYXJhbXMuTE9URU5GU0V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZnNlUGFybXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5mc2VQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTE9URU5GU0U6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZU5mcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0TkZTRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTliYjFmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZU5mcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFNlbVBlcm1pc3NhbyAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9