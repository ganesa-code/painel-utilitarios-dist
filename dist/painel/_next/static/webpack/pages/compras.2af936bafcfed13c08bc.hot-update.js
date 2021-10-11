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
var multiDataSet = [{
  columns: [{
    title: "Headings",
    width: {
      wpx: 80
    }
  }, //pixels width
  {
    title: "Text Style",
    width: {
      wch: 40
    }
  }, //char width
  {
    title: "Colors",
    width: {
      wpx: 90
    }
  }],
  data: [[{
    value: "H1",
    style: {
      font: {
        sz: "24",
        bold: true
      }
    }
  }, {
    value: "Bold",
    style: {
      font: {
        bold: true
      }
    }
  }, {
    value: "Red",
    style: {
      fill: {
        patternType: "solid",
        fgColor: {
          rgb: "FFFF0000"
        }
      }
    }
  }], [{
    value: "H2",
    style: {
      font: {
        sz: "18",
        bold: true
      }
    }
  }, {
    value: "underline",
    style: {
      font: {
        underline: true
      }
    }
  }, {
    value: "Blue",
    style: {
      fill: {
        patternType: "solid",
        fgColor: {
          rgb: "FF0000FF"
        }
      }
    }
  }], [{
    value: "H3",
    style: {
      font: {
        sz: "14",
        bold: true
      }
    }
  }, {
    value: "italic",
    style: {
      font: {
        italic: true
      }
    }
  }, {
    value: "Green",
    style: {
      fill: {
        patternType: "solid",
        fgColor: {
          rgb: "FF00FF00"
        }
      }
    }
  }], [{
    value: "H4",
    style: {
      font: {
        sz: "12",
        bold: true
      }
    }
  }, {
    value: "strike",
    style: {
      font: {
        strike: true
      }
    }
  }, {
    value: "Orange",
    style: {
      fill: {
        patternType: "solid",
        fgColor: {
          rgb: "FFF86B00"
        }
      }
    }
  }], [{
    value: "H5",
    style: {
      font: {
        sz: "10.5",
        bold: true
      }
    }
  }, {
    value: "outline",
    style: {
      font: {
        outline: true
      }
    }
  }, {
    value: "Yellow",
    style: {
      fill: {
        patternType: "solid",
        fgColor: {
          rgb: "FFFFFF00"
        }
      }
    }
  }], [{
    value: "H6",
    style: {
      font: {
        sz: "7.5",
        bold: true
      }
    }
  }, {
    value: "shadow",
    style: {
      font: {
        shadow: true
      }
    }
  }, {
    value: "Light Blue",
    style: {
      fill: {
        patternType: "solid",
        fgColor: {
          rgb: "FFCCEEFF"
        }
      }
    }
  }]]
}];
function ExcelExport(_ref) {
  _s();

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      excelData = _useState[0],
      setExcelData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var parseData = data.map(function (field) {
      return [{
        value: field.DATASOLICITACAO,
        style: {
          font: {
            sz: "24",
            bold: true
          }
        }
      }, {
        value: field.REQUISITADOPOR,
        style: {
          font: {
            sz: "24",
            bold: true
          }
        }
      }, {
        value: field.DATASOLICITACAO,
        style: {
          font: {
            sz: "24",
            bold: true
          }
        }
      }, {
        value: field.DATASOLICITACAO,
        style: {
          font: {
            sz: "24",
            bold: true
          }
        }
      }, {
        value: field.DATASOLICITACAO,
        style: {
          font: {
            sz: "24",
            bold: true
          }
        }
      }, {
        value: field.DATASOLICITACAO,
        style: {
          font: {
            sz: "24",
            bold: true
          }
        }
      }];
    });
  }, [data]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: excelData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelFile, {
      element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Exportar para Excel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 29
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelSheet, {
        dataSet: excelData,
        name: "Compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhjZWxFeHBvcnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkV4Y2VsRmlsZSIsIlJlYWN0RXhwb3J0IiwiRXhjZWxTaGVldCIsIkV4Y2VsQ29sdW1uIiwibXVsdGlEYXRhU2V0IiwiY29sdW1ucyIsInRpdGxlIiwid2lkdGgiLCJ3cHgiLCJ3Y2giLCJkYXRhIiwidmFsdWUiLCJzdHlsZSIsImZvbnQiLCJzeiIsImJvbGQiLCJmaWxsIiwicGF0dGVyblR5cGUiLCJmZ0NvbG9yIiwicmdiIiwidW5kZXJsaW5lIiwiaXRhbGljIiwic3RyaWtlIiwib3V0bGluZSIsInNoYWRvdyIsIkV4Y2VsRXhwb3J0IiwidXNlU3RhdGUiLCJleGNlbERhdGEiLCJzZXRFeGNlbERhdGEiLCJ1c2VFZmZlY3QiLCJwYXJzZURhdGEiLCJtYXAiLCJmaWVsZCIsIkRBVEFTT0xJQ0lUQUNBTyIsIlJFUVVJU0lUQURPUE9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHdEQUFXLENBQUNELFNBQTlCO0FBQ0EsSUFBTUUsVUFBVSxHQUFHRCx3REFBVyxDQUFDRCxTQUFaLENBQXNCRSxVQUF6QztBQUNBLElBQU1DLFdBQVcsR0FBR0Ysd0RBQVcsQ0FBQ0QsU0FBWixDQUFzQkcsV0FBMUM7QUFNQSxJQUFNQyxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsU0FBTyxFQUFFLENBQ1A7QUFBRUMsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFNBQUssRUFBRTtBQUFFQyxTQUFHLEVBQUU7QUFBUDtBQUE1QixHQURPLEVBQ29DO0FBQzNDO0FBQUVGLFNBQUssRUFBRSxZQUFUO0FBQXVCQyxTQUFLLEVBQUU7QUFBRUUsU0FBRyxFQUFFO0FBQVA7QUFBOUIsR0FGTyxFQUVzQztBQUM3QztBQUFFSCxTQUFLLEVBQUUsUUFBVDtBQUFtQkMsU0FBSyxFQUFFO0FBQUVDLFNBQUcs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Z2VzL2NvbXByYXMuMmFmOTM2YmFmY2ZlZDEzYzA4YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBSZWFjdEV4cG9ydCBmcm9tIFwicmVhY3QtZGF0YS1leHBvcnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRXhjZWxGaWxlID0gUmVhY3RFeHBvcnQuRXhjZWxGaWxlO1xyXG5jb25zdCBFeGNlbFNoZWV0ID0gUmVhY3RFeHBvcnQuRXhjZWxGaWxlLkV4Y2VsU2hlZXQ7XHJcbmNvbnN0IEV4Y2VsQ29sdW1uID0gUmVhY3RFeHBvcnQuRXhjZWxGaWxlLkV4Y2VsQ29sdW1uO1xyXG5cclxuaW50ZXJmYWNlIEV4Y2VsUHJvcHMge1xyXG4gIGRhdGE6IEFycmF5PGFueT47XHJcbn1cclxuXHJcbmNvbnN0IG11bHRpRGF0YVNldCA9IFtcclxuICB7XHJcbiAgICBjb2x1bW5zOiBbXHJcbiAgICAgIHsgdGl0bGU6IFwiSGVhZGluZ3NcIiwgd2lkdGg6IHsgd3B4OiA4MCB9IH0sIC8vcGl4ZWxzIHdpZHRoXHJcbiAgICAgIHsgdGl0bGU6IFwiVGV4dCBTdHlsZVwiLCB3aWR0aDogeyB3Y2g6IDQwIH0gfSwgLy9jaGFyIHdpZHRoXHJcbiAgICAgIHsgdGl0bGU6IFwiQ29sb3JzXCIsIHdpZHRoOiB7IHdweDogOTAgfSB9LFxyXG4gICAgXSxcclxuICAgIGRhdGE6IFtcclxuICAgICAgW1xyXG4gICAgICAgIHsgdmFsdWU6IFwiSDFcIiwgc3R5bGU6IHsgZm9udDogeyBzejogXCIyNFwiLCBib2xkOiB0cnVlIH0gfSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwiQm9sZFwiLCBzdHlsZTogeyBmb250OiB7IGJvbGQ6IHRydWUgfSB9IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IFwiUmVkXCIsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmaWxsOiB7IHBhdHRlcm5UeXBlOiBcInNvbGlkXCIsIGZnQ29sb3I6IHsgcmdiOiBcIkZGRkYwMDAwXCIgfSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgeyB2YWx1ZTogXCJIMlwiLCBzdHlsZTogeyBmb250OiB7IHN6OiBcIjE4XCIsIGJvbGQ6IHRydWUgfSB9IH0sXHJcbiAgICAgICAgeyB2YWx1ZTogXCJ1bmRlcmxpbmVcIiwgc3R5bGU6IHsgZm9udDogeyB1bmRlcmxpbmU6IHRydWUgfSB9IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IFwiQmx1ZVwiLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZmlsbDogeyBwYXR0ZXJuVHlwZTogXCJzb2xpZFwiLCBmZ0NvbG9yOiB7IHJnYjogXCJGRjAwMDBGRlwiIH0gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIHsgdmFsdWU6IFwiSDNcIiwgc3R5bGU6IHsgZm9udDogeyBzejogXCIxNFwiLCBib2xkOiB0cnVlIH0gfSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwiaXRhbGljXCIsIHN0eWxlOiB7IGZvbnQ6IHsgaXRhbGljOiB0cnVlIH0gfSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBcIkdyZWVuXCIsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmaWxsOiB7IHBhdHRlcm5UeXBlOiBcInNvbGlkXCIsIGZnQ29sb3I6IHsgcmdiOiBcIkZGMDBGRjAwXCIgfSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgeyB2YWx1ZTogXCJINFwiLCBzdHlsZTogeyBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IHRydWUgfSB9IH0sXHJcbiAgICAgICAgeyB2YWx1ZTogXCJzdHJpa2VcIiwgc3R5bGU6IHsgZm9udDogeyBzdHJpa2U6IHRydWUgfSB9IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IFwiT3JhbmdlXCIsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmaWxsOiB7IHBhdHRlcm5UeXBlOiBcInNvbGlkXCIsIGZnQ29sb3I6IHsgcmdiOiBcIkZGRjg2QjAwXCIgfSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgeyB2YWx1ZTogXCJINVwiLCBzdHlsZTogeyBmb250OiB7IHN6OiBcIjEwLjVcIiwgYm9sZDogdHJ1ZSB9IH0gfSxcclxuICAgICAgICB7IHZhbHVlOiBcIm91dGxpbmVcIiwgc3R5bGU6IHsgZm9udDogeyBvdXRsaW5lOiB0cnVlIH0gfSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBcIlllbGxvd1wiLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZmlsbDogeyBwYXR0ZXJuVHlwZTogXCJzb2xpZFwiLCBmZ0NvbG9yOiB7IHJnYjogXCJGRkZGRkYwMFwiIH0gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIHsgdmFsdWU6IFwiSDZcIiwgc3R5bGU6IHsgZm9udDogeyBzejogXCI3LjVcIiwgYm9sZDogdHJ1ZSB9IH0gfSxcclxuICAgICAgICB7IHZhbHVlOiBcInNoYWRvd1wiLCBzdHlsZTogeyBmb250OiB7IHNoYWRvdzogdHJ1ZSB9IH0gfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogXCJMaWdodCBCbHVlXCIsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmaWxsOiB7IHBhdHRlcm5UeXBlOiBcInNvbGlkXCIsIGZnQ29sb3I6IHsgcmdiOiBcIkZGQ0NFRUZGXCIgfSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgZnVuY3Rpb24gRXhjZWxFeHBvcnQoeyBkYXRhIH06IEV4Y2VsUHJvcHMpIHtcclxuICBjb25zdCBbZXhjZWxEYXRhLCBzZXRFeGNlbERhdGFdID0gdXNlU3RhdGU8YW55PigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwYXJzZURhdGEgPSBkYXRhLm1hcChmaWVsZCA9PiB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLkRBVEFTT0xJQ0lUQUNBTyxcclxuICAgICAgICAgIHN0eWxlOiB7IGZvbnQ6IHsgc3o6IFwiMjRcIiwgYm9sZDogdHJ1ZSB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuUkVRVUlTSVRBRE9QT1IsXHJcbiAgICAgICAgICBzdHlsZTogeyBmb250OiB7IHN6OiBcIjI0XCIsIGJvbGQ6IHRydWUgfSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLkRBVEFTT0xJQ0lUQUNBTyxcclxuICAgICAgICAgIHN0eWxlOiB7IGZvbnQ6IHsgc3o6IFwiMjRcIiwgYm9sZDogdHJ1ZSB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuREFUQVNPTElDSVRBQ0FPLFxyXG4gICAgICAgICAgc3R5bGU6IHsgZm9udDogeyBzejogXCIyNFwiLCBib2xkOiB0cnVlIH0gfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5EQVRBU09MSUNJVEFDQU8sXHJcbiAgICAgICAgICBzdHlsZTogeyBmb250OiB7IHN6OiBcIjI0XCIsIGJvbGQ6IHRydWUgfSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLkRBVEFTT0xJQ0lUQUNBTyxcclxuICAgICAgICAgIHN0eWxlOiB7IGZvbnQ6IHsgc3o6IFwiMjRcIiwgYm9sZDogdHJ1ZSB9IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgIH0pXHJcbiAgfSwgW2RhdGFdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2V4Y2VsRGF0YSAmJiAoXHJcbiAgICAgICAgPEV4Y2VsRmlsZSBlbGVtZW50PXs8YnV0dG9uPkV4cG9ydGFyIHBhcmEgRXhjZWw8L2J1dHRvbj59PlxyXG4gICAgICAgICAgPEV4Y2VsU2hlZXQgZGF0YVNldD17ZXhjZWxEYXRhfSBuYW1lPVwiQ29tcHJhc1wiIC8+XHJcbiAgICAgICAgPC9FeGNlbEZpbGU+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=