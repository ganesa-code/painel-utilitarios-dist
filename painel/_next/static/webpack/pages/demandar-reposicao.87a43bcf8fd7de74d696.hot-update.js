webpackHotUpdate_N_E("pages/demandar-reposicao",{

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
      background: "linear-gradient(rgba(35, 53, 72, 0.5), rgba(35, 53, 72, 0.5)), url(/images/login-bg.jpg) center no-repeat",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiaGVpZ2h0IiwiaW1hZ2UiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJsb2dvSW1hZ2UiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsInBhcGVyIiwibWFyZ2luIiwic3BhY2luZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImF2YXRhciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiZm9ybSIsIm1hcmdpblRvcCIsInN1Ym1pdCIsIkxvZ2luU2NyZWVuIiwidXNlU3RhdGUiLCJ1c3VhcmlvIiwic2V0VXN1YXJpbyIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VBdXRoIiwibG9naW4iLCJjbGFzc2VzIiwiaGFuZGxlU3VibWl0IiwiZGF0YU9iamVjdCIsInNlbmhhIiwiUGFwZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLFlBQU0sRUFBRTtBQURKLEtBRGlDO0FBSXZDQyxTQUFLLEVBQUU7QUFDTEMsZ0JBQVUsNkdBREw7QUFFTEMsb0JBQWMsRUFBRTtBQUZYLEtBSmdDO0FBUXZDQyxhQUFTLEVBQUU7QUFDVEMsV0FBSyxFQUFFLE9BREU7QUFFVEwsWUFBTSxFQUFFLE1BRkM7QUFHVE0sa0JBQVksRUFBRTtBQUhMLEtBUjRCO0FBYXZDQyxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFVixLQUFLLENBQUNXLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBREg7QUFFTEMsYUFBTyxFQUFFLE1BRko7QUFHTEMsbUJBQWEsRUFBRSxRQUhWO0FBSUxDLGdCQUFVLEVBQUU7QUFKUCxLQWJnQztBQW1CdkNDLFVBQU0sRUFBRTtBQUNOTCxZQUFNLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjLENBQWQsQ0FERjtBQUVOSyxxQkFBZSxFQUFFaEIsS0FBSyxDQUFDaUIsT0FBTixDQUFjQyxTQUFkLENBQXdCQztBQUZuQyxLQW5CK0I7QUF1QnZDQyxRQUFJLEVBQUU7QUFDSmIsV0FBSyxFQUFFLE1BREg7QUFDVztBQUNmYyxlQUFTLEVBQUVyQixLQUFLLENBQUNXLE9BQU4sQ0FBYyxDQUFkO0FBRlAsS0F2QmlDO0FBMkJ2Q1csVUFBTSxFQUFFO0FBQ05aLFlBQU0sRUFBRVYsS0FBSyxDQUFDVyxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQjtBQURGO0FBM0IrQixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQWdDZSxTQUFTWSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ05DLHNEQUFRLENBQVMsRUFBVCxDQURGO0FBQUEsTUFDN0JDLE9BRDZCO0FBQUEsTUFDcEJDLFVBRG9COztBQUFBLG1CQUVKRixzREFBUSxDQUFTLEVBQVQsQ0FGSjtBQUFBLE1BRTdCRyxRQUY2QjtBQUFBLE1BRW5CQyxXQUZtQjs7QUFBQSxpQkFHbEJDLDhEQUFPLEVBSFc7QUFBQSxNQUc1QkMsS0FINEIsWUFHNUJBLEtBSDRCOztBQUlwQyxNQUFNQyxPQUFPLEdBQUdqQyxTQUFTLEVBQXpCOztBQUVBLE1BQU1rQyxZQUFZO0FBQUEsNFhBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JDLHdCQURhLEdBQ0E7QUFDakJILHFCQUFLLEVBQUVMLE9BRFU7QUFFakJTLHFCQUFLLEVBQUVQO0FBRlUsZUFEQTtBQU1uQkcsbUJBQUssQ0FBQ0csVUFBVSxDQUFDSCxLQUFaLEVBQW1CRyxVQUFVLENBQUNDLEtBQTlCLENBQUw7O0FBTm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpGLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBU0Esc0JBQ0UscUVBQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLE1BQTFCO0FBQWlDLGFBQVMsRUFBRUQsT0FBTyxDQUFDOUIsSUFBcEQ7QUFBQSw0QkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxzREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxLQUFmO0FBQXNCLFFBQUUsRUFBRSxDQUExQjtBQUE2QixRQUFFLEVBQUUsQ0FBakM7QUFBb0MsZUFBUyxFQUFFOEIsT0FBTyxDQUFDNUI7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsc0RBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUUsQ0FBdkI7QUFBMEIsUUFBRSxFQUFFLENBQTlCO0FBQWlDLGVBQVMsRUFBRWdDLHVEQUE1QztBQUFtRCxlQUFTLEVBQUUsQ0FBOUQ7QUFBaUUsWUFBTSxNQUF2RTtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUosT0FBTyxDQUFDdEIsS0FBeEI7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUVzQixPQUFPLENBQUN6QixTQURyQjtBQUVFLGFBQUcsRUFBQyx3QkFGTjtBQUdFLGFBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFNRSxxRUFBQyw0REFBRDtBQUFZLG1CQUFTLEVBQUMsSUFBdEI7QUFBMkIsaUJBQU8sRUFBQyxJQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQVNFO0FBQ0Usa0JBQVEsRUFBRSxrQkFBQzhCLEtBQUQsRUFBVztBQUNuQkEsaUJBQUssQ0FBQ0MsY0FBTjtBQUNBTCx3QkFBWTtBQUNiLFdBSkg7QUFLRSxtQkFBUyxFQUFFRCxPQUFPLENBQUNYLElBTHJCO0FBTUUsb0JBQVUsTUFOWjtBQUFBLGtDQVFFLHFFQUFDLDJEQUFEO0FBQ0UsbUJBQU8sRUFBQyxVQURWO0FBRUUsa0JBQU0sRUFBQyxRQUZUO0FBR0Usb0JBQVEsTUFIVjtBQUlFLHFCQUFTLE1BSlg7QUFLRSxjQUFFLEVBQUMsT0FMTDtBQU1FLGlCQUFLLEVBQUMsWUFOUjtBQU9FLGdCQUFJLEVBQUMsT0FQUDtBQVFFLHdCQUFZLEVBQUMsT0FSZjtBQVNFLHFCQUFTLE1BVFg7QUFVRSxpQkFBSyxFQUFFSyxPQVZUO0FBV0Usb0JBQVEsRUFBRSxrQkFBQ1csS0FBRDtBQUFBLHFCQUFXVixVQUFVLENBQUNVLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxXQUFuQixFQUFELENBQXJCO0FBQUE7QUFYWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGLGVBcUJFLHFFQUFDLDJEQUFEO0FBQ0UsbUJBQU8sRUFBQyxVQURWO0FBRUUsa0JBQU0sRUFBQyxRQUZUO0FBR0Usb0JBQVEsTUFIVjtBQUlFLHFCQUFTLE1BSlg7QUFLRSxnQkFBSSxFQUFDLFVBTFA7QUFNRSxpQkFBSyxFQUFDLE9BTlI7QUFPRSxnQkFBSSxFQUFDLFVBUFA7QUFRRSxjQUFFLEVBQUMsVUFSTDtBQVNFLHdCQUFZLEVBQUMsa0JBVGY7QUFVRSxpQkFBSyxFQUFFYixRQVZUO0FBV0Usb0JBQVEsRUFBRSxrQkFBQ1MsS0FBRDtBQUFBLHFCQUNSUixXQUFXLENBQUNRLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxXQUFuQixFQUFELENBREg7QUFBQTtBQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckJGLGVBb0NFLHFFQUFDLHdEQUFEO0FBQ0UsZ0JBQUksRUFBQyxRQURQO0FBRUUscUJBQVMsTUFGWDtBQUdFLG1CQUFPLEVBQUMsV0FIVjtBQUlFLGlCQUFLLEVBQUMsU0FKUjtBQUtFLHFCQUFTLEVBQUVULE9BQU8sQ0FBQ1QsTUFMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnRUQ7O0dBL0V1QkMsVztVQUdKTSxzRCxFQUNGL0IsUzs7O0tBSk15QixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RlbWFuZGFyLXJlcG9zaWNhby44N2E0M2JjZjhmZDdkZTc0ZDY5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ3NzQmFzZWxpbmUsXHJcbiAgR3JpZCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIFBhcGVyLFxyXG4gIFRleHRGaWVsZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIHVzZVRoZW1lLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGhcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQocmdiYSgzNSwgNTMsIDcyLCAwLjUpLCByZ2JhKDM1LCA1MywgNzIsIDAuNSkpLCB1cmwoL2ltYWdlcy9sb2dpbi1iZy5qcGcpIGNlbnRlciBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICB9LFxyXG4gIGxvZ29JbWFnZToge1xyXG4gICAgd2lkdGg6IFwiMzAwcHhcIixcclxuICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMnJlbVwiLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg4LCA0KSxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBhdmF0YXI6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICB9LFxyXG4gIGZvcm06IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIiwgLy8gRml4IElFIDExIGlzc3VlLlxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgc3VibWl0OiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5TY3JlZW4oKSB7XHJcbiAgY29uc3QgW3VzdWFyaW8sIHNldFVzdWFyaW9dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgeyBsb2dpbiB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YU9iamVjdCA9IHtcclxuICAgICAgbG9naW46IHVzdWFyaW8sXHJcbiAgICAgIHNlbmhhOiBwYXNzd29yZCxcclxuICAgIH07XHJcblxyXG4gICAgbG9naW4oZGF0YU9iamVjdC5sb2dpbiwgZGF0YU9iamVjdC5zZW5oYSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IHNtPXs0fSBtZD17N30gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfSAvPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IG1kPXs1fSBjb21wb25lbnQ9e1BhcGVyfSBlbGV2YXRpb249ezZ9IHNxdWFyZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvSW1hZ2V9XHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZ2FuZXNhQmx1ZS5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJHYW5lc2FcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19XHJcbiAgICAgICAgICAgIG5vVmFsaWRhdGVcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXN1w6FyaW9cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c3VhcmlvfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFVzdWFyaW8oZXZlbnQudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlNlbmhhXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRW50cmFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9