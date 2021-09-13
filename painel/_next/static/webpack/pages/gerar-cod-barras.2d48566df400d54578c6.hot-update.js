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
        lineNumber: 95,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SemPermissao__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dlcmFyLWNvZC1iYXJyYXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImFwaSIsInNob3dUb2FzdCIsIlNob3dUb2FzdCIsIkdlcmFyQ29kaWdvQmFycmFzIiwidXNlU3RhdGUiLCJpc1VwZGF0aW5nIiwic2V0SXNVcGRhdGluZyIsInVzZUFwaSIsImdldEFwaSIsInVzZUF1dGgiLCJ1c2VyIiwidXNlRWZmZWN0IiwidGhlbiIsInJlc3BvbnNlIiwiaGFuZGxlR3JhZGVVcGRhdGUiLCJnZXQiLCJkYXRhIiwic3RhdHVzIiwibm90aWZ5IiwiaGFuZGxlUHJvZHV0b1VwZGF0ZSIsInBlcm1pc3Npb25zIiwiZ2VyYXJDb2RCYXJyYXMiLCJzdHlsZXMiLCJsb2FkaW5nIiwiaGlkZGVuIiwiYXR1YWxpemFyQnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ3aWR0aCIsImFsaWduU2VsZiIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFJQSxHQUFKO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLElBQUlDLHlEQUFKLEVBQWxCO0FBRWUsU0FBU0MsaUJBQVQsR0FBNkI7QUFBQTs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBVSxLQUFWLENBREY7QUFBQSxNQUNuQ0MsVUFEbUM7QUFBQSxNQUN2QkMsYUFEdUI7O0FBQUEsZ0JBR3ZCQyw0REFBTSxFQUhpQjtBQUFBLE1BR2xDQyxNQUhrQyxXQUdsQ0EsTUFIa0M7O0FBQUEsaUJBSXpCQywrREFBTyxFQUprQjtBQUFBLE1BSWxDQyxJQUprQyxZQUlsQ0EsSUFKa0M7O0FBTTFDQyx5REFBUyxDQUFDLFlBQU07QUFDZEgsVUFBTSxDQUFDSSxJQUFQLENBQVksVUFBQ0MsUUFBRCxFQUFjO0FBQ3hCYixTQUFHLEdBQUdhLFFBQU47QUFDRCxLQUZEO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxNQUFNQyxpQkFBaUI7QUFBQSw0WEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEJSLDJCQUFhLENBQUMsSUFBRCxDQUFiO0FBRHdCO0FBQUEscUJBR0ROLEdBQUcsQ0FBQ2UsR0FBSixDQUFRLG1DQUFSLENBSEM7O0FBQUE7QUFHbEJGLHNCQUhrQjs7QUFLeEIsa0JBQUlBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxNQUFkLEtBQXlCLElBQTdCLEVBQW1DO0FBQ2pDaEIseUJBQVMsQ0FBQ2lCLE1BQVYsQ0FBaUIsc0NBQWpCLEVBQXlELFNBQXpEO0FBQ0QsZUFGRCxNQUVPO0FBQ0xqQix5QkFBUyxDQUFDaUIsTUFBVixDQUFpQixpQkFBakIsRUFBb0MsT0FBcEM7QUFDRDs7QUFFRFosMkJBQWEsQ0FBQyxLQUFELENBQWI7O0FBWHdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWpCUSxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsS0FBdkI7O0FBY0EsTUFBTUssbUJBQW1CO0FBQUEsNlhBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCYiwyQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUQwQjtBQUFBLHFCQUdITixHQUFHLENBQUNlLEdBQUosQ0FBUSxvQ0FBUixDQUhHOztBQUFBO0FBR3BCRixzQkFIb0I7O0FBSzFCLGtCQUFJQSxRQUFRLENBQUNHLElBQVQsQ0FBY0MsTUFBZCxLQUF5QixJQUE3QixFQUFtQztBQUNqQ2hCLHlCQUFTLENBQUNpQixNQUFWLENBQWlCLHNDQUFqQixFQUF5RCxTQUF6RDtBQUNELGVBRkQsTUFFTztBQUNMakIseUJBQVMsQ0FBQ2lCLE1BQVYsQ0FBaUIsaUJBQWpCLEVBQW9DLE9BQXBDO0FBQ0Q7O0FBRURaLDJCQUFhLENBQUMsS0FBRCxDQUFiOztBQVgwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQmEsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQWNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQSxjQUNHVCxJQUFJLENBQUNVLFdBQUwsQ0FBaUJDLGNBQWpCLEtBQW9DLFlBQXBDLGdCQUNDO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFaEIsVUFBVSxHQUFHaUIsMkRBQU0sQ0FBQ0MsT0FBVixHQUFvQkQsMkRBQU0sQ0FBQ0UsTUFBckQ7QUFBQSwrQkFDRSxxRUFBQywyREFBRDtBQUFRLGNBQUksRUFBQyxNQUFiO0FBQW9CLGVBQUssRUFBQyxTQUExQjtBQUFvQyxnQkFBTSxFQUFFLEVBQTVDO0FBQWdELGVBQUssRUFBRTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFLHFFQUFDLHdEQUFEO0FBQ0UsaUJBQVMsRUFBRUYsMkRBQU0sQ0FBQ0csZUFEcEI7QUFFRSxlQUFPLEVBQUMsV0FGVjtBQUdFLGFBQUssRUFBRTtBQUNMQyx5QkFBZSxFQUFFLFNBRFo7QUFFTEMsZUFBSyxFQUFFLFNBRkY7QUFHTEMsZUFBSyxFQUFFLGFBSEY7QUFJTEMsbUJBQVMsRUFBRSxRQUpOO0FBS0xDLG1CQUFTLEVBQUU7QUFMTixTQUhUO0FBVUUsZ0JBQVEsRUFBRXBCLElBQUksQ0FBQ1UsV0FBTCxDQUFpQkMsY0FBakIsS0FBb0MsY0FWaEQ7QUFXRSxlQUFPLEVBQUVQLGlCQVhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkYsZUFzQkUscUVBQUMsd0RBQUQ7QUFDRSxpQkFBUyxFQUFFUSwyREFBTSxDQUFDRyxlQURwQjtBQUVFLGVBQU8sRUFBQyxXQUZWO0FBR0UsYUFBSyxFQUFFO0FBQ0xDLHlCQUFlLEVBQUUsU0FEWjtBQUVMQyxlQUFLLEVBQUUsU0FGRjtBQUdMQyxlQUFLLEVBQUUsYUFIRjtBQUlMQyxtQkFBUyxFQUFFLFFBSk47QUFLTEMsbUJBQVMsRUFBRTtBQUxOLFNBSFQ7QUFVRSxlQUFPLEVBQUVYLG1CQVZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJGLGVBb0NFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQ0Y7QUFBQSxvQkFERCxnQkF3Q0MscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4Q0Q7O0dBdEZ1QmhCLGlCO1VBR0hJLG9ELEVBQ0ZFLHVEOzs7S0FKS04saUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2VyYXItY29kLWJhcnJhcy4yZDQ4NTY2ZGY0MDBkNTQ1NzhjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgU2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RvYXN0XCI7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2FwaVwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGhcIjtcclxuaW1wb3J0IFNlbVBlcm1pc3NhbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW1QZXJtaXNzYW9cIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5sZXQgYXBpO1xyXG5jb25zdCBzaG93VG9hc3QgPSBuZXcgU2hvd1RvYXN0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXJhckNvZGlnb0JhcnJhcygpIHtcclxuICBjb25zdCBbaXNVcGRhdGluZywgc2V0SXNVcGRhdGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHsgZ2V0QXBpIH0gPSB1c2VBcGkoKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFwaS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBhcGkgPSByZXNwb25zZTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR3JhZGVVcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc1VwZGF0aW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChcIi9wcm9kdXRvcy9nZXJhci1jb2QtYmFycmFzLWdyYWRlc1wiKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQ8OzZGlnb3MgZGUgYmFycmEgZ2VyYWRvcyBjb20gc3VjZXNzb1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWxnbyBkZXUgZXJyYWRvXCIsIFwiZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXNVcGRhdGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZHV0b1VwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldElzVXBkYXRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KFwiL3Byb2R1dG9zL2dlcmFyLWNvZC1iYXJyYXMtcHJvZHV0b1wiKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQ8OzZGlnb3MgZGUgYmFycmEgZ2VyYWRvcyBjb20gc3VjZXNzb1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQWxnbyBkZXUgZXJyYWRvXCIsIFwiZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXNVcGRhdGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICB7dXNlci5wZXJtaXNzaW9ucy5nZXJhckNvZEJhcnJhcyAhPT0gXCJTRU1fQUNFU1NPXCIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc1VwZGF0aW5nID8gc3R5bGVzLmxvYWRpbmcgOiBzdHlsZXMuaGlkZGVufT5cclxuICAgICAgICAgICAgPExvYWRlciB0eXBlPVwiQmFyc1wiIGNvbG9yPVwiI0IyMzIzN1wiIGhlaWdodD17ODB9IHdpZHRoPXs4MH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyPkdlcmFyIEPDs2RpZ28gZGUgQmFycmFzIC0gR3JhZGVzPC9oMj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXR1YWxpemFyQnV0dG9ufVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0IyMzIzN1wiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmNGY0ZjRcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiM3JlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17dXNlci5wZXJtaXNzaW9ucy5nZXJhckNvZEJhcnJhcyAhPT0gXCJBQ0VTU09fVE9UQUxcIn1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlR3JhZGVVcGRhdGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdlcmFyIEPDs2RpZ29zIC0gR3JhZGVzXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8aDI+R2VyYXIgQ8OzZGlnbyBkZSBCYXJyYXMgLSBQcm9kdXRvczwvaDI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF0dWFsaXphckJ1dHRvbn1cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNCMjMyMzdcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjZjRmNGY0XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICAgICAgICAgICAgICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjNyZW1cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJvZHV0b1VwZGF0ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR2VyYXIgQ8OzZGlnb3MgLSBQcm9kdXRvc1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U2VtUGVybWlzc2FvIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=