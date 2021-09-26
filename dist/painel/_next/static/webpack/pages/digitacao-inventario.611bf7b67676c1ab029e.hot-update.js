webpackHotUpdate_N_E("pages/digitacao-inventario",{

/***/ "./src/contexts/api.tsx":
/*!******************************!*\
  !*** ./src/contexts/api.tsx ***!
  \******************************/
/*! exports provided: ApiProvider, useApi, ApiLoaderRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiProvider", function() { return ApiProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApi", function() { return useApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiLoaderRoute", function() { return ApiLoaderRoute; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Bruno Jagmin\\Desktop\\Ganesa\\utilitarios-resulth\\frontend\\src\\contexts\\api.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();



var ApiContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var ApiProvider = function ApiProvider(_ref) {
  _s();

  var children = _ref.children;
  var getApi = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return new Promise(function (resolve) {
      var ip;
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("ip.json").then(function (response) {
        ip = response.data.ipServidor;
        resolve(axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
          baseURL: true ? "https://".concat(ip, "/api/v1") : undefined
        }));
      });
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ApiContext.Provider, {
    value: {
      getApi: getApi
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};

_s(ApiProvider, "R0ZXc1DL7tj65fiQzW8msfZwuyo=");

_c = ApiProvider;
var useApi = function useApi() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ApiContext);
};

_s2(useApi, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var ApiLoaderRoute = function ApiLoaderRoute(_ref2) {
  _s3();

  var children = _ref2.children;

  var _useApi = useApi(),
      getApi = _useApi.getApi;

  var api;
  getApi.then(function (response) {
    api = response;
  });
  return children;
};

_s3(ApiLoaderRoute, "MB0qg7CP9eJHndirOS+MMPrrzog=", false, function () {
  return [useApi];
});

_c2 = ApiLoaderRoute;

var _c, _c2;

$RefreshReg$(_c, "ApiProvider");
$RefreshReg$(_c2, "ApiLoaderRoute");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL2FwaS50c3giXSwibmFtZXMiOlsiQXBpQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcGlQcm92aWRlciIsImNoaWxkcmVuIiwiZ2V0QXBpIiwidXNlTWVtbyIsIlByb21pc2UiLCJyZXNvbHZlIiwiaXAiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJpcFNlcnZpZG9yIiwiY3JlYXRlIiwiYmFzZVVSTCIsInVzZUFwaSIsInVzZUNvbnRleHQiLCJBcGlMb2FkZXJSb3V0ZSIsImFwaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQSxJQUFNQSxVQUFVLGdCQUFHQywyREFBYSxDQUFrQixFQUFsQixDQUFoQztBQUVPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLFFBQWtDLFFBQWxDQSxRQUFrQztBQUM5RCxNQUFNQyxNQUE4QixHQUFHQyxxREFBTyxDQUM1QztBQUFBLFdBQ0UsSUFBSUMsT0FBSixDQUEyQixVQUFDQyxPQUFELEVBQWE7QUFDdEMsVUFBSUMsRUFBSjtBQUVBQyxrREFBSyxDQUFDQyxHQUFOLENBQVUsU0FBVixFQUFxQkMsSUFBckIsQ0FBMEIsVUFBQ0MsUUFBRCxFQUFjO0FBQ3RDSixVQUFFLEdBQUdJLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxVQUFuQjtBQUVBUCxlQUFPLENBQ0xFLDRDQUFLLENBQUNNLE1BQU4sQ0FBYTtBQUNYQyxpQkFBTyxFQUNMLHlCQUNlUixFQURmO0FBRlMsU0FBYixDQURLLENBQVA7QUFRRCxPQVhEO0FBWUQsS0FmRCxDQURGO0FBQUEsR0FENEMsRUFrQjVDLEVBbEI0QyxDQUE5QztBQXFCQSxzQkFDRSxxRUFBQyxVQUFELENBQVksUUFBWjtBQUFxQixTQUFLLEVBQUU7QUFBRUosWUFBTSxFQUFOQTtBQUFGLEtBQTVCO0FBQUEsY0FBeUNEO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBekJNOztHQUFNRCxXOztLQUFBQSxXO0FBMkJOLElBQU1lLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUE7O0FBQUEsU0FBTUMsd0RBQVUsQ0FBQ2xCLFVBQUQsQ0FBaEI7QUFBQSxDQUFmOztJQUFNaUIsTTs7QUFFTixJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLFFBQWtCO0FBQUE7O0FBQUEsTUFBZmhCLFFBQWUsU0FBZkEsUUFBZTs7QUFBQSxnQkFDM0JjLE1BQU0sRUFEcUI7QUFBQSxNQUN0Q2IsTUFEc0MsV0FDdENBLE1BRHNDOztBQUc5QyxNQUFJZ0IsR0FBSjtBQUNBaEIsUUFBTSxDQUFDTyxJQUFQLENBQVksVUFBQ0MsUUFBRCxFQUFjO0FBQ3hCUSxPQUFHLEdBQUdSLFFBQU47QUFDRCxHQUZEO0FBSUEsU0FBT1QsUUFBUDtBQUNELENBVE07O0lBQU1nQixjO1VBQ1FGLE07OztNQURSRSxjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RpZ2l0YWNhby1pbnZlbnRhcmlvLjYxMWJmN2I2NzY3NmMxYWIwMjllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmludGVyZmFjZSBJQXBpUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElBcGlDb250ZXh0RGF0YSB7XHJcbiAgZ2V0QXBpOiBQcm9taXNlPEF4aW9zSW5zdGFuY2U+O1xyXG59XHJcblxyXG5jb25zdCBBcGlDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJQXBpQ29udGV4dERhdGE+KHt9IGFzIElBcGlDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgY29uc3QgQXBpUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBJQXBpUHJvdmlkZXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGdldEFwaTogUHJvbWlzZTxBeGlvc0luc3RhbmNlPiA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PlxyXG4gICAgICBuZXcgUHJvbWlzZTxBeGlvc0luc3RhbmNlPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGxldCBpcDtcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KFwiaXAuanNvblwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaXAgPSByZXNwb25zZS5kYXRhLmlwU2Vydmlkb3I7XHJcblxyXG4gICAgICAgICAgcmVzb2x2ZShcclxuICAgICAgICAgICAgYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgICBiYXNlVVJMOlxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICA/IGBodHRwczovLyR7aXB9L2FwaS92MWBcclxuICAgICAgICAgICAgICAgICAgOiBgaHR0cHM6Ly9sb2NhbGhvc3Q6MzMzMy9hcGkvdjFgLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBpQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBnZXRBcGkgfX0+e2NoaWxkcmVufTwvQXBpQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFwaSA9ICgpID0+IHVzZUNvbnRleHQoQXBpQ29udGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3QgQXBpTG9hZGVyUm91dGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBnZXRBcGkgfSA9IHVzZUFwaSgpO1xyXG5cclxuICBsZXQgYXBpO1xyXG4gIGdldEFwaS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgYXBpID0gcmVzcG9uc2U7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==