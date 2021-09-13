webpackHotUpdate_N_E("pages/parametros-gerais",{

/***/ "./src/contexts/auth.tsx":
/*!*******************************!*\
  !*** ./src/contexts/auth.tsx ***!
  \*******************************/
/*! exports provided: AuthProvider, useAuth, ProtectRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectRoute", function() { return ProtectRoute; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/login */ "./src/pages/login/index.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _services_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toast */ "./src/services/toast.ts");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pages_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/loading */ "./src/pages/loading/index.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api */ "./src/contexts/api.tsx");





var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\contexts\\auth.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();









var Permissoes;

(function (Permissoes) {
  Permissoes["SemAcesso"] = "SEM_ACESSO";
  Permissoes["SomenteConsulta"] = "SOMENTE_CONSULTA";
  Permissoes["AcessoTotal"] = "ACESSO_TOTAL";
})(Permissoes || (Permissoes = {}));

var AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])({});
var showToast = new _services_toast__WEBPACK_IMPORTED_MODULE_7__["ShowToast"]();
var api;
var AuthProvider = function AuthProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      filialPrincipal = _useState2[0],
      setFilialPrincial = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useApi = Object(_api__WEBPACK_IMPORTED_MODULE_10__["useApi"])(),
      getApi = _useApi.getApi;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function loadUserFromCookies() {
      return _loadUserFromCookies.apply(this, arguments);
    }

    function _loadUserFromCookies() {
      _loadUserFromCookies = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var token, filial, getFilial, response, newUser;
        return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);
                token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token");
                filial = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("filial");

                if (!filial) {
                  _context.next = 7;
                  break;
                }

                setFilialPrincial(JSON.parse(filial));
                _context.next = 12;
                break;

              case 7:
                _context.next = 9;
                return api.get("/config/filiais");

              case 9:
                getFilial = _context.sent;
                setFilialPrincial(getFilial.data.filiaisParsed[0]);
                js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("filial", getFilial.data.filiaisParsed[0]);

              case 12:
                if (!token) {
                  _context.next = 18;
                  break;
                }

                api.defaults.headers.Authorization = "Bearer ".concat(token);
                _context.next = 16;
                return api.post("/login/validate-token");

              case 16:
                response = _context.sent;

                if (response.data.userObj) {
                  setLoading(false);
                  newUser = response.data.userObj;
                  setUser(newUser);
                }

              case 18:
                setLoading(false);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _loadUserFromCookies.apply(this, arguments);
    }

    getApi.then(function (response) {
      api = response;
      loadUserFromCookies();
    });
  }, []);

  var login = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(login, senha) {
      var response;
      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.post("/login", {
                login: login,
                senha: senha
              });

            case 2:
              response = _context2.sent;

              if (!(response.data.status === "error")) {
                _context2.next = 7;
                break;
              }

              showToast.notify(response.data.message, "error");
              setLoading(false);
              return _context2.abrupt("return");

            case 7:
              if (response.data.userExists) {
                showToast.notify("Login efetuado", "success");
                js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("token", response.data.userExists.token, {
                  expires: 60
                });
                api.defaults.headers.Authorization = "Bearer ".concat(response.data.token);
                setTimeout(function () {
                  setUser(response.data.userExists);
                  window.location.pathname = "/";
                }, 2000);
              }

              setLoading(false);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var logout = function logout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("token");
    setUser(null);
    delete api.defaults.headers.Authorization;
    window.location.pathname = "/";
  };

  var changeFilial = function changeFilial(filial) {
    setFilialPrincial(filial);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: {
      isAuthenticated: !!user,
      user: user,
      filialPrincipal: filialPrincipal,
      changeFilial: changeFilial,
      login: login,
      loading: loading,
      logout: logout
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 5
  }, _this);
};

_s(AuthProvider, "/WCIhiNWJw0DQAQF4rG6xxwPIgY=", false, function () {
  return [_api__WEBPACK_IMPORTED_MODULE_10__["useApi"]];
});

_c = AuthProvider;
var useAuth = function useAuth() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(AuthContext);
};

_s2(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var ProtectRoute = function ProtectRoute(_ref3) {
  _s3();

  var children = _ref3.children;

  var _useAuth = useAuth(),
      loading = _useAuth.loading,
      isAuthenticated = _useAuth.isAuthenticated,
      user = _useAuth.user;

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_loading__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, _this)
    }, void 0, false);
  } else if (!isAuthenticated && window.location.pathname !== "/login") {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_login__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  }

  return children;
};

_s3(ProtectRoute, "TDTOmMci6OplymtQO87EP4A0RsU=", false, function () {
  return [useAuth];
});

_c2 = ProtectRoute;

var _c, _c2;

