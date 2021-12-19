webpackHotUpdate_N_E("pages/parametros-gerais",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toArray.js":
false,

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
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_SearchClienteInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/SearchClienteInput */ "./src/components/SearchClienteInput/index.tsx");
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");
/* harmony import */ var _components_SemPermissao__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/SemPermissao */ "./src/components/SemPermissao/index.tsx");
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/toast */ "./src/services/toast.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/parametros-gerais/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _contexts_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../contexts/api */ "./src/contexts/api.tsx");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _contexts_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../contexts/config */ "./src/contexts/config.tsx");







var _jsxFileName = "C:\\Users\\Bruno Jagmin\\Desktop\\Ganesa\\utilitarios-resulth\\frontend\\src\\pages\\parametros-gerais\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var showToast = new _services_toast__WEBPACK_IMPORTED_MODULE_13__["ShowToast"]();
var api;
function ParametrosGerais() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      nfseParams = _useState[0],
      setNfseParms = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    ALIQICMS: 0
  }),
      aliqIcms = _useState2[0],
      setAliqIcms = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      isUpdating = _useState3[0],
      setIsUpdating = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      changeRps = _useState4[0],
      setChangeRps = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      changeNfs = _useState5[0],
      setChangeNfs = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      changeAliqIcms = _useState6[0],
      setChangeAliqIcms = _useState6[1];

  var _ref,
      _ref2 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, 1),
      barCodeC = _ref2[0];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      isChangingClienteOS = _useState7[0],
      setIsChangingClienteOS = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      numeroOsTrocaCliente = _useState8[0],
      setNnumeroOsTrocaCliente = _useState8[1];

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_11__["useAuth"])(),
      user = _useAuth.user;

  var _useApi = Object(_contexts_api__WEBPACK_IMPORTED_MODULE_15__["useApi"])(),
      getApi = _useApi.getApi;

  var _useConfig = Object(_contexts_config__WEBPACK_IMPORTED_MODULE_18__["useConfig"])(),
      config = _useConfig.config,
      changeConfig = _useConfig.changeConfig;

  var clienteRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var isAuthorized = (user === null || user === void 0 ? void 0 : user.permissions.parametrosGerais) !== "SOMENTE_CONSULTA";
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    console.log(config);
    getApi.then(function (response) {
      api = response;
      api.get("/parametros/nfse").then(function (response) {
        setNfseParms(response.data.paramsNFSe[0]);
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {}, [config]);

  var handleSubmitNFSE = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
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
      return _ref3.apply(this, arguments);
    };
  }();

  var handleSubmitAliqIcms = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
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
      return _ref4.apply(this, arguments);
    };
  }();

  var changeClienteOs = /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
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
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: isUpdating ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.loading : _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.hidden,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_17___default.a, {
        type: "Bars",
        color: "#B23237",
        height: 80,
        width: 80
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.wrapper,
      children: (user === null || user === void 0 ? void 0 : user.permissions.parametrosGerais) !== "SEM_ACESSO" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Par\xE2metros Gerais"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.paramSession,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Produtos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.formDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
              title: "Define a quantidade de caracteres que ser\xE3o gerados para o c\xF3digo de barras dos produtos com grade atrav\xE9s da rotina 'Gerar C\xF3digo de Barras'",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: ["Qtd. Caracteres C\xF3d. Barras - Grade", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_16__["AiOutlineQuestionCircle"], {
                  style: {
                    marginLeft: "6px",
                    color: "#b23237"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 21
                }, this), "  ", ":"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Select"], {
              defaultValue: 12,
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.inputForm,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
                value: 12,
                children: "12 Caracteres"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
                value: 13,
                children: "13 Caracteres"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.paramSession,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "NFS-e / O.S."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 15
          }, this), nfseParams && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.formParm,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Alterar cliente da O.S.:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
                type: "number",
                variant: "outlined",
                label: "N\xFAmero da O.S.",
                value: numeroOsTrocaCliente,
                disabled: !isAuthorized || !isChangingClienteOS,
                InputLabelProps: {
                  shrink: true
                },
                className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.numeroOs,
                onChange: function onChange(e) {
                  return setNnumeroOsTrocaCliente(+e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchClienteInput__WEBPACK_IMPORTED_MODULE_10__["SearchClientInput"], {
                disabled: !isAuthorized || !isChangingClienteOS,
                ref: clienteRef
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 21
              }, this), !isChangingClienteOS ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiEdit"], {
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
                lineNumber: 239,
                columnNumber: 23
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiCheck"], {
                onClick: changeClienteOs,
                style: {
                  marginLeft: "8px"
                },
                size: 25,
                color: "#28aa0f"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Lote RPS: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
                label: "Lote RPS",
                type: "number",
                variant: "outlined",
                className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.inputForm,
                disabled: !changeRps,
                value: nfseParams.LOTERPS,
                onChange: function onChange(event) {
                  return setNfseParms(_objectSpread(_objectSpread({}, nfseParams), {}, {
                    LOTERPS: Number(event.target.value)
                  }));
                },
                InputProps: {
                  endAdornment: changeRps ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiCheck"], {
                    size: 30,
                    color: "#28aa0f",
                    onClick: handleSubmitNFSE
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 27
                  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiEdit"], {
                    size: 30,
                    color: "#e9bb1f",
                    onClick: function onClick() {
                      if (isAuthorized) {
                        setChangeRps(true);
                      }
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 277,
                    columnNumber: 27
                  }, this)
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.formDiv,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Lote NFS-e: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
                label: "Lote NFS-e",
                type: "number",
                variant: "outlined",
                className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.inputForm,
                disabled: !changeNfs,
                value: nfseParams.LOTENFSE,
                onChange: function onChange(event) {
                  return setNfseParms(_objectSpread(_objectSpread({}, nfseParams), {}, {
                    LOTENFSE: Number(event.target.value)
                  }));
                },
                InputProps: {
                  endAdornment: changeNfs ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiCheck"], {
                    size: 30,
                    color: "#28aa0f",
                    onClick: handleSubmitNFSE
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 307,
                    columnNumber: 27
                  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiEdit"], {
                    size: 30,
                    color: "#e9bb1f",
                    onClick: function onClick() {
                      if (isAuthorized) {
                        setChangeNfs(true);
                      }
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 313,
                    columnNumber: 27
                  }, this)
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 292,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_8__["ToastContainer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 13
        }, this)]
      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(ParametrosGerais, "+YKmgA2DH28PIPfMs57h9MXoSks=", false, function () {
  return [_contexts_auth__WEBPACK_IMPORTED_MODULE_11__["useAuth"], _contexts_api__WEBPACK_IMPORTED_MODULE_15__["useApi"], _contexts_config__WEBPACK_IMPORTED_MODULE_18__["useConfig"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJhcGkiLCJQYXJhbWV0cm9zR2VyYWlzIiwidXNlU3RhdGUiLCJuZnNlUGFyYW1zIiwic2V0TmZzZVBhcm1zIiwiQUxJUUlDTVMiLCJhbGlxSWNtcyIsInNldEFsaXFJY21zIiwiaXNVcGRhdGluZyIsInNldElzVXBkYXRpbmciLCJjaGFuZ2VScHMiLCJzZXRDaGFuZ2VScHMiLCJjaGFuZ2VOZnMiLCJzZXRDaGFuZ2VOZnMiLCJjaGFuZ2VBbGlxSWNtcyIsInNldENoYW5nZUFsaXFJY21zIiwiYmFyQ29kZUMiLCJpc0NoYW5naW5nQ2xpZW50ZU9TIiwic2V0SXNDaGFuZ2luZ0NsaWVudGVPUyIsIm51bWVyb09zVHJvY2FDbGllbnRlIiwic2V0Tm51bWVyb09zVHJvY2FDbGllbnRlIiwidXNlQXV0aCIsInVzZXIiLCJ1c2VBcGkiLCJnZXRBcGkiLCJ1c2VDb25maWciLCJjb25maWciLCJjaGFuZ2VDb25maWciLCJjbGllbnRlUmVmIiwidXNlUmVmIiwiaXNBdXRob3JpemVkIiwicGVybWlzc2lvbnMiLCJwYXJhbWV0cm9zR2VyYWlzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJwYXJhbXNORlNlIiwiaGFuZGxlU3VibWl0TkZTRSIsImRhdGFPYmoiLCJsb3RlTkZTRSIsIkxPVEVORlNFIiwibG90ZVJQUyIsIkxPVEVSUFMiLCJwb3N0Iiwic3RhdHVzIiwibm90aWZ5IiwiaGFuZGxlU3VibWl0QWxpcUljbXMiLCJjaGFuZ2VDbGllbnRlT3MiLCJjdXJyZW50IiwiZ2V0TXlTdGF0ZSIsIm9zIiwiY2xpZW50ZSIsIkNPRENMSUVOVEUiLCJtZXNzYWdlIiwic3R5bGVzIiwibG9hZGluZyIsImhpZGRlbiIsIndyYXBwZXIiLCJwYXJhbVNlc3Npb24iLCJmb3JtRGl2IiwibWFyZ2luTGVmdCIsImNvbG9yIiwiaW5wdXRGb3JtIiwiZm9ybVBhcm0iLCJzaHJpbmsiLCJudW1lcm9PcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImV2ZW50IiwiTnVtYmVyIiwiZW5kQWRvcm5tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RTtBQUNZO0FBQ1k7QUFDdEI7QUFDMUQ7QUFDZixTQUFTLHlGQUFjLFNBQVMsK0ZBQW9CLFlBQVkscUdBQTBCLFlBQVksMEZBQWU7QUFDckgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBV0EsSUFBTUEsU0FBUyxHQUFHLElBQUlDLDBEQUFKLEVBQWxCO0FBQ0EsSUFBSUMsR0FBSjtBQUVlLFNBQVNDLGdCQUFULEdBQTRCO0FBQUE7O0FBQUEsa0JBQ05DLHNEQUFRLEVBREY7QUFBQSxNQUNsQ0MsVUFEa0M7QUFBQSxN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RUFDRUUscUQsRUFDY0UsMkQ7OztLQWhCWHhCLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzLjIyNjJmODAwNzVmNjY3MzM2ZDJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCB7XHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBNZW51SXRlbSxcclxuICBTZWxlY3QsXHJcbiAgVGV4dEZpZWxkLFxyXG4gIFRvb2x0aXAsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGaUNoZWNrLCBGaUVkaXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IHsgU2VhcmNoQ2xpZW50SW5wdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZWFyY2hDbGllbnRlSW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hdXRoXCI7XHJcblxyXG5pbXBvcnQgU2VtUGVybWlzc2FvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlbVBlcm1pc3Nhb1wiO1xyXG5pbXBvcnQgeyBTaG93VG9hc3QgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdG9hc3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgZ2V0QWN0aXZlVHJhbnNhY3Rpb24gfSBmcm9tIFwiQHNlbnRyeS9yZWFjdC9kaXN0L3Byb2ZpbGVyXCI7XHJcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hcGlcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lUXVlc3Rpb25DaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcclxuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2NvbmZpZ1wiO1xyXG5cclxuaW50ZXJmYWNlIElORlNFIHtcclxuICBMT1RFTkZTRTogbnVtYmVyO1xyXG4gIExPVEVSUFM6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElBbGlxSWNtcyB7XHJcbiAgQUxJUUlDTVM6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3Qgc2hvd1RvYXN0ID0gbmV3IFNob3dUb2FzdCgpO1xyXG5sZXQgYXBpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFyYW1ldHJvc0dlcmFpcygpIHtcclxuICBjb25zdCBbbmZzZVBhcmFtcywgc2V0TmZzZVBhcm1zXSA9IHVzZVN0YXRlPElORlNFPigpO1xyXG4gIGNvbnN0IFthbGlxSWNtcywgc2V0QWxpcUljbXNdID0gdXNlU3RhdGU8SUFsaXFJY21zPih7IEFMSVFJQ01TOiAwIH0pO1xyXG4gIGNvbnN0IFtpc1VwZGF0aW5nLCBzZXRJc1VwZGF0aW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2NoYW5nZVJwcywgc2V0Q2hhbmdlUnBzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbY2hhbmdlTmZzLCBzZXRDaGFuZ2VOZnNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFuZ2VBbGlxSWNtcywgc2V0Q2hhbmdlQWxpcUljbXNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtiYXJDb2RlQ11cclxuICBjb25zdCBbaXNDaGFuZ2luZ0NsaWVudGVPUywgc2V0SXNDaGFuZ2luZ0NsaWVudGVPU10gPVxyXG4gICAgdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBbbnVtZXJvT3NUcm9jYUNsaWVudGUsIHNldE5udW1lcm9Pc1Ryb2NhQ2xpZW50ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGdldEFwaSB9ID0gdXNlQXBpKCk7XHJcbiAgY29uc3QgeyBjb25maWcsIGNoYW5nZUNvbmZpZyB9ID0gdXNlQ29uZmlnKCk7XHJcblxyXG4gIGNvbnN0IGNsaWVudGVSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGlzQXV0aG9yaXplZCA9XHJcbiAgICB1c2VyPy5wZXJtaXNzaW9ucy5wYXJhbWV0cm9zR2VyYWlzICE9PSBcIlNPTUVOVEVfQ09OU1VMVEFcIjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNvbmZpZyk7XHJcbiAgICBnZXRBcGkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgYXBpID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICBhcGkuZ2V0KFwiL3BhcmFtZXRyb3MvbmZzZVwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldE5mc2VQYXJtcyhyZXNwb25zZS5kYXRhLnBhcmFtc05GU2VbMF0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgfSwgW2NvbmZpZ10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRORlNFID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YU9iaiA9IHtcclxuICAgICAgbG90ZU5GU0U6IG5mc2VQYXJhbXMuTE9URU5GU0UsXHJcbiAgICAgIGxvdGVSUFM6IG5mc2VQYXJhbXMuTE9URVJQUyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9wYXJhbWV0cm9zL25mc2VcIiwgZGF0YU9iaik7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsdGVyYcOnw6NvIGVudmlhZGEgYW8gc2lzdGVtYVwiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWxnbyBkZXUgZXJyYWRvXCIsIFwiZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hhbmdlUnBzKGZhbHNlKTtcclxuICAgIHNldENoYW5nZU5mcyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0QWxpcUljbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc1VwZGF0aW5nKHRydWUpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9wYXJhbWV0cm9zL2F0dWFsaXphLWFsaXFcIiwgYWxpcUljbXMpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbMOtcXVvdGEgYWx0ZXJhZGEgY29tIHN1Y2Vzc29cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElzVXBkYXRpbmcoZmFsc2UpO1xyXG4gICAgc2V0Q2hhbmdlQWxpcUljbXMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNsaWVudGVPcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgIW51bWVyb09zVHJvY2FDbGllbnRlIHx8XHJcbiAgICAgIG51bWVyb09zVHJvY2FDbGllbnRlIDw9IDAgfHxcclxuICAgICAgIWNsaWVudGVSZWYuY3VycmVudD8uZ2V0TXlTdGF0ZSgpXHJcbiAgICApIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcclxuICAgICAgICBcIlByZWVuY2hhIGNvcnJldGFtZW50ZSBvIG7Dum1lcm8gZGEgTy5TLiBlIG8gbm92byBjbGllbnRlXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvcGFyYW1ldHJvcy9hdHVhbGl6YS1jbGllbnRlLW9zXCIsIHtcclxuICAgICAgICBvczogbnVtZXJvT3NUcm9jYUNsaWVudGUsXHJcbiAgICAgICAgY2xpZW50ZTogY2xpZW50ZVJlZi5jdXJyZW50Py5nZXRNeVN0YXRlKCkuQ09EQ0xJRU5URSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJDbGllbnRlIGFsdGVyYWRvIGNvbSBzdWNlc3NvXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWxnbyBkZXUgZXJyYWRvXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIFwiZXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc1VwZGF0aW5nID8gc3R5bGVzLmxvYWRpbmcgOiBzdHlsZXMuaGlkZGVufT5cclxuICAgICAgICA8TG9hZGVyIHR5cGU9XCJCYXJzXCIgY29sb3I9XCIjQjIzMjM3XCIgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMucGFyYW1ldHJvc0dlcmFpcyAhPT0gXCJTRU1fQUNFU1NPXCIgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDI+UGFyw6JtZXRyb3MgR2VyYWlzPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhbVNlc3Npb259PlxyXG4gICAgICAgICAgICAgIDxoMj5Qcm9kdXRvczwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiRGVmaW5lIGEgcXVhbnRpZGFkZSBkZSBjYXJhY3RlcmVzIHF1ZSBzZXLDo28gZ2VyYWRvcyBwYXJhIG8gY8OzZGlnbyBkZSBiYXJyYXMgZG9zIHByb2R1dG9zIGNvbSBncmFkZSBhdHJhdsOpcyBkYSByb3RpbmEgJ0dlcmFyIEPDs2RpZ28gZGUgQmFycmFzJ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICBRdGQuIENhcmFjdGVyZXMgQ8OzZC4gQmFycmFzIC0gR3JhZGV7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjZweFwiLCBjb2xvcjogXCIjYjIzMjM3XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9OlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT17MTJ9IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Rm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MTJ9PjEyIENhcmFjdGVyZXM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezEzfT4xMyBDYXJhY3RlcmVzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyYW1TZXNzaW9ufT5cclxuICAgICAgICAgICAgICA8aDI+RmlzY2FsPC9oMj5cclxuICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybURpdn0+XHJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQXR1YWxpemEgYSBhbMOtcXVvdGEgZGUgSUNNUyBkZSB0b2RvcyBvcyBwcm9kdXRvcyBxdWUgcG9zc3VlbSBDU1QgMDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBdHVhbGl6YXIgQWzDrXF1b3RhIElDTVN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lUXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI2cHhcIiwgY29sb3I6IFwiI2IyMzIzN1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge1wiICBcIn06XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFsaXEuIElDTVNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjaGFuZ2VBbGlxSWNtc31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FsaXFJY21zLkFMSVFJQ01TfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRBbGlxSWNtcyh7IEFMSVFJQ01TOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZUFsaXFJY21zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzI4YWEwZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0QWxpcUljbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U5YmIxZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGFuZ2VBbGlxSWNtcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmFtU2Vzc2lvbn0+XHJcbiAgICAgICAgICAgICAgPGgyPk5GUy1lIC8gTy5TLjwvaDI+XHJcbiAgICAgICAgICAgICAge25mc2VQYXJhbXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybVBhcm19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1EaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkFsdGVyYXIgY2xpZW50ZSBkYSBPLlMuOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk7Dum1lcm8gZGEgTy5TLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVtZXJvT3NUcm9jYUNsaWVudGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQXV0aG9yaXplZCB8fCAhaXNDaGFuZ2luZ0NsaWVudGVPU31cclxuICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubnVtZXJvT3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5udW1lcm9Pc1Ryb2NhQ2xpZW50ZSgrZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQ2xpZW50SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNBdXRob3JpemVkIHx8ICFpc0NoYW5naW5nQ2xpZW50ZU9TfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXtjbGllbnRlUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFpc0NoYW5naW5nQ2xpZW50ZU9TID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0NoYW5naW5nQ2xpZW50ZU9TKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI4cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlOWJiMWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hhbmdlQ2xpZW50ZU9zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjhweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezI1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb3RlIFJQUzogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTG90ZSBSUFNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjaGFuZ2VScHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmZzZVBhcmFtcy5MT1RFUlBTfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmZzZVBhcm1zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZnNlUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExPVEVSUFM6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZVJwcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0TkZTRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTliYjFmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZVJwcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRGl2fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb3RlIE5GUy1lOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMb3RlIE5GUy1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2hhbmdlTmZzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25mc2VQYXJhbXMuTE9URU5GU0V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZnNlUGFybXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5mc2VQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTE9URU5GU0U6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IGNoYW5nZU5mcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlDaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMyOGFhMGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0TkZTRX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTliYjFmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5nZU5mcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFNlbVBlcm1pc3NhbyAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9