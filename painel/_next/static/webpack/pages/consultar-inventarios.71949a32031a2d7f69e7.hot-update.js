webpackHotUpdate_N_E("pages/consultar-inventarios",{

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

  var _clsx3, _jsxDEV2, _jsxDEV3, _jsxDEV4, _jsxDEV5, _user$permissions;

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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", (_jsxDEV2 = {
            href: "/parametros-gerais"
          }, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "href", "/consultar-produto"), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "onMouseEnter", function onMouseEnter() {
            return handleMouseToogleTooltip(true, "Parâmetros Gerais");
          }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "onMouseLeave", function onMouseLeave() {
            handleMouseToogleTooltip(false, "");
          }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "children", [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiTool"], {
              size: 28,
              color: "#DD9A42"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
            style: {
              whiteSpace: "nowrap"
            },
            primary: "Parâmetros Gerais"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 19
          }, this)]), _jsxDEV2), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", (_jsxDEV3 = {
            href: "/gerar-cod-barras"
          }, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV3, "href", "/consultar-produto"), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV3, "onMouseEnter", function onMouseEnter() {
            return handleMouseToogleTooltip(true, "Gerar Código de Barras");
          }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV3, "onMouseLeave", function onMouseLeave() {
            handleMouseToogleTooltip(false, "");
          }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV3, "children", [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineBarcode"], {
              size: 28,
              color: "#DD9A42"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
            style: {
              whiteSpace: "nowrap"
            },
            primary: "Gerar Código de Barras"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 17
          }, this)]), _jsxDEV3), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.contasAReceber) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", (_jsxDEV4 = {
            href: "/receber"
          }, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV4, "href", "/consultar-produto"), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV4, "onMouseEnter", function onMouseEnter() {
            return handleMouseToogleTooltip(true, "Contas a Receber");
          }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV4, "onMouseLeave", function onMouseLeave() {
            handleMouseToogleTooltip(false, "");
          }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV4, "children", [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegMoneyBillAlt"], {
              size: 28,
              color: "#DD9A42"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
            style: {
              whiteSpace: "nowrap"
            },
            primary: "Contas a Receber"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 19
          }, this)]), _jsxDEV4), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.alteraAdmConvenio) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", (_jsxDEV5 = {
            href: "/altera-adm-convenio"
          }, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV5, "href", "/consultar-produto"), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV5, "onMouseEnter", function onMouseEnter() {
            return handleMouseToogleTooltip(true, "Consultar Produto");
          }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV5, "onMouseLeave", function onMouseLeave() {
            handleMouseToogleTooltip(false, "");
          }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV5, "children", [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiCreditCard"], {
              size: 28,
              color: "#DD9A42"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
            style: {
              whiteSpace: "nowrap"
            },
            primary: "Alterar Adm. Convênio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 19
          }, this)]), _jsxDEV5), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.digitacaoInventario) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/digitacao-inventario",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiEdit"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Digitação de Inventário"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.consultarInventarios) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-inventarios",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiList"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 389,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Consultar Inventários"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.comprasRequisitar) !== "SEM_ACESSO" && (user === null || user === void 0 ? void 0 : user.permissions.comprasConsultar) !== "SEM_ACESSO" && (user === null || user === void 0 ? void 0 : user.permissions.comprasPainelDoComprador) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/compras",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiDollarSign"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 406,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 405,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 408,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 17
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.demandarReposicao) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/demandar-reposicao",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiPackage"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 420,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 419,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Demandar Reposição"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 422,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 418,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.visualizarReposicoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-reposicoes",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiGrid"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 434,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 433,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Visualizar Reposições"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 436,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.configuracoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/configuracoes",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSettings"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 450,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 449,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Configurações"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 452,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 447,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : (_user$permissions = user.permissions) === null || _user$permissions === void 0 ? void 0 : _user$permissions.permissoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/permissoes",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiUser"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 464,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 463,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Permissões"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 466,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 462,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          style: {
            cursor: "pointer "
          },
          onClick: logout,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 477,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 476,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Sair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 479,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 475,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 474,
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
          className: "observacao-compra",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: titleTooltip
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 493,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 492,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 486,
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
                lineNumber: 512,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 511,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Consultar Produtos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 514,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 510,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 519,
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
                lineNumber: 525,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 524,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Digitação de Inventário"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 527,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 523,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 522,
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
                lineNumber: 538,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 537,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 540,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 536,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 535,
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
                lineNumber: 549,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 548,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Demandar Reposição"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 551,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 547,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 555,
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
                lineNumber: 560,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 559,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Sair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 562,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 558,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 557,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 498,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiYXBwQmFyIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJhcHBCYXJTaGlmdCIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImVudGVyaW5nU2NyZWVuIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwiaGlkZSIsImZsZXhTaHJpbmsiLCJ3aGl0ZVNwYWNlIiwiYmFja2dyb3VuZCIsImRyYXdlck9wZW4iLCJwYWRkaW5nVG9wIiwiYm94U2hhZG93IiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZSIsImRyYXdlckJhY2tncm91bmQiLCJkcmF3ZXJDbG9zZSIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwidG9vbGJhciIsImhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtaXhpbnMiLCJjb250ZW50IiwiZmxleEdyb3ciLCJsaW5rIiwibWFyZ2luIiwidmlzaWJpbGl0eSIsIm9wYWNpdHkiLCJsb2dvIiwibW9iTG9nbyIsInNoaWZ0VGV4dExlZnQiLCJzaGlmdFRleHRSaWdodCIsIkhlYWRlciIsIm9wZW4iLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vdXNlVG9vbHRpcCIsInNldFRvZ2dsZU1vdXNlVG9vbHRpcCIsInRpdGxlVG9vbHRpcCIsInNldFRpdGxlVG9vbHRpcCIsInVzZUF1dGgiLCJsb2dvdXQiLCJ1c2VyIiwiZmlsaWFsUHJpbmNpcGFsIiwid2luZG93U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhNb2JTaXplIiwiaGFuZGxlTW91c2VUb29nbGVUb29sdGlwIiwic3RhdGUiLCJ0aXRsZSIsImNsc3giLCJzdHlsZXMiLCJoZWFkZXJJbmZvIiwiaGVhZGVyVXNlckluZm8iLCJzcGFuVXNlciIsIlVTVUFSSU8iLCJzcGFuRmlsaWFsIiwiQ09ERU1QUkVTQSIsIk5PTUVSRUQiLCJwYXBlciIsImRpcmVjdGlvbiIsInBlcm1pc3Npb25zIiwiY29uc3VsdGFyUHJvZHV0b3MiLCJwYXJhbWV0cm9zR2VyYWlzIiwiY29udGFzQVJlY2ViZXIiLCJhbHRlcmFBZG1Db252ZW5pbyIsImRpZ2l0YWNhb0ludmVudGFyaW8iLCJjb25zdWx0YXJJbnZlbnRhcmlvcyIsImNvbXByYXNSZXF1aXNpdGFyIiwiY29tcHJhc0NvbnN1bHRhciIsImNvbXByYXNQYWluZWxEb0NvbXByYWRvciIsImRlbWFuZGFyUmVwb3NpY2FvIiwidmlzdWFsaXphclJlcG9zaWNvZXMiLCJjb25maWd1cmFjb2VzIiwicGVybWlzc29lcyIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFO0FBREwsS0FEaUM7QUFJdkNDLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUVKLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxNQUFiLEdBQXNCLENBRHhCO0FBRU5DLGdCQUFVLEVBQUVOLEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsQ0FBQyxPQUFELEVB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QUFBYyxxQkFBTyxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZUSjtBQUFBLGtCQURGO0FBZ1lEOztHQXRadUJaLE07VUFLTnBELFMsRUFDRnlELGlFLEVBSTRCTSx1RDs7O0tBVnBCWCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnN1bHRhci1pbnZlbnRhcmlvcy43MTk0OWEzMjAzMWEyZDdmNjllNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBcHBCYXIsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIFRvb2xiYXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEZhUmVnTW9uZXlCaWxsQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7XHJcbiAgRmlDaGV2cm9uTGVmdCxcclxuICBGaUNoZXZyb25SaWdodCxcclxuICBGaURvbGxhclNpZ24sXHJcbiAgRmlFZGl0LFxyXG4gIEZpR3JpZCxcclxuICBGaUxpc3QsXHJcbiAgRmlMb2dPdXQsXHJcbiAgRmlNZW51LFxyXG4gIEZpUGFja2FnZSxcclxuICBGaVNlYXJjaCxcclxuICBGaVNldHRpbmdzLFxyXG4gIEZpVG9vbCxcclxuICBGaVVzZXIsXHJcbiAgRmlDcmVkaXRDYXJkLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVCYXJjb2RlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgTW91c2VUb29sVGlwIGZyb20gXCJyZWFjdC1zdGlja3ktbW91c2UtdG9vbHRpcFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXV0aFwiO1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIH0sXHJcbiAgYXBwQmFyOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFtcIndpZHRoXCIsIFwibWFyZ2luXCJdLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgYXBwQmFyU2hpZnQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoW1wid2lkdGhcIiwgXCJtYXJnaW5cIl0sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IDM2LFxyXG4gICAgW1wiQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KVwiXToge1xyXG4gICAgICBtYXJnaW5SaWdodDogXCIxcmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGlkZToge1xyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgfSxcclxuICBkcmF3ZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCIjMjMzNTQ4XCIsXHJcbiAgfSxcclxuICBkcmF3ZXJPcGVuOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMzM1NDhcIixcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgcGFkZGluZ1RvcDogXCIxZW1cIixcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXJcIjoge1xyXG4gICAgICB3aWR0aDogNCxcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXCI6IHtcclxuICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMylgLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjEsIDE1NCwgNjYsIDAuNylcIixcclxuICAgICAgb3V0bGluZTogYDFweCBzb2xpZCBzbGF0ZWdyZXlgLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRyYXdlckJhY2tncm91bmQ6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzIzMzU0OFwiLFxyXG4gIH0sXHJcbiAgZHJhd2VyQ2xvc2U6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzIzMzU0OFwiLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpICsgMSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg4KSArIDEsXHJcbiAgICB9LFxyXG4gICAgcGFkZGluZ1RvcDogXCIxZW1cIixcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXJcIjoge1xyXG4gICAgICB3aWR0aDogNCxcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXCI6IHtcclxuICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMylgLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjEsIDE1NCwgNjYsIDAuNylcIixcclxuICAgICAgb3V0bGluZTogYDFweCBzb2xpZCBzbGF0ZWdyZXlgLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRvb2xiYXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgaGVpZ2h0OiBcIjg0cHhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXHJcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgbWFyZ2luOiBcIjAgMCAwIGF1dG9cIixcclxuICAgIFtcIkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweClcIl06IHtcclxuICAgICAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIixcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgbWFyZ2luOiBcIjAgMCAwIGF1dG9cIixcclxuICAgIHdpZHRoOiBcIjI1MHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbiAgbW9iTG9nbzoge1xyXG4gICAgbWFyZ2luOiBcIjAgMCAwIGF1dG9cIixcclxuICAgIHdpZHRoOiBcIjE0MHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbiAgc2hpZnRUZXh0TGVmdDoge1xyXG4gICAgbWFyZ2luTGVmdDogXCIwcHhcIixcclxuICB9LFxyXG4gIHNoaWZ0VGV4dFJpZ2h0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xyXG4gIG9wZW46IGJvb2xlYW47XHJcbiAgaGFuZGxlRHJhd2VyT3BlbjogKCkgPT4gdm9pZDtcclxuICBoYW5kbGVEcmF3ZXJDbG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHtcclxuICBvcGVuLFxyXG4gIGhhbmRsZURyYXdlck9wZW4sXHJcbiAgaGFuZGxlRHJhd2VyQ2xvc2UsXHJcbn06IEhlYWRlclByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgY29uc3QgW3RvZ2dsZU1vdXNlVG9vbHRpcCwgc2V0VG9nZ2xlTW91c2VUb29sdGlwXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbdGl0bGVUb29sdGlwLCBzZXRUaXRsZVRvb2x0aXBdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCB7IGxvZ291dCwgdXNlciwgZmlsaWFsUHJpbmNpcGFsIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHdpbmRvd1NpemUgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjb25zdCBtYXhNb2JTaXplID0gNzAwO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAgPSAoc3RhdGU6IGJvb2xlYW4sIHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghb3Blbikge1xyXG4gICAgICBzZXRUaXRsZVRvb2x0aXAodGl0bGUpO1xyXG4gICAgICBzZXRUb2dnbGVNb3VzZVRvb2x0aXAoc3RhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPEFwcEJhclxyXG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMyMzM1NDhcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMC42cmVtIDAuNnJlbVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYXBwQmFyLCB7XHJcbiAgICAgICAgICBbY2xhc3Nlcy5hcHBCYXJTaGlmdF06IG9wZW4sXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubWVudUJ1dHRvbiwge1xyXG4gICAgICAgICAgICAgIFtjbGFzc2VzLmhpZGVdOiBvcGVuLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZpTWVudSBjb2xvcj1cIiNERDlBNDJcIiBzaXplPXszMH0gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIHt1c2VyICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJJbmZvfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclVzZXJJbmZvfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW5Vc2VyfT57dXNlci5VU1VBUklPfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW5GaWxpYWx9PlxyXG4gICAgICAgICAgICAgICAgICB7YCR7ZmlsaWFsUHJpbmNpcGFsLkNPREVNUFJFU0F9IC0gJHtmaWxpYWxQcmluY2lwYWwuTk9NRVJFRH1gfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxGaUxvZ091dCBvbkNsaWNrPXtsb2dvdXR9IHNpemU9ezIwfSBjb2xvcj1cIiNmNGY0ZjRcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dTaXplID4gbWF4TW9iU2l6ZSA/IGNsYXNzZXMubG9nbyA6IGNsYXNzZXMubW9iTG9nb1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3V0aWxpdGFyaW9zLWxvZ28ucG5nXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICB7d2luZG93U2l6ZSA+IG1heE1vYlNpemUgPyAoXHJcbiAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgIHBhcGVyOiBjbHN4KHtcclxuICAgICAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJPcGVuXTogb3BlbixcclxuICAgICAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJDbG9zZV06ICFvcGVuLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfT5cclxuICAgICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSBcInJ0bFwiID8gKFxyXG4gICAgICAgICAgICAgICAgPEZpQ2hldnJvblJpZ2h0IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxGaUNoZXZyb25MZWZ0IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TGlzdCBjbGFzc05hbWU9XCJzaWRlQmFyLXVsXCI+XHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb25zdWx0YXJQcm9kdXRvcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29uc3VsdGFyLXByb2R1dG9cIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiQ29uc3VsdGFyIFByb2R1dG9cIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAoZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVNlYXJjaCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJDb25zdWx0YXIgUHJvZHV0b3NcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLnBhcmFtZXRyb3NHZXJhaXMgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL3BhcmFtZXRyb3MtZ2VyYWlzXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9jb25zdWx0YXItcHJvZHV0b1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAodHJ1ZSwgXCJQYXLDom1ldHJvcyBHZXJhaXNcIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAoZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVRvb2wgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiUGFyw6JtZXRyb3MgR2VyYWlzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9nZXJhci1jb2QtYmFycmFzXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvY29uc3VsdGFyLXByb2R1dG9cIlxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAodHJ1ZSwgXCJHZXJhciBDw7NkaWdvIGRlIEJhcnJhc1wiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcChmYWxzZSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVCYXJjb2RlIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJHZXJhciBDw7NkaWdvIGRlIEJhcnJhc1wifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29udGFzQVJlY2ViZXIgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL3JlY2ViZXJcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2NvbnN1bHRhci1wcm9kdXRvXCJcclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcCh0cnVlLCBcIkNvbnRhcyBhIFJlY2ViZXJcIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAoZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYVJlZ01vbmV5QmlsbEFsdCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJDb250YXMgYSBSZWNlYmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5hbHRlcmFBZG1Db252ZW5pbyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYWx0ZXJhLWFkbS1jb252ZW5pb1wiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29uc3VsdGFyLXByb2R1dG9cIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiQ29uc3VsdGFyIFByb2R1dG9cIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAoZmFsc2UsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaUNyZWRpdENhcmQgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiQWx0ZXJhciBBZG0uIENvbnbDqm5pb1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmRpZ2l0YWNhb0ludmVudGFyaW8gIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RpZ2l0YWNhby1pbnZlbnRhcmlvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpRWRpdCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJEaWdpdGHDp8OjbyBkZSBJbnZlbnTDoXJpb1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29uc3VsdGFySW52ZW50YXJpb3MgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbnN1bHRhci1pbnZlbnRhcmlvc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaUxpc3Qgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiQ29uc3VsdGFyIEludmVudMOhcmlvc1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc1JlcXVpc2l0YXIgIT09IFwiU0VNX0FDRVNTT1wiICYmXHJcbiAgICAgICAgICAgICAgdXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc0NvbnN1bHRhciAhPT0gXCJTRU1fQUNFU1NPXCIgJiZcclxuICAgICAgICAgICAgICB1c2VyPy5wZXJtaXNzaW9ucy5jb21wcmFzUGFpbmVsRG9Db21wcmFkb3IgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb21wcmFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGaURvbGxhclNpZ24gc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJDb21wcmFzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmRlbWFuZGFyUmVwb3NpY2FvICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9kZW1hbmRhci1yZXBvc2ljYW9cIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlQYWNrYWdlIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkRlbWFuZGFyIFJlcG9zacOnw6NvXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy52aXN1YWxpemFyUmVwb3NpY29lcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29uc3VsdGFyLXJlcG9zaWNvZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlHcmlkIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIlZpc3VhbGl6YXIgUmVwb3Npw6fDtWVzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29uZmlndXJhY29lcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29uZmlndXJhY29lc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVNldHRpbmdzIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkNvbmZpZ3VyYcOnw7Vlc1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnM/LnBlcm1pc3NvZXMgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Blcm1pc3NvZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlVc2VyIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIlBlcm1pc3PDtWVzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlciBcIiB9fSBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPEZpTG9nT3V0IHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJTYWlyXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDxNb3VzZVRvb2xUaXBcclxuICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAyMTQ3NDgzNjQ3IH19XHJcbiAgICAgICAgICAgIHZpc2libGU9e3RvZ2dsZU1vdXNlVG9vbHRpcH1cclxuICAgICAgICAgICAgb2Zmc2V0WD17MTV9XHJcbiAgICAgICAgICAgIG9mZnNldFk9ezEwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9ic2VydmFjYW8tY29tcHJhXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3RpdGxlVG9vbHRpcH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Nb3VzZVRvb2xUaXA+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICBwYXBlcjogY2xzeChjbGFzc2VzLmRyYXdlckJhY2tncm91bmQpLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJ0ZW1wb3JhcnlcIlxyXG4gICAgICAgICAgYW5jaG9yPVwidG9wXCJcclxuICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJDbG9zZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlzdCBjbGFzc05hbWU9XCJzaWRlQmFyLXVsXCI+XHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb25zdWx0YXJQcm9kdXRvcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29uc3VsdGFyLXByb2R1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlTZWFyY2ggc2l6ZT17MzB9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e1wiQ29uc3VsdGFyIFByb2R1dG9zXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuZGlnaXRhY2FvSW52ZW50YXJpbyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGlnaXRhY2FvLWludmVudGFyaW9cIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlFZGl0IHNpemU9ezMwfSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtcIkRpZ2l0YcOnw6NvIGRlIEludmVudMOhcmlvXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb21wcmFzUmVxdWlzaXRhciAhPT0gXCJTRU1fQUNFU1NPXCIgfHxcclxuICAgICAgICAgICAgICB1c2VyPy5wZXJtaXNzaW9ucy5jb21wcmFzQ29uc3VsdGFyICE9PSBcIlNFTV9BQ0VTU09cIiB8fFxyXG4gICAgICAgICAgICAgIHVzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNQYWluZWxEb0NvbXByYWRvciAhPT0gXCJTRU1fQUNFU1NPXCIgfHwgKFxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbXByYXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpRG9sbGFyU2lnbiBzaXplPXszMH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e1wiQ29tcHJhc1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuZGVtYW5kYXJSZXBvc2ljYW8gIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbWFuZGFyLXJlcG9zaWNhb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVBhY2thZ2Ugc2l6ZT17MzB9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e1wiRGVtYW5kYXIgUmVwb3Npw6fDo29cIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICAgICAgPExpc3RJdGVtIG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8RmlMb2dPdXQgc2l6ZT17MzB9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17XCJTYWlyXCJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9