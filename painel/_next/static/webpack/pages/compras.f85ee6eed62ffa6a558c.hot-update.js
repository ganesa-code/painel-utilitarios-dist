webpackHotUpdate_N_E("pages/compras",{

/***/ "./src/pages/login/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/login/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginScreen; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");




var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\pages\\login\\index.tsx",
    _s = $RefreshSig$();




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      height: "100vh"
    },
    image: {
      background: "linear-gradient(rgba(35, 53, 72, 0.5), rgba(35, 53, 72, 0.5)), url(/images/login-bg.web) center no-repeat",
      backgroundSize: "cover"
    },
    logoImage: {
      width: "300px",
      height: "auto",
      marginBottom: "2rem"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
});
function LoginScreen() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      usuario = _useState[0],
      setUsuario = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_5__["useAuth"])(),
      login = _useAuth.login;

  var classes = useStyles();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var dataObject;
      return C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dataObject = {
                login: usuario,
                senha: password
              };
              login(dataObject.login, dataObject.senha);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    component: "main",
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CssBaseline"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: false,
      sm: 4,
      md: 7,
      className: classes.image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      sm: 8,
      md: 5,
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"],
      elevation: 6,
      square: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.paper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: classes.logoImage,
          src: "/images/ganesaBlue.png",
          alt: "Ganesa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
          component: "h1",
          variant: "h5",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: function onSubmit(event) {
            event.preventDefault();
            handleSubmit();
          },
          className: classes.form,
          noValidate: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
            variant: "outlined",
            margin: "normal",
            required: true,
            fullWidth: true,
            id: "email",
            label: "Usu\xE1rio",
            name: "email",
            autoComplete: "email",
            autoFocus: true,
            value: usuario,
            onChange: function onChange(event) {
              return setUsuario(event.target.value.toUpperCase());
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
            variant: "outlined",
            margin: "normal",
            required: true,
            fullWidth: true,
            name: "password",
            label: "Senha",
            type: "password",
            id: "password",
            autoComplete: "current-password",
            value: password,
            onChange: function onChange(event) {
              return setPassword(event.target.value.toUpperCase());
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            type: "submit",
            fullWidth: true,
            variant: "contained",
            color: "primary",
            className: classes.submit,
            children: "Entrar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

_s(LoginScreen, "MlTCk1IsnsR4j6ePehmCHBsFUxU=", false, function () {
  return [_contexts_auth__WEBPACK_IMPORTED_MODULE_5__["useAuth"], useStyles];
});

_c = LoginScreen;

var _c;

$RefreshReg$(_c, "LoginScreen");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiaGVpZ2h0IiwiaW1hZ2UiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJsb2dvSW1hZ2UiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsInBhcGVyIiwibWFyZ2luIiwic3BhY2luZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImF2YXRhciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiZm9ybSIsIm1hcmdpblRvcCIsInN1Ym1pdCIsIkxvZ2luU2NyZWVuIiwidXNlU3RhdGUiLCJ1c3VhcmlvIiwic2V0VXN1YXJpbyIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VBdXRoIiwibG9naW4iLCJjbGFzc2VzIiwiaGFuZGxlU3VibWl0IiwiZGF0YU9iamVjdCIsInNlbmhhIiwiUGFwZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLFlBQU0sRUFBRTtBQURKLEtBRGlDO0FBSXZDQyxTQUFLLEVBQUU7QUFDTEMsZ0JBQVUsNkdBREw7QUFFTEMsb0JBQWMsRUFBRTtBQUZYLEtBSmdDO0FBUXZDQyxhQUFTLEVBQUU7QUFDVEMsV0FBSyxFQUFFLE9BREU7QUFFVEwsWUFBTSxFQUFFLE1BRkM7QUFHVE0sa0JBQVksRUFBRTtBQUhMLEtBUjRCO0FBYXZDQyxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFVixLQUFLLENBQUNXLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBREg7QUFFTEMsYUFBTyxFQUFFLE1BRko7QUFHTEMsbUJBQWEsRUFBRSxRQUhWO0FBSUxDLGdCQUFVLEVBQUU7QUFKUCxLQWJnQztBQW1CdkNDLFVBQU0sRUFBRTtBQUNOTCxZQUFNLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjLENBQWQsQ0FERjtBQUVOSyxxQkFBZSxFQUFFaEIsS0FBSyxDQUFDaUIsT0FBTixDQUFjQyxTQUFkLENBQXdCQztBQUZuQyxLQW5CK0I7QUF1QnZDQyxRQUFJLEVBQUU7QUFDSmIsV0FBSyxFQUFFLE1BREg7QUFDVztBQUNmYyxlQUFTLEVBQUVyQixLQUFLLENBQUNXLE9BQU4sQ0FBYyxDQUFkO0FBRlAsS0F2QmlDO0FBMkJ2Q1csVUFBTSxFQUFFO0FBQ05aLFlBQU0sRUFBRVYsS0FBSyxDQUFDVyxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQjtBQURGO0FBM0IrQixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQWdDZSxTQUFTWSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ05DLHNEQUFRLENBQVMsRUFBVCxDQURGO0FBQUEsTUFDN0JDLE9BRDZCO0FBQUEsTUFDcEJDLFVBRG9COztBQUFBLG1CQUVKRixzREFBUSxDQUFTLEVBQVQsQ0FGSjtBQUFBLE1BRTdCRyxRQUY2QjtBQUFBLE1BRW5CQyxXQUZtQjs7QUFBQSxpQkFHbEJDLDhEQUFPLEVBSFc7QUFBQSxNQUc1QkMsS0FINEIsWUFHNUJBLEtBSDRCOztBQUlwQyxNQUFNQyxPQUFPLEdBQUdqQyxTQUFTLEVBQXpCOztBQUVBLE1BQU1rQyxZQUFZO0FBQUEsNFhBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JDLHdCQURhLEdBQ0E7QUFDakJILHFCQUFLLEVBQUVMLE9BRFU7QUFFakJTLHFCQUFLLEVBQUVQO0FBRlUsZUFEQTtBQU1uQkcsbUJBQUssQ0FBQ0csVUFBVSxDQUFDSCxLQUFaLEVBQW1CRyxVQUFVLENBQUNDLEtBQTlCLENBQUw7O0FBTm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpGLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBU0Esc0JBQ0UscUVBQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLE1BQTFCO0FBQWlDLGFBQVMsRUFBRUQsT0FBTyxDQUFDOUIsSUFBcEQ7QUFBQSw0QkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxzREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxLQUFmO0FBQXNCLFFBQUUsRUFBRSxDQUExQjtBQUE2QixRQUFFLEVBQUUsQ0FBakM7QUFBb0MsZUFBUyxFQUFFOEIsT0FBTyxDQUFDNUI7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsc0RBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUUsQ0FBdkI7QUFBMEIsUUFBRSxFQUFFLENBQTlCO0FBQWlDLGVBQVMsRUFBRWdDLHVEQUE1QztBQUFtRCxlQUFTLEVBQUUsQ0FBOUQ7QUFBaUUsWUFBTSxNQUF2RTtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUosT0FBTyxDQUFDdEIsS0FBeEI7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUVzQixPQUFPLENBQUN6QixTQURyQjtBQUVFLGFBQUcsRUFBQyx3QkFGTjtBQUdFLGFBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFNRSxxRUFBQyw0REFBRDtBQUFZLG1CQUFTLEVBQUMsSUFBdEI7QUFBMkIsaUJBQU8sRUFBQyxJQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQVNFO0FBQ0Usa0JBQVEsRUFBRSxrQkFBQzhCLEtBQUQsRUFBVztBQUNuQkEsaUJBQUssQ0FBQ0MsY0FBTjtBQUNBTCx3QkFBWTtBQUNiLFdBSkg7QUFLRSxtQkFBUyxFQUFFRCxPQUFPLENBQUNYLElBTHJCO0FBTUUsb0JBQVUsTUFOWjtBQUFBLGtDQVFFLHFFQUFDLDJEQUFEO0FBQ0UsbUJBQU8sRUFBQyxVQURWO0FBRUUsa0JBQU0sRUFBQyxRQUZUO0FBR0Usb0JBQVEsTUFIVjtBQUlFLHFCQUFTLE1BSlg7QUFLRSxjQUFFLEVBQUMsT0FMTDtBQU1FLGlCQUFLLEVBQUMsWUFOUjtBQU9FLGdCQUFJLEVBQUMsT0FQUDtBQVFFLHdCQUFZLEVBQUMsT0FSZjtBQVNFLHFCQUFTLE1BVFg7QUFVRSxpQkFBSyxFQUFFSyxPQVZUO0FBV0Usb0JBQVEsRUFBRSxrQkFBQ1csS0FBRDtBQUFBLHFCQUFXVixVQUFVLENBQUNVLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxXQUFuQixFQUFELENBQXJCO0FBQUE7QUFYWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGLGVBcUJFLHFFQUFDLDJEQUFEO0FBQ0UsbUJBQU8sRUFBQyxVQURWO0FBRUUsa0JBQU0sRUFBQyxRQUZUO0FBR0Usb0JBQVEsTUFIVjtBQUlFLHFCQUFTLE1BSlg7QUFLRSxnQkFBSSxFQUFDLFVBTFA7QUFNRSxpQkFBSyxFQUFDLE9BTlI7QUFPRSxnQkFBSSxFQUFDLFVBUFA7QUFRRSxjQUFFLEVBQUMsVUFSTDtBQVNFLHdCQUFZLEVBQUMsa0JBVGY7QUFVRSxpQkFBSyxFQUFFYixRQVZUO0FBV0Usb0JBQVEsRUFBRSxrQkFBQ1MsS0FBRDtBQUFBLHFCQUNSUixXQUFXLENBQUNRLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxXQUFuQixFQUFELENBREg7QUFBQTtBQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckJGLGVBb0NFLHFFQUFDLHdEQUFEO0FBQ0UsZ0JBQUksRUFBQyxRQURQO0FBRUUscUJBQVMsTUFGWDtBQUdFLG1CQUFPLEVBQUMsV0FIVjtBQUlFLGlCQUFLLEVBQUMsU0FKUjtBQUtFLHFCQUFTLEVBQUVULE9BQU8sQ0FBQ1QsTUFMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnRUQ7O0dBL0V1QkMsVztVQUdKTSxzRCxFQUNGL0IsUzs7O0tBSk15QixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXByYXMuZjg1ZWU2ZWVkNjJmZmE2YTU1OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENzc0Jhc2VsaW5lLFxyXG4gIEdyaWQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBQYXBlcixcclxuICBUZXh0RmllbGQsXHJcbiAgVHlwb2dyYXBoeSxcclxuICB1c2VUaGVtZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hdXRoXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHJnYmEoMzUsIDUzLCA3MiwgMC41KSwgcmdiYSgzNSwgNTMsIDcyLCAwLjUpKSwgdXJsKC9pbWFnZXMvbG9naW4tYmcud2ViKSBjZW50ZXIgbm8tcmVwZWF0YCxcclxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgfSxcclxuICBsb2dvSW1hZ2U6IHtcclxuICAgIHdpZHRoOiBcIjMwMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjJyZW1cIixcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoOCwgNCksXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgYXZhdGFyOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsIC8vIEZpeCBJRSAxMSBpc3N1ZS5cclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIHN1Ym1pdDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luU2NyZWVuKCkge1xyXG4gIGNvbnN0IFt1c3VhcmlvLCBzZXRVc3VhcmlvXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IHsgbG9naW4gfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGFPYmplY3QgPSB7XHJcbiAgICAgIGxvZ2luOiB1c3VhcmlvLFxyXG4gICAgICBzZW5oYTogcGFzc3dvcmQsXHJcbiAgICB9O1xyXG5cclxuICAgIGxvZ2luKGRhdGFPYmplY3QubG9naW4sIGRhdGFPYmplY3Quc2VuaGEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBzbT17NH0gbWQ9ezd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0gLz5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBtZD17NX0gY29tcG9uZW50PXtQYXBlcn0gZWxldmF0aW9uPXs2fSBzcXVhcmU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0ltYWdlfVxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2dhbmVzYUJsdWUucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwiR2FuZXNhXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgb25TdWJtaXQ9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfVxyXG4gICAgICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlVzdcOhcmlvXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICB2YWx1ZT17dXN1YXJpb31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRVc3VhcmlvKGV2ZW50LnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZW5oYVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEVudHJhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==