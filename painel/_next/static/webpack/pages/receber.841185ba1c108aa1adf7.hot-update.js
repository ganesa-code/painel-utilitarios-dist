webpackHotUpdate_N_E("pages/receber",{

/***/ "./src/pages/receber/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/receber/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContasReceber; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/data-grid */ "./node_modules/@material-ui/data-grid/dist/index-esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/toast */ "./src/services/toast.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/receber/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/SemPermissao */ "./src/components/SemPermissao/index.tsx");
/* harmony import */ var _contexts_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../contexts/api */ "./src/contexts/api.tsx");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\pages\\receber\\index.tsx",
    _s = $RefreshSig$();












var api;
var showToast = new _services_toast__WEBPACK_IMPORTED_MODULE_8__["ShowToast"]();
function ContasReceber() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      searchCliente = _useState[0],
      setSearchCliente = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      clientes = _useState2[0],
      setClientes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      selectedCliente = _useState3[0],
      setSelectedCliente = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      isClienteSearchDivVisible = _useState4[0],
      setIsClienteSearchDivVisible = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      columns = _useState5[0],
      setColumns = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      rows = _useState6[0],
      setRows = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      selectedRows = _useState7[0],
      setSelectedRows = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      valorTotalSelecionado = _useState8[0],
      setValorTotalSelecionado = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      totalDocumentos = _useState9[0],
      setTotalDocumentos = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isSendingEmail = _useState10[0],
      setIsSendingEmail = _useState10[1];

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_6__["useAuth"])(),
      filialPrincipal = _useAuth.filialPrincipal,
      user = _useAuth.user;

  var clienteSearchRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);

  var _useApi = Object(_contexts_api__WEBPACK_IMPORTED_MODULE_12__["useApi"])(),
      getApi = _useApi.getApi;

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    getApi.then(function (response) {
      api = response;
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (selectedCliente) {
      api.get("/receber/".concat(filialPrincipal.CODEMPRESA, "/").concat(selectedCliente.CODCLIENTE)).then(function (response) {
        var getRows = response.data.receber.map(function (el) {
          return {
            id: el.CODDOCTO.trim(),
            CODEMPRESA: "".concat(el.CODEMPRESA, " - ").concat(el.NOMEEMPRESA.split(" ")[0]),
            NOME: "".concat(el.CODCLIENTE, " - ").concat(el.NOME),
            EMAIL: el.EMAIL,
            DATAEMISSAO: parseDate(el.DT_EMISSAO),
            DATAVENCIMENTO: parseDate(el.DT_VENCIMENTO),
            VALORTOTAL: parseToLocaleCurrency(el.VALORDOCTO - el.VALORDESC),
            VALORPAGO: parseToLocaleCurrency(el.VALORPAGO),
            OBSERVACAO: el.OBSERVACAO.trim(),
            unparsedValorTotalSelecionado: el.VALORDOCTO - el.VALORDESC,
            unparsedValorPagoSelecionado: el.VALORPAGO,
            TIPODOCTO: el.TIPODOCTO
          };
        });
        var initialColumns = [{
          field: "id",
          headerName: "Documento",
          width: 150,
          headerClassName: "header-data-grid",
          cellClassName: "cell-data-grid"
        }, {
          field: "TIPODOCTO",
          headerName: "Tipo",
          width: 100,
          headerClassName: "header-data-grid",
          cellClassName: "cell-data-grid"
        }, {
          field: "CODEMPRESA",
          headerName: "Empresa",
          width: 150,
          headerClassName: "header-data-grid",
          cellClassName: "cell-data-grid"
        }, {
          field: "NOME",
          headerName: "Cliente",
          width: 300,
          headerClassName: "header-data-grid",
          cellClassName: "cell-data-grid",
          resizable: true
        }, {
          field: "DATAEMISSAO",
          headerName: "Data Emissão",
          width: 150,
          headerClassName: "header-data-grid",
          cellClassName: "cell-data-grid"
        }, {
          field: "DATAVENCIMENTO",
          headerName: "Data Vencimento",
          width: 180,
          headerClassName: "header-data-grid",
          cellClassName: "cell-data-grid"
        }, {
          field: "VALORTOTAL",
          headerName: "Total",
          width: 120,
          headerClassName: "header-data-grid",
          cellClassName: "cell-data-grid"
        }, {
          field: "VALORPAGO",
          headerName: "Pago",
          width: 120,
          headerClassName: "header-data-grid",
          cellClassName: "cell-data-grid"
        }, {
          field: "OBSERVACAO",
          headerName: "Observação",
          width: 290,
          headerClassName: "header-data-grid",
          cellClassName: "cell-data-grid"
        }];
        setColumns(initialColumns);
        setRows(getRows);
      });
    }
  }, [selectedCliente]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    window.addEventListener("mousedown", handleClickOutside);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (rows && rows.length > 1) {
      var total = rows.reduce(function (acc, el) {
        return acc += +el.unparsedValorTotalSelecionado - +el.unparsedValorPagoSelecionado;
      }, 0);
      setTotalDocumentos(total);
    }
  }, [rows]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var total = selectedRows.reduce(function (acc, el) {
      return acc += +el.unparsedValorTotalSelecionado - +el.unparsedValorPagoSelecionado;
    }, 0);
    setValorTotalSelecionado(total);
  }, [selectedRows]);

  var handleSearchCliente = function handleSearchCliente(event) {
    setIsClienteSearchDivVisible(true);
    setSearchCliente(event.target.value);

    if (event.target.value.length > 1) {
      api.post("/clientes", {
        search: event.target.value
      }).then(function (response) {
        setClientes(response.data.parsedClientes);
      });
    } else {
      setIsClienteSearchDivVisible(false);
      setClientes([]);
    }
  };

  var handleClickOutside = function handleClickOutside(event) {
    var _clienteSearchRef$cur;

    if (clienteSearchRef && event.target.name === "NOMECLIENTE") {
      setIsClienteSearchDivVisible(true);
      return;
    }

    if (clienteSearchRef && !((_clienteSearchRef$cur = clienteSearchRef.current) !== null && _clienteSearchRef$cur !== void 0 && _clienteSearchRef$cur.contains(event.target))) {
      setIsClienteSearchDivVisible(false);
      return;
    }
  };

  var parseDate = function parseDate(date) {
    if (date === null) return "";
    var newDate = new Date(date);
    var formattedDate = newDate.toLocaleString().split(" ");
    return formattedDate[0];
  };

  var parseToLocaleCurrency = function parseToLocaleCurrency(val) {
    return val.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  };

  var handleSendEmail = /*#__PURE__*/function () {
    var _ref = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var data, res;
      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(selectedRows.length < 1)) {
                _context.next = 3;
                break;
              }

              showToast.notify("Selecione ao menos um documento para enviar e-mail", "warning");
              return _context.abrupt("return");

            case 3:
              _context.prev = 3;
              setIsSendingEmail(true);
              data = {
                EMAIL: selectedCliente.EMAIL,
                NOME: selectedCliente.NOME,
                valorTotalSelecionado: valorTotalSelecionado,
                documentos: selectedRows
              };
              _context.next = 8;
              return api.post("/receber/".concat(filialPrincipal.CODEMPRESA), data);

            case 8:
              res = _context.sent;
              showToast.notify("E-mail enviado com sucesso!", "success");
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);
              showToast.notify(_context.t0.res.data.message, "error");

            case 15:
              setIsSendingEmail(false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 12]]);
    }));

    return function handleSendEmail() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: isSendingEmail ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.loading : _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.hidden,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_13___default.a, {
        type: "Bars",
        color: "#B23237",
        height: 80,
        width: 80
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "wrapper",
      children: (user === null || user === void 0 ? void 0 : user.permissions.contasAReceber) !== "SEM_ACESSO" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Contas a Receber"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.clienteInput,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
            label: "Cliente",
            name: "NOMECLIENTE",
            autoComplete: "off",
            variant: "outlined",
            value: searchCliente,
            color: "primary",
            onChange: function onChange(e) {
              return handleSearchCliente(e);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 15
          }, this), clientes && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            ref: clienteSearchRef,
            className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.searchResult, " ").concat(isClienteSearchDivVisible ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.visible : _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.invisible),
            children: clientes.map(function (el) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                onClick: function onClick() {
                  setSearchCliente(el.CODCLIENTE + " - " + el.NOME);
                  setSelectedCliente(el);
                  setIsClienteSearchDivVisible(false);
                },
                children: el.CODCLIENTE + " - " + el.NOME
              }, el.CODCLIENTE, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 13
        }, this), selectedCliente && columns && rows && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            variant: "contained",
            color: "primary",
            disabled: (user === null || user === void 0 ? void 0 : user.permissions.contasAReceber) !== "ACESSO_TOTAL" || selec,
            style: {
              backgroundColor: "#B23237",
              color: "#f4f4f4",
              width: "fit-content",
              margin: "0rem auto 1rem 0"
            },
            onClick: handleSendEmail,
            children: "Enviar Notifica\xE7\xE3o ao Cliente"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_4__["DataGrid"], {
            autoHeight: true,
            rows: rows,
            columns: columns,
            pageSize: 15,
            checkboxSelection: true,
            disableSelectionOnClick: true,
            rowsPerPageOptions: [25, 50, 100],
            onSelectionModelChange: function onSelectionModelChange(newSelection) {
              var selectedIds = new Set(newSelection.selectionModel);
              setSelectedRows(rows.filter(function (el) {
                return selectedIds.has(el.id);
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.totais,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Total dos documentos: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 345,
              columnNumber: 19
            }, this), " ", parseToLocaleCurrency(totalDocumentos)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.totais,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Total selecionado: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 19
            }, this), " ", parseToLocaleCurrency(valorTotalSelecionado)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 17
          }, this)]
        }, void 0, true)]
      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(ContasReceber, "5dCDTHblDqtwpmSxkY8fWh13IHU=", false, function () {
  return [_contexts_auth__WEBPACK_IMPORTED_MODULE_6__["useAuth"], _contexts_api__WEBPACK_IMPORTED_MODULE_12__["useApi"]];
});

