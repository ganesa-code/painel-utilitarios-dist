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
          },
          alignment: {
            vertical: "center",
            horizontal: "center"
          }
        }
      }, {
        value: field.DESCRICAOPROD,
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
        value: field.COTACAO,
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
        value: field.NOMECLIENTE,
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
        value: field.STATUS,
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
      }];
    });
    setExcelData([{
      columns: [{
        title: "Data Solicitação",
        width: {
          wpx: 120
        },
        st: st
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
        lineNumber: 82,
        columnNumber: 29
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelSheet, {
        dataSet: excelData,
        name: "Compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhjZWxFeHBvcnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkV4Y2VsRmlsZSIsIlJlYWN0RXhwb3J0IiwiRXhjZWxTaGVldCIsIkV4Y2VsQ29sdW1uIiwiRXhjZWxFeHBvcnQiLCJkYXRhIiwidXNlU3RhdGUiLCJleGNlbERhdGEiLCJzZXRFeGNlbERhdGEiLCJ1c2VFZmZlY3QiLCJwYXJzZWREYXRhIiwibWFwIiwiZmllbGQiLCJ2YWx1ZSIsIkRBVEFTT0xJQ0lUQUNBTyIsInN0eWxlIiwiZm9udCIsInN6IiwiYm9sZCIsImFsaWdubWVudCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlJFUVVJU0lUQURPUE9SIiwiREVTQ1JJQ0FPUFJPRCIsIkNPVEFDQU8iLCJOT01FQ0xJRU5URSIsIlNUQVRVUyIsImNvbHVtbnMiLCJ0aXRsZSIsIndpZHRoIiwid3B4Iiwic3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msd0RBQVcsQ0FBQ0QsU0FBOUI7QUFDQSxJQUFNRSxVQUFVLEdBQUdELHdEQUFXLENBQUNELFNBQVosQ0FBc0JFLFVBQXpDO0FBQ0EsSUFBTUMsV0FBVyxHQUFHRix3REFBVyxDQUFDRCxTQUFaLENBQXNCRyxXQUExQztBQU1PLFNBQVNDLFdBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9COztBQUFBLGtCQUNkQyxzREFBUSxFQURNO0FBQUEsTUFDekNDLFNBRHlDO0FBQUEsTUFDOUJDLFlBRDhCOztBQUdoREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsVUFBVSxHQUFHTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFDQyxLQUFELEVBQVc7QUFDckMsYUFBTyxDQUNMO0FBQ0VDLGFBQUssRUFBRUQsS0FBSyxDQUFDRSxlQURmO0FBRUVDLGFBQUssRUFBRTtBQUNMQyxjQUFJLEVBQUU7QUFBRUMsY0FBRSxFQUFFLElBQU47QUFBWUMsZ0JBQUksRUFBRTtBQUFsQixXQUREO0FBRUxDLG1CQUFTLEVBQUU7QUFBRUMsb0JBQVEsRUFBRSxRQUFaO0FBQXNCQyxzQkFBVSxFQUFFO0FBQWxDO0FBRk47QUFGVCxPQURLLEVBUUw7QUFDRVIsYUFBSyxFQUFFRCxLQUFLLENBQUNVLGNBRGY7QUFFRVAsYUFBSyxFQUFFO0FBQ0xDLGNBQUksRUFBRTtBQUFFQyxjQUFFLEVBQUUsSUFBTjtBQUFZQyxnQkFBSSxFQUFFO0FBQWxCLFdBREQ7QUFFTEMsbUJBQVMsRUFBRTtBQUFFQyxvQkFBUSxFQUFFLFFBQVo7QUFBc0JDLHNCQUFVLEVBQUU7QUFBbEM7QUFGTjtBQUZULE9BUkssRUFlTDtBQUNFUixhQUFLLEVBQUVELEtBQUssQ0FBQ1csYUFEZjtBQUVFUixhQUFLLEVBQUU7QUFDTEMsY0FBSSxFQUFFO0FBQUVDLGNBQUUsRUFBRSxJQUFOO0FBQVlDLGdCQUFJLEVBQUU7QUFBbEIsV0FERDtBQUVMQyxtQkFBUyxFQUFFO0FBQUVDLG9CQUFRLEVBQUUsUUFBWjtBQUFzQkMsc0JBQVUsRUFBRTtBQUFsQztBQUZOO0FBRlQsT0FmSyxFQXNCTDtBQUNFUixhQUFLLEVBQUVELEtBQUssQ0FBQ1ksT0FEZjtBQUVFVCxhQUFLLEVBQUU7QUFDTEMsY0FBSSxFQUFFO0FBQUVDLGNBQUUsRUFBRSxJQUFOO0FBQVlDLGdCQUFJLEVBQUU7QUFBbEIsV0FERDtBQUVMQyxtQkFBUyxFQUFFO0FBQUVDLG9CQUFRLEVBQUUsUUFBWjtBQUFzQkMsc0JBQVUsRUFBRTtBQUFsQztBQUZOO0FBRlQsT0F0QkssRUE2Qkw7QUFDRVIsYUFBSyxFQUFFRCxLQUFLLENBQUNhLFdBRGY7QUFFRVYsYUFBSyxFQUFFO0FBQ0xDLGNBQUksRUFBRTtBQUFFQyxjQUFFLEVBQUUsSUFBTjtBQUFZQyxnQkFBSSxFQUFFO0FBQWxCLFdBREQ7QUFFTEMsbUJBQVMsRUFBRTtBQUFFQyxvQkFBUSxFQUFFLFFBQVo7QUFBc0JDLHNCQUFVLEVBQUU7QUFBbEM7QUFGTjtBQUZULE9BN0JLLEVBb0NMO0FBQ0VSLGFBQUssRUFBRUQsS0FBSyxDQUFDYyxNQURmO0FBRUVYLGFBQUssRUFBRTtBQUNMQyxjQUFJLEVBQUU7QUFBRUMsY0FBRSxFQUFFLElBQU47QUFBWUMsZ0JBQUksRUFBRTtBQUFsQixXQUREO0FBRUxDLG1CQUFTLEVBQUU7QUFBRUMsb0JBQVEsRUFBRSxRQUFaO0FBQXNCQyxzQkFBVSxFQUFFO0FBQWxDO0FBRk47QUFGVCxPQXBDSyxDQUFQO0FBNENELEtBN0NrQixDQUFuQjtBQStDQWIsZ0JBQVksQ0FBQyxDQUNYO0FBQ0VtQixhQUFPLEVBQUUsQ0FDUDtBQUFFQyxhQUFLLEVBQUUsa0JBQVQ7QUFBNkJDLGFBQUssRUFBRTtBQUFFQyxhQUFHLEVBQUU7QUFBUCxTQUFwQztBQUFrREMsVUFBRSxFQUFGQTtBQUFsRCxPQURPLEVBRVA7QUFBRUgsYUFBSyxFQUFFLGlCQUFUO0FBQTRCQyxhQUFLLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVA7QUFBbkMsT0FGTyxFQUdQO0FBQUVGLGFBQUssRUFBRSxTQUFUO0FBQW9CQyxhQUFLLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVA7QUFBM0IsT0FITyxFQUlQO0FBQUVGLGFBQUssRUFBRSxTQUFUO0FBQW9CQyxhQUFLLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVA7QUFBM0IsT0FKTyxFQUtQO0FBQUVGLGFBQUssRUFBRSxTQUFUO0FBQW9CQyxhQUFLLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVA7QUFBM0IsT0FMTyxFQU1QO0FBQUVGLGFBQUssRUFBRSxRQUFUO0FBQW1CQyxhQUFLLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVA7QUFBMUIsT0FOTyxDQURYO0FBU0V6QixVQUFJLEVBQUVLO0FBVFIsS0FEVyxDQUFELENBQVo7QUFhRCxHQTdEUSxFQTZETixDQUFDTCxJQUFELENBN0RNLENBQVQ7QUErREEsc0JBQ0U7QUFBQSxjQUNHRSxTQUFTLGlCQUNSLHFFQUFDLFNBQUQ7QUFBVyxhQUFPLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBcEI7QUFBQSw2QkFDRSxxRUFBQyxVQUFEO0FBQVksZUFBTyxFQUFFQSxTQUFyQjtBQUFnQyxZQUFJLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0EzRWVILFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29tcHJhcy4yYjNjZTBlN2VkNDAwZmNjYzI0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFJlYWN0RXhwb3J0IGZyb20gXCJyZWFjdC1kYXRhLWV4cG9ydFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBFeGNlbEZpbGUgPSBSZWFjdEV4cG9ydC5FeGNlbEZpbGU7XHJcbmNvbnN0IEV4Y2VsU2hlZXQgPSBSZWFjdEV4cG9ydC5FeGNlbEZpbGUuRXhjZWxTaGVldDtcclxuY29uc3QgRXhjZWxDb2x1bW4gPSBSZWFjdEV4cG9ydC5FeGNlbEZpbGUuRXhjZWxDb2x1bW47XHJcblxyXG5pbnRlcmZhY2UgRXhjZWxQcm9wcyB7XHJcbiAgZGF0YTogQXJyYXk8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4Y2VsRXhwb3J0KHsgZGF0YSB9OiBFeGNlbFByb3BzKSB7XHJcbiAgY29uc3QgW2V4Y2VsRGF0YSwgc2V0RXhjZWxEYXRhXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBkYXRhLm1hcCgoZmllbGQpID0+IHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuREFUQVNPTElDSVRBQ0FPLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuUkVRVUlTSVRBRE9QT1IsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5ERVNDUklDQU9QUk9ELFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuQ09UQUNBTyxcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLk5PTUVDTElFTlRFLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuU1RBVFVTLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEV4Y2VsRGF0YShbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICB7IHRpdGxlOiBcIkRhdGEgU29saWNpdGHDp8Ojb1wiLCB3aWR0aDogeyB3cHg6IDEyMCB9LCBzdCB9LFxyXG4gICAgICAgICAgeyB0aXRsZTogXCJSZXF1aXNpdGFkbyBQb3JcIiwgd2lkdGg6IHsgd3B4OiAxMjAgfSB9LFxyXG4gICAgICAgICAgeyB0aXRsZTogXCJQcm9kdXRvXCIsIHdpZHRoOiB7IHdweDogNDAwIH0gfSxcclxuICAgICAgICAgIHsgdGl0bGU6IFwiQ290YcOnw6NvXCIsIHdpZHRoOiB7IHdweDogMTAwIH0gfSxcclxuICAgICAgICAgIHsgdGl0bGU6IFwiQ2xpZW50ZVwiLCB3aWR0aDogeyB3cHg6IDM1MCB9IH0sXHJcbiAgICAgICAgICB7IHRpdGxlOiBcIlN0YXR1c1wiLCB3aWR0aDogeyB3cHg6IDEwMCB9IH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhOiBwYXJzZWREYXRhLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgfSwgW2RhdGFdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtleGNlbERhdGEgJiYgKFxyXG4gICAgICAgIDxFeGNlbEZpbGUgZWxlbWVudD17PGJ1dHRvbj5FeHBvcnRhciBwYXJhIEV4Y2VsPC9idXR0b24+fT5cclxuICAgICAgICAgIDxFeGNlbFNoZWV0IGRhdGFTZXQ9e2V4Y2VsRGF0YX0gbmFtZT1cIkNvbXByYXNcIiAvPlxyXG4gICAgICAgIDwvRXhjZWxGaWxlPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9