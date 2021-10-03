webpackHotUpdate_N_E("pages/consultar-inventarios",{

/***/ "./src/pages/consultar-inventarios/index.tsx":
/*!***************************************************!*\
  !*** ./src/pages/consultar-inventarios/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConsultarInventarios; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/data-grid */ "./node_modules/@material-ui/data-grid/dist/index-esm.js");
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/consultar-inventarios/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_SemPermissao__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SemPermissao */ "./src/components/SemPermissao/index.tsx");
/* harmony import */ var _contexts_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../contexts/api */ "./src/contexts/api.tsx");





var _jsxFileName = "C:\\Users\\Bruno Jagmin\\Desktop\\Ganesa\\utilitarios-resulth\\frontend\\src\\pages\\consultar-inventarios\\index.tsx",
    _s = $RefreshSig$();









var api;
function ConsultarInventarios() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date().toISOString().split("T")[0]),
      dataDigitacoes = _useState[0],
      setDataDigitacoes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      digitacoes = _useState2[0],
      setDigitacoes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      columns = _useState3[0],
      setColumns = _useState3[1];

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_7__["useAuth"])(),
      user = _useAuth.user,
      filialPrincipal = _useAuth.filialPrincipal;

  var _useApi = Object(_contexts_api__WEBPACK_IMPORTED_MODULE_10__["useApi"])(),
      getApi = _useApi.getApi;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getApi.then(function (response) {
      api = response;
      renderDigitacoes();
    });
  }, [dataDigitacoes]);

  var renderDigitacoes = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response, digitacoesData, initialColumns;
      return C_Users_Bruno_Jagmin_Desktop_Ganesa_utilitarios_resulth_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.post("/produtos/digitacoes-per-day", {
                CODEMPRESA: filialPrincipal.CODEMPRESA,
                DATAINV: dataDigitacoes
              });

            case 2:
              response = _context.sent;
              digitacoesData = response.data.digitacoes.map(function (el) {
                var date = el.DATAINV.toLocaleString().split("T")[0].split("-").reverse().join("/");
                return {
                  id: "".concat(el.DOCUMENTO, "-").concat(el.CODPROD, "-").concat(Math.random() * 100),
                  EMPRESA: el.CODEMPRESA,
                  PRODUTO: "".concat(el.CODPROD, " - ").concat(el.DESCRICAO),
                  QUANTIDADE: el.QUANTIDADE,
                  PROCESSADO: el.PROCESSADO,
                  DATA: date
                };
              });
              initialColumns = [{
                field: "id",
                headerName: "Documento",
                width: 135,
                hide: true,
                headerClassName: "custom-header-data-grid",
                cellClassName: "custom-cell-data-grid",
                align: "center",
                headerAlign: "center",
                filterable: false,
                disableColumnMenu: true,
                sortable: false
              }, {
                field: "EMPRESA",
                headerName: "Empresa",
                width: 135,
                headerClassName: "custom-header-data-grid",
                cellClassName: "custom-cell-data-grid",
                align: "center",
                headerAlign: "center",
                filterable: false,
                disableColumnMenu: true,
                sortable: false
              }, {
                field: "PRODUTO",
                headerName: "Produto",
                width: 350,
                headerClassName: "custom-header-data-grid",
                cellClassName: "custom-cell-data-grid"
              }, {
                field: "QUANTIDADE",
                headerName: "Quantidade",
                width: 160,
                headerClassName: "custom-header-data-grid",
                cellClassName: "custom-cell-data-grid",
                filterable: false,
                disableColumnMenu: true,
                sortable: false,
                align: "center",
                headerAlign: "center"
              }, {
                field: "PROCESSADO",
                headerName: "Processado",
                width: 170,
                headerClassName: "custom-header-data-grid",
                cellClassName: "custom-cell-data-grid",
                filterable: false,
                sortable: false,
                disableColumnMenu: true,
                align: "center",
                headerAlign: "center",
                renderCell: function renderCell(params) {
                  if (params.value === "S") {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiCheck"], {
                      size: 25,
                      color: "#00b700"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 20
                    }, _this);
                  } else {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiX"], {
                      size: 25,
                      color: "#f00"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 20
                    }, _this);
                  }
                }
              }, {
                field: "DATA",
                headerName: "Data Inventário",
                width: 150,
                headerClassName: "custom-header-data-grid",
                cellClassName: "custom-cell-data-grid",
                filterable: false,
                disableColumnMenu: true,
                align: "center",
                headerAlign: "center"
              }];
              setDigitacoes(digitacoesData);
              setColumns(initialColumns);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function renderDigitacoes() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.consultarDigitacoes,
    children: (user === null || user === void 0 ? void 0 : user.permissions.consultarInventarios) !== "SEM_ACESSO" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Consultar Digita\xE7\xF5es"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        type: "date",
        value: dataDigitacoes,
        style: {
          width: "150px",
          marginBottom: "32px"
        },
        onChange: function onChange(e) {
          return setDataDigitacoes(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }, this), columns && digitacoes.length >= 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          height: "100%",
          width: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.gridDiv,
          style: {
            width: "80%"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_6__["DataGrid"], {
            pageSize: 20,
            autoHeight: true,
            rows: digitacoes,
            columns: columns
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 5
  }, this);
}

