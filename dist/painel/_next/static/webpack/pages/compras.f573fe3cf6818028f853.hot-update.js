webpackHotUpdate_N_E("pages/compras",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/ExcelExport/styles.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/ExcelExport/styles.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/ExcelExport/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_data_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-data-export */ "./node_modules/react-data-export/dist/index.js");
/* harmony import */ var react_data_export__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_data_export__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");


var _jsxFileName = "C:\\Users\\Bruno Jagmin\\Desktop\\Ganesa\\utilitarios-resulth\\frontend\\src\\components\\ExcelExport\\index.tsx",
    _s = $RefreshSig$();






var ExcelFile = react_data_export__WEBPACK_IMPORTED_MODULE_2___default.a.ExcelFile;
var ExcelSheet = react_data_export__WEBPACK_IMPORTED_MODULE_2___default.a.ExcelFile.ExcelSheet;
var ExcelColumn = react_data_export__WEBPACK_IMPORTED_MODULE_2___default.a.ExcelFile.ExcelColumn;
function ExcelExport(_ref) {
  _s();

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      excelData = _useState[0],
      setExcelData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.downloadDiv,
    children: excelData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExcelFile, {
      element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        style: {
          backgroundColor: "#B23237"
        },
        variant: "contained",
        color: "primary",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiDownload"], {
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

/***/ }),

/***/ "./src/components/ExcelExport/styles.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/ExcelExport/styles.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/ExcelExport/styles.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/ExcelExport/styles.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/ExcelExport/styles.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhjZWxFeHBvcnQvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FeGNlbEV4cG9ydC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0V4Y2VsRXhwb3J0L3N0eWxlcy5tb2R1bGUuc2Nzcz9mM2NiIl0sIm5hbWVzIjpbIkV4Y2VsRmlsZSIsIlJlYWN0RXhwb3J0IiwiRXhjZWxTaGVldCIsIkV4Y2VsQ29sdW1uIiwiRXhjZWxFeHBvcnQiLCJkYXRhIiwidXNlU3RhdGUiLCJleGNlbERhdGEiLCJzZXRFeGNlbERhdGEiLCJ1c2VFZmZlY3QiLCJwYXJzZWREYXRhIiwibWFwIiwiZmllbGQiLCJ2YWx1ZSIsIkRBVEFTT0xJQ0lUQUNBTyIsInN0eWxlIiwiZm9udCIsInN6IiwiYm9sZCIsImFsaWdubWVudCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlJFUVVJU0lUQURPUE9SIiwiREVTQ1JJQ0FPUFJPRCIsIkNPVEFDQU8iLCJOT01FQ0xJRU5URSIsIlNUQVRVUyIsImNvbHVtbnMiLCJ0aXRsZSIsIndpZHRoIiwid3B4Iiwic3R5bGVzIiwiZG93bmxvYWREaXYiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxVQUFVLGtFQUFrRTtBQUNuSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx3REFBVyxDQUFDRCxTQUE5QjtBQUNBLElBQU1FLFVBQVUsR0FBR0Qsd0RBQVcsQ0FBQ0QsU0FBWixDQUFzQkUsVUFBekM7QUFDQSxJQUFNQyxXQUFXLEdBQUdGLHdEQUFXLENBQUNELFNBQVosQ0FB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QUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSwybUJBQTJWO0FBQ2pXO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsMm1CQUEyVjs7QUFFclg7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21wcmFzLmY1NzNmZTNjZjY4MTgwMjhmODUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgUmVhY3RFeHBvcnQgZnJvbSBcInJlYWN0LWRhdGEtZXhwb3J0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEZpRG93bmxvYWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuXHJcbmNvbnN0IEV4Y2VsRmlsZSA9IFJlYWN0RXhwb3J0LkV4Y2VsRmlsZTtcclxuY29uc3QgRXhjZWxTaGVldCA9IFJlYWN0RXhwb3J0LkV4Y2VsRmlsZS5FeGNlbFNoZWV0O1xyXG5jb25zdCBFeGNlbENvbHVtbiA9IFJlYWN0RXhwb3J0LkV4Y2VsRmlsZS5FeGNlbENvbHVtbjtcclxuXHJcbmludGVyZmFjZSBFeGNlbFByb3BzIHtcclxuICBkYXRhOiBBcnJheTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhjZWxFeHBvcnQoeyBkYXRhIH06IEV4Y2VsUHJvcHMpIHtcclxuICBjb25zdCBbZXhjZWxEYXRhLCBzZXRFeGNlbERhdGFdID0gdXNlU3RhdGU8YW55PigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGRhdGEubWFwKChmaWVsZCkgPT4ge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5EQVRBU09MSUNJVEFDQU8sXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5SRVFVSVNJVEFET1BPUixcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IGZpZWxkLkRFU0NSSUNBT1BST0QsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5DT1RBQ0FPLFxyXG4gICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogZmllbGQuTk9NRUNMSUVOVEUsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiBmaWVsZC5TVEFUVVMsXHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0RXhjZWxEYXRhKFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiRGF0YSBTb2xpY2l0YcOnw6NvXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiB7IHdweDogMTIwIH0sXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJSZXF1aXNpdGFkbyBQb3JcIixcclxuICAgICAgICAgICAgd2lkdGg6IHsgd3B4OiAxMjAgfSxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IHRydWUgfSxcclxuICAgICAgICAgICAgICBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlByb2R1dG9cIixcclxuICAgICAgICAgICAgd2lkdGg6IHsgd3B4OiA0NTAgfSxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICBmb250OiB7IHN6OiBcIjEyXCIsIGJvbGQ6IHRydWUgfSxcclxuICAgICAgICAgICAgICBhbGlnbm1lbnQ6IHsgdmVydGljYWw6IFwiY2VudGVyXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvdGHDp8Ojb1wiLFxyXG4gICAgICAgICAgICB3aWR0aDogeyB3cHg6IDEwMCB9LFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ2xpZW50ZVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogeyB3cHg6IDM1MCB9LFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgIGZvbnQ6IHsgc3o6IFwiMTJcIiwgYm9sZDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgIGFsaWdubWVudDogeyB2ZXJ0aWNhbDogXCJjZW50ZXJcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiU3RhdHVzXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiB7IHdweDogMTAwIH0sXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgZm9udDogeyBzejogXCIxMlwiLCBib2xkOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgYWxpZ25tZW50OiB7IHZlcnRpY2FsOiBcImNlbnRlclwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGF0YTogcGFyc2VkRGF0YSxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvd25sb2FkRGl2fT5cclxuICAgICAge2V4Y2VsRGF0YSAmJiAoXHJcbiAgICAgICAgPEV4Y2VsRmlsZVxyXG4gICAgICAgICAgZWxlbWVudD17XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNCMjMyMzdcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RmlEb3dubG9hZCBzaXplPXsyNX0gY29sb3I9XCIjZjRmNGY0XCIgLz5cclxuICAgICAgICAgICAgICBFeHBvcnRhciBwYXJhIEV4Y2VsXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxFeGNlbFNoZWV0IGRhdGFTZXQ9e2V4Y2VsRGF0YX0gbmFtZT1cIkNvbXByYXNcIiAvPlxyXG4gICAgICAgIDwvRXhjZWxGaWxlPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vc3R5bGVzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vc3R5bGVzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=