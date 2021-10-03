webpackHotUpdate_N_E("pages/compras",{

/***/ "./src/components/Compras/RequisitarCompras.tsx":
/*!******************************************************!*\
  !*** ./src/components/Compras/RequisitarCompras.tsx ***!
  \******************************************************/
/*! exports provided: RequisitarCompra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequisitarCompra", function() { return RequisitarCompra; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_ui_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui-dropzone */ "./node_modules/material-ui-dropzone/dist/index.es.js");
/* harmony import */ var _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requisitar.module.scss */ "./src/components/Compras/requisitar.module.scss");
/* harmony import */ var _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast */ "./src/services/toast.ts");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SemPermissao__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SemPermissao */ "./src/components/SemPermissao/index.tsx");
/* harmony import */ var _contexts_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../contexts/api */ "./src/contexts/api.tsx");




var _jsxFileName = "C:\\Users\\Bruno Jagmin\\Desktop\\Ganesa\\utilitarios-resulth\\frontend\\src\\components\\Compras\\RequisitarCompras.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var initialFormData = Object.freeze({
  CODPROD: "",
  DESCRICAOPROD: "",
  NOMECLIENTE: "",
  DOCUMENTO: "",
  QUANTIDADESOLICITADA: 1,
  OBSERVACAO: "",
  LINKREFERENCIA: "",
  IMAGENS: [],
  REQUISITADOPOR: ""
});
var showToast = new _services_toast__WEBPACK_IMPORTED_MODULE_8__["ShowToast"]();
var api;
function RequisitarCompra(_ref) {
  _s();

  var _this = this;

  var handleLoadingVisibility = _ref.handleLoadingVisibility,
      isSendingData = _ref.isSendingData;

  //REQUISIÇÃO DE COMPRAS STATE
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialFormData),
      formData = _useState[0],
      setFormData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      produtoSemCadastro = _useState2[0],
      setProdutoSemCadastro = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      produtos = _useState3[0],
      setProdutos = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      clientes = _useState4[0],
      setClientes = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isSearchDivVisible = _useState5[0],
      setIsSearchDivVisible = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isClienteSearchDivVisible = _useState6[0],
      setIsClienteSearchDivVisible = _useState6[1];

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_6__["useAuth"])(),
      filialPrincipal = _useAuth.filialPrincipal,
      user = _useAuth.user;

  var _useApi = Object(_contexts_api__WEBPACK_IMPORTED_MODULE_11__["useApi"])(),
      getApi = _useApi.getApi; //FIM REQUISIÇÃO DE COMPRAS STATE


  var searchRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var clienteSearchRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener("mousedown", handleClickOutside);
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      REQUISITADOPOR: user.USUARIO
    }));
  }, []);

  var handleClickOutside = function handleClickOutside(event) {
    var _searchRef$current, _clienteSearchRef$cur;

    if (!produtoSemCadastro && searchRef && event.target.name === "DESCRICAOPROD") {
      setIsSearchDivVisible(true);
      return;
    }

    if (clienteSearchRef && event.target.name === "NOMECLIENTE") {
      setIsClienteSearchDivVisible(true);
      return;
    }

    if (!produtoSemCadastro && searchRef && !((_searchRef$current = searchRef.current) !== null && _searchRef$current !== void 0 && _searchRef$current.contains(event.target)) || !((_clienteSearchRef$cur = clienteSearchRef.current) !== null && _clienteSearchRef$cur !== void 0 && _clienteSearchRef$cur.contains(event.target))) {
      setIsSearchDivVisible(false);
      setIsClienteSearchDivVisible(false);
      return;
    }
  };

  var handleChange = function handleChange(event) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.name, event.target.value)));
  };

  var searchProduct = function searchProduct(event) {
    setIsSearchDivVisible(true);
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      DESCRICAOPROD: event.target.value
    }));

    if (event.target.value.length > 0) {
      getApi.then(function (apiInstance) {
        api = apiInstance;
        api.post("/produtos", {
          search: event.target.value,
          filial: filialPrincipal
        }).then(function (response) {
          var parsedProdutos = response.data.parsedProdutos.map(function (el) {
            return "".concat(el.CODPROD, " - ").concat(el.DESCRICAO);
          });
          setProdutos(parsedProdutos);
        });
      });
    }

    if (event.target.value.length === 0) {
      setProdutos([]);
    }
  };

  var searchCliente = function searchCliente(event) {
    setIsClienteSearchDivVisible(true);
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      NOMECLIENTE: event.target.value
    }));

    if (event.target.value.length > 0) {
      getApi.then(function (apiInstace) {
        api.post("/clientes", {
          search: event.target.value
        }).then(function (response) {
          var parsedClientes = response.data.parsedClientes.map(function (el) {
            return "".concat(el.CODCLIENTE, " - ").concat(el.NOME);
          });
          setClientes(parsedClientes);
        });
      });
    }

    if (event.target.value.length === 0) {
      setClientes([]);
    }
  };

  var handleEnviarRequisicaoCompra = function handleEnviarRequisicaoCompra() {
    if (formData.DESCRICAOPROD.length <= 1 || formData.QUANTIDADESOLICITADA <= 0) {
      showToast.notify("Preencha o produto e a quantidade corretamente", "warning");
      return;
    }

    handleLoadingVisibility(true);

    if (formData.IMAGENS.length >= 1) {
      var uploadFormData = new FormData();
      formData.IMAGENS.forEach(function (file) {
        uploadFormData.append("img", file);
      });
      api.post("/compras/uploads", uploadFormData).then(function (response) {
        if (response.data.locations) {
          var images = response.data.locations;
          setFormData(_objectSpread(_objectSpread({}, formData), {}, {
            IMAGENS: images
          }));
          api.post("/compras", _objectSpread(_objectSpread({}, formData), {}, {
            IMAGENS: images
          })).then(function (comprasResponse) {
            if (comprasResponse.data.status === "ok") {
              showToast.notify("Requisição de compra enviada com sucesso", "success");
              setFormData(_objectSpread(_objectSpread({}, initialFormData), {}, {
                REQUISITADOPOR: user.USUARIO
              }));
            } else {
              showToast.notify("Algo deu errado", "error");
            }
          });
        }

        handleLoadingVisibility(false);
      });
    } else {
      api.post("/compras", formData).then(function (comprasResponse) {
        if (comprasResponse.data.status === "ok") {
          showToast.notify("Requisição de compra enviada com sucesso", "success");
          setFormData(_objectSpread(_objectSpread({}, initialFormData), {}, {
            REQUISITADOPOR: user.USUARIO
          }));
        } else {
          showToast.notify("Algo deu errado", "error");
        }

        handleLoadingVisibility(false);
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sectionWrapper,
    children: (user === null || user === void 0 ? void 0 : user.permissions.comprasRequisitar) !== "SEM_ACESSO" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Requisitar Compra"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControlLabel"], {
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
              size: "medium",
              disabled: user.permissions.comprasRequisitar !== "ACESSO_TOTAL",
              checked: produtoSemCadastro,
              color: "primary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 19
            }, this),
            label: "Produto sem cadastro",
            onChange: function onChange() {
              setProdutoSemCadastro(function (state) {
                return !state;
              });
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inputGrid,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.produtoInput,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
              label: "Produto*",
              name: "DESCRICAOPROD",
              autoComplete: "off",
              disabled: user.permissions.comprasRequisitar !== "ACESSO_TOTAL",
              variant: "outlined",
              value: formData.DESCRICAOPROD,
              onChange: produtoSemCadastro ? handleChange : searchProduct
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 17
            }, this), !produtoSemCadastro && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              ref: searchRef,
              className: "".concat(_requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.searchResult, " ").concat(isSearchDivVisible ? _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.visible : _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.invisible),
              children: produtos.map(function (el) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  onClick: function onClick() {
                    handleChange({
                      target: {
                        name: "DESCRICAOPROD",
                        value: el
                      }
                    });
                    setIsSearchDivVisible(false);
                  },
                  children: el
                }, el.split(" ")[0], false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.clienteInput,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
              label: "Cliente",
              name: "NOMECLIENTE",
              autoComplete: "off",
              disabled: user.permissions.comprasRequisitar !== "ACESSO_TOTAL",
              variant: "outlined",
              value: formData.NOMECLIENTE,
              onChange: searchCliente
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 17
            }, this), clientes && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              ref: clienteSearchRef,
              className: "".concat(_requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.searchResult, " ").concat(isClienteSearchDivVisible ? _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.visible : _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.invisible),
              children: clientes.map(function (el) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  onClick: function onClick() {
                    handleChange({
                      target: {
                        name: "NOMECLIENTE",
                        value: el
                      }
                    });
                    setIsClienteSearchDivVisible(false);
                  },
                  children: el
                }, el.split(" ")[0], false, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 23
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            label: "Documento",
            type: "text",
            disabled: user.permissions.comprasRequisitar !== "ACESSO_TOTAL",
            name: "DOCUMENTO",
            variant: "outlined",
            value: formData.DOCUMENTO,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            label: "Quantidade*",
            type: "number",
            variant: "outlined",
            name: "QUANTIDADESOLICITADA",
            disabled: user.permissions.comprasRequisitar !== "ACESSO_TOTAL",
            InputProps: {
              inputProps: {
                min: 0
              }
            },
            value: formData.QUANTIDADESOLICITADA,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
            label: "Link Refer\xEAncia",
            variant: "outlined",
            autoComplete: "false",
            name: "LINKREFERENCIA",
            disabled: user.permissions.comprasRequisitar !== "ACESSO_TOTAL",
            value: formData.LINKREFERENCIA,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          id: "OBSERVACAO",
          autoComplete: "false",
          name: "OBSERVACAO",
          disabled: user.permissions.comprasRequisitar !== "ACESSO_TOTAL",
          value: formData.OBSERVACAO,
          placeholder: "Observa\xE7\xE3o",
          onChange: handleChange,
          cols: 30,
          rows: 5
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_4__["DropzoneArea"], {
          dropzoneText: "Arraste e solte uma foto ou clique para selecionar",
          acceptedFiles: ["image/jpeg", "image/png", "image/jpg", "image/bmp"],
          dropzoneClass: _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inputWideFields,
          previewGridClasses: {
            container: _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dropzonePreviewContainer,
            item: _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dropzonePreviewItem
          },
          onChange: function onChange(el) {
            if (user.permissions.comprasRequisitar === "ACESSO_TOTAL") {
              setFormData(_objectSpread(_objectSpread({}, formData), {}, {
                IMAGENS: el
              }));
            }
          },
          maxFileSize: 5242880
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          backgroundColor: "#B23237"
        },
        className: _requisitar_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.formButton,
        variant: "contained",
        color: "primary",
        disabled: user.permissions.comprasRequisitar !== "ACESSO_TOTAL",
        onClick: handleEnviarRequisicaoCompra,
        children: "Enviar requisi\xE7\xE3o"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SemPermissao__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 217,
    columnNumber: 5
  }, this);
}

