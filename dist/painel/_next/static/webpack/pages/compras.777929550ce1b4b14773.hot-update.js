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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {}, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelFile, {
      element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "Exportar para Excel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 29
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelSheet, {
        dataSet: multiDataSet,
        name: "Compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

_s(ExcelExport, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhjZWxFeHBvcnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkV4Y2VsRmlsZSIsIlJlYWN0RXhwb3J0IiwiRXhjZWxTaGVldCIsIkV4Y2VsQ29sdW1uIiwibXVsdGlEYXRhU2V0IiwiY29sdW1ucyIsInRpdGxlIiwid2lkdGgiLCJ3cHgiLCJ3Y2giLCJkYXRhIiwidmFsdWUiLCJzdHlsZSIsImZvbnQiLCJzeiIsImJvbGQiLCJmaWxsIiwicGF0dGVyblR5cGUiLCJmZ0NvbG9yIiwicmdiIiwidW5kZXJsaW5lIiwiaXRhbGljIiwic3RyaWtlIiwib3V0bGluZSIsInNoYWRvdyIsIkV4Y2VsRXhwb3J0IiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHdEQUFXLENBQUNELFNBQTlCO0FBQ0EsSUFBTUUsVUFBVSxHQUFHRCx3REFBVyxDQUFDRCxTQUFaLENBQXNCRSxVQUF6QztBQUNBLElBQU1DLFdBQVcsR0FBR0Ysd0RBQVcsQ0FBQ0QsU0FBWixDQUFzQkcsV0FBMUM7QUFNQSxJQUFNQyxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsU0FBTyxFQUFFLENBQ1A7QUFBRUMsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFNBQUssRUFBRTtBQUFFQyxTQUFHLEVBQUU7QUFBUDtBQUE1QixHQURPLEVBQ29DO0FBQzNDO0FBQUVGLFNBQUssRUFBRSxZQUFUO0FBQXVCQyxTQUFLLEVBQUU7QUFBRUUsU0FBRyxFQUFFO0FBQVA7QUFBOUIsR0FGTyxFQUVzQztBQUM3QztBQUFFSCxTQUFLLEVBQUUsUUFBVDtBQUFtQkMsU0FBSyxFQUFFO0FBQUVDLFNBQUcsRUFBRTtBQUFQO0FBQTFCLEdBSE8sQ0FEWDtBQU1FRSxNQUFJLEVBQUUsQ0FDSixDQUNFO0FBQUVDLFNBQUssRUFBRSxJQUFUO0FBQWVDLFNBQUssRUFBRTtBQUFFQyxVQUFJ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QUssRUFBRTtBQUFFQyxVQUFJLEVBQUU7QUFBRUMsVUFBRSxFQUFFLEtBQU47QUFBYUMsWUFBSSxFQUFFO0FBQW5CO0FBQVI7QUFBdEIsR0FERixFQUVFO0FBQUVKLFNBQUssRUFBRSxRQUFUO0FBQW1CQyxTQUFLLEVBQUU7QUFBRUMsVUFBSSxFQUFFO0FBQUVXLGNBQU0sRUFBRTtBQUFWO0FBQVI7QUFBMUIsR0FGRixFQUdFO0FBQ0ViLFNBQUssRUFBRSxZQURUO0FBRUVDLFNBQUssRUFBRTtBQUNMSSxVQUFJLEVBQUU7QUFBRUMsbUJBQVcsRUFBRSxPQUFmO0FBQXdCQyxlQUFPLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVA7QUFBakM7QUFERDtBQUZULEdBSEYsQ0FuREk7QUFOUixDQURtQixDQUFyQjtBQXVFTyxTQUFTTSxXQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBcEJmLElBQW9CLFFBQXBCQSxJQUFvQjtBQUNoRGdCLHlEQUFTLENBQUMsWUFBTSxDQUVmLENBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFDRTtBQUFBLDJCQUVJLHFFQUFDLFNBQUQ7QUFBVyxhQUFPLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBcEI7QUFBQSw2QkFDRSxxRUFBQyxVQUFEO0FBQVksZUFBTyxFQUFFdEIsWUFBckI7QUFBbUMsWUFBSSxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBYmVxQixXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXByYXMuNzc3OTI5NTUwY2UxYjRiMTQ3NzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBSZWFjdEV4cG9ydCBmcm9tIFwicmVhY3QtZGF0YS1leHBvcnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBFeGNlbEZpbGUgPSBSZWFjdEV4cG9ydC5FeGNlbEZpbGU7XHJcbmNvbnN0IEV4Y2VsU2hlZXQgPSBSZWFjdEV4cG9ydC5FeGNlbEZpbGUuRXhjZWxTaGVldDtcclxuY29uc3QgRXhjZWxDb2x1bW4gPSBSZWFjdEV4cG9ydC5FeGNlbEZpbGUuRXhjZWxDb2x1bW47XHJcblxyXG5pbnRlcmZhY2UgRXhjZWxQcm9wcyB7XHJcbiAgZGF0YTogQXJyYXk8T2JqZWN0PjtcclxufVxyXG5cclxuY29uc3QgbXVsdGlEYXRhU2V0ID0gW1xyXG4gIHtcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAgeyB0aXRsZTogXCJIZWFkaW5nc1wiLCB3aWR0aDogeyB3cHg6IDgwIH0gfSwgLy9waXhlbHMgd2lkdGhcclxuICAgICAgeyB0aXRsZTogXCJUZXh0IFN0eWxlXCIsIHdpZHRoOiB7IHdjaDogNDAgfSB9LCAvL2NoYXIgd2lkdGhcclxuICAgICAgeyB0aXRsZTogXCJDb2xvcnNcIiwgd2lkdGg6IHsgd3B4OiA5MCB9IH0sXHJcbiAgICBdLFxyXG4gICAgZGF0YTogW1xyXG4gICAgICBbXHJcbiAgICAgICAgeyB2YWx1ZTogXCJIMVwiLCBzdHlsZTogeyBmb250OiB7IHN6OiBcIjI0XCIsIGJvbGQ6IHRydWUgfSB9IH0sXHJcbiAgICAgICAgeyB2YWx1ZTogXCJCb2xkXCIsIHN0eWxlOiB7IGZvbnQ6IHsgYm9sZDogdHJ1ZSB9IH0gfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogXCJSZWRcIixcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZpbGw6IHsgcGF0dGVyblR5cGU6IFwic29saWRcIiwgZmdDb2xvcjogeyByZ2I6IFwiRkZGRjAwMDBcIiB9IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICB7IHZhbHVlOiBcIkgyXCIsIHN0eWxlOiB7IGZvbnQ6IHsgc3o6IFwiMThcIiwgYm9sZDogdHJ1ZSB9IH0gfSxcclxuICAgICAgICB7IHZhbHVlOiBcInVuZGVybGluZVwiLCBzdHlsZTogeyBmb250OiB7IHVuZGVybGluZTogdHJ1ZSB9IH0gfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogXCJCbHVlXCIsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmaWxsOiB7IHBhdHRlcm5UeXBlOiBcInNvbGlkXCIsIGZnQ29sb3I6IHsgcmdiOiBcIkZGMDAwMEZGXCIgfSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgeyB2YWx1ZTogXCJIM1wiLCBzdHlsZTogeyBmb250OiB7IHN6OiBcIjE0XCIsIGJvbGQ6IHRydWUgfSB9IH0sXHJcbiAgICAgICAgeyB2YWx1ZTogXCJpdGFsaWNcIiwgc3R5bGU6IHsgZm9udDogeyBpdGFsaWM6IHRydWUgfSB9IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IFwiR3JlZW5cIixcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZpbGw6IHsgcGF0dGVyblR5cGU6IFwic29saWRcIiwgZmdDb2xvcjogeyByZ2I6IFwiRkYwMEZGMDBcIiB9IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICB7IHZhbHVlOiBcIkg0XCIsIHN0eWxlOiB7IGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogdHJ1ZSB9IH0gfSxcclxuICAgICAgICB7IHZhbHVlOiBcInN0cmlrZVwiLCBzdHlsZTogeyBmb250OiB7IHN0cmlrZTogdHJ1ZSB9IH0gfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogXCJPcmFuZ2VcIixcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZpbGw6IHsgcGF0dGVyblR5cGU6IFwic29saWRcIiwgZmdDb2xvcjogeyByZ2I6IFwiRkZGODZCMDBcIiB9IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICB7IHZhbHVlOiBcIkg1XCIsIHN0eWxlOiB7IGZvbnQ6IHsgc3o6IFwiMTAuNVwiLCBib2xkOiB0cnVlIH0gfSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwib3V0bGluZVwiLCBzdHlsZTogeyBmb250OiB7IG91dGxpbmU6IHRydWUgfSB9IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IFwiWWVsbG93XCIsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmaWxsOiB7IHBhdHRlcm5UeXBlOiBcInNvbGlkXCIsIGZnQ29sb3I6IHsgcmdiOiBcIkZGRkZGRjAwXCIgfSB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgeyB2YWx1ZTogXCJINlwiLCBzdHlsZTogeyBmb250OiB7IHN6OiBcIjcuNVwiLCBib2xkOiB0cnVlIH0gfSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IFwic2hhZG93XCIsIHN0eWxlOiB7IGZvbnQ6IHsgc2hhZG93OiB0cnVlIH0gfSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBcIkxpZ2h0IEJsdWVcIixcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZpbGw6IHsgcGF0dGVyblR5cGU6IFwic29saWRcIiwgZmdDb2xvcjogeyByZ2I6IFwiRkZDQ0VFRkZcIiB9IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbmV4cG9ydCBmdW5jdGlvbiBFeGNlbEV4cG9ydCh7IGRhdGEgfTogRXhjZWxQcm9wcykge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgPEV4Y2VsRmlsZSBlbGVtZW50PXs8YnV0dG9uPkV4cG9ydGFyIHBhcmEgRXhjZWw8L2J1dHRvbj59PlxyXG4gICAgICAgICAgPEV4Y2VsU2hlZXQgZGF0YVNldD17bXVsdGlEYXRhU2V0fSBuYW1lPVwiQ29tcHJhc1wiIC8+XHJcbiAgICAgICAgPC9FeGNlbEZpbGU+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==