webpackHotUpdate_N_E("pages/compras",{

/***/ "./src/components/ExcelExport/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ExcelExport/index.tsx ***!
  \**********************************************/
/*! exports provided: ExcelExport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelExport", function() { return ExcelExport; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_data_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-data-export */ "./node_modules/react-data-export/dist/index.js");
/* harmony import */ var react_data_export__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_data_export__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Bruno Jagmin\\Desktop\\Ganesa\\utilitarios-resulth\\frontend\\src\\components\\ExcelExport\\index.tsx",
    _s = $RefreshSig$();



var ExcelFile = react_data_export__WEBPACK_IMPORTED_MODULE_1___default.a.ExcelFile;
var ExcelSheet = react_data_export__WEBPACK_IMPORTED_MODULE_1___default.a.ExcelFile.ExcelSheet;
var ExcelColumn = react_data_export__WEBPACK_IMPORTED_MODULE_1___default.a.ExcelFile.ExcelColumn;
function ExcelExport(_ref) {
  _s();

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      excelData = _useState[0],
      setExcelData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var parsedData = data.map(function (field) {
      return [{
        value: field.DATASOLICITACAO,
        style: {
          font: {
            sz: "12",
            bold: false
          },
          alignment: {
            vertical: "center",
            horizontal: "center"
          }
        }
      }, {
        value: field.REQUISITADOPOR,
        style: {
          font: {
            sz: "12",
            bold: false
          }
        }
      }, {
        value: field.DESCRICAOPROD,
        style: {
          font: {
            sz: "12",
            bold: false
          }
        }
      }, {
        value: field.COTACAO,
        style: {
          font: {
            sz: "12",
            bold: false
          }
        }
      }, {
        value: field.NOMECLIENTE,
        style: {
          font: {
            sz: "12",
            bold: false
          }
        }
      }, {
        value: field.STATUS,
        style: {
          font: {
            sz: "12",
            bold: false
          }
        }
      }];
    });
    setExcelData([{
      columns: [{
        title: "Data Solicitação",
        width: {
          wpx: 120
        }
      }, {
        title: "Requisitado Por",
        width: {
          wpx: 120
        }
      }, {
        title: "Produto",
        width: {
          wpx: 400
        }
      }, {
        title: "Cotação",
        width: {
          wpx: 100
        }
      }, {
        title: "Cliente",
        width: {
          wpx: 350
        }
      }, {
        title: "Status",
        width: {
          wpx: 100
        }
      }],
      data: parsedData
    }]);
  }, [data]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: excelData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelFile, {
      element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Exportar para Excel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelSheet, {
        dataSet: excelData,
        name: "Compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

_s(ExcelExport, "mF/b1ebO++9bHxy+PUtfrxwC03E=");

_c = ExcelExport;

var _c;

$RefreshReg$(_c, "ExcelExport");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhjZWxFeHBvcnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkV4Y2VsRmlsZSIsIlJlYWN0RXhwb3J0IiwiRXhjZWxTaGVldCIsIkV4Y2VsQ29sdW1uIiwiRXhjZWxFeHBvcnQiLCJkYXRhIiwidXNlU3RhdGUiLCJleGNlbERhdGEiLCJzZXRFeGNlbERhdGEiLCJ1c2VFZmZlY3QiLCJwYXJzZWREYXRhIiwibWFwIiwiZmllbGQiLCJ2YWx1ZSIsIkRBVEFTT0xJQ0lUQUNBTyIsInN0eWxlIiwiZm9udCIsInN6IiwiYm9sZCIsImFsaWdubWVudCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlJFUVVJU0lUQURPUE9SIiwiREVTQ1JJQ0FPUFJPRCIsIkNPVEFDQU8iLCJOT01FQ0xJRU5URSIsIlNUQVRVUyIsImNvbHVtbnMiLCJ0aXRsZSIsIndpZHRoIiwid3B4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHdEQUFXLENBQUNELFNBQTlCO0FBQ0EsSUFBTUUsVUFBVSxHQUFHRCx3REFBVyxDQUFDRCxTQUFaLENBQXNCRSxVQUF6QztBQUNBLElBQU1DLFdBQVcsR0FBR0Ysd0RBQVcsQ0FBQ0QsU0FBWixDQUFzQkcsV0FBMUM7QUFNTyxTQUFTQyxXQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjs7QUFBQSxrQkFDZEMsc0RBQVEsRUFETTtBQUFBLE1BQ3pDQyxTQUR5QztBQUFBLE1BQzlCQyxZQUQ4Qjs7QUFHaERDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR0wsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JDLGFBQU8sQ0FDTDtBQUNFQyxhQUFLLEVBQUVELEtBQUssQ0FBQ0UsZUFEZjtBQUVFQyxhQUFLLEVBQUU7QUFBRUMsY0FBSSxFQUFFO0FBQUVDLGNBQUUsRUFBRSxJQUFOO0FBQVlDLGdCQUFJLEVBQUU7QUFBbEIsV0FBUjtBQUFtQ0MsbUJBQVMsRUFBRTtBQUFFQyxvQkFBUSxFQUFFLFFBQVo7QUFBc0JDLHNCQUFVLEVBQUU7QUFBbEM7QUFBOUM7QUFGVCxPQURLLEVBS0w7QUFDRVIsYUFBSyxFQUFFRCxLQUFLLENBQUNVLGNBRGY7QUFFRVAsYUFBSyxFQUFFO0FBQUVDLGNBQUksRUFBRTtBQUFFQyxjQUFFLEVBQUUsSUFBTjtBQUFZQyxnQkFBSSxFQUFFO0FBQWxCO0FBQVI7QUFGVCxPQUxLLEVBU0w7QUFDRUwsYUFBSyxFQUFFRCxLQUFLLENBQUNXLGFBRGY7QUFFRVIsYUFBSyxFQUFFO0FBQUVDLGNBQUksRUFBRTtBQUFFQyxjQUFFLEVBQUUsSUFBTjtBQUFZQyxnQkFBSSxFQUFFO0FBQWxCO0FBQVI7QUFGVCxPQVRLLEVBYUw7QUFDRUwsYUFBSyxFQUFFRCxLQUFLLENBQUNZLE9BRGY7QUFFRVQsYUFBSyxFQUFFO0FBQUVDLGNBQUksRUFBRTtBQUFFQyxjQUFFLEVBQUUsSUFBTjtBQUFZQyxnQkFBSSxFQUFFO0FBQWxCO0FBQVI7QUFGVCxPQWJLLEVBaUJMO0FBQ0VMLGFBQUssRUFBRUQsS0FBSyxDQUFDYSxXQURmO0FBRUVWLGFBQUssRUFBRTtBQUFFQyxjQUFJLEVBQUU7QUFBRUMsY0FBRSxFQUFFLElBQU47QUFBWUMsZ0JBQUksRUFBRTtBQUFsQjtBQUFSO0FBRlQsT0FqQkssRUFxQkw7QUFDRUwsYUFBSyxFQUFFRCxLQUFLLENBQUNjLE1BRGY7QUFFRVgsYUFBSyxFQUFFO0FBQUVDLGNBQUksRUFBRTtBQUFFQyxjQUFFLEVBQUUsSUFBTjtBQUFZQyxnQkFBSSxFQUFFO0FBQWxCO0FBQVI7QUFGVCxPQXJCSyxDQUFQO0FBMEJELEtBM0JrQixDQUFuQjtBQTZCQVYsZ0JBQVksQ0FBQyxDQUNYO0FBQ0VtQixhQUFPLEVBQUUsQ0FDUDtBQUFFQyxhQUFLLEVBQUUsa0JBQVQ7QUFBNkJDLGFBQUssRUFBRTtBQUFFQyxhQUFHLEVBQUU7QUFBUDtBQUFwQyxPQURPLEVBRVA7QUFBRUYsYUFBSyxFQUFFLGlCQUFUO0FBQTRCQyxhQUFLLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVA7QUFBbkMsT0FGTyxFQUdQO0FBQUVGLGFBQUssRUFBRSxTQUFUO0FBQW9CQyxhQUFLLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVA7QUFBM0IsT0FITyxFQUlQO0FBQUVGLGFBQUssRUFBRSxTQUFUO0FBQW9CQyxhQUFLLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVA7QUFBM0IsT0FKTyxFQUtQO0FBQUVGLGFBQUssRUFBRSxTQUFUO0FBQW9CQyxhQUFLLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVA7QUFBM0IsT0FMTyxFQU1QO0FBQUVGLGFBQUssRUFBRSxRQUFUO0FBQW1CQyxhQUFLLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVA7QUFBMUIsT0FOTyxDQURYO0FBU0V6QixVQUFJLEVBQUVLO0FBVFIsS0FEVyxDQUFELENBQVo7QUFhRCxHQTNDUSxFQTJDTixDQUFDTCxJQUFELENBM0NNLENBQVQ7QUE2Q0Esc0JBQ0U7QUFBQSxjQUNHRSxTQUFTLGlCQUNSLHFFQUFDLFNBQUQ7QUFBVyxhQUFPLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBcEI7QUFBQSw2QkFDRSxxRUFBQyxVQUFEO0FBQVksZUFBTyxFQUFFQSxTQUFyQjtBQUFnQyxZQUFJLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0F6RGVILFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29tcHJhcy40ZWMzMzdiZjE1NjlkYjM5MTQzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFJlYWN0RXhwb3J0IGZyb20gXCJyZWFjdC1kYXRhLWV4cG9ydFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBFeGNlbEZpbGUgPSBSZWFjdEV4cG9ydC5FeGNlbEZpbGU7XHJcbmNvbnN0IEV4Y2VsU2hlZXQgPSBSZWFjdEV4cG9ydC5FeGNlbEZpbGUuRXhjZWxTaGVldDtcclxuY29uc3QgRXhjZWxDb2x1bW4gPSBSZWFjdEV4cG9ydC5FeGNlbEZpbGUuRXhjZWxDb2x1bW47XHJcblxyXG5pbnRlcmZhY2UgRXhjZWxQcm9wcyB7XHJcbiAgZGF0YTogQXJyYXk8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4Y2VsRXhwb3J0KHsgZGF0YSB9OiBFeGNlbFByb3BzKSB7XHJcbiAgY29uc3QgW2V4Y2VsRGF0YSwgc2V0RXhjZWxEYXRhXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBkYXRhLm1hcCgoZmllbGQpID0+IHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuREFUQVNPTElDSVRBQ0FPLFxyXG4gICAgICAgICAgc3R5bGU6IHsgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiBmYWxzZSB9LCBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCJ9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuUkVRVUlTSVRBRE9QT1IsXHJcbiAgICAgICAgICBzdHlsZTogeyBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IGZhbHNlIH0gfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5ERVNDUklDQU9QUk9ELFxyXG4gICAgICAgICAgc3R5bGU6IHsgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiBmYWxzZSB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuQ09UQUNBTyxcclxuICAgICAgICAgIHN0eWxlOiB7IGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogZmFsc2UgfSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLk5PTUVDTElFTlRFLFxyXG4gICAgICAgICAgc3R5bGU6IHsgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiBmYWxzZSB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuU1RBVFVTLFxyXG4gICAgICAgICAgc3R5bGU6IHsgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiBmYWxzZSB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEV4Y2VsRGF0YShbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICB7IHRpdGxlOiBcIkRhdGEgU29saWNpdGHDp8Ojb1wiLCB3aWR0aDogeyB3cHg6IDEyMCB9IH0sXHJcbiAgICAgICAgICB7IHRpdGxlOiBcIlJlcXVpc2l0YWRvIFBvclwiLCB3aWR0aDogeyB3cHg6IDEyMCB9IH0sXHJcbiAgICAgICAgICB7IHRpdGxlOiBcIlByb2R1dG9cIiwgd2lkdGg6IHsgd3B4OiA0MDAgfSB9LFxyXG4gICAgICAgICAgeyB0aXRsZTogXCJDb3Rhw6fDo29cIiwgd2lkdGg6IHsgd3B4OiAxMDAgfSB9LFxyXG4gICAgICAgICAgeyB0aXRsZTogXCJDbGllbnRlXCIsIHdpZHRoOiB7IHdweDogMzUwIH0gfSxcclxuICAgICAgICAgIHsgdGl0bGU6IFwiU3RhdHVzXCIsIHdpZHRoOiB7IHdweDogMTAwIH0gfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRhdGE6IHBhcnNlZERhdGEsXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2V4Y2VsRGF0YSAmJiAoXHJcbiAgICAgICAgPEV4Y2VsRmlsZSBlbGVtZW50PXs8YnV0dG9uPkV4cG9ydGFyIHBhcmEgRXhjZWw8L2J1dHRvbj59PlxyXG4gICAgICAgICAgPEV4Y2VsU2hlZXQgZGF0YVNldD17ZXhjZWxEYXRhfSBuYW1lPVwiQ29tcHJhc1wiIC8+XHJcbiAgICAgICAgPC9FeGNlbEZpbGU+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=