_c = ContasReceber;

var _c;

$RefreshReg$(_c, "ContasReceber");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlY2ViZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbImFwaSIsInNob3dUb2FzdCIsIlNob3dUb2FzdCIsIkNvbnRhc1JlY2ViZXIiLCJ1c2VTdGF0ZSIsInNlYXJjaENsaWVudGUiLCJzZXRTZWFyY2hDbGllbnRlIiwiY2xpZW50ZXMiLCJzZXRDbGllbnRlcyIsInNlbGVjdGVkQ2xpZW50ZSIsInNldFNlbGVjdGVkQ2xpZW50ZSIsImlzQ2xpZW50ZVNlYXJjaERpdlZpc2libGUiLCJzZXRJc0NsaWVudGVTZWFyY2hEaXZWaXNpYmxlIiwiY29sdW1ucyIsInNldENvbHVtbnMiLCJyb3dzIiwic2V0Um93cyIsInNlbGVjdGVkUm93cyIsInNldFNlbGVjdGVkUm93cyIsInZhbG9yVG90YWxTZWxlY2lvbmFkbyIsInNldFZhbG9yVG90YWxTZWxlY2lvbmFkbyIsInRvdGFsRG9jdW1lbnRvcyIsInNldFRvdGFsRG9jdW1lbnRvcyIsImlzU2VuZGluZ0VtYWlsIiwic2V0SXNTZW5kaW5nRW1haWwiLCJ1c2VBdXRoIiwiZmlsaWFsUHJpbmNpcGFsIiwidXNlciIsImNsaWVudGVTZWFyY2hSZWYiLCJ1c2VSZWYiLCJ1c2VBcGkiLCJnZXRBcGkiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJnZXQiLCJDT0RFTVBSRVNBIiwiQ09EQ0xJRU5URSIsImdldFJvd3MiLCJkYXRhIiwicmVjZWJlciIsIm1hcCIsImVsIiwiaWQiLCJDT0RET0NUTyIsInRyaW0iLCJOT01FRU1QUkVTQSIsInNwbGl0IiwiTk9NRSIsIkVNQUlMIiwiREFUQUVNSVNTQU8iLCJwYXJzZURhdGUiLCJEVF9FTUlTU0FPIiwiREFUQVZFTkNJTUVOVE8iLCJEVF9WRU5DSU1FTlRPIiwiVkFMT1JUT1RBTCIsInBhcnNlVG9Mb2NhbGVDdXJyZW5jeSIsIlZBTE9SRE9DVE8iLCJWQUxPUkRFU0MiLCJWQUxPUlBBR08iLCJPQlNFUlZBQ0FPIiwidW5wYXJzZWRWYWxvclRvdGFsU2VsZWNpb25hZG8iLCJ1bnBhcnNlZFZhbG9yUGFnb1NlbGVjaW9uYWRvIiwiVElQT0RPQ1RPIiwiaW5pdGlhbENvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ3aWR0aCIsImhlYWRlckNsYXNzTmFtZSIsImNlbGxDbGFzc05hbWUiLCJyZXNpemFibGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwibGVuZ3RoIiwidG90YWwiLCJyZWR1Y2UiLCJhY2MiLCJoYW5kbGVTZWFyY2hDbGllbnRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBvc3QiLCJzZWFyY2giLCJwYXJzZWRDbGllbnRlcyIsIm5hbWUiLCJjdXJyZW50IiwiY29udGFpbnMiLCJkYXRlIiwibmV3RGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ2YWwiLCJzdHlsZSIsImN1cnJlbmN5IiwiaGFuZGxlU2VuZEVtYWlsIiwibm90aWZ5IiwiZG9jdW1lbnRvcyIsInJlcyIsIm1lc3NhZ2UiLCJzdHlsZXMiLCJsb2FkaW5nIiwiaGlkZGVuIiwicGVybWlzc2lvbnMiLCJjb250YXNBUmVjZWJlciIsImNsaWVudGVJbnB1dCIsImUiLCJzZWFyY2hSZXN1bHQiLCJ2aXNpYmxlIiwiaW52aXNpYmxlIiwic2VsZWMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm1hcmdpbiIsIm5ld1NlbGVjdGlvbiIsInNlbGVjdGVkSWRzIiwiU2V0Iiwic2VsZWN0aW9uTW9kZWwiLCJmaWx0ZXIiLCJoYXMiLCJ0b3RhaXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNEJBLElBQUlBLEdBQUo7QUFDQSxJQUFNQyxTQUFTLEdBQUcsSUFBSUMseURBQUosRUFBbEI7QUFFZSxTQUFTQyxh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LGtCQWZGLGVBOEJFO0FBQU0scUJBQVMsRUFBRTBELDBEQUFNLENBQUNvQixNQUF4QjtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBQzBDLEdBRDFDLEVBRUdqRSxxQkFBcUIsQ0FBQ25DLGVBQUQsQ0FGeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTlCRixlQWtDRTtBQUFNLHFCQUFTLEVBQUVnRiwwREFBTSxDQUFDb0IsTUFBeEI7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUN1QyxHQUR2QyxFQUVHakUscUJBQXFCLENBQUNyQyxxQkFBRCxDQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbENGO0FBQUEsd0JBdENKO0FBQUEsc0JBREQsZ0JBaUZDLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUE0RkQ7O0dBN1R1QmhCLGE7VUFlWXNCLHNELEVBSWZLLHFEOzs7S0FuQkczQixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2ViZXIuODQxMTg1YmExYzEwOGFhMWFkZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkQ29sdW1ucywgR3JpZENlbGxQYXJhbXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmlNYWlsIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXV0aFwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyBTaG93VG9hc3QgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdG9hc3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IFNlbVBlcm1pc3NhbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW1QZXJtaXNzYW9cIjtcclxuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2FwaVwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xyXG5cclxuaW50ZXJmYWNlIElSb3cge1xyXG4gIENPREVNUFJFU0E6IHN0cmluZztcclxuICBOT01FRU1QUkVTQTogc3RyaW5nO1xyXG4gIFRJUE9ET0NUTzogc3RyaW5nO1xyXG4gIENPRENMSUVOVEU6IHN0cmluZztcclxuICBOT01FOiBzdHJpbmc7XHJcbiAgRU1BSUw6IHN0cmluZztcclxuICBDT0RET0NUTzogc3RyaW5nO1xyXG4gIERUX1ZFTkRBOiBzdHJpbmc7XHJcbiAgRFRfVkVOQ0lNRU5UTzogc3RyaW5nO1xyXG4gIERUX0VNSVNTQU86IHN0cmluZztcclxuICBPQlNFUlZBQ0FPOiBzdHJpbmc7XHJcbiAgVkFMT1JET0NUTzogbnVtYmVyO1xyXG4gIFZBTE9SUEFHTzogbnVtYmVyO1xyXG4gIFZBTE9SREVTQzogbnVtYmVyO1xyXG4gIHVucGFyc2VkVmFsb3JUb3RhbFNlbGVjaW9uYWRvOiBudW1iZXI7XHJcbiAgdW5wYXJzZWRWYWxvclBhZ29TZWxlY2lvbmFkbzogbnVtYmVyO1xyXG4gIHRvdGFsRG9jdW1lbnRvczogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUNsaWVudGUge1xyXG4gIENPRENMSUVOVEU6IHN0cmluZztcclxuICBOT01FOiBzdHJpbmc7XHJcbiAgRU1BSUw6IHN0cmluZztcclxufVxyXG5cclxubGV0IGFwaTtcclxuY29uc3Qgc2hvd1RvYXN0ID0gbmV3IFNob3dUb2FzdCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFzUmVjZWJlcigpIHtcclxuICBjb25zdCBbc2VhcmNoQ2xpZW50ZSwgc2V0U2VhcmNoQ2xpZW50ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XHJcbiAgY29uc3QgW2NsaWVudGVzLCBzZXRDbGllbnRlc10gPSB1c2VTdGF0ZTxJQ2xpZW50ZVtdPigpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENsaWVudGUsIHNldFNlbGVjdGVkQ2xpZW50ZV0gPSB1c2VTdGF0ZTxJQ2xpZW50ZT4oKTtcclxuICBjb25zdCBbaXNDbGllbnRlU2VhcmNoRGl2VmlzaWJsZSwgc2V0SXNDbGllbnRlU2VhcmNoRGl2VmlzaWJsZV0gPVxyXG4gICAgdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgY29uc3QgW2NvbHVtbnMsIHNldENvbHVtbnNdID0gdXNlU3RhdGU8R3JpZENvbHVtbnM+KCk7XHJcbiAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGU8YW55W10+KCk7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZFJvd3MsIHNldFNlbGVjdGVkUm93c10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG4gIGNvbnN0IFt2YWxvclRvdGFsU2VsZWNpb25hZG8sIHNldFZhbG9yVG90YWxTZWxlY2lvbmFkb10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gIGNvbnN0IFt0b3RhbERvY3VtZW50b3MsIHNldFRvdGFsRG9jdW1lbnRvc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICBjb25zdCBbaXNTZW5kaW5nRW1haWwsIHNldElzU2VuZGluZ0VtYWlsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyBmaWxpYWxQcmluY2lwYWwsIHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3QgY2xpZW50ZVNlYXJjaFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgeyBnZXRBcGkgfSA9IHVzZUFwaSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXBpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGFwaSA9IHJlc3BvbnNlO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkQ2xpZW50ZSkge1xyXG4gICAgICBhcGlcclxuICAgICAgICAuZ2V0KFxyXG4gICAgICAgICAgYC9yZWNlYmVyLyR7ZmlsaWFsUHJpbmNpcGFsLkNPREVNUFJFU0F9LyR7c2VsZWN0ZWRDbGllbnRlLkNPRENMSUVOVEV9YFxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGdldFJvd3M6IElSb3dbXSA9IHJlc3BvbnNlLmRhdGEucmVjZWJlci5tYXAoKGVsOiBJUm93KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IGVsLkNPRERPQ1RPLnRyaW0oKSxcclxuICAgICAgICAgICAgICBDT0RFTVBSRVNBOiBgJHtlbC5DT0RFTVBSRVNBfSAtICR7ZWwuTk9NRUVNUFJFU0Euc3BsaXQoXCIgXCIpWzBdfWAsXHJcbiAgICAgICAgICAgICAgTk9NRTogYCR7ZWwuQ09EQ0xJRU5URX0gLSAke2VsLk5PTUV9YCxcclxuICAgICAgICAgICAgICBFTUFJTDogZWwuRU1BSUwsXHJcbiAgICAgICAgICAgICAgREFUQUVNSVNTQU86IHBhcnNlRGF0ZShlbC5EVF9FTUlTU0FPKSxcclxuICAgICAgICAgICAgICBEQVRBVkVOQ0lNRU5UTzogcGFyc2VEYXRlKGVsLkRUX1ZFTkNJTUVOVE8pLFxyXG4gICAgICAgICAgICAgIFZBTE9SVE9UQUw6IHBhcnNlVG9Mb2NhbGVDdXJyZW5jeShlbC5WQUxPUkRPQ1RPIC0gZWwuVkFMT1JERVNDKSxcclxuICAgICAgICAgICAgICBWQUxPUlBBR086IHBhcnNlVG9Mb2NhbGVDdXJyZW5jeShlbC5WQUxPUlBBR08pLFxyXG4gICAgICAgICAgICAgIE9CU0VSVkFDQU86IGVsLk9CU0VSVkFDQU8udHJpbSgpLFxyXG4gICAgICAgICAgICAgIHVucGFyc2VkVmFsb3JUb3RhbFNlbGVjaW9uYWRvOiBlbC5WQUxPUkRPQ1RPIC0gZWwuVkFMT1JERVNDLFxyXG4gICAgICAgICAgICAgIHVucGFyc2VkVmFsb3JQYWdvU2VsZWNpb25hZG86IGVsLlZBTE9SUEFHTyxcclxuICAgICAgICAgICAgICBUSVBPRE9DVE86IGVsLlRJUE9ET0NUTyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGluaXRpYWxDb2x1bW5zOiBHcmlkQ29sdW1ucyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGZpZWxkOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgaGVhZGVyTmFtZTogXCJEb2N1bWVudG9cIixcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgICAgICAgIGhlYWRlckNsYXNzTmFtZTogXCJoZWFkZXItZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgICAgICAgY2VsbENsYXNzTmFtZTogXCJjZWxsLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZmllbGQ6IFwiVElQT0RPQ1RPXCIsXHJcbiAgICAgICAgICAgICAgaGVhZGVyTmFtZTogXCJUaXBvXCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICBoZWFkZXJDbGFzc05hbWU6IFwiaGVhZGVyLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgICAgICAgIGNlbGxDbGFzc05hbWU6IFwiY2VsbC1kYXRhLWdyaWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGZpZWxkOiBcIkNPREVNUFJFU0FcIixcclxuICAgICAgICAgICAgICBoZWFkZXJOYW1lOiBcIkVtcHJlc2FcIixcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgICAgICAgIGhlYWRlckNsYXNzTmFtZTogXCJoZWFkZXItZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgICAgICAgY2VsbENsYXNzTmFtZTogXCJjZWxsLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZmllbGQ6IFwiTk9NRVwiLFxyXG4gICAgICAgICAgICAgIGhlYWRlck5hbWU6IFwiQ2xpZW50ZVwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBcImhlYWRlci1kYXRhLWdyaWRcIixcclxuICAgICAgICAgICAgICBjZWxsQ2xhc3NOYW1lOiBcImNlbGwtZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgICAgICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZmllbGQ6IFwiREFUQUVNSVNTQU9cIixcclxuICAgICAgICAgICAgICBoZWFkZXJOYW1lOiBcIkRhdGEgRW1pc3PDo29cIixcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgICAgICAgIGhlYWRlckNsYXNzTmFtZTogXCJoZWFkZXItZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgICAgICAgY2VsbENsYXNzTmFtZTogXCJjZWxsLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZmllbGQ6IFwiREFUQVZFTkNJTUVOVE9cIixcclxuICAgICAgICAgICAgICBoZWFkZXJOYW1lOiBcIkRhdGEgVmVuY2ltZW50b1wiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAxODAsXHJcbiAgICAgICAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBcImhlYWRlci1kYXRhLWdyaWRcIixcclxuICAgICAgICAgICAgICBjZWxsQ2xhc3NOYW1lOiBcImNlbGwtZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBmaWVsZDogXCJWQUxPUlRPVEFMXCIsXHJcbiAgICAgICAgICAgICAgaGVhZGVyTmFtZTogXCJUb3RhbFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjAsXHJcbiAgICAgICAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBcImhlYWRlci1kYXRhLWdyaWRcIixcclxuICAgICAgICAgICAgICBjZWxsQ2xhc3NOYW1lOiBcImNlbGwtZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBmaWVsZDogXCJWQUxPUlBBR09cIixcclxuICAgICAgICAgICAgICBoZWFkZXJOYW1lOiBcIlBhZ29cIixcclxuICAgICAgICAgICAgICB3aWR0aDogMTIwLFxyXG4gICAgICAgICAgICAgIGhlYWRlckNsYXNzTmFtZTogXCJoZWFkZXItZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgICAgICAgY2VsbENsYXNzTmFtZTogXCJjZWxsLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZmllbGQ6IFwiT0JTRVJWQUNBT1wiLFxyXG4gICAgICAgICAgICAgIGhlYWRlck5hbWU6IFwiT2JzZXJ2YcOnw6NvXCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI5MCxcclxuICAgICAgICAgICAgICBoZWFkZXJDbGFzc05hbWU6IFwiaGVhZGVyLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgICAgICAgIGNlbGxDbGFzc05hbWU6IFwiY2VsbC1kYXRhLWdyaWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgc2V0Q29sdW1ucyhpbml0aWFsQ29sdW1ucyk7XHJcbiAgICAgICAgICBzZXRSb3dzKGdldFJvd3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtzZWxlY3RlZENsaWVudGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvd3MgJiYgcm93cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnN0IHRvdGFsID0gcm93cy5yZWR1Y2UoKGFjYywgZWwpID0+IHtcclxuICAgICAgICByZXR1cm4gKGFjYyArPVxyXG4gICAgICAgICAgK2VsLnVucGFyc2VkVmFsb3JUb3RhbFNlbGVjaW9uYWRvIC0gK2VsLnVucGFyc2VkVmFsb3JQYWdvU2VsZWNpb25hZG8pO1xyXG4gICAgICB9LCAwKTtcclxuXHJcbiAgICAgIHNldFRvdGFsRG9jdW1lbnRvcyh0b3RhbCk7XHJcbiAgICB9XHJcbiAgfSwgW3Jvd3NdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRvdGFsID0gc2VsZWN0ZWRSb3dzLnJlZHVjZSgoYWNjLCBlbCkgPT4ge1xyXG4gICAgICByZXR1cm4gKGFjYyArPVxyXG4gICAgICAgICtlbC51bnBhcnNlZFZhbG9yVG90YWxTZWxlY2lvbmFkbyAtICtlbC51bnBhcnNlZFZhbG9yUGFnb1NlbGVjaW9uYWRvKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIHNldFZhbG9yVG90YWxTZWxlY2lvbmFkbyh0b3RhbCk7XHJcbiAgfSwgW3NlbGVjdGVkUm93c10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hDbGllbnRlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIHNldElzQ2xpZW50ZVNlYXJjaERpdlZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgc2V0U2VhcmNoQ2xpZW50ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gMSkge1xyXG4gICAgICBhcGlcclxuICAgICAgICAucG9zdChcIi9jbGllbnRlc1wiLCB7XHJcbiAgICAgICAgICBzZWFyY2g6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgc2V0Q2xpZW50ZXMocmVzcG9uc2UuZGF0YS5wYXJzZWRDbGllbnRlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc0NsaWVudGVTZWFyY2hEaXZWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgc2V0Q2xpZW50ZXMoW10pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBpZiAoY2xpZW50ZVNlYXJjaFJlZiAmJiBldmVudC50YXJnZXQubmFtZSA9PT0gXCJOT01FQ0xJRU5URVwiKSB7XHJcbiAgICAgIHNldElzQ2xpZW50ZVNlYXJjaERpdlZpc2libGUodHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xpZW50ZVNlYXJjaFJlZiAmJiAhY2xpZW50ZVNlYXJjaFJlZi5jdXJyZW50Py5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgIHNldElzQ2xpZW50ZVNlYXJjaERpdlZpc2libGUoZmFsc2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBwYXJzZURhdGUgPSAoZGF0ZTogc3RyaW5nIHwgRGF0ZSB8IG51bGwpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYgKGRhdGUgPT09IG51bGwpIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuXHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gbmV3RGF0ZS50b0xvY2FsZVN0cmluZygpLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZVswXTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXJzZVRvTG9jYWxlQ3VycmVuY3kgPSAodmFsOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIHZhbC50b0xvY2FsZVN0cmluZyhcInB0LUJSXCIsIHtcclxuICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgICAgY3VycmVuY3k6IFwiQlJMXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZW5kRW1haWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRSb3dzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcclxuICAgICAgICBcIlNlbGVjaW9uZSBhbyBtZW5vcyB1bSBkb2N1bWVudG8gcGFyYSBlbnZpYXIgZS1tYWlsXCIsXHJcbiAgICAgICAgXCJ3YXJuaW5nXCJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHNldElzU2VuZGluZ0VtYWlsKHRydWUpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBFTUFJTDogc2VsZWN0ZWRDbGllbnRlLkVNQUlMLFxyXG4gICAgICAgIE5PTUU6IHNlbGVjdGVkQ2xpZW50ZS5OT01FLFxyXG4gICAgICAgIHZhbG9yVG90YWxTZWxlY2lvbmFkbyxcclxuICAgICAgICBkb2N1bWVudG9zOiBzZWxlY3RlZFJvd3MsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5wb3N0KFxyXG4gICAgICAgIGAvcmVjZWJlci8ke2ZpbGlhbFByaW5jaXBhbC5DT0RFTVBSRVNBfWAsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgICApO1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiRS1tYWlsIGVudmlhZG8gY29tIHN1Y2Vzc28hXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KGVyci5yZXMuZGF0YS5tZXNzYWdlLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElzU2VuZGluZ0VtYWlsKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzU2VuZGluZ0VtYWlsID8gc3R5bGVzLmxvYWRpbmcgOiBzdHlsZXMuaGlkZGVufT5cclxuICAgICAgICA8TG9hZGVyIHR5cGU9XCJCYXJzXCIgY29sb3I9XCIjQjIzMjM3XCIgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wid3JhcHBlclwifT5cclxuICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29udGFzQVJlY2ViZXIgIT09IFwiU0VNX0FDRVNTT1wiID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgIDxoMj5Db250YXMgYSBSZWNlYmVyPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRlSW5wdXR9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2xpZW50ZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiTk9NRUNMSUVOVEVcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoQ2xpZW50ZX1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaENsaWVudGUoZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7Y2xpZW50ZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICByZWY9e2NsaWVudGVTZWFyY2hSZWZ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlYXJjaFJlc3VsdH0gJHtcclxuICAgICAgICAgICAgICAgICAgICBpc0NsaWVudGVTZWFyY2hEaXZWaXNpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy52aXNpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcy5pbnZpc2libGVcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjbGllbnRlcy5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWwuQ09EQ0xJRU5URX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoQ2xpZW50ZShlbC5DT0RDTElFTlRFICsgXCIgLSBcIiArIGVsLk5PTUUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZENsaWVudGUoZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0NsaWVudGVTZWFyY2hEaXZWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2VsLkNPRENMSUVOVEUgKyBcIiAtIFwiICsgZWwuTk9NRX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZENsaWVudGUgJiYgY29sdW1ucyAmJiByb3dzICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXI/LnBlcm1pc3Npb25zLmNvbnRhc0FSZWNlYmVyICE9PSBcIkFDRVNTT19UT1RBTFwiIHx8IHNlbGVjfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQjIzMjM3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2Y0ZjRmNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjByZW0gYXV0byAxcmVtIDBcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VuZEVtYWlsfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBFbnZpYXIgTm90aWZpY2HDp8OjbyBhbyBDbGllbnRlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxEYXRhR3JpZFxyXG4gICAgICAgICAgICAgICAgICBhdXRvSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXsxNX1cclxuICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVTZWxlY3Rpb25PbkNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1syNSwgNTAsIDEwMF19XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uTW9kZWxDaGFuZ2U9eyhuZXdTZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZElkcyA9IG5ldyBTZXQobmV3U2VsZWN0aW9uLnNlbGVjdGlvbk1vZGVsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFJvd3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzLmZpbHRlcigoZWwpID0+IHNlbGVjdGVkSWRzLmhhcyhlbC5pZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b3RhaXN9PlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlRvdGFsIGRvcyBkb2N1bWVudG9zOiA8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHtwYXJzZVRvTG9jYWxlQ3VycmVuY3kodG90YWxEb2N1bWVudG9zKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRvdGFpc30+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VG90YWwgc2VsZWNpb25hZG86IDwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAge3BhcnNlVG9Mb2NhbGVDdXJyZW5jeSh2YWxvclRvdGFsU2VsZWNpb25hZG8pfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxTZW1QZXJtaXNzYW8gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==