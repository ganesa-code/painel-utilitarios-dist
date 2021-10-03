webpackHotUpdate_N_E("pages/configuracoes",{

/***/ "./src/pages/configuracoes/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/configuracoes/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Configuracoes; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/configuracoes/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/toast */ "./src/services/toast.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _contexts_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../contexts/config */ "./src/contexts/config.tsx");
/* harmony import */ var _components_SemPermissao__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/SemPermissao */ "./src/components/SemPermissao/index.tsx");
/* harmony import */ var _contexts_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../contexts/api */ "./src/contexts/api.tsx");






var _jsxFileName = "C:\\Users\\Bruno Jagmin\\Desktop\\Ganesa\\utilitarios-resulth\\frontend\\src\\pages\\configuracoes\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
var showToast = new _services_toast__WEBPACK_IMPORTED_MODULE_10__["ShowToast"]();
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      marginTop: "2rem",
      minWidth: 300,
      maxWidth: 300
    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      margin: 2
    },
    noLabel: {
      marginTop: theme.spacing(3)
    }
  };
});
var api;
function Configuracoes() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      filiais = _useState[0],
      setFiliais = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      selectedFilial = _useState2[0],
      setSelectedFilial = _useState2[1];

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_7__["useAuth"])(),
      user = _useAuth.user,
      filialPrincipal = _useAuth.filialPrincipal,
      changeFilial = _useAuth.changeFilial;

  var _useConfig = Object(_contexts_config__WEBPACK_IMPORTED_MODULE_12__["useConfig"])(),
      config = _useConfig.config,
      changeConfig = _useConfig.changeConfig;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      newConfig = _useState3[0],
      setNewConfig = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      mailConfig = _useState4[0],
      setMailConfig = _useState4[1];

  var classes = useStyles();

  var _useApi = Object(_contexts_api__WEBPACK_IMPORTED_MODULE_14__["useApi"])(),
      getApi = _useApi.getApi;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getApi.then(function (response) {
      api = response;
      api.get("/config/filiais").then(function (response) {
        if (response.data.filiaisParsed) {
          setFiliais(response.data.filiaisParsed);
        }
      });
      api.get("/config/email").then(function (response) {
        if (response.data.config) {
          setMailConfig(response.data.config);
        }
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setNewConfig(config);
  }, [config]);

  var handleFilialChange = function handleFilialChange(filial) {
    js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set("filial", filial);
    changeFilial(filial);
  };

  var handleSubmit = function handleSubmit() {
    changeConfig(newConfig);
  };

  var handleUpdateEmail = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response, _response;

      return C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(mailConfig.port <= 0 || mailConfig.host === "" || mailConfig.auth.user === "" || mailConfig.auth.pass === "")) {
                _context.next = 3;
                break;
              }

              showToast.notify("Preencha todos os campos para atualizar os dados de e-mail", "warning");
              return _context.abrupt("return");

            case 3:
              _context.prev = 3;
              _context.next = 6;
              return api.post("/config/email", _objectSpread(_objectSpread({}, mailConfig), {}, {
                port: +mailConfig.port
              }));

            case 6:
              response = _context.sent;

              if (response.data.status === "ok") {
                showToast.notify("Dados de e-mail atualizados com sucesso", "success");
              }

              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              _response = _context.t0.response;
              showToast.notify("Altera\xE7\xF5es n\xE3o salvas.\n        Motivo: ".concat(_response.data.message.errno || _response.data.message.response), "error");

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10]]);
    }));

    return function handleUpdateEmail() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleTestEmail = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var response, _response2;

      return C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return api.get("/config/email/test");

            case 3:
              response = _context2.sent;

              if (response.data.status === "ok") {
                showToast.notify("Email enviado com sucesso", "success");
              }

              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              _response2 = _context2.t0.response;
              showToast.notify("Erro: ".concat(_response2.data.message.errno || _response2.data.message.response), "error");

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function handleTestEmail() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, this), (user === null || user === void 0 ? void 0 : user.permissions.configuracoes) !== "SEM_ACESSO" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Sele\xE7\xE3o de Filiais"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.configForm,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["FormControl"], {
          className: classes.formControl,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["InputLabel"], {
            id: "filiais",
            children: "Filial Principal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Select"], {
            labelId: "filiais",
            defaultValue: filialPrincipal.CODEMPRESA,
            value: selectedFilial,
            disabled: (user === null || user === void 0 ? void 0 : user.permissions.configuracoes) !== "ACESSO_TOTAL",
            input: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Input"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 24
            }, this),
            MenuProps: MenuProps,
            children: filiais === null || filiais === void 0 ? void 0 : filiais.map(function (filial) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["MenuItem"], {
                value: filial.CODEMPRESA,
                onClick: function onClick() {
                  return handleFilialChange(filial);
                },
                children: filial.NOMERED
              }, filial.CODEMPRESA, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        style: {
          backgroundColor: "#B23237",
          color: "#f4f4f4",
          width: "fit-content",
          margin: "3rem auto 0 auto"
        },
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.formButton,
        variant: "contained",
        disabled: (user === null || user === void 0 ? void 0 : user.permissions.configuracoes) !== "ACESSO_TOTAL",
        color: "primary",
        onClick: handleSubmit,
        children: "Confirmar altera\xE7\xF5es"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 11
      }, this), (user === null || user === void 0 ? void 0 : user.USUARIO) === "ADMIN" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mailConfigDiv,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Configura\xE7\xF5es de E-mail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mailConfigInput,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
            label: "Servidor SMTP",
            variant: "outlined",
            InputLabelProps: {
              shrink: true
            },
            value: mailConfig === null || mailConfig === void 0 ? void 0 : mailConfig.host,
            onChange: function onChange(e) {
              return setMailConfig(_objectSpread(_objectSpread({}, mailConfig), {}, {
                host: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
            label: "Porta",
            type: "number",
            variant: "outlined",
            InputLabelProps: {
              shrink: true
            },
            InputProps: {
              inputProps: {
                min: 0
              }
            },
            value: mailConfig === null || mailConfig === void 0 ? void 0 : mailConfig.port,
            onChange: function onChange(e) {
              return setMailConfig(_objectSpread(_objectSpread({}, mailConfig), {}, {
                port: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
            label: "E-mail",
            type: "email",
            variant: "outlined",
            InputLabelProps: {
              shrink: true
            },
            value: mailConfig === null || mailConfig === void 0 ? void 0 : mailConfig.auth.user,
            onChange: function onChange(e) {
              return setMailConfig(_objectSpread(_objectSpread({}, mailConfig), {}, {
                auth: _objectSpread(_objectSpread({}, mailConfig.auth), {}, {
                  user: e.target.value
                })
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
            label: "Senha",
            type: "password",
            variant: "outlined",
            InputLabelProps: {
              shrink: true
            },
            value: mailConfig === null || mailConfig === void 0 ? void 0 : mailConfig.auth.pass,
            onChange: function onChange(e) {
              return setMailConfig(_objectSpread(_objectSpread({}, mailConfig), {}, {
                auth: _objectSpread(_objectSpread({}, mailConfig.auth), {}, {
                  pass: e.target.value
                })
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.mailButtonDiv,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
              variant: "contained",
              style: {
                backgroundColor: "#B23237",
                width: "fit-content",
                color: "#f4f4f4",
                margin: "1rem auto 0 auto"
              },
              color: "primary",
              onClick: handleTestEmail,
              children: "Testar E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
              variant: "contained",
              style: {
                backgroundColor: "#B23237",
                width: "fit-content",
                color: "#f4f4f4",
                margin: "1rem auto 0 auto"
              },
              color: "primary",
              onClick: handleUpdateEmail,
              children: "Salvar altera\xE7\xF5es de E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 13
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 5
  }, this);
}

_s(Configuracoes, "aopMGKg0kSCRMu//b3fpBfj0m48=", false, function () {
  return [_contexts_auth__WEBPACK_IMPORTED_MODULE_7__["useAuth"], _contexts_config__WEBPACK_IMPORTED_MODULE_12__["useConfig"], useStyles, _contexts_api__WEBPACK_IMPORTED_MODULE_14__["useApi"]];
});

_c = Configuracoes;

var _c;

$RefreshReg$(_c, "Configuracoes");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbmZpZ3VyYWNvZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIklURU1fSEVJR0hUIiwiSVRFTV9QQURESU5HX1RPUCIsIk1lbnVQcm9wcyIsIlBhcGVyUHJvcHMiLCJzdHlsZSIsIm1heEhlaWdodCIsIndpZHRoIiwic2hvd1RvYXN0IiwiU2hvd1RvYXN0IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImNoaXBzIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiY2hpcCIsIm5vTGFiZWwiLCJhcGkiLCJDb25maWd1cmFjb2VzIiwidXNlU3RhdGUiLCJmaWxpYWlzIiwic2V0RmlsaWFpcyIsInNlbGVjdGVkRmlsaWFsIiwic2V0U2VsZWN0ZWRGaWxpYWwiLCJ1c2VBdXRoIiwidXNlciIsImZpbGlhbFByaW5jaXBhbCIsImNoYW5nZUZpbGlhbCIsInVzZUNvbmZpZyIsImNvbmZpZyIsImNoYW5nZUNvbmZpZyIsIm5ld0NvbmZpZyIsInNldE5ld0NvbmZpZyIsIm1haWxDb25maWciLCJzZXRNYWlsQ29uZmlnIiwiY2xhc3NlcyIsInVzZUFwaSIsImdldEFwaSIsInVzZUVmZmVjdCIsInRoZW4iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJmaWxpYWlzUGFyc2VkIiwiaGFuZGxlRmlsaWFsQ2hhbmdlIiwiZmlsaWFsIiwiQ29va2llcyIsInNldCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZVVwZGF0ZUVtYWlsIiwicG9ydCIsImhvc3QiLCJhdXRoIiwicGFzcyIsIm5vdGlmeSIsInBvc3QiLCJzdGF0dXMiLCJtZXNzYWdlIiwiZXJybm8iLCJoYW5kbGVUZXN0RW1haWwiLCJzdHlsZXMiLCJ3cmFwcGVyIiwicGVybWlzc2lvbnMiLCJjb25maWd1cmFjb2VzIiwiY29uZmlnRm9ybSIsIkNPREVNUFJFU0EiLCJtYXAiLCJOT01FUkVEIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb3JtQnV0dG9uIiwiVVNVQVJJTyIsIm1haWxDb25maWdEaXYiLCJtYWlsQ29uZmlnSW5wdXQiLCJzaHJpbmsiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dFByb3BzIiwibWluIiwibWFpbEJ1dHRvbkRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUEyQkEsSUFBTUEsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBekI7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLFlBQVUsRUFBRTtBQUNWQyxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFTCxXQUFXLEdBQUcsR0FBZCxHQUFvQkMsZ0JBRDFCO0FBRUxLLFdBQUssRUFBRTtBQUZGO0FBREc7QUFESSxDQUFsQjtBQVNBLElBQU1DLFNBQVMsR0FBRyxJQUFJQywwREFBSixFQUFsQjtBQUVBLElBQU1DLFNBQVMsR0FBR0MscUVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsZUFBVyxFQUFFO0FBQ1hDLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQURHO0FBRVhDLGVBQVMsRUFBRSxNQUZBO0FBR1hDLGNBQVEsRUFBRSxHQUhDO0FBSVhDLGNBQVEsRUFBRTtBQUpDLEtBRDBCO0FBT3ZDQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsY0FBUSxFQUFFO0FBRkwsS0FQZ0M7QUFXdkNDLFFBQUksRUFBRTtBQUNKUixZQUFNLEVBQUU7QUFESixLQVhpQztBQWN2Q1MsV0FBTyxFQUFFO0FBQ1BQLGVBQVMsRUFBRUosS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURKO0FBZDhCLEdBQVo7QUFBQSxD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TyxFQUFFMEMsaUJBVFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTlERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUNKO0FBQUEsb0JBREQsZ0JBZ0pDLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1SkQ7O0dBMVB1Qi9CLGE7VUFJMEJNLHNELEVBRWZJLDJELEVBS2pCekIsUyxFQUVHaUMscUQ7OztLQWJHbEIsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb25maWd1cmFjb2VzLmFhODk4Mzk0MmRmY2NlZGY3ZjJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVRdWVzdGlvbkNpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hdXRoXCI7XHJcblxyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBTaG93VG9hc3QgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdG9hc3RcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUNvbnRyb2xMYWJlbCxcclxuICBGb3JtR3JvdXAsXHJcbiAgSW5wdXQsXHJcbiAgSW5wdXRMYWJlbCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxuICBTd2l0Y2gsXHJcbiAgVGV4dEZpZWxkLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvY29uZmlnXCI7XHJcbmltcG9ydCBTZW1QZXJtaXNzYW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VtUGVybWlzc2FvXCI7XHJcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hcGlcIjtcclxuXHJcbmludGVyZmFjZSBJRmlsaWFsIHtcclxuICBDT0RFTVBSRVNBOiBzdHJpbmc7XHJcbiAgTk9NRUVNUFJFU0E6IHN0cmluZztcclxuICBOT01FUkVEOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJTWFpbENvbmZpZyB7XHJcbiAgaG9zdDogc3RyaW5nO1xyXG4gIHBvcnQ6IG51bWJlcjtcclxuICBhdXRoOiB7XHJcbiAgICB1c2VyOiBzdHJpbmc7XHJcbiAgICBwYXNzOiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJR2VuZXJhbENvbmZpZyB7XHJcbiAgZGF0YWJhc2U6IHN0cmluZztcclxuICBkYmFVc2VyOiBzdHJpbmc7XHJcbiAgZGJhS2V5OiBzdHJpbmc7XHJcbiAgZ2VuZXJhbENvbmZpZzoge1xyXG4gICAgemVyYUVzdG9xdWVGaWxpYWxEaWdpdGFjYW86IGJvb2xlYW47XHJcbiAgICBzb21hU2FsZG9Fc3RvcXVlOiBib29sZWFuO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IElURU1fSEVJR0hUID0gNDg7XHJcbmNvbnN0IElURU1fUEFERElOR19UT1AgPSA4O1xyXG5jb25zdCBNZW51UHJvcHMgPSB7XHJcbiAgUGFwZXJQcm9wczoge1xyXG4gICAgc3R5bGU6IHtcclxuICAgICAgbWF4SGVpZ2h0OiBJVEVNX0hFSUdIVCAqIDQuNSArIElURU1fUEFERElOR19UT1AsXHJcbiAgICAgIHdpZHRoOiAyNTAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBzaG93VG9hc3QgPSBuZXcgU2hvd1RvYXN0KCk7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBmb3JtQ29udHJvbDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgbWFyZ2luVG9wOiBcIjJyZW1cIixcclxuICAgIG1pbldpZHRoOiAzMDAsXHJcbiAgICBtYXhXaWR0aDogMzAwLFxyXG4gIH0sXHJcbiAgY2hpcHM6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgbWFyZ2luOiAyLFxyXG4gIH0sXHJcbiAgbm9MYWJlbDoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmxldCBhcGk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25maWd1cmFjb2VzKCkge1xyXG4gIGNvbnN0IFtmaWxpYWlzLCBzZXRGaWxpYWlzXSA9IHVzZVN0YXRlPElGaWxpYWxbXT4oKTtcclxuICBjb25zdCBbc2VsZWN0ZWRGaWxpYWwsIHNldFNlbGVjdGVkRmlsaWFsXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyLCBmaWxpYWxQcmluY2lwYWwsIGNoYW5nZUZpbGlhbCB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCB7IGNvbmZpZywgY2hhbmdlQ29uZmlnIH0gPSB1c2VDb25maWcoKTtcclxuXHJcbiAgY29uc3QgW25ld0NvbmZpZywgc2V0TmV3Q29uZmlnXSA9IHVzZVN0YXRlPElHZW5lcmFsQ29uZmlnPigpO1xyXG4gIGNvbnN0IFttYWlsQ29uZmlnLCBzZXRNYWlsQ29uZmlnXSA9IHVzZVN0YXRlPElNYWlsQ29uZmlnPigpO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHsgZ2V0QXBpIH0gPSB1c2VBcGkoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFwaS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBhcGkgPSByZXNwb25zZTtcclxuXHJcbiAgICAgIGFwaS5nZXQoXCIvY29uZmlnL2ZpbGlhaXNcIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5maWxpYWlzUGFyc2VkKSB7XHJcbiAgICAgICAgICBzZXRGaWxpYWlzKHJlc3BvbnNlLmRhdGEuZmlsaWFpc1BhcnNlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGFwaS5nZXQoXCIvY29uZmlnL2VtYWlsXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29uZmlnKSB7XHJcbiAgICAgICAgICBzZXRNYWlsQ29uZmlnKHJlc3BvbnNlLmRhdGEuY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TmV3Q29uZmlnKGNvbmZpZyk7XHJcbiAgfSwgW2NvbmZpZ10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWxpYWxDaGFuZ2UgPSAoZmlsaWFsOiBJRmlsaWFsKSA9PiB7XHJcbiAgICBDb29raWVzLnNldChcImZpbGlhbFwiLCBmaWxpYWwpO1xyXG4gICAgY2hhbmdlRmlsaWFsKGZpbGlhbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgY2hhbmdlQ29uZmlnKG5ld0NvbmZpZyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlRW1haWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG1haWxDb25maWcucG9ydCA8PSAwIHx8XHJcbiAgICAgIG1haWxDb25maWcuaG9zdCA9PT0gXCJcIiB8fFxyXG4gICAgICBtYWlsQ29uZmlnLmF1dGgudXNlciA9PT0gXCJcIiB8fFxyXG4gICAgICBtYWlsQ29uZmlnLmF1dGgucGFzcyA9PT0gXCJcIlxyXG4gICAgKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXHJcbiAgICAgICAgXCJQcmVlbmNoYSB0b2RvcyBvcyBjYW1wb3MgcGFyYSBhdHVhbGl6YXIgb3MgZGFkb3MgZGUgZS1tYWlsXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvY29uZmlnL2VtYWlsXCIsIHtcclxuICAgICAgICAuLi5tYWlsQ29uZmlnLFxyXG4gICAgICAgIHBvcnQ6ICttYWlsQ29uZmlnLnBvcnQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgICBzaG93VG9hc3Qubm90aWZ5KFwiRGFkb3MgZGUgZS1tYWlsIGF0dWFsaXphZG9zIGNvbSBzdWNlc3NvXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGVycjtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcclxuICAgICAgICBgQWx0ZXJhw6fDtWVzIG7Do28gc2FsdmFzLlxyXG4gICAgICAgIE1vdGl2bzogJHtcclxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEubWVzc2FnZS5lcnJubyB8fCByZXNwb25zZS5kYXRhLm1lc3NhZ2UucmVzcG9uc2VcclxuICAgICAgICB9YCxcclxuICAgICAgICBcImVycm9yXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUZXN0RW1haWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoXCIvY29uZmlnL2VtYWlsL3Rlc3RcIik7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJFbWFpbCBlbnZpYWRvIGNvbSBzdWNlc3NvXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGVycjtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcclxuICAgICAgICBgRXJybzogJHtcclxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEubWVzc2FnZS5lcnJubyB8fCByZXNwb25zZS5kYXRhLm1lc3NhZ2UucmVzcG9uc2VcclxuICAgICAgICB9YCxcclxuICAgICAgICBcImVycm9yXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb25maWd1cmFjb2VzICE9PSBcIlNFTV9BQ0VTU09cIiA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgyPlNlbGXDp8OjbyBkZSBGaWxpYWlzPC9oMj5cclxuXHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5jb25maWdGb3JtfT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJmaWxpYWlzXCI+RmlsaWFsIFByaW5jaXBhbDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBsYWJlbElkPVwiZmlsaWFpc1wiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpbGlhbFByaW5jaXBhbC5DT0RFTVBSRVNBfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkRmlsaWFsfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXI/LnBlcm1pc3Npb25zLmNvbmZpZ3VyYWNvZXMgIT09IFwiQUNFU1NPX1RPVEFMXCJ9XHJcbiAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0IC8+fVxyXG4gICAgICAgICAgICAgICAgTWVudVByb3BzPXtNZW51UHJvcHN9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2ZpbGlhaXM/Lm1hcCgoZmlsaWFsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17ZmlsaWFsLkNPREVNUFJFU0F9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbGlhbC5DT0RFTVBSRVNBfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbGlhbENoYW5nZShmaWxpYWwpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpbGlhbC5OT01FUkVEfVxyXG4gICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNCMjMyMzdcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjZjRmNGY0XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiM3JlbSBhdXRvIDAgYXV0b1wiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQnV0dG9ufVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXI/LnBlcm1pc3Npb25zLmNvbmZpZ3VyYWNvZXMgIT09IFwiQUNFU1NPX1RPVEFMXCJ9XHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ29uZmlybWFyIGFsdGVyYcOnw7Vlc1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICB7dXNlcj8uVVNVQVJJTyA9PT0gXCJBRE1JTlwiICYmIChcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbENvbmZpZ0Rpdn0+XHJcbiAgICAgICAgICAgICAgPGgyPkNvbmZpZ3VyYcOnw7VlcyBkZSBFLW1haWw8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbENvbmZpZ0lucHV0fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZXJ2aWRvciBTTVRQXCJcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bWFpbENvbmZpZz8uaG9zdH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFpbENvbmZpZyh7IC4uLm1haWxDb25maWcsIGhvc3Q6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBvcnRhXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bWFpbENvbmZpZz8ucG9ydH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFpbENvbmZpZyh7IC4uLm1haWxDb25maWcsIHBvcnQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e21haWxDb25maWc/LmF1dGgudXNlcn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWFpbENvbmZpZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5tYWlsQ29uZmlnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aDogeyAuLi5tYWlsQ29uZmlnLmF1dGgsIHVzZXI6IGUudGFyZ2V0LnZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VuaGFcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttYWlsQ29uZmlnPy5hdXRoLnBhc3N9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNldE1haWxDb25maWcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4ubWFpbENvbmZpZyxcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dGg6IHsgLi4ubWFpbENvbmZpZy5hdXRoLCBwYXNzOiBlLnRhcmdldC52YWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haWxCdXR0b25EaXZ9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjIzMjM3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2Y0ZjRmNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjFyZW0gYXV0byAwIGF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVGVzdEVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVGVzdGFyIEUtbWFpbFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0IyMzIzN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmNGY0ZjRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxcmVtIGF1dG8gMCBhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZUVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2FsdmFyIGFsdGVyYcOnw7VlcyBkZSBFLW1haWxcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxTZW1QZXJtaXNzYW8gLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==