$RefreshReg$(_c, "AuthProvider");
$RefreshReg$(_c2, "ProtectRoute");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL2F1dGgudHN4Il0sIm5hbWVzIjpbIlBlcm1pc3NvZXMiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzaG93VG9hc3QiLCJTaG93VG9hc3QiLCJhcGkiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJmaWxpYWxQcmluY2lwYWwiLCJzZXRGaWxpYWxQcmluY2lhbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlQXBpIiwiZ2V0QXBpIiwidXNlRWZmZWN0IiwibG9hZFVzZXJGcm9tQ29va2llcyIsInRva2VuIiwiQ29va2llcyIsImdldCIsImZpbGlhbCIsIkpTT04iLCJwYXJzZSIsImdldEZpbGlhbCIsImRhdGEiLCJmaWxpYWlzUGFyc2VkIiwic2V0IiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInBvc3QiLCJyZXNwb25zZSIsInVzZXJPYmoiLCJuZXdVc2VyIiwidGhlbiIsImxvZ2luIiwic2VuaGEiLCJzdGF0dXMiLCJub3RpZnkiLCJtZXNzYWdlIiwidXNlckV4aXN0cyIsImV4cGlyZXMiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImxvZ291dCIsInJlbW92ZSIsImNoYW5nZUZpbGlhbCIsImlzQXV0aGVudGljYXRlZCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwiUHJvdGVjdFJvdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7SUFFS0EsVTs7V0FBQUEsVTtBQUFBQSxZO0FBQUFBLFk7QUFBQUEsWTtHQUFBQSxVLEtBQUFBLFU7O0FBaURMLElBQU1DLFdBQVcsZ0JBQUdDLDJEQUFhLENBQWtCLEVBQWxCLENBQWpDO0FBRUEsSUFBTUMsU0FB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QUFPeEMsUUFBUDtBQUNELENBbEJNOztJQUFNK0MsWTtVQUNnQ0YsTzs7O01BRGhDRSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhcmFtZXRyb3MtZ2VyYWlzLjZjYzQyOTA2YzMwNjJkOGYwNzY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuICBjcmVhdGVDb250ZXh0LFxyXG4gIHVzZVN0YXRlLFxyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIFJlYWN0Tm9kZSxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuaW1wb3J0IExvZ2luU2NyZWVuIGZyb20gXCIuLi9wYWdlcy9sb2dpblwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyBTaG93VG9hc3QgfSBmcm9tIFwiLi4vc2VydmljZXMvdG9hc3RcIjtcclxuXHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSBcIi4uL3BhZ2VzL2xvYWRpbmdcIjtcclxuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5lbnVtIFBlcm1pc3NvZXMge1xyXG4gIFNlbUFjZXNzbyA9IFwiU0VNX0FDRVNTT1wiLFxyXG4gIFNvbWVudGVDb25zdWx0YSA9IFwiU09NRU5URV9DT05TVUxUQVwiLFxyXG4gIEFjZXNzb1RvdGFsID0gXCJBQ0VTU09fVE9UQUxcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVXN1YXJpbyB7XHJcbiAgVVNVQVJJTzogc3RyaW5nO1xyXG4gIFNFTkhBPzogc3RyaW5nO1xyXG4gIHRva2VuPzogc3RyaW5nO1xyXG4gIHJvbGU6IHN0cmluZztcclxuICBwZXJtaXNzaW9uczoge1xyXG4gICAgY29uc3VsdGFyUHJvZHV0b3M6IFBlcm1pc3NvZXM7XHJcbiAgICBwYXJhbWV0cm9zR2VyYWlzOiBQZXJtaXNzb2VzO1xyXG4gICAgY29udGFzQVJlY2ViZXI6IFBlcm1pc3NvZXM7XHJcbiAgICBhbHRlcmFBZG1Db252ZW5pbzogUGVybWlzc29lcztcclxuICAgIGRpZ2l0YWNhb0ludmVudGFyaW86IFBlcm1pc3NvZXM7XHJcbiAgICBjb25zdWx0YXJJbnZlbnRhcmlvczogUGVybWlzc29lcztcclxuICAgIGNvbXByYXNSZXF1aXNpdGFyOiBQZXJtaXNzb2VzO1xyXG4gICAgY29tcHJhc0NvbnN1bHRhcjogUGVybWlzc29lcztcclxuICAgIGNvbXByYXNQYWluZWxEb0NvbXByYWRvcjogUGVybWlzc29lcztcclxuICAgIGRlbWFuZGFyUmVwb3NpY2FvOiBQZXJtaXNzb2VzO1xyXG4gICAgdmlzdWFsaXphclJlcG9zaWNvZXM6IFBlcm1pc3NvZXM7XHJcbiAgICBjb25maWd1cmFjb2VzOiBQZXJtaXNzb2VzO1xyXG4gICAgcGVybWlzc29lczogUGVybWlzc29lcztcclxuICAgIGdlcmFyQ29kQmFycmFzOiBQZXJtaXNzb2VzO1xyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRmlsaWFsIHtcclxuICBDT0RFTVBSRVNBOiBzdHJpbmc7XHJcbiAgTk9NRUVNUFJFU0E/OiBzdHJpbmc7XHJcbiAgTk9NRVJFRD86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEF1dGhQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXV0aENvbnRleHREYXRhIHtcclxuICBsb2dpbjogKGxvZ2luLCBzZW5oYSkgPT4gdm9pZDtcclxuICBsb2dvdXQ6ICgpID0+IHZvaWQ7XHJcbiAgY2hhbmdlRmlsaWFsOiAoZmlsaWFsOiBJRmlsaWFsKSA9PiB2b2lkO1xyXG4gIHVzZXI6IElVc3VhcmlvO1xyXG4gIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gIGZpbGlhbFByaW5jaXBhbDogSUZpbGlhbDtcclxufVxyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0RGF0YT4oe30gYXMgQXV0aENvbnRleHREYXRhKTtcclxuXHJcbmNvbnN0IHNob3dUb2FzdCA9IG5ldyBTaG93VG9hc3QoKTtcclxubGV0IGFwaTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPElVc3VhcmlvPigpO1xyXG4gIGNvbnN0IFtmaWxpYWxQcmluY2lwYWwsIHNldEZpbGlhbFByaW5jaWFsXSA9IHVzZVN0YXRlPElGaWxpYWw+KCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IHsgZ2V0QXBpIH0gPSB1c2VBcGkoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRVc2VyRnJvbUNvb2tpZXMoKSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoXCJ0b2tlblwiKTtcclxuICAgICAgY29uc3QgZmlsaWFsID0gQ29va2llcy5nZXQoXCJmaWxpYWxcIik7XHJcblxyXG4gICAgICBpZiAoZmlsaWFsKSB7XHJcbiAgICAgICAgc2V0RmlsaWFsUHJpbmNpYWwoSlNPTi5wYXJzZShmaWxpYWwpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBnZXRGaWxpYWwgPSBhd2FpdCBhcGkuZ2V0KFwiL2NvbmZpZy9maWxpYWlzXCIpO1xyXG4gICAgICAgIHNldEZpbGlhbFByaW5jaWFsKGdldEZpbGlhbC5kYXRhLmZpbGlhaXNQYXJzZWRbMF0pO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KFwiZmlsaWFsXCIsIGdldEZpbGlhbC5kYXRhLmZpbGlhaXNQYXJzZWRbMF0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9sb2dpbi92YWxpZGF0ZS10b2tlblwiKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEudXNlck9iaikge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICBjb25zdCBuZXdVc2VyOiBJVXN1YXJpbyA9IHJlc3BvbnNlLmRhdGEudXNlck9iajtcclxuICAgICAgICAgIHNldFVzZXIobmV3VXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcGkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgYXBpID0gcmVzcG9uc2U7XHJcblxyXG4gICAgICBsb2FkVXNlckZyb21Db29raWVzKCk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKGxvZ2luLCBzZW5oYSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcIi9sb2dpblwiLCB7IGxvZ2luLCBzZW5oYSB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IFwiZXJyb3JcIikge1xyXG4gICAgICBzaG93VG9hc3Qubm90aWZ5KHJlc3BvbnNlLmRhdGEubWVzc2FnZSwgXCJlcnJvclwiKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS51c2VyRXhpc3RzKSB7XHJcbiAgICAgIHNob3dUb2FzdC5ub3RpZnkoXCJMb2dpbiBlZmV0dWFkb1wiLCBcInN1Y2Nlc3NcIik7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS51c2VyRXhpc3RzLnRva2VuLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Jlc3BvbnNlLmRhdGEudG9rZW59YDtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0VXNlcihyZXNwb25zZS5kYXRhLnVzZXJFeGlzdHMpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL1wiO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInRva2VuXCIpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIGRlbGV0ZSBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gXCIvXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlRmlsaWFsID0gKGZpbGlhbDogSUZpbGlhbCkgPT4ge1xyXG4gICAgc2V0RmlsaWFsUHJpbmNpYWwoZmlsaWFsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIXVzZXIsXHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBmaWxpYWxQcmluY2lwYWwsXHJcbiAgICAgICAgY2hhbmdlRmlsaWFsLFxyXG4gICAgICAgIGxvZ2luLFxyXG4gICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb3RlY3RSb3V0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGxvYWRpbmcsIGlzQXV0aGVudGljYXRlZCwgdXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxMb2FkaW5nU2NyZWVuIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9sb2dpblwiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxMb2dpblNjcmVlbiAvPlxyXG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=