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
            sz: "24",
            bold: false
          }
        }
      }, {
        value: field.REQUISITADOPOR,
        style: {
          font: {
            sz: "24",
            bold: false
          }
        }
      }, {
        value: field.DESCRICAOPROD,
        style: {
          font: {
            sz: "24",
            bold: false
          }
        }
      }, {
        value: field.COTACAO,
        style: {
          font: {
            sz: "24",
            bold: false
          }
        }
      }, {
        value: field.NOMECLIENTE,
        style: {
          font: {
            sz: "24",
            bold: false
          }
        }
      }, {
        value: field.STATUS,
        style: {
          font: {
            sz: "24",
            bold: false
          }
        }
      }];
    });
    setExcelData([{
      columns: [{
        title: "Data Solicitação",
        width: {
          wpx: 80
        }
      }, {
        title: "Requisitado Por",
        width: {
          wcp: 40
        }
      }, {
        title: "Produto",
        width: {
          wpx: 90
        }
      }, {
        title: "Cotação",
        width: {
          wpx: 90
        }
      }, {
        title: "Cliente",
        width: {
          wpx: 90
        }
      }, {
        title: "Status",
        width: {
          wpx: 90
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhjZWxFeHBvcnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkV4Y2VsRmlsZSIsIlJlYWN0RXhwb3J0IiwiRXhjZWxTaGVldCIsIkV4Y2VsQ29sdW1uIiwiRXhjZWxFeHBvcnQiLCJkYXRhIiwidXNlU3RhdGUiLCJleGNlbERhdGEiLCJzZXRFeGNlbERhdGEiLCJ1c2VFZmZlY3QiLCJwYXJzZWREYXRhIiwibWFwIiwiZmllbGQiLCJ2YWx1ZSIsIkRBVEFTT0xJQ0lUQUNBTyIsInN0eWxlIiwiZm9udCIsInN6IiwiYm9sZCIsIlJFUVVJU0lUQURPUE9SIiwiREVTQ1JJQ0FPUFJPRCIsIkNPVEFDQU8iLCJOT01FQ0xJRU5URSIsIlNUQVRVUyIsImNvbHVtbnMiLCJ0aXRsZSIsIndpZHRoIiwid3B4Iiwid2NwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHdEQUFXLENBQUNELFNBQTlCO0FBQ0EsSUFBTUUsVUFBVSxHQUFHRCx3REFBVyxDQUFDRCxTQUFaLENBQXNCRSxVQUF6QztBQUNBLElBQU1DLFdBQVcsR0FBR0Ysd0RBQVcsQ0FBQ0QsU0FBWixDQUFzQkcsV0FBMUM7QUFNTyxTQUFTQyxXQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjs7QUFBQSxrQkFDZEMsc0RBQVEsRUFETTtBQUFBLE1BQ3pDQyxTQUR5QztBQUFBLE1BQzlCQyxZQUQ4Qjs7QUFHaERDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR0wsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JDLGFBQU8sQ0FDTDtBQUNFQyxhQUFLLEVBQUVELEtBQUssQ0FBQ0UsZUFEZjtBQUVFQyxhQUFLLEVBQUU7QUFBRUMsY0FBSSxFQUFFO0FBQUVDLGNBQUUsRUFBRSxJQUFOO0FBQVlDLGdCQUFJLEVBQUU7QUFBbEI7QUFBUjtBQUZULE9BREssRUFLTDtBQUNFTCxhQUFLLEVBQUVELEtBQUssQ0FBQ08sY0FEZjtBQUVFSixhQUFLLEVBQUU7QUFBRUMsY0FBSSxFQUFFO0FBQUVDLGNBQUUsRUFBRSxJQUFOO0FBQVlDLGdCQUFJLEVBQUU7QUFBbEI7QUFBUjtBQUZULE9BTEssRUFTTDtBQUNFTCxhQUFLLEVBQUVELEtBQUssQ0FBQ1EsYUFEZjtBQUVFTCxhQUFLLEVBQUU7QUFBRUMsY0FBSSxFQUFFO0FBQUVDLGNBQUUsRUFBRSxJQUFOO0FBQVlDLGdCQUFJLEVBQUU7QUFBbEI7QUFBUjtBQUZULE9BVEssRUFhTDtBQUNFTCxhQUFLLEVBQUVELEtBQUssQ0FBQ1MsT0FEZjtBQUVFTixhQUFLLEVBQUU7QUFBRUMsY0FBSSxFQUFFO0FBQUVDLGNBQUUsRUFBRSxJQUFOO0FBQVlDLGdCQUFJLEVBQUU7QUFBbEI7QUFBUjtBQUZULE9BYkssRUFpQkw7QUFDRUwsYUFBSyxFQUFFRCxLQUFLLENBQUNVLFdBRGY7QUFFRVAsYUFBSyxFQUFFO0FBQUVDLGNBQUksRUFBRTtBQUFFQyxjQUFFLEVBQUUsSUFBTjtBQUFZQyxnQkFBSSxFQUFFO0FBQWxCO0FBQVI7QUFGVCxPQWpCSyxFQXFCTDtBQUNFTCxhQUFLLEVBQUVELEtBQUssQ0FBQ1csTUFEZjtBQUVFUixhQUFLLEVBQUU7QUFBRUMsY0FBSSxFQUFFO0FBQUVDLGNBQUUsRUFBRSxJQUFOO0FBQVlDLGdCQUFJLEVBQUU7QUFBbEI7QUFBUjtBQUZULE9BckJLLENBQVA7QUEwQkQsS0EzQmtCLENBQW5CO0FBNkJBVixnQkFBWSxDQUFDLENBQ1g7QUFDRWdCLGFBQU8sRUFBRSxDQUNQO0FBQUVDLGFBQUssRUFBRSxrQkFBVDtBQUE2QkMsYUFBSyxFQUFFO0FBQUVDLGFBQUcsRUFBRTtBQUFQO0FBQXBDLE9BRE8sRUFFUDtBQUFFRixhQUFLLEVBQUUsaUJBQVQ7QUFBNEJDLGFBQUssRUFBRTtBQUFFRSxhQUFHLEVBQUU7QUFBUDtBQUFuQyxPQUZPLEVBR1A7QUFBRUgsYUFBSyxFQUFFLFNBQVQ7QUFBb0JDLGFBQUssRUFBRTtBQUFFQyxhQUFHLEVBQUU7QUFBUDtBQUEzQixPQUhPLEVBSVA7QUFBRUYsYUFBSyxFQUFFLFNBQVQ7QUFBb0JDLGFBQUssRUFBRTtBQUFFQyxhQUFHLEVBQUU7QUFBUDtBQUEzQixPQUpPLEVBS1A7QUFBRUYsYUFBSyxFQUFFLFNBQVQ7QUFBb0JDLGFBQUssRUFBRTtBQUFFQyxhQUFHLEVBQUU7QUFBUDtBQUEzQixPQUxPLEVBTVA7QUFBRUYsYUFBSyxFQUFFLFFBQVQ7QUFBbUJDLGFBQUssRUFBRTtBQUFFQyxhQUFHLEVBQUU7QUFBUDtBQUExQixPQU5PLENBRFg7QUFTRXRCLFVBQUksRUFBRUs7QUFUUixLQURXLENBQUQsQ0FBWjtBQWFELEdBM0NRLEVBMkNOLENBQUNMLElBQUQsQ0EzQ00sQ0FBVDtBQTZDQSxzQkFDRTtBQUFBLGNBQ0dFLFNBQVMsaUJBQ1IscUVBQUMsU0FBRDtBQUFXLGFBQU8sZUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFwQjtBQUFBLDZCQUNFLHFFQUFDLFVBQUQ7QUFBWSxlQUFPLEVBQUVBLFNBQXJCO0FBQWdDLFlBQUksRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQXpEZUgsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21wcmFzLmFlOTA4MGFhMTk1MTNmNGQ2ZjY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgUmVhY3RFeHBvcnQgZnJvbSBcInJlYWN0LWRhdGEtZXhwb3J0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEV4Y2VsRmlsZSA9IFJlYWN0RXhwb3J0LkV4Y2VsRmlsZTtcclxuY29uc3QgRXhjZWxTaGVldCA9IFJlYWN0RXhwb3J0LkV4Y2VsRmlsZS5FeGNlbFNoZWV0O1xyXG5jb25zdCBFeGNlbENvbHVtbiA9IFJlYWN0RXhwb3J0LkV4Y2VsRmlsZS5FeGNlbENvbHVtbjtcclxuXHJcbmludGVyZmFjZSBFeGNlbFByb3BzIHtcclxuICBkYXRhOiBBcnJheTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhjZWxFeHBvcnQoeyBkYXRhIH06IEV4Y2VsUHJvcHMpIHtcclxuICBjb25zdCBbZXhjZWxEYXRhLCBzZXRFeGNlbERhdGFdID0gdXNlU3RhdGU8YW55PigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGRhdGEubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5EQVRBU09MSUNJVEFDQU8sXHJcbiAgICAgICAgICBzdHlsZTogeyBmb250OiB7IHN6OiBcIjI0XCIsIGJvbGQ6IGZhbHNlIH0gfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5SRVFVSVNJVEFET1BPUixcclxuICAgICAgICAgIHN0eWxlOiB7IGZvbnQ6IHsgc3o6IFwiMjRcIiwgYm9sZDogZmFsc2UgfSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLkRFU0NSSUNBT1BST0QsXHJcbiAgICAgICAgICBzdHlsZTogeyBmb250OiB7IHN6OiBcIjI0XCIsIGJvbGQ6IGZhbHNlIH0gfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5DT1RBQ0FPLFxyXG4gICAgICAgICAgc3R5bGU6IHsgZm9udDogeyBzejogXCIyNFwiLCBib2xkOiBmYWxzZSB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuTk9NRUNMSUVOVEUsXHJcbiAgICAgICAgICBzdHlsZTogeyBmb250OiB7IHN6OiBcIjI0XCIsIGJvbGQ6IGZhbHNlIH0gfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5TVEFUVVMsXHJcbiAgICAgICAgICBzdHlsZTogeyBmb250OiB7IHN6OiBcIjI0XCIsIGJvbGQ6IGZhbHNlIH0gfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0RXhjZWxEYXRhKFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHsgdGl0bGU6IFwiRGF0YSBTb2xpY2l0YcOnw6NvXCIsIHdpZHRoOiB7IHdweDogODAgfSB9LFxyXG4gICAgICAgICAgeyB0aXRsZTogXCJSZXF1aXNpdGFkbyBQb3JcIiwgd2lkdGg6IHsgd2NwOiA0MCB9IH0sIFxyXG4gICAgICAgICAgeyB0aXRsZTogXCJQcm9kdXRvXCIsIHdpZHRoOiB7IHdweDogOTAgfSB9LFxyXG4gICAgICAgICAgeyB0aXRsZTogXCJDb3Rhw6fDo29cIiwgd2lkdGg6IHsgd3B4OiA5MCB9IH0sXHJcbiAgICAgICAgICB7IHRpdGxlOiBcIkNsaWVudGVcIiwgd2lkdGg6IHsgd3B4OiA5MCB9IH0sXHJcbiAgICAgICAgICB7IHRpdGxlOiBcIlN0YXR1c1wiLCB3aWR0aDogeyB3cHg6IDkwIH0gfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRhdGE6IHBhcnNlZERhdGFcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gIH0sIFtkYXRhXSk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtleGNlbERhdGEgJiYgKFxyXG4gICAgICAgIDxFeGNlbEZpbGUgZWxlbWVudD17PGJ1dHRvbj5FeHBvcnRhciBwYXJhIEV4Y2VsPC9idXR0b24+fT5cclxuICAgICAgICAgIDxFeGNlbFNoZWV0IGRhdGFTZXQ9e2V4Y2VsRGF0YX0gbmFtZT1cIkNvbXByYXNcIiAvPlxyXG4gICAgICAgIDwvRXhjZWxGaWxlPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9