_s(ConsultarInventarios, "S8Gt0PzH52fP+VLaJQRjpoAXgnk=", false, function () {
  return [_contexts_auth__WEBPACK_IMPORTED_MODULE_7__["useAuth"], _contexts_api__WEBPACK_IMPORTED_MODULE_10__["useApi"]];
});

_c = ConsultarInventarios;

var _c;

$RefreshReg$(_c, "ConsultarInventarios");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnN1bHRhci1pbnZlbnRhcmlvcy9pbmRleC50c3giXSwibmFtZXMiOlsiYXBpIiwiQ29uc3VsdGFySW52ZW50YXJpb3MiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiZGF0YURpZ2l0YWNvZXMiLCJzZXREYXRhRGlnaXRhY29lcyIsImRpZ2l0YWNvZXMiLCJzZXREaWdpdGFjb2VzIiwiY29sdW1ucyIsInNldENvbHVtbnMiLCJ1c2VBdXRoIiwidXNlciIsImZpbGlhbFByaW5jaXBhbCIsInVzZUFwaSIsImdldEFwaSIsInVzZUVmZmVjdCIsInRoZW4iLCJyZXNwb25zZSIsInJlbmRlckRpZ2l0YWNvZXMiLCJwb3N0IiwiQ09ERU1QUkVTQSIsIkRBVEFJTlYiLCJkaWdpdGFjb2VzRGF0YSIsImRhdGEiLCJtYXAiLCJlbCIsImRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInJldmVyc2UiLCJqb2luIiwiaWQiLCJET0NVTUVOVE8iLCJDT0RQUk9EIiwiTWF0aCIsInJhbmRvbSIsIkVNUFJFU0EiLCJQUk9EVVRPIiwiREVTQ1JJQ0FPIiwiUVVBTlRJREFERSIsIlBST0NFU1NBRE8iLCJEQVRBIiwiaW5pdGlhbENvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ3aWR0aCIsImhpZGUiLCJoZWFkZXJDbGFzc05hbWUiLCJjZWxsQ2xhc3NOYW1lIiwiYWxpZ24iLCJoZWFkZXJBbGlnbiIsImZpbHRlcmFibGUiLCJkaXNhYmxlQ29sdW1uTWVudSIsInNvcnRhYmxlIiwicmVuZGVyQ2VsbCIsInBhcmFtcyIsInZhbHVlIiwic3R5bGVzIiwiY29uc3VsdGFyRGlnaXRhY29lcyIsInBlcm1pc3Npb25zIiwiY29uc3VsdGFySW52ZW50YXJpb3MiLCJtYXJnaW5Cb3R0b20iLCJlIiwidGFyZ2V0IiwibGVuZ3RoIiwiZGlzcGxheSIsImhlaWdodCIsImdyaWREaXYiXSwibWFwcGluZ3MiOiI7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RCxDQUFDLENBQUNDLE1BQUYsQ0FBU1AsS0FBVixDQUF4QjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBUUcvQyxPQUFPLElBQUlGLFVBQVUsQ0FBQ3lELE1BQVgsSUFBcUIsQ0FBaEMsaUJBQ0M7QUFBSyxhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRSxNQUFYO0FBQW1CQyxnQkFBTSxFQUFFLE1BQTNCO0FBQW1DckIsZUFBSyxFQUFFO0FBQTFDLFNBQVo7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVZLDBEQUFNLENBQUNVLE9BQXZCO0FBQWdDLGVBQUssRUFBRTtBQUFFdEIsaUJBQUssRUFBRTtBQUFULFdBQXZDO0FBQUEsaUNBQ0UscUVBQUMsK0RBQUQ7QUFDRSxvQkFBUSxFQUFFLEVBRFo7QUFFRSxzQkFBVSxNQUZaO0FBR0UsZ0JBQUksRUFBRXRDLFVBSFI7QUFJRSxtQkFBTyxFQUFFRTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKO0FBQUEsb0JBREQsZ0JBdUJDLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztHQXhKdUJULG9CO1VBT1lXLHNELEVBQ2ZHLHFEOzs7S0FSR2Qsb0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29uc3VsdGFyLWludmVudGFyaW9zLjc2M2Q2NDIwOTQ3ZGUzZTcxNjA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEZpWCwgRmlTZW5kLCBGaUNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkQ29sRGVmLCBHcmlkQ2VsbFBhcmFtcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXV0aFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFNlbVBlcm1pc3NhbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW1QZXJtaXNzYW9cIjtcclxuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2FwaVwiO1xyXG5cclxuaW50ZXJmYWNlIElEaWdpdGFjb2VzIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIERBVEFJTlY6IHN0cmluZztcclxuICBDT0RQUk9EOiBzdHJpbmc7XHJcbiAgREVTQ1JJQ0FPOiBzdHJpbmc7XHJcbiAgUFJPQ0VTU0FETzogc3RyaW5nO1xyXG4gIFFVQU5USURBREU6IG51bWJlcjtcclxufVxyXG5cclxubGV0IGFwaTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnN1bHRhckludmVudGFyaW9zKCkge1xyXG4gIGNvbnN0IFtkYXRhRGlnaXRhY29lcywgc2V0RGF0YURpZ2l0YWNvZXNdID0gdXNlU3RhdGU8c3RyaW5nPihcclxuICAgIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF1cclxuICApO1xyXG4gIGNvbnN0IFtkaWdpdGFjb2VzLCBzZXREaWdpdGFjb2VzXSA9IHVzZVN0YXRlPElEaWdpdGFjb2VzW10+KFtdKTtcclxuICBjb25zdCBbY29sdW1ucywgc2V0Q29sdW1uc10gPSB1c2VTdGF0ZTxHcmlkQ29sRGVmW10+KCk7XHJcblxyXG4gIGNvbnN0IHsgdXNlciwgZmlsaWFsUHJpbmNpcGFsIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBnZXRBcGkgfSA9IHVzZUFwaSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXBpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGFwaSA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgcmVuZGVyRGlnaXRhY29lcygpO1xyXG4gICAgfSk7XHJcbiAgfSwgW2RhdGFEaWdpdGFjb2VzXSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckRpZ2l0YWNvZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL3Byb2R1dG9zL2RpZ2l0YWNvZXMtcGVyLWRheVwiLCB7XHJcbiAgICAgIENPREVNUFJFU0E6IGZpbGlhbFByaW5jaXBhbC5DT0RFTVBSRVNBLFxyXG4gICAgICBEQVRBSU5WOiBkYXRhRGlnaXRhY29lcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRpZ2l0YWNvZXNEYXRhOiBJRGlnaXRhY29lc1tdID0gcmVzcG9uc2UuZGF0YS5kaWdpdGFjb2VzLm1hcChcclxuICAgICAgKGVsOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlID0gZWwuREFUQUlOVi50b0xvY2FsZVN0cmluZygpXHJcbiAgICAgICAgICAuc3BsaXQoXCJUXCIpWzBdXHJcbiAgICAgICAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgICAuam9pbihcIi9cIik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogYCR7ZWwuRE9DVU1FTlRPfS0ke2VsLkNPRFBST0R9LSR7TWF0aC5yYW5kb20oKSAqIDEwMH1gLFxyXG4gICAgICAgICAgRU1QUkVTQTogZWwuQ09ERU1QUkVTQSxcclxuICAgICAgICAgIFBST0RVVE86IGAke2VsLkNPRFBST0R9IC0gJHtlbC5ERVNDUklDQU99YCxcclxuICAgICAgICAgIFFVQU5USURBREU6IGVsLlFVQU5USURBREUsXHJcbiAgICAgICAgICBQUk9DRVNTQURPOiBlbC5QUk9DRVNTQURPLFxyXG4gICAgICAgICAgREFUQTogZGF0ZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxDb2x1bW5zOiBHcmlkQ29sRGVmW10gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBmaWVsZDogXCJpZFwiLFxyXG4gICAgICAgIGhlYWRlck5hbWU6IFwiRG9jdW1lbnRvXCIsXHJcbiAgICAgICAgd2lkdGg6IDEzNSxcclxuICAgICAgICBoaWRlOiB0cnVlLFxyXG4gICAgICAgIGhlYWRlckNsYXNzTmFtZTogXCJjdXN0b20taGVhZGVyLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgIGNlbGxDbGFzc05hbWU6IFwiY3VzdG9tLWNlbGwtZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaGVhZGVyQWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZUNvbHVtbk1lbnU6IHRydWUsXHJcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmllbGQ6IFwiRU1QUkVTQVwiLFxyXG4gICAgICAgIGhlYWRlck5hbWU6IFwiRW1wcmVzYVwiLFxyXG4gICAgICAgIHdpZHRoOiAxMzUsXHJcbiAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBcImN1c3RvbS1oZWFkZXItZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgY2VsbENsYXNzTmFtZTogXCJjdXN0b20tY2VsbC1kYXRhLWdyaWRcIixcclxuICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICBoZWFkZXJBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlQ29sdW1uTWVudTogdHJ1ZSxcclxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBmaWVsZDogXCJQUk9EVVRPXCIsXHJcbiAgICAgICAgaGVhZGVyTmFtZTogXCJQcm9kdXRvXCIsXHJcbiAgICAgICAgd2lkdGg6IDM1MCxcclxuICAgICAgICBoZWFkZXJDbGFzc05hbWU6IFwiY3VzdG9tLWhlYWRlci1kYXRhLWdyaWRcIixcclxuICAgICAgICBjZWxsQ2xhc3NOYW1lOiBcImN1c3RvbS1jZWxsLWRhdGEtZ3JpZFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmllbGQ6IFwiUVVBTlRJREFERVwiLFxyXG4gICAgICAgIGhlYWRlck5hbWU6IFwiUXVhbnRpZGFkZVwiLFxyXG4gICAgICAgIHdpZHRoOiAxNjAsXHJcbiAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBcImN1c3RvbS1oZWFkZXItZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgY2VsbENsYXNzTmFtZTogXCJjdXN0b20tY2VsbC1kYXRhLWdyaWRcIixcclxuICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlQ29sdW1uTWVudTogdHJ1ZSxcclxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgaGVhZGVyQWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBmaWVsZDogXCJQUk9DRVNTQURPXCIsXHJcbiAgICAgICAgaGVhZGVyTmFtZTogXCJQcm9jZXNzYWRvXCIsXHJcbiAgICAgICAgd2lkdGg6IDE3MCxcclxuICAgICAgICBoZWFkZXJDbGFzc05hbWU6IFwiY3VzdG9tLWhlYWRlci1kYXRhLWdyaWRcIixcclxuICAgICAgICBjZWxsQ2xhc3NOYW1lOiBcImN1c3RvbS1jZWxsLWRhdGEtZ3JpZFwiLFxyXG4gICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlQ29sdW1uTWVudTogdHJ1ZSxcclxuICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICBoZWFkZXJBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICByZW5kZXJDZWxsOiAocGFyYW1zOiBHcmlkQ2VsbFBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgaWYgKHBhcmFtcy52YWx1ZSA9PT0gXCJTXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxGaUNoZWNrIHNpemU9ezI1fSBjb2xvcj1cIiMwMGI3MDBcIiAvPjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8RmlYIHNpemU9ezI1fSBjb2xvcj1cIiNmMDBcIiAvPjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmllbGQ6IFwiREFUQVwiLFxyXG4gICAgICAgIGhlYWRlck5hbWU6IFwiRGF0YSBJbnZlbnTDoXJpb1wiLFxyXG4gICAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgICAgaGVhZGVyQ2xhc3NOYW1lOiBcImN1c3RvbS1oZWFkZXItZGF0YS1ncmlkXCIsXHJcbiAgICAgICAgY2VsbENsYXNzTmFtZTogXCJjdXN0b20tY2VsbC1kYXRhLWdyaWRcIixcclxuICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlQ29sdW1uTWVudTogdHJ1ZSxcclxuICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICBoZWFkZXJBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgc2V0RGlnaXRhY29lcyhkaWdpdGFjb2VzRGF0YSk7XHJcbiAgICBzZXRDb2x1bW5zKGluaXRpYWxDb2x1bW5zKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnN1bHRhckRpZ2l0YWNvZXN9PlxyXG4gICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29uc3VsdGFySW52ZW50YXJpb3MgIT09IFwiU0VNX0FDRVNTT1wiID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDI+Q29uc3VsdGFyIERpZ2l0YcOnw7VlczwvaDI+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgdmFsdWU9e2RhdGFEaWdpdGFjb2VzfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMzJweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0YURpZ2l0YWNvZXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtjb2x1bW5zICYmIGRpZ2l0YWNvZXMubGVuZ3RoID49IDEgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkRGl2fSBzdHlsZT17eyB3aWR0aDogXCI4MCVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxEYXRhR3JpZFxyXG4gICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9IZWlnaHRcclxuICAgICAgICAgICAgICAgICAgcm93cz17ZGlnaXRhY29lc31cclxuICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U2VtUGVybWlzc2FvIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=