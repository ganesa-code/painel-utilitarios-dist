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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {}, [data]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: excelData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelFile, {
      element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Exportar para Excel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelSheet, {
        dataSet: excelData,
        name: "Compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhjZWxFeHBvcnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkV4Y2VsRmlsZSIsIlJlYWN0RXhwb3J0IiwiRXhjZWxTaGVldCIsIkV4Y2VsQ29sdW1uIiwibXVsdGlEYXRhU2V0IiwiY29sdW1ucyIsInRpdGxlIiwid2lkdGgiLCJ3cHgiLCJ3Y2giLCJkYXRhIiwidmFsdWUiLCJzdHlsZSIsImZvbnQiLCJzeiIsImJvbGQiLCJmaWxsIiwicGF0dGVyblR5cGUiLCJmZ0NvbG9yIiwicmdiIiwidW5kZXJsaW5lIiwiaXRhbGljIiwic3RyaWtlIiwib3V0bGluZSIsInNoYWRvdyIsIkV4Y2VsRXhwb3J0IiwidXNlU3RhdGUiLCJleGNlbERhdGEiLCJzZXRFeGNlbERhdGEiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msd0RBQVcsQ0FBQ0QsU0FBOUI7QUFDQSxJQUFNRSxVQUFVLEdBQUdELHdEQUFXLENBQUNELFNBQVosQ0FBc0JFLFVBQXpDO0FBQ0EsSUFBTUMsV0FBVyxHQUFHRix3REFBVyxDQUFDRCxTQUFaLENBQXNCRyxXQUExQztBQU1BLElBQU1DLFlBQVksR0FBRyxDQUNuQjtBQUNFQyxTQUFPLEVBQUUsQ0FDUDtBQUFFQyxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsU0FBSyxFQUFFO0FBQUVDLFNBQUcsRUFBRTtBQUFQO0FBQTVCLEdBRE8sRUFDb0M7QUFDM0M7QUFBRUYsU0FBSyxFQUFFLFlBQVQ7QUFBdUJDLFNBQUssRUFBRTtBQUFFRSxTQUFHLEVBQUU7QUFBUDtBQUE5QixHQUZPLEVBRXNDO0FBQzdDO0FBQUVILFNBQUssRUFBRSxRQUFUO0FBQW1CQyxTQUFLLEVBQUU7QUFBRUMsU0FBRyxFQUFFO0FBQVA7QUFBMUIsR0FITyxDQURYO0FBTUVFLE1BQUksRUFBRSxDQUNKLENBQ0U7QUFBRUMsU0FB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bURKLENBQ0U7QUFBRVIsU0FBSyxFQUFFLElBQVQ7QUFBZUMsU0FBSyxFQUFFO0FBQUVDLFVBQUksRUFBRTtBQUFFQyxVQUFFLEVBQUUsS0FBTjtBQUFhQyxZQUFJLEVBQUU7QUFBbkI7QUFBUjtBQUF0QixHQURGLEVBRUU7QUFBRUosU0FBSyxFQUFFLFFBQVQ7QUFBbUJDLFNBQUssRUFBRTtBQUFFQyxVQUFJLEVBQUU7QUFBRVcsY0FBTSxFQUFFO0FBQVY7QUFBUjtBQUExQixHQUZGLEVBR0U7QUFDRWIsU0FBSyxFQUFFLFlBRFQ7QUFFRUMsU0FBSyxFQUFFO0FBQ0xJLFVBQUksRUFBRTtBQUFFQyxtQkFBVyxFQUFFLE9BQWY7QUFBd0JDLGVBQU8sRUFBRTtBQUFFQyxhQUFHLEVBQUU7QUFBUDtBQUFqQztBQUREO0FBRlQsR0FIRixDQW5ESTtBQU5SLENBRG1CLENBQXJCO0FBdUVPLFNBQVNNLFdBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUFwQmYsSUFBb0IsUUFBcEJBLElBQW9COztBQUFBLGtCQUNkZ0Isc0RBQVEsRUFETTtBQUFBLE1BQ3pDQyxTQUR5QztBQUFBLE1BQzlCQyxZQUQ4Qjs7QUFFaERDLHlEQUFTLENBQUMsWUFBTSxDQUVmLENBRlEsRUFFTixDQUFDbkIsSUFBRCxDQUZNLENBQVQ7QUFHQSxzQkFDRTtBQUFBLGNBQ0dpQixTQUFTLGlCQUNSLHFFQUFDLFNBQUQ7QUFBVyxhQUFPLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBcEI7QUFBQSw2QkFDRSxxRUFBQyxVQUFEO0FBQVksZUFBTyxFQUFFQSxTQUFyQjtBQUFnQyxZQUFJLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0FkZUYsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21wcmFzLjc4YTlhMjI2MjA1NWFmNTc0ZjZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgUmVhY3RFeHBvcnQgZnJvbSBcInJlYWN0LWRhdGEtZXhwb3J0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEV4Y2VsRmlsZSA9IFJlYWN0RXhwb3J0LkV4Y2VsRmlsZTtcclxuY29uc3QgRXhjZWxTaGVldCA9IFJlYWN0RXhwb3J0LkV4Y2VsRmlsZS5FeGNlbFNoZWV0O1xyXG5jb25zdCBFeGNlbENvbHVtbiA9IFJlYWN0RXhwb3J0LkV4Y2VsRmlsZS5FeGNlbENvbHVtbjtcclxuXHJcbmludGVyZmFjZSBFeGNlbFByb3BzIHtcclxuICBkYXRhOiBBcnJheTxPYmplY3Q+O1xyXG59XHJcblxyXG5jb25zdCBtdWx0aURhdGFTZXQgPSBbXHJcbiAge1xyXG4gICAgY29sdW1uczogW1xyXG4gICAgICB7IHRpdGxlOiBcIkhlYWRpbmdzXCIsIHdpZHRoOiB7IHdweDogODAgfSB9LCAvL3BpeGVscyB3aWR0aFxyXG4gICAgICB7IHRpdGxlOiBcIlRleHQgU3R5bGVcIiwgd2lkdGg6IHsgd2NoOiA0MCB9IH0sIC8vY2hhciB3aWR0aFxyXG4gICAgICB7IHRpdGxlOiBcIkNvbG9yc1wiLCB3aWR0aDogeyB3cHg6IDkwIH0gfSxcclxuICAgIF0sXHJcbiAgICBkYXRhOiBbXHJcbiAgICAgIFtcclxuICAgICAgICB7IHZhbHVlOiBcIkgxXCIsIHN0eWxlOiB7IGZvbnQ6IHsgc3o6IFwiMjRcIiwgYm9sZDogdHJ1ZSB9IH0gfSxcclxuICAgICAgICB7IHZhbHVlOiBcIkJvbGRcIiwgc3R5bGU6IHsgZm9udDogeyBib2xkOiB0cnVlIH0gfSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBcIlJlZFwiLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZmlsbDogeyBwYXR0ZXJuVHlwZTogXCJzb2xpZFwiLCBmZ0NvbG9yOiB7IHJnYjogXCJGRkZGMDAwMFwiIH0gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIHsgdmFsdWU6IFwiSDJcIiwgc3R5bGU6IHsgZm9udDogeyBzejogXCIxOFwiLCBib2xkOiB0cnVlIH0gfSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwidW5kZXJsaW5lXCIsIHN0eWxlOiB7IGZvbnQ6IHsgdW5kZXJsaW5lOiB0cnVlIH0gfSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBcIkJsdWVcIixcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZpbGw6IHsgcGF0dGVyblR5cGU6IFwic29saWRcIiwgZmdDb2xvcjogeyByZ2I6IFwiRkYwMDAwRkZcIiB9IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICB7IHZhbHVlOiBcIkgzXCIsIHN0eWxlOiB7IGZvbnQ6IHsgc3o6IFwiMTRcIiwgYm9sZDogdHJ1ZSB9IH0gfSxcclxuICAgICAgICB7IHZhbHVlOiBcIml0YWxpY1wiLCBzdHlsZTogeyBmb250OiB7IGl0YWxpYzogdHJ1ZSB9IH0gfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogXCJHcmVlblwiLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZmlsbDogeyBwYXR0ZXJuVHlwZTogXCJzb2xpZFwiLCBmZ0NvbG9yOiB7IHJnYjogXCJGRjAwRkYwMFwiIH0gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIHsgdmFsdWU6IFwiSDRcIiwgc3R5bGU6IHsgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiB0cnVlIH0gfSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwic3RyaWtlXCIsIHN0eWxlOiB7IGZvbnQ6IHsgc3RyaWtlOiB0cnVlIH0gfSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBcIk9yYW5nZVwiLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZmlsbDogeyBwYXR0ZXJuVHlwZTogXCJzb2xpZFwiLCBmZ0NvbG9yOiB7IHJnYjogXCJGRkY4NkIwMFwiIH0gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIHsgdmFsdWU6IFwiSDVcIiwgc3R5bGU6IHsgZm9udDogeyBzejogXCIxMC41XCIsIGJvbGQ6IHRydWUgfSB9IH0sXHJcbiAgICAgICAgeyB2YWx1ZTogXCJvdXRsaW5lXCIsIHN0eWxlOiB7IGZvbnQ6IHsgb3V0bGluZTogdHJ1ZSB9IH0gfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogXCJZZWxsb3dcIixcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZpbGw6IHsgcGF0dGVyblR5cGU6IFwic29saWRcIiwgZmdDb2xvcjogeyByZ2I6IFwiRkZGRkZGMDBcIiB9IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICB7IHZhbHVlOiBcIkg2XCIsIHN0eWxlOiB7IGZvbnQ6IHsgc3o6IFwiNy41XCIsIGJvbGQ6IHRydWUgfSB9IH0sXHJcbiAgICAgICAgeyB2YWx1ZTogXCJzaGFkb3dcIiwgc3R5bGU6IHsgZm9udDogeyBzaGFkb3c6IHRydWUgfSB9IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IFwiTGlnaHQgQmx1ZVwiLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZmlsbDogeyBwYXR0ZXJuVHlwZTogXCJzb2xpZFwiLCBmZ0NvbG9yOiB7IHJnYjogXCJGRkNDRUVGRlwiIH0gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuZXhwb3J0IGZ1bmN0aW9uIEV4Y2VsRXhwb3J0KHsgZGF0YSB9OiBFeGNlbFByb3BzKSB7XHJcbiAgY29uc3QgW2V4Y2VsRGF0YSwgc2V0RXhjZWxEYXRhXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgXHJcbiAgfSwgW2RhdGFdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2V4Y2VsRGF0YSAmJiAoXHJcbiAgICAgICAgPEV4Y2VsRmlsZSBlbGVtZW50PXs8YnV0dG9uPkV4cG9ydGFyIHBhcmEgRXhjZWw8L2J1dHRvbj59PlxyXG4gICAgICAgICAgPEV4Y2VsU2hlZXQgZGF0YVNldD17ZXhjZWxEYXRhfSBuYW1lPVwiQ29tcHJhc1wiIC8+XHJcbiAgICAgICAgPC9FeGNlbEZpbGU+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=