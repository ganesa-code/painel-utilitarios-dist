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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");


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
          font: {
            sz: "12",
            bold: true
          },
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
          font: {
            sz: "12",
            bold: true
          },
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
          font: {
            sz: "12",
            bold: true
          },
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
          font: {
            sz: "12",
            bold: true
          },
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
          font: {
            sz: "12",
            bold: true
          },
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
          font: {
            sz: "12",
            bold: true
          },
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
    className: "",
    children: excelData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelFile, {
      element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        style: {
          backgroundColor: "#B23237"
        },
        variant: "contained",
        color: "primary",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiDownload"], {
          size: 25,
          color: "#f4f4f4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }, this), "Exportar para Excel"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelSheet, {
        dataSet: excelData,
        name: "Compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhjZWxFeHBvcnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkV4Y2VsRmlsZSIsIlJlYWN0RXhwb3J0IiwiRXhjZWxTaGVldCIsIkV4Y2VsQ29sdW1uIiwiRXhjZWxFeHBvcnQiLCJkYXRhIiwidXNlU3RhdGUiLCJleGNlbERhdGEiLCJzZXRFeGNlbERhdGEiLCJ1c2VFZmZlY3QiLCJwYXJzZWREYXRhIiwibWFwIiwiZmllbGQiLCJ2YWx1ZSIsIkRBVEFTT0xJQ0lUQUNBTyIsInN0eWxlIiwiZm9udCIsInN6IiwiYm9sZCIsImFsaWdubWVudCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlJFUVVJU0lUQURPUE9SIiwiREVTQ1JJQ0FPUFJPRCIsIkNPVEFDQU8iLCJOT01FQ0xJRU5URSIsIlNUQVRVUyIsImNvbHVtbnMiLCJ0aXRsZSIsIndpZHRoIiwid3B4IiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHdEQUFXLENBQUNELFNBQTlCO0FBQ0EsSUFBTUUsVUFBVSxHQUFHRCx3REFBVyxDQUFDRCxTQUFaLENBQXNCRSxVQUF6QztBQUNBLElBQU1DLFdBQVcsR0FBR0Ysd0RBQVcsQ0FBQ0QsU0FBWixDQUFzQkcsV0FBMUM7QUFNTyxTQUFTQyxXQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjs7QUFBQSxrQkFDZEMsc0RBQVEsRUFETTtBQUFBLE1BQ3pDQyxTQUR5QztBQUFBLE1BQzlCQyxZQUQ4Qjs7QUFHaERDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR0wsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JDLGFBQU8sQ0FDTDtBQUNFQyxhQUFLLEVBQUVELEtBQUssQ0FBQ0UsZUFEZjtB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ZjtBQUFBLGNBQ0dFLFNBQVMsaUJBQ1IscUVBQUMsU0FBRDtBQUNFLGFBQU8sZUFDTCxxRUFBQyx3REFBRDtBQUNFLGFBQUssRUFBRTtBQUNMd0IseUJBQWUsRUFBRTtBQURaLFNBRFQ7QUFJRSxlQUFPLEVBQUMsV0FKVjtBQUtFLGFBQUssRUFBQyxTQUxSO0FBQUEsZ0NBT0UscUVBQUMseURBQUQ7QUFBWSxjQUFJLEVBQUUsRUFBbEI7QUFBc0IsZUFBSyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQSw2QkFjRSxxRUFBQyxVQUFEO0FBQVksZUFBTyxFQUFFeEIsU0FBckI7QUFBZ0MsWUFBSSxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztHQWxJZUgsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21wcmFzLjU4MWI3MjM4ZDYyYjI5ZjgzN2VjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgUmVhY3RFeHBvcnQgZnJvbSBcInJlYWN0LWRhdGEtZXhwb3J0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEZpRG93bmxvYWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuXHJcbmNvbnN0IEV4Y2VsRmlsZSA9IFJlYWN0RXhwb3J0LkV4Y2VsRmlsZTtcclxuY29uc3QgRXhjZWxTaGVldCA9IFJlYWN0RXhwb3J0LkV4Y2VsRmlsZS5FeGNlbFNoZWV0O1xyXG5jb25zdCBFeGNlbENvbHVtbiA9IFJlYWN0RXhwb3J0LkV4Y2VsRmlsZS5FeGNlbENvbHVtbjtcclxuXHJcbmludGVyZmFjZSBFeGNlbFByb3BzIHtcclxuICBkYXRhOiBBcnJheTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhjZWxFeHBvcnQoeyBkYXRhIH06IEV4Y2VsUHJvcHMpIHtcclxuICBjb25zdCBbZXhjZWxEYXRhLCBzZXRFeGNlbERhdGFdID0gdXNlU3RhdGU8YW55PigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGRhdGEubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5EQVRBU09MSUNJVEFDQU8sXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5SRVFVSVNJVEFET1BPUixcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLkRFU0NSSUNBT1BST0QsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5DT1RBQ0FPLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuTk9NRUNMSUVOVEUsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5TVEFUVVMsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0RXhjZWxEYXRhKFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiRGF0YSBTb2xpY2l0YcOnw6NvXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiB7IHdweDogMTIwIH0sXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJSZXF1aXNpdGFkbyBQb3JcIixcclxuICAgICAgICAgICAgd2lkdGg6IHsgd3B4OiAxMjAgfSxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IHRydWUgfSxcclxuICAgICAgICAgICAgICBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlByb2R1dG9cIixcclxuICAgICAgICAgICAgd2lkdGg6IHsgd3B4OiA0NTAgfSxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IHRydWUgfSxcclxuICAgICAgICAgICAgICBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvdGHDp8Ojb1wiLFxyXG4gICAgICAgICAgICB3aWR0aDogeyB3cHg6IDEwMCB9LFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ2xpZW50ZVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogeyB3cHg6IDM1MCB9LFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiU3RhdHVzXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiB7IHdweDogMTAwIH0sXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGF0YTogcGFyc2VkRGF0YSxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICB7ZXhjZWxEYXRhICYmIChcclxuICAgICAgICA8RXhjZWxGaWxlXHJcbiAgICAgICAgICBlbGVtZW50PXtcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0IyMzIzN1wiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGaURvd25sb2FkIHNpemU9ezI1fSBjb2xvcj1cIiNmNGY0ZjRcIiAvPlxyXG4gICAgICAgICAgICAgIEV4cG9ydGFyIHBhcmEgRXhjZWxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEV4Y2VsU2hlZXQgZGF0YVNldD17ZXhjZWxEYXRhfSBuYW1lPVwiQ29tcHJhc1wiIC8+XHJcbiAgICAgICAgPC9FeGNlbEZpbGU+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=