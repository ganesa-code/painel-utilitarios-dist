webpackHotUpdate_N_E("pages/altera-adm-convenio",{

/***/ "./src/components/SearchClienteInput/index.tsx":
/*!*****************************************************!*\
  !*** ./src/components/SearchClienteInput/index.tsx ***!
  \*****************************************************/
/*! exports provided: SearchClientInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientInput", function() { return SearchClientInput; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/api */ "./src/contexts/api.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/SearchClienteInput/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\components\\SearchClienteInput\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var api;
var SearchClientInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(_c = _s(function (_ref, ref) {
  _s();

  var disabled = _ref.disabled,
      _ref$admConv = _ref.admConv,
      admConv = _ref$admConv === void 0 ? false : _ref$admConv,
      handleIsSelected = _ref.handleIsSelected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      searchCliente = _useState[0],
      setSearchCliente = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      clientes = _useState2[0],
      setClientes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      selectedCliente = _useState3[0],
      setSelectedCliente = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isClienteSearchDivVisible = _useState4[0],
      setIsClienteSearchDivVisible = _useState4[1];

  var clienteSearchRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useApi = Object(_contexts_api__WEBPACK_IMPORTED_MODULE_3__["useApi"])(),
      getApi = _useApi.getApi;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, function () {
    return {
      getMyState: function getMyState() {
        return selectedCliente;
      }
    };
  }, [selectedCliente]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener("mousedown", handleClickOutside);
  }, []);

  var handleSearchCliente = function handleSearchCliente(event) {
    setIsClienteSearchDivVisible(true);
    setSearchCliente(event.target.value);

    if (event.target.value.length > 0) {
      var apiUrl = admConv ? "/adm-conv" : "/clientes";
      getApi.then(function (apiResponse) {
        api = apiResponse;
        api.post(apiUrl, {
          search: event.target.value
        }).then(function (response) {
          if (admConv) {
            setClientes(response.data.administradoras);
          } else {
            setClientes(response.data.parsedClientes);
          }
        });
      });
    } else {
      setIsClienteSearchDivVisible(false);
      setClientes([]);
    }
  };

  var handleClickOutside = function handleClickOutside(event) {
    var _clienteSearchRef$cur;

    if (clienteSearchRef && event.target.name === "NOMECLIENTE") {
      setIsClienteSearchDivVisible(true);
      return;
    }

    if (clienteSearchRef && !((_clienteSearchRef$cur = clienteSearchRef.current) !== null && _clienteSearchRef$cur !== void 0 && _clienteSearchRef$cur.contains(event.target))) {
      setIsClienteSearchDivVisible(false);
      return;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.clienteInput,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: admConv ? "Administradora de Cartão" : "Cliente",
      name: "NOMECLIENTE",
      autoComplete: "off",
      variant: "outlined",
      disabled: disabled ? disabled : false,
      value: searchCliente,
      color: "primary",
      onChange: function onChange(e) {
        return handleSearchCliente(e);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, _this), clientes && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: clienteSearchRef,
      className: "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchResult, " ").concat(isClienteSearchDivVisible ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.visible : _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.invisible),
      children: clientes.map(function (el) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          onClick: function onClick() {
            setSearchCliente(el.CODCLIENTE + " - " + el.NOME);
            setSelectedCliente(el);
            setIsClienteSearchDivVisible(false);

            if (admConv && handleIsSelected) {
              handleIsSelected();
            }
          },
          children: el.CODCLIENTE + " - " + el.NOME
        }, el.CODCLIENTE, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 7
  }, _this);
}, "IIX2pc1BbpiBbLH8EzB57k+1kCQ=", false, function () {
  return [_contexts_api__WEBPACK_IMPORTED_MODULE_3__["useApi"], react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"]];
}));
_c2 = SearchClientInput;

var _c, _c2;

$RefreshReg$(_c, "SearchClientInput$React.forwardRef");
$RefreshReg$(_c2, "SearchClientInput");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQ2xpZW50ZUlucHV0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJhcGkiLCJTZWFyY2hDbGllbnRJbnB1dCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsImRpc2FibGVkIiwiYWRtQ29udiIsImhhbmRsZUlzU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNlYXJjaENsaWVudGUiLCJzZXRTZWFyY2hDbGllbnRlIiwiY2xpZW50ZXMiLCJzZXRDbGllbnRlcyIsInNlbGVjdGVkQ2xpZW50ZSIsInNldFNlbGVjdGVkQ2xpZW50ZSIsImlzQ2xpZW50ZVNlYXJjaERpdlZpc2libGUiLCJzZXRJc0NsaWVudGVTZWFyY2hEaXZWaXNpYmxlIiwiY2xpZW50ZVNlYXJjaFJlZiIsInVzZVJlZiIsInVzZUFwaSIsImdldEFwaSIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJnZXRNeVN0YXRlIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImhhbmRsZVNlYXJjaENsaWVudGUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiYXBpVXJsIiwidGhlbiIsImFwaVJlc3BvbnNlIiwicG9zdCIsInNlYXJjaCIsInJlc3BvbnNlIiwiZGF0YSIsImFkbWluaXN0cmFkb3JhcyIsInBhcnNlZENsaWVudGVzIiwibmFtZSIsImN1cnJlbnQiLCJjb250YWlucyIsInN0eWxlcyIsImNsaWVudGVJbnB1dCIsImUiLCJzZWFyY2hSZXN1bHQiLCJ2aXNpYmxlIiwiaW52aXNpYmxlIiwibWFwIiwiZWwiLCJDT0RDTElFTlRFIiwiTk9NRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQWNBLElBQUlBLEdBQUo7QUFFTyxJQUFNQyxpQkFBaUIsZ0JBQUdDLDRDQUFLLENBQUNDLFVBQU4sU0FD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QU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQTNHOEI7QUFBQSxVQVVWakMsb0RBVlUsRUFZN0JFLHlEQVo2QjtBQUFBLEdBQTFCO01BQU1wQixpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hbHRlcmEtYWRtLWNvbnZlbmlvLmZhYmJiNjMwNTNmYjYwMjM0MDljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXBpXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIElDbGllbnRlIHtcclxuICBDT0RDTElFTlRFOiBzdHJpbmc7XHJcbiAgTk9NRTogc3RyaW5nO1xyXG4gIEVNQUlMOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTZWFyY2hQcm9wcyB7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGFkbUNvbnY/OiBib29sZWFuO1xyXG4gIGhhbmRsZUlzU2VsZWN0ZWQ/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5sZXQgYXBpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaENsaWVudElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZihcclxuICAoeyBkaXNhYmxlZCwgYWRtQ29udiA9IGZhbHNlLCBoYW5kbGVJc1NlbGVjdGVkIH06IFNlYXJjaFByb3BzLCByZWYpID0+IHtcclxuICAgIGNvbnN0IFtzZWFyY2hDbGllbnRlLCBzZXRTZWFyY2hDbGllbnRlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuICAgIGNvbnN0IFtjbGllbnRlcywgc2V0Q2xpZW50ZXNdID0gdXNlU3RhdGU8SUNsaWVudGVbXT4oKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZENsaWVudGUsIHNldFNlbGVjdGVkQ2xpZW50ZV0gPSB1c2VTdGF0ZTxJQ2xpZW50ZT4oKTtcclxuICAgIGNvbnN0IFtpc0NsaWVudGVTZWFyY2hEaXZWaXNpYmxlLCBzZXRJc0NsaWVudGVTZWFyY2hEaXZWaXNpYmxlXSA9XHJcbiAgICAgIHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBjbGllbnRlU2VhcmNoUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHsgZ2V0QXBpIH0gPSB1c2VBcGkoKTtcclxuXHJcbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKFxyXG4gICAgICByZWYsXHJcbiAgICAgICgpID0+ICh7XHJcbiAgICAgICAgZ2V0TXlTdGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGVkQ2xpZW50ZTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgICAgW3NlbGVjdGVkQ2xpZW50ZV1cclxuICAgICk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2hDbGllbnRlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgc2V0SXNDbGllbnRlU2VhcmNoRGl2VmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICAgIHNldFNlYXJjaENsaWVudGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGFwaVVybCA9IGFkbUNvbnYgPyBcIi9hZG0tY29udlwiIDogXCIvY2xpZW50ZXNcIjtcclxuICAgICAgICBnZXRBcGkudGhlbigoYXBpUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGFwaSA9IGFwaVJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgIGFwaVxyXG4gICAgICAgICAgICAucG9zdChhcGlVcmwsIHtcclxuICAgICAgICAgICAgICBzZWFyY2g6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGFkbUNvbnYpIHtcclxuICAgICAgICAgICAgICAgIHNldENsaWVudGVzKHJlc3BvbnNlLmRhdGEuYWRtaW5pc3RyYWRvcmFzKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2xpZW50ZXMocmVzcG9uc2UuZGF0YS5wYXJzZWRDbGllbnRlcyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc0NsaWVudGVTZWFyY2hEaXZWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICBzZXRDbGllbnRlcyhbXSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGNsaWVudGVTZWFyY2hSZWYgJiYgZXZlbnQudGFyZ2V0Lm5hbWUgPT09IFwiTk9NRUNMSUVOVEVcIikge1xyXG4gICAgICAgIHNldElzQ2xpZW50ZVNlYXJjaERpdlZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgY2xpZW50ZVNlYXJjaFJlZiAmJlxyXG4gICAgICAgICFjbGllbnRlU2VhcmNoUmVmLmN1cnJlbnQ/LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2V0SXNDbGllbnRlU2VhcmNoRGl2VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRlSW5wdXR9PlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPXthZG1Db252ID8gXCJBZG1pbmlzdHJhZG9yYSBkZSBDYXJ0w6NvXCIgOiBcIkNsaWVudGVcIn1cclxuICAgICAgICAgIG5hbWU9XCJOT01FQ0xJRU5URVwiXHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCA/IGRpc2FibGVkIDogZmFsc2V9XHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoQ2xpZW50ZX1cclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaENsaWVudGUoZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Y2xpZW50ZXMgJiYgKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e2NsaWVudGVTZWFyY2hSZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlYXJjaFJlc3VsdH0gJHtcclxuICAgICAgICAgICAgICBpc0NsaWVudGVTZWFyY2hEaXZWaXNpYmxlID8gc3R5bGVzLnZpc2libGUgOiBzdHlsZXMuaW52aXNpYmxlXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2xpZW50ZXMubWFwKChlbCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBrZXk9e2VsLkNPRENMSUVOVEV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlYXJjaENsaWVudGUoZWwuQ09EQ0xJRU5URSArIFwiIC0gXCIgKyBlbC5OT01FKTtcclxuICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRDbGllbnRlKGVsKTtcclxuICAgICAgICAgICAgICAgICAgc2V0SXNDbGllbnRlU2VhcmNoRGl2VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAoYWRtQ29udiAmJiBoYW5kbGVJc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlSXNTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtlbC5DT0RDTElFTlRFICsgXCIgLSBcIiArIGVsLk5PTUV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=