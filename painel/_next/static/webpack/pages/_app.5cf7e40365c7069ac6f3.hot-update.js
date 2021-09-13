webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL2NvbmZpZy50c3giXSwibmFtZXMiOlsiQ29uZmlnQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJDb25maWdQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJjb25maWciLCJzZXRDb25maWciLCJmaWxpYWlzIiwic2V0RmlsaWFpcyIsInVzZUFwaSIsImdldEFwaSIsImFwaSIsInVzZUVmZmVjdCIsInRoZW4iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJmaWxpYWlzUGFyc2VkIiwiY2hhbmdlQ29uZmlnIiwibmV3Q29uZmlnIiwiciIsInBvc3QiLCJzdGF0dXMiLCJub3RpZnkiLCJ1c2VDb25maWciLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQTRCQSxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUNqQyxFQURpQyxDQUFuQztBQUlBLElBQU1DLFNBQVMsR0FBRyxJQUFJQyx5REFBSixFQUFsQjtBQUVPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBd0M7QUFBQTs7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDOztBQUFBLGtCQUN4Q0Msc0RBQVEsRUFEZ0M7QUFBQSxNQUM3REMsTUFENkQ7QUFBQSxNQUNyREMsU0FEcUQ7O0FBQUEsbUJBRXRDRixzREFBUSxFQUY4QjtBQUFBLE1BRTdERyxPQUY2RDtBQUFBLE1BRXBEQyxVQUZvRDs7QUFBQSxnQkFJakRDLG1EQUFNLEVBSjJDO0FBQUEsTUFJNURDLE1BSjRELFdBSTVEQSxNQUo0RDs7QUFNcEUsTUFBSUMsR0FBSjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsVUFBTSxDQUFDRyxJQUFQLENBQVksVUFBQ0MsUUFBRCxFQUFjO0FBQ3hCSCxTQUFHLEdBQUdHLFFBQU47QUFFQUgsU0FBRyxDQUFDSSxHQUFKLENBQVEsZ0JBQVIsRUFBMEJGLElBQTFCLENBQStCLFVBQUNDLFFBQUQsRUFBYztBQUMzQ1IsaUJBQVMsQ0FBQ1EsUUFBUSxDQUFDRSxJQUFULENBQWNYLE1BQWYsQ0FBVDtBQUNELE9BRkQ7QUFJQU0sU0FBRyxDQUFDSSxHQUFKLENBQVEsaUJBQVIsRUFBMkJGLElBQTNCLENBQWdDLFVBQUNDLFFBQUQsRUFBYztBQUM1Q04sa0JBQVUsQ0FBQ00sUUFBUSxDQUFDRSxJQUFULENBQWNDLGFBQWYsQ0FBVjtBQUNELE9BRkQ7QUFHRCxLQVZEO0FBV0QsR0FaUSxFQVlOLEVBWk0sQ0FBVDs7QUFjQSxNQUFNQyxZQUFZO0FBQUEsNlhBQUcsa0JBQU9DLFNBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQlQsb0JBQU0sQ0FBQ0csSUFBUDtBQUFBLHlZQUFZLGlCQUFPTyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWVCw2QkFBRyxHQUFHUyxDQUFOO0FBRUFkLG1DQUFTLENBQUNhLFNBQUQsQ0FBVDtBQUhVO0FBQUEsaUNBSWFSLEdBQUcsQ0FBQ1UsSUFBSixDQUFTLGdCQUFULEVBQTJCRixTQUEzQixDQUpiOztBQUFBO0FBSUpMLGtDQUpJOztBQU1WLDhCQUFJQSxRQUFRLENBQUNFLElBQVQsQ0FBY00sTUFBZCxLQUF5QixJQUE3QixFQUFtQztBQUNqQ3RCLHFDQUFTLENBQUN1QixNQUFWLENBQWlCLHlCQUFqQixFQUE0QyxTQUE1QztBQUNEOztBQVJTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQURtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaTCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWFBLHNCQUNFLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFYixZQUFNLEVBQU5BLE1BQUY7QUFBVUUsYUFBTyxFQUFQQSxPQUFWO0FBQW1CVyxrQkFBWSxFQUFaQTtBQUFuQixLQUEvQjtBQUFBLGNBQ0dmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0F4Q007O0dBQU1ELGM7VUFJUU8sMkM7OztLQUpSUCxjO0FBMENOLElBQU1zQixTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBOztBQUFBLFNBQU1DLHdEQUFVLENBQUMzQixhQUFELENBQWhCO0FBQUEsQ0FBbEI7O0lBQU0wQixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWNmN2U0MDM2NWM3MDY5YWM2ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgY3JlYXRlQ29udGV4dCxcclxuICBSZWFjdE5vZGUsXHJcbiAgdXNlQ29udGV4dCxcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlU3RhdGUsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNob3dUb2FzdCB9IGZyb20gXCIuLi9zZXJ2aWNlcy90b2FzdFwiO1xyXG5cclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbmludGVyZmFjZSBJQ29uZmlnUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJR2VuZXJhbENvbmZpZyB7XHJcbiAgZGF0YWJhc2U6IHN0cmluZztcclxuICBkYmFVc2VyOiBzdHJpbmc7XHJcbiAgZGJhS2V5OiBzdHJpbmc7XHJcbiAgZ2VuZXJhbENvbmZpZzoge1xyXG4gICAgemVyYUVzdG9xdWVGaWxpYWxEaWdpdGFjYW86IGJvb2xlYW47XHJcbiAgICBzb21hU2FsZG9Fc3RvcXVlOiBib29sZWFuO1xyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRmlsaWFpcyB7XHJcbiAgQ09ERU1QUkVTQTogc3RyaW5nO1xyXG4gIE5PTUVFTVBSRVNBOiBzdHJpbmc7XHJcbiAgTk9NRVJFRDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUNvbmZpZ0NvbnRleHREYXRhIHtcclxuICBjb25maWc6IElHZW5lcmFsQ29uZmlnO1xyXG4gIGZpbGlhaXM6IElGaWxpYWlzW107XHJcbiAgY2hhbmdlQ29uZmlnOiAobmV3Q29uZmlnOiBJR2VuZXJhbENvbmZpZykgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQ29uZmlnQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUNvbmZpZ0NvbnRleHREYXRhPihcclxuICB7fSBhcyBJQ29uZmlnQ29udGV4dERhdGFcclxuKTtcclxuXHJcbmNvbnN0IHNob3dUb2FzdCA9IG5ldyBTaG93VG9hc3QoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb25maWdQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IElDb25maWdQcm92aWRlclByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IHVzZVN0YXRlPElHZW5lcmFsQ29uZmlnPigpO1xyXG4gIGNvbnN0IFtmaWxpYWlzLCBzZXRGaWxpYWlzXSA9IHVzZVN0YXRlPElGaWxpYWlzW10+KCk7XHJcblxyXG4gIGNvbnN0IHsgZ2V0QXBpIH0gPSB1c2VBcGkoKTtcclxuXHJcbiAgbGV0IGFwaTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEFwaS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBhcGkgPSByZXNwb25zZTtcclxuXHJcbiAgICAgIGFwaS5nZXQoXCIvY29uZmlnL2dlcmFpc1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldENvbmZpZyhyZXNwb25zZS5kYXRhLmNvbmZpZyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgYXBpLmdldChcIi9jb25maWcvZmlsaWFpc1wiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldEZpbGlhaXMocmVzcG9uc2UuZGF0YS5maWxpYWlzUGFyc2VkKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNvbmZpZyA9IGFzeW5jIChuZXdDb25maWc6IElHZW5lcmFsQ29uZmlnKSA9PiB7XHJcbiAgICBnZXRBcGkudGhlbihhc3luYyAocikgPT4ge1xyXG4gICAgICBhcGkgPSByO1xyXG5cclxuICAgICAgc2V0Q29uZmlnKG5ld0NvbmZpZyk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvY29uZmlnL2dlcmFpc1wiLCBuZXdDb25maWcpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgICBzaG93VG9hc3Qubm90aWZ5KFwiQ29uZmlndXJhw6fDtWVzIGFsdGVyYWRhc1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29uZmlnQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb25maWcsIGZpbGlhaXMsIGNoYW5nZUNvbmZpZyB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ29uZmlnID0gKCkgPT4gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==