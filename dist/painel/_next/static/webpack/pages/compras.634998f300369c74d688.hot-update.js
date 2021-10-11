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
        style: {
          alignment: {
            vertical: "center",
            horizontal: "center"
          }
        }
      }, {
        title: "Requisitado Por",
        width: {
          wpx: 120
        },
        style: {
          alignment: {
            vertical: "center",
            horizontal: "center"
          }
        }
      }, {
        title: "Produto",
        width: {
          wpx: 450
        },
        style: {
          alignment: {
            vertical: "center",
            horizontal: "center"
          }
        }
      }, {
        title: "Cotação",
        width: {
          wpx: 100
        },
        style: {
          alignment: {
            vertical: "center",
            horizontal: "center"
          }
        }
      }, {
        title: "Cliente",
        width: {
          wpx: 350
        },
        style: {
          alignment: {
            vertical: "center",
            horizontal: "center"
          }
        }
      }, {
        title: "Status",
        width: {
          wpx: 100
        },
        style: {
          alignment: {
            vertical: "center",
            horizontal: "center"
          }
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
        lineNumber: 106,
        columnNumber: 29
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelSheet, {
        dataSet: excelData,
        name: "Compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhjZWxFeHBvcnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkV4Y2VsRmlsZSIsIlJlYWN0RXhwb3J0IiwiRXhjZWxTaGVldCIsIkV4Y2VsQ29sdW1uIiwiRXhjZWxFeHBvcnQiLCJkYXRhIiwidXNlU3RhdGUiLCJleGNlbERhdGEiLCJzZXRFeGNlbERhdGEiLCJ1c2VFZmZlY3QiLCJwYXJzZWREYXRhIiwibWFwIiwiZmllbGQiLCJ2YWx1ZSIsIkRBVEFTT0xJQ0lUQUNBTyIsInN0eWxlIiwiZm9udCIsInN6IiwiYm9sZCIsImFsaWdubWVudCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlJFUVVJU0lUQURPUE9SIiwiREVTQ1JJQ0FPUFJPRCIsIkNPVEFDQU8iLCJOT01FQ0xJRU5URSIsIlNUQVRVUyIsImNvbHVtbnMiLCJ0aXRsZSIsIndpZHRoIiwid3B4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHdEQUFXLENBQUNELFNBQTlCO0FBQ0EsSUFBTUUsVUFBVSxHQUFHRCx3REFBVyxDQUFDRCxTQUFaLENBQXNCRSxVQUF6QztBQUNBLElBQU1DLFdBQVcsR0FBR0Ysd0RBQVcsQ0FBQ0QsU0FBWixDQUFzQkcsV0FBMUM7QUFNTyxTQUFTQyxXQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjs7QUFBQSxrQkFDZEMsc0RBQVEsRUFETTtBQUFBLE1BQ3pDQyxTQUR5QztBQUFBLE1BQzlCQyxZQUQ4Qjs7QUFHaERDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR0wsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JDLGFBQU8sQ0FDTDtBQUNFQyxhQUFLLEVBQUVELEtBQUssQ0FBQ0UsZUFEZjtBQUVFQyxhQUFLLEVBQUU7QUFDTEMsY0FBSSxFQUFF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QyxzQkFBVSxFQUFFO0FBQWxDO0FBQWI7QUFIVCxPQWhCTyxFQXFCUDtBQUNFTyxhQUFLLEVBQUUsU0FEVDtBQUVFQyxhQUFLLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVAsU0FGVDtBQUdFZixhQUFLLEVBQUU7QUFBRUksbUJBQVMsRUFBRTtBQUFFQyxvQkFBUSxFQUFFLFFBQVo7QUFBc0JDLHNCQUFVLEVBQUU7QUFBbEM7QUFBYjtBQUhULE9BckJPLEVBMEJQO0FBQ0VPLGFBQUssRUFBRSxRQURUO0FBRUVDLGFBQUssRUFBRTtBQUFFQyxhQUFHLEVBQUU7QUFBUCxTQUZUO0FBR0VmLGFBQUssRUFBRTtBQUFFSSxtQkFBUyxFQUFFO0FBQUVDLG9CQUFRLEVBQUUsUUFBWjtBQUFzQkMsc0JBQVUsRUFBRTtBQUFsQztBQUFiO0FBSFQsT0ExQk8sQ0FEWDtBQWlDRWhCLFVBQUksRUFBRUs7QUFqQ1IsS0FEVyxDQUFELENBQVo7QUFxQ0QsR0FyRlEsRUFxRk4sQ0FBQ0wsSUFBRCxDQXJGTSxDQUFUO0FBdUZBLHNCQUNFO0FBQUEsY0FDR0UsU0FBUyxpQkFDUixxRUFBQyxTQUFEO0FBQVcsYUFBTyxlQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXBCO0FBQUEsNkJBQ0UscUVBQUMsVUFBRDtBQUFZLGVBQU8sRUFBRUEsU0FBckI7QUFBZ0MsWUFBSSxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBbkdlSCxXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXByYXMuNjM0OTk4ZjMwMDM2OWM3NGQ2ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBSZWFjdEV4cG9ydCBmcm9tIFwicmVhY3QtZGF0YS1leHBvcnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRXhjZWxGaWxlID0gUmVhY3RFeHBvcnQuRXhjZWxGaWxlO1xyXG5jb25zdCBFeGNlbFNoZWV0ID0gUmVhY3RFeHBvcnQuRXhjZWxGaWxlLkV4Y2VsU2hlZXQ7XHJcbmNvbnN0IEV4Y2VsQ29sdW1uID0gUmVhY3RFeHBvcnQuRXhjZWxGaWxlLkV4Y2VsQ29sdW1uO1xyXG5cclxuaW50ZXJmYWNlIEV4Y2VsUHJvcHMge1xyXG4gIGRhdGE6IEFycmF5PGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFeGNlbEV4cG9ydCh7IGRhdGEgfTogRXhjZWxQcm9wcykge1xyXG4gIGNvbnN0IFtleGNlbERhdGEsIHNldEV4Y2VsRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwYXJzZWREYXRhID0gZGF0YS5tYXAoKGZpZWxkKSA9PiB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLkRBVEFTT0xJQ0lUQUNBTyxcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLlJFUVVJU0lUQURPUE9SLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuREVTQ1JJQ0FPUFJPRCxcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLkNPVEFDQU8sXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5OT01FQ0xJRU5URSxcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLlNUQVRVUyxcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF07XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRFeGNlbERhdGEoW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJEYXRhIFNvbGljaXRhw6fDo29cIixcclxuICAgICAgICAgICAgd2lkdGg6IHsgd3B4OiAxMjAgfSxcclxuICAgICAgICAgICAgc3R5bGU6IHsgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlJlcXVpc2l0YWRvIFBvclwiLFxyXG4gICAgICAgICAgICB3aWR0aDogeyB3cHg6IDEyMCB9LFxyXG4gICAgICAgICAgICBzdHlsZTogeyBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiUHJvZHV0b1wiLFxyXG4gICAgICAgICAgICB3aWR0aDogeyB3cHg6IDQ1MCB9LFxyXG4gICAgICAgICAgICBzdHlsZTogeyBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ290YcOnw6NvXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiB7IHdweDogMTAwIH0sXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJDbGllbnRlXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiB7IHdweDogMzUwIH0sXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJTdGF0dXNcIixcclxuICAgICAgICAgICAgd2lkdGg6IHsgd3B4OiAxMDAgfSxcclxuICAgICAgICAgICAgc3R5bGU6IHsgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhOiBwYXJzZWREYXRhLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgfSwgW2RhdGFdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtleGNlbERhdGEgJiYgKFxyXG4gICAgICAgIDxFeGNlbEZpbGUgZWxlbWVudD17PGJ1dHRvbj5FeHBvcnRhciBwYXJhIEV4Y2VsPC9idXR0b24+fT5cclxuICAgICAgICAgIDxFeGNlbFNoZWV0IGRhdGFTZXQ9e2V4Y2VsRGF0YX0gbmFtZT1cIkNvbXByYXNcIiAvPlxyXG4gICAgICAgIDwvRXhjZWxGaWxlPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9