_s(RequisitarCompra, "pvD72rexhe1wj3G1M/2qscwdK+4=", false, function () {
  return [_contexts_auth__WEBPACK_IMPORTED_MODULE_6__["useAuth"], _contexts_api__WEBPACK_IMPORTED_MODULE_11__["useApi"]];
});

_c = RequisitarCompra;

var _c;

$RefreshReg$(_c, "RequisitarCompra");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29tcHJhcy9SZXF1aXNpdGFyQ29tcHJhcy50c3giXSwibmFtZXMiOlsiaW5pdGlhbEZvcm1EYXRhIiwiT2JqZWN0IiwiZnJlZXplIiwiQ09EUFJPRCIsIkRFU0NSSUNBT1BST0QiLCJOT01FQ0xJRU5URSIsIkRPQ1VNRU5UTyIsIlFVQU5USURBREVTT0xJQ0lUQURBIiwiT0JTRVJWQUNBTyIsIkxJTktSRUZFUkVOQ0lBIiwiSU1BR0VOUyIsIlJFUVVJU0lUQURPUE9SIiwic2hvd1RvYXN0IiwiU2hvd1RvYXN0IiwiYXBpIiwiUmVxdWlzaXRhckNvbXByYSIsImhhbmRsZUxvYWRpbmdWaXNpYmlsaXR5IiwiaXNTZW5kaW5nRGF0YSIsInVzZVN0YXRlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInByb2R1dG9TZW1DYWRhc3RybyIsInNldFByb2R1dG9TZW1DYWRhc3RybyIsInByb2R1dG9zIiwic2V0UHJvZHV0b3MiLCJjbGllbnRlcyIsInNldENsaWVudGVzIiwiaXNTZWFyY2hEaXZWaXNpYmxlIiwic2V0SXNTZWFyY2hEaXZWaXNpYmxlIiwiaXNDbGllbnRlU2VhcmNoRGl2VmlzaWJsZSIsInNldElzQ2xpZW50ZVNlYXJjaERpdlZpc2libGUiLCJ1c2VBdXRoIiwiZmlsaWFsUHJpbmNpcGFsIiwidXNlciIsInVzZUFwaSIsImdldEFwaSIsInNlYXJjaFJlZiIsInVzZVJlZiIsImNsaWVudGVTZWFyY2hSZWYiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiVVNVQVJJTyIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsImN1cnJlbnQiLCJjb250YWlucyIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwic2VhcmNoUHJvZHVjdCIsImxlbmd0aCIsInRoZW4iLCJhcGlJbnN0YW5jZSIsInBvc3QiLCJzZWFyY2giLCJmaWxpYWwiLCJyZXNwb25zZSIsInBhcnNlZFByb2R1dG9zIiwiZGF0YSIsIm1hcCIsImVsIiwiREVTQ1JJQ0FPIiwic2VhcmNoQ2xpZW50ZSIsImFwaUluc3RhY2UiLCJwYXJzZWRDbGllbnRlcyIsIkNPRENMSUVOVEUiLCJOT01FIiwiaGFuZGxlRW52aWFyUmVxdWlzaWNhb0NvbXByYSIsIm5vdGlmeSIsInVwbG9hZEZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiZmlsZSIsImFwcGVuZCIsImxvY2F0aW9ucyIsImltYWdlcyIsImNvbXByYXNSZXNwb25zZSIsInN0YXR1cyIsInN0eWxlcyIsInNlY3Rpb25XcmFwcGVyIiwicGVybWlzc2lvbnMiLCJjb21wcmFzUmVxdWlzaXRhciIsInN0YXRlIiwiaW5wdXRHcmlkIiwicHJvZHV0b0lucHV0Iiwic2VhcmNoUmVzdWx0IiwidmlzaWJsZSIsImludmlzaWJsZSIsInNwbGl0IiwiY2xpZW50ZUlucHV0IiwiaW5wdXRQcm9wcyIsIm1pbiIsImlucHV0V2lkZUZpZWxkcyIsImNvbnRhaW5lciIsImRyb3B6b25lUHJldmlld0NvbnRhaW5lciIsIml0ZW0iLCJkcm9wem9uZVByZXZpZXdJdGVtIiwiYmFja2dyb3VuZENvbG9yIiwiZm9ybUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ3BDQyxTQUFPLEVBQUUsRUFEMkI7QUFFcENDLGVBQWEsRUFBRSxFQUZxQjtBQUdwQ0MsYUFBVyxFQUFFLEVBSHVCO0FBSXBDQyxXQUFTLEVBQUUsRUFKeUI7QUFLcENDLHNCQUFvQixFQUFFLENBTGM7QUFNcENDLFlBQVUsRUFBRSxFQU53QjtBQU9wQ0MsZ0JBQWMsRUFBRSxFQVBvQjtBQVFwQ0MsU0FBTyxFQUFFLEVBUjJCO0FBU3BDQyxnQkFBYyxFQUFF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QUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXRMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyTEQ7O0dBN1dldEQsZ0I7VUFhb0JnQixzRCxFQUNmRyxxRDs7O0tBZExuQixnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21wcmFzLmQxYzE4YTJjMDAzMWM1MGI2Yzc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBGb3JtQ29udHJvbExhYmVsLFxyXG4gIEZvcm1Hcm91cCxcclxuICBTd2l0Y2gsXHJcbiAgVGV4dEZpZWxkLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRHJvcHpvbmVBcmVhIH0gZnJvbSBcIm1hdGVyaWFsLXVpLWRyb3B6b25lXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcmVxdWlzaXRhci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGhcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgU2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RvYXN0XCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IFNlbVBlcm1pc3NhbyBmcm9tIFwiLi4vU2VtUGVybWlzc2FvXCI7XHJcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hcGlcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxGb3JtRGF0YSA9IE9iamVjdC5mcmVlemUoe1xyXG4gIENPRFBST0Q6IFwiXCIsXHJcbiAgREVTQ1JJQ0FPUFJPRDogXCJcIixcclxuICBOT01FQ0xJRU5URTogXCJcIixcclxuICBET0NVTUVOVE86IFwiXCIsXHJcbiAgUVVBTlRJREFERVNPTElDSVRBREE6IDEsXHJcbiAgT0JTRVJWQUNBTzogXCJcIixcclxuICBMSU5LUkVGRVJFTkNJQTogXCJcIixcclxuICBJTUFHRU5TOiBbXSxcclxuICBSRVFVSVNJVEFET1BPUjogXCJcIixcclxufSk7XHJcblxyXG5jb25zdCBzaG93VG9hc3QgPSBuZXcgU2hvd1RvYXN0KCk7XHJcbmxldCBhcGk7XHJcblxyXG5pbnRlcmZhY2UgUmVxdWlzdGFyQ29tcHJhUHJvcHMge1xyXG4gIGhhbmRsZUxvYWRpbmdWaXNpYmlsaXR5OiAoc3RhdGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgaXNTZW5kaW5nRGF0YTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlcXVpc2l0YXJDb21wcmEoe1xyXG4gIGhhbmRsZUxvYWRpbmdWaXNpYmlsaXR5LFxyXG4gIGlzU2VuZGluZ0RhdGEsXHJcbn06IFJlcXVpc3RhckNvbXByYVByb3BzKSB7XHJcbiAgLy9SRVFVSVNJw4fDg08gREUgQ09NUFJBUyBTVEFURVxyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoaW5pdGlhbEZvcm1EYXRhKTtcclxuICBjb25zdCBbcHJvZHV0b1NlbUNhZGFzdHJvLCBzZXRQcm9kdXRvU2VtQ2FkYXN0cm9dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtwcm9kdXRvcywgc2V0UHJvZHV0b3NdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBbY2xpZW50ZXMsIHNldENsaWVudGVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3QgW2lzU2VhcmNoRGl2VmlzaWJsZSwgc2V0SXNTZWFyY2hEaXZWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbaXNDbGllbnRlU2VhcmNoRGl2VmlzaWJsZSwgc2V0SXNDbGllbnRlU2VhcmNoRGl2VmlzaWJsZV0gPVxyXG4gICAgdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IGZpbGlhbFByaW5jaXBhbCwgdXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZ2V0QXBpIH0gPSB1c2VBcGkoKTtcclxuICAvL0ZJTSBSRVFVSVNJw4fDg08gREUgQ09NUFJBUyBTVEFURVxyXG5cclxuICBjb25zdCBzZWFyY2hSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGNsaWVudGVTZWFyY2hSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFJFUVVJU0lUQURPUE9SOiB1c2VyLlVTVUFSSU8gfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAhcHJvZHV0b1NlbUNhZGFzdHJvICYmXHJcbiAgICAgIHNlYXJjaFJlZiAmJlxyXG4gICAgICBldmVudC50YXJnZXQubmFtZSA9PT0gXCJERVNDUklDQU9QUk9EXCJcclxuICAgICkge1xyXG4gICAgICBzZXRJc1NlYXJjaERpdlZpc2libGUodHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xpZW50ZVNlYXJjaFJlZiAmJiBldmVudC50YXJnZXQubmFtZSA9PT0gXCJOT01FQ0xJRU5URVwiKSB7XHJcbiAgICAgIHNldElzQ2xpZW50ZVNlYXJjaERpdlZpc2libGUodHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICghcHJvZHV0b1NlbUNhZGFzdHJvICYmXHJcbiAgICAgICAgc2VhcmNoUmVmICYmXHJcbiAgICAgICAgIXNlYXJjaFJlZi5jdXJyZW50Py5jb250YWlucyhldmVudC50YXJnZXQpKSB8fFxyXG4gICAgICAhY2xpZW50ZVNlYXJjaFJlZi5jdXJyZW50Py5jb250YWlucyhldmVudC50YXJnZXQpXHJcbiAgICApIHtcclxuICAgICAgc2V0SXNTZWFyY2hEaXZWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgc2V0SXNDbGllbnRlU2VhcmNoRGl2VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuXHJcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlYXJjaFByb2R1Y3QgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldElzU2VhcmNoRGl2VmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBERVNDUklDQU9QUk9EOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGdldEFwaS50aGVuKChhcGlJbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgIGFwaSA9IGFwaUluc3RhbmNlO1xyXG4gICAgICAgIGFwaVxyXG4gICAgICAgICAgLnBvc3QoXCIvcHJvZHV0b3NcIiwge1xyXG4gICAgICAgICAgICBzZWFyY2g6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgZmlsaWFsOiBmaWxpYWxQcmluY2lwYWwsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFByb2R1dG9zID0gcmVzcG9uc2UuZGF0YS5wYXJzZWRQcm9kdXRvcy5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGAke2VsLkNPRFBST0R9IC0gJHtlbC5ERVNDUklDQU99YDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRQcm9kdXRvcyhwYXJzZWRQcm9kdXRvcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0UHJvZHV0b3MoW10pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlYXJjaENsaWVudGUgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgc2V0SXNDbGllbnRlU2VhcmNoRGl2VmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBOT01FQ0xJRU5URTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBnZXRBcGkudGhlbigoYXBpSW5zdGFjZSkgPT4ge1xyXG4gICAgICAgIGFwaVxyXG4gICAgICAgICAgLnBvc3QoXCIvY2xpZW50ZXNcIiwge1xyXG4gICAgICAgICAgICBzZWFyY2g6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQ2xpZW50ZXMgPSByZXNwb25zZS5kYXRhLnBhcnNlZENsaWVudGVzLm1hcCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gYCR7ZWwuQ09EQ0xJRU5URX0gLSAke2VsLk5PTUV9YDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRDbGllbnRlcyhwYXJzZWRDbGllbnRlcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0Q2xpZW50ZXMoW10pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVudmlhclJlcXVpc2ljYW9Db21wcmEgPSAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGZvcm1EYXRhLkRFU0NSSUNBT1BST0QubGVuZ3RoIDw9IDEgfHxcclxuICAgICAgZm9ybURhdGEuUVVBTlRJREFERVNPTElDSVRBREEgPD0gMFxyXG4gICAgKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXHJcbiAgICAgICAgXCJQcmVlbmNoYSBvIHByb2R1dG8gZSBhIHF1YW50aWRhZGUgY29ycmV0YW1lbnRlXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxvYWRpbmdWaXNpYmlsaXR5KHRydWUpO1xyXG5cclxuICAgIGlmIChmb3JtRGF0YS5JTUFHRU5TLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgIGNvbnN0IHVwbG9hZEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICBmb3JtRGF0YS5JTUFHRU5TLmZvckVhY2goKGZpbGUpID0+IHtcclxuICAgICAgICB1cGxvYWRGb3JtRGF0YS5hcHBlbmQoXCJpbWdcIiwgZmlsZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXBpLnBvc3QoXCIvY29tcHJhcy91cGxvYWRzXCIsIHVwbG9hZEZvcm1EYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxvY2F0aW9ucykge1xyXG4gICAgICAgICAgY29uc3QgaW1hZ2VzOiBzdHJpbmdbXSA9IHJlc3BvbnNlLmRhdGEubG9jYXRpb25zO1xyXG5cclxuICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIElNQUdFTlM6IGltYWdlcyB9KTtcclxuXHJcbiAgICAgICAgICBhcGlcclxuICAgICAgICAgICAgLnBvc3QoXCIvY29tcHJhc1wiLCB7IC4uLmZvcm1EYXRhLCBJTUFHRU5TOiBpbWFnZXMgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGNvbXByYXNSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjb21wcmFzUmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcclxuICAgICAgICAgICAgICAgICAgXCJSZXF1aXNpw6fDo28gZGUgY29tcHJhIGVudmlhZGEgY29tIHN1Y2Vzc29cIixcclxuICAgICAgICAgICAgICAgICAgXCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmluaXRpYWxGb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgICAgUkVRVUlTSVRBRE9QT1I6IHVzZXIuVVNVQVJJTyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWxnbyBkZXUgZXJyYWRvXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhbmRsZUxvYWRpbmdWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcGkucG9zdChcIi9jb21wcmFzXCIsIGZvcm1EYXRhKS50aGVuKChjb21wcmFzUmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoY29tcHJhc1Jlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgIHNob3dUb2FzdC5ub3RpZnkoXHJcbiAgICAgICAgICAgIFwiUmVxdWlzacOnw6NvIGRlIGNvbXByYSBlbnZpYWRhIGNvbSBzdWNlc3NvXCIsXHJcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5pbml0aWFsRm9ybURhdGEsIFJFUVVJU0lUQURPUE9SOiB1c2VyLlVTVUFSSU8gfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJBbGdvIGRldSBlcnJhZG9cIiwgXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhbmRsZUxvYWRpbmdWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbldyYXBwZXJ9PlxyXG4gICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc1JlcXVpc2l0YXIgIT09IFwiU0VNX0FDRVNTT1wiID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgIDxoMz5SZXF1aXNpdGFyIENvbXByYTwvaDM+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyLnBlcm1pc3Npb25zLmNvbXByYXNSZXF1aXNpdGFyICE9PSBcIkFDRVNTT19UT1RBTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Byb2R1dG9TZW1DYWRhc3Ryb31cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQcm9kdXRvIHNlbSBjYWRhc3Ryb1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdXRvU2VtQ2FkYXN0cm8oKHN0YXRlKSA9PiAhc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEdyaWR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b0lucHV0fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcm9kdXRvKlwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJERVNDUklDQU9QUk9EXCJcclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIucGVybWlzc2lvbnMuY29tcHJhc1JlcXVpc2l0YXIgIT09IFwiQUNFU1NPX1RPVEFMXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuREVTQ1JJQ0FPUFJPRH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb2R1dG9TZW1DYWRhc3RybyA/IGhhbmRsZUNoYW5nZSA6IHNlYXJjaFByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgeyFwcm9kdXRvU2VtQ2FkYXN0cm8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtzZWFyY2hSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VhcmNoUmVzdWx0fSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXNTZWFyY2hEaXZWaXNpYmxlID8gc3R5bGVzLnZpc2libGUgOiBzdHlsZXMuaW52aXNpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHV0b3MubWFwKChlbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5zcGxpdChcIiBcIilbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IG5hbWU6IFwiREVTQ1JJQ0FPUFJPRFwiLCB2YWx1ZTogZWwgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1NlYXJjaERpdlZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRlSW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNsaWVudGVcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiTk9NRUNMSUVOVEVcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5wZXJtaXNzaW9ucy5jb21wcmFzUmVxdWlzaXRhciAhPT0gXCJBQ0VTU09fVE9UQUxcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5OT01FQ0xJRU5URX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NlYXJjaENsaWVudGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2NsaWVudGVzICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17Y2xpZW50ZVNlYXJjaFJlZn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWFyY2hSZXN1bHR9ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0NsaWVudGVTZWFyY2hEaXZWaXNpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc3R5bGVzLnZpc2libGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZXMuaW52aXNpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y2xpZW50ZXMubWFwKChlbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5zcGxpdChcIiBcIilbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IG5hbWU6IFwiTk9NRUNMSUVOVEVcIiwgdmFsdWU6IGVsIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNDbGllbnRlU2VhcmNoRGl2VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRvY3VtZW50b1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5wZXJtaXNzaW9ucy5jb21wcmFzUmVxdWlzaXRhciAhPT0gXCJBQ0VTU09fVE9UQUxcIn1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJET0NVTUVOVE9cIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5ET0NVTUVOVE99XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUXVhbnRpZGFkZSpcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIlFVQU5USURBREVTT0xJQ0lUQURBXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLnBlcm1pc3Npb25zLmNvbXByYXNSZXF1aXNpdGFyICE9PSBcIkFDRVNTT19UT1RBTFwifVxyXG4gICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBpbnB1dFByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5RVUFOVElEQURFU09MSUNJVEFEQX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rIFJlZmVyw6puY2lhXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiTElOS1JFRkVSRU5DSUFcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIucGVybWlzc2lvbnMuY29tcHJhc1JlcXVpc2l0YXIgIT09IFwiQUNFU1NPX1RPVEFMXCJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuTElOS1JFRkVSRU5DSUF9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBpZD1cIk9CU0VSVkFDQU9cIlxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiT0JTRVJWQUNBT1wiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIucGVybWlzc2lvbnMuY29tcHJhc1JlcXVpc2l0YXIgIT09IFwiQUNFU1NPX1RPVEFMXCJ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLk9CU0VSVkFDQU99XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPYnNlcnZhw6fDo29cIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgY29scz17MzB9XHJcbiAgICAgICAgICAgICAgcm93cz17NX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9XCJBcnJhc3RlIGUgc29sdGUgdW1hIGZvdG8gb3UgY2xpcXVlIHBhcmEgc2VsZWNpb25hclwiXHJcbiAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17W1xyXG4gICAgICAgICAgICAgICAgXCJpbWFnZS9qcGVnXCIsXHJcbiAgICAgICAgICAgICAgICBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpbWFnZS9qcGdcIixcclxuICAgICAgICAgICAgICAgIFwiaW1hZ2UvYm1wXCIsXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICBkcm9wem9uZUNsYXNzPXtzdHlsZXMuaW5wdXRXaWRlRmllbGRzfVxyXG4gICAgICAgICAgICAgIHByZXZpZXdHcmlkQ2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBzdHlsZXMuZHJvcHpvbmVQcmV2aWV3Q29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgaXRlbTogc3R5bGVzLmRyb3B6b25lUHJldmlld0l0ZW0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGVsOiBGaWxlW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnBlcm1pc3Npb25zLmNvbXByYXNSZXF1aXNpdGFyID09PSBcIkFDRVNTT19UT1RBTFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIElNQUdFTlM6IGVsIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezUyNDI4ODB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjIzMjM3XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1CdXR0b259XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17dXNlci5wZXJtaXNzaW9ucy5jb21wcmFzUmVxdWlzaXRhciAhPT0gXCJBQ0VTU09fVE9UQUxcIn1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRW52aWFyUmVxdWlzaWNhb0NvbXByYX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRW52aWFyIHJlcXVpc2nDp8Ojb1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFNlbVBlcm1pc3NhbyAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9