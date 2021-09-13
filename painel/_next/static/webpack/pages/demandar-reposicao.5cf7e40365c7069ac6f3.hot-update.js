webpackHotUpdate_N_E("pages/demandar-reposicao",{

/***/ "./src/contexts/config.tsx":
/*!*********************************!*\
  !*** ./src/contexts/config.tsx ***!
  \*********************************/
/*! exports provided: ConfigProvider, useConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProvider", function() { return ConfigProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConfig", function() { return useConfig; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast */ "./src/services/toast.ts");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./src/contexts/api.tsx");




var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\contexts\\config.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();





var ConfigContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])({});
var showToast = new _services_toast__WEBPACK_IMPORTED_MODULE_4__["ShowToast"]();
var ConfigProvider = function ConfigProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      config = _useState[0],
      setConfig = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      filiais = _useState2[0],
      setFiliais = _useState2[1];

  var _useApi = Object(_api__WEBPACK_IMPORTED_MODULE_6__["useApi"])(),
      getApi = _useApi.getApi;

  var api;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getApi.then(function (response) {
      api = response;
      api.get("/config/gerais").then(function (response) {
        setConfig(response.data.config);
      });
      api.get("/config/filiais").then(function (response) {
        setFiliais(response.data.filiaisParsed);
      });
    });
  }, []);

  var changeConfig = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(newConfig) {
      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              getApi.then( /*#__PURE__*/function () {
                var _ref3 = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(r) {
                  var response;
                  return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          api = r;
                          setConfig(newConfig);
                          _context.next = 4;
                          return api.post("/config/gerais", newConfig);

                        case 4:
                          response = _context.sent;

                          if (response.data.status === "ok") {
                            showToast.notify("Configurações alteradas", "success");
                          }

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref3.apply(this, arguments);
                };
              }());

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function changeConfig(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ConfigContext.Provider, {
    value: {
      config: config,
      filiais: filiais,
      changeConfig: changeConfig
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, _this);
};

_s(ConfigProvider, "5h05vVArqM0a8Oz3qVDsp9JQaeI=", false, function () {
  return [_api__WEBPACK_IMPORTED_MODULE_6__["useApi"]];
});

_c = ConfigProvider;
var useConfig = function useConfig() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(ConfigContext);
};

_s2(useConfig, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "ConfigProvider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL2NvbmZpZy50c3giXSwibmFtZXMiOlsiQ29uZmlnQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJDb25maWdQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJjb25maWciLCJzZXRDb25maWciLCJmaWxpYWlzIiwic2V0RmlsaWFpcyIsInVzZUFwaSIsImdldEFwaSIsImFwaSIsInVzZUVmZmVjdCIsInRoZW4iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJmaWxpYWlzUGFyc2VkIiwiY2hhbmdlQ29uZmlnIiwibmV3Q29uZmlnIiwiciIsInBvc3QiLCJzdGF0dXMiLCJub3RpZnkiLCJ1c2VDb25maWciLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQTRCQSxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUNqQyxFQURpQyxDQUFuQztBQUlBLElBQU1DLFNBQVMsR0FBRyxJQUFJQyx5REFBSixFQUFsQjtBQUVPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBd0M7QUFBQTs7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDOztBQUFBLGtCQUN4Q0Msc0RBQVEsRUFEZ0M7QUFBQSxNQUM3REMsTUFENkQ7QUFBQSxNQUNyREMsU0FEcUQ7O0FBQUEsbUJBRXRDRixzREFBUSxFQUY4QjtBQUFBLE1BRTdERyxPQUY2RDtBQUFBLE1BRXBEQyxVQUZvRDs7QUFBQSxnQkFJakRDLG1EQUFNLEVBSjJDO0FBQUEsTUFJNURDLE1BSjRELFdBSTVEQSxNQUo0RDs7QUFNcEUsTUFBSUMsR0FBSjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsVUFBTSxDQUFDRyxJQUFQLENBQVksVUFBQ0MsUUFBRCxFQUFjO0FBQ3hCSCxTQUFHLEdBQUdHLFFBQU47QUFFQUgsU0FBRyxDQUFDSSxHQUFKLENBQVEsZ0JBQVIsRUFBMEJGLElBQTFCLENBQStCLFVBQUNDLFFBQUQsRUFBYztBQUMzQ1IsaUJBQVMsQ0FBQ1EsUUFBUSxDQUFDRSxJQUFULENBQWNYLE1BQWYsQ0FBVDtBQUNELE9BRkQ7QUFJQU0sU0FBRyxDQUFDSSxHQUFKLENBQVEsaUJBQVIsRUFBMkJGLElBQTNCLENBQWdDLFVBQUNDLFFBQUQsRUFBYztBQUM1Q04sa0JBQVUsQ0FBQ00sUUFBUSxDQUFDRSxJQUFULENBQWNDLGFBQWYsQ0FBVjtBQUNELE9BRkQ7QUFHRCxLQVZEO0FBV0QsR0FaUSxFQVlOLEVBWk0sQ0FBVDs7QUFjQSxNQUFNQyxZQUFZO0FBQUEsNlhBQUcsa0JBQU9DLFNBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQlQsb0JBQU0sQ0FBQ0csSUFBUDtBQUFBLHlZQUFZLGlCQUFPTyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWVCw2QkFBRyxHQUFHUyxDQUFOO0FBRUFkLG1DQUFTLENBQUNhLFNBQUQsQ0FBVDtBQUhVO0FBQUEsaUNBSWFSLEdBQUcsQ0FBQ1UsSUFBSixDQUFTLGdCQUFULEVBQTJCRixTQUEzQixDQUpiOztBQUFBO0FBSUpMLGtDQUpJOztBQU1WLDhCQUFJQSxRQUFRLENBQUNFLElBQVQsQ0FBY00sTUFBZCxLQUF5QixJQUE3QixFQUFtQztBQUNqQ3RCLHFDQUFTLENBQUN1QixNQUFWLENBQWlCLHlCQUFqQixFQUE0QyxTQUE1QztBQUNEOztBQVJTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQURtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaTCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWFBLHNCQUNFLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFYixZQUFNLEVBQU5BLE1BQUY7QUFBVUUsYUFBTyxFQUFQQSxPQUFWO0FBQW1CVyxrQkFBWSxFQUFaQTtBQUFuQixLQUEvQjtBQUFBLGNBQ0dmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0F4Q007O0dBQU1ELGM7VUFJUU8sMkM7OztLQUpSUCxjO0FBMENOLElBQU1zQixTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBOztBQUFBLFNBQU1DLHdEQUFVLENBQUMzQixhQUFELENBQWhCO0FBQUEsQ0FBbEI7O0lBQU0wQixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RlbWFuZGFyLXJlcG9zaWNhby41Y2Y3ZTQwMzY1YzcwNjlhYzZmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBjcmVhdGVDb250ZXh0LFxyXG4gIFJlYWN0Tm9kZSxcclxuICB1c2VDb250ZXh0LFxyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2hvd1RvYXN0IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3RvYXN0XCI7XHJcblxyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gXCIuL2FwaVwiO1xyXG5cclxuaW50ZXJmYWNlIElDb25maWdQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElHZW5lcmFsQ29uZmlnIHtcclxuICBkYXRhYmFzZTogc3RyaW5nO1xyXG4gIGRiYVVzZXI6IHN0cmluZztcclxuICBkYmFLZXk6IHN0cmluZztcclxuICBnZW5lcmFsQ29uZmlnOiB7XHJcbiAgICB6ZXJhRXN0b3F1ZUZpbGlhbERpZ2l0YWNhbzogYm9vbGVhbjtcclxuICAgIHNvbWFTYWxkb0VzdG9xdWU6IGJvb2xlYW47XHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElGaWxpYWlzIHtcclxuICBDT0RFTVBSRVNBOiBzdHJpbmc7XHJcbiAgTk9NRUVNUFJFU0E6IHN0cmluZztcclxuICBOT01FUkVEOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJQ29uZmlnQ29udGV4dERhdGEge1xyXG4gIGNvbmZpZzogSUdlbmVyYWxDb25maWc7XHJcbiAgZmlsaWFpczogSUZpbGlhaXNbXTtcclxuICBjaGFuZ2VDb25maWc6IChuZXdDb25maWc6IElHZW5lcmFsQ29uZmlnKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBDb25maWdDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJQ29uZmlnQ29udGV4dERhdGE+KFxyXG4gIHt9IGFzIElDb25maWdDb250ZXh0RGF0YVxyXG4pO1xyXG5cclxuY29uc3Qgc2hvd1RvYXN0ID0gbmV3IFNob3dUb2FzdCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbmZpZ1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogSUNvbmZpZ1Byb3ZpZGVyUHJvcHMpID0+IHtcclxuICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gdXNlU3RhdGU8SUdlbmVyYWxDb25maWc+KCk7XHJcbiAgY29uc3QgW2ZpbGlhaXMsIHNldEZpbGlhaXNdID0gdXNlU3RhdGU8SUZpbGlhaXNbXT4oKTtcclxuXHJcbiAgY29uc3QgeyBnZXRBcGkgfSA9IHVzZUFwaSgpO1xyXG5cclxuICBsZXQgYXBpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0QXBpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGFwaSA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgYXBpLmdldChcIi9jb25maWcvZ2VyYWlzXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0Q29uZmlnKHJlc3BvbnNlLmRhdGEuY29uZmlnKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhcGkuZ2V0KFwiL2NvbmZpZy9maWxpYWlzXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0RmlsaWFpcyhyZXNwb25zZS5kYXRhLmZpbGlhaXNQYXJzZWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ29uZmlnID0gYXN5bmMgKG5ld0NvbmZpZzogSUdlbmVyYWxDb25maWcpID0+IHtcclxuICAgIGdldEFwaS50aGVuKGFzeW5jIChyKSA9PiB7XHJcbiAgICAgIGFwaSA9IHI7XHJcblxyXG4gICAgICBzZXRDb25maWcobmV3Q29uZmlnKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9jb25maWcvZ2VyYWlzXCIsIG5ld0NvbmZpZyk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJDb25maWd1cmHDp8O1ZXMgYWx0ZXJhZGFzXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb25maWdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbmZpZywgZmlsaWFpcywgY2hhbmdlQ29uZmlnIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NvbmZpZ0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDb25maWcgPSAoKSA9PiB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9