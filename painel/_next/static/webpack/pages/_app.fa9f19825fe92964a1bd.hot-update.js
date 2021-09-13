webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Header/styles.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Header/styles.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".styles_headerInfo__3YwCN {\n  display: flex;\n  align-items: center;\n}\n.styles_headerInfo__3YwCN svg {\n  cursor: pointer;\n}\n@media (max-width: 600px) {\n  .styles_headerInfo__3YwCN {\n    font-size: 0.8rem;\n    margin-left: auto;\n  }\n}\n\n.styles_headerUserInfo__3V3Pf {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 1rem;\n}\n\n.styles_sidebarUl__35cRi li {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.styles_test__VO4mx {\n  width: 240;\n}\n\n.styles_headermenutooltip__3ZrZ7 {\n  background: rgba(35, 53, 72, 0.8);\n  border: 1px solid var(--ganesa-golden);\n  color: var(--ganesa-white);\n  border-radius: 10px;\n  padding: 6px 12px;\n}", "",{"version":3,"sources":["webpack://styles.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;AACF;AACE;EACE,eAAA;AACJ;AAEE;EARF;IASI,iBAAA;IACA,iBAAA;EACF;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,kBAAA;AAAF;;AAIE;EACE,qBAAA;EACA,oBAAA;AADJ;;AAKA;EACE,UAAA;AAFF;;AAKA;EACE,iCAAA;EACA,sCAAA;EACA,0BAAA;EACA,mBAAA;EACA,iBAAA;AAFF","sourcesContent":[".headerInfo {\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  svg {\r\n    cursor: pointer;\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    font-size: 0.8rem;\r\n    margin-left: auto;\r\n  }\r\n}\r\n\r\n.headerUserInfo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  margin-right: 1rem;\r\n}\r\n\r\n.sidebarUl {\r\n  li {\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n  }\r\n}\r\n\r\n.test {\r\n  width: 240;\r\n}\r\n\r\n.headermenutooltip {\r\n  background: rgba(35, 53, 72, 0.8);\r\n  border: 1px solid var(--ganesa-golden);\r\n  color: var(--ganesa-white);\r\n  border-radius: 10px;\r\n  padding: 6px 12px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"headerInfo": "styles_headerInfo__3YwCN",
	"headerUserInfo": "styles_headerUserInfo__3V3Pf",
	"sidebarUl": "styles_sidebarUl__35cRi",
	"test": "styles_test__VO4mx",
	"headermenutooltip": "styles_headermenutooltip__3ZrZ7"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-sticky-mouse-tooltip */ "./node_modules/react-sticky-mouse-tooltip/dist/MouseTooltip.js");
/* harmony import */ var react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");




var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\components\\Header\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  var _drawerClose;

  return {
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginRight: 36
    }, "@media (max-width: 600px)", {
      marginRight: "1rem"
    }),
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      background: "#233548"
    },
    drawerOpen: {
      width: drawerWidth,
      background: "#233548",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      paddingTop: "1em",
      "&::-webkit-scrollbar": {
        width: 4
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(221, 154, 66, 0.7)",
        outline: "1px solid slategrey"
      }
    },
    drawerBackground: {
      background: "#233548"
    },
    drawerClose: (_drawerClose = {
      background: "#233548",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1
    }, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, theme.breakpoints.up("sm"), {
      width: theme.spacing(8) + 1
    }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "paddingTop", "1em"), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "&::-webkit-scrollbar", {
      width: 4
    }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "&::-webkit-scrollbar-track", {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)"
    }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "&::-webkit-scrollbar-thumb", {
      backgroundColor: "rgba(221, 154, 66, 0.7)",
      outline: "1px solid slategrey"
    }), _drawerClose),
    toolbar: _objectSpread({
      display: "flex",
      height: "84px",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1
    },
    link: Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      margin: "0 0 0 auto"
    }, "@media (max-width: 600px)", {
      visibility: "hidden",
      opacity: 0,
      display: "none"
    }),
    logo: {
      margin: "0 0 0 auto",
      width: "250px",
      height: "auto"
    },
    mobLogo: {
      margin: "0 0 0 auto",
      width: "140px",
      height: "auto"
    },
    shiftTextLeft: {
      marginLeft: "0px"
    },
    shiftTextRight: {
      marginLeft: drawerWidth
    }
  };
});
function Header(_ref) {
  _s();

  var _clsx3, _user$permissions;

  var open = _ref.open,
      handleDrawerOpen = _ref.handleDrawerOpen,
      handleDrawerClose = _ref.handleDrawerClose;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      toggleMouseTooltip = _useState[0],
      setToggleMouseTooltip = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      titleTooltip = _useState2[0],
      setTitleTooltip = _useState2[1];

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_15__["useAuth"])(),
      logout = _useAuth.logout,
      user = _useAuth.user,
      filialPrincipal = _useAuth.filialPrincipal;

  var windowSize = window.innerWidth;
  var maxMobSize = 700;

  var handleMouseToogleTooltip = function handleMouseToogleTooltip(state, title) {
    if (!open) {
      setTitleTooltip(title);
      setToggleMouseTooltip(state);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
      position: "fixed",
      style: {
        background: "#233548",
        padding: "0.6rem 0.6rem"
      },
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.appBar, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.appBarShift, open)),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          edge: "start",
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.menuButton, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.hide, open)),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiMenu"], {
            color: "#DD9A42",
            size: 30
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.headerInfo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.headerUserInfo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.spanUser,
              children: user.USUARIO
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.spanFilial,
              children: "".concat(filialPrincipal.CODEMPRESA, " - ").concat(filialPrincipal.NOMERED)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
            onClick: logout,
            size: 20,
            color: "#f4f4f4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          className: classes.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: windowSize > maxMobSize ? classes.logo : classes.mobLogo,
            src: "/images/utilitarios-logo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, this), windowSize > maxMobSize ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "permanent",
      classes: {
        paper: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])((_clsx3 = {}, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx3, classes.drawerOpen, open), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx3, classes.drawerClose, !open), _clsx3))
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.toolbar,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          onClick: handleDrawerClose,
          children: theme.direction === "rtl" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronRight"], {
            color: "#DD9A42"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 17
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronLeft"], {
            color: "#DD9A42"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "sideBar-ul",
        children: [(user === null || user === void 0 ? void 0 : user.permissions.consultarProdutos) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-produto",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Consultar Produto");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSearch"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Consultar Produtos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.parametrosGerais) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/parametros-gerais",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Parâmetros Gerais");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiTool"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Parâmetros Gerais"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/gerar-cod-barras",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Gerar Código de Barras");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineBarcode"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Gerar Código de Barras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.contasAReceber) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/receber",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Contas a Receber");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegMoneyBillAlt"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Contas a Receber"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.alteraAdmConvenio) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/altera-adm-convenio",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Alterar Adm. de Convênio");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiCreditCard"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 356,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Alterar Adm. Convênio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.digitacaoInventario) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/digitacao-inventario",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Digitação de Inventário");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiEdit"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 380,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Digitação de Inventário"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.consultarInventarios) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-inventarios",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Consultar Inventários");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiList"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 402,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 401,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Consultar Inventários"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 392,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.comprasRequisitar) !== "SEM_ACESSO" && (user === null || user === void 0 ? void 0 : user.permissions.comprasConsultar) !== "SEM_ACESSO" && (user === null || user === void 0 ? void 0 : user.permissions.comprasPainelDoComprador) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/compras",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Compras");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiDollarSign"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 426,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 428,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 416,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 17
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.demandarReposicao) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/demandar-reposicao",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Demandar Reposição");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiPackage"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 448,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 447,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Demandar Reposição"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 450,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 438,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.visualizarReposicoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-reposicoes",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Consultar Reposições");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiGrid"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 470,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 469,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Visualizar Reposições"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 460,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.configuracoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/configuracoes",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Configurações");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSettings"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 494,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 493,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Configurações"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 496,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 484,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : (_user$permissions = user.permissions) === null || _user$permissions === void 0 ? void 0 : _user$permissions.permissoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/permissoes",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Permissões");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiUser"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 516,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 515,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Permissões"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 518,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 506,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 505,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          style: {
            cursor: "pointer "
          },
          onClick: logout,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Sair");
            },
            onMouseLeave: function onMouseLeave() {
              handleMouseToogleTooltip(false, "");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 534,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 533,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Sair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 536,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 527,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13___default.a, {
        style: {
          zIndex: 2147483647
        },
        visible: toggleMouseTooltip,
        offsetX: 15,
        offsetY: 10,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.headermenutooltip,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: titleTooltip
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 550,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      classes: {
        paper: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.drawerBackground)
      },
      variant: "temporary",
      anchor: "top",
      open: open,
      onClose: handleDrawerClose,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "sideBar-ul",
        children: [(user === null || user === void 0 ? void 0 : user.permissions.consultarProdutos) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-produto",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSearch"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 569,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 568,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Consultar Produtos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 571,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 567,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.digitacaoInventario) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/digitacao-inventario",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiEdit"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 582,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 581,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Digitação de Inventário"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 584,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 580,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.comprasRequisitar) !== "SEM_ACESSO" || (user === null || user === void 0 ? void 0 : user.permissions.comprasConsultar) !== "SEM_ACESSO" || (user === null || user === void 0 ? void 0 : user.permissions.comprasPainelDoComprador) !== "SEM_ACESSO" || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/compras",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiDollarSign"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 595,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 594,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 597,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 593,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 592,
          columnNumber: 17
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.demandarReposicao) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/demandar-reposicao",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiPackage"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 606,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 605,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Demandar Reposição"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 608,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 604,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          onClick: logout,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 617,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 616,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Sair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 619,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 615,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Header, "K4wk0HhBKy34Yy9o00aUp2lMNZw=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"], _contexts_auth__WEBPACK_IMPORTED_MODULE_15__["useAuth"]];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiYXBwQmFyIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJhcHBCYXJTaGlmdCIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImVudGVyaW5nU2NyZWVuIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwiaGlkZSIsImZsZXhTaHJpbmsiLCJ3aGl0ZVNwYWNlIiwiYmFja2dyb3VuZCIsImRyYXdlck9wZW4iLCJwYWRkaW5nVG9wIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZSIsImRyYXdlckJhY2tncm91bmQiLCJkcmF3ZXJDbG9zZSIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwidG9vbGJhciIsImhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtaXhpbnMiLCJjb250ZW50IiwiZmxleEdyb3ciLCJsaW5rIiwibWFyZ2luIiwidmlzaWJpbGl0eSIsIm9wYWNpdHkiLCJsb2dvIiwibW9iTG9nbyIsInNoaWZ0VGV4dExlZnQiLCJzaGlmdFRleHRSaWdodCIsIkhlYWRlciIsIm9wZW4iLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vdXNlVG9vbHRpcCIsInNldFRvZ2dsZU1vdXNlVG9vbHRpcCIsInRpdGxlVG9vbHRpcCIsInNldFRpdGxlVG9vbHRpcCIsInVzZUF1dGgiLCJsb2dvdXQiLCJ1c2VyIiwiZmlsaWFsUHJpbmNpcGFsIiwid2luZG93U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhNb2JTaXplIiwiaGFuZGxlTW91c2VUb29nbGVUb29sdGlwIiwic3RhdGUiLCJ0aXRsZSIsImNsc3giLCJzdHlsZXMiLCJoZWFkZXJJbmZvIiwiaGVhZGVyVXNlckluZm8iLCJzcGFuVXNlciIsIlVTVUFSSU8iLCJzcGFuRmlsaWFsIiwiQ09ERU1QUkVTQSIsIk5PTUVSRUQiLCJwYXBlciIsImRpcmVjdGlvbiIsInBlcm1pc3Npb25zIiwiY29uc3VsdGFyUHJvZHV0b3MiLCJwYXJhbWV0cm9zR2VyYWlzIiwiY29udGFzQVJlY2ViZXIiLCJhbHRlcmFBZG1Db252ZW5pbyIsImRpZ2l0YWNhb0ludmVudGFyaW8iLCJjb25zdWx0YXJJbnZlbnRhcmlvcyIsImNvbXByYXNSZXF1aXNpdGFyIiwiY29tcHJhc0NvbnN1bHRhciIsImNvbXByYXNQYWluZWxEb0NvbXByYWRvciIsImRlbWFuZGFyUmVwb3NpY2FvIiwidmlzdWFsaXphclJlcG9zaWNvZXMiLCJjb25maWd1cmFjb2VzIiwicGVybWlzc29lcyIsImN1cnNvciIsImhlYWRlcm1lbnV0b29sdGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsOEJBQThCLGtCQUFrQix3QkFBd0IsR0FBRyxpQ0FBaUMsb0JBQW9CLEdBQUcsNkJBQTZCLCtCQUErQix3QkFBd0Isd0JBQXdCLEtBQUssR0FBRyxtQ0FBbUMsa0JBQWtCLDJCQUEyQix3QkFBd0IsdUJBQXVCLEdBQUcsaUNBQWlDLDBCQUEwQix5QkFBeUIsR0FBRyx5QkFBeUIsZUFBZSxHQUFHLHNDQUFzQyxzQ0FBc0MsMkNBQTJDLCtCQUErQix3QkFBd0Isc0JBQXNCLEdBQUcsT0FBTyxtRkFBbUYsVUFBVSxX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QUE7QUFBQTtBQUFBO0FBQUEsZ0JBaERGLGVBa0RFLHFFQUFDLDBEQUFEO0FBQVUsaUJBQU8sRUFBRS9CLE1BQW5CO0FBQUEsaUNBQ0U7QUFBQSxvQ0FDRSxxRUFBQyw4REFBRDtBQUFBLHFDQUNFLHFFQUFDLHVEQUFEO0FBQVUsb0JBQUksRUFBRSxFQUFoQjtBQUFvQixxQkFBSyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBSUUscUVBQUMsOERBQUQ7QUFBYyxxQkFBTyxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhYSjtBQUFBLGtCQURGO0FBeWJEOztHQS9jdUJaLE07VUFLTnBELFMsRUFDRnlELGlFLEVBSTRCTSx1RDs7O0tBVnBCWCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmE5ZjE5ODI1ZmU5Mjk2NGExYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZXNfaGVhZGVySW5mb19fM1l3Q04ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdHlsZXNfaGVhZGVySW5mb19fM1l3Q04gc3ZnIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuc3R5bGVzX2hlYWRlckluZm9fXzNZd0NOIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcbn1cXG5cXG4uc3R5bGVzX2hlYWRlclVzZXJJbmZvX18zVjNQZiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5zdHlsZXNfc2lkZWJhclVsX18zNWNSaSBsaSB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG59XFxuXFxuLnN0eWxlc190ZXN0X19WTzRteCB7XFxuICB3aWR0aDogMjQwO1xcbn1cXG5cXG4uc3R5bGVzX2hlYWRlcm1lbnV0b29sdGlwX18zWnJaNyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDM1LCA1MywgNzIsIDAuOCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nYW5lc2EtZ29sZGVuKTtcXG4gIGNvbG9yOiB2YXIoLS1nYW5lc2Etd2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7QUFDSjtBQUVFO0VBUkY7SUFTSSxpQkFBQTtJQUNBLGlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUFBRjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFLQTtFQUNFLFVBQUE7QUFGRjs7QUFLQTtFQUNFLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVySW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHN2ZyB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJVc2VySW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyVWwge1xcclxcbiAgbGkge1xcclxcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGVzdCB7XFxyXFxuICB3aWR0aDogMjQwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVybWVudXRvb2x0aXAge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgzNSwgNTMsIDcyLCAwLjgpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ2FuZXNhLWdvbGRlbik7XFxyXFxuICBjb2xvcjogdmFyKC0tZ2FuZXNhLXdoaXRlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGVhZGVySW5mb1wiOiBcInN0eWxlc19oZWFkZXJJbmZvX18zWXdDTlwiLFxuXHRcImhlYWRlclVzZXJJbmZvXCI6IFwic3R5bGVzX2hlYWRlclVzZXJJbmZvX18zVjNQZlwiLFxuXHRcInNpZGViYXJVbFwiOiBcInN0eWxlc19zaWRlYmFyVWxfXzM1Y1JpXCIsXG5cdFwidGVzdFwiOiBcInN0eWxlc190ZXN0X19WTzRteFwiLFxuXHRcImhlYWRlcm1lbnV0b29sdGlwXCI6IFwic3R5bGVzX2hlYWRlcm1lbnV0b29sdGlwX18zWnJaN1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7XHJcbiAgQXBwQmFyLFxyXG4gIEljb25CdXR0b24sXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBUb29sYmFyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGYVJlZ01vbmV5QmlsbEFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQge1xyXG4gIEZpQ2hldnJvbkxlZnQsXHJcbiAgRmlDaGV2cm9uUmlnaHQsXHJcbiAgRmlEb2xsYXJTaWduLFxyXG4gIEZpRWRpdCxcclxuICBGaUdyaWQsXHJcbiAgRmlMaXN0LFxyXG4gIEZpTG9nT3V0LFxyXG4gIEZpTWVudSxcclxuICBGaVBhY2thZ2UsXHJcbiAgRmlTZWFyY2gsXHJcbiAgRmlTZXR0aW5ncyxcclxuICBGaVRvb2wsXHJcbiAgRmlVc2VyLFxyXG4gIEZpQ3JlZGl0Q2FyZCxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lQmFyY29kZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IE1vdXNlVG9vbFRpcCBmcm9tIFwicmVhY3Qtc3RpY2t5LW1vdXNlLXRvb2x0aXBcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGhcIjtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIGFwcEJhcjoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbXCJ3aWR0aFwiLCBcIm1hcmdpblwiXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGFwcEJhclNoaWZ0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFtcIndpZHRoXCIsIFwibWFyZ2luXCJdLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiAzNixcclxuICAgIFtcIkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweClcIl06IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMXJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhpZGU6IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzIzMzU0OFwiLFxyXG4gIH0sXHJcbiAgZHJhd2VyT3Blbjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgYmFja2dyb3VuZDogXCIjMjMzNTQ4XCIsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIHBhZGRpbmdUb3A6IFwiMWVtXCIsXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyXCI6IHtcclxuICAgICAgd2lkdGg6IDQsXHJcbiAgICB9LFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10cmFja1wiOiB7XHJcbiAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpYCxcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjIxLCAxNTQsIDY2LCAwLjcpXCIsXHJcbiAgICAgIG91dGxpbmU6IGAxcHggc29saWQgc2xhdGVncmV5YCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkcmF3ZXJCYWNrZ3JvdW5kOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMzM1NDhcIixcclxuICB9LFxyXG4gIGRyYXdlckNsb3NlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMzM1NDhcIixcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSArIDEsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOCkgKyAxLFxyXG4gICAgfSxcclxuICAgIHBhZGRpbmdUb3A6IFwiMWVtXCIsXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyXCI6IHtcclxuICAgICAgd2lkdGg6IDQsXHJcbiAgICB9LFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10cmFja1wiOiB7XHJcbiAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpYCxcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjIxLCAxNTQsIDY2LCAwLjcpXCIsXHJcbiAgICAgIG91dGxpbmU6IGAxcHggc29saWQgc2xhdGVncmV5YCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0b29sYmFyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGhlaWdodDogXCI4NHB4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgICAvLyBuZWNlc3NhcnkgZm9yIGNvbnRlbnQgdG8gYmUgYmVsb3cgYXBwIGJhclxyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIG1hcmdpbjogXCIwIDAgMCBhdXRvXCIsXHJcbiAgICBbXCJAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpXCJdOiB7XHJcbiAgICAgIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIG1hcmdpbjogXCIwIDAgMCBhdXRvXCIsXHJcbiAgICB3aWR0aDogXCIyNTBweFwiLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICB9LFxyXG4gIG1vYkxvZ286IHtcclxuICAgIG1hcmdpbjogXCIwIDAgMCBhdXRvXCIsXHJcbiAgICB3aWR0aDogXCIxNDBweFwiLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICB9LFxyXG4gIHNoaWZ0VGV4dExlZnQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6IFwiMHB4XCIsXHJcbiAgfSxcclxuICBzaGlmdFRleHRSaWdodDoge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcclxuICBvcGVuOiBib29sZWFuO1xyXG4gIGhhbmRsZURyYXdlck9wZW46ICgpID0+IHZvaWQ7XHJcbiAgaGFuZGxlRHJhd2VyQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7XHJcbiAgb3BlbixcclxuICBoYW5kbGVEcmF3ZXJPcGVuLFxyXG4gIGhhbmRsZURyYXdlckNsb3NlLFxyXG59OiBIZWFkZXJQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIGNvbnN0IFt0b2dnbGVNb3VzZVRvb2x0aXAsIHNldFRvZ2dsZU1vdXNlVG9vbHRpcF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3RpdGxlVG9vbHRpcCwgc2V0VGl0bGVUb29sdGlwXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgeyBsb2dvdXQsIHVzZXIsIGZpbGlhbFByaW5jaXBhbCB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCB3aW5kb3dTaXplID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY29uc3QgbWF4TW9iU2l6ZSA9IDcwMDtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwID0gKHN0YXRlOiBib29sZWFuLCB0aXRsZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIW9wZW4pIHtcclxuICAgICAgc2V0VGl0bGVUb29sdGlwKHRpdGxlKTtcclxuICAgICAgc2V0VG9nZ2xlTW91c2VUb29sdGlwKHN0YXRlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxBcHBCYXJcclxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjMjMzNTQ4XCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjAuNnJlbSAwLjZyZW1cIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmFwcEJhciwge1xyXG4gICAgICAgICAgW2NsYXNzZXMuYXBwQmFyU2hpZnRdOiBvcGVuLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm1lbnVCdXR0b24sIHtcclxuICAgICAgICAgICAgICBbY2xhc3Nlcy5oaWRlXTogb3BlbixcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGaU1lbnUgY29sb3I9XCIjREQ5QTQyXCIgc2l6ZT17MzB9IC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVySW5mb30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJVc2VySW5mb30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGFuVXNlcn0+e3VzZXIuVVNVQVJJT308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGFuRmlsaWFsfT5cclxuICAgICAgICAgICAgICAgICAge2Ake2ZpbGlhbFByaW5jaXBhbC5DT0RFTVBSRVNBfSAtICR7ZmlsaWFsUHJpbmNpcGFsLk5PTUVSRUR9YH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8RmlMb2dPdXQgb25DbGljaz17bG9nb3V0fSBzaXplPXsyMH0gY29sb3I9XCIjZjRmNGY0XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgd2luZG93U2l6ZSA+IG1heE1vYlNpemUgPyBjbGFzc2VzLmxvZ28gOiBjbGFzc2VzLm1vYkxvZ29cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy91dGlsaXRhcmlvcy1sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAge3dpbmRvd1NpemUgPiBtYXhNb2JTaXplID8gKFxyXG4gICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG4gICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICBwYXBlcjogY2xzeCh7XHJcbiAgICAgICAgICAgICAgW2NsYXNzZXMuZHJhd2VyT3Blbl06IG9wZW4sXHJcbiAgICAgICAgICAgICAgW2NsYXNzZXMuZHJhd2VyQ2xvc2VdOiAhb3BlbixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX0+XHJcbiAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIiA/IChcclxuICAgICAgICAgICAgICAgIDxGaUNoZXZyb25SaWdodCBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8RmlDaGV2cm9uTGVmdCBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPExpc3QgY2xhc3NOYW1lPVwic2lkZUJhci11bFwiPlxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29uc3VsdGFyUHJvZHV0b3MgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2NvbnN1bHRhci1wcm9kdXRvXCJcclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcCh0cnVlLCBcIkNvbnN1bHRhciBQcm9kdXRvXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKGZhbHNlLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlTZWFyY2ggc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiQ29uc3VsdGFyIFByb2R1dG9zXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5wYXJhbWV0cm9zR2VyYWlzICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wYXJhbWV0cm9zLWdlcmFpc1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAodHJ1ZSwgXCJQYXLDom1ldHJvcyBHZXJhaXNcIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAoZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVRvb2wgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiUGFyw6JtZXRyb3MgR2VyYWlzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9nZXJhci1jb2QtYmFycmFzXCJcclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiR2VyYXIgQ8OzZGlnbyBkZSBCYXJyYXNcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAoZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lQmFyY29kZSBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiR2VyYXIgQ8OzZGlnbyBkZSBCYXJyYXNcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbnRhc0FSZWNlYmVyICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yZWNlYmVyXCJcclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcCh0cnVlLCBcIkNvbnRhcyBhIFJlY2ViZXJcIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAoZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYVJlZ01vbmV5QmlsbEFsdCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJDb250YXMgYSBSZWNlYmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5hbHRlcmFBZG1Db252ZW5pbyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYWx0ZXJhLWFkbS1jb252ZW5pb1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAodHJ1ZSwgXCJBbHRlcmFyIEFkbS4gZGUgQ29udsOqbmlvXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKGZhbHNlLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlDcmVkaXRDYXJkIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkFsdGVyYXIgQWRtLiBDb252w6puaW9cIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5kaWdpdGFjYW9JbnZlbnRhcmlvICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9kaWdpdGFjYW8taW52ZW50YXJpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAodHJ1ZSwgXCJEaWdpdGHDp8OjbyBkZSBJbnZlbnTDoXJpb1wiKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcChmYWxzZSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpRWRpdCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJEaWdpdGHDp8OjbyBkZSBJbnZlbnTDoXJpb1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29uc3VsdGFySW52ZW50YXJpb3MgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2NvbnN1bHRhci1pbnZlbnRhcmlvc1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAodHJ1ZSwgXCJDb25zdWx0YXIgSW52ZW50w6FyaW9zXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKGZhbHNlLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlMaXN0IHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkNvbnN1bHRhciBJbnZlbnTDoXJpb3NcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNSZXF1aXNpdGFyICE9PSBcIlNFTV9BQ0VTU09cIiAmJlxyXG4gICAgICAgICAgICAgIHVzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNDb25zdWx0YXIgIT09IFwiU0VNX0FDRVNTT1wiICYmXHJcbiAgICAgICAgICAgICAgdXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc1BhaW5lbERvQ29tcHJhZG9yICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9jb21wcmFzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAodHJ1ZSwgXCJDb21wcmFzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKGZhbHNlLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGaURvbGxhclNpZ24gc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJDb21wcmFzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmRlbWFuZGFyUmVwb3NpY2FvICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9kZW1hbmRhci1yZXBvc2ljYW9cIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiRGVtYW5kYXIgUmVwb3Npw6fDo29cIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAoZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVBhY2thZ2Ugc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiRGVtYW5kYXIgUmVwb3Npw6fDo29cIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLnZpc3VhbGl6YXJSZXBvc2ljb2VzICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9jb25zdWx0YXItcmVwb3NpY29lc1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAodHJ1ZSwgXCJDb25zdWx0YXIgUmVwb3Npw6fDtWVzXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKGZhbHNlLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlHcmlkIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIlZpc3VhbGl6YXIgUmVwb3Npw6fDtWVzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29uZmlndXJhY29lcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29uZmlndXJhY29lc1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAodHJ1ZSwgXCJDb25maWd1cmHDp8O1ZXNcIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAoZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVNldHRpbmdzIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkNvbmZpZ3VyYcOnw7Vlc1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnM/LnBlcm1pc3NvZXMgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL3Blcm1pc3NvZXNcIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiUGVybWlzc8O1ZXNcIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAoZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVVzZXIgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiUGVybWlzc8O1ZXNcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyIFwiIH19IG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiU2FpclwiKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAoZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8RmlMb2dPdXQgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIlNhaXJcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPE1vdXNlVG9vbFRpcFxyXG4gICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDIxNDc0ODM2NDcgfX1cclxuICAgICAgICAgICAgdmlzaWJsZT17dG9nZ2xlTW91c2VUb29sdGlwfVxyXG4gICAgICAgICAgICBvZmZzZXRYPXsxNX1cclxuICAgICAgICAgICAgb2Zmc2V0WT17MTB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVybWVudXRvb2x0aXB9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt0aXRsZVRvb2x0aXB9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTW91c2VUb29sVGlwPlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcGFwZXI6IGNsc3goY2xhc3Nlcy5kcmF3ZXJCYWNrZ3JvdW5kKSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcclxuICAgICAgICAgIGFuY2hvcj1cInRvcFwiXHJcbiAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3QgY2xhc3NOYW1lPVwic2lkZUJhci11bFwiPlxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29uc3VsdGFyUHJvZHV0b3MgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbnN1bHRhci1wcm9kdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpU2VhcmNoIHNpemU9ezMwfSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtcIkNvbnN1bHRhciBQcm9kdXRvc1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmRpZ2l0YWNhb0ludmVudGFyaW8gIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RpZ2l0YWNhby1pbnZlbnRhcmlvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpRWRpdCBzaXplPXszMH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17XCJEaWdpdGHDp8OjbyBkZSBJbnZlbnTDoXJpb1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc1JlcXVpc2l0YXIgIT09IFwiU0VNX0FDRVNTT1wiIHx8XHJcbiAgICAgICAgICAgICAgdXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc0NvbnN1bHRhciAhPT0gXCJTRU1fQUNFU1NPXCIgfHxcclxuICAgICAgICAgICAgICB1c2VyPy5wZXJtaXNzaW9ucy5jb21wcmFzUGFpbmVsRG9Db21wcmFkb3IgIT09IFwiU0VNX0FDRVNTT1wiIHx8IChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb21wcmFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGaURvbGxhclNpZ24gc2l6ZT17MzB9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtcIkNvbXByYXNcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmRlbWFuZGFyUmVwb3NpY2FvICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9kZW1hbmRhci1yZXBvc2ljYW9cIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlQYWNrYWdlIHNpemU9ezMwfSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtcIkRlbWFuZGFyIFJlcG9zacOnw6NvXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPEZpTG9nT3V0IHNpemU9ezMwfSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e1wiU2FpclwifSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==