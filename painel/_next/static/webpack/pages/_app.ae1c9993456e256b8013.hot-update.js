webpackHotUpdate_N_E("pages/_app",{

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


var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\contexts\\api.tsx",
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
          baseURL: "https://10.0.2.51:3333/api/v1"
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
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL2FwaS50c3giXSwibmFtZXMiOlsiQXBpQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcGlQcm92aWRlciIsImNoaWxkcmVuIiwiZ2V0QXBpIiwidXNlTWVtbyIsIlByb21pc2UiLCJyZXNvbHZlIiwiaXAiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJpcFNlcnZpZG9yIiwiY3JlYXRlIiwiYmFzZVVSTCIsInVzZUFwaSIsInVzZUNvbnRleHQiLCJBcGlMb2FkZXJSb3V0ZSIsImFwaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQSxJQUFNQSxVQUFVLGdCQUFHQywyREFBYSxDQUFrQixFQUFsQixDQUFoQztBQUVPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLFFBQWtDLFFBQWxDQSxRQUFrQztBQUM5RCxNQUFNQyxNQUE4QixHQUFHQyxxREFBTyxDQUM1QztBQUFBLFdBQ0UsSUFBSUMsT0FBSixDQUEyQixVQUFDQyxPQUFELEVBQWE7QUFDdEMsVUFBSUMsRUFBSjtBQUVBQyxrREFBSyxDQUFDQyxHQUFOLENBQVUsU0FBVixFQUFxQkMsSUFBckIsQ0FBMEIsVUFBQ0MsUUFBRCxFQUFjO0FBQ3RDSixVQUFFLEdBQUdJLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxVQUFuQjtBQUVBUCxlQUFPLENBQ0xFLDRDQUFLLENBQUNNLE1BQU4sQ0FBYTtBQUNYQyxpQkFBTztBQURJLFNBQWIsQ0FESyxDQUFQO0FBS0QsT0FSRDtBQVNELEtBWkQsQ0FERjtBQUFBLEdBRDRDLEVBZTVDLEVBZjRDLENBQTlDO0FBa0JBLHNCQUNFLHFFQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQXFCLFNBQUssRUFBRTtBQUFFWixZQUFNLEVBQU5BO0FBQUYsS0FBNUI7QUFBQSxjQUF5Q0Q7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBR0QsQ0F0Qk07O0dBQU1ELFc7O0tBQUFBLFc7QUF3Qk4sSUFBTWUsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQTs7QUFBQSxTQUFNQyx3REFBVSxDQUFDbEIsVUFBRCxDQUFoQjtBQUFBLENBQWY7O0lBQU1pQixNOztBQUVOLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsUUFBa0I7QUFBQTs7QUFBQSxNQUFmaEIsUUFBZSxTQUFmQSxRQUFlOztBQUFBLGdCQUMzQmMsTUFBTSxFQURxQjtBQUFBLE1BQ3RDYixNQURzQyxXQUN0Q0EsTUFEc0M7O0FBRzlDLE1BQUlnQixHQUFKO0FBQ0FoQixRQUFNLENBQUNPLElBQVAsQ0FBWSxVQUFDQyxRQUFELEVBQWM7QUFDeEJRLE9BQUcsR0FBR1IsUUFBTjtBQUNELEdBRkQ7QUFJQSxTQUFPVCxRQUFQO0FBQ0QsQ0FUTTs7SUFBTWdCLGM7VUFDUUYsTTs7O01BRFJFLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hZTFjOTk5MzQ1NmUyNTZiODAxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbnRlcmZhY2UgSUFwaVByb3ZpZGVyUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJQXBpQ29udGV4dERhdGEge1xyXG4gIGdldEFwaTogUHJvbWlzZTxBeGlvc0luc3RhbmNlPjtcclxufVxyXG5cclxuY29uc3QgQXBpQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUFwaUNvbnRleHREYXRhPih7fSBhcyBJQXBpQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwaVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogSUFwaVByb3ZpZGVyUHJvcHMpID0+IHtcclxuICBjb25zdCBnZXRBcGk6IFByb21pc2U8QXhpb3NJbnN0YW5jZT4gPSB1c2VNZW1vKFxyXG4gICAgKCkgPT5cclxuICAgICAgbmV3IFByb21pc2U8QXhpb3NJbnN0YW5jZT4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICBsZXQgaXA7XHJcblxyXG4gICAgICAgIGF4aW9zLmdldChcImlwLmpzb25cIikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlwID0gcmVzcG9uc2UuZGF0YS5pcFNlcnZpZG9yO1xyXG5cclxuICAgICAgICAgIHJlc29sdmUoXHJcbiAgICAgICAgICAgIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgYmFzZVVSTDogYGh0dHBzOi8vMTAuMC4yLjUxOjMzMzMvYXBpL3YxYCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwaUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZ2V0QXBpIH19PntjaGlsZHJlbn08L0FwaUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBcGkgPSAoKSA9PiB1c2VDb250ZXh0KEFwaUNvbnRleHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwaUxvYWRlclJvdXRlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgZ2V0QXBpIH0gPSB1c2VBcGkoKTtcclxuXHJcbiAgbGV0IGFwaTtcclxuICBnZXRBcGkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgIGFwaSA9IHJlc3BvbnNlO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=