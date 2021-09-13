webpackHotUpdate_N_E("pages/gerar-cod-barras",{

/***/ "./src/pages/gerar-cod-barras/index.tsx":
/*!**********************************************!*\
  !*** ./src/pages/gerar-cod-barras/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GerarCodigoBarras; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast */ "./src/services/toast.ts");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _contexts_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../contexts/api */ "./src/contexts/api.tsx");
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");
/* harmony import */ var _components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/SemPermissao */ "./src/components/SemPermissao/index.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/gerar-cod-barras/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\pages\\gerar-cod-barras\\index.tsx",
    _s = $RefreshSig$();











var api;
var showToast = new _services_toast__WEBPACK_IMPORTED_MODULE_7__["ShowToast"]();
function GerarCodigoBarras() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isUpdating = _useState[0],
      setIsUpdating = _useState[1];

  var _useApi = Object(_contexts_api__WEBPACK_IMPORTED_MODULE_9__["useApi"])(),
      getApi = _useApi.getApi;

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_10__["useAuth"])(),
      user = _useAuth.user;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getApi.then(function (response) {
      api = response;
    });
  }, []);

  var handleGradeUpdate = /*#__PURE__*/function () {
    var _ref = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response;
      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsUpdating(true);
              _context.next = 3;
              return api.get("/produtos/gerar-cod-barras-grades");

            case 3:
              response = _context.sent;

              if (response.data.status === "ok") {
                showToast.notify("Códigos de barra gerados com sucesso", "success");
              } else {
                showToast.notify("Algo deu errado", "error");
              }

              setIsUpdating(false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleGradeUpdate() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleProdutoUpdate = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var response;
      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setIsUpdating(true);
              _context2.next = 3;
              return api.get("/produtos/gerar-cod-barras-produto");

            case 3:
              response = _context2.sent;

              if (response.data.status === "ok") {
                showToast.notify("Códigos de barra gerados com sucesso", "success");
              } else {
                showToast.notify("Algo deu errado", "error");
              }

              setIsUpdating(false);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleProdutoUpdate() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "wrapper",
    children: user.permissions.gerarCodBarras !== "SEM_ACESSO" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: isUpdating ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.loading : _styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.hidden,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "Bars",
          color: "#B23237",
          height: 80,
          width: 80
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Gerar C\xF3digo de Barras - Grades"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.atualizarButton,
        variant: "contained",
        style: {
          backgroundColor: "#B23237",
          color: "#f4f4f4",
          width: "fit-content",
          alignSelf: "center",
          marginTop: "3rem"
        },
        disabled: user.permissions.gerarCodBarras !== "ACESSO_TOTAL",
        onClick: handleGradeUpdate,
        children: "Gerar C\xF3digos - Grades"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Gerar C\xF3digo de Barras - Produtos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.atualizarButton,
        variant: "contained",
        disabled: user.permissions.gerarCodBarras !== "ACESSO_TOTAL",
        style: {
          backgroundColor: "#B23237",
          color: "#f4f4f4",
          width: "fit-content",
          alignSelf: "center",
          marginTop: "3rem"
        },
        onClick: handleProdutoUpdate,
        children: "Gerar C\xF3digos - Produtos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

_s(GerarCodigoBarras, "/fMtwCM2X9/EQSeZVwrU+HM+3N8=", false, function () {
  return [_contexts_api__WEBPACK_IMPORTED_MODULE_9__["useApi"], _contexts_auth__WEBPACK_IMPORTED_MODULE_10__["useAuth"]];
});

_c = GerarCodigoBarras;

var _c;

$RefreshReg$(_c, "GerarCodigoBarras");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dlcmFyLWNvZC1iYXJyYXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImFwaSIsInNob3dUb2FzdCIsIlNob3dUb2FzdCIsIkdlcmFyQ29kaWdvQmFycmFzIiwidXNlU3RhdGUiLCJpc1VwZGF0aW5nIiwic2V0SXNVcGRhdGluZyIsInVzZUFwaSIsImdldEFwaSIsInVzZUF1dGgiLCJ1c2VyIiwidXNlRWZmZWN0IiwidGhlbiIsInJlc3BvbnNlIiwiaGFuZGxlR3JhZGVVcGRhdGUiLCJnZXQiLCJkYXRhIiwic3RhdHVzIiwibm90aWZ5IiwiaGFuZGxlUHJvZHV0b1VwZGF0ZSIsInBlcm1pc3Npb25zIiwiZ2VyYXJDb2RCYXJyYXMiLCJzdHlsZXMiLCJsb2FkaW5nIiwiaGlkZGVuIiwiYXR1YWxpemFyQnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ3aWR0aCIsImFsaWduU2VsZiIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFJQSxHQUFKO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLElBQUlDLHlEQUFKLEVBQWxCO0FBRWUsU0FBU0MsaUJBQVQsR0FBNkI7QUFBQTs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBVSxLQUFWLENBREY7QUFBQSxNQUNuQ0MsVUFEbUM7QUFBQSxNQUN2QkMsYUFEdUI7O0FBQUEsZ0JBR3ZCQyw0REFBTSxFQUhpQjtBQUFBLE1BR2xDQyxNQUhrQyxXQUdsQ0EsTUFIa0M7O0FBQUEsaUJBSXpCQywrREFBTyxFQUprQjtBQUFBLE1BSWxDQyxJQUprQyxZQUlsQ0EsSUFKa0M7O0FBTTFDQyx5REFBUyxDQUFDLFlBQU07QUFDZEgsVUFBTSxDQUFDSSxJQUFQLENBQVksVUFBQ0MsUUFBRCxFQUFjO0FBQ3hCYixTQUFH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QUlFLGFBQUssRUFBRTtBQUNMSyx5QkFBZSxFQUFFLFNBRFo7QUFFTEMsZUFBSyxFQUFFLFNBRkY7QUFHTEMsZUFBSyxFQUFFLGFBSEY7QUFJTEMsbUJBQVMsRUFBRSxRQUpOO0FBS0xDLG1CQUFTLEVBQUU7QUFMTixTQUpUO0FBV0UsZUFBTyxFQUFFWCxtQkFYWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRixlQXFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckNGO0FBQUEsb0JBREQsZ0JBeUNDLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUExQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0NEOztHQXZGdUJoQixpQjtVQUdISSxvRCxFQUNGRSx1RDs7O0tBSktOLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dlcmFyLWNvZC1iYXJyYXMuOGZmOWJkYjdjYmU0MjQ3OGVlNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IFNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90b2FzdFwiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hcGlcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hdXRoXCI7XHJcbmltcG9ydCBTZW1QZXJtaXNzYW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VtUGVybWlzc2FvXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxubGV0IGFwaTtcclxuY29uc3Qgc2hvd1RvYXN0ID0gbmV3IFNob3dUb2FzdCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VyYXJDb2RpZ29CYXJyYXMoKSB7XHJcbiAgY29uc3QgW2lzVXBkYXRpbmcsIHNldElzVXBkYXRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IGdldEFwaSB9ID0gdXNlQXBpKCk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRBcGkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgYXBpID0gcmVzcG9uc2U7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUdyYWRlVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNVcGRhdGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoXCIvcHJvZHV0b3MvZ2VyYXItY29kLWJhcnJhcy1ncmFkZXNcIik7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkPDs2RpZ29zIGRlIGJhcnJhIGdlcmFkb3MgY29tIHN1Y2Vzc29cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElzVXBkYXRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByb2R1dG9VcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc1VwZGF0aW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChcIi9wcm9kdXRvcy9nZXJhci1jb2QtYmFycmFzLXByb2R1dG9cIik7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkPDs2RpZ29zIGRlIGJhcnJhIGdlcmFkb3MgY29tIHN1Y2Vzc29cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1RvYXN0Lm5vdGlmeShcIkFsZ28gZGV1IGVycmFkb1wiLCBcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElzVXBkYXRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAge3VzZXIucGVybWlzc2lvbnMuZ2VyYXJDb2RCYXJyYXMgIT09IFwiU0VNX0FDRVNTT1wiID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNVcGRhdGluZyA/IHN0eWxlcy5sb2FkaW5nIDogc3R5bGVzLmhpZGRlbn0+XHJcbiAgICAgICAgICAgIDxMb2FkZXIgdHlwZT1cIkJhcnNcIiBjb2xvcj1cIiNCMjMyMzdcIiBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMj5HZXJhciBDw7NkaWdvIGRlIEJhcnJhcyAtIEdyYWRlczwvaDI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF0dWFsaXphckJ1dHRvbn1cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNCMjMyMzdcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjZjRmNGY0XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjNyZW1cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIucGVybWlzc2lvbnMuZ2VyYXJDb2RCYXJyYXMgIT09IFwiQUNFU1NPX1RPVEFMXCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdyYWRlVXBkYXRlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHZXJhciBDw7NkaWdvcyAtIEdyYWRlc1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPGgyPkdlcmFyIEPDs2RpZ28gZGUgQmFycmFzIC0gUHJvZHV0b3M8L2gyPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdHVhbGl6YXJCdXR0b259XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17dXNlci5wZXJtaXNzaW9ucy5nZXJhckNvZEJhcnJhcyAhPT0gXCJBQ0VTU09fVE9UQUxcIn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0IyMzIzN1wiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmNGY0ZjRcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiM3JlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcm9kdXRvVXBkYXRlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHZXJhciBDw7NkaWdvcyAtIFByb2R1dG9zXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxTZW1QZXJtaXNzYW8gLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==